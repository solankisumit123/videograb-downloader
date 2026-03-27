(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1203],
  {
    7144: function (t, e, n) {
      (Promise.resolve().then(n.bind(n, 7001)),
        Promise.resolve().then(n.bind(n, 6189)),
        Promise.resolve().then(n.bind(n, 4127)),
        Promise.resolve().then(n.bind(n, 1997)),
        Promise.resolve().then(n.t.bind(n, 8187, 23)),
        Promise.resolve().then(n.bind(n, 1175)),
        Promise.resolve().then(n.bind(n, 3329)),
        Promise.resolve().then(n.bind(n, 7276)),
        Promise.resolve().then(n.bind(n, 4228)));
    },
    7276: function (t, e, n) {
      "use strict";
      n.d(e, {
        CollectionLog: function () {
          return d;
        },
      });
      var o = n(4336),
        i = n(13),
        r = n(3365),
        s = n(1858),
        c = n(5798),
        a = n(9982),
        u = n(4271);
      function d() {
        return (
          (0, u.useEffect)(() => {
            (0, s.zY)();
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(a.default, {
                id: "bi_report",
                src: "https://res-cf.jscssfunny.com/fe/pub/js/collectionLog.js?autoStart=1&anm=vidmate&subanm=vidmate&site="
                  .concat(r.dj.MAIN, "&baseUrl=")
                  .concat(r.ns.PUSHLOG_SDK),
                strategy: "afterInteractive",
                onLoad: () => {
                  let t = (0, c.l7)(),
                    { isIOS: e, isAndroid: n } = (0, c.qs)(),
                    o = {
                      deviceType:
                        "pc" === t
                          ? "pc"
                          : e
                            ? "mobile_ios"
                            : n
                              ? "mobile_android"
                              : "unknown",
                    };
                  window.website_version = "2026-01-28-0930";
                  let a = {
                    pkg: r.dj.MAIN,
                    ver: "1.0.0",
                    cha: "unknown",
                    sub: "unknown",
                    pf: "web",
                  };
                  window._sendLog = function (t) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    (0, c.eY)("utm_source") &&
                      (e.utm_source = (0, c.eY)("utm_source"));
                    let r = { ...a, cou: (0, s.e5)() || "unknown" };
                    window._clog &&
                      ("prod" === (0, c.dU)()
                        ? window._clog.sendLog(
                            t,
                            {
                              logtime: new Date().getTime(),
                              bucket: (0, i.el)(),
                              ...n,
                              ...r,
                            },
                            { ...e, ...o },
                          )
                        : console.info("report data: ", {
                            action: t,
                            logtime: new Date().getTime(),
                            bucket: (0, i.el)(),
                            ...n,
                            ...r,
                            ...e,
                            ...o,
                          }));
                  };
                },
              }),
              (0, o.jsx)(a.default, {
                id: "inline-bi-script",
                dangerouslySetInnerHTML: {
                  __html:
                    "window.sendLog = function (action, logData, logCommon) {\n            if (window._sendLog) {\n              window._sendLog(action, logData, logCommon);\n            } else {\n              setTimeout(()=> {\n                try {\n                  window._sendLog(action, logData, logCommon);\n                } catch (e) {}\n              }, 500);\n            }\n          }\n          ",
                },
              }),
            ],
          })
        );
      }
    },
    3365: function (t, e, n) {
      "use strict";
      n.d(e, {
        WC: function () {
          return m;
        },
        bl: function () {
          return r;
        },
        cM: function () {
          return a;
        },
        dj: function () {
          return c;
        },
        gZ: function () {
          return u;
        },
        kD: function () {
          return i;
        },
        ns: function () {
          return s;
        },
        yK: function () {
          return o;
        },
        z9: function () {
          return d;
        },
      });
      let o = {
          MAIN: "vidssave.com",
          WWW: "www.vidssave.com",
          MAIN_URL: "https://vidssave.com",
          ALT: "vidsyoutube.com",
          ALT_URL: "https://vidsyoutube.com",
          RELATED_URL: "https://vidhunter.net",
        },
        i = "vidsdownload",
        r = { VIDEODOWNLOAD: "api-ak.vidssave.com" },
        s = {
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
        c = { MAIN: "com.vidssave.com.web", SHORT: "vidssave.com" };
      s.APIS.PICTEST_UPLOAD;
      let a = 524288e3,
        u =
          "https://api.v-videoapp.com/api/dev/redirect/redirect?pkg_name=com.video.fun.app&pub=vidssave_com",
        d = {
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
        m = {
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
    5798: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZC: function () {
          return u;
        },
        dU: function () {
          return r;
        },
        eY: function () {
          return s;
        },
        l7: function () {
          return o;
        },
        o0: function () {
          return c;
        },
        qs: function () {
          return i;
        },
        td: function () {
          return d;
        },
        vJ: function () {
          return a;
        },
        z8: function () {
          return m;
        },
      });
      let o = () => {
        if (!window) throw Error("can't use this function in node env!");
        return navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
        )
          ? "mobile"
          : "pc";
      };
      function i() {
        let t = navigator.userAgent.toLocaleLowerCase() || "",
          e = !!t.match(/Android/i),
          n =
            /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(t) ||
            /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(t),
          o = !!t.match(/iPhone|iPad|iPod/i),
          i = t.indexOf("iphone") > -1,
          r = /iPhone|iPad|iPod\/([\w.]+).*(safari).*/i.test(t),
          s = !!t.match(/micromessenger/i),
          c = !!t.match(/weibo/i),
          a =
            (t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/)) &&
            e &&
            !n;
        return {
          isAndroid: e,
          isQQ: n,
          isIOS: o,
          isSafari: r,
          isWx: s,
          isWb: c,
          isAndroidChrome: a,
          isQZ: -1 !== t.indexOf("Qzone/"),
          isIpone: i,
          isEcho: -1 !== t.indexOf("echo"),
        };
      }
      function r() {
        let t = "",
          e = document.querySelector('meta[name="environment"]');
        return (e && (t = e.content), t);
      }
      function s(t) {
        if (!t) return "";
        try {
          return new URL(window.location.href).searchParams.get(t) || "";
        } catch (t) {
          return "";
        }
      }
      function c(t) {
        let e = t.getFullYear(),
          n = t.getMonth() + 1,
          o = t.getDate(),
          i = t.getHours(),
          r = t.getMinutes(),
          s = t.getSeconds();
        return (
          e +
          "-" +
          (n = n < 10 ? "0" + n : n) +
          "-" +
          (o = o < 10 ? "0" + o : o) +
          " " +
          (i = i < 10 ? "0" + i : i) +
          ":" +
          (r = r < 10 ? "0" + r : r) +
          ":" +
          (s = s < 10 ? "0" + s : s)
        );
      }
      function a(t) {
        return t
          ? t
              .replace(/[\r\n]/g, "")
              .replace(/['"]/g, "")
              .replace(/[\\]/g, "")
          : t;
      }
      function u(t) {
        let e = function (t) {
            return t < 10 ? "0" + t : String(t);
          },
          n = Math.floor((t % 3600) / 60),
          o = t % 60;
        return t >= 3600
          ? ""
              .concat(e(Math.floor(t / 3600)), ":")
              .concat(e(n), ":")
              .concat(e(o))
          : "".concat(e(n), ":").concat(e(o));
      }
      function d(t) {
        if (0 === t) return "0 Bytes";
        let e = Math.floor(Math.log(t) / Math.log(1024)),
          n = parseFloat((t / Math.pow(1024, e)).toFixed(2));
        return "".concat(n, " ").concat(["Bytes", "KB", "MB", "GB", "TB"][e]);
      }
      function m(t) {
        switch (t) {
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
  },
  function (t) {
    (t.O(0, [2346, 2969, 3477, 2800, 4722, 1744], function () {
      return t((t.s = 7144));
    }),
      (_N_E = t.O()));
  },
]);
