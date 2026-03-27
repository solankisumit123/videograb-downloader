(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3599],
  {
    9929: function (e, t, A) {
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
      function r(e) {
        if (!A.o(a, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          r = t[0];
        return A.e(t[1]).then(function () {
          return A.t(r, 19);
        });
      }
      ((r.keys = function () {
        return Object.keys(a);
      }),
        (r.id = 9929),
        (e.exports = r));
    },
    5483: function (e, t, A) {
      Promise.resolve().then(A.bind(A, 6041));
    },
    2664: function (e, t, A) {
      "use strict";
      A.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = A(4336),
        r = A(6964),
        i = A(3539),
        n = A(7797);
      function s(e) {
        let {
          name: t,
          description: A,
          icon: s,
          href: l,
          gradient: m,
          className: d,
        } = e;
        return (0, a.jsxs)(r.rU, {
          href: l,
          prefetch: !1,
          title: t,
          className:
            "group relative overflow-hidden rounded-[0.2rem] bg-white p-[0.3rem] shadow-[0px_0.04rem_0.16rem_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_0.08rem_0.24rem_rgba(0,0,0,0.12)] md:rounded-[20px] md:p-[30px] ".concat(
              d,
            ),
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 ".concat(
                  m,
                ),
            }),
            (0, a.jsxs)("div", {
              className:
                "relative flex items-center gap-[0.2rem] md:gap-[20px]",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex h-[0.8rem] w-[0.8rem] shrink-0 items-center justify-center rounded-[0.12rem] bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] md:h-[80px] md:w-[80px] md:rounded-[12px]",
                  children: (0, a.jsx)(n.default, {
                    src: s,
                    alt: t,
                    width: 48,
                    height: 48,
                    unoptimized: !0,
                    className:
                      "h-[0.48rem] w-[0.48rem] object-contain md:h-[48px] md:w-[48px]",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex-1",
                  children: [
                    (0, a.jsx)("h3", {
                      className:
                        "mb-[0.08rem] text-[0.28rem] font-bold text-[var(--text-primary)] md:mb-[8px] md:text-[20px]",
                      children: t,
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-[0.22rem] text-[var(--text-secondary)] md:text-[14px]",
                      children: A,
                    }),
                  ],
                }),
                (0, a.jsx)(i.Z, {
                  className:
                    "h-[0.32rem] w-[0.32rem] shrink-0 text-[var(--brand-primary)] opacity-0 transition-all duration-300 group-hover:translate-x-[0.08rem] group-hover:opacity-100 md:h-[24px] md:w-[24px] md:group-hover:translate-x-[8px]",
                }),
              ],
            }),
          ],
        });
      }
    },
    6377: function (e, t, A) {
      "use strict";
      A.d(t, {
        default: function () {
          return m;
        },
      });
      var a = A(4336),
        r = A(7414),
        i = A(2664),
        n = A(2990),
        s = A(6777);
      let l = {
        yt: {
          localeKey: "youtube",
          gradient: "bg-gradient-to-br from-red-500 to-red-600",
        },
        ins: {
          localeKey: "instagram",
          gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
        },
        tiktok: {
          localeKey: "tiktok",
          gradient: "bg-gradient-to-br from-black to-gray-800",
        },
        facebook: {
          localeKey: "facebook",
          gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
        },
        x: {
          localeKey: "x",
          gradient: "bg-gradient-to-br from-gray-800 to-black",
        },
        pin: {
          localeKey: "pinterest",
          gradient: "bg-gradient-to-br from-red-600 to-red-700",
        },
      };
      function m(e) {
        let { showX: t = !0, className: A, kind: m = "" } = e,
          d = (0, s.useTranslations)("VideoDownloaderHub"),
          o = (0, s.useLocale)(),
          c = (t ? n.CZ : n.CZ.filter((e) => "x" !== e.key)).map((e) => {
            let t = l[e.key] || {
              localeKey: e.key,
              gradient: "bg-gradient-to-br from-gray-500 to-gray-600",
            };
            return {
              name: d("platforms.".concat(t.localeKey, ".name")),
              description: d("platforms.".concat(t.localeKey, ".description")),
              icon: e.icon,
              href: (0, r.D_)(o, e.link),
              gradient: t.gradient,
            };
          });
        return (0, a.jsxs)("div", {
          className:
            "my-[0.4rem] flex w-full flex-col items-center md:my-[60px] ".concat(
              A,
            ),
          children: [
            (0, a.jsx)("h2", {
              className:
                "mb-[0.4rem] text-center text-[0.4rem] font-extrabold leading-[0.45rem] md:mb-[40px] md:text-[50px] md:leading-[58px] ".concat(
                  "tiktok" === m ? "text-[#ffffff]" : "",
                ),
              children: d("platforms.title"),
            }),
            (0, a.jsx)("p", {
              className:
                "mb-[0.4rem] max-w-[90%] text-center text-[0.24rem] ".concat(
                  "tiktok" === m
                    ? "text-[#ffffff]"
                    : "text-[var(--text-secondary)]",
                  " md:mb-[40px] md:text-[18px]",
                ),
              children: d("platforms.subtitle"),
            }),
            (0, a.jsx)("div", {
              className:
                "grid w-full max-w-[7rem] grid-cols-1 gap-[0.24rem] px-[0.3rem] md:max-w-[1310px] md:grid-cols-2 md:gap-[24px] md:px-0 lg:grid-cols-3",
              children: c.map((e, t) => (0, a.jsx)(i.Z, { ...e }, t)),
            }),
          ],
        });
      }
    },
    6041: function (e, t, A) {
      "use strict";
      A.d(t, {
        default: function () {
          return k;
        },
      });
      var a = A(4336),
        r = A(6377),
        i = A(8685),
        n = A(910),
        s = A(9630),
        l = A(9285),
        m = A(9135),
        d = A(9336),
        o = A(720),
        c = A(7414),
        x = A(6964),
        p = A(5401),
        u = A(6212),
        h = A(4014),
        b = A(3559),
        g = A(7568),
        f = A(6777),
        w = A(7797),
        v = A(4271);
      function k() {
        let e = (0, f.useTranslations)("VideoDownloaderHub"),
          t = (0, f.useLocale)(),
          [A, k] = (0, v.useState)(null),
          y = (0, f.useTranslations)("Index"),
          E = [
            {
              icon: s.Z.src,
              title: y("adva.0.title"),
              description: y("adva.0.description"),
            },
            {
              icon: l.Z.src,
              title: y("adva.1.title"),
              description: y("adva.1.description"),
            },
            {
              icon: o.Z.src,
              title: y("adva.2.title"),
              description: y("adva.2.description"),
            },
            {
              icon: m.Z.src,
              title: y("adva.3.title"),
              description: y("adva.3.description"),
            },
            {
              icon: n.Z.src,
              title: y("adva.4.title"),
              description: y("adva.4.description"),
            },
            {
              icon: d.Z.src,
              title: y("adva.5.title"),
              description: y("adva.5.description"),
            },
          ],
          j = [
            {
              number: 1,
              title: e("steps.step1.title"),
              description: e("steps.step1.description"),
            },
            {
              number: 2,
              title: e("steps.step2.title"),
              description: e("steps.step2.description"),
            },
            {
              number: 3,
              title: e("steps.step3.title"),
              description: e("steps.step3.description"),
            },
          ],
          N = [
            { question: e("faq.q1.question"), answer: e("faq.q1.answer") },
            { question: e("faq.q2.question"), answer: e("faq.q2.answer") },
            { question: e("faq.q3.question"), answer: e("faq.q3.answer") },
            { question: e("faq.q4.question"), answer: e("faq.q4.answer") },
            { question: e("faq.q5.question"), answer: e("faq.q5.answer") },
          ];
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "flex w-full flex-col items-center",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "panel relative w-full pb-[0.6rem] pt-[0.7rem] md:pb-[80px] md:pt-[42px]",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-[0.4rem] select-none md:mb-[60px]",
                    children: (0, a.jsxs)("div", {
                      className: "relative mx-auto w-fit md:max-w-[1440px]",
                      children: [
                        (0, a.jsx)(w.default, {
                          className:
                            "pointer-events-none relative z-[1] mx-auto mb-[0.13rem] h-[0.71rem] w-[4.73rem] object-contain md:mb-[10px] md:h-[94px] md:w-[563px]",
                          src: i.Z,
                          alt: "VidsSave.com",
                          unoptimized: !0,
                        }),
                        (0, a.jsx)("h1", {
                          className:
                            "mx-auto w-full max-w-[90%] text-center text-[0.4rem] font-bold text-[--text-anti-primary] md:mb-[10px] md:max-w-full md:text-[50px]",
                          children: e("hero.title"),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "mx-auto w-full max-w-[7rem] text-center text-[0.26rem] text-[--text-anti-secondary] md:max-w-[1000px] md:text-[20px]",
                          children: e("hero.subtitle"),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-wrap items-center justify-center gap-[0.16rem] md:gap-[16px]",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-[0.08rem] rounded-full bg-white/20 px-[0.24rem] py-[0.12rem] backdrop-blur-sm md:gap-[8px] md:px-[24px] md:py-[12px]",
                        children: [
                          (0, a.jsx)(p.Z, {
                            className:
                              "h-[0.28rem] w-[0.28rem] text-white md:h-[20px] md:w-[20px]",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "text-[0.22rem] font-semibold text-white md:text-[16px]",
                            children: e("hero.badge1"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-[0.08rem] rounded-full bg-white/20 px-[0.24rem] py-[0.12rem] backdrop-blur-sm md:gap-[8px] md:px-[24px] md:py-[12px]",
                        children: [
                          (0, a.jsx)(u.Z, {
                            className:
                              "h-[0.28rem] w-[0.28rem] text-white md:h-[20px] md:w-[20px]",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "text-[0.22rem] font-semibold text-white md:text-[16px]",
                            children: e("hero.badge2"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-[0.08rem] rounded-full bg-white/20 px-[0.24rem] py-[0.12rem] backdrop-blur-sm md:gap-[8px] md:px-[24px] md:py-[12px]",
                        children: [
                          (0, a.jsx)(h.Z, {
                            className:
                              "h-[0.28rem] w-[0.28rem] text-white md:h-[20px] md:w-[20px]",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "text-[0.22rem] font-semibold text-white md:text-[16px]",
                            children: e("hero.badge3"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(r.default, {}),
              (0, a.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center bg-gradient-to-b from-[#C9FAE9] to-[#C1EAF9] py-[0.4rem] md:pb-[70px] md:pt-[60px]",
                children: [
                  (0, a.jsx)("h2", {
                    className: "text-[0.4rem] font-bold md:text-[50px]",
                    children: e("features.title"),
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "mb-[0.4rem] mt-[0.16rem] text-center text-[0.24rem] text-[var(--text-secondary)] md:mb-[40px] md:mt-[16px] md:text-[18px]",
                    children: e("features.subtitle"),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full max-w-[7rem] flex-col gap-[0.3rem] px-[0.3rem] md:max-w-[1310px] md:flex-row md:flex-wrap md:gap-7 md:px-0",
                    children: E.map((e, t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "flex h-auto w-full flex-col items-center rounded-[0.2rem] bg-white pt-[0.3rem] md:h-[300px] md:w-[410px] md:items-start md:rounded-[20px] md:p-[30px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                          children: [
                            (0, a.jsx)(w.default, {
                              src: e.icon,
                              width: 96,
                              height: 96,
                              alt: e.title,
                              unoptimized: !0,
                              className:
                                "h-[0.96rem] w-[0.96rem] md:h-[80px] md:w-[80px]",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "mt-[0.3rem] text-wrap px-[0.3rem] text-center text-[0.34rem] font-bold leading-[0.4rem] text-[var(--text-primary)] md:mt-[20px] md:px-0 md:text-left md:text-[24px] md:leading-[28px]",
                              children: e.title,
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "mb-[0.3rem] mt-[0.2rem] px-[0.62rem] text-center text-[0.28rem] text-[var(--text-brand)] md:mb-0 md:mt-[15px] md:px-0 md:pr-[23px] md:text-left md:text-[16px] md:leading-[30px]",
                              children: e.description,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
              (0, a.jsx)("h2", {
                className:
                  "my-[0.4rem] text-[0.4rem] font-bold md:mb-[40px] md:mt-[60px] md:text-[50px]",
                children: e("steps.title"),
              }),
              (0, a.jsx)("p", {
                className:
                  "mb-[0.4rem] text-center text-[0.24rem] text-[var(--text-secondary)] md:mb-[40px] md:text-[18px]",
                children: e("steps.subtitle"),
              }),
              (0, a.jsx)("div", {
                className:
                  "flex w-full max-w-[7rem] flex-col gap-[0.4rem] px-[0.3rem] pb-[0.6rem] md:max-w-[1310px] md:flex-row md:flex-wrap md:gap-4 md:px-0 md:pb-[60px]",
                children: j.map((t, A) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "flex w-full flex-col rounded-[0.2rem] bg-white pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:h-[280px] md:w-[410px] md:rounded-[20px] md:p-[30px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "mb-[0.2rem] text-center text-[0.3rem] font-bold text-[var(--text-primary)] md:mb-[20px] md:text-left md:text-[24px]",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "text-[#FF6B00FF]",
                              children: [
                                e("steps.title").split(" ")[0],
                                " ",
                                t.number,
                              ],
                            }),
                            ": ",
                            t.title,
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "mb-[0.3rem] px-[0.33rem] text-center text-[0.24rem] text-[var(--text-brand)] md:mb-0 md:px-0 md:text-left md:text-[16px] md:leading-[26px]",
                          children: t.description,
                        }),
                      ],
                    },
                    A,
                  ),
                ),
              }),
              (0, a.jsx)("div", {
                className:
                  "w-full bg-gradient-to-b from-[#F8FAFC] to-white px-[0.3rem] py-[0.8rem] md:px-[60px] md:py-[80px]",
                children: (0, a.jsxs)("div", {
                  className: "mx-auto max-w-[900px]",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "mb-[0.4rem] text-center text-[0.4rem] font-bold text-[var(--text-primary)] md:mb-[40px] md:text-[42px]",
                      children: e("faq.title"),
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "mb-[0.6rem] text-center text-[0.24rem] text-[var(--text-secondary)] md:mb-[60px] md:text-[18px]",
                      children: e("faq.subtitle"),
                    }),
                    (0, a.jsx)("div", {
                      className: "space-y-[0.2rem] md:space-y-[20px]",
                      children: N.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "overflow-hidden rounded-[0.2rem] bg-white shadow-[0px_0.04rem_0.16rem_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_0.08rem_0.24rem_rgba(0,0,0,0.12)] md:rounded-[20px]",
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => k(A === t ? null : t),
                                className:
                                  "flex w-full items-center justify-between p-[0.3rem] text-left transition-colors hover:bg-[#F8FAFC] md:p-[30px]",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "pr-[0.2rem] text-[0.28rem] font-semibold text-[var(--text-primary)] md:pr-[20px] md:text-[18px]",
                                    children: e.question,
                                  }),
                                  A === t
                                    ? (0, a.jsx)(b.Z, {
                                        className:
                                          "h-[0.32rem] w-[0.32rem] shrink-0 text-[var(--brand-primary)] md:h-[24px] md:w-[24px]",
                                      })
                                    : (0, a.jsx)(g.Z, {
                                        className:
                                          "h-[0.32rem] w-[0.32rem] shrink-0 text-[var(--text-secondary)] md:h-[24px] md:w-[24px]",
                                      }),
                                ],
                              }),
                              A === t &&
                                (0, a.jsx)("div", {
                                  className:
                                    "border-t border-[#E5E7EB] px-[0.3rem] pb-[0.3rem] pt-[0.2rem] md:px-[30px] md:pb-[30px] md:pt-[20px]",
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "text-[0.24rem] leading-relaxed text-[var(--text-secondary)] md:text-[16px]",
                                    children: e.answer,
                                  }),
                                }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center bg-gradient-to-b from-[#4ED8C7FF] to-[#24B1FFFF] py-[0.6rem] md:py-[80px]",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "mb-[0.24rem] text-center text-[0.4rem] font-extrabold text-white md:mb-[24px] md:text-[42px]",
                    children: e("cta.title"),
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "mb-[0.4rem] max-w-[6rem] text-center text-[0.24rem] text-white/95 md:mb-[40px] md:max-w-[800px] md:text-[18px]",
                    children: e("cta.subtitle"),
                  }),
                  (0, a.jsxs)(x.rU, {
                    href: (0, c.D_)(t, "/home"),
                    prefetch: !1,
                    className:
                      "inline-flex items-center gap-[0.12rem] rounded-full bg-white px-[0.48rem] py-[0.2rem] text-[0.28rem] font-semibold text-[var(--brand-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:gap-[12px] md:px-[48px] md:py-[20px] md:text-[18px]",
                    children: [
                      e("cta.button"),
                      (0, a.jsx)(p.Z, {
                        className:
                          "h-[0.32rem] w-[0.32rem] md:h-[20px] md:w-[20px]",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    6611: function (e, t, A) {
      "use strict";
      A.d(t, {
        Mj: function () {
          return i;
        },
        yk: function () {
          return n;
        },
      });
      var a = A(8283),
        r = A(3090);
      let i = [
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
        n = i.map((e) => e.value);
      (0, a.cF)(async (e) => {
        let { requestLocale: t } = e,
          a = await t;
        return (
          n.includes(a) || (0, r.notFound)(),
          {
            messages: (await A(9929)("./".concat(a, ".json"))).default,
            locale: a,
          }
        );
      });
    },
    7414: function (e, t, A) {
      "use strict";
      A.d(t, {
        D_: function () {
          return s;
        },
        LA: function () {
          return l;
        },
        cK: function () {
          return n;
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
      function r(e) {
        return e
          ? e.startsWith("/")
            ? e.length > 1 && e.endsWith("/")
              ? e.slice(0, -1)
              : e
            : "/".concat(e)
          : "/";
      }
      function i(e) {
        let t = e.indexOf("#"),
          A = e.indexOf("?"),
          a = -1 === t ? A : -1 === A ? t : Math.min(t, A);
        return -1 === a
          ? { path: e, suffix: "" }
          : { path: e.slice(0, a), suffix: e.slice(a) };
      }
      function n(e, t) {
        if (!t.startsWith("/")) return t;
        let { path: A, suffix: n } = i(t),
          s = r(A);
        if (e) {
          let t = a.find((t) => t.replacementLocale === e && t.oldPath === s);
          if (t) return "".concat(t.newPath).concat(n);
        }
        let l = a.find((e) => e.newPath === s);
        return l && e !== l.replacementLocale
          ? "".concat(l.oldPath).concat(n)
          : "".concat(s).concat(n);
      }
      function s(e, t) {
        return n(e, t);
      }
      function l(e, t) {
        let A = (function (e, t) {
          let { path: A } = i(e || "/"),
            a = r(A);
          if (!t || "en" === t) return a;
          let n = "/".concat(t);
          return a === n
            ? "/"
            : a.startsWith("".concat(n, "/"))
              ? a.slice(n.length) || "/"
              : a;
        })(e, t);
        return (function (e, t) {
          let { path: A } = i(t),
            n = r(A);
          return (
            !!e &&
            a.some((t) => t.replacementLocale === e && r(t.oldPath) === n)
          );
        })(t, A);
      }
      (a.map((e) => r(e.newPath)), a.map((e) => r(e.oldPath)));
    },
    6964: function (e, t, A) {
      "use strict";
      A.d(t, {
        jD: function () {
          return m;
        },
        rU: function () {
          return n;
        },
        tv: function () {
          return d;
        },
      });
      var a = A(6611),
        r = A(4047);
      let i = a.Mj.map((e) => e.value),
        {
          Link: n,
          redirect: s,
          permanentRedirect: l,
          usePathname: m,
          useRouter: d,
        } = (0, r.os)({
          defaultLocale: "en",
          locales: i,
          localePrefix: "as-needed",
        });
    },
    2990: function (e, t, A) {
      "use strict";
      A.d(t, {
        zq: function () {
          return m;
        },
        f4: function () {
          return l;
        },
        Zx: function () {
          return n;
        },
        CZ: function () {
          return r;
        },
        Q1: function () {
          return s;
        },
      });
      var a = {
        src: "/_next/static/media/youtube.c91193ca.png",
        height: 80,
        width: 80,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/AQH+MC//AABMaXH/AQD/AAD/AQD9HBv/AAD/+vr9Rkb9sLD8k5P8Y2MJ1c5+AAAACHRSTlPx/iwAsy+v/GFLPAQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVHicPYtJDsAgEIAYlxFt+//vNjapNxKAWhq0Uumo0knHUhOMeYV8MB8hjXtsdeJ/fwEtrwFEWohJMwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
      let r = [
          { label: "YT", icon: a, key: "yt", link: "/yt" },
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
        i = r.filter((e) => !e.hide),
        n = ["ins", "facebook", "tiktok", "pin"]
          .map((e) => i.find((t) => t.key === e))
          .filter(Boolean),
        s = ["facebook", "ins", "yt", "tiktok", "pin"]
          .map((e) => i.find((t) => t.key === e))
          .filter(Boolean),
        l = [
          ...n,
          {
            label: "YT to MP4",
            icon: a,
            key: "yt-mp4",
            link: "/youtube-to-mp4",
          },
          {
            label: "YT to MP3",
            icon: a,
            key: "yt-mp3",
            link: "/youtube-to-mp3",
          },
          {
            label: "YT Movies",
            icon: a,
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
        m = [
          {
            label: "YT to MP4",
            key: "yt-mp4",
            icon: a,
            link: "/youtube-to-mp4",
          },
          {
            label: "YT to MP3",
            key: "yt-mp3",
            icon: a,
            link: "https://fastytm.com/",
            blank: !0,
          },
          {
            label: "YT Music",
            key: "yt-music",
            icon: a,
            link: "/youtube-music-download",
          },
          {
            label: "YT Movies",
            key: "yt-movies",
            icon: a,
            link: "/youtube-movies",
          },
        ];
    },
    8685: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo.cbf446ea.png",
        height: 142,
        width: 846,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEX///786xv/83X////77Srp1ByFAAAABXRSTlNJZ1VXSNbzHVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BhZGJmYGBgAAAASwAL8SUmHgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    910: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/earth.520cb344.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXf9OiM3Z2W3sPJ7uTX8+Xs+PPs+ere8+jk+u7j9uqJ2eK66dgtudEBqZDK79i97MtWyqEArCczwmdOx7GR2+hKx5EArmkApMZNym2O28t9+Br8AAAACHRSTlP+////////s0BBX/EAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicFcpHEsAgDACxJRhsU9Lr/z+aQWehhjummEut4gaxxGsXyKUd9xYS+Xz69IYE0vq6zIz8TSOrkROmP0wSAh4MaP/bAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9630: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/fast.18ac9208.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXd8+gIsW0+xme97Mzk+e7m9+rx+vPf9ejc8+fr+/FZy6Rmzda46OfM798Ys6G16Naa4bfT8eGG26V01YVNx7DT8OgAp5ig4OM1vdRCtZktAAAAAXRSTlOzEo46UAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVxUkSgCAQBLAGZukBFHf9/0stcgkgpEdgrvtRAnQbNZ8Gv9uachFQ25O2ILR/VzUS0V9fnAKE+vwHTC4CJme2x18AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9285: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/fuiiy.b50f9e91.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXe8+ic4M/A7NG+6unl9+zs+fCy59/h9efa8ubk+u4JrcqX4acLsnQSsqB+17dHw9YFsz5fz4Vqzto8xWsAsDex6L8atqPO7+hpdmydAAAACXRSTlOz/////////v4o92ZbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nBXLSRIAIQgEsAYbAXX27f8/nTL3ABm0SCDdqhgT/p3vOJRgbaJ3N7C0qns3eNmWcT1EOmUlZwub/QdGeQH1bMkMagAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9135: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/multi.4d62fe72.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEXe8+iZ4Lu/7M6059/f9enl9urt+vbZ8ufc8+bm+e/A6uVkzNB+2ZcAph1fzY6e3+cpuXbI7eQGrb9Rxs2s5NpGxo4LtkR21Mlw03uu5rvU8t+bGl20AAAACXRSTlOz/////////rMgmlt2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nBXLRxLAIAwEsDXYhqWl1/8/NBPdBdCU7hnUmKQFR9Ja5n471OpynM2hZdtlBINN6zX6Q9CiBnmJvxuZP08BAkoXqc4HAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9336: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/no.fd0026a5.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXe8+gIrJ3m9u3C6+rh9evk9ugNrtTe9Ojk+u/r+PBmzdCL2sqv57sMtTiA2LdJynS86OoAqluh4rBhzqYFrWQpwFBTypTK8NfQ8OiD2LZKiBStAAAAA3RSTlOz//70T6b+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nCXLRw6AMAwEwDXYWTuF0Mv/P4oQ15EGcEaoA867PBcdNibZWx1gc5LtWOOTfLYaoGZZOgmnlUn/FkHHC1RGAj0g97HsAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    720: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/supports.1380535d.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXe8+jU8eLr+e+p4+bn9+mL28SL2eHf8+jj+e7g9ekluMkDrYaC2aQJsl9214686t2x59BnzNeX3sx51bQZtaAmvmKU4KiJ3J5GPDrcAAAACnRSTlOz////////s//+Fc9gXgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVy0kSgDAMAzCnJMXuxg7//ynTs0ZYqZREgK64LBFaSu39EzyXuz6D8Hyc0cakHNFegW7bbpxNkogfTYQCK+H0W44AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
  function (e) {
    (e.O(0, [5496, 7279, 1084, 2800, 4722, 1744], function () {
      return e((e.s = 5483));
    }),
      (_N_E = e.O()));
  },
]);
