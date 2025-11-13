/*******************************************************************************
*                                                                              *
*                      notebook-bundle-for-generative-ai                       *
*                                                                              *
*******************************************************************************/

  import {
//  throwError,      // will be redefined locally because of TypeScript compiler
  quoted,
    ValueIsNumberInRange, ValueIsInteger, ValueIsOrdinal,
    ValueIsString, ValueIsText, ValueIsTextline, ValueIsNonEmptyString,
    ValueIsListSatisfying,
    ValueIsOneOf,
    ValueIsURL,
  ValidatorForClassifier, acceptNil,rejectNil,
    expectBoolean,
    expectIntegerInRange, allowedCardinal, expectCardinal,
    expectText, expectTextline,
    expectPlainObject,
    expectList, expectListSatisfying,
    expectFunction,
    allowURL, expectURL,
  } from 'javascript-interface-library'

  import { render, html }                              from 'htm/preact'
  import { createContext, toChildArray, cloneElement } from 'preact'
  import { createPortal }                              from 'preact/compat'
  import { useId, useRef, useState, useEffect, useCallback, useMemo, useContext } from 'preact/hooks'
  type VNode = any

  import { useAutoAnimate } from '@formkit/auto-animate/preact'

  import * as aim from 'aim-components'

/**** make some existing types indexable ****/

  interface Indexable { [Key:string]:any }

/**** define serializable types ****/

  type serializableValue  = null | boolean | number | string |
                            serializableObject | serializableArray
  type serializableObject = { [Key:string]:serializableValue }
  type serializableArray  = serializableValue[]
  type Serializable       = serializableObject

//------------------------------------------------------------------------------
//--                             Type Definitions                             --
//------------------------------------------------------------------------------

  export type AIM_Identifier   = string       // mainly for illustrative reasons
  export type AIM_AttrName     = string                                  // dto.
  export type AIM_Selector     = string                                  // dto.
  export type AIM_Ordinal      = number                                  // dto.
  export type AIM_Cardinal     = number                                  // dto.
  export type AIM_Text         = string                                  // dto.
  export type AIM_Textline     = string                                  // dto.
  export type AIM_Color        = string                                  // dto.
  export type AIM_EMailAddress = string                                  // dto.
  export type AIM_PhoneNumber  = string                                  // dto.
  export type AIM_URL          = string                                  // dto.

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

//------------------------------------------------------------------------------
//--                 Classification and Validation Functions                  --
//------------------------------------------------------------------------------

/**** ValueIsAbortSignal ****/

  export function ValueIsAbortSignal (Value:any):boolean {
    return (
      (typeof Value === 'object') && (Value != null) &&
      (typeof Value.aborted === 'boolean') &&
      (typeof Value.addEventListener === 'function')
    )
  }

/**** allow/expect[ed]AbortSignal ****/

  export const allowAbortSignal = ValidatorForClassifier(
    ValueIsAbortSignal, acceptNil, 'JavaScript abort signal'
  ), allowedAbortSignal = allowAbortSignal

  export const expectAbortSignal = ValidatorForClassifier(
    ValueIsAbortSignal, rejectNil, 'JavaScript abort signal'
  ), expectedAbortSignal = expectAbortSignal

/**** ValueIsISOLanguageCode ****/

  const ISO_639_1_Codes:Set<string> = new Set([
    "aa","ab","ae","af","ak","am","an","ar","as","av","ay","az",
    "ba","be","bg","bh","bi","bm","bn","bo","br","bs",
    "ca","ce","ch","co","cr","cs","cu","cv","cy",
    "da","de","dv","dz",
    "ee","el","en","eo","es","et","eu",
    "fa","ff","fi","fj","fo","fr","fy",
    "ga","gd","gl","gn","gu","gv",
    "ha","he","hi","ho","hr","ht","hu","hy","hz",
    "ia","id","ie","ig","ii","ik","io","is","it","iu",
    "ja","jv",
    "ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky",
    "la","lb","lg","li","ln","lo","lt","lu","lv",
    "mg","mh","mi","mk","ml","mn","mr","ms","mt","my",
    "na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny",
    "oc","oj","om","or","os",
    "pa","pi","pl","ps","pt",
    "qu",
    "rm","rn","ro","ru","rw",
    "sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw",
    "ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty",
    "ug","uk","ur","uz",
    "ve","vi","vo",
    "wa","wo",
    "xh",
    "yi","yo",
    "za","zh","zu"
  ])

  export function ValueIsISOLanguageCode (Value:any):boolean {
    return ValueIsString(Value) && ISO_639_1_Codes.has(Value.toLowerCase())
  }

