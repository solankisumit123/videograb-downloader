(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2969],
  {
    4217: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = t && t.cache ? t.cache : o,
          r = t && t.serializer ? t.serializer : s;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var n,
                  r,
                  s = 1 === e.length ? a : i;
                return (
                  (n = t.cache.create()),
                  (r = t.serializer),
                  s.bind(this, e, n, r)
                );
              }
        )(e, { cache: n, serializer: r });
      }
      function a(e, t, n, r) {
        var a =
            null == r || "number" == typeof r || "boolean" == typeof r
              ? r
              : n(r),
          i = t.get(a);
        return (void 0 === i && ((i = e.call(this, r)), t.set(a, i)), i);
      }
      function i(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          a = n(r),
          i = t.get(a);
        return (void 0 === i && ((i = e.apply(this, r)), t.set(a, i)), i);
      }
      (n.r(t),
        n.d(t, {
          memoize: function () {
            return r;
          },
          strategies: function () {
            return c;
          },
        }));
      var s = function () {
          return JSON.stringify(arguments);
        },
        u = (function () {
          function e() {
            this.cache = Object.create(null);
          }
          return (
            (e.prototype.get = function (e) {
              return this.cache[e];
            }),
            (e.prototype.set = function (e, t) {
              this.cache[e] = t;
            }),
            e
          );
        })(),
        o = {
          create: function () {
            return new u();
          },
        },
        c = {
          variadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()),
              (r = t.serializer),
              i.bind(this, e, n, r)
            );
          },
          monadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()),
              (r = t.serializer),
              a.bind(this, e, n, r)
            );
          },
        };
    },
    1744: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = {
        init(e) {
          !(function (e) {
            try {
              var t, n, r, a, i, s;
              ((t = window),
                (n = document),
                (r = "clarity"),
                (a = "script"),
                n.getElementById("clarity-script") ||
                  ((t[r] =
                    t[r] ||
                    function () {
                      (t[r].q = t[r].q || []).push(arguments);
                    }),
                  ((i = n.createElement(a)).async = 1),
                  (i.src = "https://www.clarity.ms/tag/" + e + "?ref=npm"),
                  (i.id = "clarity-script"),
                  (s = n.getElementsByTagName(a)[0]).parentNode.insertBefore(
                    i,
                    s,
                  )));
            } catch (e) {
              return;
            }
          })(e, "clarity-script");
        },
        setTag(e, t) {
          window.clarity("set", e, t);
        },
        identify(e, t, n, r) {
          window.clarity("identify", e, t, n, r);
        },
        consent(e = !0) {
          window.clarity("consent", e);
        },
        upgrade(e) {
          window.clarity("upgrade", e);
        },
        event(e) {
          window.clarity("event", e);
        },
      };
    },
    4127: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: n = null,
            width: i = null,
            children: s,
            dataNtpc: u = "",
          } = e;
          return (
            (0, a.useEffect)(() => {
              u &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(u) },
                });
            }, [u]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                s,
                t
                  ? (0, r.jsx)("div", {
                      style: {
                        height: null != n ? "".concat(n, "px") : "auto",
                        width: null != i ? "".concat(i, "px") : "auto",
                      },
                      "data-ntpc": u,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        }));
      let r = n(4336),
        a = n(4271);
    },
    7001: function (e, t, n) {
      "use strict";
      var r;
      let a;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: r = "dataLayer",
            nonce: o,
          } = e;
          return (
            void 0 === a && (a = r),
            (0, s.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(u.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(r, "'] = window['")
                      .concat(
                        r,
                        "'] || [];\n          function gtag(){window['",
                      )
                      .concat(
                        r,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '",
                      )
                      .concat(t, "' ")
                      .concat(n ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: o,
                }),
                (0, i.jsx)(u.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                  nonce: o,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === a) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[a]
            ? window[a].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  a,
                  " does not exist",
                ),
              );
        }));
      let i = n(4336),
        s = n(4271),
        u = (r = n(9982)) && r.__esModule ? r : { default: r };
    },
    6189: function (e, t, n) {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: r = "dataLayer",
            auth: o,
            preview: c,
            dataLayer: l,
            nonce: f,
          } = e;
          u = r;
          let d = "dataLayer" !== r ? "&l=".concat(r) : "";
          return (
            (0, i.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          l ? "w[l].push(".concat(JSON.stringify(l), ")") : "",
                          "\n      })(window,'",
                        )
                        .concat(r, "');"),
                  },
                  nonce: f,
                }),
                (0, a.jsx)(s.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(n, "?id=")
                    .concat(t)
                    .concat(d)
                    .concat(o ? "&gtm_auth=".concat(o) : "")
                    .concat(
                      c ? "&gtm_preview=".concat(c, "&gtm_cookies_win=x") : "",
                    ),
                  nonce: f,
                }),
              ],
            })
          );
        }));
      let a = n(4336),
        i = n(4271),
        s = (r = n(9982)) && r.__esModule ? r : { default: r },
        u = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || u;
        ((window[n] = window[n] || []), window[n].push(e));
      };
    },
    4775: function (e) {
      var t;
      ((t = function () {
        "use strict";
        var e = "millisecond",
          t = "second",
          n = "minute",
          r = "hour",
          a = "week",
          i = "month",
          s = "quarter",
          u = "year",
          o = "date",
          c = "Invalid Date",
          l =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          f =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          d = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : "" + Array(t + 1 - r.length).join(n) + e;
          },
          h = "en",
          g = {};
        g[h] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              n = e % 100;
            return "[" + e + (t[(n - 20) % 10] || t[n] || "th") + "]";
          },
        };
        var m = "$isDayjsObject",
          y = function (e) {
            return e instanceof $ || !(!e || !e[m]);
          },
          p = function e(t, n, r) {
            var a;
            if (!t) return h;
            if ("string" == typeof t) {
              var i = t.toLowerCase();
              (g[i] && (a = i), n && ((g[i] = n), (a = i)));
              var s = t.split("-");
              if (!a && s.length > 1) return e(s[0]);
            } else {
              var u = t.name;
              ((g[u] = t), (a = u));
            }
            return (!r && a && (h = a), a || (!r && h));
          },
          v = function (e, t) {
            if (y(e)) return e.clone();
            var n = "object" == typeof t ? t : {};
            return ((n.date = e), (n.args = arguments), new $(n));
          },
          w = {
            s: d,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t);
              return (
                (t <= 0 ? "+" : "-") +
                d(Math.floor(n / 60), 2, "0") +
                ":" +
                d(n % 60, 2, "0")
              );
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                a = t.clone().add(r, i),
                s = n - a < 0,
                u = t.clone().add(r + (s ? -1 : 1), i);
              return +(-(r + (n - a) / (s ? a - u : u - a)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (c) {
              return (
                {
                  M: i,
                  y: u,
                  w: a,
                  d: "day",
                  D: o,
                  h: r,
                  m: n,
                  s: t,
                  ms: e,
                  Q: s,
                }[c] ||
                String(c || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          };
        ((w.l = p),
          (w.i = y),
          (w.w = function (e, t) {
            return v(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          }));
        var $ = (function () {
            function d(e) {
              ((this.$L = p(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[m] = !0));
            }
            var h = d.prototype;
            return (
              (h.parse = function (e) {
                ((this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (w.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ("string" == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(l);
                    if (r) {
                      var a = r[2] - 1 || 0,
                        i = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              a,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              i,
                            ),
                          )
                        : new Date(
                            r[1],
                            a,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            i,
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init());
              }),
              (h.init = function () {
                var e = this.$d;
                ((this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds()));
              }),
              (h.$utils = function () {
                return w;
              }),
              (h.isValid = function () {
                return this.$d.toString() !== c;
              }),
              (h.isSame = function (e, t) {
                var n = v(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (h.isAfter = function (e, t) {
                return v(e) < this.startOf(t);
              }),
              (h.isBefore = function (e, t) {
                return this.endOf(t) < v(e);
              }),
              (h.$g = function (e, t, n) {
                return w.u(e) ? this[t] : this.set(n, e);
              }),
              (h.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (h.valueOf = function () {
                return this.$d.getTime();
              }),
              (h.startOf = function (e, s) {
                var c = this,
                  l = !!w.u(s) || s,
                  f = w.p(e),
                  d = function (e, t) {
                    var n = w.w(
                      c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e),
                      c,
                    );
                    return l ? n : n.endOf("day");
                  },
                  h = function (e, t) {
                    return w.w(
                      c
                        .toDate()
                        [
                          e
                        ].apply(c.toDate("s"), (l ? [0, 0, 0, 0] : [23, 59, 59,
                                999]).slice(t)),
                      c,
                    );
                  },
                  g = this.$W,
                  m = this.$M,
                  y = this.$D,
                  p = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                  case u:
                    return l ? d(1, 0) : d(31, 11);
                  case i:
                    return l ? d(1, m) : d(0, m + 1);
                  case a:
                    var v = this.$locale().weekStart || 0,
                      $ = (g < v ? g + 7 : g) - v;
                    return d(l ? y - $ : y + (6 - $), m);
                  case "day":
                  case o:
                    return h(p + "Hours", 0);
                  case r:
                    return h(p + "Minutes", 1);
                  case n:
                    return h(p + "Seconds", 2);
                  case t:
                    return h(p + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (h.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (h.$set = function (a, s) {
                var c,
                  l = w.p(a),
                  f = "set" + (this.$u ? "UTC" : ""),
                  d = (((c = {}).day = f + "Date"),
                  (c[o] = f + "Date"),
                  (c[i] = f + "Month"),
                  (c[u] = f + "FullYear"),
                  (c[r] = f + "Hours"),
                  (c[n] = f + "Minutes"),
                  (c[t] = f + "Seconds"),
                  (c[e] = f + "Milliseconds"),
                  c)[l],
                  h = "day" === l ? this.$D + (s - this.$W) : s;
                if (l === i || l === u) {
                  var g = this.clone().set(o, 1);
                  (g.$d[d](h),
                    g.init(),
                    (this.$d = g.set(
                      o,
                      Math.min(this.$D, g.daysInMonth()),
                    ).$d));
                } else d && this.$d[d](h);
                return (this.init(), this);
              }),
              (h.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (h.get = function (e) {
                return this[w.p(e)]();
              }),
              (h.add = function (e, s) {
                var o,
                  c = this;
                e = Number(e);
                var l = w.p(s),
                  f = function (t) {
                    var n = v(c);
                    return w.w(n.date(n.date() + Math.round(t * e)), c);
                  };
                if (l === i) return this.set(i, this.$M + e);
                if (l === u) return this.set(u, this.$y + e);
                if ("day" === l) return f(1);
                if (l === a) return f(7);
                var d =
                    (((o = {})[n] = 6e4), (o[r] = 36e5), (o[t] = 1e3), o)[l] ||
                    1,
                  h = this.$d.getTime() + e * d;
                return w.w(h, this);
              }),
              (h.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (h.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || c;
                var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                  a = w.z(this),
                  i = this.$H,
                  s = this.$m,
                  u = this.$M,
                  o = n.weekdays,
                  l = n.months,
                  d = n.meridiem,
                  h = function (e, n, a, i) {
                    return (e && (e[n] || e(t, r))) || a[n].slice(0, i);
                  },
                  g = function (e) {
                    return w.s(i % 12 || 12, e, "0");
                  },
                  m =
                    d ||
                    function (e, t, n) {
                      var r = e < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(f, function (e, r) {
                  return (
                    r ||
                    (function (e) {
                      switch (e) {
                        case "YY":
                          return String(t.$y).slice(-2);
                        case "YYYY":
                          return w.s(t.$y, 4, "0");
                        case "M":
                          return u + 1;
                        case "MM":
                          return w.s(u + 1, 2, "0");
                        case "MMM":
                          return h(n.monthsShort, u, l, 3);
                        case "MMMM":
                          return h(l, u);
                        case "D":
                          return t.$D;
                        case "DD":
                          return w.s(t.$D, 2, "0");
                        case "d":
                          return String(t.$W);
                        case "dd":
                          return h(n.weekdaysMin, t.$W, o, 2);
                        case "ddd":
                          return h(n.weekdaysShort, t.$W, o, 3);
                        case "dddd":
                          return o[t.$W];
                        case "H":
                          return String(i);
                        case "HH":
                          return w.s(i, 2, "0");
                        case "h":
                          return g(1);
                        case "hh":
                          return g(2);
                        case "a":
                          return m(i, s, !0);
                        case "A":
                          return m(i, s, !1);
                        case "m":
                          return String(s);
                        case "mm":
                          return w.s(s, 2, "0");
                        case "s":
                          return String(t.$s);
                        case "ss":
                          return w.s(t.$s, 2, "0");
                        case "SSS":
                          return w.s(t.$ms, 3, "0");
                        case "Z":
                          return a;
                      }
                      return null;
                    })(e) ||
                    a.replace(":", "")
                  );
                });
              }),
              (h.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (h.diff = function (e, o, c) {
                var l,
                  f = this,
                  d = w.p(o),
                  h = v(e),
                  g = (h.utcOffset() - this.utcOffset()) * 6e4,
                  m = this - h,
                  y = function () {
                    return w.m(f, h);
                  };
                switch (d) {
                  case u:
                    l = y() / 12;
                    break;
                  case i:
                    l = y();
                    break;
                  case s:
                    l = y() / 3;
                    break;
                  case a:
                    l = (m - g) / 6048e5;
                    break;
                  case "day":
                    l = (m - g) / 864e5;
                    break;
                  case r:
                    l = m / 36e5;
                    break;
                  case n:
                    l = m / 6e4;
                    break;
                  case t:
                    l = m / 1e3;
                    break;
                  default:
                    l = m;
                }
                return c ? l : w.a(l);
              }),
              (h.daysInMonth = function () {
                return this.endOf(i).$D;
              }),
              (h.$locale = function () {
                return g[this.$L];
              }),
              (h.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = p(e, t, !0);
                return (r && (n.$L = r), n);
              }),
              (h.clone = function () {
                return w.w(this.$d, this);
              }),
              (h.toDate = function () {
                return new Date(this.valueOf());
              }),
              (h.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (h.toISOString = function () {
                return this.$d.toISOString();
              }),
              (h.toString = function () {
                return this.$d.toUTCString();
              }),
              d
            );
          })(),
          M = $.prototype;
        return (
          (v.prototype = M),
          [
            ["$ms", e],
            ["$s", t],
            ["$m", n],
            ["$H", r],
            ["$W", "day"],
            ["$M", i],
            ["$y", u],
            ["$D", o],
          ].forEach(function (e) {
            M[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (v.extend = function (e, t) {
            return (e.$i || (e(t, $, v), (e.$i = !0)), v);
          }),
          (v.locale = p),
          (v.isDayjs = y),
          (v.unix = function (e) {
            return v(1e3 * e);
          }),
          (v.en = g[h]),
          (v.Ls = g),
          (v.p = {}),
          v
        );
      }),
        (e.exports = t()));
    },
    4987: function (e, t, n) {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      n.d(t, {
        g: function () {
          return r;
        },
      });
    },
    1997: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return s;
        },
      });
      var r = n(4987),
        a = n(4271),
        i = n(6245);
      function s(e) {
        let { locale: t, ...n } = e;
        if (!t)
          throw Error(
            "Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale",
          );
        return a.createElement(i.IntlProvider, (0, r.g)({ locale: t }, n));
      }
    },
    7723: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        }));
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    230: function (e, t, n) {
      "use strict";
      let r = n(4271).createContext(void 0);
      t.IntlContext = r;
    },
    6245: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(4271),
        a = n(9997),
        i = n(230);
      n(4217);
      var s = r && r.__esModule ? r : { default: r };
      t.IntlProvider = function (e) {
        let {
            children: t,
            defaultTranslationValues: n,
            formats: u,
            getMessageFallback: o,
            locale: c,
            messages: l,
            now: f,
            onError: d,
            timeZone: h,
          } = e,
          g = r.useMemo(() => a.createCache(), [c]),
          m = r.useMemo(() => a.createIntlFormatters(g), [g]),
          y = r.useMemo(
            () => ({
              ...a.initializeConfig({
                locale: c,
                defaultTranslationValues: n,
                formats: u,
                getMessageFallback: o,
                messages: l,
                now: f,
                onError: d,
                timeZone: h,
              }),
              formatters: m,
              cache: g,
            }),
            [g, n, u, m, o, c, l, f, d, h],
          );
        return s.default.createElement(i.IntlContext.Provider, { value: y }, t);
      };
    },
    9997: function (e, t, n) {
      "use strict";
      var r = n(4217);
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(".");
      }
      function i(e) {
        return a(e.namespace, e.key);
      }
      function s(e) {
        console.error(e);
      }
      function u(e, t) {
        return r.memoize(e, {
          cache: {
            create: () => ({
              get: (e) => t[e],
              set(e, n) {
                t[e] = n;
              },
            }),
          },
          strategy: r.strategies.variadic,
        });
      }
      function o(e, t) {
        return u(function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return new e(...n);
        }, t);
      }
      ((t.createCache = function () {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }),
        (t.createIntlFormatters = function (e) {
          return {
            getDateTimeFormat: o(Intl.DateTimeFormat, e.dateTime),
            getNumberFormat: o(Intl.NumberFormat, e.number),
            getPluralRules: o(Intl.PluralRules, e.pluralRules),
            getRelativeTimeFormat: o(Intl.RelativeTimeFormat, e.relativeTime),
            getListFormat: o(Intl.ListFormat, e.list),
            getDisplayNames: o(Intl.DisplayNames, e.displayNames),
          };
        }),
        (t.defaultGetMessageFallback = i),
        (t.defaultOnError = s),
        (t.initializeConfig = function (e) {
          let { getMessageFallback: t, messages: n, onError: r, ...a } = e;
          return {
            ...a,
            messages: n,
            onError: r || s,
            getMessageFallback: t || i,
          };
        }),
        (t.joinPath = a),
        (t.memoFn = u));
    },
  },
]);
