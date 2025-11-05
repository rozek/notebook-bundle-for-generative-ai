/*******************************************************************************
*                                                                              *
*                      notebook-bundle-for-generative-ai                       *
*                                                                              *
*******************************************************************************/

  import {
//  throwError,
    ValueIsNumberInRange, ValueIsInteger, ValueIsOrdinal,
    ValueIsText, ValueIsTextline, ValueIsNonEmptyString,
    ValueIsOneOf,
    ValueIsURL,
    allowedCardinal, expectCardinal,
    expectText, expectTextline,
    expectPlainObject,
    expectList, expectListSatisfying,
    expectFunction,
    expectURL,
  } from 'javascript-interface-library'

  import { render, html }                              from 'htm/preact'
  import { createContext, toChildArray, cloneElement } from 'preact'
  import { createPortal }                              from 'preact/compat'
  import { useId, useRef, useState, useEffect, useCallback, useMemo, useContext } from 'preact/hooks'
  type VNode = any

  import { useAutoAnimate } from '@formkit/auto-animate/preact'

  import * as sim from 'sim-components'

/**** make some existing types indexable ****/

  interface Indexable { [Key:string]:any }

/**** define serializable types ****/

  type serializableValue  = null | boolean | number | string |
                            serializableObject | serializableArray
  type serializableObject = { [Key:string]:serializableValue }
  type serializableArray  = serializableValue[]
  type Serializable       = serializableObject

/**** throwError - simplifies construction of named errors ****/

  export function throwError (Message:string):never {
debugger
    let Match = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(Message)
    if (Match == null) {
      throw new Error(Message)
    } else {
      let namedError = new Error(Match[2])
        namedError.name = Match[1]
      throw namedError
    }
  }

/**** fetched - returns the "fetch" response, not a text/json/blob/... ****/

  export async function fetched (ResourceURL:string, OptionSet:Indexable = {}) {
    expectURL      ('resource URL',ResourceURL)
    expectPlainObject('option set',OptionSet)

    OptionSet = {...OptionSet}                   // allows modifying "OptionSet"

  /**** Preparation: Timeout Handling ****/

    let Timeout = allowedCardinal('request timeout',OptionSet.timeout) || 10*1000

    let TimeoutController = new AbortController()
    OptionSet.signal = TimeoutController.signal

    let RequestTimedOut = false
    let RequestTimer = setTimeout(() => {
      RequestTimedOut = true
      TimeoutController.abort()
    }, Timeout)

  /**** now fetch and handle common runtime errors ****/

    let Response
    try {
      Response = await fetch(ResourceURL,OptionSet)
      clearTimeout(RequestTimer)
    } catch (Signal:any) {
      if (                 // timeout by fetch or cancellation by internal timer
        RequestTimedOut || Signal.message.includes('timeout')
      ) throwError('ServerUnreachable: the server is unreachable')

      if (                                              // explicit cancellation
        (Signal.name === 'AbortError') ||
        Signal.message.includes('The user aborted a request')
      ) throwError(
        'RequestAborted: request was aborted'
      )

      throwError('ServerUnreachable: the server is unreachable')
    }

  /**** HTTP Status Code Handling ****/

    switch (true) {
      case (Response.status === 401):
        throwError('AuthorizationFailure: authorization failed')
      case (Response.status === 403):
        throwError('ForbiddenRequest: request is forbidden')
      case (Response.status === 404):
        throwError('MissingResource: resource not found')
      case (Response.status === 408):
        throwError('RequestTimeout: request timed out')
      case (Response.status === 429):
        throwError('RateLimitExceeded: too many requests')
      case (Response.status === 500):
        throwError('InternalServerError: internal server error')
      case (Response.status === 502):
        throwError('BadGateway: bad gateway')
      case (Response.status === 503):
        throwError('ServiceUnavailable: service is currently not available')
      case (Response.status === 504):
        throwError('GatewayTimeout: gateway timed out')
      case (Response.status >= 400):
        throwError(
          'HTTPError: request failed with status ' + Response.status
        )
    }

  /**** otherwise: success! ****/

    return Response
  }

/**** ServerIsReachable ****/

  export async function ServerIsReachable (
    ServerURL:string, Timeout:number = 5000
  ) {
    expectURL  ('server URL',ServerURL)
    expectCardinal('timeout',Timeout)

    const ServerHost = new URL(ServerURL).host
    if (ServerHost === window.location.host) { return true }

    const TimeoutController = new AbortController()

    const RequestTimer = setTimeout(
      () => TimeoutController.abort(), Timeout
    )

    try {
      const Response = await fetch('https://' + ServerHost, {
        method: 'HEAD',
        signal: TimeoutController.signal
      })

      clearTimeout(RequestTimer)
      return true
    } catch (Signal) {
      clearTimeout(RequestTimer)
      return false
    }
  }

/**** preact ****/

  export function preact (Callback:Function):HTMLElement {
    expectFunction('preact function component',Callback)

    const Result:HTMLElement = document.createElement('div')
      render(html`<${Callback}/>`,Result)
    return Result
  }

/**** labelledTextView ****/

  export function labelledTextView (Label:string, Text:string):HTMLElement {
    expectTextline   ('label',Label)
    expectText('text to show',Text)

    return preact(() => html`
      <${sim.vertical}>
        <${sim.Label}    value=${Label}>
        <${sim.TextView} value=${Text} style="width:560px; height:380px"/>
      </>
    `)
  }

