(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7454, 6962],
  {
    9929: function (e, t, r) {
      var n = {
        "./ar.json": [2610, 2610],
        "./bn.json": [1228, 1228],
        "./de.json": [3447, 3447],
        "./en.json": [4993, 4993],
        "./es.json": [2748, 2748],
        "./fr.json": [1225, 1225],
        "./hi.json": [1065, 1065],
        "./id.json": [7626, 7626],
        "./it.json": [8268, 8268],
        "./ja.json": [8820, 8820],
        "./ko.json": [4068, 2757],
        "./ms.json": [4784, 4784],
        "./pa.json": [2588, 2588],
        "./pt.json": [2765, 2765],
        "./ru.json": [8521, 8521],
        "./ta.json": [6593, 6593],
        "./te.json": [7236, 7236],
        "./th.json": [2721, 2721],
        "./tr.json": [590, 590],
        "./ur.json": [5346, 5346],
        "./vi.json": [7438, 7438],
      };
      function a(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          a = t[0];
        return r.e(t[1]).then(function () {
          return r.t(a, 19);
        });
      }
      ((a.keys = function () {
        return Object.keys(n);
      }),
        (a.id = 9929),
        (e.exports = a));
    },
    9596: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 2504));
    },
    3834: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(4271);
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
      var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let i = (0, n.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: a = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: u,
            className: c = "",
            children: s,
            iconNode: f,
            ...d
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...o,
              width: a,
              height: a,
              stroke: r,
              strokeWidth: u ? (24 * Number(i)) / Number(a) : i,
              className: l("lucide", c),
              ...d,
            },
            [
              ...f.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(s) ? s : [s]),
            ],
          );
        }),
        u = (e, t) => {
          let r = (0, n.forwardRef)((r, o) => {
            let { className: u, ...c } = r;
            return (0, n.createElement)(i, {
              ref: o,
              iconNode: t,
              className: l("lucide-".concat(a(e)), u),
              ...c,
            });
          });
          return ((r.displayName = "".concat(e)), r);
        };
    },
    5401: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(3834).Z)("Download", [
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
      ]);
    },
    4047: function (e, t, r) {
      "use strict";
      var n = r(8689),
        a = r(9313),
        l = r(2414);
      (n.default, a.default, (t.os = l.default));
    },
    1962: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9048),
        a = r(4271),
        l = r(9307),
        o = r(3585),
        i = r(5636),
        u = a && a.__esModule ? a : { default: a };
      let c = a.forwardRef(function (e, t) {
        let { locale: r, localePrefix: a, ...c } = e,
          s = l.default(),
          f = r || s,
          d = o.getLocalePrefix(f, a);
        return u.default.createElement(
          i.default,
          n.extends(
            { ref: t, locale: f, localePrefixMode: a.mode, prefix: d },
            c,
          ),
        );
      });
      ((c.displayName = "ClientLink"), (t.default = c));
    },
    9313: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9048),
        a = r(4271),
        l = r(9307),
        o = r(4746),
        i = r(1648),
        u = r(1962),
        c = r(5133),
        s = r(7558),
        f = r(5209),
        d = a && a.__esModule ? a : { default: a };
      t.default = function (e) {
        let t = o.receiveRoutingConfig(e),
          r = o.receiveLocaleCookie(e.localeCookie);
        function m() {
          let e = l.default();
          if (!t.locales.includes(e)) throw Error(void 0);
          return e;
        }
        let p = a.forwardRef(function (e, a) {
          let { href: l, locale: o, ...c } = e,
            s = m(),
            f = o || s;
          return d.default.createElement(
            u.default,
            n.extends(
              {
                ref: a,
                href: i.compileLocalizedPathname({
                  locale: f,
                  pathname: l,
                  params: "object" == typeof l ? l.params : void 0,
                  pathnames: t.pathnames,
                }),
                locale: o,
                localeCookie: r,
                localePrefix: t.localePrefix,
              },
              c,
            ),
          );
        });
        function h(e) {
          let { href: r, locale: n } = e;
          return i.compileLocalizedPathname({
            ...i.normalizeNameOrNameWithParams(r),
            locale: n,
            pathnames: t.pathnames,
          });
        }
        return (
          (p.displayName = "Link"),
          {
            Link: p,
            redirect: function (e) {
              let r = h({ href: e, locale: m() });
              for (
                var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), l = 1;
                l < n;
                l++
              )
                a[l - 1] = arguments[l];
              return c.clientRedirect(
                { pathname: r, localePrefix: t.localePrefix },
                ...a,
              );
            },
            permanentRedirect: function (e) {
              let r = h({ href: e, locale: m() });
              for (
                var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), l = 1;
                l < n;
                l++
              )
                a[l - 1] = arguments[l];
              return c.clientPermanentRedirect(
                { pathname: r, localePrefix: t.localePrefix },
                ...a,
              );
            },
            usePathname: function () {
              let e = s.default(t),
                r = m();
              return a.useMemo(
                () => (e ? i.getRoute(r, e, t.pathnames) : e),
                [r, e],
              );
            },
            useRouter: function () {
              let e = f.default(t.localePrefix, r),
                n = m();
              return a.useMemo(
                () => ({
                  ...e,
                  push(t) {
                    for (
                      var r,
                        a = arguments.length,
                        l = Array(a > 1 ? a - 1 : 0),
                        o = 1;
                      o < a;
                      o++
                    )
                      l[o - 1] = arguments[o];
                    let i = h({
                      href: t,
                      locale:
                        (null === (r = l[0]) || void 0 === r
                          ? void 0
                          : r.locale) || n,
                    });
                    return e.push(i, ...l);
                  },
                  replace(t) {
                    for (
                      var r,
                        a = arguments.length,
                        l = Array(a > 1 ? a - 1 : 0),
                        o = 1;
                      o < a;
                      o++
                    )
                      l[o - 1] = arguments[o];
                    let i = h({
                      href: t,
                      locale:
                        (null === (r = l[0]) || void 0 === r
                          ? void 0
                          : r.locale) || n,
                    });
                    return e.replace(i, ...l);
                  },
                  prefetch(t) {
                    for (
                      var r,
                        a = arguments.length,
                        l = Array(a > 1 ? a - 1 : 0),
                        o = 1;
                      o < a;
                      o++
                    )
                      l[o - 1] = arguments[o];
                    let i = h({
                      href: t,
                      locale:
                        (null === (r = l[0]) || void 0 === r
                          ? void 0
                          : r.locale) || n,
                    });
                    return e.prefetch(i, ...l);
                  },
                }),
                [e, n],
              );
            },
            getPathname: h,
          }
        );
      };
    },
    2414: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3090),
        a = r(4271),
        l = r(9307),
        o = r(6230),
        i = r(6323),
        u = r(1648),
        c = r(7558);
      t.default = function (e) {
        function t() {
          return l.default();
        }
        let { Link: r, config: s, getPathname: f, ...d } = o.default(t, e);
        return {
          ...d,
          Link: r,
          usePathname: function () {
            let e = c.default(s),
              r = t();
            return a.useMemo(
              () => (e && s.pathnames ? u.getRoute(r, e, s.pathnames) : e),
              [r, e],
            );
          },
          useRouter: function () {
            let e = n.useRouter(),
              r = t(),
              l = n.usePathname();
            return a.useMemo(() => {
              function t(e) {
                return function (t, n) {
                  let { locale: a, ...o } = n || {},
                    u = [
                      f({
                        href: t,
                        locale: a || r,
                        domain: window.location.host,
                      }),
                    ];
                  (Object.keys(o).length > 0 && u.push(o),
                    e(...u),
                    i.default(s.localeCookie, l, r, a));
                };
              }
              return {
                ...e,
                push: t(e.push),
                replace: t(e.replace),
                prefetch: t(e.prefetch),
              };
            }, [r, l, e]);
          },
          getPathname: f,
        };
      };
    },
    8689: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9048),
        a = r(4271),
        l = r(4746),
        o = r(1962),
        i = r(5133),
        u = r(7558),
        c = r(5209),
        s = a && a.__esModule ? a : { default: a };
      t.default = function (e) {
        let t = l.receiveLocalePrefixConfig(
            null == e ? void 0 : e.localePrefix,
          ),
          r = l.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
          f = a.forwardRef(function (e, a) {
            return s.default.createElement(
              o.default,
              n.extends({ ref: a, localeCookie: r, localePrefix: t }, e),
            );
          });
        return (
          (f.displayName = "Link"),
          {
            Link: f,
            redirect: function (e) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                n[a - 1] = arguments[a];
              return i.clientRedirect({ pathname: e, localePrefix: t }, ...n);
            },
            permanentRedirect: function (e) {
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                n[a - 1] = arguments[a];
              return i.clientPermanentRedirect(
                { pathname: e, localePrefix: t },
                ...n,
              );
            },
            usePathname: function () {
              return u.default({
                localePrefix: t,
                defaultLocale: null == e ? void 0 : e.defaultLocale,
              });
            },
            useRouter: function () {
              return c.default(t, r);
            },
          }
        );
      };
    },
    5133: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9307),
        a = r(8426);
      function l(e) {
        return function (t) {
          let r;
          try {
            r = n.default();
          } catch (e) {
            throw e;
          }
          for (
            var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), o = 1;
            o < a;
            o++
          )
            l[o - 1] = arguments[o];
          return e({ ...t, locale: r }, ...l);
        };
      }
      let o = l(a.baseRedirect),
        i = l(a.basePermanentRedirect);
      ((t.clientPermanentRedirect = i), (t.clientRedirect = o));
    },
    7558: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3090),
        a = r(4271),
        l = r(9307),
        o = r(3585);
      t.default = function (e) {
        let t = n.usePathname(),
          r = l.default();
        return a.useMemo(() => {
          if (!t) return t;
          let n = t,
            a = o.getLocalePrefix(r, e.localePrefix);
          if (o.hasPathnamePrefixed(a, t)) n = o.unprefixPathname(t, a);
          else if (
            "as-needed" === e.localePrefix.mode &&
            e.localePrefix.prefixes
          ) {
            let e = o.getLocaleAsPrefix(r);
            o.hasPathnamePrefixed(e, t) && (n = o.unprefixPathname(t, e));
          }
          return n;
        }, [e.localePrefix, r, t]);
      };
    },
    5209: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3090),
        a = r(4271),
        l = r(9307),
        o = r(3585),
        i = r(6323),
        u = r(1648);
      t.default = function (e, t) {
        let r = n.useRouter(),
          c = l.default(),
          s = n.usePathname();
        return a.useMemo(() => {
          function n(r) {
            return function (n, a) {
              let { locale: l, ...f } = a || {};
              i.default(t, s, c, l);
              let d = [
                (function (t, r) {
                  let n = window.location.pathname,
                    a = u.getBasePath(s);
                  a && (n = n.replace(a, ""));
                  let l = r || c,
                    i = o.getLocalePrefix(l, e);
                  return o.localizeHref(t, l, c, n, i);
                })(n, l),
              ];
              return (Object.keys(f).length > 0 && d.push(f), r(...d));
            };
          }
          return {
            ...r,
            push: n(r.push),
            replace: n(r.replace),
            prefetch: n(r.prefetch),
          };
        }, [c, t, e, s, r]);
      };
    },
    7818: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9048),
        a = r(5085),
        l = r(3090),
        o = r(4271),
        i = r(9307),
        u = r(6323);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = c(a),
        f = c(o),
        d = o.forwardRef(function (e, t) {
          let {
              defaultLocale: r,
              href: a,
              locale: c,
              localeCookie: d,
              onClick: m,
              prefetch: p,
              unprefixed: h,
              ...A
            } = e,
            x = i.default(),
            g = null != c && c !== x,
            v = c || x,
            b = (function () {
              let [e, t] = o.useState();
              return (
                o.useEffect(() => {
                  t(window.location.host);
                }, []),
                e
              );
            })(),
            y =
              b &&
              h &&
              (h.domains[b] === v ||
                (!Object.keys(h.domains).includes(b) && x === r && !c))
                ? h.pathname
                : a,
            P = l.usePathname();
          return (
            g && (p = !1),
            f.default.createElement(
              s.default,
              n.extends(
                {
                  ref: t,
                  href: y,
                  hrefLang: g ? c : void 0,
                  onClick: function (e) {
                    (u.default(d, P, x, c), m && m(e));
                  },
                  prefetch: p,
                },
                A,
              ),
            )
          );
        });
      t.default = d;
    },
    5636: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9048),
        a = r(3090),
        l = r(4271),
        o = r(9307),
        i = r(3585),
        u = r(7818),
        c = l && l.__esModule ? l : { default: l };
      let s = l.forwardRef(function (e, t) {
        let {
            href: r,
            locale: s,
            localeCookie: f,
            localePrefixMode: d,
            prefix: m,
            ...p
          } = e,
          h = a.usePathname(),
          A = o.default(),
          x = s !== A,
          [g, v] = l.useState(() =>
            i.isLocalizableHref(r) && ("never" !== d || x)
              ? i.prefixHref(r, m)
              : r,
          );
        return (
          l.useEffect(() => {
            h && v(i.localizeHref(r, s, A, h, m));
          }, [A, r, s, h, m]),
          c.default.createElement(
            u.default,
            n.extends({ ref: t, href: g, locale: s, localeCookie: f }, p),
          )
        );
      });
      ((s.displayName = "ClientLink"), (t.default = s));
    },
    6230: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(9048),
        a = r(3090),
        l = r(4271),
        o = r(4746),
        i = r(3585),
        u = r(7818),
        c = r(1648),
        s = l && l.__esModule ? l : { default: l };
      t.default = function (e, t) {
        let r = o.receiveRoutingConfig(t || {}),
          f = r.pathnames,
          d = ("as-needed" === r.localePrefix.mode && r.domains) || void 0,
          m = l.forwardRef(function (t, a) {
            let o,
              c,
              m,
              { href: h, locale: A, ...x } = t;
            "object" == typeof h
              ? ((o = h.pathname), (m = h.query), (c = h.params))
              : (o = h);
            let g = i.isLocalizableHref(h),
              v = e(),
              b = i.isPromise(v) ? l.use(v) : v,
              y = g
                ? p(
                    {
                      locale: A || b,
                      href: null == f ? o : { pathname: o, params: c },
                    },
                    null != A || d || void 0,
                  )
                : o;
            return s.default.createElement(
              u.default,
              n.extends(
                {
                  ref: a,
                  defaultLocale: r.defaultLocale,
                  href: "object" == typeof h ? { ...h, pathname: y } : y,
                  locale: A,
                  localeCookie: r.localeCookie,
                  unprefixed:
                    d && g
                      ? {
                          domains: r.domains.reduce(
                            (e, t) => ((e[t.domain] = t.defaultLocale), e),
                            {},
                          ),
                          pathname: p(
                            {
                              locale: b,
                              href:
                                null == f
                                  ? { pathname: o, query: m }
                                  : { pathname: o, query: m, params: c },
                            },
                            !1,
                          ),
                        }
                      : void 0,
                },
                x,
              ),
            );
          });
        function p(e, t) {
          let n;
          let { href: a, locale: l } = e;
          return (
            null == f
              ? "object" == typeof a
                ? ((n = a.pathname),
                  a.query && (n += c.serializeSearchParams(a.query)))
                : (n = a)
              : (n = c.compileLocalizedPathname({
                  locale: l,
                  ...c.normalizeNameOrNameWithParams(a),
                  pathnames: r.pathnames,
                })),
            c.applyPathnamePrefix(n, l, r, e.domain, t)
          );
        }
        function h(e) {
          return function (t) {
            for (
              var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
              a < r;
              a++
            )
              n[a - 1] = arguments[a];
            return e(p(t, t.domain ? void 0 : d), ...n);
          };
        }
        return {
          config: r,
          Link: m,
          redirect: h(a.redirect),
          permanentRedirect: h(a.permanentRedirect),
          getPathname: p,
        };
      };
    },
    8426: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3090),
        a = r(3585);
      function l(e) {
        return function (t) {
          let r = a.getLocalePrefix(t.locale, t.localePrefix),
            n =
              "never" !== t.localePrefix.mode && a.isLocalizableHref(t.pathname)
                ? a.prefixPathname(r, t.pathname)
                : t.pathname;
          for (
            var l = arguments.length, o = Array(l > 1 ? l - 1 : 0), i = 1;
            i < l;
            i++
          )
            o[i - 1] = arguments[i];
          return e(n, ...o);
        };
      }
      let o = l(n.redirect),
        i = l(n.permanentRedirect);
      ((t.basePermanentRedirect = i), (t.baseRedirect = o));
    },
    6323: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(1648);
      t.default = function (e, t, r, a) {
        if (!e || !(a !== r && null != a) || !t) return;
        let l = n.getBasePath(t),
          { name: o, ...i } = e;
        i.path || (i.path = "" !== l ? l : "/");
        let u = "".concat(o, "=").concat(a, ";");
        for (let [e, t] of Object.entries(i))
          ((u += "".concat("maxAge" === e ? "max-age" : e)),
            "boolean" != typeof t && (u += "=" + t),
            (u += ";"));
        document.cookie = u;
      };
    },
    1648: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3585);
      function a(e) {
        let t = new URLSearchParams();
        for (let [r, n] of Object.entries(e))
          Array.isArray(n)
            ? n.forEach((e) => {
                t.append(r, String(e));
              })
            : t.set(r, String(n));
        return "?" + t.toString();
      }
      ((t.applyPathnamePrefix = function (e, t, r, a, l) {
        let o;
        let { mode: i } = r.localePrefix;
        if (void 0 !== l) o = l;
        else if (n.isLocalizableHref(e)) {
          if ("always" === i) o = !0;
          else if ("as-needed" === i) {
            let e = r.defaultLocale;
            if (r.domains) {
              let t = r.domains.find((e) => e.domain === a);
              t && (e = t.defaultLocale);
            }
            o = e !== t;
          }
        }
        return o
          ? n.prefixPathname(n.getLocalePrefix(t, r.localePrefix), e)
          : e;
      }),
        (t.compileLocalizedPathname = function (e) {
          let { pathname: t, locale: r, params: l, pathnames: o, query: i } = e;
          function u(e) {
            let t = o[e];
            return (t || (t = e), t);
          }
          function c(e) {
            let t = "string" == typeof e ? e : e[r];
            return (
              l &&
                Object.entries(l).forEach((e) => {
                  let r,
                    n,
                    [a, l] = e;
                  (Array.isArray(l)
                    ? ((r = "(\\[)?\\[...".concat(a, "\\](\\])?")),
                      (n = l.map((e) => String(e)).join("/")))
                    : ((r = "\\[".concat(a, "\\]")), (n = String(l))),
                    (t = t.replace(RegExp(r, "g"), n)));
                }),
              (t = t.replace(/\[\[\.\.\..+\]\]/g, "")),
              (t = n.normalizeTrailingSlash(t)),
              i && (t += a(i)),
              t
            );
          }
          if ("string" == typeof t) return c(u(t));
          {
            let { pathname: e, ...r } = t;
            return { ...r, pathname: c(u(e)) };
          }
        }),
        (t.getBasePath = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : window.location.pathname;
          return "/" === e ? t : t.replace(e, "");
        }),
        (t.getRoute = function (e, t, r) {
          let a = n.getSortedPathnames(Object.keys(r)),
            l = decodeURI(t);
          for (let t of a) {
            let a = r[t];
            if ("string" == typeof a) {
              if (n.matchesPathname(a, l)) return t;
            } else if (n.matchesPathname(a[e], l)) return t;
          }
          return t;
        }),
        (t.normalizeNameOrNameWithParams = function (e) {
          return "string" == typeof e ? { pathname: e } : e;
        }),
        (t.serializeSearchParams = a));
    },
    4746: function (e, t) {
      "use strict";
      function r(e) {
        return (
          !(null != e && !e) && {
            name: "NEXT_LOCALE",
            maxAge: 31536e3,
            sameSite: "lax",
            ...("object" == typeof e && e),
          }
        );
      }
      function n(e) {
        return "object" == typeof e ? e : { mode: e || "always" };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.receiveLocaleCookie = r),
        (t.receiveLocalePrefixConfig = n),
        (t.receiveRoutingConfig = function (e) {
          var t, a;
          return {
            ...e,
            localePrefix: n(e.localePrefix),
            localeCookie: r(e.localeCookie),
            localeDetection:
              null === (t = e.localeDetection) || void 0 === t || t,
            alternateLinks:
              null === (a = e.alternateLinks) || void 0 === a || a,
          };
        }));
    },
    8283: function (e, t, r) {
      "use strict";
      var n = r(5267);
      (n.getFormatter,
        n.getLocale,
        n.getMessages,
        n.getNow,
        (t.cF = n.getRequestConfig),
        n.getTimeZone,
        n.getTranslations,
        n.setRequestLocale,
        n.unstable_setRequestLocale);
    },
    5267: function (e, t) {
      "use strict";
      function r(e) {
        return () => {
          throw Error(
            "`".concat(e, "` is not supported in Client Components."),
          );
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = r("getFormatter"),
        a = r("getNow"),
        l = r("getTimeZone"),
        o = r("getMessages"),
        i = r("getLocale"),
        u = r("getTranslations"),
        c = r("unstable_setRequestLocale"),
        s = r("setRequestLocale");
      ((t.getFormatter = n),
        (t.getLocale = i),
        (t.getMessages = o),
        (t.getNow = a),
        (t.getRequestConfig = function () {
          return r("getRequestConfig");
        }),
        (t.getTimeZone = l),
        (t.getTranslations = u),
        (t.setRequestLocale = s),
        (t.unstable_setRequestLocale = c));
    },
    3585: function (e, t, r) {
      "use strict";
      var n = r(2322);
      function a(e) {
        return (
          ("object" == typeof e
            ? null == e.host && null == e.hostname
            : !/^[a-z]+:/i.test(e)) &&
          !(function (e) {
            let t = "object" == typeof e ? e.pathname : e;
            return null != t && !t.startsWith("/");
          })(e)
        );
      }
      function l(e, t) {
        let r;
        return (
          "string" == typeof e
            ? (r = o(t, e))
            : ((r = { ...e }), e.pathname && (r.pathname = o(t, e.pathname))),
          r
        );
      }
      function o(e, t) {
        let r = e;
        return (/^\/(\?.*)?$/.test(t) && (t = t.slice(1)), (r += t));
      }
      function i(e, t) {
        return t === e || t.startsWith("".concat(e, "/"));
      }
      function u(e) {
        let t = (function () {
          try {
            return "true" === n.env._next_intl_trailing_slash;
          } catch (e) {
            return !1;
          }
        })();
        if ("/" !== e) {
          let r = e.endsWith("/");
          t && !r ? (e += "/") : !t && r && (e = e.slice(0, -1));
        }
        return e;
      }
      function c(e) {
        return "/" + e;
      }
      function s(e) {
        let t = e
          .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)")
          .replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)")
          .replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(t, "$"));
      }
      function f(e) {
        return e.includes("[[...");
      }
      function d(e) {
        return e.includes("[...");
      }
      function m(e) {
        return e.includes("[");
      }
      function p(e, t) {
        let r = e.split("/"),
          n = t.split("/"),
          a = Math.max(r.length, n.length);
        for (let e = 0; e < a; e++) {
          let t = r[e],
            a = n[e];
          if (!t && a) return -1;
          if (t && !a) return 1;
          if (t || a) {
            if (!m(t) && m(a)) return -1;
            if (m(t) && !m(a)) return 1;
            if (!d(t) && d(a)) return -1;
            if (d(t) && !d(a)) return 1;
            if (!f(t) && f(a)) return -1;
            if (f(t) && !f(a)) return 1;
          }
        }
        return 0;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocaleAsPrefix = c),
        (t.getLocalePrefix = function (e, t) {
          var r;
          return (
            ("never" !== t.mode &&
              (null === (r = t.prefixes) || void 0 === r ? void 0 : r[e])) ||
            c(e)
          );
        }),
        (t.getSortedPathnames = function (e) {
          return e.sort(p);
        }),
        (t.hasPathnamePrefixed = i),
        (t.isLocalizableHref = a),
        (t.isPromise = function (e) {
          return "function" == typeof e.then;
        }),
        (t.localizeHref = function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            n = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0;
          if (!a(e)) return e;
          let u = i(o, n);
          return (t !== r || u) && null != o ? l(e, o) : e;
        }),
        (t.matchesPathname = function (e, t) {
          let r = u(e),
            n = u(t);
          return s(r).test(n);
        }),
        (t.normalizeTrailingSlash = u),
        (t.prefixHref = l),
        (t.prefixPathname = o),
        (t.templateToRegex = s),
        (t.unprefixPathname = function (e, t) {
          return e.replace(new RegExp("^".concat(t)), "") || "/";
        }));
    },
    2504: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return A;
        },
      });
      var n = r(4336),
        a = r(8551),
        l = {
          src: "/_next/static/media/guide-1-1.ceed9d25.png",
          height: 835,
          width: 1439,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX39/j+/v7x8fRunyahAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nCXJwQkAAAyDQM3+QxeprwNZUSLoM0jjsXAC7wAeZ1WNYgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        o = {
          src: "/_next/static/media/guide-2-1.fe3ac470.png",
          height: 750,
          width: 1333,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEWBtdZMk8Tz8vS76er//v5PtdtncX+45emorbKK0uHs7e9Iwp6X38ac4dLA6u1QxLM1p9hFksOGjJYaerhHnWvuAAAACnRSTlP8/////////Pz+KpWlTQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwVxskRACAIBLBFDgVv7b9Xx7wCM7MTUkBEd4cAqro0icPdZ/1hHr0lyQ8Z5AEnq4oTIQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        i = {
          src: "/_next/static/media/guide-3.ff985fad.png",
          height: 861,
          width: 1705,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEX8/v2IlJuqvchHS0meuMuMnKnGzNO/x83EwcDB0uDs4dvn7vWnrbCdlpTVycNtfIapqaySiYB4jJipsbWRqroQq9GiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhQEAIAzAsCJjw/X/W0nIptePAke2i93gxTCzJEjatC7jAxOBAQkUmpnHAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        u = {
          src: "/_next/static/media/guide-4.d602f4fc.png",
          height: 748,
          width: 749,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXd3t/x+PPl7/fk7PF/fn3Y4Nv6+fp6goPX2dgbGRvN0tDM5dfEz8omLCmst7Tl5ORKQUIlISFvfnXR+ODX5erY8+M3PUJnWVdOWGpEVmWCWDeZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nBXIRxLAIAwEsMU4caGT/v+PZrhphGLDhlmBQ1UVGd6AGPYN8vW7toX36XVNTildRwCUIsWTHMzCLDJ/VpwCTJExTXMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        c = r(6964),
        s = r(5401),
        f = r(6777),
        d = r(7797);
      let m =
          "https://chromewebstore.google.com/detail/vidssave-helper/mlmcbnpbmahpoeklhndfijbfllopdphf",
        p =
          "mb-[0.4rem] whitespace-pre-wrap text-center text-[0.28rem] text-[#1C4B70FF] md:mb-[30px] md:text-[20px] md:w-[85%] md:max-w-[1440px]",
        h = (e) => {
          let { titleKey: t, contentKey: r, imageSrc: l } = e,
            o = (0, f.useTranslations)("HelperGuide.Chrome");
          return (0, n.jsxs)("div", {
            className:
              "flex w-full flex-col items-center border-b border-gray-200 py-[0.4rem] last:border-b-0 md:py-[60px]",
            children: [
              (0, n.jsx)("div", {
                className: "mb-[0.4rem] flex items-center md:mb-[40px]",
                children: (0, n.jsx)("h2", {
                  className:
                    "text-center text-[0.4rem] font-bold md:text-[50px]",
                  children: o(t),
                }),
              }),
              (0, n.jsx)("p", {
                className: p,
                children: (0, n.jsx)(a.Z, { text: o(r) }),
              }),
              (0, n.jsx)(d.default, {
                src: l,
                alt: o(t),
                width: 800,
                height: 450,
                className:
                  "mb-[0.4rem] h-auto w-[90%] rounded-sm shadow-xl md:w-[800px] md:rounded-lg",
                unoptimized: !0,
              }),
            ],
          });
        };
      function A() {
        let e = (0, f.useTranslations)("HelperGuide.Chrome");
        return (0, n.jsxs)("div", {
          className:
            "m-auto flex w-full flex-col items-center px-[0.3rem] py-[0.4rem] md:max-w-[1440px] md:px-4 md:py-12",
          children: [
            (0, n.jsxs)("div", {
              className:
                "relative w-full px-[0.4rem] py-[0.4rem] text-center md:py-[60px]",
              children: [
                (0, n.jsx)("h1", {
                  className:
                    "mb-[0.4rem] text-[0.6rem] font-bold md:mb-4 md:text-[50px]",
                  children: e("title"),
                }),
                (0, n.jsx)("p", {
                  className:
                    "mx-auto max-w-[7.5rem] text-[0.36rem] md:max-w-7xl md:text-2xl",
                  children: (0, n.jsx)(a.Z, { text: e("description") }),
                }),
                (0, n.jsx)("div", {
                  className: "mt-[1rem] md:mt-[40px]",
                  children: (0, n.jsxs)(c.rU, {
                    prefetch: !1,
                    href: m,
                    target: "_blank",
                    className:
                      "mx-auto inline-flex items-center justify-center gap-[0.2rem] rounded-full border-[2px] border-[#00c246] bg-white p-[0.2rem] text-[0.3rem] font-bold text-[#00c246] transition-transform hover:scale-105 md:gap-[10px] md:p-[16px] md:text-[20px]",
                    children: [
                      (0, n.jsx)(s.Z, {
                        className: "h-[0.48rem] w-[0.48rem] md:h-6 md:w-6",
                        color: "#00c246",
                      }),
                      e("installButton"),
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsx)(h, {
              stepNumber: 1,
              titleKey: "step1Title",
              contentKey: "step1Content",
              imageSrc: l,
            }),
            (0, n.jsx)(h, {
              stepNumber: 2,
              titleKey: "step2Title",
              contentKey: "step2Content",
              imageSrc: o,
            }),
            (0, n.jsx)(h, {
              stepNumber: 3,
              titleKey: "step3Title",
              contentKey: "step3Content",
              imageSrc: i,
            }),
            (0, n.jsx)(h, {
              stepNumber: 4,
              titleKey: "step4Title",
              contentKey: "step4Content",
              imageSrc: u,
            }),
            (0, n.jsxs)("div", {
              className:
                "flex w-full flex-col items-center py-[0.4rem] md:py-[60px]",
              children: [
                (0, n.jsx)("h2", {
                  className:
                    "mb-[0.4rem] text-[0.4rem] font-bold text-[#00C246FF] md:mb-[40px] md:text-[50px]",
                  children: e("finalTitle"),
                }),
                (0, n.jsx)("p", {
                  className: p,
                  children: (0, n.jsx)(a.Z, { text: e("finalContent") }),
                }),
                (0, n.jsx)(c.rU, {
                  prefetch: !1,
                  href: m,
                  target: "_blank",
                  className:
                    "mt-[0.4rem] inline-block rounded-lg bg-[#00C246FF] px-[0.32rem] py-[0.16rem] text-[0.3rem] font-bold text-white md:mt-[40px] md:px-8 md:py-4 md:text-[24px]",
                  children: e("installButton"),
                }),
                (0, n.jsx)(c.rU, {
                  prefetch: !1,
                  href: "/extension",
                  className:
                    "mt-[0.2rem] block text-[0.24rem] text-[#1C4B70FF] underline hover:text-[#00C246FF] md:mt-[20px] md:text-[16px]",
                  children: e("viewSupportedPlatforms"),
                }),
              ],
            }),
          ],
        });
      }
    },
    8551: function (e, t, r) {
      "use strict";
      var n = r(4336),
        a = r(4271);
      t.Z = (e) => {
        let { text: t } = e,
          r = t.split(/(\*\*[^\*]+\*\*)/g);
        return (0, n.jsx)(n.Fragment, {
          children: r.map((e, t) =>
            e.startsWith("**") && e.endsWith("**")
              ? (0, n.jsx)("strong", { children: e.slice(2, -2) }, t)
              : (0, n.jsx)(a.Fragment, { children: e }, t),
          ),
        });
      };
    },
    6611: function (e, t, r) {
      "use strict";
      r.d(t, {
        Mj: function () {
          return l;
        },
        yk: function () {
          return o;
        },
      });
      var n = r(8283),
        a = r(3090);
      let l = [
          { key: "en", value: "en", label: "English" },
          { key: "es", value: "es", label: "Espa\xf1ol" },
          { key: "ar", value: "ar", label: "العربية" },
          { key: "pt", value: "pt", label: "Portugu\xeas" },
          { key: "id", value: "id", label: "Indonesia" },
          { key: "fr", value: "fr", label: "Fran\xe7ais" },
          { key: "ja", value: "ja", label: "日本語" },
          { key: "ru", value: "ru", label: "Русский" },
          { key: "de", value: "de", label: "Deutsch" },
          { key: "ko", value: "ko", label: "한국어" },
          { key: "vi", value: "vi", label: "Tiếng Việt" },
          { key: "it", value: "it", label: "Italiano" },
          { key: "tr", value: "tr", label: "T\xfcrk\xe7e" },
          { key: "bn", value: "bn", label: "বাংলা" },
          { key: "ta", value: "ta", label: "தமிழ்" },
          { key: "pa", value: "pa", label: "ਪੰਜਾਬੀ" },
          { key: "ur", value: "ur", label: "اُردُو" },
          { key: "te", value: "te", label: "తెలుగు" },
          { key: "hi", value: "hi", label: "हिंदी" },
          { key: "ms", value: "ms", label: "Malaysia" },
          { key: "th", value: "th", label: "ภาษาไทย" },
        ],
        o = l.map((e) => e.value);
      (0, n.cF)(async (e) => {
        let { requestLocale: t } = e,
          n = await t;
        return (
          o.includes(n) || (0, a.notFound)(),
          {
            messages: (await r(9929)("./".concat(n, ".json"))).default,
            locale: n,
          }
        );
      });
    },
    6964: function (e, t, r) {
      "use strict";
      r.d(t, {
        jD: function () {
          return c;
        },
        rU: function () {
          return o;
        },
        tv: function () {
          return s;
        },
      });
      var n = r(6611),
        a = r(4047);
      let l = n.Mj.map((e) => e.value),
        {
          Link: o,
          redirect: i,
          permanentRedirect: u,
          usePathname: c,
          useRouter: s,
        } = (0, a.os)({
          defaultLocale: "en",
          locales: l,
          localePrefix: "as-needed",
        });
    },
  },
  function (e) {
    (e.O(0, [5496, 7279, 2800, 4722, 1744], function () {
      return e((e.s = 9596));
    }),
      (_N_E = e.O()));
  },
]);
