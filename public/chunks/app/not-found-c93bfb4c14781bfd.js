(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9160],
  {
    9929: function (e, t, n) {
      var a = {
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
      function o(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          o = t[0];
        return n.e(t[1]).then(function () {
          return n.t(o, 19);
        });
      }
      ((o.keys = function () {
        return Object.keys(a);
      }),
        (o.id = 9929),
        (e.exports = o));
    },
    6507: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 9153));
    },
    8283: function (e, t, n) {
      "use strict";
      var a = n(5267);
      (a.getFormatter,
        a.getLocale,
        a.getMessages,
        a.getNow,
        (t.cF = a.getRequestConfig),
        a.getTimeZone,
        a.getTranslations,
        a.setRequestLocale,
        a.unstable_setRequestLocale);
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
      let a = n("getFormatter"),
        o = n("getNow"),
        l = n("getTimeZone"),
        r = n("getMessages"),
        s = n("getLocale"),
        u = n("getTranslations"),
        c = n("unstable_setRequestLocale"),
        i = n("setRequestLocale");
      ((t.getFormatter = a),
        (t.getLocale = s),
        (t.getMessages = r),
        (t.getNow = o),
        (t.getRequestConfig = function () {
          return n("getRequestConfig");
        }),
        (t.getTimeZone = l),
        (t.getTranslations = u),
        (t.setRequestLocale = i),
        (t.unstable_setRequestLocale = c));
    },
    3090: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2211),
        o = {};
      for (var l in a)
        "default" !== l &&
          (o[l] = function (e) {
            return a[e];
          }.bind(0, l));
      n.d(t, o);
    },
    9153: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }));
      var a = n(4336),
        o = n(7414),
        l = n(6611),
        r = n(3090);
      function s() {
        let e = (0, r.usePathname)(),
          t = (0, o.cK)("en", "/home"),
          n = e.split("/").filter(Boolean)[0];
        if (n && l.yk.includes(n)) {
          let e = (0, o.cK)(n, "/home");
          t = "".concat("en" === n ? "" : "/".concat(n)).concat(e);
        }
        return (
          (0, r.permanentRedirect)(t, r.RedirectType.replace),
          (0, a.jsx)("div", {
            className: "flex min-h-screen items-center justify-center",
            children: (0, a.jsxs)("div", {
              className: "text-center",
              children: [
                (0, a.jsx)("h1", {
                  className: "mb-4 text-2xl font-bold",
                  children: "Page Not Found",
                }),
                (0, a.jsx)("p", {
                  className: "mb-4 text-gray-600",
                  children: "Redirecting to homepage...",
                }),
                (0, a.jsx)("div", {
                  className:
                    "mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500",
                }),
              ],
            }),
          })
        );
      }
    },
    6611: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mj: function () {
          return l;
        },
        yk: function () {
          return r;
        },
      });
      var a = n(8283),
        o = n(3090);
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
        r = l.map((e) => e.value);
      (0, a.cF)(async (e) => {
        let { requestLocale: t } = e,
          a = await t;
        return (
          r.includes(a) || (0, o.notFound)(),
          {
            messages: (await n(9929)("./".concat(a, ".json"))).default,
            locale: a,
          }
        );
      });
    },
    7414: function (e, t, n) {
      "use strict";
      n.d(t, {
        D_: function () {
          return s;
        },
        LA: function () {
          return u;
        },
        cK: function () {
          return r;
        },
      });
      let a = [
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
      function o(e) {
        return e
          ? e.startsWith("/")
            ? e.length > 1 && e.endsWith("/")
              ? e.slice(0, -1)
              : e
            : "/".concat(e)
          : "/";
      }
      function l(e) {
        let t = e.indexOf("#"),
          n = e.indexOf("?"),
          a = -1 === t ? n : -1 === n ? t : Math.min(t, n);
        return -1 === a
          ? { path: e, suffix: "" }
          : { path: e.slice(0, a), suffix: e.slice(a) };
      }
      function r(e, t) {
        if (!t.startsWith("/")) return t;
        let { path: n, suffix: r } = l(t),
          s = o(n);
        if (e) {
          let t = a.find((t) => t.replacementLocale === e && t.oldPath === s);
          if (t) return "".concat(t.newPath).concat(r);
        }
        let u = a.find((e) => e.newPath === s);
        return u && e !== u.replacementLocale
          ? "".concat(u.oldPath).concat(r)
          : "".concat(s).concat(r);
      }
      function s(e, t) {
        return r(e, t);
      }
      function u(e, t) {
        let n = (function (e, t) {
          let { path: n } = l(e || "/"),
            a = o(n);
          if (!t || "en" === t) return a;
          let r = "/".concat(t);
          return a === r
            ? "/"
            : a.startsWith("".concat(r, "/"))
              ? a.slice(r.length) || "/"
              : a;
        })(e, t);
        return (function (e, t) {
          let { path: n } = l(t),
            r = o(n);
          return (
            !!e &&
            a.some((t) => t.replacementLocale === e && o(t.oldPath) === r)
          );
        })(t, n);
      }
      (a.map((e) => o(e.newPath)), a.map((e) => o(e.oldPath)));
    },
  },
  function (e) {
    (e.O(0, [2800, 4722, 1744], function () {
      return e((e.s = 6507));
    }),
      (_N_E = e.O()));
  },
]);
