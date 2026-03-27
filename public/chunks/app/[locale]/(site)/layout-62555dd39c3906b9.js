(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1781],
  {
    9929: function (e, t, n) {
      var r = {
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
      function l(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = r[e],
          l = t[0];
        return n.e(t[1]).then(function () {
          return n.t(l, 19);
        });
      }
      ((l.keys = function () {
        return Object.keys(r);
      }),
        (l.id = 9929),
        (e.exports = l));
    },
    1346: function (e, t, n) {
      (Promise.resolve().then(n.bind(n, 2821)),
        Promise.resolve().then(n.bind(n, 4498)),
        Promise.resolve().then(n.bind(n, 8004)));
    },
    4047: function (e, t, n) {
      "use strict";
      var r = n(8689),
        l = n(9313),
        a = n(2414);
      (r.default, l.default, (t.os = a.default));
    },
    1962: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9048),
        l = n(4271),
        a = n(9307),
        i = n(3585),
        o = n(5636),
        s = l && l.__esModule ? l : { default: l };
      let c = l.forwardRef(function (e, t) {
        let { locale: n, localePrefix: l, ...c } = e,
          u = a.default(),
          d = n || u,
          m = i.getLocalePrefix(d, l);
        return s.default.createElement(
          o.default,
          r.extends(
            { ref: t, locale: d, localePrefixMode: l.mode, prefix: m },
            c,
          ),
        );
      });
      ((c.displayName = "ClientLink"), (t.default = c));
    },
    9313: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9048),
        l = n(4271),
        a = n(9307),
        i = n(4746),
        o = n(1648),
        s = n(1962),
        c = n(5133),
        u = n(7558),
        d = n(5209),
        m = l && l.__esModule ? l : { default: l };
      t.default = function (e) {
        let t = i.receiveRoutingConfig(e),
          n = i.receiveLocaleCookie(e.localeCookie);
        function f() {
          let e = a.default();
          if (!t.locales.includes(e)) throw Error(void 0);
          return e;
        }
        let h = l.forwardRef(function (e, l) {
          let { href: a, locale: i, ...c } = e,
            u = f(),
            d = i || u;
          return m.default.createElement(
            s.default,
            r.extends(
              {
                ref: l,
                href: o.compileLocalizedPathname({
                  locale: d,
                  pathname: a,
                  params: "object" == typeof a ? a.params : void 0,
                  pathnames: t.pathnames,
                }),
                locale: i,
                localeCookie: n,
                localePrefix: t.localePrefix,
              },
              c,
            ),
          );
        });
        function A(e) {
          let { href: n, locale: r } = e;
          return o.compileLocalizedPathname({
            ...o.normalizeNameOrNameWithParams(n),
            locale: r,
            pathnames: t.pathnames,
          });
        }
        return (
          (h.displayName = "Link"),
          {
            Link: h,
            redirect: function (e) {
              let n = A({ href: e, locale: f() });
              for (
                var r = arguments.length, l = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                l[a - 1] = arguments[a];
              return c.clientRedirect(
                { pathname: n, localePrefix: t.localePrefix },
                ...l,
              );
            },
            permanentRedirect: function (e) {
              let n = A({ href: e, locale: f() });
              for (
                var r = arguments.length, l = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                l[a - 1] = arguments[a];
              return c.clientPermanentRedirect(
                { pathname: n, localePrefix: t.localePrefix },
                ...l,
              );
            },
            usePathname: function () {
              let e = u.default(t),
                n = f();
              return l.useMemo(
                () => (e ? o.getRoute(n, e, t.pathnames) : e),
                [n, e],
              );
            },
            useRouter: function () {
              let e = d.default(t.localePrefix, n),
                r = f();
              return l.useMemo(
                () => ({
                  ...e,
                  push(t) {
                    for (
                      var n,
                        l = arguments.length,
                        a = Array(l > 1 ? l - 1 : 0),
                        i = 1;
                      i < l;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    let o = A({
                      href: t,
                      locale:
                        (null === (n = a[0]) || void 0 === n
                          ? void 0
                          : n.locale) || r,
                    });
                    return e.push(o, ...a);
                  },
                  replace(t) {
                    for (
                      var n,
                        l = arguments.length,
                        a = Array(l > 1 ? l - 1 : 0),
                        i = 1;
                      i < l;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    let o = A({
                      href: t,
                      locale:
                        (null === (n = a[0]) || void 0 === n
                          ? void 0
                          : n.locale) || r,
                    });
                    return e.replace(o, ...a);
                  },
                  prefetch(t) {
                    for (
                      var n,
                        l = arguments.length,
                        a = Array(l > 1 ? l - 1 : 0),
                        i = 1;
                      i < l;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    let o = A({
                      href: t,
                      locale:
                        (null === (n = a[0]) || void 0 === n
                          ? void 0
                          : n.locale) || r,
                    });
                    return e.prefetch(o, ...a);
                  },
                }),
                [e, r],
              );
            },
            getPathname: A,
          }
        );
      };
    },
    2414: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3090),
        l = n(4271),
        a = n(9307),
        i = n(6230),
        o = n(6323),
        s = n(1648),
        c = n(7558);
      t.default = function (e) {
        function t() {
          return a.default();
        }
        let { Link: n, config: u, getPathname: d, ...m } = i.default(t, e);
        return {
          ...m,
          Link: n,
          usePathname: function () {
            let e = c.default(u),
              n = t();
            return l.useMemo(
              () => (e && u.pathnames ? s.getRoute(n, e, u.pathnames) : e),
              [n, e],
            );
          },
          useRouter: function () {
            let e = r.useRouter(),
              n = t(),
              a = r.usePathname();
            return l.useMemo(() => {
              function t(e) {
                return function (t, r) {
                  let { locale: l, ...i } = r || {},
                    s = [
                      d({
                        href: t,
                        locale: l || n,
                        domain: window.location.host,
                      }),
                    ];
                  (Object.keys(i).length > 0 && s.push(i),
                    e(...s),
                    o.default(u.localeCookie, a, n, l));
                };
              }
              return {
                ...e,
                push: t(e.push),
                replace: t(e.replace),
                prefetch: t(e.prefetch),
              };
            }, [n, a, e]);
          },
          getPathname: d,
        };
      };
    },
    8689: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9048),
        l = n(4271),
        a = n(4746),
        i = n(1962),
        o = n(5133),
        s = n(7558),
        c = n(5209),
        u = l && l.__esModule ? l : { default: l };
      t.default = function (e) {
        let t = a.receiveLocalePrefixConfig(
            null == e ? void 0 : e.localePrefix,
          ),
          n = a.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
          d = l.forwardRef(function (e, l) {
            return u.default.createElement(
              i.default,
              r.extends({ ref: l, localeCookie: n, localePrefix: t }, e),
            );
          });
        return (
          (d.displayName = "Link"),
          {
            Link: d,
            redirect: function (e) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1;
                l < n;
                l++
              )
                r[l - 1] = arguments[l];
              return o.clientRedirect({ pathname: e, localePrefix: t }, ...r);
            },
            permanentRedirect: function (e) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1;
                l < n;
                l++
              )
                r[l - 1] = arguments[l];
              return o.clientPermanentRedirect(
                { pathname: e, localePrefix: t },
                ...r,
              );
            },
            usePathname: function () {
              return s.default({
                localePrefix: t,
                defaultLocale: null == e ? void 0 : e.defaultLocale,
              });
            },
            useRouter: function () {
              return c.default(t, n);
            },
          }
        );
      };
    },
    5133: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9307),
        l = n(8426);
      function a(e) {
        return function (t) {
          let n;
          try {
            n = r.default();
          } catch (e) {
            throw e;
          }
          for (
            var l = arguments.length, a = Array(l > 1 ? l - 1 : 0), i = 1;
            i < l;
            i++
          )
            a[i - 1] = arguments[i];
          return e({ ...t, locale: n }, ...a);
        };
      }
      let i = a(l.baseRedirect),
        o = a(l.basePermanentRedirect);
      ((t.clientPermanentRedirect = o), (t.clientRedirect = i));
    },
    7558: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3090),
        l = n(4271),
        a = n(9307),
        i = n(3585);
      t.default = function (e) {
        let t = r.usePathname(),
          n = a.default();
        return l.useMemo(() => {
          if (!t) return t;
          let r = t,
            l = i.getLocalePrefix(n, e.localePrefix);
          if (i.hasPathnamePrefixed(l, t)) r = i.unprefixPathname(t, l);
          else if (
            "as-needed" === e.localePrefix.mode &&
            e.localePrefix.prefixes
          ) {
            let e = i.getLocaleAsPrefix(n);
            i.hasPathnamePrefixed(e, t) && (r = i.unprefixPathname(t, e));
          }
          return r;
        }, [e.localePrefix, n, t]);
      };
    },
    5209: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3090),
        l = n(4271),
        a = n(9307),
        i = n(3585),
        o = n(6323),
        s = n(1648);
      t.default = function (e, t) {
        let n = r.useRouter(),
          c = a.default(),
          u = r.usePathname();
        return l.useMemo(() => {
          function r(n) {
            return function (r, l) {
              let { locale: a, ...d } = l || {};
              o.default(t, u, c, a);
              let m = [
                (function (t, n) {
                  let r = window.location.pathname,
                    l = s.getBasePath(u);
                  l && (r = r.replace(l, ""));
                  let a = n || c,
                    o = i.getLocalePrefix(a, e);
                  return i.localizeHref(t, a, c, r, o);
                })(r, a),
              ];
              return (Object.keys(d).length > 0 && m.push(d), n(...m));
            };
          }
          return {
            ...n,
            push: r(n.push),
            replace: r(n.replace),
            prefetch: r(n.prefetch),
          };
        }, [c, t, e, u, n]);
      };
    },
    7818: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9048),
        l = n(5085),
        a = n(3090),
        i = n(4271),
        o = n(9307),
        s = n(6323);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = c(l),
        d = c(i),
        m = i.forwardRef(function (e, t) {
          let {
              defaultLocale: n,
              href: l,
              locale: c,
              localeCookie: m,
              onClick: f,
              prefetch: h,
              unprefixed: A,
              ...p
            } = e,
            x = o.default(),
            g = null != c && c !== x,
            b = c || x,
            v = (function () {
              let [e, t] = i.useState();
              return (
                i.useEffect(() => {
                  t(window.location.host);
                }, []),
                e
              );
            })(),
            w =
              v &&
              A &&
              (A.domains[v] === b ||
                (!Object.keys(A.domains).includes(v) && x === n && !c))
                ? A.pathname
                : l,
            y = a.usePathname();
          return (
            g && (h = !1),
            d.default.createElement(
              u.default,
              r.extends(
                {
                  ref: t,
                  href: w,
                  hrefLang: g ? c : void 0,
                  onClick: function (e) {
                    (s.default(m, y, x, c), f && f(e));
                  },
                  prefetch: h,
                },
                p,
              ),
            )
          );
        });
      t.default = m;
    },
    5636: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9048),
        l = n(3090),
        a = n(4271),
        i = n(9307),
        o = n(3585),
        s = n(7818),
        c = a && a.__esModule ? a : { default: a };
      let u = a.forwardRef(function (e, t) {
        let {
            href: n,
            locale: u,
            localeCookie: d,
            localePrefixMode: m,
            prefix: f,
            ...h
          } = e,
          A = l.usePathname(),
          p = i.default(),
          x = u !== p,
          [g, b] = a.useState(() =>
            o.isLocalizableHref(n) && ("never" !== m || x)
              ? o.prefixHref(n, f)
              : n,
          );
        return (
          a.useEffect(() => {
            A && b(o.localizeHref(n, u, p, A, f));
          }, [p, n, u, A, f]),
          c.default.createElement(
            s.default,
            r.extends({ ref: t, href: g, locale: u, localeCookie: d }, h),
          )
        );
      });
      ((u.displayName = "ClientLink"), (t.default = u));
    },
    6230: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(9048),
        l = n(3090),
        a = n(4271),
        i = n(4746),
        o = n(3585),
        s = n(7818),
        c = n(1648),
        u = a && a.__esModule ? a : { default: a };
      t.default = function (e, t) {
        let n = i.receiveRoutingConfig(t || {}),
          d = n.pathnames,
          m = ("as-needed" === n.localePrefix.mode && n.domains) || void 0,
          f = a.forwardRef(function (t, l) {
            let i,
              c,
              f,
              { href: A, locale: p, ...x } = t;
            "object" == typeof A
              ? ((i = A.pathname), (f = A.query), (c = A.params))
              : (i = A);
            let g = o.isLocalizableHref(A),
              b = e(),
              v = o.isPromise(b) ? a.use(b) : b,
              w = g
                ? h(
                    {
                      locale: p || v,
                      href: null == d ? i : { pathname: i, params: c },
                    },
                    null != p || m || void 0,
                  )
                : i;
            return u.default.createElement(
              s.default,
              r.extends(
                {
                  ref: l,
                  defaultLocale: n.defaultLocale,
                  href: "object" == typeof A ? { ...A, pathname: w } : w,
                  locale: p,
                  localeCookie: n.localeCookie,
                  unprefixed:
                    m && g
                      ? {
                          domains: n.domains.reduce(
                            (e, t) => ((e[t.domain] = t.defaultLocale), e),
                            {},
                          ),
                          pathname: h(
                            {
                              locale: v,
                              href:
                                null == d
                                  ? { pathname: i, query: f }
                                  : { pathname: i, query: f, params: c },
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
        function h(e, t) {
          let r;
          let { href: l, locale: a } = e;
          return (
            null == d
              ? "object" == typeof l
                ? ((r = l.pathname),
                  l.query && (r += c.serializeSearchParams(l.query)))
                : (r = l)
              : (r = c.compileLocalizedPathname({
                  locale: a,
                  ...c.normalizeNameOrNameWithParams(l),
                  pathnames: n.pathnames,
                })),
            c.applyPathnamePrefix(r, a, n, e.domain, t)
          );
        }
        function A(e) {
          return function (t) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1;
              l < n;
              l++
            )
              r[l - 1] = arguments[l];
            return e(h(t, t.domain ? void 0 : m), ...r);
          };
        }
        return {
          config: n,
          Link: f,
          redirect: A(l.redirect),
          permanentRedirect: A(l.permanentRedirect),
          getPathname: h,
        };
      };
    },
    8426: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3090),
        l = n(3585);
      function a(e) {
        return function (t) {
          let n = l.getLocalePrefix(t.locale, t.localePrefix),
            r =
              "never" !== t.localePrefix.mode && l.isLocalizableHref(t.pathname)
                ? l.prefixPathname(n, t.pathname)
                : t.pathname;
          for (
            var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), o = 1;
            o < a;
            o++
          )
            i[o - 1] = arguments[o];
          return e(r, ...i);
        };
      }
      let i = a(r.redirect),
        o = a(r.permanentRedirect);
      ((t.basePermanentRedirect = o), (t.baseRedirect = i));
    },
    6323: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(1648);
      t.default = function (e, t, n, l) {
        if (!e || !(l !== n && null != l) || !t) return;
        let a = r.getBasePath(t),
          { name: i, ...o } = e;
        o.path || (o.path = "" !== a ? a : "/");
        let s = "".concat(i, "=").concat(l, ";");
        for (let [e, t] of Object.entries(o))
          ((s += "".concat("maxAge" === e ? "max-age" : e)),
            "boolean" != typeof t && (s += "=" + t),
            (s += ";"));
        document.cookie = s;
      };
    },
    1648: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3585);
      function l(e) {
        let t = new URLSearchParams();
        for (let [n, r] of Object.entries(e))
          Array.isArray(r)
            ? r.forEach((e) => {
                t.append(n, String(e));
              })
            : t.set(n, String(r));
        return "?" + t.toString();
      }
      ((t.applyPathnamePrefix = function (e, t, n, l, a) {
        let i;
        let { mode: o } = n.localePrefix;
        if (void 0 !== a) i = a;
        else if (r.isLocalizableHref(e)) {
          if ("always" === o) i = !0;
          else if ("as-needed" === o) {
            let e = n.defaultLocale;
            if (n.domains) {
              let t = n.domains.find((e) => e.domain === l);
              t && (e = t.defaultLocale);
            }
            i = e !== t;
          }
        }
        return i
          ? r.prefixPathname(r.getLocalePrefix(t, n.localePrefix), e)
          : e;
      }),
        (t.compileLocalizedPathname = function (e) {
          let { pathname: t, locale: n, params: a, pathnames: i, query: o } = e;
          function s(e) {
            let t = i[e];
            return (t || (t = e), t);
          }
          function c(e) {
            let t = "string" == typeof e ? e : e[n];
            return (
              a &&
                Object.entries(a).forEach((e) => {
                  let n,
                    r,
                    [l, a] = e;
                  (Array.isArray(a)
                    ? ((n = "(\\[)?\\[...".concat(l, "\\](\\])?")),
                      (r = a.map((e) => String(e)).join("/")))
                    : ((n = "\\[".concat(l, "\\]")), (r = String(a))),
                    (t = t.replace(RegExp(n, "g"), r)));
                }),
              (t = t.replace(/\[\[\.\.\..+\]\]/g, "")),
              (t = r.normalizeTrailingSlash(t)),
              o && (t += l(o)),
              t
            );
          }
          if ("string" == typeof t) return c(s(t));
          {
            let { pathname: e, ...n } = t;
            return { ...n, pathname: c(s(e)) };
          }
        }),
        (t.getBasePath = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : window.location.pathname;
          return "/" === e ? t : t.replace(e, "");
        }),
        (t.getRoute = function (e, t, n) {
          let l = r.getSortedPathnames(Object.keys(n)),
            a = decodeURI(t);
          for (let t of l) {
            let l = n[t];
            if ("string" == typeof l) {
              if (r.matchesPathname(l, a)) return t;
            } else if (r.matchesPathname(l[e], a)) return t;
          }
          return t;
        }),
        (t.normalizeNameOrNameWithParams = function (e) {
          return "string" == typeof e ? { pathname: e } : e;
        }),
        (t.serializeSearchParams = l));
    },
    4746: function (e, t) {
      "use strict";
      function n(e) {
        return (
          !(null != e && !e) && {
            name: "NEXT_LOCALE",
            maxAge: 31536e3,
            sameSite: "lax",
            ...("object" == typeof e && e),
          }
        );
      }
      function r(e) {
        return "object" == typeof e ? e : { mode: e || "always" };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.receiveLocaleCookie = n),
        (t.receiveLocalePrefixConfig = r),
        (t.receiveRoutingConfig = function (e) {
          var t, l;
          return {
            ...e,
            localePrefix: r(e.localePrefix),
            localeCookie: n(e.localeCookie),
            localeDetection:
              null === (t = e.localeDetection) || void 0 === t || t,
            alternateLinks:
              null === (l = e.alternateLinks) || void 0 === l || l,
          };
        }));
    },
    8283: function (e, t, n) {
      "use strict";
      var r = n(5267);
      (r.getFormatter,
        r.getLocale,
        r.getMessages,
        r.getNow,
        (t.cF = r.getRequestConfig),
        r.getTimeZone,
        r.getTranslations,
        r.setRequestLocale,
        r.unstable_setRequestLocale);
    },
    5267: function (e, t) {
      "use strict";
      function n(e) {
        return () => {
          throw Error(
            "`".concat(e, "` is not supported in Client Components."),
          );
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n("getFormatter"),
        l = n("getNow"),
        a = n("getTimeZone"),
        i = n("getMessages"),
        o = n("getLocale"),
        s = n("getTranslations"),
        c = n("unstable_setRequestLocale"),
        u = n("setRequestLocale");
      ((t.getFormatter = r),
        (t.getLocale = o),
        (t.getMessages = i),
        (t.getNow = l),
        (t.getRequestConfig = function () {
          return n("getRequestConfig");
        }),
        (t.getTimeZone = a),
        (t.getTranslations = s),
        (t.setRequestLocale = u),
        (t.unstable_setRequestLocale = c));
    },
    3585: function (e, t, n) {
      "use strict";
      var r = n(2322);
      function l(e) {
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
      function a(e, t) {
        let n;
        return (
          "string" == typeof e
            ? (n = i(t, e))
            : ((n = { ...e }), e.pathname && (n.pathname = i(t, e.pathname))),
          n
        );
      }
      function i(e, t) {
        let n = e;
        return (/^\/(\?.*)?$/.test(t) && (t = t.slice(1)), (n += t));
      }
      function o(e, t) {
        return t === e || t.startsWith("".concat(e, "/"));
      }
      function s(e) {
        let t = (function () {
          try {
            return "true" === r.env._next_intl_trailing_slash;
          } catch (e) {
            return !1;
          }
        })();
        if ("/" !== e) {
          let n = e.endsWith("/");
          t && !n ? (e += "/") : !t && n && (e = e.slice(0, -1));
        }
        return e;
      }
      function c(e) {
        return "/" + e;
      }
      function u(e) {
        let t = e
          .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)")
          .replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)")
          .replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(t, "$"));
      }
      function d(e) {
        return e.includes("[[...");
      }
      function m(e) {
        return e.includes("[...");
      }
      function f(e) {
        return e.includes("[");
      }
      function h(e, t) {
        let n = e.split("/"),
          r = t.split("/"),
          l = Math.max(n.length, r.length);
        for (let e = 0; e < l; e++) {
          let t = n[e],
            l = r[e];
          if (!t && l) return -1;
          if (t && !l) return 1;
          if (t || l) {
            if (!f(t) && f(l)) return -1;
            if (f(t) && !f(l)) return 1;
            if (!m(t) && m(l)) return -1;
            if (m(t) && !m(l)) return 1;
            if (!d(t) && d(l)) return -1;
            if (d(t) && !d(l)) return 1;
          }
        }
        return 0;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocaleAsPrefix = c),
        (t.getLocalePrefix = function (e, t) {
          var n;
          return (
            ("never" !== t.mode &&
              (null === (n = t.prefixes) || void 0 === n ? void 0 : n[e])) ||
            c(e)
          );
        }),
        (t.getSortedPathnames = function (e) {
          return e.sort(h);
        }),
        (t.hasPathnamePrefixed = o),
        (t.isLocalizableHref = l),
        (t.isPromise = function (e) {
          return "function" == typeof e.then;
        }),
        (t.localizeHref = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if (!l(e)) return e;
          let s = o(i, r);
          return (t !== n || s) && null != i ? a(e, i) : e;
        }),
        (t.matchesPathname = function (e, t) {
          let n = s(e),
            r = s(t);
          return u(n).test(r);
        }),
        (t.normalizeTrailingSlash = s),
        (t.prefixHref = a),
        (t.prefixPathname = i),
        (t.templateToRegex = u),
        (t.unprefixPathname = function (e, t) {
          return e.replace(new RegExp("^".concat(t)), "") || "/";
        }));
    },
    2821: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var r = n(4336),
        l = n(440),
        a = n(6140),
        i = n(6777),
        o = n(7797),
        s = n(4271);
      function c() {
        let e = (0, i.useTranslations)("DownloadPanel");
        return (
          (0, s.useEffect)(() => {
            (0, a.N)("bottom_bar");
          }, []),
          (0, r.jsxs)("div", {
            className:
              "fixed bottom-0 left-0 right-0 z-20 flex h-[1.2rem] w-full items-center justify-between bg-white px-[0.2rem] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden",
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center",
                children: [
                  (0, r.jsx)(o.default, {
                    src: l.Z,
                    alt: "VidMate Logo",
                    width: 80,
                    height: 80,
                    className:
                      "h-[0.8rem] w-[0.8rem] rounded-[0.15rem] object-contain",
                    unoptimized: !0,
                  }),
                  (0, r.jsxs)("div", {
                    className: "ml-[0.12rem] flex flex-col justify-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "text-[0.28rem] font-bold text-[#212121]",
                        children: "VidMate",
                      }),
                      (0, r.jsx)("div", {
                        className: "text-[0.20rem] text-[#9E9E9E]",
                        children: "Fast Download Speed, Higher Resolution.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                onClick: () => (0, a.z)("bottom_bar"),
                className:
                  "flex h-[0.8rem] items-center justify-center rounded-full bg-[#FF3B30] px-[0.4rem] text-[0.28rem] font-bold text-white active:bg-opacity-80",
                children: e("download"),
              }),
            ],
          })
        );
      }
    },
    4498: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return p;
        },
      });
      var r = n(4336),
        l = {
          src: "/_next/static/media/h5_bottom_down.198f64e3.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = n(177),
        i = n(7444),
        o = n(6964),
        s = n(2990),
        c = n(4050),
        u = n(3501),
        d = n(3179),
        m = n(6777),
        f = n(7797),
        h = n(4271);
      let A = [
        {
          label: "Instagram Doanloader",
          key: "instagram-downloader",
          icon: a.Z,
          link: "https://savefromins.com/",
          blank: !0,
        },
        ...s.Zx.map((e) =>
          "ins" === e.key
            ? {
                ...e,
                link: "https://igvideodownloader.net/",
                label: "",
                blank: !0,
              }
            : { ...e, label: "" },
        ),
      ];
      function p(e) {
        var t, n, l, f;
        let { className: p } = e,
          g = (0, m.useTranslations)("Footer"),
          b = (0, m.useTranslations)("navigation"),
          v = (0, m.useMessages)(),
          w =
            null !==
              (l =
                null == v
                  ? void 0
                  : null === (t = v.Footer) || void 0 === t
                    ? void 0
                    : t.instagramGuides) && void 0 !== l
              ? l
              : "Instagram Guides",
          y =
            null !==
              (f =
                null == v
                  ? void 0
                  : null === (n = v.Footer) || void 0 === n
                    ? void 0
                    : n.pinterestGuides) && void 0 !== f
              ? f
              : "Pinterest Guides",
          k = new Date().getFullYear(),
          [j, P] = (0, h.useState)(!1),
          [N, M] = (0, h.useState)(!1),
          [L, C] = (0, h.useState)(!1),
          [_, E] = (0, h.useState)(!1),
          [R, S] = (0, h.useState)(!1),
          [U, D] = (0, h.useState)(!1),
          [B, O] = (0, h.useState)(!1),
          [F, T] = (0, h.useState)(!1),
          [z, H] = (0, h.useState)(!1),
          [I, V] = (0, h.useState)(!1);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: (0, d.Z)(
                "hidden flex-col items-center bg-[var(--bg-dark)] py-8 md:flex",
                p,
              ),
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "mx-auto grid w-full max-w-6xl grid-cols-[325px_minmax(0,1fr)] gap-x-12 gap-y-[30px] px-8",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex flex-col",
                      children: (0, r.jsx)("div", {
                        title: "VideosDownload.org",
                        className:
                          "mb-6 h-[50px] w-[325px] text-2xl font-bold text-yellow-400",
                        style: {
                          background: 'url("'.concat(
                            a.Z.src,
                            '") no-repeat center/contain',
                          ),
                        },
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-x-12 gap-y-[30px]",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: b("downloaders.title"),
                            }),
                            s.zq.map((e) =>
                              (0, r.jsx)(
                                o.rU,
                                {
                                  prefetch: !1,
                                  href: e.link,
                                  target: e.blank ? "_blank" : "_self",
                                  className:
                                    "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                                  children: b("downloaders.".concat(e.key)),
                                },
                                e.key,
                              ),
                            ),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex max-w-[220px] flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: g("youtubeGuides"),
                            }),
                            u.Dq.map((e) =>
                              (0, r.jsx)(
                                o.rU,
                                {
                                  prefetch: !1,
                                  href: e.path,
                                  className:
                                    "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                                  children: (0, u.HQ)(v, e),
                                },
                                e.slug,
                              ),
                            ),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex max-w-[220px] flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: w,
                            }),
                            i.dV.map((e) =>
                              (0, r.jsx)(
                                o.rU,
                                {
                                  prefetch: !1,
                                  href: e.path,
                                  className:
                                    "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                                  children: (0, i.zq)(v, e),
                                },
                                e.slug,
                              ),
                            ),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex max-w-[220px] flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: y,
                            }),
                            c.mD.map((e) =>
                              (0, r.jsx)(
                                o.rU,
                                {
                                  prefetch: !1,
                                  href: e.path,
                                  className:
                                    "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                                  children: (0, c.Op)(v, e),
                                },
                                e.slug,
                              ),
                            ),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: b("resources.platforms"),
                            }),
                            A.map((e) =>
                              (0, r.jsx)(
                                o.rU,
                                {
                                  prefetch: !1,
                                  href: e.link,
                                  target: e.blank ? "_blank" : "_self",
                                  className:
                                    "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                                  children:
                                    e.label || b("downloaders.".concat(e.key)),
                                },
                                e.key,
                              ),
                            ),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: g("policy"),
                            }),
                            (0, r.jsx)(o.rU, {
                              href: "/privacy",
                              prefetch: !1,
                              className:
                                "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                              children: g("privacy"),
                            }),
                            (0, r.jsx)(o.rU, {
                              href: "/terms",
                              prefetch: !1,
                              className:
                                "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                              children: g("terms"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: g("contact"),
                            }),
                            (0, r.jsx)(o.rU, {
                              href: "/about",
                              prefetch: !1,
                              className:
                                "mb-2 text-[14px] text-gray-400 hover:text-white",
                              children: g("about"),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-4 text-[18px] font-semibold text-white",
                              children: b("helper.title"),
                            }),
                            (0, r.jsx)(o.rU, {
                              href: "/extension",
                              prefetch: !1,
                              className:
                                "mb-2 text-[14px] text-gray-400 hover:text-white hover:underline",
                              children: b("helper.introduce"),
                            }),
                            (0, r.jsx)(o.rU, {
                              href: "/extension/chrome",
                              prefetch: !1,
                              className:
                                "mb-2 w-[170px] text-[14px] text-gray-400 hover:text-white hover:underline",
                              children: b("helper.chrome"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "mt-8 w-full max-w-6xl border-t border-gray-700 px-8 pt-[26px]",
                  children: (0, r.jsxs)("div", {
                    className: "text-center text-[14px] text-white",
                    children: [g("copyright"), " ", k],
                  }),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: (0, d.Z)(
                "flex w-full flex-col items-center bg-[var(--bg-dark)] pb-[0.35rem] pt-[0.5rem] md:hidden",
                p,
              ),
              children: [
                (0, r.jsx)("div", {
                  title: "VideosDownload.org",
                  className: "h-[0.6rem] w-[3.65rem]",
                  style: {
                    background: 'url("'.concat(
                      a.Z.src,
                      '") no-repeat center/contain',
                    ),
                  },
                }),
                (0, r.jsx)(x, {
                  title: "".concat(g("downloade"), " ").concat(g("video")),
                  open: j,
                  triggerOpen: () => P(!j),
                  itemList: s.zq.map((e) => ({
                    txt: b("downloaders.".concat(e.key)),
                    link: e.link,
                  })),
                }),
                (0, r.jsx)(x, {
                  title: g("youtubeGuides"),
                  open: _,
                  triggerOpen: () => E(!_),
                  itemList: u.Dq.map((e) => ({
                    txt: (0, u.HQ)(v, e),
                    link: e.path,
                  })),
                }),
                (0, r.jsx)(x, {
                  title: w,
                  open: R,
                  triggerOpen: () => S(!R),
                  itemList: i.dV.map((e) => ({
                    txt: (0, i.zq)(v, e),
                    link: e.path,
                  })),
                }),
                (0, r.jsx)(x, {
                  title: y,
                  open: U,
                  triggerOpen: () => D(!U),
                  itemList: c.mD.map((e) => ({
                    txt: (0, c.Op)(v, e),
                    link: e.path,
                  })),
                }),
                (0, r.jsx)(x, {
                  title: b("resources.platforms"),
                  open: F,
                  triggerOpen: () => T(!F),
                  itemList: A.map((e) => ({
                    txt: e.label || b("downloaders.".concat(e.key)),
                    link: e.link,
                  })),
                }),
                (0, r.jsx)(x, {
                  title: g("policy"),
                  open: N,
                  triggerOpen: () => M(!N),
                  itemList: [
                    { txt: g("privacy"), link: "/privacy" },
                    { txt: g("terms"), link: "/terms" },
                  ],
                }),
                (0, r.jsx)(x, {
                  title: g("contact"),
                  open: L,
                  triggerOpen: () => C(!L),
                  itemList: [{ txt: g("about"), link: "/about" }],
                }),
                (0, r.jsx)(x, {
                  title: b("helper.title"),
                  open: B,
                  triggerOpen: () => O(!B),
                  itemList: [
                    { txt: b("helper.introduce"), link: "/extension" },
                    { txt: b("helper.chrome"), link: "/extension/chrome" },
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "mt-[0.5rem] h-[1px] w-[6.7rem] bg-[#5B5B5BFF]",
                }),
                (0, r.jsxs)("div", {
                  className:
                    "mt-[0.5rem] text-center text-[0.24rem] text-white",
                  children: [g("copyright"), " ", k],
                }),
              ],
            }),
          ],
        });
      }
      function x(e) {
        let { title: t, open: n, triggerOpen: a, itemList: i } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className:
                "mt-[0.5rem] flex items-center text-[0.3rem] font-bold leading-[0.35rem] text-white",
              onClick: () => a(),
              children: [
                t,
                (0, r.jsx)(f.default, {
                  src: l,
                  alt: "arrow",
                  unoptimized: !0,
                  className:
                    "w-[0.2rem] h-[0.2rem] ml-[0.1rem] mt-[0.05rem] transform transition-transform duration-300 ".concat(
                      n ? "" : "rotate-180",
                    ),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "overflow-hidden transition-all duration-300 w-full text-center ".concat(
                  n ? "max-h-[5rem]" : "max-h-0",
                ),
              children: i.map((e, t) =>
                (0, r.jsx)(
                  o.rU,
                  {
                    href: e.link,
                    prefetch: !1,
                    className:
                      "mt-[0.4rem] block text-[0.28rem] leading-[0.33rem] text-gray-400 transition-colors duration-200 hover:text-white",
                    children: e.txt,
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      }
    },
    8004: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return y;
        },
      });
      var r = n(4336),
        l = {
          src: "/_next/static/media/h5_top_close.43c170f8.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: "/_next/static/media/h5_top_more.3bc854e8.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        i = n(177),
        o = n(7414),
        s = n(6964),
        c = n(2990),
        u = n(5798),
        d = n(6777),
        m = n(7797),
        f = n(3090),
        h = n(4271),
        A = n(7444),
        p = n(4050),
        x = n(3501);
      function g() {
        let e = (0, d.useTranslations)("Crumb"),
          t = (0, d.useMessages)(),
          n = (0, s.jD)(),
          l = (0, d.useLocale)(),
          a = (0, h.useMemo)(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.Crumb) && void 0 !== e
              ? e
              : {};
          }, [t]),
          i = (0, h.useMemo)(() => {
            let e = (n || "/").split("/").filter(Boolean);
            return (e[0] === l && e.shift(), "/" + e.join("/"));
          }, [n, l]),
          c = !!(0, A.Do)(t, i),
          u = !!(0, p.iE)(t, i),
          m = ["/ins/how-to-download-instagram-photos-in-hd"].includes(i) || c,
          f =
            [].includes(i) ||
            u ||
            (!m &&
              (["/terms", "/privacy", "/about", "/extension/chrome"].includes(
                i,
              ) ||
                i.startsWith("/yt/"))),
          g = f ? "text-[#153F5E]" : "text-white",
          b = f ? "text-[#4B728C]" : "text-white/60",
          v = f ? void 0 : { textShadow: "0 1px 1px rgba(0,0,0,0.55)" },
          w = f ? void 0 : { textShadow: "0 1px 1px rgba(0,0,0,0.4)" },
          y = (0, h.useMemo)(() => {
            let r = n;
            if (n.includes("/shorts/"))
              return (
                (r = "/watch"),
                [
                  { label: e("/home"), href: (0, o.D_)(l, "/home") },
                  { label: e("/watch"), isLast: !0, href: "" },
                ]
              );
            {
              var i;
              let n = (r || "/").split("/").filter(Boolean);
              n[0] === l && n.shift();
              let s = n.map((e, t) => "/" + n.slice(0, t + 1).join("/")),
                c = (e) => {
                  let n = (0, x.ZQ)(t, e);
                  if (n) return n;
                  let r = (0, A.Do)(t, e);
                  if (r) return r;
                  let l = (0, p.iE)(t, e);
                  return l
                    ? l
                    : a[e] ||
                        decodeURIComponent(
                          e.split("/").filter(Boolean).pop() || "",
                        )
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (e) => e.toUpperCase());
                };
              return [
                {
                  label:
                    null !== (i = a["/home"]) && void 0 !== i ? i : e("/home"),
                  href: (0, o.D_)(l, "/home"),
                },
                ...s.map((e) => ({ label: c(e), href: e })),
              ];
            }
          }, [n, l, e, a, t]);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("nav", {
            "aria-label": "breadcrumb",
            className:
              "mx-auto my-[0.2rem] w-[7.2rem] md:my-[20px] md:w-[1310px] translate-y-[8px]",
            children: (0, r.jsx)("ol", {
              className:
                "flex items-center text-[0.2rem] md:text-[16px] ".concat(g),
              children: y.map((e, t) => {
                let n = t === y.length - 1;
                return (0, r.jsxs)(
                  "li",
                  {
                    className: "flex items-center",
                    children: [
                      n
                        ? (0, r.jsx)("span", {
                            className: "font-medium",
                            style: v,
                            children: e.label,
                          })
                        : (0, r.jsx)(s.rU, {
                            href: e.href,
                            prefetch: !1,
                            className: "".concat(g, " hover:underline"),
                            "aria-label": e.label,
                            style: v,
                            children: e.label,
                          }),
                      !n &&
                        (0, r.jsx)("span", {
                          className: "mx-[0.1rem] md:mx-[8px] ".concat(b),
                          style: w,
                          children: ">",
                        }),
                    ],
                  },
                  e.href,
                );
              }),
            }),
          }),
        });
      }
      var b = n(6611);
      function v(e) {
        let { open: t, setOpen: n, utmSource: l = "" } = e,
          a = (0, d.useLocale)(),
          i = (0, s.jD)();
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className:
              "ml-auto mr-[0.35rem] flex h-[0.52rem] w-fit cursor-pointer items-center justify-center rounded-[0.08rem] bg-[#FFFFFF17] px-[0.2rem] text-[0.3rem] text-white md:relative md:ml-[48px] md:mr-[90px] md:h-[32px] md:bg-[var(--bg-dark)] md:px-0 md:text-[18px] rtl:ml-[0.2rem] rtl:mr-auto",
            onClick: () => n(!t),
            children: [
              b.Mj.find((e) => e.value === a).label,
              " ",
              (0, r.jsx)("div", {
                className:
                  "w-[0.14rem] h-[0.14rem] md:w-[11px] md:h-[11px] ml-[0.08rem] md:ml-[19px] transform transition-transform duration-300 ".concat(
                    t ? "rotate-180" : "",
                  ),
                style: {
                  backgroundImage: 'url("'.concat(
                    "/_next/static/media/h5_hone_top_down.0e85917d.svg",
                    '")',
                  ),
                  backgroundSize: "100% 100%",
                },
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute w-[3.4rem] md:w-[150px] bg-white overflow-hidden ltr:right-0 -md:ltr:right-[18px] rtl:left-0 -md:rtl:left-[18px] top-[0.82rem] md:top-[38px] transition-all duration-300 z-10 shadow-[0px_0.08rem_0.13rem_0px_rgba(211,211,211,0.5)] md:shadow-[0px_8px_13px_0px_rgba(211,211,211,0.5)] md:rtl:-right-[100px]  ".concat(
                    t
                      ? "max-h-[8.58rem] md:max-h-[351px] opacity-100"
                      : "h-0 opacity-0",
                  ),
                children: (0, r.jsx)("div", {
                  className:
                    "max-h-[8.58rem] overflow-y-scroll md:max-h-[351px]",
                  children: b.Mj.map((e) => {
                    let t = e.value,
                      n = e.label,
                      c = (0, o.cK)(t, i);
                    return (
                      l && (c = "".concat(c, "?utm_source=").concat(l)),
                      (0, r.jsx)(
                        s.rU,
                        {
                          locale: t,
                          href: c,
                          prefetch: !1,
                          onClick: () => {
                            try {
                              var e;
                              null === (e = localStorage) ||
                                void 0 === e ||
                                e.setItem("selected_language", t);
                            } catch (e) {}
                          },
                          className:
                            "w-full h-[0.9rem] md:h-[40px] flex items-center justify-center text-[0.3rem] md:text-[16px] text-[#000000FF] font-bold hover:bg-[#F6F6F6FF]  ".concat(
                              e.value === a &&
                                "bg-[#F6F6F6FF] text-[var(--brand-primary)]",
                            ),
                          children: n,
                        },
                        e.key,
                      )
                    );
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function w(e) {
        let { show: t, setShow: n, utmSource: l = "" } = e,
          a = (0, d.useTranslations)("Header"),
          i = (0, d.useLocale)(),
          [u, f] = (0, h.useState)(new Set());
        (0, h.useEffect)(() => {
          t
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
        }, [t]);
        let A = (e) => {
          let t = new Set(u);
          (t.has(e) ? t.delete(e) : t.add(e), f(t));
        };
        return (0, r.jsx)("div", {
          className:
            "md:hidden w-full bg-[#12141D] fixed z-[11] top-[0.8rem] pt-[0.4rem] bottom-0 overflow-y-auto transform flex flex-col items-center transition-transform duration-300 ".concat(
              t ? "translate-x-0" : "translate-x-[100vw]",
            ),
          children: (0, r.jsx)("div", {
            className: "h-full overflow-y-auto",
            children: c.f4.map((e) => {
              if (e.subMenuItems)
                return (0, r.jsxs)(
                  "div",
                  {
                    className: "w-[6.7rem]",
                    children: [
                      (0, r.jsxs)("div", {
                        onClick: () => A(e.label),
                        className:
                          "mb-[0.3rem] flex h-[1.1rem] w-[6.7rem] cursor-pointer items-center justify-center gap-[0.1rem] rounded-[0.08rem] border-[0.03rem] border-[#00C246FF] pr-[0.4rem] text-[0.24rem] font-bold text-white",
                        children: [
                          (0, r.jsx)("div", {
                            className: "text-center",
                            children: e.label.startsWith(".")
                              ? a(e.label.slice(1))
                              : e.label,
                          }),
                          (0, r.jsx)("div", {
                            className:
                              " transition-transform duration-200 ".concat(
                                u.has(e.label) ? "rotate-180" : "",
                              ),
                            children: "▼",
                          }),
                        ],
                      }),
                      e.subMenuItems &&
                        (0, r.jsx)("div", {
                          className: u.has(e.label) ? "block" : "hidden",
                          children:
                            "Tools" === e.label
                              ? (0, r.jsx)(r.Fragment, {})
                              : (0, r.jsx)("div", {
                                  className:
                                    "mb-[0.2rem] w-[6.7rem] rounded-[0.08rem] border-[0.03rem] border-[#00C246FF] bg-[#1a1d2b]",
                                  children: e.subMenuItems.map((t, c) => {
                                    let u = (0, o.D_)(i, t.link),
                                      d = l
                                        ? "".concat(u, "?utm_source=").concat(l)
                                        : u;
                                    return (0, r.jsx)(
                                      s.rU,
                                      {
                                        href: d,
                                        prefetch: !1,
                                        onClick: () => n(!1),
                                        className:
                                          "flex h-[0.9rem] w-full cursor-pointer items-center justify-center text-[0.22rem] font-normal text-white hover:bg-[#2a2d3b] "
                                            .concat(
                                              0 === c
                                                ? "rounded-t-[0.06rem]"
                                                : "",
                                              " ",
                                            )
                                            .concat(
                                              c === e.subMenuItems.length - 1
                                                ? "rounded-b-[0.06rem]"
                                                : "",
                                            ),
                                        children: t.label.startsWith(".")
                                          ? a(t.label.slice(1))
                                          : t.label,
                                      },
                                      t.label,
                                    );
                                  }),
                                }),
                        }),
                    ],
                  },
                  e.label,
                );
              {
                if (!e.link) return null;
                let t = (0, o.D_)(i, e.link),
                  c = l ? "".concat(t, "?utm_source=").concat(l) : t;
                return (0, r.jsxs)(
                  s.rU,
                  {
                    href: c,
                    prefetch: !1,
                    onClick: () => n(!1),
                    className:
                      "mb-[0.3rem] flex h-[1.1rem] w-[2.5rem] w-[6.7rem] cursor-pointer items-center justify-center whitespace-nowrap rounded-[0.08rem] border-[0.03rem] border-[#00C246FF] text-[0.24rem] font-bold text-white",
                    children: [
                      (0, r.jsx)(m.default, {
                        src: e.icon,
                        width: 22,
                        height: 22,
                        alt: e.label,
                        unoptimized: !0,
                        className: "ltr:mr-[0.2rem] rtl:ml-[0.2rem]",
                      }),
                      e.label.startsWith(".") ? a(e.label.slice(1)) : e.label,
                      " ",
                    ],
                  },
                  e.label,
                );
              }
            }),
          }),
        });
      }
      function y(e) {
        let { langDomainList: t } = e,
          [n, A] = (0, h.useState)(!1),
          [p, x] = (0, h.useState)(!1),
          b = (0, f.usePathname)(),
          y = (0, d.useLocale)(),
          [k, j] = (0, h.useState)(""),
          P = (0, d.useTranslations)("Header");
        (0, h.useEffect)(() => {
          let e = (0, u.eY)("utm_source");
          e && j(e);
        }, []);
        let N = (e) => b.split("/").filter(Boolean).includes(e),
          M = (0, o.D_)(y, "/home");
        return (0, r.jsx)("header", {
          className: "top-0 z-40 w-full bg-[var(--bg-dark)]",
          children: (0, r.jsxs)("div", {
            className:
              "relative m-auto flex h-[0.8rem] w-full max-w-[1440px] items-center md:h-[75px] md:items-center md:pt-0",
            children: [
              (0, r.jsx)(s.rU, {
                title: "Vidssave.com",
                href: k ? "".concat(M, "?utm_source=").concat(k) : M,
                prefetch: !1,
                className:
                  "ml-[0.3rem] h-[0.5rem] w-[3.56rem] text-[0px] md:ml-[90px] md:h-[50px] md:w-[325px] rtl:ml-[0] rtl:mr-[0.4rem] md:rtl:mr-[20px]",
                style: {
                  background: 'url("'.concat(
                    i.Z.src,
                    '") no-repeat left/contain',
                  ),
                },
                children: "VidsSave.com",
              }),
              (0, r.jsx)("div", {
                className: "ml-auto hidden gap-8 md:flex md:rtl:mr-[80px]",
                children: c.f4.map((e) => {
                  let t = (0, o.D_)(y, e.link),
                    n = k ? "".concat(t, "?utm_source=").concat(k) : t,
                    l = b === t || b.startsWith("".concat(t, "/")) || N(e.key);
                  return (0, r.jsx)(
                    s.rU,
                    {
                      href: n,
                      prefetch: !1,
                      className:
                        "cursor-pointer text-white hover:underline md:text-[14px]",
                      style: { color: l ? "#00E553FF" : "#fff" },
                      children: e.label.startsWith(".")
                        ? P(e.label.slice(1))
                        : e.label,
                    },
                    e.key,
                  );
                }),
              }),
              (() => {
                let e = b.split("/").filter(Boolean),
                  t = e[e.length - 1],
                  n = "home" === t,
                  l = ["terms", "privacy", "about"].includes(t);
                return n
                  ? null
                  : (0, r.jsx)("div", {
                      id: "breadcrumb-wrap",
                      className:
                        "pointer-events-auto absolute bottom-[-0.5rem] z-[10] md:bottom-[-60px] ".concat(
                          l
                            ? "left-[0.2rem] md:left-[32px]"
                            : "left-[0.1rem] md:left-[100px]",
                        ),
                      children: (0, r.jsx)(g, {}),
                    });
              })(),
              (0, r.jsx)(v, { open: p, utmSource: k, setOpen: (e) => x(e) }),
              (0, r.jsxs)("div", {
                className:
                  "relative mr-[0.3rem] mt-[0.05rem] h-[0.4rem] w-[0.4rem] cursor-pointer md:hidden rtl:ml-[0.3rem]",
                onClick: () => {
                  (x(!1), A(!n));
                },
                children: [
                  (0, r.jsx)(m.default, {
                    src: a,
                    alt: "menu",
                    unoptimized: !0,
                    className:
                      "absolute w-full h-full transition-opacity duration-300 ".concat(
                        n ? "opacity-0" : "opacity-100",
                      ),
                  }),
                  (0, r.jsx)(m.default, {
                    src: l,
                    alt: "close",
                    unoptimized: !0,
                    className:
                      "absolute w-full h-full transition-opacity duration-300 ".concat(
                        n ? "opacity-100" : "opacity-0",
                      ),
                  }),
                ],
              }),
              (0, r.jsx)(w, {
                utmSource: k,
                show: n,
                setShow: (e) => {
                  (A(e), x(!1));
                },
              }),
            ],
          }),
        });
      }
    },
    6611: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mj: function () {
          return a;
        },
        yk: function () {
          return i;
        },
      });
      var r = n(8283),
        l = n(3090);
      let a = [
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
        i = a.map((e) => e.value);
      (0, r.cF)(async (e) => {
        let { requestLocale: t } = e,
          r = await t;
        return (
          i.includes(r) || (0, l.notFound)(),
          {
            messages: (await n(9929)("./".concat(r, ".json"))).default,
            locale: r,
          }
        );
      });
    },
    7414: function (e, t, n) {
      "use strict";
      n.d(t, {
        D_: function () {
          return o;
        },
        LA: function () {
          return s;
        },
        cK: function () {
          return i;
        },
      });
      let r = [
        { replacementLocale: "es", oldPath: "/home", newPath: "/inicio" },
        {
          replacementLocale: "es",
          oldPath: "/yt",
          newPath: "/descargar-videos-youtube",
        },
        {
          replacementLocale: "es",
          oldPath: "/youtube-to-mp3",
          newPath: "/convertidor-youtube-mp3",
        },
      ];
      function l(e) {
        return e
          ? e.startsWith("/")
            ? e.length > 1 && e.endsWith("/")
              ? e.slice(0, -1)
              : e
            : "/".concat(e)
          : "/";
      }
      function a(e) {
        let t = e.indexOf("#"),
          n = e.indexOf("?"),
          r = -1 === t ? n : -1 === n ? t : Math.min(t, n);
        return -1 === r
          ? { path: e, suffix: "" }
          : { path: e.slice(0, r), suffix: e.slice(r) };
      }
      function i(e, t) {
        if (!t.startsWith("/")) return t;
        let { path: n, suffix: i } = a(t),
          o = l(n);
        if (e) {
          let t = r.find((t) => t.replacementLocale === e && t.oldPath === o);
          if (t) return "".concat(t.newPath).concat(i);
        }
        let s = r.find((e) => e.newPath === o);
        return s && e !== s.replacementLocale
          ? "".concat(s.oldPath).concat(i)
          : "".concat(o).concat(i);
      }
      function o(e, t) {
        return i(e, t);
      }
      function s(e, t) {
        let n = (function (e, t) {
          let { path: n } = a(e || "/"),
            r = l(n);
          if (!t || "en" === t) return r;
          let i = "/".concat(t);
          return r === i
            ? "/"
            : r.startsWith("".concat(i, "/"))
              ? r.slice(i.length) || "/"
              : r;
        })(e, t);
        return (function (e, t) {
          let { path: n } = a(t),
            i = l(n);
          return (
            !!e &&
            r.some((t) => t.replacementLocale === e && l(t.oldPath) === i)
          );
        })(t, n);
      }
      (r.map((e) => l(e.newPath)), r.map((e) => l(e.oldPath)));
    },
    7444: function (e, t, n) {
      "use strict";
      n.d(t, {
        Do: function () {
          return a;
        },
        dV: function () {
          return r;
        },
        zq: function () {
          return l;
        },
      });
      let r = [
        {
          id: "howToDownloadInstagramPhotosInHd",
          slug: "how-to-download-instagram-photos-in-hd",
          path: "/ins/how-to-download-instagram-photos-in-hd",
          imageSrc: "/images/guides/instagram-photo-download-hd-hero.png",
          videoSrc: "/videos/guides/instagram-photo-download-hd-v2.mp4",
        },
      ];
      function l(e, t) {
        var n, r, l, a, i, o;
        return null !==
          (r =
            null ===
              ((l = t.id),
              (n =
                null !==
                  (o =
                    null !==
                      (i =
                        null == e
                          ? void 0
                          : null === (a = e.InstagramGuides) || void 0 === a
                            ? void 0
                            : a[l]) && void 0 !== i
                      ? i
                      : void 0) && void 0 !== o
                  ? o
                  : null)) || void 0 === n
              ? void 0
              : n.shortTitle) && void 0 !== r
          ? r
          : t.slug.replace(/-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
      }
      function a(e, t) {
        let n = r.find((e) => e.path === t);
        return n ? l(e, n) : null;
      }
    },
    6964: function (e, t, n) {
      "use strict";
      n.d(t, {
        jD: function () {
          return c;
        },
        rU: function () {
          return i;
        },
        tv: function () {
          return u;
        },
      });
      var r = n(6611),
        l = n(4047);
      let a = r.Mj.map((e) => e.value),
        {
          Link: i,
          redirect: o,
          permanentRedirect: s,
          usePathname: c,
          useRouter: u,
        } = (0, l.os)({
          defaultLocale: "en",
          locales: a,
          localePrefix: "as-needed",
        });
    },
    2990: function (e, t, n) {
      "use strict";
      n.d(t, {
        zq: function () {
          return c;
        },
        f4: function () {
          return s;
        },
        Zx: function () {
          return i;
        },
        CZ: function () {
          return l;
        },
        Q1: function () {
          return o;
        },
      });
      var r = {
        src: "/_next/static/media/youtube.c91193ca.png",
        height: 80,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/AQH+MC//AABMaXH/AQD/AAD/AQD9HBv/AAD/+vr9Rkb9sLD8k5P8Y2MJ1c5+AAAACHRSTlPx/iwAsy+v/GFLPAQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicPYtJDsAgEIAYlxFt+//vNjapNxKAWhq0Uumo0knHUhOMeYV8MB8hjXtsdeJ/fwEtrwFEWohJMwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
      let l = [
          { label: "YT", icon: r, key: "yt", link: "/yt" },
          {
            label: "Facebook",
            icon: {
              src: "/_next/static/media/fb.ef91be19.png",
              height: 80,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEUOj/ASpPoRqf0YpvkTnfcPjvAXn/RMaXELa94MgusPpPcEb+gHeeyHtu/V5fgCoPouq/hpu/ULd+UAU9oAYd4siukCffAQof/d7vyJxPaf0vn///8AZu+v3fvy+P1t0P/E4fk2W14/AAAAFnRSTlP+6/wusfQwAC/4tuux/Pz4/vn5tbX5T1IlkgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwFwYUBwCAQBLBDH6/jlf2nbAISji9OEDTja3+Zhiy4n61IKKC2DAVrvzFatgj5qn3PAcbPFKc3IHOmeBj6AXKlA3yRjW9QAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            key: "facebook",
            link: "/facebook",
          },
          {
            label: "TikTok",
            icon: {
              src: "/_next/static/media/tk.fc361874.png",
              height: 80,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEUBAwO9s7ksChHKwMcAAAAAAQEAAQFMaXECAgIBAQHBk6BYIS4AAAAAAABlgYIZDhFEHSfassA4UVLY7O6ve4d7b3dgXV8WNc8PAAAADXRSTlP3/Pz8r+qzAC8s/v6yw2TUGQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJw1y0kSwCAIAMFRQTEpcMny/6fmlL43rVeovWHqxFBDHK40BDyedE9gr1myg+wSK7tg+h6nq/H3D0gDAgwMsh2uAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            key: "tiktok",
            link: "/tiktok",
          },
          {
            label: "Instagram",
            icon: {
              src: "/_next/static/media/ins.f4cbf18a.png",
              height: 80,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEVMaXH9UQ/8P8WfCeR3Avr8Amb8WmPrAJnqX9/9cs6AB/KhM/33IMf/AIS7Bd7QANbVDPT7u2f7H6L7yGL8kEX8twD9ewT/AGz9rSH9Oj//sQX9wQD/VwD8yAD6aLD6Y6L6h3P9Vs39dKL/sXf5XLfvfP/Xdv79cPD7dpT7XY77o2L/4mysewibAAAAHnRSTlMAL/n5L/XzL/78tevrsfm1sf71/vn5tbHr9S61sflP17x4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASElEQVR4nAXBhQGAMAADsA5muDtMcf7/jwSgcZgXAqDJKeWVCpRHYG0UZaiV0mrXDJMxt3s0w+rb13A3gIxfU3kugHnZup7gB6ZGBQKSn4sIAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            key: "ins",
            link: "/ins",
          },
          {
            label: "Pinterest",
            icon: {
              src: "/_next/static/media/pin.b3e3d2d1.png",
              height: 240,
              width: 240,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXSBB3dACHiACLaAx9MaXHrACXjASPkACPnASLpACTnASTdAiHbAh/qASXqACXrASW1ThtGAAAAD3RSTlMpero3AOqOsJnZzFNr7u495YyOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nAXBhwHAMAzDMHpmtvr/2wAkLjkJ3zJbP/iKOdmOrE/1FeobMhNDjUUN0DSvgoyzNcgHOMsBlZgNF9oAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            key: "pin",
            link: "/pin",
          },
          {
            label: "X",
            icon: {
              src: "/_next/static/media/x.d555e54b.png",
              height: 80,
              width: 80,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUDAwMAAABtbW0AAAANDQ1MaXEAAABISEhTU1MCAgIcHBxXV1eagzvmAAAACXRSTlP4s/0u6wAw/fxQSiahAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nDXLwQHAIAwDsXMIAZv99+2r+ou9BFqb6ROnB7lujgVOlQ2Yqhjkm1cW03FOD3//AC0JAUCIbjBKAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            key: "x",
            link: "/x",
            hide: !0,
          },
        ],
        a = l.filter((e) => !e.hide),
        i = ["ins", "facebook", "tiktok", "pin"]
          .map((e) => a.find((t) => t.key === e))
          .filter(Boolean),
        o = ["facebook", "ins", "yt", "tiktok", "pin"]
          .map((e) => a.find((t) => t.key === e))
          .filter(Boolean),
        s = [
          ...i,
          {
            label: "YT to MP4",
            icon: r,
            key: "yt-mp4",
            link: "/youtube-to-mp4",
          },
          {
            label: "YT to MP3",
            icon: r,
            key: "yt-mp3",
            link: "/youtube-to-mp3",
          },
          {
            label: "YT Movies",
            icon: r,
            key: "yt-movies",
            link: "/youtube-movies",
          },
          {
            label: ".cateTitleExtendsion",
            icon: {
              src: "/_next/static/media/chrome.083f1c6c.png",
              height: 63,
              width: 63,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEVMaXHdNCroyF2RtdklnkT5vgn+yCHiOSXySC2Jp90lnUn8twvjOTPtSjDzuRfmvCT/ySCzsi4kl0IilkXdNivgMydqf0RdpkItoU1ktX8gqVDkb2mmbDwklEN8sOBorOJIo04Tiz6WnNn+zBcJbfHoMSH/uAK3wE++AAAAI3RSTlMA+O/6/vOwKv348K6x6Swq6/MqLLHsrviv8vLy97H4+fn2+jqNCeMAAAAJcEhZcwAACxMAAAsTAQCanBgAAABISURBVHicJcbHAYAgEATABZE7MGDOGbD/En04rwGoEyIngPrIzAVhiKsx8s2wbE8IiU9hL/NnUvNxSq/RWqVGX5VAs9+1dvgAj/EEOuUI1F0AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            key: "extension",
            link: "/extension/chrome",
          },
        ],
        c = [
          {
            label: "YT to MP4",
            key: "yt-mp4",
            icon: r,
            link: "/youtube-to-mp4",
          },
          {
            label: "YT to MP3",
            key: "yt-mp3",
            icon: r,
            link: "https://fastytm.com/",
            blank: !0,
          },
          {
            label: "YT Music",
            key: "yt-music",
            icon: r,
            link: "/youtube-music-download",
          },
          {
            label: "YT Movies",
            key: "yt-movies",
            icon: r,
            link: "/youtube-movies",
          },
        ];
    },
    4050: function (e, t, n) {
      "use strict";
      n.d(t, {
        Op: function () {
          return l;
        },
        iE: function () {
          return a;
        },
        mD: function () {
          return r;
        },
      });
      let r = [
        {
          id: "whyIsPinterestNotLettingMeDownload",
          slug: "why-is-pinterest-not-letting-me-download",
          path: "/pin/why-is-pinterest-not-letting-me-download",
          imageSrc:
            "/images/guides/pinterest-download-control-room-hero-v2.png",
          videoSrc: "/videos/guides/pinterest-download-control-room-v2.mp4",
        },
      ];
      function l(e, t) {
        var n, r, l, a, i, o;
        return null !==
          (r =
            null ===
              ((l = t.id),
              (n =
                null !==
                  (o =
                    null !==
                      (i =
                        null == e
                          ? void 0
                          : null === (a = e.PinterestGuides) || void 0 === a
                            ? void 0
                            : a[l]) && void 0 !== i
                      ? i
                      : void 0) && void 0 !== o
                  ? o
                  : null)) || void 0 === n
              ? void 0
              : n.shortTitle) && void 0 !== r
          ? r
          : t.slug.replace(/-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
      }
      function a(e, t) {
        let n = r.find((e) => e.path === t);
        return n ? l(e, n) : null;
      }
    },
    6140: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return i;
        },
        z: function () {
          return a;
        },
      });
      var r = n(3365),
        l = n(8559);
      function a(e, t) {
        ((0, l.Sv)("".concat(r.gZ, "&subpub=").concat(e)),
          window.sendLog("vdm_download_click", {
            from: e,
            from_url: window.location.pathname,
            key_words: window.location.pathname,
            ...t,
          }));
      }
      let i = (e, t) => {
        window.sendLog("vdm_download_show", {
          from: e,
          from_url: window.location.pathname,
          ...t,
        });
      };
    },
    3501: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dq: function () {
          return r;
        },
        HQ: function () {
          return l;
        },
        ZQ: function () {
          return a;
        },
      });
      let r = [
        {
          id: "whyCannotIDownloadYoutubeVideos",
          slug: "why-cannot-i-download-youtube-videos",
          path: "/yt/why-cannot-i-download-youtube-videos",
          imageSrc: "/images/guides/youtube-download-troubleshooting-hero.png",
          videoSrc: "/videos/guides/youtube-download-troubleshooting.mp4",
        },
      ];
      function l(e, t) {
        var n, r, l, a, i, o;
        return null !==
          (r =
            null ===
              ((l = t.id),
              (n =
                null !==
                  (o =
                    null !==
                      (i =
                        null == e
                          ? void 0
                          : null === (a = e.YoutubeGuides) || void 0 === a
                            ? void 0
                            : a[l]) && void 0 !== i
                      ? i
                      : void 0) && void 0 !== o
                  ? o
                  : null)) || void 0 === n
              ? void 0
              : n.shortTitle) && void 0 !== r
          ? r
          : t.slug.replace(/-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
      }
      function a(e, t) {
        let n = r.find((e) => e.path === t);
        return n ? l(e, n) : null;
      }
    },
    177: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo.80053b25.png",
        height: 100,
        width: 510,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX////87CH///////////L8+dT67CVjMTszAAAAB3RSTlNBWFwyUF9s5Z9OtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGNkYWBgZmZgYGRkZWJhYmACAAFYACMXePY1AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    440: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/vdm-logo.90f6bb39.png",
        height: 78,
        width: 78,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEX0Cgz8VVL7Y1L3cFP3VUj2TzruTk/9QULnDAPzra3+OQ7vRUn6iXzwUETwRkr/var8cGD7c1D+DQvwHSL7kIf81NT8Jib/8/PyJRj0NBn8xcTySU3qJCLzNCH+5+fqQkP+l5rzXl/8x8r8rKf/cT0dj4TGAAAAEnRSTlP+4Nb+/v7d/v5C/v79/f5C3OMjMNR0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBhQHAIBAEsMP6QB2nbvvP2ARm/oQgNmKytlY4DhneUp5OgVKWd94VyF0xBi1BSMey6R7MwXsNDtOs7XA25geIDwOzONIebQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
  function (e) {
    (e.O(0, [5496, 7279, 9144, 8828, 2800, 4722, 1744], function () {
      return e((e.s = 1346));
    }),
      (_N_E = e.O()));
  },
]);
