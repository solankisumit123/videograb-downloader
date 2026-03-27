"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8828],
  {
    3365: function (t, e, n) {
      n.d(e, {
        WC: function () {
          return h;
        },
        bl: function () {
          return c;
        },
        cM: function () {
          return s;
        },
        dj: function () {
          return a;
        },
        gZ: function () {
          return u;
        },
        kD: function () {
          return r;
        },
        ns: function () {
          return i;
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
        r = "vidsdownload",
        c = { VIDEODOWNLOAD: "api-ak.vidssave.com" },
        i = {
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
        a = { MAIN: "com.vidssave.com.web", SHORT: "vidssave.com" };
      i.APIS.PICTEST_UPLOAD;
      let s = 524288e3,
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
        h = {
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
    8559: function (t, e, n) {
      n.d(e, {
        Ar: function () {
          return d;
        },
        Lu: function () {
          return u;
        },
        Sv: function () {
          return h;
        },
        ZC: function () {
          return a;
        },
        cn: function () {
          return i;
        },
        eu: function () {
          return p;
        },
      });
      var o = n(3179);
      n(4775);
      var r = n(2250),
        c = n(3365);
      function i() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return (0, r.m6)((0, o.W)(e));
      }
      function a(t) {
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
      let s = "https://api.vidssave.com/api/contentsite_api",
        u = (t) => {
          let { data: e, path: n } = t,
            o = "",
            r = s,
            i = document.querySelector('meta[name="environment"]');
          (i && (o = i.content),
            ["", "dev"].includes(o) &&
              (r = "https://test-api.vidssave.com/vapi/contentsite_api"));
          let a = "".concat(r, "/").concat(n, "?auth=20250901majwlqo"),
            u = { domain: c.bl.VIDEODOWNLOAD, ...e };
          if (u) {
            let t = Object.keys(u);
            if (t.length > 0) {
              let e = "";
              for (let n of t) e += "&".concat(n, "=").concat(u[n]);
              a = "".concat(a).concat(e);
            }
          }
          return a;
        },
        d = (t) => {
          let { data: e, path: n } = t,
            o = "",
            r = s,
            i = document.querySelector('meta[name="environment"]');
          (i && (o = i.content),
            ["", "dev"].includes(o) &&
              (r = "https://test-api.vidssave.com/vapi/contentsite_api"));
          let a = "".concat(r, "/").concat(n),
            u = { auth: "20250901majwlqo", domain: c.bl.VIDEODOWNLOAD, ...e },
            d = "";
          try {
            d = new URLSearchParams(u).toString();
          } catch (t) {
            d = Object.keys(u)
              .map(
                (t) => encodeURIComponent(t) + "=" + encodeURIComponent(u[t]),
              )
              .join("&");
          }
          return { reqUrl: a, dataObj: u, bodyStr: d };
        },
        h = (t) => {
          let e = document.createElement("a");
          ((e.href = t),
            t &&
              !t.includes("media/download_redirect") &&
              (e.rel = "noopener noreferrer"),
            (e.download = ""),
            e.click());
        },
        p = (t) => {
          if (!t) return "";
          try {
            let e = /^(https?:)?\/\//i.test(t) ? t : "https://".concat(t),
              n = new URL(e),
              o = n.hostname.replace(/^www\./, ""),
              r = "";
            if ("youtu.be" === o)
              r = n.pathname.split("/").filter(Boolean)[0] || "";
            else if (o.endsWith("youtube.com")) {
              if ("/watch" === n.pathname) r = n.searchParams.get("v") || "";
              else {
                let t = n.pathname.split("/").filter(Boolean);
                ["shorts", "embed", "live"].includes(t[0] || "") &&
                  (r = t[1] || "");
              }
            }
            return r ? "https://www.youtube.com/embed/".concat(r) : "";
          } catch (t) {
            return (
              console.error("Failed to parse youtube preview url", t),
              ""
            );
          }
        };
    },
    5798: function (t, e, n) {
      n.d(e, {
        ZC: function () {
          return u;
        },
        dU: function () {
          return c;
        },
        eY: function () {
          return i;
        },
        l7: function () {
          return o;
        },
        o0: function () {
          return a;
        },
        qs: function () {
          return r;
        },
        td: function () {
          return d;
        },
        vJ: function () {
          return s;
        },
        z8: function () {
          return h;
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
      function r() {
        let t = navigator.userAgent.toLocaleLowerCase() || "",
          e = !!t.match(/Android/i),
          n =
            /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(t) ||
            /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(t),
          o = !!t.match(/iPhone|iPad|iPod/i),
          r = t.indexOf("iphone") > -1,
          c = /iPhone|iPad|iPod\/([\w.]+).*(safari).*/i.test(t),
          i = !!t.match(/micromessenger/i),
          a = !!t.match(/weibo/i),
          s =
            (t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/)) &&
            e &&
            !n;
        return {
          isAndroid: e,
          isQQ: n,
          isIOS: o,
          isSafari: c,
          isWx: i,
          isWb: a,
          isAndroidChrome: s,
          isQZ: -1 !== t.indexOf("Qzone/"),
          isIpone: r,
          isEcho: -1 !== t.indexOf("echo"),
        };
      }
      function c() {
        let t = "",
          e = document.querySelector('meta[name="environment"]');
        return (e && (t = e.content), t);
      }
      function i(t) {
        if (!t) return "";
        try {
          return new URL(window.location.href).searchParams.get(t) || "";
        } catch (t) {
          return "";
        }
      }
      function a(t) {
        let e = t.getFullYear(),
          n = t.getMonth() + 1,
          o = t.getDate(),
          r = t.getHours(),
          c = t.getMinutes(),
          i = t.getSeconds();
        return (
          e +
          "-" +
          (n = n < 10 ? "0" + n : n) +
          "-" +
          (o = o < 10 ? "0" + o : o) +
          " " +
          (r = r < 10 ? "0" + r : r) +
          ":" +
          (c = c < 10 ? "0" + c : c) +
          ":" +
          (i = i < 10 ? "0" + i : i)
        );
      }
      function s(t) {
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
      function h(t) {
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
]);
