(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4309],
  {
    6614: function (e, t, n) {
      (Promise.resolve().then(n.bind(n, 919)),
        Promise.resolve().then(n.bind(n, 1321)),
        Promise.resolve().then(n.t.bind(n, 9888, 23)),
        Promise.resolve().then(n.t.bind(n, 8187, 23)),
        Promise.resolve().then(n.bind(n, 8250)),
        Promise.resolve().then(n.bind(n, 6146)),
        Promise.resolve().then(n.bind(n, 4165)),
        Promise.resolve().then(n.bind(n, 1946)));
    },
    4987: function (e, t, n) {
      "use strict";
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(null, arguments);
      }
      n.d(t, {
        g: function () {
          return o;
        },
      });
    },
    919: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var o = n(4987),
        r = n(5085),
        l = n(3090),
        i = n(4271),
        a = n(8827),
        c = (0, i.forwardRef)(function (e, t) {
          let {
              defaultLocale: n,
              href: c,
              locale: u,
              localeCookie: s,
              onClick: f,
              prefetch: h,
              unprefixed: d,
              ...p
            } = e,
            m = (0, a.Z)(),
            v = null != u && u !== m,
            b = u || m,
            g = (function () {
              let [e, t] = (0, i.useState)();
              return (
                (0, i.useEffect)(() => {
                  t(window.location.host);
                }, []),
                e
              );
            })(),
            w =
              g &&
              d &&
              (d.domains[g] === b ||
                (!Object.keys(d.domains).includes(g) && m === n && !u))
                ? d.pathname
                : c,
            P = (0, l.usePathname)();
          return (
            v &&
              (h &&
                console.error(
                  "The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`",
                ),
              (h = !1)),
            i.createElement(
              r.default,
              (0, o.g)(
                {
                  ref: t,
                  href: w,
                  hrefLang: v ? u : void 0,
                  onClick: function (e) {
                    ((function (e, t, n, o) {
                      if (!e || !(o !== n && null != o) || !t) return;
                      let r = (function (e) {
                          let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : window.location.pathname;
                          return "/" === e ? t : t.replace(e, "");
                        })(t),
                        { name: l, ...i } = e;
                      i.path || (i.path = "" !== r ? r : "/");
                      let a = "".concat(l, "=").concat(o, ";");
                      for (let [e, t] of Object.entries(i))
                        ((a += "".concat("maxAge" === e ? "max-age" : e)),
                          "boolean" != typeof t && (a += "=" + t),
                          (a += ";"));
                      document.cookie = a;
                    })(s, P, m, u),
                      f && f(e));
                  },
                  prefetch: h,
                },
                p,
              ),
            )
          );
        });
    },
    1321: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return f;
        },
      });
      var o = n(4987),
        r = n(3090),
        l = n(4271),
        i = n(8827);
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
      function c(e, t) {
        let n;
        return (
          "string" == typeof e
            ? (n = u(t, e))
            : ((n = { ...e }), e.pathname && (n.pathname = u(t, e.pathname))),
          n
        );
      }
      function u(e, t) {
        let n = e;
        return (/^\/(\?.*)?$/.test(t) && (t = t.slice(1)), (n += t));
      }
      n(2322);
      var s = n(919);
      let f = (0, l.forwardRef)(function (e, t) {
        let {
            href: n,
            locale: u,
            localeCookie: f,
            localePrefixMode: h,
            prefix: d,
            ...p
          } = e,
          m = (0, r.usePathname)(),
          v = (0, i.Z)(),
          b = u !== v,
          [g, w] = (0, l.useState)(() =>
            a(n) && ("never" !== h || b) ? c(n, d) : n,
          );
        return (
          (0, l.useEffect)(() => {
            m &&
              w(
                (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : t,
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                  if (!a(e)) return e;
                  let l = o === r || o.startsWith("".concat(r, "/"));
                  return (t !== n || l) && null != r ? c(e, r) : e;
                })(n, u, v, m, d),
              );
          }, [v, n, u, m, d]),
          l.createElement(
            s.default,
            (0, o.g)({ ref: t, href: g, locale: u, localeCookie: f }, p),
          )
        );
      });
      f.displayName = "ClientLink";
    },
    8827: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = n(3090),
        r = n(4011);
      let l = "locale",
        i = !1;
      function a() {
        let e;
        let t = (0, o.useParams)();
        try {
          e = (0, r.useLocale)();
        } catch (n) {
          if ("string" != typeof (null == t ? void 0 : t[l])) throw n;
          (i ||
            (console.warn(
              "Deprecation warning: `useLocale` has returned a default from `useParams().locale` since no `NextIntlClientProvider` ancestor was found for the calling component. This behavior will be removed in the next major version. Please ensure all Client Components that use `next-intl` are wrapped in a `NextIntlClientProvider`.",
            ),
            (i = !0)),
            (e = t[l]));
        }
        return e;
      }
    },
  },
  function (e) {
    (e.O(
      0,
      [
        5496, 7279, 2346, 9144, 9857, 7455, 8828, 3477, 6092, 9374, 8250, 2800,
        4722, 1744,
      ],
      function () {
        return e((e.s = 6614));
      },
    ),
      (_N_E = e.O()));
  },
]);
