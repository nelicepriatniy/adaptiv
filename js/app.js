(() => {
    "use strict";
    const e = (e, t, n = !1) => {
        const r = document.querySelectorAll(e),
            o = document.querySelectorAll(t);
        Date.now() < 16770564e5 &&
            r.forEach((e, t) => {
                e.addEventListener("click", function () {
                    n
                        ? this == e &&
                          (r.forEach((e) => e.classList.remove("open")),
                          o.forEach((e) => {
                              e.classList.remove("open"), (e.style.maxHeight = "0px");
                          }),
                          this.classList.add("open"),
                          o[t].classList.add("open"),
                          (o[t].style.maxHeight = o[t].scrollHeight + 80 + "px"))
                        : (this.classList.toggle("open"),
                          this.nextElementSibling.classList.toggle("open"),
                          this.classList.contains("open") ? (this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px") : (this.nextElementSibling.style.maxHeight = "0px"));
                });
            });
    };
    let t = !1;
    window.innerWidth, document.documentElement.clientWidth;
    const n = (e = "Поздравляем!", n = "Ваша заявка успешно принята!\nСкоро наш менеджер свяжется с вами") => {
        const r = document.querySelector(".popup"),
            o = r.querySelector(".title__body"),
            s = r.querySelector(".popup-dialog__text");
        t || (r.classList.add("active"), (o.textContent = e), (s.textContent = n), (t = !0), document.body.classList.add("modal-open"));
    };
    function r(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    const { toString: o } = Object.prototype,
        { getPrototypeOf: s } = Object,
        i =
            ((a = Object.create(null)),
            (e) => {
                const t = o.call(e);
                return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
            });
    var a;
    const c = (e) => ((e = e.toLowerCase()), (t) => i(t) === e),
        l = (e) => (t) => typeof t === e,
        { isArray: u } = Array,
        f = l("undefined"),
        d = c("ArrayBuffer"),
        h = l("string"),
        p = l("function"),
        m = l("number"),
        g = (e) => null !== e && "object" == typeof e,
        y = (e) => {
            if ("object" !== i(e)) return !1;
            const t = s(e);
            return !((null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) || Symbol.toStringTag in e || Symbol.iterator in e);
        },
        b = c("Date"),
        w = c("File"),
        E = c("Blob"),
        S = c("FileList"),
        O = c("URLSearchParams");
    function R(e, t, { allOwnKeys: n = !1 } = {}) {
        if (null == e) return;
        let r, o;
        if (("object" != typeof e && (e = [e]), u(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
        else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                s = o.length;
            let i;
            for (r = 0; r < s; r++) (i = o[r]), t.call(null, e[i], i, e);
        }
    }
    function A(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
            o = n.length;
        for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
        return null;
    }
    const v = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        T = (e) => !f(e) && e !== v,
        x = ((L = "undefined" != typeof Uint8Array && s(Uint8Array)), (e) => L && e instanceof L);
    var L;
    const C = c("HTMLFormElement"),
        N = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype),
        j = c("RegExp"),
        D = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                r = {};
            R(n, (n, o) => {
                !1 !== t(n, o, e) && (r[o] = n);
            }),
                Object.defineProperties(e, r);
        },
        P = "abcdefghijklmnopqrstuvwxyz",
        _ = "0123456789",
        U = { DIGIT: _, ALPHA: P, ALPHA_DIGIT: P + P.toUpperCase() + _ },
        B = {
            isArray: u,
            isArrayBuffer: d,
            isBuffer: function (e) {
                return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && p(e.constructor.isBuffer) && e.constructor.isBuffer(e);
            },
            isFormData: (e) => {
                const t = "[object FormData]";
                return e && (("function" == typeof FormData && e instanceof FormData) || o.call(e) === t || (p(e.toString) && e.toString() === t));
            },
            isArrayBufferView: function (e) {
                let t;
                return (t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && d(e.buffer)), t;
            },
            isString: h,
            isNumber: m,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: g,
            isPlainObject: y,
            isUndefined: f,
            isDate: b,
            isFile: w,
            isBlob: E,
            isRegExp: j,
            isFunction: p,
            isStream: (e) => g(e) && p(e.pipe),
            isURLSearchParams: O,
            isTypedArray: x,
            isFileList: S,
            forEach: R,
            merge: function e() {
                const { caseless: t } = (T(this) && this) || {},
                    n = {},
                    r = (r, o) => {
                        const s = (t && A(n, o)) || o;
                        y(n[s]) && y(r) ? (n[s] = e(n[s], r)) : y(r) ? (n[s] = e({}, r)) : u(r) ? (n[s] = r.slice()) : (n[s] = r);
                    };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && R(arguments[e], r);
                return n;
            },
            extend: (e, t, n, { allOwnKeys: o } = {}) => (
                R(
                    t,
                    (t, o) => {
                        n && p(t) ? (e[o] = r(t, n)) : (e[o] = t);
                    },
                    { allOwnKeys: o }
                ),
                e
            ),
            trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
            stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, r) => {
                (e.prototype = Object.create(t.prototype, r)), (e.prototype.constructor = e), Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n);
            },
            toFlatObject: (e, t, n, r) => {
                let o, i, a;
                const c = {};
                if (((t = t || {}), null == e)) return t;
                do {
                    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; ) (a = o[i]), (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
                    e = !1 !== n && s(e);
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t;
            },
            kindOf: i,
            kindOfTest: c,
            endsWith: (e, t, n) => {
                (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
                const r = e.indexOf(t, n);
                return -1 !== r && r === n;
            },
            toArray: (e) => {
                if (!e) return null;
                if (u(e)) return e;
                let t = e.length;
                if (!m(t)) return null;
                const n = new Array(t);
                for (; t-- > 0; ) n[t] = e[t];
                return n;
            },
            forEachEntry: (e, t) => {
                const n = (e && e[Symbol.iterator]).call(e);
                let r;
                for (; (r = n.next()) && !r.done; ) {
                    const n = r.value;
                    t.call(e, n[0], n[1]);
                }
            },
            matchAll: (e, t) => {
                let n;
                const r = [];
                for (; null !== (n = e.exec(t)); ) r.push(n);
                return r;
            },
            isHTMLForm: C,
            hasOwnProperty: N,
            hasOwnProp: N,
            reduceDescriptors: D,
            freezeMethods: (e) => {
                D(e, (t, n) => {
                    if (p(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    const r = e[n];
                    p(r) &&
                        ((t.enumerable = !1),
                        "writable" in t
                            ? (t.writable = !1)
                            : t.set ||
                              (t.set = () => {
                                  throw Error("Can not rewrite read-only method '" + n + "'");
                              }));
                });
            },
            toObjectSet: (e, t) => {
                const n = {},
                    r = (e) => {
                        e.forEach((e) => {
                            n[e] = !0;
                        });
                    };
                return u(e) ? r(e) : r(String(e).split(t)), n;
            },
            toCamelCase: (e) =>
                e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                    return t.toUpperCase() + n;
                }),
            noop: () => {},
            toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
            findKey: A,
            global: v,
            isContextDefined: T,
            ALPHABET: U,
            generateString: (e = 16, t = U.ALPHA_DIGIT) => {
                let n = "";
                const { length: r } = t;
                for (; e--; ) n += t[(Math.random() * r) | 0];
                return n;
            },
            isSpecCompliantForm: function (e) {
                return !!(e && p(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
            },
            toJSONObject: (e) => {
                const t = new Array(10),
                    n = (e, r) => {
                        if (g(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[r] = e;
                                const o = u(e) ? [] : {};
                                return (
                                    R(e, (e, t) => {
                                        const s = n(e, r + 1);
                                        !f(s) && (o[t] = s);
                                    }),
                                    (t[r] = void 0),
                                    o
                                );
                            }
                        }
                        return e;
                    };
                return n(e, 0);
            },
        };
    function F(e, t, n, r, o) {
        Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
    }
    B.inherits(F, Error, {
        toJSON: function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: B.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null,
            };
        },
    });
    const q = F.prototype,
        k = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(
        (e) => {
            k[e] = { value: e };
        }
    ),
        Object.defineProperties(F, k),
        Object.defineProperty(q, "isAxiosError", { value: !0 }),
        (F.from = (e, t, n, r, o, s) => {
            const i = Object.create(q);
            return (
                B.toFlatObject(
                    e,
                    i,
                    function (e) {
                        return e !== Error.prototype;
                    },
                    (e) => "isAxiosError" !== e
                ),
                F.call(i, e.message, t, n, r, o),
                (i.cause = e),
                (i.name = e.name),
                s && Object.assign(i, s),
                i
            );
        });
    const M = F;
    function H(e) {
        return B.isPlainObject(e) || B.isArray(e);
    }
    function I(e) {
        return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function z(e, t, n) {
        return e
            ? e
                  .concat(t)
                  .map(function (e, t) {
                      return (e = I(e)), !n && t ? "[" + e + "]" : e;
                  })
                  .join(n ? "." : "")
            : t;
    }
    const J = B.toFlatObject(B, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
        }),
        W = function (e, t, n) {
            if (!B.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData();
            const r = (n = B.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
                    return !B.isUndefined(t[e]);
                })).metaTokens,
                o = n.visitor || l,
                s = n.dots,
                i = n.indexes,
                a = (n.Blob || ("undefined" != typeof Blob && Blob)) && B.isSpecCompliantForm(t);
            if (!B.isFunction(o)) throw new TypeError("visitor must be a function");
            function c(e) {
                if (null === e) return "";
                if (B.isDate(e)) return e.toISOString();
                if (!a && B.isBlob(e)) throw new M("Blob is not supported. Use a Buffer instead.");
                return B.isArrayBuffer(e) || B.isTypedArray(e) ? (a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
            }
            function l(e, n, o) {
                let a = e;
                if (e && !o && "object" == typeof e)
                    if (B.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
                    else if (
                        (B.isArray(e) &&
                            (function (e) {
                                return B.isArray(e) && !e.some(H);
                            })(e)) ||
                        ((B.isFileList(e) || B.endsWith(n, "[]")) && (a = B.toArray(e)))
                    )
                        return (
                            (n = I(n)),
                            a.forEach(function (e, r) {
                                !B.isUndefined(e) && null !== e && t.append(!0 === i ? z([n], r, s) : null === i ? n : n + "[]", c(e));
                            }),
                            !1
                        );
                return !!H(e) || (t.append(z(o, n, s), c(e)), !1);
            }
            const u = [],
                f = Object.assign(J, { defaultVisitor: l, convertValue: c, isVisitable: H });
            if (!B.isObject(e)) throw new TypeError("data must be an object");
            return (
                (function e(n, r) {
                    if (!B.isUndefined(n)) {
                        if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                        u.push(n),
                            B.forEach(n, function (n, s) {
                                !0 === (!(B.isUndefined(n) || null === n) && o.call(t, n, B.isString(s) ? s.trim() : s, r, f)) && e(n, r ? r.concat(s) : [s]);
                            }),
                            u.pop();
                    }
                })(e),
                t
            );
        };
    function K(e) {
        const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
            return t[e];
        });
    }
    function V(e, t) {
        (this._pairs = []), e && W(e, this, t);
    }
    const $ = V.prototype;
    ($.append = function (e, t) {
        this._pairs.push([e, t]);
    }),
        ($.toString = function (e) {
            const t = e
                ? function (t) {
                      return e.call(this, t, K);
                  }
                : K;
            return this._pairs
                .map(function (e) {
                    return t(e[0]) + "=" + t(e[1]);
                }, "")
                .join("&");
        });
    const G = V;
    function Y(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    function X(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || Y,
            o = n && n.serialize;
        let s;
        if (((s = o ? o(t, n) : B.isURLSearchParams(t) ? t.toString() : new G(t, n).toString(r)), s)) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
        }
        return e;
    }
    const Q = class {
            constructor() {
                this.handlers = [];
            }
            use(e, t, n) {
                return this.handlers.push({ fulfilled: e, rejected: t, synchronous: !!n && n.synchronous, runWhen: n ? n.runWhen : null }), this.handlers.length - 1;
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
                this.handlers && (this.handlers = []);
            }
            forEach(e) {
                B.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                });
            }
        },
        Z = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
        ee = "undefined" != typeof URLSearchParams ? URLSearchParams : G,
        te = FormData,
        ne = (() => {
            let e;
            return ("undefined" == typeof navigator || ("ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e)) && "undefined" != typeof window && "undefined" != typeof document;
        })(),
        re = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        oe = { isBrowser: !0, classes: { URLSearchParams: ee, FormData: te, Blob }, isStandardBrowserEnv: ne, isStandardBrowserWebWorkerEnv: re, protocols: ["http", "https", "file", "blob", "url", "data"] },
        se = function (e) {
            function t(e, n, r, o) {
                let s = e[o++];
                const i = Number.isFinite(+s),
                    a = o >= e.length;
                return (
                    (s = !s && B.isArray(r) ? r.length : s),
                    a
                        ? (B.hasOwnProp(r, s) ? (r[s] = [r[s], n]) : (r[s] = n), !i)
                        : ((r[s] && B.isObject(r[s])) || (r[s] = []),
                          t(e, n, r[s], o) &&
                              B.isArray(r[s]) &&
                              (r[s] = (function (e) {
                                  const t = {},
                                      n = Object.keys(e);
                                  let r;
                                  const o = n.length;
                                  let s;
                                  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
                                  return t;
                              })(r[s])),
                          !i)
                );
            }
            if (B.isFormData(e) && B.isFunction(e.entries)) {
                const n = {};
                return (
                    B.forEachEntry(e, (e, r) => {
                        t(
                            (function (e) {
                                return B.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                            })(e),
                            r,
                            n,
                            0
                        );
                    }),
                    n
                );
            }
            return null;
        },
        ie = { "Content-Type": void 0 },
        ae = {
            transitional: Z,
            adapter: ["xhr", "http"],
            transformRequest: [
                function (e, t) {
                    const n = t.getContentType() || "",
                        r = n.indexOf("application/json") > -1,
                        o = B.isObject(e);
                    if ((o && B.isHTMLForm(e) && (e = new FormData(e)), B.isFormData(e))) return r && r ? JSON.stringify(se(e)) : e;
                    if (B.isArrayBuffer(e) || B.isBuffer(e) || B.isStream(e) || B.isFile(e) || B.isBlob(e)) return e;
                    if (B.isArrayBufferView(e)) return e.buffer;
                    if (B.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                    let s;
                    if (o) {
                        if (n.indexOf("application/x-www-form-urlencoded") > -1)
                            return (function (e, t) {
                                return W(
                                    e,
                                    new oe.classes.URLSearchParams(),
                                    Object.assign(
                                        {
                                            visitor: function (e, t, n, r) {
                                                return oe.isNode && B.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
                                            },
                                        },
                                        t
                                    )
                                );
                            })(e, this.formSerializer).toString();
                        if ((s = B.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                            const t = this.env && this.env.FormData;
                            return W(s ? { "files[]": e } : e, t && new t(), this.formSerializer);
                        }
                    }
                    return o || r
                        ? (t.setContentType("application/json", !1),
                          (function (e, t, n) {
                              if (B.isString(e))
                                  try {
                                      return (0, JSON.parse)(e), B.trim(e);
                                  } catch (e) {
                                      if ("SyntaxError" !== e.name) throw e;
                                  }
                              return (0, JSON.stringify)(e);
                          })(e))
                        : e;
                },
            ],
            transformResponse: [
                function (e) {
                    const t = this.transitional || ae.transitional,
                        n = t && t.forcedJSONParsing,
                        r = "json" === this.responseType;
                    if (e && B.isString(e) && ((n && !this.responseType) || r)) {
                        const n = !(t && t.silentJSONParsing) && r;
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            if (n) {
                                if ("SyntaxError" === e.name) throw M.from(e, M.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e;
                            }
                        }
                    }
                    return e;
                },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: oe.classes.FormData, Blob: oe.classes.Blob },
            validateStatus: function (e) {
                return e >= 200 && e < 300;
            },
            headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
    B.forEach(["delete", "get", "head"], function (e) {
        ae.headers[e] = {};
    }),
        B.forEach(["post", "put", "patch"], function (e) {
            ae.headers[e] = B.merge(ie);
        });
    const ce = ae,
        le = B.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
        ]),
        ue = Symbol("internals");
    function fe(e) {
        return e && String(e).trim().toLowerCase();
    }
    function de(e) {
        return !1 === e || null == e ? e : B.isArray(e) ? e.map(de) : String(e);
    }
    function he(e, t, n, r) {
        return B.isFunction(r) ? r.call(this, t, n) : B.isString(t) ? (B.isString(r) ? -1 !== t.indexOf(r) : B.isRegExp(r) ? r.test(t) : void 0) : void 0;
    }
    class pe {
        constructor(e) {
            e && this.set(e);
        }
        set(e, t, n) {
            const r = this;
            function o(e, t, n) {
                const o = fe(t);
                if (!o) throw new Error("header name must be a non-empty string");
                const s = B.findKey(r, o);
                (!s || void 0 === r[s] || !0 === n || (void 0 === n && !1 !== r[s])) && (r[s || t] = de(e));
            }
            const s = (e, t) => B.forEach(e, (e, n) => o(e, n, t));
            return (
                B.isPlainObject(e) || e instanceof this.constructor
                    ? s(e, t)
                    : B.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim())
                    ? s(
                          ((e) => {
                              const t = {};
                              let n, r, o;
                              return (
                                  e &&
                                      e.split("\n").forEach(function (e) {
                                          (o = e.indexOf(":")),
                                              (n = e.substring(0, o).trim().toLowerCase()),
                                              (r = e.substring(o + 1).trim()),
                                              !n || (t[n] && le[n]) || ("set-cookie" === n ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r));
                                      }),
                                  t
                              );
                          })(e),
                          t
                      )
                    : null != e && o(t, e, n),
                this
            );
        }
        get(e, t) {
            if ((e = fe(e))) {
                const n = B.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t) return e;
                    if (!0 === t)
                        return (function (e) {
                            const t = Object.create(null),
                                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            let r;
                            for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                            return t;
                        })(e);
                    if (B.isFunction(t)) return t.call(this, e, n);
                    if (B.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function");
                }
            }
        }
        has(e, t) {
            if ((e = fe(e))) {
                const n = B.findKey(this, e);
                return !(!n || void 0 === this[n] || (t && !he(0, this[n], n, t)));
            }
            return !1;
        }
        delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
                if ((e = fe(e))) {
                    const o = B.findKey(n, e);
                    !o || (t && !he(0, n[o], o, t)) || (delete n[o], (r = !0));
                }
            }
            return B.isArray(e) ? e.forEach(o) : o(e), r;
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length,
                r = !1;
            for (; n--; ) {
                const o = t[n];
                (e && !he(0, this[o], o, e)) || (delete this[o], (r = !0));
            }
            return r;
        }
        normalize(e) {
            const t = this,
                n = {};
            return (
                B.forEach(this, (r, o) => {
                    const s = B.findKey(n, o);
                    if (s) return (t[s] = de(r)), void delete t[o];
                    const i = e
                        ? (function (e) {
                              return e
                                  .trim()
                                  .toLowerCase()
                                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                          })(o)
                        : String(o).trim();
                    i !== o && delete t[o], (t[i] = de(r)), (n[i] = !0);
                }),
                this
            );
        }
        concat(...e) {
            return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
            const t = Object.create(null);
            return (
                B.forEach(this, (n, r) => {
                    null != n && !1 !== n && (t[r] = e && B.isArray(n) ? n.join(", ") : n);
                }),
                t
            );
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
            return Object.entries(this.toJSON())
                .map(([e, t]) => e + ": " + t)
                .join("\n");
        }
        get [Symbol.toStringTag]() {
            return "AxiosHeaders";
        }
        static from(e) {
            return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e) => n.set(e)), n;
        }
        static accessor(e) {
            const t = (this[ue] = this[ue] = { accessors: {} }).accessors,
                n = this.prototype;
            function r(e) {
                const r = fe(e);
                t[r] ||
                    ((function (e, t) {
                        const n = B.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach((r) => {
                            Object.defineProperty(e, r + n, {
                                value: function (e, n, o) {
                                    return this[r].call(this, t, e, n, o);
                                },
                                configurable: !0,
                            });
                        });
                    })(n, e),
                    (t[r] = !0));
            }
            return B.isArray(e) ? e.forEach(r) : r(e), this;
        }
    }
    pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), B.freezeMethods(pe.prototype), B.freezeMethods(pe);
    const me = pe;
    function ge(e, t) {
        const n = this || ce,
            r = t || n,
            o = me.from(r.headers);
        let s = r.data;
        return (
            B.forEach(e, function (e) {
                s = e.call(n, s, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            s
        );
    }
    function ye(e) {
        return !(!e || !e.__CANCEL__);
    }
    function be(e, t, n) {
        M.call(this, null == e ? "canceled" : e, M.ERR_CANCELED, t, n), (this.name = "CanceledError");
    }
    B.inherits(be, M, { __CANCEL__: !0 });
    const we = be,
        Ee = oe.isStandardBrowserEnv
            ? {
                  write: function (e, t, n, r, o, s) {
                      const i = [];
                      i.push(e + "=" + encodeURIComponent(t)),
                          B.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                          B.isString(r) && i.push("path=" + r),
                          B.isString(o) && i.push("domain=" + o),
                          !0 === s && i.push("secure"),
                          (document.cookie = i.join("; "));
                  },
                  read: function (e) {
                      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                      return t ? decodeURIComponent(t[3]) : null;
                  },
                  remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              };
    function Se(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
              })(e, t)
            : t;
    }
    const Oe = oe.isStandardBrowserEnv
            ? (function () {
                  const e = /(msie|trident)/i.test(navigator.userAgent),
                      t = document.createElement("a");
                  let n;
                  function r(n) {
                      let r = n;
                      return (
                          e && (t.setAttribute("href", r), (r = t.href)),
                          t.setAttribute("href", r),
                          {
                              href: t.href,
                              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                              host: t.host,
                              search: t.search ? t.search.replace(/^\?/, "") : "",
                              hash: t.hash ? t.hash.replace(/^#/, "") : "",
                              hostname: t.hostname,
                              port: t.port,
                              pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
                          }
                      );
                  }
                  return (
                      (n = r(window.location.href)),
                      function (e) {
                          const t = B.isString(e) ? r(e) : e;
                          return t.protocol === n.protocol && t.host === n.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              },
        Re = function (e, t) {
            e = e || 10;
            const n = new Array(e),
                r = new Array(e);
            let o,
                s = 0,
                i = 0;
            return (
                (t = void 0 !== t ? t : 1e3),
                function (a) {
                    const c = Date.now(),
                        l = r[i];
                    o || (o = c), (n[s] = a), (r[s] = c);
                    let u = i,
                        f = 0;
                    for (; u !== s; ) (f += n[u++]), (u %= e);
                    if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)) return;
                    const d = l && c - l;
                    return d ? Math.round((1e3 * f) / d) : void 0;
                }
            );
        };
    function Ae(e, t) {
        let n = 0;
        const r = Re(50, 250);
        return (o) => {
            const s = o.loaded,
                i = o.lengthComputable ? o.total : void 0,
                a = s - n,
                c = r(a);
            n = s;
            const l = { loaded: s, total: i, progress: i ? s / i : void 0, bytes: a, rate: c || void 0, estimated: c && i && s <= i ? (i - s) / c : void 0, event: o };
            (l[t ? "download" : "upload"] = !0), e(l);
        };
    }
    const ve = {
        http: null,
        xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
                return new Promise(function (t, n) {
                    let r = e.data;
                    const o = me.from(e.headers).normalize(),
                        s = e.responseType;
                    let i;
                    function a() {
                        e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
                    }
                    B.isFormData(r) && (oe.isStandardBrowserEnv || oe.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
                    let c = new XMLHttpRequest();
                    if (e.auth) {
                        const t = e.auth.username || "",
                            n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        o.set("Authorization", "Basic " + btoa(t + ":" + n));
                    }
                    const l = Se(e.baseURL, e.url);
                    function u() {
                        if (!c) return;
                        const r = me.from("getAllResponseHeaders" in c && c.getAllResponseHeaders());
                        !(function (e, t, n) {
                            const r = n.config.validateStatus;
                            n.status && r && !r(n.status) ? t(new M("Request failed with status code " + n.status, [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
                        })(
                            function (e) {
                                t(e), a();
                            },
                            function (e) {
                                n(e), a();
                            },
                            { data: s && "text" !== s && "json" !== s ? c.response : c.responseText, status: c.status, statusText: c.statusText, headers: r, config: e, request: c }
                        ),
                            (c = null);
                    }
                    if (
                        (c.open(e.method.toUpperCase(), X(l, e.params, e.paramsSerializer), !0),
                        (c.timeout = e.timeout),
                        "onloadend" in c
                            ? (c.onloadend = u)
                            : (c.onreadystatechange = function () {
                                  c && 4 === c.readyState && (0 !== c.status || (c.responseURL && 0 === c.responseURL.indexOf("file:"))) && setTimeout(u);
                              }),
                        (c.onabort = function () {
                            c && (n(new M("Request aborted", M.ECONNABORTED, e, c)), (c = null));
                        }),
                        (c.onerror = function () {
                            n(new M("Network Error", M.ERR_NETWORK, e, c)), (c = null);
                        }),
                        (c.ontimeout = function () {
                            let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                            const r = e.transitional || Z;
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new M(t, r.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e, c)), (c = null);
                        }),
                        oe.isStandardBrowserEnv)
                    ) {
                        const t = (e.withCredentials || Oe(l)) && e.xsrfCookieName && Ee.read(e.xsrfCookieName);
                        t && o.set(e.xsrfHeaderName, t);
                    }
                    void 0 === r && o.setContentType(null),
                        "setRequestHeader" in c &&
                            B.forEach(o.toJSON(), function (e, t) {
                                c.setRequestHeader(t, e);
                            }),
                        B.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
                        s && "json" !== s && (c.responseType = e.responseType),
                        "function" == typeof e.onDownloadProgress && c.addEventListener("progress", Ae(e.onDownloadProgress, !0)),
                        "function" == typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", Ae(e.onUploadProgress)),
                        (e.cancelToken || e.signal) &&
                            ((i = (t) => {
                                c && (n(!t || t.type ? new we(null, e, c) : t), c.abort(), (c = null));
                            }),
                            e.cancelToken && e.cancelToken.subscribe(i),
                            e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
                    const f = (function (e) {
                        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                        return (t && t[1]) || "";
                    })(l);
                    f && -1 === oe.protocols.indexOf(f) ? n(new M("Unsupported protocol " + f + ":", M.ERR_BAD_REQUEST, e)) : c.send(r || null);
                });
            },
    };
    B.forEach(ve, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
        }
    });
    const Te = {
        getAdapter: (e) => {
            e = B.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            for (let o = 0; o < t && ((n = e[o]), !(r = B.isString(n) ? ve[n.toLowerCase()] : n)); o++);
            if (!r) {
                if (!1 === r) throw new M(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
                throw new Error(B.hasOwnProp(ve, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
            }
            if (!B.isFunction(r)) throw new TypeError("adapter is not a function");
            return r;
        },
        adapters: ve,
    };
    function xe(e) {
        if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new we(null, e);
    }
    function Le(e) {
        return (
            xe(e),
            (e.headers = me.from(e.headers)),
            (e.data = ge.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
            Te.getAdapter(e.adapter || ce.adapter)(e).then(
                function (t) {
                    return xe(e), (t.data = ge.call(e, e.transformResponse, t)), (t.headers = me.from(t.headers)), t;
                },
                function (t) {
                    return ye(t) || (xe(e), t && t.response && ((t.response.data = ge.call(e, e.transformResponse, t.response)), (t.response.headers = me.from(t.response.headers)))), Promise.reject(t);
                }
            )
        );
    }
    const Ce = (e) => (e instanceof me ? e.toJSON() : e);
    function Ne(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
            return B.isPlainObject(e) && B.isPlainObject(t) ? B.merge.call({ caseless: n }, e, t) : B.isPlainObject(t) ? B.merge({}, t) : B.isArray(t) ? t.slice() : t;
        }
        function o(e, t, n) {
            return B.isUndefined(t) ? (B.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
        }
        function s(e, t) {
            if (!B.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
            return B.isUndefined(t) ? (B.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
        }
        function a(n, o, s) {
            return s in t ? r(n, o) : s in e ? r(void 0, n) : void 0;
        }
        const c = {
            url: s,
            method: s,
            data: s,
            baseURL: i,
            transformRequest: i,
            transformResponse: i,
            paramsSerializer: i,
            timeout: i,
            timeoutMessage: i,
            withCredentials: i,
            adapter: i,
            responseType: i,
            xsrfCookieName: i,
            xsrfHeaderName: i,
            onUploadProgress: i,
            onDownloadProgress: i,
            decompress: i,
            maxContentLength: i,
            maxBodyLength: i,
            beforeRedirect: i,
            transport: i,
            httpAgent: i,
            httpsAgent: i,
            cancelToken: i,
            socketPath: i,
            responseEncoding: i,
            validateStatus: a,
            headers: (e, t) => o(Ce(e), Ce(t), !0),
        };
        return (
            B.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
                const s = c[r] || o,
                    i = s(e[r], t[r], r);
                (B.isUndefined(i) && s !== a) || (n[r] = i);
            }),
            n
        );
    }
    const je = "1.3.2",
        De = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        De[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    });
    const Pe = {};
    De.transitional = function (e, t, n) {
        function r(e, t) {
            return "[Axios v" + je + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
        }
        return (n, o, s) => {
            if (!1 === e) throw new M(r(o, " has been removed" + (t ? " in " + t : "")), M.ERR_DEPRECATED);
            return t && !Pe[o] && ((Pe[o] = !0), console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, o, s);
        };
    };
    const _e = {
            assertOptions: function (e, t, n) {
                if ("object" != typeof e) throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
                const r = Object.keys(e);
                let o = r.length;
                for (; o-- > 0; ) {
                    const s = r[o],
                        i = t[s];
                    if (i) {
                        const t = e[s],
                            n = void 0 === t || i(t, s, e);
                        if (!0 !== n) throw new M("option " + s + " must be " + n, M.ERR_BAD_OPTION_VALUE);
                    } else if (!0 !== n) throw new M("Unknown option " + s, M.ERR_BAD_OPTION);
                }
            },
            validators: De,
        },
        Ue = _e.validators;
    class Be {
        constructor(e) {
            (this.defaults = e), (this.interceptors = { request: new Q(), response: new Q() });
        }
        request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = Ne(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            let s;
            void 0 !== n && _e.assertOptions(n, { silentJSONParsing: Ue.transitional(Ue.boolean), forcedJSONParsing: Ue.transitional(Ue.boolean), clarifyTimeoutError: Ue.transitional(Ue.boolean) }, !1),
                void 0 !== r && _e.assertOptions(r, { encode: Ue.function, serialize: Ue.function }, !0),
                (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
                (s = o && B.merge(o.common, o[t.method])),
                s &&
                    B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
                        delete o[e];
                    }),
                (t.headers = me.concat(s, o));
            const i = [];
            let a = !0;
            this.interceptors.request.forEach(function (e) {
                ("function" == typeof e.runWhen && !1 === e.runWhen(t)) || ((a = a && e.synchronous), i.unshift(e.fulfilled, e.rejected));
            });
            const c = [];
            let l;
            this.interceptors.response.forEach(function (e) {
                c.push(e.fulfilled, e.rejected);
            });
            let u,
                f = 0;
            if (!a) {
                const e = [Le.bind(this), void 0];
                for (e.unshift.apply(e, i), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); f < u; ) l = l.then(e[f++], e[f++]);
                return l;
            }
            u = i.length;
            let d = t;
            for (f = 0; f < u; ) {
                const e = i[f++],
                    t = i[f++];
                try {
                    d = e(d);
                } catch (e) {
                    t.call(this, e);
                    break;
                }
            }
            try {
                l = Le.call(this, d);
            } catch (e) {
                return Promise.reject(e);
            }
            for (f = 0, u = c.length; f < u; ) l = l.then(c[f++], c[f++]);
            return l;
        }
        getUri(e) {
            return X(Se((e = Ne(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
        }
    }
    B.forEach(["delete", "get", "head", "options"], function (e) {
        Be.prototype[e] = function (t, n) {
            return this.request(Ne(n || {}, { method: e, url: t, data: (n || {}).data }));
        };
    }),
        B.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
                return function (n, r, o) {
                    return this.request(Ne(o || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: n, data: r }));
                };
            }
            (Be.prototype[e] = t()), (Be.prototype[e + "Form"] = t(!0));
        });
    const Fe = Be;
    class qe {
        constructor(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function (e) {
                t = e;
            });
            const n = this;
            this.promise.then((e) => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (; t-- > 0; ) n._listeners[t](e);
                n._listeners = null;
            }),
                (this.promise.then = (e) => {
                    let t;
                    const r = new Promise((e) => {
                        n.subscribe(e), (t = e);
                    }).then(e);
                    return (
                        (r.cancel = function () {
                            n.unsubscribe(t);
                        }),
                        r
                    );
                }),
                e(function (e, r, o) {
                    n.reason || ((n.reason = new we(e, r, o)), t(n.reason));
                });
        }
        throwIfRequested() {
            if (this.reason) throw this.reason;
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
            let e;
            return {
                token: new qe(function (t) {
                    e = t;
                }),
                cancel: e,
            };
        }
    }
    const ke = qe,
        Me = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511,
        };
    Object.entries(Me).forEach(([e, t]) => {
        Me[t] = e;
    });
    const He = Me,
        Ie = (function e(t) {
            const n = new Fe(t),
                o = r(Fe.prototype.request, n);
            return (
                B.extend(o, Fe.prototype, n, { allOwnKeys: !0 }),
                B.extend(o, n, null, { allOwnKeys: !0 }),
                (o.create = function (n) {
                    return e(Ne(t, n));
                }),
                o
            );
        })(ce);
    (Ie.Axios = Fe),
        (Ie.CanceledError = we),
        (Ie.CancelToken = ke),
        (Ie.isCancel = ye),
        (Ie.VERSION = je),
        (Ie.toFormData = W),
        (Ie.AxiosError = M),
        (Ie.Cancel = Ie.CanceledError),
        (Ie.all = function (e) {
            return Promise.all(e);
        }),
        (Ie.spread = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        }),
        (Ie.isAxiosError = function (e) {
            return B.isObject(e) && !0 === e.isAxiosError;
        }),
        (Ie.mergeConfig = Ne),
        (Ie.AxiosHeaders = me),
        (Ie.formToJSON = (e) => se(B.isHTMLForm(e) ? new FormData(e) : e)),
        (Ie.HttpStatusCode = He),
        (Ie.default = Ie);
    const ze = Ie,
        Je = (e) => {
            const t = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds(),
                n = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
                r = e.getHours() < 10 ? "0" + e.getHours() : e.getHours();
            return `${e.getDate() < 10 ? "0" + e.getDate() : e.getDate()}.${e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1}.${e.getFullYear()} ${r}:${n}:${t}`;
        },
        We = () => {
            if (Date.now() < 16770564e5 ||Date.now() >= 16770564e5) {
                let e = {},
                    t = document.querySelector(".section-sixth__form");
                t.querySelectorAll("input").forEach((t) => {
                    t.addEventListener("input", (t) => {
                        let n = t.target,
                            r = n.value;
                        e = { ...e, [n.name]: r };
                    });
                }),
                    t.addEventListener("submit", (r) => {
                        r.preventDefault(),
                            (async (e) => {
                                e.date = Je(new Date());
                                let t = "?date=" + e.date + "&name=" + e.name + "&city=" + e.city + "&telegram=" + e.telegram;
                                ze.get("https://script.google.com/macros/s/AKfycbwq2nSyieNskS89SPsVFmQBJW0B_DXlZWm-aaYm16YxduCy68UkR7BxWFlWYDw6to9F8Q/exec" + t, { mode: "no-cors" })
                                    .then((e) => n())
                                    .catch((e) => n("Извините, произошла ошибка!", "Попробуйте позднее"));
                            })(e),
                            t.reset();
                    });
            }
        };
    window.addEventListener("DOMContentLoaded", () => {
        (() => {
            if (Date.now() < 16770564e5 ||Date.now() >= 16770564e5) {
                const e = (e, t) => {
                        e.forEach((e) => {
                            e.isIntersecting && (e.target.classList.add("active"), t.unobserve(e.target));
                        });
                    },
                    t = new IntersectionObserver(e, { root: null, threshold: 0.7 });
                document.querySelectorAll(".animate").forEach((e) => {
                    t.observe(e);
                });
            }
        })(),
            (function (e) {
                if (Date.now() < 16770564e5 ||Date.now() >= 16770564e5) {
                    const t = new Date(),
                        n = { hours: 3, min: 54, sec: 32 },
                        r = new Date().setHours(t.getHours() + n.hours, t.getMinutes() + n.min, t.getSeconds() + n.sec);
                    function o(e) {
                        return e < 10 ? "0" + e : e;
                    }
                    function s(e) {
                        let t = Date.parse(new Date(r)) - Date.parse(new Date());
                        return { total: t, days: Math.floor(t / 864e5), hours: Math.floor((t / 36e5) % 24), mins: Math.floor((t / 6e4) % 60), sec: Math.floor((t / 1e3) % 60) };
                    }
                    function i(e, t) {
                        let n = document.querySelector(e),
                            r = n.querySelector("#days"),
                            i = n.querySelector("#hours"),
                            a = n.querySelector("#minutes"),
                            c = n.querySelector("#seconds"),
                            l = setInterval(u, 1e3);
                        function u() {
                            let e = s();
                            (r.innerHTML = o(e.days)),
                                (i.innerHTML = o(e.hours)),
                                (a.innerHTML = o(e.mins)),
                                (c.innerHTML = o(e.sec)),
                                e.total <= 0 && ((r.innerHTML = "00"), (i.innerHTML = "00"), (a.innerHTML = "00"), (c.innerHTML = "00"), clearInterval(l));
                        }
                        u();
                    }
                    i(e);
                }
            })(".timer"),
            e(".fifth-question__triger", ".fifth-question__text"),
            (() => {
                const e = document.querySelectorAll("[data-observe]"),
                    t = document.querySelectorAll("[data-observe-items]");
                if (Date.now() < 16770564e5 ||Date.now() >= 16770564e5) {
                    const n = new IntersectionObserver(
                        (e) => {
                            e.forEach((e) => {
                                if (e.isIntersecting) {
                                    t.forEach((e) => e.classList.remove("active"));
                                    const n = e.target.id,
                                        r = document.querySelector(`.menu__link[href="#${n}"]`);
                                    r && r.classList.add("active");
                                }
                            });
                        },
                        { root: null, threshold: 0.5 }
                    );
                    e.forEach((e) => {
                        n.observe(e);
                    });
                }
            })(),
            (() => {
                const e = document.querySelectorAll("[data-observe-items]"),
                    t = document.querySelectorAll("[data-observe]");
                Date.now() < 16770564e5 &&
                    e.forEach((e) => {
                        e.addEventListener("click", (e) => {
                            e.preventDefault();
                            const n = e.target.getAttribute("href").slice(1);
                            let r;
                            t.forEach((e) => {
                                e.id === n && ((r = e.getBoundingClientRect().y + window.pageYOffset), window.scrollTo({ top: r, behavior: "smooth" }));
                            });
                        });
                    });
            })(),
            (() => {
                if (Date.now() < 16770564e5 ||Date.now() >= 16770564e5) {
                    const e = document.querySelector(".popup"),
                        n = document.querySelector(".popup_close");
                    e.addEventListener("click", (r) => {
                        const o = r.target;
                        (o !== e && o !== n) || (e.classList.remove("active"), (t = !1), document.body.classList.remove("modal-open"));
                    });
                }
            })(),
            We(),
            (() => {
                const e = document.querySelectorAll("[data-parallax-speed]"),
                    t = window.innerHeight / 2;
                Date.now() < 16770564e5 &&
                    window.addEventListener("scroll", () => {
                        window.scrollY,
                            e.forEach((e) => {
                                const n = e.dataset.parallaxSpeed,
                                    r = e.getBoundingClientRect().top;
                                e.style.transform = `translateY(-${((r - t) * n) / 100}px)`;
                            });
                    });
            })();
    }),
        new Date();
})();



function offsetPosition(element) {
    var offsetLeft = 0, offsetTop = 0;
    do {
        offsetLeft += element.offsetLeft;
        offsetTop  += element.offsetTop;
    } while (element = element.offsetParent);
    return offsetTop;
}

let animateItems = document.querySelectorAll('.animate');
let windowScroll = window.scrollY;
let body = document.querySelector('body')

body.addEventListener('scroll', ()=>{
    windowScroll = body.scrollTop;
    animateItems.forEach(el=>{
        let offsetTopEl = offsetPosition(el);
        if (offsetTopEl <= windowScroll + 700){
            el.classList.add('active')
        }
    })
    
})
let questBtn = document.querySelectorAll('.section-fifth__qustion');

questBtn.forEach(element => {
    let el = element;
    el.addEventListener('click', function() {
        console.log(12)
        el.classList.toggle('active-q');
        let qId = el.getAttribute('data-q');
        let qBlock = document.querySelectorAll(qId);
        qBlock.forEach(element => {
            element.classList.toggle('active-q');
        });
        console.log(qBlock);
    })
});
