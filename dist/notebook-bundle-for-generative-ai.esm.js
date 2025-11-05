var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var javascriptInterfaceLibrary_umd = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    n(exports);
  }(commonjsGlobal, function(e) {
    var n = Function("return this")();
    function t(e2, n2) {
      return null == e2 || "hasOwnProperty" in e2 && "function" == typeof e2.hasOwnProperty ? e2.hasOwnProperty(n2) : Object.prototype.hasOwnProperty.call(e2, n2);
    }
    function r(e2, n2) {
      return null == e2 || "isPrototypeOf" in e2 && "function" == typeof e2.isPrototypeOf ? e2.isPrototypeOf(n2) : Object.prototype.isPrototypeOf.call(e2, n2);
    }
    function a(e2) {
      var n2 = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e2);
      if (null == n2) throw new Error(e2);
      var t2 = new Error(n2[2]);
      throw t2.name = n2[1], t2;
    }
    function i(e2) {
      return "boolean" == typeof e2 || e2 instanceof Boolean;
    }
    function o(e2) {
      return "number" == typeof e2 || e2 instanceof Number;
    }
    function l(e2) {
      return ("number" == typeof e2 || e2 instanceof Number) && isFinite(e2.valueOf());
    }
    function u(e2) {
      return ("number" == typeof e2 || e2 instanceof Number) && isNaN(e2.valueOf());
    }
    function c(e2) {
      return ("number" == typeof e2 || e2 instanceof Number) && (e2 = e2.valueOf(), isFinite(e2) && Math.round(e2) === e2);
    }
    function s(e2) {
      return ("number" == typeof e2 || e2 instanceof Number) && (e2 = e2.valueOf(), isFinite(e2) && Math.round(e2) === e2 && e2 >= 0);
    }
    function g(e2) {
      return ("number" == typeof e2 || e2 instanceof Number) && (e2 = e2.valueOf(), isFinite(e2) && Math.round(e2) === e2 && e2 >= 1);
    }
    function f(e2) {
      return "string" == typeof e2 || e2 instanceof String;
    }
    var b = /^\s*$/;
    function p(e2) {
      return ("string" == typeof e2 || e2 instanceof String) && !b.test(e2.valueOf());
    }
    function d(e2, n2) {
      return ("string" == typeof e2 || e2 instanceof String) && n2.test(e2.valueOf());
    }
    var v = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
    function m(e2) {
      return d(e2, v);
    }
    var x = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
    function y(e2) {
      return d(e2, x);
    }
    function h(e2) {
      return "function" == typeof e2;
    }
    function w(e2) {
      return "function" == typeof e2 && (null == e2.name || "" === e2.name);
    }
    function I(e2) {
      return "function" == typeof e2 && null != e2.name && "" !== e2.name;
    }
    function O(e2) {
      return "function" == typeof e2 && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e2.toString());
    }
    function F(e2) {
      return "function" == typeof e2 && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e2.toString());
    }
    function S(e2) {
      return null != e2 && "object" == typeof e2;
    }
    function N(e2) {
      return null != e2 && "object" == typeof e2 && Object.getPrototypeOf(e2) === Object.prototype;
    }
    function A(e2) {
      return null != e2 && "object" == typeof e2 && !(e2 instanceof Object);
    }
    var j = Array.isArray;
    function V(e2, n2, t2) {
      if (j(e2)) {
        for (var r2 = 0, a2 = e2.length; r2 < a2; r2++) if (void 0 === e2[r2]) return false;
        return !(null != n2 && e2.length < n2) && !(null != t2 && e2.length > t2);
      }
      return false;
    }
    function E(e2, n2, t2, r2) {
      if (j(e2)) try {
        for (var a2 = 0, i2 = e2.length; a2 < i2; a2++) if (0 == n2(e2[a2])) return false;
        return !(null != t2 && e2.length < t2) && !(null != r2 && e2.length > r2);
      } catch (e3) {
      }
      return false;
    }
    function k(e2) {
      return e2 instanceof Date;
    }
    function M(e2) {
      return e2 instanceof Error;
    }
    function P(e2) {
      return null != e2 && "function" == typeof e2.then;
    }
    function R(e2) {
      return e2 instanceof RegExp;
    }
    function C(e2, n2) {
      return n2.indexOf(e2) >= 0;
    }
    function J(e2) {
      return f(e2) && (Pt.hasOwnProperty(e2) || /^#[a-fA-F0-9]{6}$/.test(e2) || /^#[a-fA-F0-9]{8}$/.test(e2) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(e2) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(e2));
    }
    var L = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    function $(e2) {
      return d(e2, L);
    }
    var z = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
    function T(e2) {
      if (!d(e2, z) || "" === e2) return false;
      try {
        return new URL(e2, "file://"), true;
      } catch (e3) {
        return false;
      }
    }
    var B = false, q = true;
    function D(e2, n2, t2, r2, i2) {
      if (null == n2) {
        if (r2) return n2;
        a("MissingArgument: no ".concat(At(e2), " given"));
      } else if (t2(n2)) switch (true) {
        case n2 instanceof Boolean:
        case n2 instanceof Number:
        case n2 instanceof String:
          return n2.valueOf();
        default:
          return n2;
      }
      else a("InvalidArgument: the given ".concat(At(e2), " is no valid ").concat(At(i2)));
    }
    function Z(e2, n2, t2) {
      var r2 = function(r3, a3) {
        return D(r3, a3, e2, n2, t2);
      }, a2 = e2.name;
      return null != a2 && /^ValueIs/.test(a2) ? _(r2, a2.replace(/^ValueIs/, n2 ? "allow" : "expect")) : r2;
    }
    function _(e2, n2) {
      if (null == e2 && a("MissingArgument: no function given"), "function" != typeof e2 && a("InvalidArgument: the given 1st Argument is not a JavaScript function"), null == n2 && a("MissingArgument: no desired name given"), "string" == typeof n2 || n2 instanceof String || a("InvalidArgument: the given desired name is not a string"), e2.name === n2) return e2;
      try {
        if (Object.defineProperty(e2, "name", { value: n2 }), e2.name === n2) return e2;
      } catch (e3) {
      }
      return new Function("originalFunction", "return function " + n2 + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(e2);
    }
    function U(e2, n2) {
      if (null != n2) return n2.valueOf();
      a("MissingArgument: no ".concat(At(e2), " given"));
    }
    var H = U, W = Z(i, q, "boolean value"), G = W, K = Z(i, B, "boolean value"), Q = K, X = Z(o, q, "numeric value"), Y = X, ee = Z(o, B, "numeric value"), ne = ee, te = Z(l, q, "finite numeric value"), re = te, ae = Z(l, B, "finite numeric value"), ie = ae, oe = Z(u, q, "NaN value"), le = oe, ue = Z(u, B, "NaN value"), ce = ue;
    function se(e2, n2, t2, r2, a2, i2) {
      return null == n2 ? n2 : be(e2, n2, t2, r2, a2, i2);
    }
    var ge = se;
    function fe(e2, n2, t2, r2, i2, o2) {
      if (ee(e2, n2), isNaN(n2) && a("InvalidArgument: the given ".concat(At(e2), " is not-a-number")), null == i2 && (i2 = true), null == o2 && (o2 = true), null != t2 && isFinite(t2)) {
        if (null != r2 && isFinite(r2)) {
          if (n2 < t2 || !i2 && n2 === t2 || n2 > r2 || !o2 && n2 === r2) throw new RangeError("the given ".concat(At(e2), " (").concat(n2, ") is outside ") + "the allowed range (".concat(t2, "...").concat(r2, ")"));
        } else if (n2 < t2 || !i2 && n2 === t2) throw new RangeError("the given ".concat(At(e2), " is below the allowed ") + "minimum (".concat(n2, " ").concat(i2 ? "<" : "<=", " ").concat(t2, ")"));
      } else if (null != r2 && isFinite(r2) && (n2 > r2 || !o2 && n2 === r2)) throw new RangeError("the given ".concat(At(e2), " exceeds the allowed ") + "maximum (".concat(n2, " ").concat(o2 ? ">" : ">=", " ").concat(r2, ")"));
      return n2.valueOf();
    }
    var be = fe, pe = Z(c, q, "integral numeric value"), de = pe, ve = Z(c, B, "integral numeric value"), me = ve;
    function xe(e2, n2, t2, r2) {
      return null == n2 ? n2 : we(e2, n2, t2, r2);
    }
    var ye = xe;
    function he(e2, n2, t2, r2) {
      if (ve(e2, n2), isNaN(n2) && a("InvalidArgument: the given ".concat(At(e2), " is not-a-number")), null != t2 && isFinite(t2)) {
        if (null != r2 && isFinite(r2)) {
          if (n2 < t2 || n2 > r2) throw new RangeError("the given ".concat(At(e2), " (").concat(n2, ") is outside ") + "the allowed range (".concat(t2, "...").concat(r2, ")"));
        } else if (n2 < t2) throw new RangeError("the given ".concat(At(e2), " is below the allowed ") + "minimum (".concat(n2, " < ").concat(t2, ")"));
      } else if (null != r2 && isFinite(r2) && n2 > r2) throw new RangeError("the given ".concat(At(e2), " exceeds the allowed ") + "maximum (".concat(n2, " > ").concat(r2, ")"));
      return n2.valueOf();
    }
    var we = he, Ie = Z(s, q, "ordinal number"), Oe = Ie, Fe = Z(s, B, "ordinal number"), Se = Fe, Ne = Z(g, q, "cardinal number"), Ae = Ne, je = Z(g, B, "cardinal number"), Ve = je, Ee = Z(f, q, "literal string"), ke = Ee, Me = Z(f, B, "literal string"), Pe = Me, Re = Z(p, q, "non-empty literal string"), Ce = Re, Je = Z(p, B, "non-empty literal string"), Le = Je;
    function $e(e2, n2, t2) {
      return null == n2 ? n2 : Be(e2, n2, t2);
    }
    var ze = $e;
    function Te(e2, n2, t2) {
      if (Me(e2, n2), t2.test(n2)) return n2.valueOf();
      a("InvalidArgument: the given ".concat(At(e2), " does not match the specified pattern"));
    }
    var Be = Te, qe = Z(m, q, "literal text"), De = qe, Ze = Z(m, B, "literal text"), _e = Ze, Ue = Z(y, q, "single line of text"), He = Ue, We = Z(y, B, "single line of text"), Ge = We, Ke = Z(h, q, "JavaScript function"), Qe = Ke, Xe = Z(h, B, "JavaScript function"), Ye = Xe, en = Z(w, q, "anonymous JavaScript function"), nn = en, tn = Z(w, B, "anonymous JavaScript function"), rn = tn, an = Z(I, q, "named JavaScript function"), on = an, ln = Z(I, B, "named JavaScript function"), un = ln, cn = Z(O, q, "native JavaScript function"), sn = cn, gn = Z(O, B, "native JavaScript function"), fn = gn, bn = Z(F, q, "scripted JavaScript function"), pn = bn, dn = Z(F, B, "scripted JavaScript function"), vn = dn, mn = Z(S, q, "JavaScript object"), xn = mn, yn = Z(S, B, "JavaScript object"), hn = yn, wn = Z(N, q, '"plain" JavaScript object'), In = wn, On = Z(N, B, '"plain" JavaScript object'), Fn = On, Sn = Z(A, q, '"vanilla" JavaScript object'), Nn = Sn, An = Z(A, B, '"vanilla" JavaScript object'), jn = An;
    function Vn(e2, n2) {
      return null == n2 ? n2 : Mn(e2, n2);
    }
    var En = Vn;
    function kn(e2, n2) {
      if (null == n2 && a("MissingArgument: no ".concat(At(e2), " given")), j(n2)) return n2;
      a("InvalidArgument: the given ".concat(At(e2), " is no JavaScript array"));
    }
    var Mn = kn;
    function Pn(e2, n2, t2, r2, a2) {
      return null == n2 ? n2 : Jn(e2, n2, t2, r2, a2);
    }
    var Rn = Pn;
    function Cn(e2, n2, t2, r2, i2) {
      if (null == n2 && a("MissingArgument: no ".concat(At(e2), " given")), V(n2, r2, i2)) return n2;
      a("InvalidArgument: the given ".concat(At(e2), " is ") + (null == t2 ? "either not a list or contains an invalid number of elements" : "no " + At(t2)));
    }
    var Jn = Cn;
    function Ln(e2, n2, t2, r2, a2, i2) {
      return null == n2 ? n2 : Tn(e2, n2, t2, r2, a2, i2);
    }
    var $n = Ln;
    function zn(e2, n2, t2, r2, i2, o2) {
      if (null == n2 && a("MissingArgument: no ".concat(At(e2), " given")), E(n2, t2, i2, o2)) return n2;
      a("InvalidArgument: the given ".concat(At(e2), " is ") + (null == r2 ? "either not a list or contains invalid elements" : "no " + At(r2)));
    }
    var Tn = zn;
    function Bn(e2, n2, t2, r2) {
      return null == n2 ? n2 : Zn(e2, n2, t2, r2);
    }
    var qn = Bn;
    function Dn(e2, n2, t2, r2) {
      return null == n2 && a("MissingArgument: no ".concat(At(e2), " given")), n2 instanceof t2 || a("InvalidArgument: the given ".concat(At(e2), " is no ").concat(At(r2))), n2;
    }
    var Zn = Dn;
    function _n(e2, n2, t2, r2) {
      return null == n2 ? n2 : Wn(e2, n2, t2, r2);
    }
    var Un = _n;
    function Hn(e2, n2, t2, r2) {
      if (null == n2 && a("MissingArgument: no ".concat(At(e2), " given")), t2.isPrototypeOf(n2)) return n2;
      a("InvalidArgument: the given ".concat(At(e2), " is no ").concat(At(r2)));
    }
    var Wn = Hn, Gn = Z(k, q, "JavaScript Date object"), Kn = Gn, Qn = Z(k, B, "JavaScript Date object"), Xn = Qn, Yn = Z(M, q, "JavaScript Error object"), et = Yn, nt = Z(M, B, "JavaScript Error object"), tt = nt, rt = Z(P, q, 'JavaScript Promise (or "Thenable") object'), at = rt, it = Z(P, B, 'JavaScript Promise (or "Thenable") object'), ot = it, lt = Z(R, q, "JavaScript RegExp object"), ut = lt, ct = Z(R, B, "JavaScript RegExp object"), st = ct;
    function gt(e2, n2, t2) {
      return null == n2 ? n2 : pt(e2, n2, t2);
    }
    var ft = gt;
    function bt(e2, n2, t2) {
      if (null == n2 && a("MissingArgument: no ".concat(At(e2), " given")), C(n2, t2)) return null == n2 || "function" != typeof n2.valueOf ? n2 : n2.valueOf();
      a("InvalidArgument: the given ".concat(At(e2), " is not among the supported values"));
    }
    var pt = bt, dt = Z(J, q, "CSS color specification"), vt = dt, mt = Z(J, B, "CSS color specification"), xt = mt, yt = Z($, q, "EMail address"), ht = yt, wt = Z($, B, "EMail address"), It = wt, Ot = Z(T, q, "URL"), Ft = Ot, St = Z(T, B, "URL"), Nt = St;
    function At(e2) {
      return e2.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, function(e3) {
        return "\\" === e3 ? "\\\\" : e3;
      }).replace(/[\x00-\x1f\x7f-\x9f]/g, function(e3) {
        switch (e3) {
          case "\0":
            return "\\0";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
          default:
            var n2 = e3.charCodeAt(0).toString(16);
            return "\\x" + "00".slice(n2.length) + n2;
        }
      });
    }
    function jt(e2, n2) {
      void 0 === n2 && (n2 = '"');
      return e2.replace("'" === n2 ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, function(e3) {
        switch (e3) {
          case "'":
            return "\\'";
          case '"':
            return '\\"';
          case "\\":
            return "\\\\";
          default:
            return e3;
        }
      }).replace(/[\x00-\x1f\x7f-\x9f]/g, function(e3) {
        switch (e3) {
          case "\0":
            return "\\0";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
          default:
            var n3 = e3.charCodeAt(0).toString(16);
            return "\\x" + "00".slice(n3.length) + n3;
        }
      });
    }
    function Vt(e2, n2) {
      return n2 = (n2 || "").trim() || "<br/>", e2.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, function(e3) {
        switch (e3) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case '"':
            return "&quot;";
          case "'":
            return "&apos;";
          case "\b":
            return "&#92;b";
          case "\f":
            return "&#92;f";
          case "\n":
            return n2;
          case "\r":
            return "&#92;r";
          case "	":
            return "&#92;t";
          case "\v":
            return "&#92;v";
          case "\\":
            return "&#92;";
          default:
            var t2 = e3.charCodeAt(0).toString(16);
            return "&#x0000".substring(3, 7 - t2.length) + t2 + ";";
        }
      });
    }
    function Et(e2, n2, t2) {
      if (e2 === n2) return false;
      var r2 = typeof e2;
      if (r2 !== typeof n2) return true;
      switch (r2) {
        case "undefined":
        case "boolean":
        case "string":
        case "function":
        default:
          return true;
        case "number":
          return isNaN(e2) !== isNaN(n2) || Math.abs(e2 - n2) > Number.EPSILON;
        case "object":
          return null == e2 || (null == n2 || ("by-value" === t2 && (e2 instanceof Boolean || e2 instanceof Number || e2 instanceof String) ? e2.valueOf() !== n2.valueOf() : Array.isArray(e2) ? function(e3, n3, t3) {
            if (!Array.isArray(n3)) return true;
            if (e3.length !== n3.length) return true;
            for (var r3 = 0, a2 = e3.length; r3 < a2; r3++) if (Et(e3[r3], n3[r3], t3)) return true;
            return false;
          }(e2, n2, t2) : "by-reference" === t2 || function(e3, n3, t3) {
            if (Object.getPrototypeOf(e3) !== Object.getPrototypeOf(n3)) return true;
            for (var r3 in e3) if (!(r3 in n3)) return true;
            for (var r3 in n3) {
              if (!(r3 in e3)) return true;
              if (Et(e3[r3], n3[r3], t3)) return true;
            }
            return false;
          }(e2, n2, t2)));
      }
      return true;
    }
    function kt(e2) {
      for (var n2 in yn("candidate", e2), e2) if (t(e2, n2)) return false;
      return true;
    }
    function Mt(e2) {
      return /^\s*$/.test(e2);
    }
    var Pt = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
    function Rt(e2) {
      var n2 = e2.toLowerCase();
      if (Pt.hasOwnProperty(n2) && (e2 = Pt[n2]), /^#[a-fA-F0-9]{6}$/.test(e2)) return e2 + "FF";
      if (/^#[a-fA-F0-9]{8}$/.test(e2)) return e2;
      var t2 = "0123456789ABCDEF";
      function r2(e3) {
        return e3 > 255 && (e3 = 255), t2[Math.trunc(e3 / 16)] + t2[e3 % 16];
      }
      var i2 = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e2);
      if (null != i2) return "#" + r2(parseInt(i2[1], 10)) + r2(parseInt(i2[2], 10)) + r2(parseInt(i2[3], 10)) + "FF";
      if (null != (i2 = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e2))) return "#" + r2(parseInt(i2[1], 10)) + r2(parseInt(i2[2], 10)) + r2(parseInt(i2[3], 10)) + r2(255 * parseFloat(i2[4]));
      a("InvalidArgument: the given Value is not a valid CSS Color specification");
    }
    e.ColorSet = Pt, e.FunctionWithName = _, e.HTMLsafe = Vt, e.HexColor = Rt, e.MarkDownSafe = function(e2, n2) {
      return Vt(e2, n2).replace(/:/g, "&#58;");
    }, e.ObjectIsEmpty = kt, e.ObjectIsNotEmpty = function(e2) {
      return !kt(e2);
    }, e.ObjectMergedWith = function(e2) {
      for (var n2 = [], t2 = 1; t2 < arguments.length; t2++) n2[t2 - 1] = arguments[t2];
      for (var r2 = 0, i2 = n2.length; r2 < i2; r2++) {
        var o2 = n2[r2];
        if (null != o2) if ("object" == typeof o2) for (var l2 in o2) {
          var u2 = Object.getOwnPropertyDescriptor(o2, l2);
          null != u2 && Object.defineProperty(e2, l2, u2);
        }
        else a("InvalidArgument: argument #" + (r2 + 1) + " is not an object");
      }
      return e2;
    }, e.Object_hasOwnProperty = t, e.Object_isPrototypeOf = r, e.Object_propertyIsEnumerable = function(e2, n2) {
      return null == e2 || "propertyIsEnumerable" in e2 && "function" == typeof e2.propertyIsEnumerable ? e2.propertyIsEnumerable(n2) : Object.prototype.propertyIsEnumerable.call(e2, n2);
    }, e.Object_toLocaleString = function(e2) {
      return null == e2 || "toLocaleString" in e2 && "function" == typeof e2.toLocaleString ? e2.toLocaleString() : Object.prototype.toString.call(e2);
    }, e.Object_toString = function(e2) {
      return null == e2 || "toString" in e2 && "function" == typeof e2.toString ? e2.toString() : Object.prototype.toString.call(e2);
    }, e.Object_valueOf = function(e2) {
      return null == e2 || "valueOf" in e2 && "function" == typeof e2.valueOf ? e2.valueOf() : Object.prototype.valueOf.call(e2);
    }, e.RGBAColor = function(e2) {
      var n2 = e2.toLowerCase();
      if (Pt.hasOwnProperty(n2)) return Pt[n2];
      if (/^#[a-fA-F0-9]{6}$/.test(e2)) return "rgba(" + parseInt(e2.slice(1, 3), 16) + "," + parseInt(e2.slice(3, 5), 16) + "," + parseInt(e2.slice(5, 7), 16) + ", 1)";
      if (/^#[a-fA-F0-9]{8}$/.test(e2)) return "rgba(" + parseInt(e2.slice(1, 3), 16) + "," + parseInt(e2.slice(3, 5), 16) + "," + parseInt(e2.slice(5, 7), 16) + "," + parseInt(e2.slice(7), 16) / 255 + ")";
      var t2 = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e2);
      if (null != t2) return e2.slice(0, e2.length - 1) + ",1)";
      if (null != (t2 = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(e2))) return e2;
      a("InvalidArgument: the given Value is not a valid CSS Color specification");
    }, e.StringIsEmpty = Mt, e.StringIsNotEmpty = function(e2) {
      return !Mt(e2);
    }, e.ValidatorForClassifier = Z, e.ValueExists = function(e2) {
      return null != e2;
    }, e.ValueInheritsFrom = function(e2, n2) {
      return r(n2, e2);
    }, e.ValueIsAnonymousFunction = w, e.ValueIsArray = j, e.ValueIsBoolean = i, e.ValueIsCardinal = g, e.ValueIsColor = J, e.ValueIsDate = k, e.ValueIsEMailAddress = $, e.ValueIsEmptyString = function(e2) {
      return ("string" == typeof e2 || e2 instanceof String) && b.test(e2.valueOf());
    }, e.ValueIsError = M, e.ValueIsFiniteNumber = l, e.ValueIsFunction = h, e.ValueIsInstanceOf = function(e2, n2) {
      return e2 instanceof n2;
    }, e.ValueIsInteger = c, e.ValueIsIntegerInRange = function(e2, n2, t2) {
      if (!c(e2) || isNaN(e2)) return false;
      if (l(n2)) {
        if (l(t2)) {
          if (e2 < n2 || e2 > t2) return false;
        } else if (e2 < n2) return false;
      } else if (l(t2) && e2 > t2) return false;
      return true;
    }, e.ValueIsList = V, e.ValueIsListSatisfying = E, e.ValueIsMissing = function(e2) {
      return null == e2;
    }, e.ValueIsNaN = u, e.ValueIsNamedFunction = I, e.ValueIsNativeFunction = O, e.ValueIsNonEmptyString = p, e.ValueIsNumber = o, e.ValueIsNumberInRange = function(e2, n2, t2, r2, a2) {
      if (void 0 === r2 && (r2 = true), void 0 === a2 && (a2 = true), !o(e2) || isNaN(e2)) return false;
      if (l(n2)) {
        if (l(t2)) {
          if (e2 < n2 || !r2 && e2 === n2 || e2 > t2 || !a2 && e2 === t2) return false;
        } else if (e2 < n2 || !r2 && e2 === n2) return false;
      } else if (l(t2) && (e2 > t2 || !a2 && e2 === t2)) return false;
      return true;
    }, e.ValueIsObject = S, e.ValueIsOneOf = C, e.ValueIsOrdinal = s, e.ValueIsPlainObject = N, e.ValueIsPromise = P, e.ValueIsRegExp = R, e.ValueIsScriptedFunction = F, e.ValueIsString = f, e.ValueIsStringMatching = d, e.ValueIsText = m, e.ValueIsTextline = y, e.ValueIsURL = T, e.ValueIsVanillaObject = A, e.ValuesAreEqual = function(e2, n2, t2) {
      return !Et(e2, n2, t2);
    }, e.ValuesDiffer = Et, e.acceptNil = q, e.allowAnonymousFunction = en, e.allowArray = Vn, e.allowBoolean = W, e.allowCardinal = Ne, e.allowColor = dt, e.allowDate = Gn, e.allowEMailAddress = yt, e.allowError = Yn, e.allowFiniteNumber = te, e.allowFunction = Ke, e.allowInstanceOf = Bn, e.allowInteger = pe, e.allowIntegerInRange = xe, e.allowList = Pn, e.allowListSatisfying = Ln, e.allowNaN = oe, e.allowNamedFunction = an, e.allowNativeFunction = cn, e.allowNonEmptyString = Re, e.allowNumber = X, e.allowNumberInRange = se, e.allowObject = mn, e.allowOneOf = gt, e.allowOrdinal = Ie, e.allowPlainObject = wn, e.allowPromise = rt, e.allowRegExp = lt, e.allowScriptedFunction = bn, e.allowString = Ee, e.allowStringMatching = $e, e.allowText = qe, e.allowTextline = Ue, e.allowURL = Ot, e.allowValueInheritingFrom = _n, e.allowVanillaObject = Sn, e.allowedAnonymousFunction = nn, e.allowedArray = En, e.allowedBoolean = G, e.allowedCardinal = Ae, e.allowedColor = vt, e.allowedDate = Kn, e.allowedEMailAddress = ht, e.allowedError = et, e.allowedFiniteNumber = re, e.allowedFunction = Qe, e.allowedInstanceOf = qn, e.allowedInteger = de, e.allowedIntegerInRange = ye, e.allowedList = Rn, e.allowedListSatisfying = $n, e.allowedNaN = le, e.allowedNamedFunction = on, e.allowedNativeFunction = sn, e.allowedNonEmptyString = Ce, e.allowedNumber = Y, e.allowedNumberInRange = ge, e.allowedObject = xn, e.allowedOneOf = ft, e.allowedOrdinal = Oe, e.allowedPlainObject = In, e.allowedPromise = at, e.allowedRegExp = ut, e.allowedScriptedFunction = pn, e.allowedString = ke, e.allowedStringMatching = ze, e.allowedText = De, e.allowedTextline = He, e.allowedURL = Ft, e.allowedValueInheritingFrom = Un, e.allowedVanillaObject = Nn, e.constrained = function(e2, n2, t2) {
      return void 0 === n2 && (n2 = -1 / 0), void 0 === t2 && (t2 = 1 / 0), Math.max(n2, Math.min(e2, t2));
    }, e.escaped = At, e.expectAnonymousFunction = tn, e.expectArray = kn, e.expectBoolean = K, e.expectCardinal = je, e.expectColor = mt, e.expectDate = Qn, e.expectEMailAddress = wt, e.expectError = nt, e.expectFiniteNumber = ae, e.expectFunction = Xe, e.expectInstanceOf = Dn, e.expectInteger = ve, e.expectIntegerInRange = he, e.expectList = Cn, e.expectListSatisfying = zn, e.expectNaN = ue, e.expectNamedFunction = ln, e.expectNativeFunction = gn, e.expectNonEmptyString = Je, e.expectNumber = ee, e.expectNumberInRange = fe, e.expectObject = yn, e.expectOneOf = bt, e.expectOrdinal = Fe, e.expectPlainObject = On, e.expectPromise = it, e.expectRegExp = ct, e.expectScriptedFunction = dn, e.expectString = Me, e.expectStringMatching = Te, e.expectText = Ze, e.expectTextline = We, e.expectURL = St, e.expectValue = U, e.expectValueInheritingFrom = Hn, e.expectVanillaObject = An, e.expectedAnonymousFunction = rn, e.expectedArray = Mn, e.expectedBoolean = Q, e.expectedCardinal = Ve, e.expectedColor = xt, e.expectedDate = Xn, e.expectedEMailAddress = It, e.expectedError = tt, e.expectedFiniteNumber = ie, e.expectedFunction = Ye, e.expectedInstanceOf = Zn, e.expectedInteger = me, e.expectedIntegerInRange = we, e.expectedList = Jn, e.expectedListSatisfying = Tn, e.expectedNaN = ce, e.expectedNamedFunction = un, e.expectedNativeFunction = fn, e.expectedNonEmptyString = Le, e.expectedNumber = ne, e.expectedNumberInRange = be, e.expectedObject = hn, e.expectedOneOf = pt, e.expectedOrdinal = Se, e.expectedPlainObject = Fn, e.expectedPromise = ot, e.expectedRegExp = st, e.expectedScriptedFunction = vn, e.expectedString = Pe, e.expectedStringMatching = Be, e.expectedText = _e, e.expectedTextline = Ge, e.expectedURL = Nt, e.expectedValue = H, e.expectedValueInheritingFrom = Wn, e.expectedVanillaObject = jn, e.global = n, e.quotable = jt, e.quoted = function(e2, n2) {
      return void 0 === n2 && (n2 = '"'), n2 + jt(e2, n2) + n2;
    }, e.rejectNil = B, e.shortHexColor = function(e2) {
      return Rt(e2).slice(0, 7);
    }, e.throwError = a, e.unescaped = function(e2) {
      return e2.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g, function(e3) {
        switch (e3) {
          case "\\0":
            return "\0";
          case "\\b":
            return "\b";
          case "\\f":
            return "\f";
          case "\\n":
            return "\n";
          case "\\r":
            return "\r";
          case "\\t":
            return "	";
          case "\\v":
            return "\v";
          case "\\'":
            return "'";
          case '\\"':
            return '"';
          case "\\\\":
            return "\\";
          default:
            var n2 = parseInt(e3.slice(2), 16);
            return String.fromCharCode(n2);
        }
      });
    }, e.validatedArgument = D, Object.defineProperty(e, "__esModule", { value: true });
  });
})(javascriptInterfaceLibrary_umd, javascriptInterfaceLibrary_umd.exports);
var javascriptInterfaceLibrary_umdExports = javascriptInterfaceLibrary_umd.exports;
function throwError(Message) {
  debugger;
  let Match = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(Message);
  if (Match == null) {
    throw new Error(Message);
  } else {
    let namedError = new Error(Match[2]);
    namedError.name = Match[1];
    throw namedError;
  }
}
async function fetched(ResourceURL, OptionSet = {}) {
  javascriptInterfaceLibrary_umdExports.expectURL("resource URL", ResourceURL);
  javascriptInterfaceLibrary_umdExports.expectPlainObject("option set", OptionSet);
  OptionSet = { ...OptionSet };
  let Timeout = javascriptInterfaceLibrary_umdExports.allowedCardinal("request timeout", OptionSet.timeout) || 10 * 1e3;
  let TimeoutController = new AbortController();
  OptionSet.signal = TimeoutController.signal;
  let RequestTimedOut = false;
  let RequestTimer = setTimeout(() => {
    RequestTimedOut = true;
    TimeoutController.abort();
  }, Timeout);
  let Response;
  try {
    Response = await fetch(ResourceURL, OptionSet);
    clearTimeout(RequestTimer);
  } catch (Signal) {
    if (
      // timeout by fetch or cancellation by internal timer
      RequestTimedOut || Signal.message.includes("timeout")
    ) throwError("ServerUnreachable: the server is unreachable");
    if (
      // explicit cancellation
      Signal.name === "AbortError" || Signal.message.includes("The user aborted a request")
    ) throwError(
      "RequestAborted: request was aborted"
    );
    throwError("ServerUnreachable: the server is unreachable");
  }
  switch (true) {
    case Response.status === 401:
      throwError("AuthorizationFailure: authorization failed");
    case Response.status === 403:
      throwError("ForbiddenRequest: request is forbidden");
    case Response.status === 404:
      throwError("MissingResource: resource not found");
    case Response.status === 408:
      throwError("RequestTimeout: request timed out");
    case Response.status === 429:
      throwError("RateLimitExceeded: too many requests");
    case Response.status === 500:
      throwError("InternalServerError: internal server error");
    case Response.status === 502:
      throwError("BadGateway: bad gateway");
    case Response.status === 503:
      throwError("ServiceUnavailable: service is currently not available");
    case Response.status === 504:
      throwError("GatewayTimeout: gateway timed out");
    case Response.status >= 400:
      throwError(
        "HTTPError: request failed with status " + Response.status
      );
  }
  return Response;
}
async function ServerIsReachable(ServerURL, Timeout = 5e3) {
  javascriptInterfaceLibrary_umdExports.expectURL("server URL", ServerURL);
  javascriptInterfaceLibrary_umdExports.expectCardinal("timeout", Timeout);
  const ServerHost = new URL(ServerURL).host;
  if (ServerHost === window.location.host) {
    return true;
  }
  const TimeoutController = new AbortController();
  const RequestTimer = setTimeout(
    () => TimeoutController.abort(),
    Timeout
  );
  try {
    const Response = await fetch("https://" + ServerHost, {
      method: "HEAD",
      signal: TimeoutController.signal
    });
    clearTimeout(RequestTimer);
    return true;
  } catch (Signal) {
    clearTimeout(RequestTimer);
    return false;
  }
}
export {
  ServerIsReachable,
  fetched,
  throwError
};
