(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9374],
  {
    9929: function (A, e, t) {
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
      function a(A) {
        if (!t.o(n, A))
          return Promise.resolve().then(function () {
            var e = Error("Cannot find module '" + A + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = n[A],
          a = e[0];
        return t.e(e[1]).then(function () {
          return t.t(a, 19);
        });
      }
      ((a.keys = function () {
        return Object.keys(n);
      }),
        (a.id = 9929),
        (A.exports = a));
    },
    6522: function (A, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return m;
        },
      });
      var n = t(4336),
        a = {
          src: "/_next/static/media/clickhand.b31d0fcf.png",
          height: 216,
          width: 216,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXGZmZmRkZF1dXWkpKSwsLCdnZ28vLx7e3vw8PC+vr6srKyDg4OmpqaRkZGUlJSkpKSJiYmPj4+RkZH///9+fn6kpKTc3NzMzMzNrCjaAAAAFnRSTlMA4kJhVWinBhUh/fuA0Hf+596ew/mNn0R0rQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwlxkkSgCAQALFmHxZFUcH/v9SaMqdAyjFkAG+240qAhH5aDfss1WvGe69HI2YVpyHW+ce2Jnw+sgG38bwrXQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = t(3365),
        i = t(4308),
        r = t(6777),
        s = t(7797),
        o = t(4271),
        c = t(8551);
      let u = (A) => (A && l.z9[A]) || l.z9.DEFAULT,
        d = (0, o.forwardRef)((A, e) => {
          let {
              errorMsg: t,
              example: d,
              kind: m,
              className: h = "mt-[0.3rem] md:mt-[30px]",
              onClose: g,
              onLinkClick: b,
            } = A,
            f = d || u(m || ""),
            k = l.WC[m || "DEFAULT"] || "YT",
            w = (0, r.useTranslations)("DownloadPanel"),
            [p, x] = (0, o.useState)(t || w("enter_url")),
            [v, E] = (0, o.useState)(0),
            [y, M] = (0, o.useState)(!1),
            D = v > 1 && y;
          ((0, o.useEffect)(() => {
            x(t || w("enter_url"));
          }, [t]),
            (0, o.useEffect)(() => {
              D
                ? ((document.documentElement.style.overflow = "hidden"),
                  (document.documentElement.style.height = "100vh"))
                : ((document.documentElement.style.overflow = "visible"),
                  (document.documentElement.style.height = "auto"));
            }, [D]));
          let U = () => {
            (M(!1), null == g || g());
          };
          return ((0, o.useImperativeHandle)(
            e,
            () => ({
              showAlert: () => {
                (M(!0), E((A) => A + 1));
              },
              hideAlert: () => {
                M(!1);
              },
            }),
            [],
          ),
          y)
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  D &&
                    (0, n.jsx)("div", {
                      className:
                        "fixed top-0 z-10 h-screen w-screen bg-black/70",
                      onClick: U,
                    }),
                  D &&
                    (0, n.jsxs)("div", {
                      className:
                        "absolute left-[50%] top-[77vw] z-10 flex translate-x-[-50%] flex-col items-center justify-center md:top-[531px]",
                      children: [
                        (0, n.jsx)(s.default, {
                          src: a,
                          alt: "Click hand",
                          width: 108,
                          height: 108,
                          className:
                            "h-[0.72rem] w-[0.72rem] md:h-[108px] md:w-[108px]",
                          unoptimized: !0,
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-center text-[0.24rem] text-white md:text-[28px]",
                          children: (0, n.jsx)(c.Z, {
                            text: w("try_download", { name: k }),
                          }),
                        }),
                      ],
                    }),
                  (0, n.jsx)("div", {
                    className: h,
                    children: (0, n.jsxs)("div", {
                      className:
                        "relative z-[1000] mx-auto w-[6.2rem] rounded-[0.08rem] bg-white p-[0.3rem] shadow-[0_0.04rem_0.08rem_0.02rem_rgba(0,0,0,0.15)] md:w-[400px] md:rounded-lg md:p-[20px] md:shadow-[0_4px_8px_2px_rgba(0,0,0,0.15)]",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute left-[0.2rem] top-[-0.1rem] h-0 w-0 border-x-[0.12rem] border-b-[0.18rem] border-solid md:left-[14px] md:top-[-10px] md:border-x-[12px] md:border-b-[18px]",
                          style: {
                            borderColor:
                              "transparent transparent #fff transparent",
                          },
                        }),
                        (0, n.jsx)("button", {
                          onClick: U,
                          className:
                            "absolute top-[0.2rem] flex h-[0.24rem] w-[0.24rem] items-center justify-center md:top-[16px] md:h-[20px] md:w-[20px] ltr:right-[0.2rem] md:ltr:right-[16px] rtl:left-[0.2rem] md:rtl:left-[16px]",
                          children: (0, n.jsx)(i.Z, {
                            className:
                              "h-[0.2rem] w-[0.2rem] text-[#666] md:h-[16px] md:w-[16px]",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "flex items-start gap-[0.2rem] md:gap-[12px]",
                          children: (0, n.jsxs)("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "text-[0.28rem] font-semibold text-[#E96262] md:text-[16px]",
                                children: ["⚠️ ", p, " ⚠️"],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "mt-[0.1rem] text-[0.24rem] text-[#2D3436] md:mt-[6px] md:text-[14px]",
                                children: [
                                  "e.g.",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className:
                                      "inline-block max-w-full cursor-pointer break-words text-[#158EFF] hover:underline",
                                    onClick: () => (null == b ? void 0 : b(f)),
                                    children: f,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        });
      d.displayName = "EmptyAlert";
      var m = d;
    },
    8551: function (A, e, t) {
      "use strict";
      var n = t(4336),
        a = t(4271);
      e.Z = (A) => {
        let { text: e } = A,
          t = e.split(/(\*\*[^\*]+\*\*)/g);
        return (0, n.jsx)(n.Fragment, {
          children: t.map((A, e) =>
            A.startsWith("**") && A.endsWith("**")
              ? (0, n.jsx)("strong", { children: A.slice(2, -2) }, e)
              : (0, n.jsx)(a.Fragment, { children: A }, e),
          ),
        });
      };
    },
    6611: function (A, e, t) {
      "use strict";
      t.d(e, {
        Mj: function () {
          return l;
        },
        yk: function () {
          return i;
        },
      });
      var n = t(8283),
        a = t(3090);
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
        i = l.map((A) => A.value);
      (0, n.cF)(async (A) => {
        let { requestLocale: e } = A,
          n = await e;
        return (
          i.includes(n) || (0, a.notFound)(),
          {
            messages: (await t(9929)("./".concat(n, ".json"))).default,
            locale: n,
          }
        );
      });
    },
    7414: function (A, e, t) {
      "use strict";
      t.d(e, {
        D_: function () {
          return r;
        },
        LA: function () {
          return s;
        },
        cK: function () {
          return i;
        },
      });
      let n = [
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
      function a(A) {
        return A
          ? A.startsWith("/")
            ? A.length > 1 && A.endsWith("/")
              ? A.slice(0, -1)
              : A
            : "/".concat(A)
          : "/";
      }
      function l(A) {
        let e = A.indexOf("#"),
          t = A.indexOf("?"),
          n = -1 === e ? t : -1 === t ? e : Math.min(e, t);
        return -1 === n
          ? { path: A, suffix: "" }
          : { path: A.slice(0, n), suffix: A.slice(n) };
      }
      function i(A, e) {
        if (!e.startsWith("/")) return e;
        let { path: t, suffix: i } = l(e),
          r = a(t);
        if (A) {
          let e = n.find((e) => e.replacementLocale === A && e.oldPath === r);
          if (e) return "".concat(e.newPath).concat(i);
        }
        let s = n.find((A) => A.newPath === r);
        return s && A !== s.replacementLocale
          ? "".concat(s.oldPath).concat(i)
          : "".concat(r).concat(i);
      }
      function r(A, e) {
        return i(A, e);
      }
      function s(A, e) {
        let t = (function (A, e) {
          let { path: t } = l(A || "/"),
            n = a(t);
          if (!e || "en" === e) return n;
          let i = "/".concat(e);
          return n === i
            ? "/"
            : n.startsWith("".concat(i, "/"))
              ? n.slice(i.length) || "/"
              : n;
        })(A, e);
        return (function (A, e) {
          let { path: t } = l(e),
            i = a(t);
          return (
            !!A &&
            n.some((e) => e.replacementLocale === A && a(e.oldPath) === i)
          );
        })(e, t);
      }
      (n.map((A) => a(A.newPath)), n.map((A) => a(A.oldPath)));
    },
    6964: function (A, e, t) {
      "use strict";
      t.d(e, {
        jD: function () {
          return o;
        },
        rU: function () {
          return i;
        },
        tv: function () {
          return c;
        },
      });
      var n = t(6611),
        a = t(4047);
      let l = n.Mj.map((A) => A.value),
        {
          Link: i,
          redirect: r,
          permanentRedirect: s,
          usePathname: o,
          useRouter: c,
        } = (0, a.os)({
          defaultLocale: "en",
          locales: l,
          localePrefix: "as-needed",
        });
    },
    2990: function (A, e, t) {
      "use strict";
      t.d(e, {
        zq: function () {
          return o;
        },
        f4: function () {
          return s;
        },
        Zx: function () {
          return i;
        },
        CZ: function () {
          return a;
        },
        Q1: function () {
          return r;
        },
      });
      var n = {
        src: "/_next/static/media/youtube.c91193ca.png",
        height: 80,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/AQH+MC//AABMaXH/AQD/AAD/AQD9HBv/AAD/+vr9Rkb9sLD8k5P8Y2MJ1c5+AAAACHRSTlPx/iwAsy+v/GFLPAQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicPYtJDsAgEIAYlxFt+//vNjapNxKAWhq0Uumo0knHUhOMeYV8MB8hjXtsdeJ/fwEtrwFEWohJMwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
      let a = [
          { label: "YT", icon: n, key: "yt", link: "/yt" },
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
        l = a.filter((A) => !A.hide),
        i = ["ins", "facebook", "tiktok", "pin"]
          .map((A) => l.find((e) => e.key === A))
          .filter(Boolean),
        r = ["facebook", "ins", "yt", "tiktok", "pin"]
          .map((A) => l.find((e) => e.key === A))
          .filter(Boolean),
        s = [
          ...i,
          {
            label: "YT to MP4",
            icon: n,
            key: "yt-mp4",
            link: "/youtube-to-mp4",
          },
          {
            label: "YT to MP3",
            icon: n,
            key: "yt-mp3",
            link: "/youtube-to-mp3",
          },
          {
            label: "YT Movies",
            icon: n,
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
        o = [
          {
            label: "YT to MP4",
            key: "yt-mp4",
            icon: n,
            link: "/youtube-to-mp4",
          },
          {
            label: "YT to MP3",
            key: "yt-mp3",
            icon: n,
            link: "https://fastytm.com/",
            blank: !0,
          },
          {
            label: "YT Music",
            key: "yt-music",
            icon: n,
            link: "/youtube-music-download",
          },
          {
            label: "YT Movies",
            key: "yt-movies",
            icon: n,
            link: "/youtube-movies",
          },
        ];
    },
    1929: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/btn_icon.8a3ab11c.png",
        height: 134,
        width: 134,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////9MaXH///////////////////////+BIVw8AAAACnRSTlNBepYAAWYy3Bsa2XEfHQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJw1y7ERACEMxEDJh+G//4YZB8QrsYKSRSwoAxVIgcQOIt85Pw51D8Xae+K3XxK+AJIkKCScAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    7546: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/download_error.fb44090f.png",
        height: 234,
        width: 234,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEX/vin/AAD/zWb//wD/xkv/35T/021MaXH/vCf/vzH/wDD/wzT/xDT/wDH/0nP/zyv/vCUxJvAwAAAAD3RSTlMQAQIB8/39AB2jsPHrl/14PiyFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nBXKQRLAIAgEwVUhAyaK/39tylsfWjSkMRBaZinEKvdKpO+4nzcu9r4g63lq3pxmMxD0iE77AUDuAd8HGoiCAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    281: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/world.e3443633.png",
        height: 100,
        width: 100,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXNzc1MaXHKysrLy8vMzMzPz8/Ozs7KysrMzMzPz8/Pz8/Ly8vLy8sPEeNNAAAADXRSTlOfAHaFFFfNIzzhjmC+4k6kSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADZJREFUeJwVwocNwEAMA7GTZH/ff94gBFHlvZQoRveg8E3NXIOpwnAY/GlnzriR9znbQlrJkj4kgAD8OhgSuQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
]);
