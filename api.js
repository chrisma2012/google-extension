(() => {
  var __webpack_modules__ = {
      4537: e => {
        'use strict';
        e.exports = function (e, t) {
          for (var r = new Array(arguments.length - 1), n = 0, i = 2, o = !0; i < arguments.length; ) r[n++] = arguments[i++];
          return new Promise(function (i, s) {
            r[n] = function (e) {
              if (o)
                if (((o = !1), e)) s(e);
                else {
                  for (var t = new Array(arguments.length - 1), r = 0; r < t.length; ) t[r++] = arguments[r];
                  i.apply(null, t);
                }
            };
            try {
              e.apply(t || null, r);
            } catch (e) {
              o && ((o = !1), s(e));
            }
          });
        };
      },
      7419: (e, t) => {
        'use strict';
        var r = t;
        r.length = function (e) {
          var t = e.length;
          if (!t) return 0;
          for (var r = 0; --t % 4 > 1 && '=' === e.charAt(t); ) ++r;
          return Math.ceil(3 * e.length) / 4 - r;
        };
        for (var n = new Array(64), i = new Array(123), o = 0; o < 64; ) i[(n[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : (o - 59) | 43)] = o++;
        r.encode = function (e, t, r) {
          for (var i, o = null, s = [], a = 0, u = 0; t < r; ) {
            var f = e[t++];
            switch (u) {
              case 0:
                (s[a++] = n[f >> 2]), (i = (3 & f) << 4), (u = 1);
                break;
              case 1:
                (s[a++] = n[i | (f >> 4)]), (i = (15 & f) << 2), (u = 2);
                break;
              case 2:
                (s[a++] = n[i | (f >> 6)]), (s[a++] = n[63 & f]), (u = 0);
            }
            a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), (a = 0));
          }
          return u && ((s[a++] = n[i]), (s[a++] = 61), 1 === u && (s[a++] = 61)), o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join('')) : String.fromCharCode.apply(String, s.slice(0, a));
        };
        var s = 'invalid encoding';
        (r.decode = function (e, t, r) {
          for (var n, o = r, a = 0, u = 0; u < e.length; ) {
            var f = e.charCodeAt(u++);
            if (61 === f && a > 1) break;
            if (void 0 === (f = i[f])) throw Error(s);
            switch (a) {
              case 0:
                (n = f), (a = 1);
                break;
              case 1:
                (t[r++] = (n << 2) | ((48 & f) >> 4)), (n = f), (a = 2);
                break;
              case 2:
                (t[r++] = ((15 & n) << 4) | ((60 & f) >> 2)), (n = f), (a = 3);
                break;
              case 3:
                (t[r++] = ((3 & n) << 6) | f), (a = 0);
            }
          }
          if (1 === a) throw Error(s);
          return r - o;
        }),
          (r.test = function (e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
          });
      },
      5124: e => {
        'use strict';
        function t(e, r) {
          'string' == typeof e && ((r = e), (e = void 0));
          var n = [];
          function i(e) {
            if ('string' != typeof e) {
              var r = o();
              if ((t.verbose && console.log('codegen: ' + r), (r = 'return ' + r), e)) {
                for (var s = Object.keys(e), a = new Array(s.length + 1), u = new Array(s.length), f = 0; f < s.length; ) (a[f] = s[f]), (u[f] = e[s[f++]]);
                return (a[f] = r), Function.apply(null, a).apply(null, u);
              }
              return Function(r)();
            }
            for (var c = new Array(arguments.length - 1), l = 0; l < c.length; ) c[l] = arguments[++l];
            if (
              ((l = 0),
              (e = e.replace(/%([%dfijs])/g, function (e, t) {
                var r = c[l++];
                switch (t) {
                  case 'd':
                  case 'f':
                    return String(Number(r));
                  case 'i':
                    return String(Math.floor(r));
                  case 'j':
                    return JSON.stringify(r);
                  case 's':
                    return String(r);
                }
                return '%';
              })),
              l !== c.length)
            )
              throw Error('parameter count mismatch');
            return n.push(e), i;
          }
          function o(t) {
            return 'function ' + (t || r || '') + '(' + ((e && e.join(',')) || '') + '){\n  ' + n.join('\n  ') + '\n}';
          }
          return (i.toString = o), i;
        }
        (e.exports = t), (t.verbose = !1);
      },
      9211: e => {
        'use strict';
        function t() {
          this._listeners = {};
        }
        (e.exports = t),
          (t.prototype.on = function (e, t, r) {
            return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: t, ctx: r || this }), this;
          }),
          (t.prototype.off = function (e, t) {
            if (void 0 === e) this._listeners = {};
            else if (void 0 === t) this._listeners[e] = [];
            else for (var r = this._listeners[e], n = 0; n < r.length; ) r[n].fn === t ? r.splice(n, 1) : ++n;
            return this;
          }),
          (t.prototype.emit = function (e) {
            var t = this._listeners[e];
            if (t) {
              for (var r = [], n = 1; n < arguments.length; ) r.push(arguments[n++]);
              for (n = 0; n < t.length; ) t[n].fn.apply(t[n++].ctx, r);
            }
            return this;
          });
      },
      9054: (e, t, r) => {
        'use strict';
        e.exports = o;
        var n = r(4537),
          i = r(7199)('fs');
        function o(e, t, r) {
          return (
            'function' == typeof t ? ((r = t), (t = {})) : t || (t = {}),
            r
              ? !t.xhr && i && i.readFile
                ? i.readFile(e, function (n, i) {
                    return n && 'undefined' != typeof XMLHttpRequest ? o.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? i : i.toString('utf8'));
                  })
                : o.xhr(e, t, r)
              : n(o, this, e, t)
          );
        }
        o.xhr = function (e, t, r) {
          var n = new XMLHttpRequest();
          (n.onreadystatechange = function () {
            if (4 === n.readyState) {
              if (0 !== n.status && 200 !== n.status) return r(Error('status ' + n.status));
              if (t.binary) {
                var e = n.response;
                if (!e) {
                  e = [];
                  for (var i = 0; i < n.responseText.length; ++i) e.push(255 & n.responseText.charCodeAt(i));
                }
                return r(null, 'undefined' != typeof Uint8Array ? new Uint8Array(e) : e);
              }
              return r(null, n.responseText);
            }
          }),
            t.binary && ('overrideMimeType' in n && n.overrideMimeType('text/plain; charset=x-user-defined'), (n.responseType = 'arraybuffer')),
            n.open('GET', e),
            n.send();
        };
      },
      945: e => {
        'use strict';
        function t(e) {
          return (
            'undefined' != typeof Float32Array
              ? (function () {
                  var t = new Float32Array([-0]),
                    r = new Uint8Array(t.buffer),
                    n = 128 === r[3];
                  function i(e, n, i) {
                    (t[0] = e), (n[i] = r[0]), (n[i + 1] = r[1]), (n[i + 2] = r[2]), (n[i + 3] = r[3]);
                  }
                  function o(e, n, i) {
                    (t[0] = e), (n[i] = r[3]), (n[i + 1] = r[2]), (n[i + 2] = r[1]), (n[i + 3] = r[0]);
                  }
                  function s(e, n) {
                    return (r[0] = e[n]), (r[1] = e[n + 1]), (r[2] = e[n + 2]), (r[3] = e[n + 3]), t[0];
                  }
                  function a(e, n) {
                    return (r[3] = e[n]), (r[2] = e[n + 1]), (r[1] = e[n + 2]), (r[0] = e[n + 3]), t[0];
                  }
                  (e.writeFloatLE = n ? i : o), (e.writeFloatBE = n ? o : i), (e.readFloatLE = n ? s : a), (e.readFloatBE = n ? a : s);
                })()
              : (function () {
                  function t(e, t, r, n) {
                    var i = t < 0 ? 1 : 0;
                    if ((i && (t = -t), 0 === t)) e(1 / t > 0 ? 0 : 2147483648, r, n);
                    else if (isNaN(t)) e(2143289344, r, n);
                    else if (t > 34028234663852886e22) e(((i << 31) | 2139095040) >>> 0, r, n);
                    else if (t < 11754943508222875e-54) e(((i << 31) | Math.round(t / 1401298464324817e-60)) >>> 0, r, n);
                    else {
                      var o = Math.floor(Math.log(t) / Math.LN2);
                      e(((i << 31) | ((o + 127) << 23) | (8388607 & Math.round(t * Math.pow(2, -o) * 8388608))) >>> 0, r, n);
                    }
                  }
                  function s(e, t, r) {
                    var n = e(t, r),
                      i = 2 * (n >> 31) + 1,
                      o = (n >>> 23) & 255,
                      s = 8388607 & n;
                    return 255 === o ? (s ? NaN : i * (1 / 0)) : 0 === o ? 1401298464324817e-60 * i * s : i * Math.pow(2, o - 150) * (s + 8388608);
                  }
                  (e.writeFloatLE = t.bind(null, r)), (e.writeFloatBE = t.bind(null, n)), (e.readFloatLE = s.bind(null, i)), (e.readFloatBE = s.bind(null, o));
                })(),
            'undefined' != typeof Float64Array
              ? (function () {
                  var t = new Float64Array([-0]),
                    r = new Uint8Array(t.buffer),
                    n = 128 === r[7];
                  function i(e, n, i) {
                    (t[0] = e), (n[i] = r[0]), (n[i + 1] = r[1]), (n[i + 2] = r[2]), (n[i + 3] = r[3]), (n[i + 4] = r[4]), (n[i + 5] = r[5]), (n[i + 6] = r[6]), (n[i + 7] = r[7]);
                  }
                  function o(e, n, i) {
                    (t[0] = e), (n[i] = r[7]), (n[i + 1] = r[6]), (n[i + 2] = r[5]), (n[i + 3] = r[4]), (n[i + 4] = r[3]), (n[i + 5] = r[2]), (n[i + 6] = r[1]), (n[i + 7] = r[0]);
                  }
                  function s(e, n) {
                    return (r[0] = e[n]), (r[1] = e[n + 1]), (r[2] = e[n + 2]), (r[3] = e[n + 3]), (r[4] = e[n + 4]), (r[5] = e[n + 5]), (r[6] = e[n + 6]), (r[7] = e[n + 7]), t[0];
                  }
                  function a(e, n) {
                    return (r[7] = e[n]), (r[6] = e[n + 1]), (r[5] = e[n + 2]), (r[4] = e[n + 3]), (r[3] = e[n + 4]), (r[2] = e[n + 5]), (r[1] = e[n + 6]), (r[0] = e[n + 7]), t[0];
                  }
                  (e.writeDoubleLE = n ? i : o), (e.writeDoubleBE = n ? o : i), (e.readDoubleLE = n ? s : a), (e.readDoubleBE = n ? a : s);
                })()
              : (function () {
                  function t(e, t, r, n, i, o) {
                    var s = n < 0 ? 1 : 0;
                    if ((s && (n = -n), 0 === n)) e(0, i, o + t), e(1 / n > 0 ? 0 : 2147483648, i, o + r);
                    else if (isNaN(n)) e(0, i, o + t), e(2146959360, i, o + r);
                    else if (n > 17976931348623157e292) e(0, i, o + t), e(((s << 31) | 2146435072) >>> 0, i, o + r);
                    else {
                      var a;
                      if (n < 22250738585072014e-324) e((a = n / 5e-324) >>> 0, i, o + t), e(((s << 31) | (a / 4294967296)) >>> 0, i, o + r);
                      else {
                        var u = Math.floor(Math.log(n) / Math.LN2);
                        1024 === u && (u = 1023), e((4503599627370496 * (a = n * Math.pow(2, -u))) >>> 0, i, o + t), e(((s << 31) | ((u + 1023) << 20) | ((1048576 * a) & 1048575)) >>> 0, i, o + r);
                      }
                    }
                  }
                  function s(e, t, r, n, i) {
                    var o = e(n, i + t),
                      s = e(n, i + r),
                      a = 2 * (s >> 31) + 1,
                      u = (s >>> 20) & 2047,
                      f = 4294967296 * (1048575 & s) + o;
                    return 2047 === u ? (f ? NaN : a * (1 / 0)) : 0 === u ? 5e-324 * a * f : a * Math.pow(2, u - 1075) * (f + 4503599627370496);
                  }
                  (e.writeDoubleLE = t.bind(null, r, 0, 4)), (e.writeDoubleBE = t.bind(null, n, 4, 0)), (e.readDoubleLE = s.bind(null, i, 0, 4)), (e.readDoubleBE = s.bind(null, o, 4, 0));
                })(),
            e
          );
        }
        function r(e, t, r) {
          (t[r] = 255 & e), (t[r + 1] = (e >>> 8) & 255), (t[r + 2] = (e >>> 16) & 255), (t[r + 3] = e >>> 24);
        }
        function n(e, t, r) {
          (t[r] = e >>> 24), (t[r + 1] = (e >>> 16) & 255), (t[r + 2] = (e >>> 8) & 255), (t[r + 3] = 255 & e);
        }
        function i(e, t) {
          return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
        }
        function o(e, t) {
          return ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0;
        }
        e.exports = t(t);
      },
      7199: module => {
        'use strict';
        function inquire(moduleName) {
          return null;
        }
        module.exports = inquire;
      },
      8626: (e, t) => {
        'use strict';
        var r = t,
          n = (r.isAbsolute = function (e) {
            return /^(?:\/|\w+:)/.test(e);
          }),
          i = (r.normalize = function (e) {
            var t = (e = e.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/'),
              r = n(e),
              i = '';
            r && (i = t.shift() + '/');
            for (var o = 0; o < t.length; ) '..' === t[o] ? (o > 0 && '..' !== t[o - 1] ? t.splice(--o, 2) : r ? t.splice(o, 1) : ++o) : '.' === t[o] ? t.splice(o, 1) : ++o;
            return i + t.join('/');
          });
        r.resolve = function (e, t, r) {
          return r || (t = i(t)), n(t) ? t : (r || (e = i(e)), (e = e.replace(/(?:\/|^)[^/]+$/, '')).length ? i(e + '/' + t) : t);
        };
      },
      6662: e => {
        'use strict';
        e.exports = function (e, t, r) {
          var n = r || 8192,
            i = n >>> 1,
            o = null,
            s = n;
          return function (r) {
            if (r < 1 || r > i) return e(r);
            s + r > n && ((o = e(n)), (s = 0));
            var a = t.call(o, s, (s += r));
            return 7 & s && (s = 1 + (7 | s)), a;
          };
        };
      },
      4997: (e, t) => {
        'use strict';
        var r = t;
        (r.length = function (e) {
          for (var t = 0, r = 0, n = 0; n < e.length; ++n) (r = e.charCodeAt(n)) < 128 ? (t += 1) : r < 2048 ? (t += 2) : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1)) ? (++n, (t += 4)) : (t += 3);
          return t;
        }),
          (r.read = function (e, t, r) {
            if (r - t < 1) return '';
            for (var n, i = null, o = [], s = 0; t < r; ) (n = e[t++]) < 128 ? (o[s++] = n) : n > 191 && n < 224 ? (o[s++] = ((31 & n) << 6) | (63 & e[t++])) : n > 239 && n < 365 ? ((n = (((7 & n) << 18) | ((63 & e[t++]) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])) - 65536), (o[s++] = 55296 + (n >> 10)), (o[s++] = 56320 + (1023 & n))) : (o[s++] = ((15 & n) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])), s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), (s = 0));
            return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join('')) : String.fromCharCode.apply(String, o.slice(0, s));
          }),
          (r.write = function (e, t, r) {
            for (var n, i, o = r, s = 0; s < e.length; ++s) (n = e.charCodeAt(s)) < 128 ? (t[r++] = n) : n < 2048 ? ((t[r++] = (n >> 6) | 192), (t[r++] = (63 & n) | 128)) : 55296 == (64512 & n) && 56320 == (64512 & (i = e.charCodeAt(s + 1))) ? ((n = 65536 + ((1023 & n) << 10) + (1023 & i)), ++s, (t[r++] = (n >> 18) | 240), (t[r++] = ((n >> 12) & 63) | 128), (t[r++] = ((n >> 6) & 63) | 128), (t[r++] = (63 & n) | 128)) : ((t[r++] = (n >> 12) | 224), (t[r++] = ((n >> 6) & 63) | 128), (t[r++] = (63 & n) | 128));
            return r - o;
          });
      },
      9669: (e, t, r) => {
        e.exports = r(1609);
      },
      5448: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = r(6026),
          o = r(4372),
          s = r(5327),
          a = r(4097),
          u = r(4109),
          f = r(7985),
          c = r(7874),
          l = r(2648),
          p = r(644),
          h = r(205);
        e.exports = function (e) {
          return new Promise(function (t, r) {
            var d,
              y = e.data,
              m = e.headers,
              v = e.responseType;
            function g() {
              e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener('abort', d);
            }
            n.isFormData(y) && n.isStandardBrowserEnv() && delete m['Content-Type'];
            var b = new XMLHttpRequest();
            if (e.auth) {
              var w = e.auth.username || '',
                O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
              m.Authorization = 'Basic ' + btoa(w + ':' + O);
            }
            var _ = a(e.baseURL, e.url);
            function k() {
              if (b) {
                var n = 'getAllResponseHeaders' in b ? u(b.getAllResponseHeaders()) : null,
                  o = { data: v && 'text' !== v && 'json' !== v ? b.response : b.responseText, status: b.status, statusText: b.statusText, headers: n, config: e, request: b };
                i(
                  function (e) {
                    t(e), g();
                  },
                  function (e) {
                    r(e), g();
                  },
                  o
                ),
                  (b = null);
              }
            }
            if (
              (b.open(e.method.toUpperCase(), s(_, e.params, e.paramsSerializer), !0),
              (b.timeout = e.timeout),
              'onloadend' in b
                ? (b.onloadend = k)
                : (b.onreadystatechange = function () {
                    b && 4 === b.readyState && (0 !== b.status || (b.responseURL && 0 === b.responseURL.indexOf('file:'))) && setTimeout(k);
                  }),
              (b.onabort = function () {
                b && (r(new l('Request aborted', l.ECONNABORTED, e, b)), (b = null));
              }),
              (b.onerror = function () {
                r(new l('Network Error', l.ERR_NETWORK, e, b, b)), (b = null);
              }),
              (b.ontimeout = function () {
                var t = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded',
                  n = e.transitional || c;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(new l(t, n.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED, e, b)), (b = null);
              }),
              n.isStandardBrowserEnv())
            ) {
              var j = (e.withCredentials || f(_)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
              j && (m[e.xsrfHeaderName] = j);
            }
            'setRequestHeader' in b &&
              n.forEach(m, function (e, t) {
                void 0 === y && 'content-type' === t.toLowerCase() ? delete m[t] : b.setRequestHeader(t, e);
              }),
              n.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials),
              v && 'json' !== v && (b.responseType = e.responseType),
              'function' == typeof e.onDownloadProgress && b.addEventListener('progress', e.onDownloadProgress),
              'function' == typeof e.onUploadProgress && b.upload && b.upload.addEventListener('progress', e.onUploadProgress),
              (e.cancelToken || e.signal) &&
                ((d = function (e) {
                  b && (r(!e || (e && e.type) ? new p() : e), b.abort(), (b = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(d),
                e.signal && (e.signal.aborted ? d() : e.signal.addEventListener('abort', d))),
              y || (y = null);
            var A = h(_);
            A && -1 === ['http', 'https', 'file'].indexOf(A) ? r(new l('Unsupported protocol ' + A + ':', l.ERR_BAD_REQUEST, e)) : b.send(y);
          });
        };
      },
      1609: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = r(1849),
          o = r(321),
          s = r(7185),
          a = (function e(t) {
            var r = new o(t),
              a = i(o.prototype.request, r);
            return (
              n.extend(a, o.prototype, r),
              n.extend(a, r),
              (a.create = function (r) {
                return e(s(t, r));
              }),
              a
            );
          })(r(5546));
        (a.Axios = o),
          (a.CanceledError = r(644)),
          (a.CancelToken = r(4972)),
          (a.isCancel = r(6502)),
          (a.VERSION = r(7288).version),
          (a.toFormData = r(7675)),
          (a.AxiosError = r(2648)),
          (a.Cancel = a.CanceledError),
          (a.all = function (e) {
            return Promise.all(e);
          }),
          (a.spread = r(8713)),
          (a.isAxiosError = r(6268)),
          (e.exports = a),
          (e.exports.default = a);
      },
      4972: (e, t, r) => {
        'use strict';
        var n = r(644);
        function i(e) {
          if ('function' != typeof e) throw new TypeError('executor must be a function.');
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var r = this;
          this.promise.then(function (e) {
            if (r._listeners) {
              var t,
                n = r._listeners.length;
              for (t = 0; t < n; t++) r._listeners[t](e);
              r._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                n = new Promise(function (e) {
                  r.subscribe(e), (t = e);
                }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e) {
              r.reason || ((r.reason = new n(e)), t(r.reason));
            });
        }
        (i.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (i.prototype.subscribe = function (e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
          }),
          (i.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (i.source = function () {
            var e;
            return {
              token: new i(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = i);
      },
      644: (e, t, r) => {
        'use strict';
        var n = r(2648);
        function i(e) {
          n.call(this, null == e ? 'canceled' : e, n.ERR_CANCELED), (this.name = 'CanceledError');
        }
        r(4867).inherits(i, n, { __CANCEL__: !0 }), (e.exports = i);
      },
      6502: e => {
        'use strict';
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      321: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = r(5327),
          o = r(782),
          s = r(3572),
          a = r(7185),
          u = r(4097),
          f = r(4875),
          c = f.validators;
        function l(e) {
          (this.defaults = e), (this.interceptors = { request: new o(), response: new o() });
        }
        (l.prototype.request = function (e, t) {
          'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = a(this.defaults, t)).method ? (t.method = t.method.toLowerCase()) : this.defaults.method ? (t.method = this.defaults.method.toLowerCase()) : (t.method = 'get');
          var r = t.transitional;
          void 0 !== r && f.assertOptions(r, { silentJSONParsing: c.transitional(c.boolean), forcedJSONParsing: c.transitional(c.boolean), clarifyTimeoutError: c.transitional(c.boolean) }, !1);
          var n = [],
            i = !0;
          this.interceptors.request.forEach(function (e) {
            ('function' == typeof e.runWhen && !1 === e.runWhen(t)) || ((i = i && e.synchronous), n.unshift(e.fulfilled, e.rejected));
          });
          var o,
            u = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              u.push(e.fulfilled, e.rejected);
            }),
            !i)
          ) {
            var l = [s, void 0];
            for (Array.prototype.unshift.apply(l, n), l = l.concat(u), o = Promise.resolve(t); l.length; ) o = o.then(l.shift(), l.shift());
            return o;
          }
          for (var p = t; n.length; ) {
            var h = n.shift(),
              d = n.shift();
            try {
              p = h(p);
            } catch (e) {
              d(e);
              break;
            }
          }
          try {
            o = s(p);
          } catch (e) {
            return Promise.reject(e);
          }
          for (; u.length; ) o = o.then(u.shift(), u.shift());
          return o;
        }),
          (l.prototype.getUri = function (e) {
            e = a(this.defaults, e);
            var t = u(e.baseURL, e.url);
            return i(t, e.params, e.paramsSerializer);
          }),
          n.forEach(['delete', 'get', 'head', 'options'], function (e) {
            l.prototype[e] = function (t, r) {
              return this.request(a(r || {}, { method: e, url: t, data: (r || {}).data }));
            };
          }),
          n.forEach(['post', 'put', 'patch'], function (e) {
            function t(t) {
              return function (r, n, i) {
                return this.request(a(i || {}, { method: e, headers: t ? { 'Content-Type': 'multipart/form-data' } : {}, url: r, data: n }));
              };
            }
            (l.prototype[e] = t()), (l.prototype[e + 'Form'] = t(!0));
          }),
          (e.exports = l);
      },
      2648: (e, t, r) => {
        'use strict';
        var n = r(4867);
        function i(e, t, r, n, i) {
          Error.call(this), (this.message = e), (this.name = 'AxiosError'), t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
        }
        n.inherits(i, Error, {
          toJSON: function () {
            return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code, status: this.response && this.response.status ? this.response.status : null };
          },
        });
        var o = i.prototype,
          s = {};
        ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED'].forEach(function (e) {
          s[e] = { value: e };
        }),
          Object.defineProperties(i, s),
          Object.defineProperty(o, 'isAxiosError', { value: !0 }),
          (i.from = function (e, t, r, s, a, u) {
            var f = Object.create(o);
            return (
              n.toFlatObject(e, f, function (e) {
                return e !== Error.prototype;
              }),
              i.call(f, e.message, t, r, s, a),
              (f.name = e.name),
              u && Object.assign(f, u),
              f
            );
          }),
          (e.exports = i);
      },
      782: (e, t, r) => {
        'use strict';
        var n = r(4867);
        function i() {
          this.handlers = [];
        }
        (i.prototype.use = function (e, t, r) {
          return this.handlers.push({ fulfilled: e, rejected: t, synchronous: !!r && r.synchronous, runWhen: r ? r.runWhen : null }), this.handlers.length - 1;
        }),
          (i.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (i.prototype.forEach = function (e) {
            n.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = i);
      },
      4097: (e, t, r) => {
        'use strict';
        var n = r(1793),
          i = r(7303);
        e.exports = function (e, t) {
          return e && !n(t) ? i(e, t) : t;
        };
      },
      3572: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = r(8527),
          o = r(6502),
          s = r(5546),
          a = r(644);
        function u(e) {
          if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new a();
        }
        e.exports = function (e) {
          return (
            u(e),
            (e.headers = e.headers || {}),
            (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
            n.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
              delete e.headers[t];
            }),
            (e.adapter || s.adapter)(e).then(
              function (t) {
                return u(e), (t.data = i.call(e, t.data, t.headers, e.transformResponse)), t;
              },
              function (t) {
                return o(t) || (u(e), t && t.response && (t.response.data = i.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
              }
            )
          );
        };
      },
      7185: (e, t, r) => {
        'use strict';
        var n = r(4867);
        e.exports = function (e, t) {
          t = t || {};
          var r = {};
          function i(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t;
          }
          function o(r) {
            return n.isUndefined(t[r]) ? (n.isUndefined(e[r]) ? void 0 : i(void 0, e[r])) : i(e[r], t[r]);
          }
          function s(e) {
            if (!n.isUndefined(t[e])) return i(void 0, t[e]);
          }
          function a(r) {
            return n.isUndefined(t[r]) ? (n.isUndefined(e[r]) ? void 0 : i(void 0, e[r])) : i(void 0, t[r]);
          }
          function u(r) {
            return r in t ? i(e[r], t[r]) : r in e ? i(void 0, e[r]) : void 0;
          }
          var f = { url: s, method: s, data: s, baseURL: a, transformRequest: a, transformResponse: a, paramsSerializer: a, timeout: a, timeoutMessage: a, withCredentials: a, adapter: a, responseType: a, xsrfCookieName: a, xsrfHeaderName: a, onUploadProgress: a, onDownloadProgress: a, decompress: a, maxContentLength: a, maxBodyLength: a, beforeRedirect: a, transport: a, httpAgent: a, httpsAgent: a, cancelToken: a, socketPath: a, responseEncoding: a, validateStatus: u };
          return (
            n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
              var t = f[e] || o,
                i = t(e);
              (n.isUndefined(i) && t !== u) || (r[e] = i);
            }),
            r
          );
        };
      },
      6026: (e, t, r) => {
        'use strict';
        var n = r(2648);
        e.exports = function (e, t, r) {
          var i = r.config.validateStatus;
          r.status && i && !i(r.status) ? t(new n('Request failed with status code ' + r.status, [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) : e(r);
        };
      },
      8527: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = r(5546);
        e.exports = function (e, t, r) {
          var o = this || i;
          return (
            n.forEach(r, function (r) {
              e = r.call(o, e, t);
            }),
            e
          );
        };
      },
      5546: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = r(6016),
          o = r(2648),
          s = r(7874),
          a = r(7675),
          u = { 'Content-Type': 'application/x-www-form-urlencoded' };
        function f(e, t) {
          !n.isUndefined(e) && n.isUndefined(e['Content-Type']) && (e['Content-Type'] = t);
        }
        var c,
          l = {
            transitional: s,
            adapter: (('undefined' != typeof XMLHttpRequest || ('undefined' != typeof process && '[object process]' === Object.prototype.toString.call(process))) && (c = r(5448)), c),
            transformRequest: [
              function (e, t) {
                if ((i(t, 'Accept'), i(t, 'Content-Type'), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e))) return e;
                if (n.isArrayBufferView(e)) return e.buffer;
                if (n.isURLSearchParams(e)) return f(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString();
                var r,
                  o = n.isObject(e),
                  s = t && t['Content-Type'];
                if ((r = n.isFileList(e)) || (o && 'multipart/form-data' === s)) {
                  var u = this.env && this.env.FormData;
                  return a(r ? { 'files[]': e } : e, u && new u());
                }
                return o || 'application/json' === s
                  ? (f(t, 'application/json'),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (0, JSON.parse)(e), n.trim(e);
                        } catch (e) {
                          if ('SyntaxError' !== e.name) throw e;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e;
              },
            ],
            transformResponse: [
              function (e) {
                var t = this.transitional || l.transitional,
                  r = t && t.silentJSONParsing,
                  i = t && t.forcedJSONParsing,
                  s = !r && 'json' === this.responseType;
                if (s || (i && n.isString(e) && e.length))
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (s) {
                      if ('SyntaxError' === e.name) throw o.from(e, o.ERR_BAD_RESPONSE, this, null, this.response);
                      throw e;
                    }
                  }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: r(1623) },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: { common: { Accept: 'application/json, text/plain, */*' } },
          };
        n.forEach(['delete', 'get', 'head'], function (e) {
          l.headers[e] = {};
        }),
          n.forEach(['post', 'put', 'patch'], function (e) {
            l.headers[e] = n.merge(u);
          }),
          (e.exports = l);
      },
      7874: e => {
        'use strict';
        e.exports = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 };
      },
      7288: e => {
        e.exports = { version: '0.27.2' };
      },
      1849: e => {
        'use strict';
        e.exports = function (e, t) {
          return function () {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
            return e.apply(t, r);
          };
        };
      },
      5327: (e, t, r) => {
        'use strict';
        var n = r(4867);
        function i(e) {
          return encodeURIComponent(e).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        }
        e.exports = function (e, t, r) {
          if (!t) return e;
          var o;
          if (r) o = r(t);
          else if (n.isURLSearchParams(t)) o = t.toString();
          else {
            var s = [];
            n.forEach(t, function (e, t) {
              null != e &&
                (n.isArray(e) ? (t += '[]') : (e = [e]),
                n.forEach(e, function (e) {
                  n.isDate(e) ? (e = e.toISOString()) : n.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + '=' + i(e));
                }));
            }),
              (o = s.join('&'));
          }
          if (o) {
            var a = e.indexOf('#');
            -1 !== a && (e = e.slice(0, a)), (e += (-1 === e.indexOf('?') ? '?' : '&') + o);
          }
          return e;
        };
      },
      7303: e => {
        'use strict';
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
        };
      },
      4372: (e, t, r) => {
        'use strict';
        var n = r(4867);
        e.exports = n.isStandardBrowserEnv()
          ? {
              write: function (e, t, r, i, o, s) {
                var a = [];
                a.push(e + '=' + encodeURIComponent(t)), n.isNumber(r) && a.push('expires=' + new Date(r).toGMTString()), n.isString(i) && a.push('path=' + i), n.isString(o) && a.push('domain=' + o), !0 === s && a.push('secure'), (document.cookie = a.join('; '));
              },
              read: function (e) {
                var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      1793: e => {
        'use strict';
        e.exports = function (e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        };
      },
      6268: (e, t, r) => {
        'use strict';
        var n = r(4867);
        e.exports = function (e) {
          return n.isObject(e) && !0 === e.isAxiosError;
        };
      },
      7985: (e, t, r) => {
        'use strict';
        var n = r(4867);
        e.exports = n.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement('a');
              function i(e) {
                var n = e;
                return t && (r.setAttribute('href', n), (n = r.href)), r.setAttribute('href', n), { href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, '') : '', host: r.host, search: r.search ? r.search.replace(/^\?/, '') : '', hash: r.hash ? r.hash.replace(/^#/, '') : '', hostname: r.hostname, port: r.port, pathname: '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname };
              }
              return (
                (e = i(window.location.href)),
                function (t) {
                  var r = n.isString(t) ? i(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      6016: (e, t, r) => {
        'use strict';
        var n = r(4867);
        e.exports = function (e, t) {
          n.forEach(e, function (r, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && ((e[t] = r), delete e[n]);
          });
        };
      },
      1623: e => {
        e.exports = null;
      },
      4109: (e, t, r) => {
        'use strict';
        var n = r(4867),
          i = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
        e.exports = function (e) {
          var t,
            r,
            o,
            s = {};
          return e
            ? (n.forEach(e.split('\n'), function (e) {
                if (((o = e.indexOf(':')), (t = n.trim(e.substr(0, o)).toLowerCase()), (r = n.trim(e.substr(o + 1))), t)) {
                  if (s[t] && i.indexOf(t) >= 0) return;
                  s[t] = 'set-cookie' === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ', ' + r : r;
                }
              }),
              s)
            : s;
        };
      },
      205: e => {
        'use strict';
        e.exports = function (e) {
          var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (t && t[1]) || '';
        };
      },
      8713: e => {
        'use strict';
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      7675: (e, t, r) => {
        'use strict';
        var n = r(4867);
        e.exports = function (e, t) {
          t = t || new FormData();
          var r = [];
          function i(e) {
            return null === e ? '' : n.isDate(e) ? e.toISOString() : n.isArrayBuffer(e) || n.isTypedArray(e) ? ('function' == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
          }
          return (
            (function e(o, s) {
              if (n.isPlainObject(o) || n.isArray(o)) {
                if (-1 !== r.indexOf(o)) throw Error('Circular reference detected in ' + s);
                r.push(o),
                  n.forEach(o, function (r, o) {
                    if (!n.isUndefined(r)) {
                      var a,
                        u = s ? s + '.' + o : o;
                      if (r && !s && 'object' == typeof r)
                        if (n.endsWith(o, '{}')) r = JSON.stringify(r);
                        else if (n.endsWith(o, '[]') && (a = n.toArray(r)))
                          return void a.forEach(function (e) {
                            !n.isUndefined(e) && t.append(u, i(e));
                          });
                      e(r, u);
                    }
                  }),
                  r.pop();
              } else t.append(s, i(o));
            })(e),
            t
          );
        };
      },
      4875: (e, t, r) => {
        'use strict';
        var n = r(7288).version,
          i = r(2648),
          o = {};
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
          o[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
          };
        });
        var s = {};
        (o.transitional = function (e, t, r) {
          function o(e, t) {
            return '[Axios v' + n + "] Transitional option '" + e + "'" + t + (r ? '. ' + r : '');
          }
          return function (r, n, a) {
            if (!1 === e) throw new i(o(n, ' has been removed' + (t ? ' in ' + t : '')), i.ERR_DEPRECATED);
            return t && !s[n] && ((s[n] = !0), console.warn(o(n, ' has been deprecated since v' + t + ' and will be removed in the near future'))), !e || e(r, n, a);
          };
        }),
          (e.exports = {
            assertOptions: function (e, t, r) {
              if ('object' != typeof e) throw new i('options must be an object', i.ERR_BAD_OPTION_VALUE);
              for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
                var s = n[o],
                  a = t[s];
                if (a) {
                  var u = e[s],
                    f = void 0 === u || a(u, s, e);
                  if (!0 !== f) throw new i('option ' + s + ' must be ' + f, i.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== r) throw new i('Unknown option ' + s, i.ERR_BAD_OPTION);
              }
            },
            validators: o,
          });
      },
      4867: (e, t, r) => {
        'use strict';
        var n,
          i = r(1849),
          o = Object.prototype.toString,
          s =
            ((n = Object.create(null)),
            function (e) {
              var t = o.call(e);
              return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
            });
        function a(e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return s(t) === e;
            }
          );
        }
        function u(e) {
          return Array.isArray(e);
        }
        function f(e) {
          return void 0 === e;
        }
        var c = a('ArrayBuffer');
        function l(e) {
          return null !== e && 'object' == typeof e;
        }
        function p(e) {
          if ('object' !== s(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        var h = a('Date'),
          d = a('File'),
          y = a('Blob'),
          m = a('FileList');
        function v(e) {
          return '[object Function]' === o.call(e);
        }
        var g = a('URLSearchParams');
        function b(e, t) {
          if (null != e)
            if (('object' != typeof e && (e = [e]), u(e))) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
            else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
        }
        var w,
          O =
            ((w = 'undefined' != typeof Uint8Array && Object.getPrototypeOf(Uint8Array)),
            function (e) {
              return w && e instanceof w;
            });
        e.exports = {
          isArray: u,
          isArrayBuffer: c,
          isBuffer: function (e) {
            return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && 'function' == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
          },
          isFormData: function (e) {
            var t = '[object FormData]';
            return e && (('function' == typeof FormData && e instanceof FormData) || o.call(e) === t || (v(e.toString) && e.toString() === t));
          },
          isArrayBufferView: function (e) {
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && c(e.buffer);
          },
          isString: function (e) {
            return 'string' == typeof e;
          },
          isNumber: function (e) {
            return 'number' == typeof e;
          },
          isObject: l,
          isPlainObject: p,
          isUndefined: f,
          isDate: h,
          isFile: d,
          isBlob: y,
          isFunction: v,
          isStream: function (e) {
            return l(e) && v(e.pipe);
          },
          isURLSearchParams: g,
          isStandardBrowserEnv: function () {
            return ('undefined' == typeof navigator || ('ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product)) && 'undefined' != typeof window && 'undefined' != typeof document;
          },
          forEach: b,
          merge: function e() {
            var t = {};
            function r(r, n) {
              p(t[n]) && p(r) ? (t[n] = e(t[n], r)) : p(r) ? (t[n] = e({}, r)) : u(r) ? (t[n] = r.slice()) : (t[n] = r);
            }
            for (var n = 0, i = arguments.length; n < i; n++) b(arguments[n], r);
            return t;
          },
          extend: function (e, t, r) {
            return (
              b(t, function (t, n) {
                e[n] = r && 'function' == typeof t ? i(t, r) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, r, n) {
            (e.prototype = Object.create(t.prototype, n)), (e.prototype.constructor = e), r && Object.assign(e.prototype, r);
          },
          toFlatObject: function (e, t, r) {
            var n,
              i,
              o,
              s = {};
            t = t || {};
            do {
              for (i = (n = Object.getOwnPropertyNames(e)).length; i-- > 0; ) s[(o = n[i])] || ((t[o] = e[o]), (s[o] = !0));
              e = Object.getPrototypeOf(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: s,
          kindOfTest: a,
          endsWith: function (e, t, r) {
            (e = String(e)), (void 0 === r || r > e.length) && (r = e.length), (r -= t.length);
            var n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: function (e) {
            if (!e) return null;
            var t = e.length;
            if (f(t)) return null;
            for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
            return r;
          },
          isTypedArray: O,
          isFileList: m,
        };
      },
      3281: (e, t, r) => {
        'use strict';
        e.exports = r(9050);
      },
      2967: e => {
        'use strict';
        e.exports = n;
        var t,
          r = /\/|\./;
        function n(e, t) {
          r.test(e) || ((e = 'google/protobuf/' + e + '.proto'), (t = { nested: { google: { nested: { protobuf: { nested: t } } } } })), (n[e] = t);
        }
        n('any', { Any: { fields: { type_url: { type: 'string', id: 1 }, value: { type: 'bytes', id: 2 } } } }),
          n('duration', { Duration: (t = { fields: { seconds: { type: 'int64', id: 1 }, nanos: { type: 'int32', id: 2 } } }) }),
          n('timestamp', { Timestamp: t }),
          n('empty', { Empty: { fields: {} } }),
          n('struct', { Struct: { fields: { fields: { keyType: 'string', type: 'Value', id: 1 } } }, Value: { oneofs: { kind: { oneof: ['nullValue', 'numberValue', 'stringValue', 'boolValue', 'structValue', 'listValue'] } }, fields: { nullValue: { type: 'NullValue', id: 1 }, numberValue: { type: 'double', id: 2 }, stringValue: { type: 'string', id: 3 }, boolValue: { type: 'bool', id: 4 }, structValue: { type: 'Struct', id: 5 }, listValue: { type: 'ListValue', id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: 'repeated', type: 'Value', id: 1 } } } }),
          n('wrappers', { DoubleValue: { fields: { value: { type: 'double', id: 1 } } }, FloatValue: { fields: { value: { type: 'float', id: 1 } } }, Int64Value: { fields: { value: { type: 'int64', id: 1 } } }, UInt64Value: { fields: { value: { type: 'uint64', id: 1 } } }, Int32Value: { fields: { value: { type: 'int32', id: 1 } } }, UInt32Value: { fields: { value: { type: 'uint32', id: 1 } } }, BoolValue: { fields: { value: { type: 'bool', id: 1 } } }, StringValue: { fields: { value: { type: 'string', id: 1 } } }, BytesValue: { fields: { value: { type: 'bytes', id: 1 } } } }),
          n('field_mask', { FieldMask: { fields: { paths: { rule: 'repeated', type: 'string', id: 1 } } } }),
          (n.get = function (e) {
            return n[e] || null;
          });
      },
      3996: (e, t, r) => {
        'use strict';
        var n = t,
          i = r(7025),
          o = r(9935);
        function s(e, t, r, n) {
          if (t.resolvedType)
            if (t.resolvedType instanceof i) {
              e('switch(d%s){', n);
              for (var o = t.resolvedType.values, s = Object.keys(o), a = 0; a < s.length; ++a) t.repeated && o[s[a]] === t.typeDefault && e('default:'), e('case%j:', s[a])('case %i:', o[s[a]])('m%s=%j', n, o[s[a]])('break');
              e('}');
            } else e('if(typeof d%s!=="object")', n)('throw TypeError(%j)', t.fullName + ': object expected')('m%s=types[%i].fromObject(d%s)', n, r, n);
          else {
            var u = !1;
            switch (t.type) {
              case 'double':
              case 'float':
                e('m%s=Number(d%s)', n, n);
                break;
              case 'uint32':
              case 'fixed32':
                e('m%s=d%s>>>0', n, n);
                break;
              case 'int32':
              case 'sint32':
              case 'sfixed32':
                e('m%s=d%s|0', n, n);
                break;
              case 'uint64':
                u = !0;
              case 'int64':
              case 'sint64':
              case 'fixed64':
              case 'sfixed64':
                e('if(util.Long)')('(m%s=util.Long.fromValue(d%s)).unsigned=%j', n, n, u)('else if(typeof d%s==="string")', n)('m%s=parseInt(d%s,10)', n, n)('else if(typeof d%s==="number")', n)('m%s=d%s', n, n)('else if(typeof d%s==="object")', n)('m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)', n, n, n, u ? 'true' : '');
                break;
              case 'bytes':
                e('if(typeof d%s==="string")', n)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', n, n, n)('else if(d%s.length)', n)('m%s=d%s', n, n);
                break;
              case 'string':
                e('m%s=String(d%s)', n, n);
                break;
              case 'bool':
                e('m%s=Boolean(d%s)', n, n);
            }
          }
          return e;
        }
        function a(e, t, r, n) {
          if (t.resolvedType) t.resolvedType instanceof i ? e('d%s=o.enums===String?types[%i].values[m%s]:m%s', n, r, n, n) : e('d%s=types[%i].toObject(m%s,o)', n, r, n);
          else {
            var o = !1;
            switch (t.type) {
              case 'double':
              case 'float':
                e('d%s=o.json&&!isFinite(m%s)?String(m%s):m%s', n, n, n, n);
                break;
              case 'uint64':
                o = !0;
              case 'int64':
              case 'sint64':
              case 'fixed64':
              case 'sfixed64':
                e('if(typeof m%s==="number")', n)('d%s=o.longs===String?String(m%s):m%s', n, n, n)('else')('d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s', n, n, n, n, o ? 'true' : '', n);
                break;
              case 'bytes':
                e('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', n, n, n, n, n);
                break;
              default:
                e('d%s=m%s', n, n);
            }
          }
          return e;
        }
        (n.fromObject = function (e) {
          var t = e.fieldsArray,
            r = o.codegen(['d'], e.name + '$fromObject')('if(d instanceof this.ctor)')('return d');
          if (!t.length) return r('return new this.ctor');
          r('var m=new this.ctor');
          for (var n = 0; n < t.length; ++n) {
            var a = t[n].resolve(),
              u = o.safeProp(a.name);
            a.map ? (r('if(d%s){', u)('if(typeof d%s!=="object")', u)('throw TypeError(%j)', a.fullName + ': object expected')('m%s={}', u)('for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){', u), s(r, a, n, u + '[ks[i]]')('}')('}')) : a.repeated ? (r('if(d%s){', u)('if(!Array.isArray(d%s))', u)('throw TypeError(%j)', a.fullName + ': array expected')('m%s=[]', u)('for(var i=0;i<d%s.length;++i){', u), s(r, a, n, u + '[i]')('}')('}')) : (a.resolvedType instanceof i || r('if(d%s!=null){', u), s(r, a, n, u), a.resolvedType instanceof i || r('}'));
          }
          return r('return m');
        }),
          (n.toObject = function (e) {
            var t = e.fieldsArray.slice().sort(o.compareFieldsById);
            if (!t.length) return o.codegen()('return {}');
            for (var r = o.codegen(['m', 'o'], e.name + '$toObject')('if(!o)')('o={}')('var d={}'), n = [], s = [], u = [], f = 0; f < t.length; ++f) t[f].partOf || (t[f].resolve().repeated ? n : t[f].map ? s : u).push(t[f]);
            if (n.length) {
              for (r('if(o.arrays||o.defaults){'), f = 0; f < n.length; ++f) r('d%s=[]', o.safeProp(n[f].name));
              r('}');
            }
            if (s.length) {
              for (r('if(o.objects||o.defaults){'), f = 0; f < s.length; ++f) r('d%s={}', o.safeProp(s[f].name));
              r('}');
            }
            if (u.length) {
              for (r('if(o.defaults){'), f = 0; f < u.length; ++f) {
                var c = u[f],
                  l = o.safeProp(c.name);
                if (c.resolvedType instanceof i) r('d%s=o.enums===String?%j:%j', l, c.resolvedType.valuesById[c.typeDefault], c.typeDefault);
                else if (c.long) r('if(util.Long){')('var n=new util.Long(%i,%i,%j)', c.typeDefault.low, c.typeDefault.high, c.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n', l)('}else')('d%s=o.longs===String?%j:%i', l, c.typeDefault.toString(), c.typeDefault.toNumber());
                else if (c.bytes) {
                  var p = '[' + Array.prototype.slice.call(c.typeDefault).join(',') + ']';
                  r('if(o.bytes===String)d%s=%j', l, String.fromCharCode.apply(String, c.typeDefault))('else{')('d%s=%s', l, p)('if(o.bytes!==Array)d%s=util.newBuffer(d%s)', l, l)('}');
                } else r('d%s=%j', l, c.typeDefault);
              }
              r('}');
            }
            var h = !1;
            for (f = 0; f < t.length; ++f) {
              c = t[f];
              var d = e._fieldsArray.indexOf(c);
              (l = o.safeProp(c.name)), c.map ? (h || ((h = !0), r('var ks2')), r('if(m%s&&(ks2=Object.keys(m%s)).length){', l, l)('d%s={}', l)('for(var j=0;j<ks2.length;++j){'), a(r, c, d, l + '[ks2[j]]')('}')) : c.repeated ? (r('if(m%s&&m%s.length){', l, l)('d%s=[]', l)('for(var j=0;j<m%s.length;++j){', l), a(r, c, d, l + '[j]')('}')) : (r('if(m%s!=null&&m.hasOwnProperty(%j)){', l, c.name), a(r, c, d, l), c.partOf && r('if(o.oneofs)')('d%s=%j', o.safeProp(c.partOf.name), c.name)), r('}');
            }
            return r('return d');
          });
      },
      5305: (e, t, r) => {
        'use strict';
        e.exports = function (e) {
          var t = o.codegen(['r', 'l'], e.name + '$decode')('if(!(r instanceof Reader))')('r=Reader.create(r)')(
            'var c=l===undefined?r.len:r.pos+l,m=new this.ctor' +
              (e.fieldsArray.filter(function (e) {
                return e.map;
              }).length
                ? ',k,value'
                : '')
          )('while(r.pos<c){')('var t=r.uint32()');
          e.group && t('if((t&7)===4)')('break'), t('switch(t>>>3){');
          for (var r = 0; r < e.fieldsArray.length; ++r) {
            var a = e._fieldsArray[r].resolve(),
              u = a.resolvedType instanceof n ? 'int32' : a.type,
              f = 'm' + o.safeProp(a.name);
            t('case %i:', a.id),
              a.map
                ? (t('if(%s===util.emptyObject)', f)('%s={}', f)('var c2 = r.uint32()+r.pos'), void 0 !== i.defaults[a.keyType] ? t('k=%j', i.defaults[a.keyType]) : t('k=null'), void 0 !== i.defaults[u] ? t('value=%j', i.defaults[u]) : t('value=null'), t('while(r.pos<c2){')('var tag2=r.uint32()')('switch(tag2>>>3){')('case 1: k=r.%s(); break', a.keyType)('case 2:'), void 0 === i.basic[u] ? t('value=types[%i].decode(r,r.uint32())', r) : t('value=r.%s()', u), t('break')('default:')('r.skipType(tag2&7)')('break')('}')('}'), void 0 !== i.long[a.keyType] ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', f) : t('%s[k]=value', f))
                : a.repeated
                ? (t('if(!(%s&&%s.length))', f, f)('%s=[]', f), void 0 !== i.packed[u] && t('if((t&7)===2){')('var c2=r.uint32()+r.pos')('while(r.pos<c2)')('%s.push(r.%s())', f, u)('}else'), void 0 === i.basic[u] ? t(a.resolvedType.group ? '%s.push(types[%i].decode(r))' : '%s.push(types[%i].decode(r,r.uint32()))', f, r) : t('%s.push(r.%s())', f, u))
                : void 0 === i.basic[u]
                ? t(a.resolvedType.group ? '%s=types[%i].decode(r)' : '%s=types[%i].decode(r,r.uint32())', f, r)
                : t('%s=r.%s()', f, u),
              t('break');
          }
          for (t('default:')('r.skipType(t&7)')('break')('}')('}'), r = 0; r < e._fieldsArray.length; ++r) {
            var c = e._fieldsArray[r];
            c.required && t('if(!m.hasOwnProperty(%j))', c.name)('throw util.ProtocolError(%j,{instance:m})', s(c));
          }
          return t('return m');
        };
        var n = r(7025),
          i = r(7063),
          o = r(9935);
        function s(e) {
          return "missing required '" + e.name + "'";
        }
      },
      4928: (e, t, r) => {
        'use strict';
        e.exports = function (e) {
          for (var t, r = o.codegen(['m', 'w'], e.name + '$encode')('if(!w)')('w=Writer.create()'), a = e.fieldsArray.slice().sort(o.compareFieldsById), u = 0; u < a.length; ++u) {
            var f = a[u].resolve(),
              c = e._fieldsArray.indexOf(f),
              l = f.resolvedType instanceof n ? 'int32' : f.type,
              p = i.basic[l];
            (t = 'm' + o.safeProp(f.name)), f.map ? (r('if(%s!=null&&Object.hasOwnProperty.call(m,%j)){', t, f.name)('for(var ks=Object.keys(%s),i=0;i<ks.length;++i){', t)('w.uint32(%i).fork().uint32(%i).%s(ks[i])', ((f.id << 3) | 2) >>> 0, 8 | i.mapKey[f.keyType], f.keyType), void 0 === p ? r('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', c, t) : r('.uint32(%i).%s(%s[ks[i]]).ldelim()', 16 | p, l, t), r('}')('}')) : f.repeated ? (r('if(%s!=null&&%s.length){', t, t), f.packed && void 0 !== i.packed[l] ? r('w.uint32(%i).fork()', ((f.id << 3) | 2) >>> 0)('for(var i=0;i<%s.length;++i)', t)('w.%s(%s[i])', l, t)('w.ldelim()') : (r('for(var i=0;i<%s.length;++i)', t), void 0 === p ? s(r, f, c, t + '[i]') : r('w.uint32(%i).%s(%s[i])', ((f.id << 3) | p) >>> 0, l, t)), r('}')) : (f.optional && r('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', t, f.name), void 0 === p ? s(r, f, c, t) : r('w.uint32(%i).%s(%s)', ((f.id << 3) | p) >>> 0, l, t));
          }
          return r('return w');
        };
        var n = r(7025),
          i = r(7063),
          o = r(9935);
        function s(e, t, r, n) {
          return t.resolvedType.group ? e('types[%i].encode(%s,w.uint32(%i)).uint32(%i)', r, n, ((t.id << 3) | 3) >>> 0, ((t.id << 3) | 4) >>> 0) : e('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', r, n, ((t.id << 3) | 2) >>> 0);
        }
      },
      7025: (e, t, r) => {
        'use strict';
        e.exports = s;
        var n = r(3243);
        ((s.prototype = Object.create(n.prototype)).constructor = s).className = 'Enum';
        var i = r(9313),
          o = r(9935);
        function s(e, t, r, i, o) {
          if ((n.call(this, e, r), t && 'object' != typeof t)) throw TypeError('values must be an object');
          if (((this.valuesById = {}), (this.values = Object.create(this.valuesById)), (this.comment = i), (this.comments = o || {}), (this.reserved = void 0), t)) for (var s = Object.keys(t), a = 0; a < s.length; ++a) 'number' == typeof t[s[a]] && (this.valuesById[(this.values[s[a]] = t[s[a]])] = s[a]);
        }
        (s.fromJSON = function (e, t) {
          var r = new s(e, t.values, t.options, t.comment, t.comments);
          return (r.reserved = t.reserved), r;
        }),
          (s.prototype.toJSON = function (e) {
            var t = !!e && Boolean(e.keepComments);
            return o.toObject(['options', this.options, 'values', this.values, 'reserved', this.reserved && this.reserved.length ? this.reserved : void 0, 'comment', t ? this.comment : void 0, 'comments', t ? this.comments : void 0]);
          }),
          (s.prototype.add = function (e, t, r) {
            if (!o.isString(e)) throw TypeError('name must be a string');
            if (!o.isInteger(t)) throw TypeError('id must be an integer');
            if (void 0 !== this.values[e]) throw Error("duplicate name '" + e + "' in " + this);
            if (this.isReservedId(t)) throw Error('id ' + t + ' is reserved in ' + this);
            if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
            if (void 0 !== this.valuesById[t]) {
              if (!this.options || !this.options.allow_alias) throw Error('duplicate id ' + t + ' in ' + this);
              this.values[e] = t;
            } else this.valuesById[(this.values[e] = t)] = e;
            return (this.comments[e] = r || null), this;
          }),
          (s.prototype.remove = function (e) {
            if (!o.isString(e)) throw TypeError('name must be a string');
            var t = this.values[e];
            if (null == t) throw Error("name '" + e + "' does not exist in " + this);
            return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this;
          }),
          (s.prototype.isReservedId = function (e) {
            return i.isReservedId(this.reserved, e);
          }),
          (s.prototype.isReservedName = function (e) {
            return i.isReservedName(this.reserved, e);
          });
      },
      3548: (e, t, r) => {
        'use strict';
        e.exports = f;
        var n = r(3243);
        ((f.prototype = Object.create(n.prototype)).constructor = f).className = 'Field';
        var i,
          o = r(7025),
          s = r(7063),
          a = r(9935),
          u = /^required|optional|repeated$/;
        function f(e, t, r, i, o, f, c) {
          if ((a.isObject(i) ? ((c = o), (f = i), (i = o = void 0)) : a.isObject(o) && ((c = f), (f = o), (o = void 0)), n.call(this, e, f), !a.isInteger(t) || t < 0)) throw TypeError('id must be a non-negative integer');
          if (!a.isString(r)) throw TypeError('type must be a string');
          if (void 0 !== i && !u.test((i = i.toString().toLowerCase()))) throw TypeError('rule must be a string rule');
          if (void 0 !== o && !a.isString(o)) throw TypeError('extend must be a string');
          'proto3_optional' === i && (i = 'optional'), (this.rule = i && 'optional' !== i ? i : void 0), (this.type = r), (this.id = t), (this.extend = o || void 0), (this.required = 'required' === i), (this.optional = !this.required), (this.repeated = 'repeated' === i), (this.map = !1), (this.message = null), (this.partOf = null), (this.typeDefault = null), (this.defaultValue = null), (this.long = !!a.Long && void 0 !== s.long[r]), (this.bytes = 'bytes' === r), (this.resolvedType = null), (this.extensionField = null), (this.declaringField = null), (this._packed = null), (this.comment = c);
        }
        (f.fromJSON = function (e, t) {
          return new f(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
        }),
          Object.defineProperty(f.prototype, 'packed', {
            get: function () {
              return null === this._packed && (this._packed = !1 !== this.getOption('packed')), this._packed;
            },
          }),
          (f.prototype.setOption = function (e, t, r) {
            return 'packed' === e && (this._packed = null), n.prototype.setOption.call(this, e, t, r);
          }),
          (f.prototype.toJSON = function (e) {
            var t = !!e && Boolean(e.keepComments);
            return a.toObject(['rule', ('optional' !== this.rule && this.rule) || void 0, 'type', this.type, 'id', this.id, 'extend', this.extend, 'options', this.options, 'comment', t ? this.comment : void 0]);
          }),
          (f.prototype.resolve = function () {
            if (this.resolved) return this;
            if ((void 0 === (this.typeDefault = s.defaults[this.type]) && ((this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type)), this.resolvedType instanceof i ? (this.typeDefault = null) : (this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]])), this.options && null != this.options.default && ((this.typeDefault = this.options.default), this.resolvedType instanceof o && 'string' == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && ((!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o)) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)) (this.typeDefault = a.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0))), Object.freeze && Object.freeze(this.typeDefault);
            else if (this.bytes && 'string' == typeof this.typeDefault) {
              var e;
              a.base64.test(this.typeDefault) ? a.base64.decode(this.typeDefault, (e = a.newBuffer(a.base64.length(this.typeDefault))), 0) : a.utf8.write(this.typeDefault, (e = a.newBuffer(a.utf8.length(this.typeDefault))), 0), (this.typeDefault = e);
            }
            return this.map ? (this.defaultValue = a.emptyObject) : this.repeated ? (this.defaultValue = a.emptyArray) : (this.defaultValue = this.typeDefault), this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this);
          }),
          (f.d = function (e, t, r, n) {
            return (
              'function' == typeof t ? (t = a.decorateType(t).name) : t && 'object' == typeof t && (t = a.decorateEnum(t).name),
              function (i, o) {
                a.decorateType(i.constructor).add(new f(o, e, t, r, { default: n }));
              }
            );
          }),
          (f._configure = function (e) {
            i = e;
          });
      },
      8836: (e, t, r) => {
        'use strict';
        var n = (e.exports = r(9482));
        (n.build = 'light'),
          (n.load = function (e, t, r) {
            return 'function' == typeof t ? ((r = t), (t = new n.Root())) : t || (t = new n.Root()), t.load(e, r);
          }),
          (n.loadSync = function (e, t) {
            return t || (t = new n.Root()), t.loadSync(e);
          }),
          (n.encoder = r(4928)),
          (n.decoder = r(5305)),
          (n.verifier = r(4497)),
          (n.converter = r(3996)),
          (n.ReflectionObject = r(3243)),
          (n.Namespace = r(9313)),
          (n.Root = r(9424)),
          (n.Enum = r(7025)),
          (n.Type = r(7645)),
          (n.Field = r(3548)),
          (n.OneOf = r(7598)),
          (n.MapField = r(6039)),
          (n.Service = r(7513)),
          (n.Method = r(4429)),
          (n.Message = r(8368)),
          (n.wrappers = r(1667)),
          (n.types = r(7063)),
          (n.util = r(9935)),
          n.ReflectionObject._configure(n.Root),
          n.Namespace._configure(n.Type, n.Service, n.Enum),
          n.Root._configure(n.Type),
          n.Field._configure(n.Type);
      },
      9482: (e, t, r) => {
        'use strict';
        var n = t;
        function i() {
          n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
        }
        (n.build = 'minimal'), (n.Writer = r(1173)), (n.BufferWriter = r(3155)), (n.Reader = r(1408)), (n.BufferReader = r(593)), (n.util = r(9693)), (n.rpc = r(5994)), (n.roots = r(5054)), (n.configure = i), i();
      },
      9050: (e, t, r) => {
        'use strict';
        var n = (e.exports = r(8836));
        (n.build = 'full'), (n.tokenize = r(626)), (n.parse = r(2228)), (n.common = r(2967)), n.Root._configure(n.Type, n.parse, n.common);
      },
      6039: (e, t, r) => {
        'use strict';
        e.exports = s;
        var n = r(3548);
        ((s.prototype = Object.create(n.prototype)).constructor = s).className = 'MapField';
        var i = r(7063),
          o = r(9935);
        function s(e, t, r, i, s, a) {
          if ((n.call(this, e, t, i, void 0, void 0, s, a), !o.isString(r))) throw TypeError('keyType must be a string');
          (this.keyType = r), (this.resolvedKeyType = null), (this.map = !0);
        }
        (s.fromJSON = function (e, t) {
          return new s(e, t.id, t.keyType, t.type, t.options, t.comment);
        }),
          (s.prototype.toJSON = function (e) {
            var t = !!e && Boolean(e.keepComments);
            return o.toObject(['keyType', this.keyType, 'type', this.type, 'id', this.id, 'extend', this.extend, 'options', this.options, 'comment', t ? this.comment : void 0]);
          }),
          (s.prototype.resolve = function () {
            if (this.resolved) return this;
            if (void 0 === i.mapKey[this.keyType]) throw Error('invalid key type: ' + this.keyType);
            return n.prototype.resolve.call(this);
          }),
          (s.d = function (e, t, r) {
            return (
              'function' == typeof r ? (r = o.decorateType(r).name) : r && 'object' == typeof r && (r = o.decorateEnum(r).name),
              function (n, i) {
                o.decorateType(n.constructor).add(new s(i, e, t, r));
              }
            );
          });
      },
      8368: (e, t, r) => {
        'use strict';
        e.exports = i;
        var n = r(9693);
        function i(e) {
          if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) this[t[r]] = e[t[r]];
        }
        (i.create = function (e) {
          return this.$type.create(e);
        }),
          (i.encode = function (e, t) {
            return this.$type.encode(e, t);
          }),
          (i.encodeDelimited = function (e, t) {
            return this.$type.encodeDelimited(e, t);
          }),
          (i.decode = function (e) {
            return this.$type.decode(e);
          }),
          (i.decodeDelimited = function (e) {
            return this.$type.decodeDelimited(e);
          }),
          (i.verify = function (e) {
            return this.$type.verify(e);
          }),
          (i.fromObject = function (e) {
            return this.$type.fromObject(e);
          }),
          (i.toObject = function (e, t) {
            return this.$type.toObject(e, t);
          }),
          (i.prototype.toJSON = function () {
            return this.$type.toObject(this, n.toJSONOptions);
          });
      },
      4429: (e, t, r) => {
        'use strict';
        e.exports = o;
        var n = r(3243);
        ((o.prototype = Object.create(n.prototype)).constructor = o).className = 'Method';
        var i = r(9935);
        function o(e, t, r, o, s, a, u, f, c) {
          if ((i.isObject(s) ? ((u = s), (s = a = void 0)) : i.isObject(a) && ((u = a), (a = void 0)), void 0 !== t && !i.isString(t))) throw TypeError('type must be a string');
          if (!i.isString(r)) throw TypeError('requestType must be a string');
          if (!i.isString(o)) throw TypeError('responseType must be a string');
          n.call(this, e, u), (this.type = t || 'rpc'), (this.requestType = r), (this.requestStream = !!s || void 0), (this.responseType = o), (this.responseStream = !!a || void 0), (this.resolvedRequestType = null), (this.resolvedResponseType = null), (this.comment = f), (this.parsedOptions = c);
        }
        (o.fromJSON = function (e, t) {
          return new o(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
        }),
          (o.prototype.toJSON = function (e) {
            var t = !!e && Boolean(e.keepComments);
            return i.toObject(['type', ('rpc' !== this.type && this.type) || void 0, 'requestType', this.requestType, 'requestStream', this.requestStream, 'responseType', this.responseType, 'responseStream', this.responseStream, 'options', this.options, 'comment', t ? this.comment : void 0, 'parsedOptions', this.parsedOptions]);
          }),
          (o.prototype.resolve = function () {
            return this.resolved ? this : ((this.resolvedRequestType = this.parent.lookupType(this.requestType)), (this.resolvedResponseType = this.parent.lookupType(this.responseType)), n.prototype.resolve.call(this));
          });
      },
      9313: (e, t, r) => {
        'use strict';
        e.exports = l;
        var n = r(3243);
        ((l.prototype = Object.create(n.prototype)).constructor = l).className = 'Namespace';
        var i,
          o,
          s,
          a = r(3548),
          u = r(7598),
          f = r(9935);
        function c(e, t) {
          if (e && e.length) {
            for (var r = {}, n = 0; n < e.length; ++n) r[e[n].name] = e[n].toJSON(t);
            return r;
          }
        }
        function l(e, t) {
          n.call(this, e, t), (this.nested = void 0), (this._nestedArray = null);
        }
        function p(e) {
          return (e._nestedArray = null), e;
        }
        (l.fromJSON = function (e, t) {
          return new l(e, t.options).addJSON(t.nested);
        }),
          (l.arrayToJSON = c),
          (l.isReservedId = function (e, t) {
            if (e) for (var r = 0; r < e.length; ++r) if ('string' != typeof e[r] && e[r][0] <= t && e[r][1] > t) return !0;
            return !1;
          }),
          (l.isReservedName = function (e, t) {
            if (e) for (var r = 0; r < e.length; ++r) if (e[r] === t) return !0;
            return !1;
          }),
          Object.defineProperty(l.prototype, 'nestedArray', {
            get: function () {
              return this._nestedArray || (this._nestedArray = f.toArray(this.nested));
            },
          }),
          (l.prototype.toJSON = function (e) {
            return f.toObject(['options', this.options, 'nested', c(this.nestedArray, e)]);
          }),
          (l.prototype.addJSON = function (e) {
            if (e) for (var t, r = Object.keys(e), n = 0; n < r.length; ++n) (t = e[r[n]]), this.add((void 0 !== t.fields ? i.fromJSON : void 0 !== t.values ? s.fromJSON : void 0 !== t.methods ? o.fromJSON : void 0 !== t.id ? a.fromJSON : l.fromJSON)(r[n], t));
            return this;
          }),
          (l.prototype.get = function (e) {
            return (this.nested && this.nested[e]) || null;
          }),
          (l.prototype.getEnum = function (e) {
            if (this.nested && this.nested[e] instanceof s) return this.nested[e].values;
            throw Error('no such enum: ' + e);
          }),
          (l.prototype.add = function (e) {
            if (!((e instanceof a && void 0 !== e.extend) || e instanceof i || e instanceof s || e instanceof o || e instanceof l || e instanceof u)) throw TypeError('object must be a valid nested object');
            if (this.nested) {
              var t = this.get(e.name);
              if (t) {
                if (!(t instanceof l && e instanceof l) || t instanceof i || t instanceof o) throw Error("duplicate name '" + e.name + "' in " + this);
                for (var r = t.nestedArray, n = 0; n < r.length; ++n) e.add(r[n]);
                this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0);
              }
            } else this.nested = {};
            return (this.nested[e.name] = e), e.onAdd(this), p(this);
          }),
          (l.prototype.remove = function (e) {
            if (!(e instanceof n)) throw TypeError('object must be a ReflectionObject');
            if (e.parent !== this) throw Error(e + ' is not a member of ' + this);
            return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = void 0), e.onRemove(this), p(this);
          }),
          (l.prototype.define = function (e, t) {
            if (f.isString(e)) e = e.split('.');
            else if (!Array.isArray(e)) throw TypeError('illegal path');
            if (e && e.length && '' === e[0]) throw Error('path must be relative');
            for (var r = this; e.length > 0; ) {
              var n = e.shift();
              if (r.nested && r.nested[n]) {
                if (!((r = r.nested[n]) instanceof l)) throw Error('path conflicts with non-namespace objects');
              } else r.add((r = new l(n)));
            }
            return t && r.addJSON(t), r;
          }),
          (l.prototype.resolveAll = function () {
            for (var e = this.nestedArray, t = 0; t < e.length; ) e[t] instanceof l ? e[t++].resolveAll() : e[t++].resolve();
            return this.resolve();
          }),
          (l.prototype.lookup = function (e, t, r) {
            if (('boolean' == typeof t ? ((r = t), (t = void 0)) : t && !Array.isArray(t) && (t = [t]), f.isString(e) && e.length)) {
              if ('.' === e) return this.root;
              e = e.split('.');
            } else if (!e.length) return this;
            if ('' === e[0]) return this.root.lookup(e.slice(1), t);
            var n = this.get(e[0]);
            if (n) {
              if (1 === e.length) {
                if (!t || t.indexOf(n.constructor) > -1) return n;
              } else if (n instanceof l && (n = n.lookup(e.slice(1), t, !0))) return n;
            } else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof l && (n = this._nestedArray[i].lookup(e, t, !0))) return n;
            return null === this.parent || r ? null : this.parent.lookup(e, t);
          }),
          (l.prototype.lookupType = function (e) {
            var t = this.lookup(e, [i]);
            if (!t) throw Error('no such type: ' + e);
            return t;
          }),
          (l.prototype.lookupEnum = function (e) {
            var t = this.lookup(e, [s]);
            if (!t) throw Error("no such Enum '" + e + "' in " + this);
            return t;
          }),
          (l.prototype.lookupTypeOrEnum = function (e) {
            var t = this.lookup(e, [i, s]);
            if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
            return t;
          }),
          (l.prototype.lookupService = function (e) {
            var t = this.lookup(e, [o]);
            if (!t) throw Error("no such Service '" + e + "' in " + this);
            return t;
          }),
          (l._configure = function (e, t, r) {
            (i = e), (o = t), (s = r);
          });
      },
      3243: (e, t, r) => {
        'use strict';
        (e.exports = o), (o.className = 'ReflectionObject');
        var n,
          i = r(9935);
        function o(e, t) {
          if (!i.isString(e)) throw TypeError('name must be a string');
          if (t && !i.isObject(t)) throw TypeError('options must be an object');
          (this.options = t), (this.parsedOptions = null), (this.name = e), (this.parent = null), (this.resolved = !1), (this.comment = null), (this.filename = null);
        }
        Object.defineProperties(o.prototype, {
          root: {
            get: function () {
              for (var e = this; null !== e.parent; ) e = e.parent;
              return e;
            },
          },
          fullName: {
            get: function () {
              for (var e = [this.name], t = this.parent; t; ) e.unshift(t.name), (t = t.parent);
              return e.join('.');
            },
          },
        }),
          (o.prototype.toJSON = function () {
            throw Error();
          }),
          (o.prototype.onAdd = function (e) {
            this.parent && this.parent !== e && this.parent.remove(this), (this.parent = e), (this.resolved = !1);
            var t = e.root;
            t instanceof n && t._handleAdd(this);
          }),
          (o.prototype.onRemove = function (e) {
            var t = e.root;
            t instanceof n && t._handleRemove(this), (this.parent = null), (this.resolved = !1);
          }),
          (o.prototype.resolve = function () {
            return this.resolved || (this.root instanceof n && (this.resolved = !0)), this;
          }),
          (o.prototype.getOption = function (e) {
            if (this.options) return this.options[e];
          }),
          (o.prototype.setOption = function (e, t, r) {
            return (r && this.options && void 0 !== this.options[e]) || ((this.options || (this.options = {}))[e] = t), this;
          }),
          (o.prototype.setParsedOption = function (e, t, r) {
            this.parsedOptions || (this.parsedOptions = []);
            var n = this.parsedOptions;
            if (r) {
              var o = n.find(function (t) {
                return Object.prototype.hasOwnProperty.call(t, e);
              });
              if (o) {
                var s = o[e];
                i.setProperty(s, r, t);
              } else ((o = {})[e] = i.setProperty({}, r, t)), n.push(o);
            } else {
              var a = {};
              (a[e] = t), n.push(a);
            }
            return this;
          }),
          (o.prototype.setOptions = function (e, t) {
            if (e) for (var r = Object.keys(e), n = 0; n < r.length; ++n) this.setOption(r[n], e[r[n]], t);
            return this;
          }),
          (o.prototype.toString = function () {
            var e = this.constructor.className,
              t = this.fullName;
            return t.length ? e + ' ' + t : e;
          }),
          (o._configure = function (e) {
            n = e;
          });
      },
      7598: (e, t, r) => {
        'use strict';
        e.exports = s;
        var n = r(3243);
        ((s.prototype = Object.create(n.prototype)).constructor = s).className = 'OneOf';
        var i = r(3548),
          o = r(9935);
        function s(e, t, r, i) {
          if ((Array.isArray(t) || ((r = t), (t = void 0)), n.call(this, e, r), void 0 !== t && !Array.isArray(t))) throw TypeError('fieldNames must be an Array');
          (this.oneof = t || []), (this.fieldsArray = []), (this.comment = i);
        }
        function a(e) {
          if (e.parent) for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
        }
        (s.fromJSON = function (e, t) {
          return new s(e, t.oneof, t.options, t.comment);
        }),
          (s.prototype.toJSON = function (e) {
            var t = !!e && Boolean(e.keepComments);
            return o.toObject(['options', this.options, 'oneof', this.oneof, 'comment', t ? this.comment : void 0]);
          }),
          (s.prototype.add = function (e) {
            if (!(e instanceof i)) throw TypeError('field must be a Field');
            return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), this.fieldsArray.push(e), (e.partOf = this), a(this), this;
          }),
          (s.prototype.remove = function (e) {
            if (!(e instanceof i)) throw TypeError('field must be a Field');
            var t = this.fieldsArray.indexOf(e);
            if (t < 0) throw Error(e + ' is not a member of ' + this);
            return this.fieldsArray.splice(t, 1), (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1), (e.partOf = null), this;
          }),
          (s.prototype.onAdd = function (e) {
            n.prototype.onAdd.call(this, e);
            for (var t = 0; t < this.oneof.length; ++t) {
              var r = e.get(this.oneof[t]);
              r && !r.partOf && ((r.partOf = this), this.fieldsArray.push(r));
            }
            a(this);
          }),
          (s.prototype.onRemove = function (e) {
            for (var t, r = 0; r < this.fieldsArray.length; ++r) (t = this.fieldsArray[r]).parent && t.parent.remove(t);
            n.prototype.onRemove.call(this, e);
          }),
          (s.d = function () {
            for (var e = new Array(arguments.length), t = 0; t < arguments.length; ) e[t] = arguments[t++];
            return function (t, r) {
              o.decorateType(t.constructor).add(new s(r, e)), Object.defineProperty(t, r, { get: o.oneOfGetter(e), set: o.oneOfSetter(e) });
            };
          });
      },
      2228: (e, t, r) => {
        'use strict';
        (e.exports = j), (j.filename = null), (j.defaults = { keepCase: !1 });
        var n = r(626),
          i = r(9424),
          o = r(7645),
          s = r(3548),
          a = r(6039),
          u = r(7598),
          f = r(7025),
          c = r(7513),
          l = r(4429),
          p = r(7063),
          h = r(9935),
          d = /^[1-9][0-9]*$/,
          y = /^-?[1-9][0-9]*$/,
          m = /^0[x][0-9a-fA-F]+$/,
          v = /^-?0[x][0-9a-fA-F]+$/,
          g = /^0[0-7]+$/,
          b = /^-?0[0-7]+$/,
          w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
          O = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
          _ = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
          k = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function j(e, t, r) {
          t instanceof i || ((r = t), (t = new i())), r || (r = j.defaults);
          var A,
            x,
            E,
            S,
            T,
            N = r.preferTrailingComment || !1,
            R = n(e, r.alternateCommentMode || !1),
            B = R.next,
            P = R.push,
            D = R.peek,
            C = R.skip,
            L = R.cmnt,
            I = !0,
            q = !1,
            F = t,
            U = r.keepCase
              ? function (e) {
                  return e;
                }
              : h.camelCase;
          function J(e, t, r) {
            var n = j.filename;
            return r || (j.filename = null), Error('illegal ' + (t || 'token') + " '" + e + "' (" + (n ? n + ', ' : '') + 'line ' + R.line + ')');
          }
          function $() {
            var e,
              t = [];
            do {
              if ('"' !== (e = B()) && "'" !== e) throw J(e);
              t.push(B()), C(e), (e = D());
            } while ('"' === e || "'" === e);
            return t.join('');
          }
          function V(e) {
            var t = B();
            switch (t) {
              case "'":
              case '"':
                return P(t), $();
              case 'true':
              case 'TRUE':
                return !0;
              case 'false':
              case 'FALSE':
                return !1;
            }
            try {
              return (function (e, t) {
                var r = 1;
                switch (('-' === e.charAt(0) && ((r = -1), (e = e.substring(1))), e)) {
                  case 'inf':
                  case 'INF':
                  case 'Inf':
                    return r * (1 / 0);
                  case 'nan':
                  case 'NAN':
                  case 'Nan':
                  case 'NaN':
                    return NaN;
                  case '0':
                    return 0;
                }
                if (d.test(e)) return r * parseInt(e, 10);
                if (m.test(e)) return r * parseInt(e, 16);
                if (g.test(e)) return r * parseInt(e, 8);
                if (w.test(e)) return r * parseFloat(e);
                throw J(e, 'number', !0);
              })(t);
            } catch (r) {
              if (e && _.test(t)) return t;
              throw J(t, 'value');
            }
          }
          function M(e, t) {
            var r, n;
            do {
              !t || ('"' !== (r = D()) && "'" !== r) ? e.push([(n = z(B())), C('to', !0) ? z(B()) : n]) : e.push($());
            } while (C(',', !0));
            C(';');
          }
          function z(e, t) {
            switch (e) {
              case 'max':
              case 'MAX':
              case 'Max':
                return 536870911;
              case '0':
                return 0;
            }
            if (!t && '-' === e.charAt(0)) throw J(e, 'id');
            if (y.test(e)) return parseInt(e, 10);
            if (v.test(e)) return parseInt(e, 16);
            if (b.test(e)) return parseInt(e, 8);
            throw J(e, 'id');
          }
          function H() {
            if (void 0 !== A) throw J('package');
            if (((A = B()), !_.test(A))) throw J(A, 'name');
            (F = F.define(A)), C(';');
          }
          function W() {
            var e,
              t = D();
            switch (t) {
              case 'weak':
                (e = E || (E = [])), B();
                break;
              case 'public':
                B();
              default:
                e = x || (x = []);
            }
            (t = $()), C(';'), e.push(t);
          }
          function Z() {
            if ((C('='), (S = $()), !(q = 'proto3' === S) && 'proto2' !== S)) throw J(S, 'syntax');
            C(';');
          }
          function K(e, t) {
            switch (t) {
              case 'option':
                return Q(e, t), C(';'), !0;
              case 'message':
                return (
                  (function (e, t) {
                    if (!O.test((t = B()))) throw J(t, 'type name');
                    var r = new o(t);
                    X(r, function (e) {
                      if (!K(r, e))
                        switch (e) {
                          case 'map':
                            !(function (e) {
                              C('<');
                              var t = B();
                              if (void 0 === p.mapKey[t]) throw J(t, 'type');
                              C(',');
                              var r = B();
                              if (!_.test(r)) throw J(r, 'type');
                              C('>');
                              var n = B();
                              if (!O.test(n)) throw J(n, 'name');
                              C('=');
                              var i = new a(U(n), z(B()), t, r);
                              X(
                                i,
                                function (e) {
                                  if ('option' !== e) throw J(e);
                                  Q(i, e), C(';');
                                },
                                function () {
                                  te(i);
                                }
                              ),
                                e.add(i);
                            })(r);
                            break;
                          case 'required':
                          case 'repeated':
                            G(r, e);
                            break;
                          case 'optional':
                            G(r, q ? 'proto3_optional' : 'optional');
                            break;
                          case 'oneof':
                            !(function (e, t) {
                              if (!O.test((t = B()))) throw J(t, 'name');
                              var r = new u(U(t));
                              X(r, function (e) {
                                'option' === e ? (Q(r, e), C(';')) : (P(e), G(r, 'optional'));
                              }),
                                e.add(r);
                            })(r, e);
                            break;
                          case 'extensions':
                            M(r.extensions || (r.extensions = []));
                            break;
                          case 'reserved':
                            M(r.reserved || (r.reserved = []), !0);
                            break;
                          default:
                            if (!q || !_.test(e)) throw J(e);
                            P(e), G(r, 'optional');
                        }
                    }),
                      e.add(r);
                  })(e, t),
                  !0
                );
              case 'enum':
                return (
                  (function (e, t) {
                    if (!O.test((t = B()))) throw J(t, 'name');
                    var r = new f(t);
                    X(r, function (e) {
                      switch (e) {
                        case 'option':
                          Q(r, e), C(';');
                          break;
                        case 'reserved':
                          M(r.reserved || (r.reserved = []), !0);
                          break;
                        default:
                          !(function (e, t) {
                            if (!O.test(t)) throw J(t, 'name');
                            C('=');
                            var r = z(B(), !0),
                              n = {};
                            X(
                              n,
                              function (e) {
                                if ('option' !== e) throw J(e);
                                Q(n, e), C(';');
                              },
                              function () {
                                te(n);
                              }
                            ),
                              e.add(t, r, n.comment);
                          })(r, e);
                      }
                    }),
                      e.add(r);
                  })(e, t),
                  !0
                );
              case 'service':
                return (
                  (function (e, t) {
                    if (!O.test((t = B()))) throw J(t, 'service name');
                    var r = new c(t);
                    X(r, function (e) {
                      if (!K(r, e)) {
                        if ('rpc' !== e) throw J(e);
                        !(function (e, t) {
                          var r = L(),
                            n = t;
                          if (!O.test((t = B()))) throw J(t, 'name');
                          var i,
                            o,
                            s,
                            a,
                            u = t;
                          if ((C('('), C('stream', !0) && (o = !0), !_.test((t = B())))) throw J(t);
                          if (((i = t), C(')'), C('returns'), C('('), C('stream', !0) && (a = !0), !_.test((t = B())))) throw J(t);
                          (s = t), C(')');
                          var f = new l(u, n, i, s, o, a);
                          (f.comment = r),
                            X(f, function (e) {
                              if ('option' !== e) throw J(e);
                              Q(f, e), C(';');
                            }),
                            e.add(f);
                        })(r, e);
                      }
                    }),
                      e.add(r);
                  })(e, t),
                  !0
                );
              case 'extend':
                return (
                  (function (e, t) {
                    if (!_.test((t = B()))) throw J(t, 'reference');
                    var r = t;
                    X(null, function (t) {
                      switch (t) {
                        case 'required':
                        case 'repeated':
                          G(e, t, r);
                          break;
                        case 'optional':
                          G(e, q ? 'proto3_optional' : 'optional', r);
                          break;
                        default:
                          if (!q || !_.test(t)) throw J(t);
                          P(t), G(e, 'optional', r);
                      }
                    });
                  })(e, t),
                  !0
                );
            }
            return !1;
          }
          function X(e, t, r) {
            var n = R.line;
            if ((e && ('string' != typeof e.comment && (e.comment = L()), (e.filename = j.filename)), C('{', !0))) {
              for (var i; '}' !== (i = B()); ) t(i);
              C(';', !0);
            } else r && r(), C(';'), e && ('string' != typeof e.comment || N) && (e.comment = L(n) || e.comment);
          }
          function G(e, t, r) {
            var n = B();
            if ('group' !== n) {
              if (!_.test(n)) throw J(n, 'type');
              var i = B();
              if (!O.test(i)) throw J(i, 'name');
              (i = U(i)), C('=');
              var a = new s(i, z(B()), n, t, r);
              if (
                (X(
                  a,
                  function (e) {
                    if ('option' !== e) throw J(e);
                    Q(a, e), C(';');
                  },
                  function () {
                    te(a);
                  }
                ),
                'proto3_optional' === t)
              ) {
                var f = new u('_' + i);
                a.setOption('proto3_optional', !0), f.add(a), e.add(f);
              } else e.add(a);
              q || !a.repeated || (void 0 === p.packed[n] && void 0 !== p.basic[n]) || a.setOption('packed', !1, !0);
            } else
              !(function (e, t) {
                var r = B();
                if (!O.test(r)) throw J(r, 'name');
                var n = h.lcFirst(r);
                r === n && (r = h.ucFirst(r)), C('=');
                var i = z(B()),
                  a = new o(r);
                a.group = !0;
                var u = new s(n, i, r, t);
                (u.filename = j.filename),
                  X(a, function (e) {
                    switch (e) {
                      case 'option':
                        Q(a, e), C(';');
                        break;
                      case 'required':
                      case 'repeated':
                        G(a, e);
                        break;
                      case 'optional':
                        G(a, q ? 'proto3_optional' : 'optional');
                        break;
                      default:
                        throw J(e);
                    }
                  }),
                  e.add(a).add(u);
              })(e, t);
          }
          function Q(e, t) {
            var r = C('(', !0);
            if (!_.test((t = B()))) throw J(t, 'name');
            var n,
              i = t,
              o = i;
            r && (C(')'), (o = i = '(' + i + ')'), (t = D()), k.test(t) && ((n = t.substr(1)), (i += t), B())),
              C('='),
              (function (e, t, r, n) {
                e.setParsedOption && e.setParsedOption(t, r, n);
              })(e, o, Y(e, i), n);
          }
          function Y(e, t) {
            if (C('{', !0)) {
              for (var r = {}; !C('}', !0); ) {
                if (!O.test((T = B()))) throw J(T, 'name');
                var n,
                  i = T;
                '{' === D() ? (n = Y(e, t + '.' + T)) : (C(':'), '{' === D() ? (n = Y(e, t + '.' + T)) : ((n = V(!0)), ee(e, t + '.' + T, n)));
                var o = r[i];
                o && (n = [].concat(o).concat(n)), (r[i] = n), C(',', !0);
              }
              return r;
            }
            var s = V(!0);
            return ee(e, t, s), s;
          }
          function ee(e, t, r) {
            e.setOption && e.setOption(t, r);
          }
          function te(e) {
            if (C('[', !0)) {
              do {
                Q(e, 'option');
              } while (C(',', !0));
              C(']');
            }
            return e;
          }
          for (; null !== (T = B()); )
            switch (T) {
              case 'package':
                if (!I) throw J(T);
                H();
                break;
              case 'import':
                if (!I) throw J(T);
                W();
                break;
              case 'syntax':
                if (!I) throw J(T);
                Z();
                break;
              case 'option':
                Q(F, T), C(';');
                break;
              default:
                if (K(F, T)) {
                  I = !1;
                  continue;
                }
                throw J(T);
            }
          return (j.filename = null), { package: A, imports: x, weakImports: E, syntax: S, root: t };
        }
      },
      1408: (e, t, r) => {
        'use strict';
        e.exports = u;
        var n,
          i = r(9693),
          o = i.LongBits,
          s = i.utf8;
        function a(e, t) {
          return RangeError('index out of range: ' + e.pos + ' + ' + (t || 1) + ' > ' + e.len);
        }
        function u(e) {
          (this.buf = e), (this.pos = 0), (this.len = e.length);
        }
        var f,
          c =
            'undefined' != typeof Uint8Array
              ? function (e) {
                  if (e instanceof Uint8Array || Array.isArray(e)) return new u(e);
                  throw Error('illegal buffer');
                }
              : function (e) {
                  if (Array.isArray(e)) return new u(e);
                  throw Error('illegal buffer');
                },
          l = function () {
            return i.Buffer
              ? function (e) {
                  return (u.create = function (e) {
                    return i.Buffer.isBuffer(e) ? new n(e) : c(e);
                  })(e);
                }
              : c;
          };
        function p() {
          var e = new o(0, 0),
            t = 0;
          if (!(this.len - this.pos > 4)) {
            for (; t < 3; ++t) {
              if (this.pos >= this.len) throw a(this);
              if (((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0), this.buf[this.pos++] < 128)) return e;
            }
            return (e.lo = (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0), e;
          }
          for (; t < 4; ++t) if (((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0), this.buf[this.pos++] < 128)) return e;
          if (((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0), (e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0), this.buf[this.pos++] < 128)) return e;
          if (((t = 0), this.len - this.pos > 4)) {
            for (; t < 5; ++t) if (((e.hi = (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0), this.buf[this.pos++] < 128)) return e;
          } else
            for (; t < 5; ++t) {
              if (this.pos >= this.len) throw a(this);
              if (((e.hi = (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0), this.buf[this.pos++] < 128)) return e;
            }
          throw Error('invalid varint encoding');
        }
        function h(e, t) {
          return (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0;
        }
        function d() {
          if (this.pos + 8 > this.len) throw a(this, 8);
          return new o(h(this.buf, (this.pos += 4)), h(this.buf, (this.pos += 4)));
        }
        (u.create = l()),
          (u.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice),
          (u.prototype.uint32 =
            ((f = 4294967295),
            function () {
              if (((f = (127 & this.buf[this.pos]) >>> 0), this.buf[this.pos++] < 128)) return f;
              if (((f = (f | ((127 & this.buf[this.pos]) << 7)) >>> 0), this.buf[this.pos++] < 128)) return f;
              if (((f = (f | ((127 & this.buf[this.pos]) << 14)) >>> 0), this.buf[this.pos++] < 128)) return f;
              if (((f = (f | ((127 & this.buf[this.pos]) << 21)) >>> 0), this.buf[this.pos++] < 128)) return f;
              if (((f = (f | ((15 & this.buf[this.pos]) << 28)) >>> 0), this.buf[this.pos++] < 128)) return f;
              if ((this.pos += 5) > this.len) throw ((this.pos = this.len), a(this, 10));
              return f;
            })),
          (u.prototype.int32 = function () {
            return 0 | this.uint32();
          }),
          (u.prototype.sint32 = function () {
            var e = this.uint32();
            return ((e >>> 1) ^ -(1 & e)) | 0;
          }),
          (u.prototype.bool = function () {
            return 0 !== this.uint32();
          }),
          (u.prototype.fixed32 = function () {
            if (this.pos + 4 > this.len) throw a(this, 4);
            return h(this.buf, (this.pos += 4));
          }),
          (u.prototype.sfixed32 = function () {
            if (this.pos + 4 > this.len) throw a(this, 4);
            return 0 | h(this.buf, (this.pos += 4));
          }),
          (u.prototype.float = function () {
            if (this.pos + 4 > this.len) throw a(this, 4);
            var e = i.float.readFloatLE(this.buf, this.pos);
            return (this.pos += 4), e;
          }),
          (u.prototype.double = function () {
            if (this.pos + 8 > this.len) throw a(this, 4);
            var e = i.float.readDoubleLE(this.buf, this.pos);
            return (this.pos += 8), e;
          }),
          (u.prototype.bytes = function () {
            var e = this.uint32(),
              t = this.pos,
              r = this.pos + e;
            if (r > this.len) throw a(this, e);
            return (this.pos += e), Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r);
          }),
          (u.prototype.string = function () {
            var e = this.bytes();
            return s.read(e, 0, e.length);
          }),
          (u.prototype.skip = function (e) {
            if ('number' == typeof e) {
              if (this.pos + e > this.len) throw a(this, e);
              this.pos += e;
            } else
              do {
                if (this.pos >= this.len) throw a(this);
              } while (128 & this.buf[this.pos++]);
            return this;
          }),
          (u.prototype.skipType = function (e) {
            switch (e) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error('invalid wire type ' + e + ' at offset ' + this.pos);
            }
            return this;
          }),
          (u._configure = function (e) {
            (n = e), (u.create = l()), n._configure();
            var t = i.Long ? 'toLong' : 'toNumber';
            i.merge(u.prototype, {
              int64: function () {
                return p.call(this)[t](!1);
              },
              uint64: function () {
                return p.call(this)[t](!0);
              },
              sint64: function () {
                return p.call(this).zzDecode()[t](!1);
              },
              fixed64: function () {
                return d.call(this)[t](!0);
              },
              sfixed64: function () {
                return d.call(this)[t](!1);
              },
            });
          });
      },
      593: (e, t, r) => {
        'use strict';
        e.exports = o;
        var n = r(1408);
        (o.prototype = Object.create(n.prototype)).constructor = o;
        var i = r(9693);
        function o(e) {
          n.call(this, e);
        }
        (o._configure = function () {
          i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
        }),
          (o.prototype.string = function () {
            var e = this.uint32();
            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, (this.pos = Math.min(this.pos + e, this.len))) : this.buf.toString('utf-8', this.pos, (this.pos = Math.min(this.pos + e, this.len)));
          }),
          o._configure();
      },
      9424: (e, t, r) => {
        'use strict';
        e.exports = l;
        var n = r(9313);
        ((l.prototype = Object.create(n.prototype)).constructor = l).className = 'Root';
        var i,
          o,
          s,
          a = r(3548),
          u = r(7025),
          f = r(7598),
          c = r(9935);
        function l(e) {
          n.call(this, '', e), (this.deferred = []), (this.files = []);
        }
        function p() {}
        (l.fromJSON = function (e, t) {
          return t || (t = new l()), e.options && t.setOptions(e.options), t.addJSON(e.nested);
        }),
          (l.prototype.resolvePath = c.path.resolve),
          (l.prototype.fetch = c.fetch),
          (l.prototype.load = function e(t, r, n) {
            'function' == typeof r && ((n = r), (r = void 0));
            var i = this;
            if (!n) return c.asPromise(e, i, t, r);
            var a = n === p;
            function u(e, t) {
              if (n) {
                var r = n;
                if (((n = null), a)) throw e;
                r(e, t);
              }
            }
            function f(e) {
              var t = e.lastIndexOf('google/protobuf/');
              if (t > -1) {
                var r = e.substring(t);
                if (r in s) return r;
              }
              return null;
            }
            function l(e, t) {
              try {
                if ((c.isString(t) && '{' === t.charAt(0) && (t = JSON.parse(t)), c.isString(t))) {
                  o.filename = e;
                  var n,
                    s = o(t, i, r),
                    l = 0;
                  if (s.imports) for (; l < s.imports.length; ++l) (n = f(s.imports[l]) || i.resolvePath(e, s.imports[l])) && h(n);
                  if (s.weakImports) for (l = 0; l < s.weakImports.length; ++l) (n = f(s.weakImports[l]) || i.resolvePath(e, s.weakImports[l])) && h(n, !0);
                } else i.setOptions(t.options).addJSON(t.nested);
              } catch (e) {
                u(e);
              }
              a || d || u(null, i);
            }
            function h(e, t) {
              if (!(i.files.indexOf(e) > -1))
                if ((i.files.push(e), e in s))
                  a
                    ? l(e, s[e])
                    : (++d,
                      setTimeout(function () {
                        --d, l(e, s[e]);
                      }));
                else if (a) {
                  var r;
                  try {
                    r = c.fs.readFileSync(e).toString('utf8');
                  } catch (e) {
                    return void (t || u(e));
                  }
                  l(e, r);
                } else
                  ++d,
                    i.fetch(e, function (r, o) {
                      --d, n && (r ? (t ? d || u(null, i) : u(r)) : l(e, o));
                    });
            }
            var d = 0;
            c.isString(t) && (t = [t]);
            for (var y, m = 0; m < t.length; ++m) (y = i.resolvePath('', t[m])) && h(y);
            if (a) return i;
            d || u(null, i);
          }),
          (l.prototype.loadSync = function (e, t) {
            if (!c.isNode) throw Error('not supported');
            return this.load(e, t, p);
          }),
          (l.prototype.resolveAll = function () {
            if (this.deferred.length)
              throw Error(
                'unresolvable extensions: ' +
                  this.deferred
                    .map(function (e) {
                      return "'extend " + e.extend + "' in " + e.parent.fullName;
                    })
                    .join(', ')
              );
            return n.prototype.resolveAll.call(this);
          });
        var h = /^[A-Z]/;
        function d(e, t) {
          var r = t.parent.lookup(t.extend);
          if (r) {
            var n = new a(t.fullName, t.id, t.type, t.rule, void 0, t.options);
            return (n.declaringField = t), (t.extensionField = n), r.add(n), !0;
          }
          return !1;
        }
        (l.prototype._handleAdd = function (e) {
          if (e instanceof a) void 0 === e.extend || e.extensionField || d(0, e) || this.deferred.push(e);
          else if (e instanceof u) h.test(e.name) && (e.parent[e.name] = e.values);
          else if (!(e instanceof f)) {
            if (e instanceof i) for (var t = 0; t < this.deferred.length; ) d(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
            for (var r = 0; r < e.nestedArray.length; ++r) this._handleAdd(e._nestedArray[r]);
            h.test(e.name) && (e.parent[e.name] = e);
          }
        }),
          (l.prototype._handleRemove = function (e) {
            if (e instanceof a) {
              if (void 0 !== e.extend)
                if (e.extensionField) e.extensionField.parent.remove(e.extensionField), (e.extensionField = null);
                else {
                  var t = this.deferred.indexOf(e);
                  t > -1 && this.deferred.splice(t, 1);
                }
            } else if (e instanceof u) h.test(e.name) && delete e.parent[e.name];
            else if (e instanceof n) {
              for (var r = 0; r < e.nestedArray.length; ++r) this._handleRemove(e._nestedArray[r]);
              h.test(e.name) && delete e.parent[e.name];
            }
          }),
          (l._configure = function (e, t, r) {
            (i = e), (o = t), (s = r);
          });
      },
      5054: e => {
        'use strict';
        e.exports = {};
      },
      5994: (e, t, r) => {
        'use strict';
        t.Service = r(7948);
      },
      7948: (e, t, r) => {
        'use strict';
        e.exports = i;
        var n = r(9693);
        function i(e, t, r) {
          if ('function' != typeof e) throw TypeError('rpcImpl must be a function');
          n.EventEmitter.call(this), (this.rpcImpl = e), (this.requestDelimited = Boolean(t)), (this.responseDelimited = Boolean(r));
        }
        ((i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i),
          (i.prototype.rpcCall = function e(t, r, i, o, s) {
            if (!o) throw TypeError('request must be specified');
            var a = this;
            if (!s) return n.asPromise(e, a, t, r, i, o);
            if (a.rpcImpl)
              try {
                return a.rpcImpl(t, r[a.requestDelimited ? 'encodeDelimited' : 'encode'](o).finish(), function (e, r) {
                  if (e) return a.emit('error', e, t), s(e);
                  if (null !== r) {
                    if (!(r instanceof i))
                      try {
                        r = i[a.responseDelimited ? 'decodeDelimited' : 'decode'](r);
                      } catch (e) {
                        return a.emit('error', e, t), s(e);
                      }
                    return a.emit('data', r, t), s(null, r);
                  }
                  a.end(!0);
                });
              } catch (e) {
                return (
                  a.emit('error', e, t),
                  void setTimeout(function () {
                    s(e);
                  }, 0)
                );
              }
            else
              setTimeout(function () {
                s(Error('already ended'));
              }, 0);
          }),
          (i.prototype.end = function (e) {
            return this.rpcImpl && (e || this.rpcImpl(null, null, null), (this.rpcImpl = null), this.emit('end').off()), this;
          });
      },
      7513: (e, t, r) => {
        'use strict';
        e.exports = a;
        var n = r(9313);
        ((a.prototype = Object.create(n.prototype)).constructor = a).className = 'Service';
        var i = r(4429),
          o = r(9935),
          s = r(5994);
        function a(e, t) {
          n.call(this, e, t), (this.methods = {}), (this._methodsArray = null);
        }
        function u(e) {
          return (e._methodsArray = null), e;
        }
        (a.fromJSON = function (e, t) {
          var r = new a(e, t.options);
          if (t.methods) for (var n = Object.keys(t.methods), o = 0; o < n.length; ++o) r.add(i.fromJSON(n[o], t.methods[n[o]]));
          return t.nested && r.addJSON(t.nested), (r.comment = t.comment), r;
        }),
          (a.prototype.toJSON = function (e) {
            var t = n.prototype.toJSON.call(this, e),
              r = !!e && Boolean(e.keepComments);
            return o.toObject(['options', (t && t.options) || void 0, 'methods', n.arrayToJSON(this.methodsArray, e) || {}, 'nested', (t && t.nested) || void 0, 'comment', r ? this.comment : void 0]);
          }),
          Object.defineProperty(a.prototype, 'methodsArray', {
            get: function () {
              return this._methodsArray || (this._methodsArray = o.toArray(this.methods));
            },
          }),
          (a.prototype.get = function (e) {
            return this.methods[e] || n.prototype.get.call(this, e);
          }),
          (a.prototype.resolveAll = function () {
            for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve();
            return n.prototype.resolve.call(this);
          }),
          (a.prototype.add = function (e) {
            if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
            return e instanceof i ? ((this.methods[e.name] = e), (e.parent = this), u(this)) : n.prototype.add.call(this, e);
          }),
          (a.prototype.remove = function (e) {
            if (e instanceof i) {
              if (this.methods[e.name] !== e) throw Error(e + ' is not a member of ' + this);
              return delete this.methods[e.name], (e.parent = null), u(this);
            }
            return n.prototype.remove.call(this, e);
          }),
          (a.prototype.create = function (e, t, r) {
            for (var n, i = new s.Service(e, t, r), a = 0; a < this.methodsArray.length; ++a) {
              var u = o.lcFirst((n = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, '');
              i[u] = o.codegen(['r', 'c'], o.isReserved(u) ? u + '_' : u)('return this.rpcCall(m,q,s,r,c)')({ m: n, q: n.resolvedRequestType.ctor, s: n.resolvedResponseType.ctor });
            }
            return i;
          });
      },
      626: e => {
        'use strict';
        e.exports = l;
        var t = /[\s{}=;:[\],'"()<>]/g,
          r = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
          n = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
          i = /^ *[*/]+ */,
          o = /^\s*\*?\/*/,
          s = /\n/g,
          a = /\s/,
          u = /\\(.?)/g,
          f = { 0: '\0', r: '\r', n: '\n', t: '\t' };
        function c(e) {
          return e.replace(u, function (e, t) {
            switch (t) {
              case '\\':
              case '':
                return t;
              default:
                return f[t] || '';
            }
          });
        }
        function l(e, u) {
          e = e.toString();
          var f = 0,
            l = e.length,
            p = 1,
            h = null,
            d = null,
            y = 0,
            m = !1,
            v = !1,
            g = [],
            b = null;
          function w(e) {
            return Error('illegal ' + e + ' (line ' + p + ')');
          }
          function O(t) {
            return e.charAt(t);
          }
          function _(t, r, n) {
            (h = e.charAt(t++)), (y = p), (m = !1), (v = n);
            var a,
              f = t - (u ? 2 : 3);
            do {
              if (--f < 0 || '\n' === (a = e.charAt(f))) {
                m = !0;
                break;
              }
            } while (' ' === a || '\t' === a);
            for (var c = e.substring(t, r).split(s), l = 0; l < c.length; ++l) c[l] = c[l].replace(u ? o : i, '').trim();
            d = c.join('\n').trim();
          }
          function k(t) {
            var r = j(t),
              n = e.substring(t, r);
            return /^\s*\/{1,2}/.test(n);
          }
          function j(e) {
            for (var t = e; t < l && '\n' !== O(t); ) t++;
            return t;
          }
          function A() {
            if (g.length > 0) return g.shift();
            if (b)
              return (function () {
                var t = "'" === b ? n : r;
                t.lastIndex = f - 1;
                var i = t.exec(e);
                if (!i) throw w('string');
                return (f = t.lastIndex), x(b), (b = null), c(i[1]);
              })();
            var i,
              o,
              s,
              h,
              d,
              y = 0 === f;
            do {
              if (f === l) return null;
              for (i = !1; a.test((s = O(f))); ) if (('\n' === s && ((y = !0), ++p), ++f === l)) return null;
              if ('/' === O(f)) {
                if (++f === l) throw w('comment');
                if ('/' === O(f))
                  if (u) {
                    if (((h = f), (d = !1), k(f))) {
                      d = !0;
                      do {
                        if ((f = j(f)) === l) break;
                        f++;
                      } while (k(f));
                    } else f = Math.min(l, j(f) + 1);
                    d && _(h, f, y), p++, (i = !0);
                  } else {
                    for (d = '/' === O((h = f + 1)); '\n' !== O(++f); ) if (f === l) return null;
                    ++f, d && _(h, f - 1, y), ++p, (i = !0);
                  }
                else {
                  if ('*' !== (s = O(f))) return '/';
                  (h = f + 1), (d = u || '*' === O(h));
                  do {
                    if (('\n' === s && ++p, ++f === l)) throw w('comment');
                    (o = s), (s = O(f));
                  } while ('*' !== o || '/' !== s);
                  ++f, d && _(h, f - 2, y), (i = !0);
                }
              }
            } while (i);
            var m = f;
            if (((t.lastIndex = 0), !t.test(O(m++)))) for (; m < l && !t.test(O(m)); ) ++m;
            var v = e.substring(f, (f = m));
            return ('"' !== v && "'" !== v) || (b = v), v;
          }
          function x(e) {
            g.push(e);
          }
          function E() {
            if (!g.length) {
              var e = A();
              if (null === e) return null;
              x(e);
            }
            return g[0];
          }
          return Object.defineProperty(
            {
              next: A,
              peek: E,
              push: x,
              skip: function (e, t) {
                var r = E();
                if (r === e) return A(), !0;
                if (!t) throw w("token '" + r + "', '" + e + "' expected");
                return !1;
              },
              cmnt: function (e) {
                var t = null;
                return void 0 === e ? y === p - 1 && (u || '*' === h || m) && (t = v ? d : null) : (y < e && E(), y !== e || m || (!u && '/' !== h) || (t = v ? null : d)), t;
              },
            },
            'line',
            {
              get: function () {
                return p;
              },
            }
          );
        }
        l.unescape = c;
      },
      7645: (e, t, r) => {
        'use strict';
        e.exports = g;
        var n = r(9313);
        ((g.prototype = Object.create(n.prototype)).constructor = g).className = 'Type';
        var i = r(7025),
          o = r(7598),
          s = r(3548),
          a = r(6039),
          u = r(7513),
          f = r(8368),
          c = r(1408),
          l = r(1173),
          p = r(9935),
          h = r(4928),
          d = r(5305),
          y = r(4497),
          m = r(3996),
          v = r(1667);
        function g(e, t) {
          n.call(this, e, t), (this.fields = {}), (this.oneofs = void 0), (this.extensions = void 0), (this.reserved = void 0), (this.group = void 0), (this._fieldsById = null), (this._fieldsArray = null), (this._oneofsArray = null), (this._ctor = null);
        }
        function b(e) {
          return (e._fieldsById = e._fieldsArray = e._oneofsArray = null), delete e.encode, delete e.decode, delete e.verify, e;
        }
        Object.defineProperties(g.prototype, {
          fieldsById: {
            get: function () {
              if (this._fieldsById) return this._fieldsById;
              this._fieldsById = {};
              for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                var r = this.fields[e[t]],
                  n = r.id;
                if (this._fieldsById[n]) throw Error('duplicate id ' + n + ' in ' + this);
                this._fieldsById[n] = r;
              }
              return this._fieldsById;
            },
          },
          fieldsArray: {
            get: function () {
              return this._fieldsArray || (this._fieldsArray = p.toArray(this.fields));
            },
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = p.toArray(this.oneofs));
            },
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = g.generateConstructor(this)());
            },
            set: function (e) {
              var t = e.prototype;
              t instanceof f || (((e.prototype = new f()).constructor = e), p.merge(e.prototype, t)), (e.$type = e.prototype.$type = this), p.merge(e, f, !0), (this._ctor = e);
              for (var r = 0; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
              var n = {};
              for (r = 0; r < this.oneofsArray.length; ++r) n[this._oneofsArray[r].resolve().name] = { get: p.oneOfGetter(this._oneofsArray[r].oneof), set: p.oneOfSetter(this._oneofsArray[r].oneof) };
              r && Object.defineProperties(e.prototype, n);
            },
          },
        }),
          (g.generateConstructor = function (e) {
            for (var t, r = p.codegen(['p'], e.name), n = 0; n < e.fieldsArray.length; ++n) (t = e._fieldsArray[n]).map ? r('this%s={}', p.safeProp(t.name)) : t.repeated && r('this%s=[]', p.safeProp(t.name));
            return r('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)')('this[ks[i]]=p[ks[i]]');
          }),
          (g.fromJSON = function (e, t) {
            var r = new g(e, t.options);
            (r.extensions = t.extensions), (r.reserved = t.reserved);
            for (var f = Object.keys(t.fields), c = 0; c < f.length; ++c) r.add((void 0 !== t.fields[f[c]].keyType ? a.fromJSON : s.fromJSON)(f[c], t.fields[f[c]]));
            if (t.oneofs) for (f = Object.keys(t.oneofs), c = 0; c < f.length; ++c) r.add(o.fromJSON(f[c], t.oneofs[f[c]]));
            if (t.nested)
              for (f = Object.keys(t.nested), c = 0; c < f.length; ++c) {
                var l = t.nested[f[c]];
                r.add((void 0 !== l.id ? s.fromJSON : void 0 !== l.fields ? g.fromJSON : void 0 !== l.values ? i.fromJSON : void 0 !== l.methods ? u.fromJSON : n.fromJSON)(f[c], l));
              }
            return t.extensions && t.extensions.length && (r.extensions = t.extensions), t.reserved && t.reserved.length && (r.reserved = t.reserved), t.group && (r.group = !0), t.comment && (r.comment = t.comment), r;
          }),
          (g.prototype.toJSON = function (e) {
            var t = n.prototype.toJSON.call(this, e),
              r = !!e && Boolean(e.keepComments);
            return p.toObject([
              'options',
              (t && t.options) || void 0,
              'oneofs',
              n.arrayToJSON(this.oneofsArray, e),
              'fields',
              n.arrayToJSON(
                this.fieldsArray.filter(function (e) {
                  return !e.declaringField;
                }),
                e
              ) || {},
              'extensions',
              this.extensions && this.extensions.length ? this.extensions : void 0,
              'reserved',
              this.reserved && this.reserved.length ? this.reserved : void 0,
              'group',
              this.group || void 0,
              'nested',
              (t && t.nested) || void 0,
              'comment',
              r ? this.comment : void 0,
            ]);
          }),
          (g.prototype.resolveAll = function () {
            for (var e = this.fieldsArray, t = 0; t < e.length; ) e[t++].resolve();
            var r = this.oneofsArray;
            for (t = 0; t < r.length; ) r[t++].resolve();
            return n.prototype.resolveAll.call(this);
          }),
          (g.prototype.get = function (e) {
            return this.fields[e] || (this.oneofs && this.oneofs[e]) || (this.nested && this.nested[e]) || null;
          }),
          (g.prototype.add = function (e) {
            if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
            if (e instanceof s && void 0 === e.extend) {
              if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error('duplicate id ' + e.id + ' in ' + this);
              if (this.isReservedId(e.id)) throw Error('id ' + e.id + ' is reserved in ' + this);
              if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
              return e.parent && e.parent.remove(e), (this.fields[e.name] = e), (e.message = this), e.onAdd(this), b(this);
            }
            return e instanceof o ? (this.oneofs || (this.oneofs = {}), (this.oneofs[e.name] = e), e.onAdd(this), b(this)) : n.prototype.add.call(this, e);
          }),
          (g.prototype.remove = function (e) {
            if (e instanceof s && void 0 === e.extend) {
              if (!this.fields || this.fields[e.name] !== e) throw Error(e + ' is not a member of ' + this);
              return delete this.fields[e.name], (e.parent = null), e.onRemove(this), b(this);
            }
            if (e instanceof o) {
              if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + ' is not a member of ' + this);
              return delete this.oneofs[e.name], (e.parent = null), e.onRemove(this), b(this);
            }
            return n.prototype.remove.call(this, e);
          }),
          (g.prototype.isReservedId = function (e) {
            return n.isReservedId(this.reserved, e);
          }),
          (g.prototype.isReservedName = function (e) {
            return n.isReservedName(this.reserved, e);
          }),
          (g.prototype.create = function (e) {
            return new this.ctor(e);
          }),
          (g.prototype.setup = function () {
            for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r) t.push(this._fieldsArray[r].resolve().resolvedType);
            (this.encode = h(this)({ Writer: l, types: t, util: p })), (this.decode = d(this)({ Reader: c, types: t, util: p })), (this.verify = y(this)({ types: t, util: p })), (this.fromObject = m.fromObject(this)({ types: t, util: p })), (this.toObject = m.toObject(this)({ types: t, util: p }));
            var n = v[e];
            if (n) {
              var i = Object.create(this);
              (i.fromObject = this.fromObject), (this.fromObject = n.fromObject.bind(i)), (i.toObject = this.toObject), (this.toObject = n.toObject.bind(i));
            }
            return this;
          }),
          (g.prototype.encode = function (e, t) {
            return this.setup().encode(e, t);
          }),
          (g.prototype.encodeDelimited = function (e, t) {
            return this.encode(e, t && t.len ? t.fork() : t).ldelim();
          }),
          (g.prototype.decode = function (e, t) {
            return this.setup().decode(e, t);
          }),
          (g.prototype.decodeDelimited = function (e) {
            return e instanceof c || (e = c.create(e)), this.decode(e, e.uint32());
          }),
          (g.prototype.verify = function (e) {
            return this.setup().verify(e);
          }),
          (g.prototype.fromObject = function (e) {
            return this.setup().fromObject(e);
          }),
          (g.prototype.toObject = function (e, t) {
            return this.setup().toObject(e, t);
          }),
          (g.d = function (e) {
            return function (t) {
              p.decorateType(t, e);
            };
          });
      },
      7063: (e, t, r) => {
        'use strict';
        var n = t,
          i = r(9935),
          o = ['double', 'float', 'int32', 'uint32', 'sint32', 'fixed32', 'sfixed32', 'int64', 'uint64', 'sint64', 'fixed64', 'sfixed64', 'bool', 'string', 'bytes'];
        function s(e, t) {
          var r = 0,
            n = {};
          for (t |= 0; r < e.length; ) n[o[r + t]] = e[r++];
          return n;
        }
        (n.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])), (n.defaults = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, '', i.emptyArray, null])), (n.long = s([0, 0, 0, 1, 1], 7)), (n.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)), (n.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]));
      },
      9935: (e, t, r) => {
        'use strict';
        var n,
          i,
          o = (e.exports = r(9693)),
          s = r(5054);
        (o.codegen = r(5124)),
          (o.fetch = r(9054)),
          (o.path = r(8626)),
          (o.fs = o.inquire('fs')),
          (o.toArray = function (e) {
            if (e) {
              for (var t = Object.keys(e), r = new Array(t.length), n = 0; n < t.length; ) r[n] = e[t[n++]];
              return r;
            }
            return [];
          }),
          (o.toObject = function (e) {
            for (var t = {}, r = 0; r < e.length; ) {
              var n = e[r++],
                i = e[r++];
              void 0 !== i && (t[n] = i);
            }
            return t;
          });
        var a = /\\/g,
          u = /"/g;
        (o.isReserved = function (e) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
        }),
          (o.safeProp = function (e) {
            return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(a, '\\\\').replace(u, '\\"') + '"]' : '.' + e;
          }),
          (o.ucFirst = function (e) {
            return e.charAt(0).toUpperCase() + e.substring(1);
          });
        var f = /_([a-z])/g;
        (o.camelCase = function (e) {
          return (
            e.substring(0, 1) +
            e.substring(1).replace(f, function (e, t) {
              return t.toUpperCase();
            })
          );
        }),
          (o.compareFieldsById = function (e, t) {
            return e.id - t.id;
          }),
          (o.decorateType = function (e, t) {
            if (e.$type) return t && e.$type.name !== t && (o.decorateRoot.remove(e.$type), (e.$type.name = t), o.decorateRoot.add(e.$type)), e.$type;
            n || (n = r(7645));
            var i = new n(t || e.name);
            return o.decorateRoot.add(i), (i.ctor = e), Object.defineProperty(e, '$type', { value: i, enumerable: !1 }), Object.defineProperty(e.prototype, '$type', { value: i, enumerable: !1 }), i;
          });
        var c = 0;
        (o.decorateEnum = function (e) {
          if (e.$type) return e.$type;
          i || (i = r(7025));
          var t = new i('Enum' + c++, e);
          return o.decorateRoot.add(t), Object.defineProperty(e, '$type', { value: t, enumerable: !1 }), t;
        }),
          (o.setProperty = function (e, t, r) {
            if ('object' != typeof e) throw TypeError('dst must be an object');
            if (!t) throw TypeError('path must be specified');
            return (function e(t, r, n) {
              var i = r.shift();
              if (r.length > 0) t[i] = e(t[i] || {}, r, n);
              else {
                var o = t[i];
                o && (n = [].concat(o).concat(n)), (t[i] = n);
              }
              return t;
            })(e, (t = t.split('.')), r);
          }),
          Object.defineProperty(o, 'decorateRoot', {
            get: function () {
              return s.decorated || (s.decorated = new (r(9424))());
            },
          });
      },
      1945: (e, t, r) => {
        'use strict';
        e.exports = i;
        var n = r(9693);
        function i(e, t) {
          (this.lo = e >>> 0), (this.hi = t >>> 0);
        }
        var o = (i.zero = new i(0, 0));
        (o.toNumber = function () {
          return 0;
        }),
          (o.zzEncode = o.zzDecode =
            function () {
              return this;
            }),
          (o.length = function () {
            return 1;
          });
        var s = (i.zeroHash = '\0\0\0\0\0\0\0\0');
        (i.fromNumber = function (e) {
          if (0 === e) return o;
          var t = e < 0;
          t && (e = -e);
          var r = e >>> 0,
            n = ((e - r) / 4294967296) >>> 0;
          return t && ((n = ~n >>> 0), (r = ~r >>> 0), ++r > 4294967295 && ((r = 0), ++n > 4294967295 && (n = 0))), new i(r, n);
        }),
          (i.from = function (e) {
            if ('number' == typeof e) return i.fromNumber(e);
            if (n.isString(e)) {
              if (!n.Long) return i.fromNumber(parseInt(e, 10));
              e = n.Long.fromString(e);
            }
            return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o;
          }),
          (i.prototype.toNumber = function (e) {
            if (!e && this.hi >>> 31) {
              var t = (1 + ~this.lo) >>> 0,
                r = ~this.hi >>> 0;
              return t || (r = (r + 1) >>> 0), -(t + 4294967296 * r);
            }
            return this.lo + 4294967296 * this.hi;
          }),
          (i.prototype.toLong = function (e) {
            return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e) };
          });
        var a = String.prototype.charCodeAt;
        (i.fromHash = function (e) {
          return e === s ? o : new i((a.call(e, 0) | (a.call(e, 1) << 8) | (a.call(e, 2) << 16) | (a.call(e, 3) << 24)) >>> 0, (a.call(e, 4) | (a.call(e, 5) << 8) | (a.call(e, 6) << 16) | (a.call(e, 7) << 24)) >>> 0);
        }),
          (i.prototype.toHash = function () {
            return String.fromCharCode(255 & this.lo, (this.lo >>> 8) & 255, (this.lo >>> 16) & 255, this.lo >>> 24, 255 & this.hi, (this.hi >>> 8) & 255, (this.hi >>> 16) & 255, this.hi >>> 24);
          }),
          (i.prototype.zzEncode = function () {
            var e = this.hi >> 31;
            return (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0), (this.lo = ((this.lo << 1) ^ e) >>> 0), this;
          }),
          (i.prototype.zzDecode = function () {
            var e = -(1 & this.lo);
            return (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0), (this.hi = ((this.hi >>> 1) ^ e) >>> 0), this;
          }),
          (i.prototype.length = function () {
            var e = this.lo,
              t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
              r = this.hi >>> 24;
            return 0 === r ? (0 === t ? (e < 16384 ? (e < 128 ? 1 : 2) : e < 2097152 ? 3 : 4) : t < 16384 ? (t < 128 ? 5 : 6) : t < 2097152 ? 7 : 8) : r < 128 ? 9 : 10;
          });
      },
      9693: function (e, t, r) {
        'use strict';
        var n = t;
        function i(e, t, r) {
          for (var n = Object.keys(t), i = 0; i < n.length; ++i) (void 0 !== e[n[i]] && r) || (e[n[i]] = t[n[i]]);
          return e;
        }
        function o(e) {
          function t(e, r) {
            if (!(this instanceof t)) return new t(e, r);
            Object.defineProperty(this, 'message', {
              get: function () {
                return e;
              },
            }),
              Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, 'stack', { value: new Error().stack || '' }),
              r && i(this, r);
          }
          return (
            ((t.prototype = Object.create(Error.prototype)).constructor = t),
            Object.defineProperty(t.prototype, 'name', {
              get: function () {
                return e;
              },
            }),
            (t.prototype.toString = function () {
              return this.name + ': ' + this.message;
            }),
            t
          );
        }
        (n.asPromise = r(4537)),
          (n.base64 = r(7419)),
          (n.EventEmitter = r(9211)),
          (n.float = r(945)),
          (n.inquire = r(7199)),
          (n.utf8 = r(4997)),
          (n.pool = r(6662)),
          (n.LongBits = r(1945)),
          (n.isNode = Boolean(void 0 !== r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node)),
          (n.global = (n.isNode && r.g) || ('undefined' != typeof window && window) || ('undefined' != typeof self && self) || this),
          (n.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (n.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (n.isInteger =
            Number.isInteger ||
            function (e) {
              return 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
            }),
          (n.isString = function (e) {
            return 'string' == typeof e || e instanceof String;
          }),
          (n.isObject = function (e) {
            return e && 'object' == typeof e;
          }),
          (n.isset = n.isSet =
            function (e, t) {
              var r = e[t];
              return !(null == r || !e.hasOwnProperty(t)) && ('object' != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0);
            }),
          (n.Buffer = (function () {
            try {
              var e = n.inquire('buffer').Buffer;
              return e.prototype.utf8Write ? e : null;
            } catch (e) {
              return null;
            }
          })()),
          (n._Buffer_from = null),
          (n._Buffer_allocUnsafe = null),
          (n.newBuffer = function (e) {
            return 'number' == typeof e ? (n.Buffer ? n._Buffer_allocUnsafe(e) : new n.Array(e)) : n.Buffer ? n._Buffer_from(e) : 'undefined' == typeof Uint8Array ? e : new Uint8Array(e);
          }),
          (n.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array),
          (n.Long = (n.global.dcodeIO && n.global.dcodeIO.Long) || n.global.Long || n.inquire('long')),
          (n.key2Re = /^true|false|0|1$/),
          (n.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (n.longToHash = function (e) {
            return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash;
          }),
          (n.longFromHash = function (e, t) {
            var r = n.LongBits.fromHash(e);
            return n.Long ? n.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t));
          }),
          (n.merge = i),
          (n.lcFirst = function (e) {
            return e.charAt(0).toLowerCase() + e.substring(1);
          }),
          (n.newError = o),
          (n.ProtocolError = o('ProtocolError')),
          (n.oneOfGetter = function (e) {
            for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = 1;
            return function () {
              for (var e = Object.keys(this), r = e.length - 1; r > -1; --r) if (1 === t[e[r]] && void 0 !== this[e[r]] && null !== this[e[r]]) return e[r];
            };
          }),
          (n.oneOfSetter = function (e) {
            return function (t) {
              for (var r = 0; r < e.length; ++r) e[r] !== t && delete this[e[r]];
            };
          }),
          (n.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }),
          (n._configure = function () {
            var e = n.Buffer;
            e
              ? ((n._Buffer_from =
                  (e.from !== Uint8Array.from && e.from) ||
                  function (t, r) {
                    return new e(t, r);
                  }),
                (n._Buffer_allocUnsafe =
                  e.allocUnsafe ||
                  function (t) {
                    return new e(t);
                  }))
              : (n._Buffer_from = n._Buffer_allocUnsafe = null);
          });
      },
      4497: (e, t, r) => {
        'use strict';
        e.exports = function (e) {
          var t = i.codegen(['m'], e.name + '$verify')('if(typeof m!=="object"||m===null)')('return%j', 'object expected'),
            r = {};
          e.oneofsArray.length && t('var p={}');
          for (var n = 0; n < e.fieldsArray.length; ++n) {
            var u = e._fieldsArray[n].resolve(),
              f = 'm' + i.safeProp(u.name);
            if ((u.optional && t('if(%s!=null&&m.hasOwnProperty(%j)){', f, u.name), u.map)) t('if(!util.isObject(%s))', f)('return%j', o(u, 'object'))('var k=Object.keys(%s)', f)('for(var i=0;i<k.length;++i){'), a(t, u, 'k[i]'), s(t, u, n, f + '[k[i]]')('}');
            else if (u.repeated) t('if(!Array.isArray(%s))', f)('return%j', o(u, 'array'))('for(var i=0;i<%s.length;++i){', f), s(t, u, n, f + '[i]')('}');
            else {
              if (u.partOf) {
                var c = i.safeProp(u.partOf.name);
                1 === r[u.partOf.name] && t('if(p%s===1)', c)('return%j', u.partOf.name + ': multiple values'), (r[u.partOf.name] = 1), t('p%s=1', c);
              }
              s(t, u, n, f);
            }
            u.optional && t('}');
          }
          return t('return null');
        };
        var n = r(7025),
          i = r(9935);
        function o(e, t) {
          return e.name + ': ' + t + (e.repeated && 'array' !== t ? '[]' : e.map && 'object' !== t ? '{k:' + e.keyType + '}' : '') + ' expected';
        }
        function s(e, t, r, i) {
          if (t.resolvedType)
            if (t.resolvedType instanceof n) {
              e('switch(%s){', i)('default:')('return%j', o(t, 'enum value'));
              for (var s = Object.keys(t.resolvedType.values), a = 0; a < s.length; ++a) e('case %i:', t.resolvedType.values[s[a]]);
              e('break')('}');
            } else e('{')('var e=types[%i].verify(%s);', r, i)('if(e)')('return%j+e', t.name + '.')('}');
          else
            switch (t.type) {
              case 'int32':
              case 'uint32':
              case 'sint32':
              case 'fixed32':
              case 'sfixed32':
                e('if(!util.isInteger(%s))', i)('return%j', o(t, 'integer'));
                break;
              case 'int64':
              case 'uint64':
              case 'sint64':
              case 'fixed64':
              case 'sfixed64':
                e('if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))', i, i, i, i)('return%j', o(t, 'integer|Long'));
                break;
              case 'float':
              case 'double':
                e('if(typeof %s!=="number")', i)('return%j', o(t, 'number'));
                break;
              case 'bool':
                e('if(typeof %s!=="boolean")', i)('return%j', o(t, 'boolean'));
                break;
              case 'string':
                e('if(!util.isString(%s))', i)('return%j', o(t, 'string'));
                break;
              case 'bytes':
                e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)('return%j', o(t, 'buffer'));
            }
          return e;
        }
        function a(e, t, r) {
          switch (t.keyType) {
            case 'int32':
            case 'uint32':
            case 'sint32':
            case 'fixed32':
            case 'sfixed32':
              e('if(!util.key32Re.test(%s))', r)('return%j', o(t, 'integer key'));
              break;
            case 'int64':
            case 'uint64':
            case 'sint64':
            case 'fixed64':
            case 'sfixed64':
              e('if(!util.key64Re.test(%s))', r)('return%j', o(t, 'integer|Long key'));
              break;
            case 'bool':
              e('if(!util.key2Re.test(%s))', r)('return%j', o(t, 'boolean key'));
          }
          return e;
        }
      },
      1667: (e, t, r) => {
        'use strict';
        var n = t,
          i = r(8368);
        n['.google.protobuf.Any'] = {
          fromObject: function (e) {
            if (e && e['@type']) {
              var t = e['@type'].substring(e['@type'].lastIndexOf('/') + 1),
                r = this.lookup(t);
              if (r) {
                var n = '.' === e['@type'].charAt(0) ? e['@type'].substr(1) : e['@type'];
                return -1 === n.indexOf('/') && (n = '/' + n), this.create({ type_url: n, value: r.encode(r.fromObject(e)).finish() });
              }
            }
            return this.fromObject(e);
          },
          toObject: function (e, t) {
            var r = '',
              n = '';
            if (t && t.json && e.type_url && e.value) {
              (n = e.type_url.substring(e.type_url.lastIndexOf('/') + 1)), (r = e.type_url.substring(0, e.type_url.lastIndexOf('/') + 1));
              var o = this.lookup(n);
              o && (e = o.decode(e.value));
            }
            if (!(e instanceof this.ctor) && e instanceof i) {
              var s = e.$type.toObject(e, t);
              return '' === r && (r = 'type.googleapis.com/'), (n = r + ('.' === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName)), (s['@type'] = n), s;
            }
            return this.toObject(e, t);
          },
        };
      },
      1173: (e, t, r) => {
        'use strict';
        e.exports = l;
        var n,
          i = r(9693),
          o = i.LongBits,
          s = i.base64,
          a = i.utf8;
        function u(e, t, r) {
          (this.fn = e), (this.len = t), (this.next = void 0), (this.val = r);
        }
        function f() {}
        function c(e) {
          (this.head = e.head), (this.tail = e.tail), (this.len = e.len), (this.next = e.states);
        }
        function l() {
          (this.len = 0), (this.head = new u(f, 0, 0)), (this.tail = this.head), (this.states = null);
        }
        var p = function () {
          return i.Buffer
            ? function () {
                return (l.create = function () {
                  return new n();
                })();
              }
            : function () {
                return new l();
              };
        };
        function h(e, t, r) {
          t[r] = 255 & e;
        }
        function d(e, t) {
          (this.len = e), (this.next = void 0), (this.val = t);
        }
        function y(e, t, r) {
          for (; e.hi; ) (t[r++] = (127 & e.lo) | 128), (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0), (e.hi >>>= 7);
          for (; e.lo > 127; ) (t[r++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
          t[r++] = e.lo;
        }
        function m(e, t, r) {
          (t[r] = 255 & e), (t[r + 1] = (e >>> 8) & 255), (t[r + 2] = (e >>> 16) & 255), (t[r + 3] = e >>> 24);
        }
        (l.create = p()),
          (l.alloc = function (e) {
            return new i.Array(e);
          }),
          i.Array !== Array && (l.alloc = i.pool(l.alloc, i.Array.prototype.subarray)),
          (l.prototype._push = function (e, t, r) {
            return (this.tail = this.tail.next = new u(e, t, r)), (this.len += t), this;
          }),
          (d.prototype = Object.create(u.prototype)),
          (d.prototype.fn = function (e, t, r) {
            for (; e > 127; ) (t[r++] = (127 & e) | 128), (e >>>= 7);
            t[r] = e;
          }),
          (l.prototype.uint32 = function (e) {
            return (this.len += (this.tail = this.tail.next = new d((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len), this;
          }),
          (l.prototype.int32 = function (e) {
            return e < 0 ? this._push(y, 10, o.fromNumber(e)) : this.uint32(e);
          }),
          (l.prototype.sint32 = function (e) {
            return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
          }),
          (l.prototype.uint64 = function (e) {
            var t = o.from(e);
            return this._push(y, t.length(), t);
          }),
          (l.prototype.int64 = l.prototype.uint64),
          (l.prototype.sint64 = function (e) {
            var t = o.from(e).zzEncode();
            return this._push(y, t.length(), t);
          }),
          (l.prototype.bool = function (e) {
            return this._push(h, 1, e ? 1 : 0);
          }),
          (l.prototype.fixed32 = function (e) {
            return this._push(m, 4, e >>> 0);
          }),
          (l.prototype.sfixed32 = l.prototype.fixed32),
          (l.prototype.fixed64 = function (e) {
            var t = o.from(e);
            return this._push(m, 4, t.lo)._push(m, 4, t.hi);
          }),
          (l.prototype.sfixed64 = l.prototype.fixed64),
          (l.prototype.float = function (e) {
            return this._push(i.float.writeFloatLE, 4, e);
          }),
          (l.prototype.double = function (e) {
            return this._push(i.float.writeDoubleLE, 8, e);
          });
        var v = i.Array.prototype.set
          ? function (e, t, r) {
              t.set(e, r);
            }
          : function (e, t, r) {
              for (var n = 0; n < e.length; ++n) t[r + n] = e[n];
            };
        (l.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) return this._push(h, 1, 0);
          if (i.isString(e)) {
            var r = l.alloc((t = s.length(e)));
            s.decode(e, r, 0), (e = r);
          }
          return this.uint32(t)._push(v, t, e);
        }),
          (l.prototype.string = function (e) {
            var t = a.length(e);
            return t ? this.uint32(t)._push(a.write, t, e) : this._push(h, 1, 0);
          }),
          (l.prototype.fork = function () {
            return (this.states = new c(this)), (this.head = this.tail = new u(f, 0, 0)), (this.len = 0), this;
          }),
          (l.prototype.reset = function () {
            return this.states ? ((this.head = this.states.head), (this.tail = this.states.tail), (this.len = this.states.len), (this.states = this.states.next)) : ((this.head = this.tail = new u(f, 0, 0)), (this.len = 0)), this;
          }),
          (l.prototype.ldelim = function () {
            var e = this.head,
              t = this.tail,
              r = this.len;
            return this.reset().uint32(r), r && ((this.tail.next = e.next), (this.tail = t), (this.len += r)), this;
          }),
          (l.prototype.finish = function () {
            for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e; ) e.fn(e.val, t, r), (r += e.len), (e = e.next);
            return t;
          }),
          (l._configure = function (e) {
            (n = e), (l.create = p()), n._configure();
          });
      },
      3155: (e, t, r) => {
        'use strict';
        e.exports = o;
        var n = r(1173);
        (o.prototype = Object.create(n.prototype)).constructor = o;
        var i = r(9693);
        function o() {
          n.call(this);
        }
        function s(e, t, r) {
          e.length < 40 ? i.utf8.write(e, t, r) : t.utf8Write ? t.utf8Write(e, r) : t.write(e, r);
        }
        (o._configure = function () {
          (o.alloc = i._Buffer_allocUnsafe),
            (o.writeBytesBuffer =
              i.Buffer && i.Buffer.prototype instanceof Uint8Array && 'set' === i.Buffer.prototype.set.name
                ? function (e, t, r) {
                    t.set(e, r);
                  }
                : function (e, t, r) {
                    if (e.copy) e.copy(t, r, 0, e.length);
                    else for (var n = 0; n < e.length; ) t[r++] = e[n++];
                  });
        }),
          (o.prototype.bytes = function (e) {
            i.isString(e) && (e = i._Buffer_from(e, 'base64'));
            var t = e.length >>> 0;
            return this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this;
          }),
          (o.prototype.string = function (e) {
            var t = i.Buffer.byteLength(e);
            return this.uint32(t), t && this._push(s, t, e), this;
          }),
          o._configure();
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var r = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.exports;
  }
  (__webpack_require__.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = (e, t) => {
      for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var __webpack_exports__ = {};
  (() => {
    'use strict';
    var e = __webpack_require__(9669),
      t = __webpack_require__.n(e),
      r = __webpack_require__(5448),
      n = __webpack_require__.n(r),
      i = __webpack_require__(3281);
    let o = null;
    const s = t().create({ timeout: 3e4, responseType: 'arraybuffer', headers: { 'Content-Type': 'application/protobuf' } });
    s.interceptors.request.use(
      e => e,
      e => Promise.reject(e.data.error.message)
    ),
      s.interceptors.response.use(
        e => e,
        e => (console.log(e), Promise.reject(e))
      );
    const a = (e, t) => {
        const r = o.lookupType(e);
        if (r.verify(t)) return !1;
        {
          const e = r.create(t);
          return r.encode(e).finish();
        }
      },
      u = (e, t) => {
        const r = o.lookupType(e);
        if (r.verify(t)) return !1;
        {
          const e = r.decode(t);
          return r.toObject(e, { defaults: !0 });
        }
      };
    function f(e) {
      return (e.data = e.rpcBuffer), n()(e);
    }
    var c;
    (c = JSON.parse(
      '{"options":{"objc_class_prefix":"PB3"},"nested":{"pb":{"nested":{"RPCInput":{"fields":{"obj":{"type":"string","id":1},"func":{"type":"string","id":2},"req":{"type":"bytes","id":3},"opt":{"keyType":"string","type":"string","id":4}}},"RPCOutput":{"fields":{"ret":{"type":"int32","id":1},"rsp":{"type":"bytes","id":2},"opt":{"keyType":"string","type":"string","id":3},"desc":{"type":"string","id":4},"obj":{"type":"string","id":5},"func":{"type":"string","id":6}}},"UserStatusExtObj":{"methods":{}}}},"plugin_pb":{"nested":{"RPCInput":{"fields":{"obj":{"type":"string","id":1},"func":{"type":"string","id":2},"req":{"type":"bytes","id":3},"opt":{"keyType":"string","type":"string","id":4}}},"RPCOutput":{"fields":{"ret":{"type":"int32","id":1},"rsp":{"type":"bytes","id":2},"opt":{"keyType":"string","type":"string","id":3},"desc":{"type":"string","id":4},"obj":{"type":"string","id":5},"func":{"type":"string","id":6}}},"PHomeExtObj":{"methods":{}}}},"uauth_pb":{"nested":{"RPCInput":{"fields":{"obj":{"type":"string","id":1},"func":{"type":"string","id":2},"req":{"type":"bytes","id":3},"opt":{"keyType":"string","type":"string","id":4}}},"RPCOutput":{"fields":{"ret":{"type":"int32","id":1},"rsp":{"type":"bytes","id":2},"opt":{"keyType":"string","type":"string","id":3},"desc":{"type":"string","id":4},"obj":{"type":"string","id":5},"func":{"type":"string","id":6}}},"DevLoginReq":{"fields":{"name":{"type":"string","id":1},"deviceId":{"type":"string","id":3},"deviceType":{"type":"int32","id":4},"channel":{"type":"int32","id":5}}},"CommonSignInRes":{"fields":{"loginToken":{"type":"string","id":1},"isNew":{"type":"bool","id":2},"userId":{"type":"sint64","id":3},"extends":{"keyType":"string","type":"string","id":4},"loginType":{"type":"UauthLoginType","id":5}}},"UauthLoginType":{"values":{"LT_DEV":0,"LT_NATIVE":1,"LT_QQ":2,"LT_WEIXIN":3,"LT_SMS":4,"LT_QUICK":5,"LT_APPLE":6,"LT_FACEBOOK":7,"LT_PHONE_PASSWORD":8}},"UauthExtObj":{"methods":{"GetDevLogin":{"requestType":"DevLoginReq","responseType":"CommonSignInRes"}}}}},"ures_pb":{"nested":{"RPCInput":{"fields":{"obj":{"type":"string","id":1},"func":{"type":"string","id":2},"req":{"type":"bytes","id":3},"opt":{"keyType":"string","type":"string","id":4}}},"RPCOutput":{"fields":{"ret":{"type":"int32","id":1},"rsp":{"type":"bytes","id":2},"opt":{"keyType":"string","type":"string","id":3},"desc":{"type":"string","id":4},"obj":{"type":"string","id":5},"func":{"type":"string","id":6}}},"UresExtObj":{"methods":{}}}}}}'
    )),
      (o = i.Root.fromJSON(c)),
      (window.apiGetDevLogin = (e = {}, t = {}) =>
        (e => {
          if (!o) throw '????????????pb';
          const t = Object.assign({ method: 'post', rpcInDesction: 'RPCInput', rpcOutDesction: 'RPCOutput' }, e),
            r = a(t.reqDesction, t.data || {}),
            n = a(t.rpcInDesction, { obj: t.serverName, func: t.funcName, req: r, opt: Object.assign({ application: t.application || 'oxygen', env: t.pbENV || 'beta', appid: t.appid, client: t.client || 'h5;h5;h5;4.6.0;1.0.0.0', 'X-Token': t.token || '', lang: t.lang || '*' }, t.opt) });
          return new Promise((e, r) => {
            let i = { 'X-Token': t.token || '', 'accept-language': t.lang || '*' };
            s[t.method](t.url, n, { adapter: f, rpcBuffer: n, headers: i })
              .then(i => {
                if (200 !== i.status) r({ message: '????????????', description: i.data.message, requestOpt: t, rpcOpt: n.opt, req: JSON.stringify(t.data) });
                else {
                  const o = u(t.rpcOutDesction, new Uint8Array(i.data));
                  o && 0 === o.ret ? ((i.data = o.rsp ? u(t.resDesction, o.rsp) : {}), e(i.data)) : r({ message: 9999 === o.ret ? `[${t.funcName}]????????????????????????????????????~` : `[${t.funcName}]${o.desc}`, description: o.desc, allDescription: o, requestOpt: t, rpcOpt: n.opt, req: JSON.stringify(t.data) });
                }
              })
              .catch(e => {
                r({ description: e.message, message: `[${t.funcName}]????????????????????????????????????~~`, requestOpt: t, rpcOpt: n.opt, req: JSON.stringify(t.data) });
              });
          });
        })({ url: `${t.apiDomain}/proxymsg`, reqDesction: 'DevLoginReq', resDesction: 'CommonSignInRes', funcName: 'GetDevLogin', serverName: `${t.pbServer || 'breath'}.uauth.AuthExtObj`, appid: t.appid || '0', pbENV: t.pbENV || 'beta', data: e }));
  })();
})();