/**** allow/expect[ed]ISOLanguageCode ****/

  export const allowISOLanguageCode = ValidatorForClassifier(
    ValueIsISOLanguageCode, acceptNil, 'ISO 639-1 Language Code'
  ), allowedISOLanguageCode = allowISOLanguageCode

  export const expectISOLanguageCode = ValidatorForClassifier(
    ValueIsISOLanguageCode, rejectNil, 'ISO 639-1 Language Code'
  ), expectedISOLanguageCode = expectISOLanguageCode

//------------------------------------------------------------------------------
//--                           Provider Management                            --
//------------------------------------------------------------------------------

  export const AIM_AICapabilities = [
    'TextCompletion',
    'ImageDescription',
    'ImageGeneration'
  ]
  export type AIM_AICapability = typeof AIM_AICapabilities[number]

//------------------------------------------------------------------------------
//--                                 Fencing                                  --
//------------------------------------------------------------------------------

/**** fencedText ****/

  export function fencedText (Text:AIM_Text, withFences:boolean = true):AIM_Text {
    expectText      ('text to be fenced',Text)
    expectBoolean('fence insertion flag',withFences)

    Text = Text.replace(/»/g,'\\\\xBB').replace(/«/g,'\\\\xAB') // escape "»" and "«"
    return (withFences ? `»»»\n${Text}\n«««` : Text)
  }

/**** unfencedText - unfences the first fenced region only ****/

  export function unfencedText (Text:AIM_Text):AIM_Text {
    expectText('text to be unfenced',Text)

    Text = Text.replace(/^[\s\S]*»»»/,'').replace(/«««[\s\S]*$/,'')
    return Text.replace(/\\\\xBB/gi,'»').replace(/\\\\xAB/gi,'«') // unescape "»" and "«"
      .replace(/^\s*\n/,'')                        // remove leading empty lines
      .replace(/\n\s*$/,'\n')                     // remove trailing empty lines
  }

/**** TextFilledFrom - fills {{variable}} with some text ****/

  export function TextFilledFrom (Text:AIM_Text, VariableSet:Indexable):AIM_Text {
    expectText  ('text to be filled',Text)
    expectPlainObject('variable set',VariableSet)

    return Text.replace(/\{\{([^}]+)\}\}/g, (Match:string,Key:string) => {
      if (Key === '') { return '{{' }

      if (Key.startsWith('~')) {       // var.s starting with '~' will be fenced
        Key = Key.slice(1)
        return (VariableSet[Key] == null ? Match : fencedText(VariableSet[Key]))
      } else {
        return (VariableSet[Key] == null ? Match : VariableSet[Key])
      }
    })
  }

//------------------------------------------------------------------------------
//--                             Network Support                              --
//------------------------------------------------------------------------------

