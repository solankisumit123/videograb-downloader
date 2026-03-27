(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1409],
  {
    1864: function (e, t, n) {
      (Promise.resolve().then(n.bind(n, 919)),
        Promise.resolve().then(n.bind(n, 1321)),
        Promise.resolve().then(n.t.bind(n, 9888, 23)),
        Promise.resolve().then(n.t.bind(n, 8187, 23)),
        Promise.resolve().then(n.bind(n, 6146)),
        Promise.resolve().then(n.bind(n, 4165)),
        Promise.resolve().then(n.bind(n, 1946)));
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
    919: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var r = n(4987),
        o = n(5085),
        i = n(3090),
        a = n(4271),
        s = n(8827),
        c = (0, a.forwardRef)(function (e, t) {
          let {
              defaultLocale: n,
              href: c,
              locale: u,
              localeCookie: l,
              onClick: d,
              prefetch: m,
              unprefixed: h,
              ...f
            } = e,
            A = (0, s.Z)(),
            p = null != u && u !== A,
            w = u || A,
            v = (function () {
              let [e, t] = (0, a.useState)();
              return (
                (0, a.useEffect)(() => {
                  t(window.location.host);
                }, []),
                e
              );
            })(),
            g =
              v &&
              h &&
              (h.domains[v] === w ||
                (!Object.keys(h.domains).includes(v) && A === n && !u))
                ? h.pathname
                : c,
            b = (0, i.usePathname)();
          return (
            p &&
              (m &&
                console.error(
                  "The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`",
                ),
              (m = !1)),
            a.createElement(
              o.default,
              (0, r.g)(
                {
                  ref: t,
                  href: g,
                  hrefLang: p ? u : void 0,
                  onClick: function (e) {
                    ((function (e, t, n, r) {
                      if (!e || !(r !== n && null != r) || !t) return;
                      let o = (function (e) {
                          let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : window.location.pathname;
                          return "/" === e ? t : t.replace(e, "");
                        })(t),
                        { name: i, ...a } = e;
                      a.path || (a.path = "" !== o ? o : "/");
                      let s = "".concat(i, "=").concat(r, ";");
                      for (let [e, t] of Object.entries(a))
                        ((s += "".concat("maxAge" === e ? "max-age" : e)),
                          "boolean" != typeof t && (s += "=" + t),
                          (s += ";"));
                      document.cookie = s;
                    })(l, b, A, u),
                      d && d(e));
                  },
                  prefetch: m,
                },
                f,
              ),
            )
          );
        });
    },
    1321: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return d;
        },
      });
      var r = n(4987),
        o = n(3090),
        i = n(4271),
        a = n(8827);
      function s(e) {
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
      var l = n(919);
      let d = (0, i.forwardRef)(function (e, t) {
        let {
            href: n,
            locale: u,
            localeCookie: d,
            localePrefixMode: m,
            prefix: h,
            ...f
          } = e,
          A = (0, o.usePathname)(),
          p = (0, a.Z)(),
          w = u !== p,
          [v, g] = (0, i.useState)(() =>
            s(n) && ("never" !== m || w) ? c(n, h) : n,
          );
        return (
          (0, i.useEffect)(() => {
            A &&
              g(
                (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : t,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0;
                  if (!s(e)) return e;
                  let i = r === o || r.startsWith("".concat(o, "/"));
                  return (t !== n || i) && null != o ? c(e, o) : e;
                })(n, u, p, A, h),
              );
          }, [p, n, u, A, h]),
          i.createElement(
            l.default,
            (0, r.g)({ ref: t, href: v, locale: u, localeCookie: d }, f),
          )
        );
      });
      d.displayName = "ClientLink";
    },
    8827: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(3090),
        o = n(4011);
      let i = "locale",
        a = !1;
      function s() {
        let e;
        let t = (0, r.useParams)();
        try {
          e = (0, o.useLocale)();
        } catch (n) {
          if ("string" != typeof (null == t ? void 0 : t[i])) throw n;
          (a ||
            (console.warn(
              "Deprecation warning: `useLocale` has returned a default from `useParams().locale` since no `NextIntlClientProvider` ancestor was found for the calling component. This behavior will be removed in the next major version. Please ensure all Client Components that use `next-intl` are wrapped in a `NextIntlClientProvider`.",
            ),
            (a = !0)),
            (e = t[i]));
        }
        return e;
      }
    },
    6146: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var r = n(4336),
        o = {
          src: "/_next/static/media/faq.3f4fb039.png",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAwkYAwkUUxU9H0XRD0na77s5+4KGq5W1zAAAAAXRSTlPaJuDjrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJxjYGAEAwYozcgIYjAxQxhMbKwsqAy4FKo2BgANMgBd8qTSZAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        i = {
          src: "/_next/static/media/faq_moin.a67e1a20.png",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAwkYAw0YAvjpk2o4AwUJJ03sayFlAXHhzAAAAAXRSTlPaJuDjrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGAEAwYozcjIwMjIwsTEBGKwsDEzs6Iw4FIwxTDtAA8AAGnjN86zAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        a = n(3179),
        s = n(7797);
      function c(e) {
        let {
            qaList: t,
            className: n = "",
            itemClassName: c = "",
            questionClassName: u = "",
            answerClassName: l = "",
            title: d = "FAQ",
            desc: m,
            openIcon: h,
            closeIcon: f,
            iconClassName: A = "",
          } = e,
          p = null != h ? h : o,
          w = null != f ? f : i;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("h2", {
              className: (0, a.W)(
                "my-[0.4rem] text-center text-[0.4rem] font-extrabold text-[#2D3436FF] md:mb-[40px] md:mt-[60px] md:text-[50px]",
                n,
              ),
              children: d,
            }),
            m &&
              (0, r.jsx)("p", {
                className:
                  "mx-auto mb-[0.4rem] mt-[-0.2rem] text-center text-[0.24rem] text-[#2D3436FF] md:mb-[40px] md:mt-[-20px] md:w-[983px] md:text-[14px]",
                children: m,
              }),
            t.map((e, t) =>
              (0, r.jsx)(
                "div",
                {
                  className: (0, a.W)(
                    "mx-auto mb-[0.4rem] w-[6.7rem] border-b-[1px] border-b-[#D0D0D0FF] md:mb-[30px] md:w-[983px] md:pb-[30px]",
                    c,
                  ),
                  children: (0, r.jsxs)("details", {
                    className: "group",
                    children: [
                      (0, r.jsxs)("summary", {
                        className:
                          "mb-[0.3rem] flex w-full cursor-pointer list-none items-center justify-between",
                        children: [
                          (0, r.jsx)("div", {
                            className: (0, a.W)(
                              "w-[6.34rem] text-[0.3rem] font-bold text-[#2D3436FF] md:w-fit md:text-[24px]",
                              u,
                            ),
                            children: e.q,
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, r.jsx)(s.default, {
                                src: p,
                                alt: "open",
                                className: (0, a.W)(
                                  "h-[0.4rem] w-[0.4rem] group-open:hidden md:h-[30px] md:w-[30px]",
                                  A,
                                ),
                                width: 30,
                                height: 30,
                                unoptimized: !0,
                              }),
                              (0, r.jsx)(s.default, {
                                src: w,
                                alt: "close",
                                className: (0, a.W)(
                                  "hidden h-[0.4rem] w-[0.4rem] group-open:block md:h-[30px] md:w-[30px]",
                                  A,
                                ),
                                width: 30,
                                height: 30,
                                unoptimized: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: (0, a.W)(
                          "mb-[0.3rem] w-[6.34rem] text-[0.24rem] font-bold leading-[0.4rem] text-[#1C4B70FF] md:w-fit md:pt-[30px] md:text-[18px] md:leading-[30px]",
                          l,
                        ),
                        children: e.a,
                      }),
                    ],
                  }),
                },
                "faq_".concat(t),
              ),
            ),
          ],
        });
      }
    },
    3365: function (e, t, n) {
      "use strict";
      n.d(t, {
        WC: function () {
          return d;
        },
        bl: function () {
          return i;
        },
        cM: function () {
          return c;
        },
        dj: function () {
          return s;
        },
        gZ: function () {
          return u;
        },
        kD: function () {
          return o;
        },
        ns: function () {
          return a;
        },
        yK: function () {
          return r;
        },
        z9: function () {
          return l;
        },
      });
      let r = {
          MAIN: "vidssave.com",
          WWW: "www.vidssave.com",
          MAIN_URL: "https://vidssave.com",
          ALT: "vidsyoutube.com",
          ALT_URL: "https://vidsyoutube.com",
          RELATED_URL: "https://vidhunter.net",
        },
        o = "vidsdownload",
        i = { VIDEODOWNLOAD: "api-ak.vidssave.com" },
        a = {
          MAIN: "https://www.vidssave.com",
          RES: "https://res.vidssave.com",
          ALT: "https://vidsyoutube.com",
          RELATED: "https://vidhunter.net",
          PUSHLOG_SDK: "https://l.vidssave.com/pushlog_sdk",
          DEMO_VIDEOS: {
            MOBILE: "https://res.vidssave.com/video/how_to_use_mobile.mp4?v=2",
            DESKTOP: "https://res.vidssave.com/video/how_to_use.mp4?v=2",
          },
          APIS: {
            DINGTALK_WEBHOOK:
              "https://oapi.dingtalk.com/robot/send?access_token=94be69aa952ca4bf903fe297f1dc11e2f7a4efedded45021ee6a087f265503cf",
            PICTEST_UPLOAD: "http://api.pictest.site:8001/ores/log/",
          },
          THIRD_PARTY: {
            ADDTOANY_SCRIPT: "https://static.addtoany.com/menu/page.js",
            FAKEIMG_SERVICE: "https://fakeimg.pl",
          },
          ADS: {
            DOWNLOAD_BUTTON:
              "https://pb.mobshark.net/api/affiliate/postback/click?click_id={click_id}&gaid=&offer_id=7523354&pub=rfriTrbY-iK9a1RaMv_rIQ==&aid=&country={country}&sub={sub}&ip=&ua={USER_AGENT}&lang={LANG}&osv={DEVICE_OSV}&model={DEVICE_MODEL}&brand={DEVICE_BRAND}&redirect=true&b_channel=ou_nt_774&slid=16",
          },
        },
        s = { MAIN: "com.vidssave.com.web", SHORT: "vidssave.com" };
      a.APIS.PICTEST_UPLOAD;
      let c = 524288e3,
        u =
          "https://api.v-videoapp.com/api/dev/redirect/redirect?pkg_name=com.video.fun.app&pub=vidssave_com",
        l = {
          DEFAULT: "https://www.youtube.com/watch?v=sd21Igx4HtA",
          yt: "https://www.youtube.com/watch?v=sd21Igx4HtA",
          ytshort: "https://www.youtube.com/watch?v=sd21Igx4HtA",
          ytmp3: "https://www.youtube.com/watch?v=sd21Igx4HtA",
          ytmusic: "https://www.youtube.com/watch?v=sd21Igx4HtA",
          tiktok:
            "https://www.tiktok.com/@taylorswift/video/7559313483398008095",
          fb: "https://www.facebook.com/share/r/1EXm22cDLG/",
          ins: "https://www.instagram.com/p/DTKI0ZWEqT6/",
          X: "https://x.com/SpaceX/status/1879244588021584316",
          pin: "https://www.pinterest.com/pin/8022105581547311/",
        },
        d = {
          DEFAULT: "YT",
          yt: "YT",
          ytshort: "YT Shorts",
          ytmp3: "YT MP3",
          ytmusic: "YT Music",
          tiktok: "TikTok",
          fb: "Facebook",
          ins: "Instagram",
          X: "X",
          pin: "Pinterest",
        };
    },
    5798: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZC: function () {
          return u;
        },
        dU: function () {
          return i;
        },
        eY: function () {
          return a;
        },
        l7: function () {
          return r;
        },
        o0: function () {
          return s;
        },
        qs: function () {
          return o;
        },
        td: function () {
          return l;
        },
        vJ: function () {
          return c;
        },
        z8: function () {
          return d;
        },
      });
      let r = () => {
        if (!window) throw Error("can't use this function in node env!");
        return navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
        )
          ? "mobile"
          : "pc";
      };
      function o() {
        let e = navigator.userAgent.toLocaleLowerCase() || "",
          t = !!e.match(/Android/i),
          n =
            /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(e) ||
            /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(e),
          r = !!e.match(/iPhone|iPad|iPod/i),
          o = e.indexOf("iphone") > -1,
          i = /iPhone|iPad|iPod\/([\w.]+).*(safari).*/i.test(e),
          a = !!e.match(/micromessenger/i),
          s = !!e.match(/weibo/i),
          c =
            (e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/)) &&
            t &&
            !n;
        return {
          isAndroid: t,
          isQQ: n,
          isIOS: r,
          isSafari: i,
          isWx: a,
          isWb: s,
          isAndroidChrome: c,
          isQZ: -1 !== e.indexOf("Qzone/"),
          isIpone: o,
          isEcho: -1 !== e.indexOf("echo"),
        };
      }
      function i() {
        let e = "",
          t = document.querySelector('meta[name="environment"]');
        return (t && (e = t.content), e);
      }
      function a(e) {
        if (!e) return "";
        try {
          return new URL(window.location.href).searchParams.get(e) || "";
        } catch (e) {
          return "";
        }
      }
      function s(e) {
        let t = e.getFullYear(),
          n = e.getMonth() + 1,
          r = e.getDate(),
          o = e.getHours(),
          i = e.getMinutes(),
          a = e.getSeconds();
        return (
          t +
          "-" +
          (n = n < 10 ? "0" + n : n) +
          "-" +
          (r = r < 10 ? "0" + r : r) +
          " " +
          (o = o < 10 ? "0" + o : o) +
          ":" +
          (i = i < 10 ? "0" + i : i) +
          ":" +
          (a = a < 10 ? "0" + a : a)
        );
      }
      function c(e) {
        return e
          ? e
              .replace(/[\r\n]/g, "")
              .replace(/['"]/g, "")
              .replace(/[\\]/g, "")
          : e;
      }
      function u(e) {
        let t = function (e) {
            return e < 10 ? "0" + e : String(e);
          },
          n = Math.floor((e % 3600) / 60),
          r = e % 60;
        return e >= 3600
          ? ""
              .concat(t(Math.floor(e / 3600)), ":")
              .concat(t(n), ":")
              .concat(t(r))
          : "".concat(t(n), ":").concat(t(r));
      }
      function l(e) {
        if (0 === e) return "0 Bytes";
        let t = Math.floor(Math.log(e) / Math.log(1024)),
          n = parseFloat((e / Math.pow(1024, t)).toFixed(2));
        return "".concat(n, " ").concat(["Bytes", "KB", "MB", "GB", "TB"][t]);
      }
      function d(e) {
        switch (e) {
          case "url":
            return "url";
          case "empty_search":
            return "null";
          case "search":
            return "words";
          default:
            return "unknown";
        }
      }
    },
    3179: function (e, t, n) {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      (n.d(t, {
        W: function () {
          return r;
        },
      }),
        (t.Z = r));
    },
  },
]);