/**** ServerIsReachable ****/

  export async function ServerIsReachable (
    ServerURL:AIM_URL, Timeout:number = 5000
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

/**** fetched ****/

  export async function fetched (
    ResourceURL:AIM_URL, OptionSet:Indexable = {}
  ):Promise<any> {
    expectURL      ('resource URL',ResourceURL)
    expectPlainObject('option set',OptionSet)

    OptionSet = {...OptionSet}                   // allows modifying "OptionSet"

  /**** Preparation: Timeout Handling ****/

    let Timeout = allowedCardinal('request timeout',OptionSet.timeout) ?? 10*1000

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
        if (OptionSet.allowRetries == true) { break }
        throwError('RateLimitExceeded: too many requests')
      case (Response.status === 500):
        throwError('InternalServerError: internal server error')
      case (Response.status === 502):
        throwError('BadGateway: bad gateway')
      case (Response.status === 503):
        if (OptionSet.allowRetries == true) { break }
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
/**** fetchedText ****/

  export async function fetchedText (
    URL:AIM_URL, OptionSet:Indexable = {}
  ):Promise<AIM_Text> {
    const Result = await fetched(URL,OptionSet)
    return await Result.text()
  }

/**** fetchedJSON ****/

  export async function fetchedJSON (
    URL:AIM_URL, OptionSet:Indexable = {}
  ):Promise<Serializable> {
    const Result = await fetched(URL,OptionSet)
    return await Result.json()
  }

/**** fetchedBinary ****/

  export async function fetchedBinary (
    URL:AIM_URL, OptionSet:Indexable = {}
  ):Promise<ArrayBuffer> {
    const Result = await fetched(URL,OptionSet)
    return await Result.arrayBuffer()
  }

/**** fetchedBlob ****/

  export async function fetchedBlob (
    URL:AIM_URL, OptionSet:Indexable = {}
  ):Promise<Blob> {
    const Result = await fetched(URL,OptionSet)
    return await Result.blob()
  }

/**** fetchedDataURL ****/

  export async function fetchedDataURL (
    URL:AIM_URL, OptionSet:Indexable = {}
  ):Promise<AIM_URL> {
    const Result = await fetched(URL,OptionSet)
    const Blob   = await Result.blob()
    return new Promise((resolve,reject) => {
      const Reader = new FileReader()
        Reader.onloadend = () => resolve(Reader.result as AIM_URL)
        Reader.onerror   = reject
      Reader.readAsDataURL(Blob)
    })
  }
/**** DescriptionOfHTTPStatus ****/

  export const HTTPMessageForStatus:{[code:number]:AIM_Textline} = {
  /**** 1xx Informational ****/

    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    103: 'Early Hints',

  /**** 2xx Success ****/

    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',

  /**** 3xx Redirection ****/

    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',

  /**** 4xx Client Error ****/

    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a Teapot",
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',

  /**** 5xx Server Error ****/

    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    510: 'Not Extended',
    511: 'Network Authentication Required'
  }

  export function DescriptionOfHTTPStatus (StatusCode:AIM_Ordinal):AIM_Textline {
    expectIntegerInRange('HTTP status code',StatusCode, 0,599)
    return HTTPMessageForStatus[StatusCode] ?? ''
  }

//------------------------------------------------------------------------------
//--                             SearXNG Support                              --
//------------------------------------------------------------------------------

/**** SearXNGServers - fetches the list of registered SearXNG servers ****/

  export async function SearXNGServers (
    OptionSet:Indexable = {}
  ):Promise<string[]> {
    expectPlainObject('option set',OptionSet)

    const { ServiceURL,Signal, ...RestOptions } = OptionSet
      allowURL       ('SearXNG service URL',ServiceURL)
      allowAbortSignal('fetch abort signal',Signal)

    let Response:any
    try {
      Response = await fetched(
        ServiceURL ?? 'https://searx.space/data/instances.json', {
          ...RestOptions,
          ...(Signal != null ? { signal:Signal } : {}),
        }
      )
      if (Response.ok) {
        const URLList = Object.keys((await Response.json()).instances)
          .filter((Server:string) => ! SearXNGServerIsBlacklisted(Server))
        if (ValueIsListSatisfying(URLList,ValueIsURL)) {
          return URLList
        }
      }
    } catch (Signal:any) {
      if (Signal.name === 'AbortError') {
        throwError('Aborted: SearXNG server scan was aborted')
      } else {
        throwError('InternalError: SearXNG server scan failed with ' + Signal)
      }
    }

    const StatusText = DescriptionOfHTTPStatus(Response.status)
    throwError(
      'InternalError: SearXNG server scan failed with HTTP status ' +
      Response.status + ' ' + StatusText
    )
    return []
  }

/**** [un]blacklistSearXNGServer ****/

  export const SearXNGServerBlackList = Object.create(null)

  export function blacklistSearXNGServer (ServerURL:AIM_URL):void {
    expectURL('server URL',ServerURL)
    SearXNGServerBlackList[ServerURL] = true
  }

  export function unblacklistSearXNGServer (ServerURL:AIM_URL):void {
    expectURL('server URL',ServerURL)
    delete SearXNGServerBlackList[ServerURL]
  }

/**** SearXNGServerIsBlacklisted ****/

  export function SearXNGServerIsBlacklisted (ServerURL:AIM_URL):boolean {
    expectURL('server URL',ServerURL)
    return (ServerURL in SearXNGServerBlackList)
  }

/**** SearXNGResultIsBlacklisted ****/

  export const SearXNGResultBlackList = [
    'https://www.sjmed.com'
  ]

  export function SearXNGResultIsBlacklisted (ResultURL:AIM_URL):boolean {
    expectURL('result URL',ResultURL)
    return SearXNGResultBlackList.some(
      (forbiddenURL:AIM_URL) => ResultURL.startsWith(forbiddenURL)
    )
  }

/**** nextSearXNGServer ****/

  let _SearXNGServers:AIM_URL[] = []

  export async function nextSearXNGServer ():Promise<AIM_URL|undefined> {
    if (_SearXNGServers.length === 0) {
      _SearXNGServers = await SearXNGServers()
    }

    if (_SearXNGServers.length === 0) {
      return undefined
    } else {
      const randomIndex = Math.floor(Math.random()*_SearXNGServers.length)
      return _SearXNGServers.splice(randomIndex,1)[0]
    }
  }

/**** SearXNGQuery - uses SearXNG to perform a given query ****/

  export async function SearXNGQuery (
    SearXNGServer:AIM_URL, SearchPhrase:AIM_Textline
  ):Promise<AIM_URL[]> {
    expectURL    ('SearXNG Server',SearXNGServer)
    expectTextline('search phrase',SearchPhrase)

    SearchPhrase = SearchPhrase.trim()
    if (SearchPhrase === '') throwError(
      'EmptyArgument: the given search phrase is empty'
    )

    const Parameters = new URLSearchParams({
      q:SearchPhrase, language:'en',
      format:'html', categories:'general', num_results:'20'
    })

    try {
      const Response = await fetched(`${SearXNGServer}/search?${Parameters}`)
      if (Response.ok) {
        const HTML = await Response.text()

        let URLList = Array.from(HTML.matchAll(/<h3><a href="([^"]+)"/g))
          .map((Match:any) => Match[1])
          .filter((URL) => (URL != null) && (URL.trim() !== ''))

        let filteredURLList = URLList.filter((URL) => ! SearXNGResultIsBlacklisted(URL))
        if ((filteredURLList.length === 0) && (URLList.length > 0)) {
          blacklistSearXNGServer(SearXNGServer)
        }
        return filteredURLList
      } else {
        throwError('HTTP status ' + Response.status)
      }
    } catch (Signal:any) {
      if ([
        'ServerUnreachable','AuthorizationFailure','ForbiddenRequest','InternalServerError'
      ].indexOf(Signal.name) >= 0) {
        blacklistSearXNGServer(SearXNGServer)
        console.warn('SearXNG search failed with',Signal,'\n\n>>>> server was blacklisted\n')
      } else {
        console.warn('SearXNG search failed with',Signal)
      }
    }

    return []
  }

/**** preact ****/

  export function preact (Callback:Function):HTMLElement {
    expectFunction('preact function component',Callback)

    const Result:HTMLElement = document.createElement('div')
      render(html`<${Callback}/>`,Result)
    return Result
  }

/**** labelledTextView ****/

  export function labelledTextView (Label:AIM_Textline, Text:AIM_Text):HTMLElement {
    expectTextline   ('label',Label)
    expectText('text to show',Text)

    return preact(() => html`
      <${aim.vertical}>
        <${aim.Label}     value=${Label}/>
        <${aim.TextInput} value=${Text} readonly style="width:560px; height:380px"/>
      </>
    `)
  }

