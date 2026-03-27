"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9234],
  {
    6146: function (e, t, r) {
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var d = r(4336),
        m = {
          src: "/_next/static/media/faq.3f4fb039.png",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAwkYAwkUUxU9H0XRD0na77s5+4KGq5W1zAAAAAXRSTlPaJuDjrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJxjYGAEAwYozcgIYjAxQxhMbKwsqAy4FKo2BgANMgBd8qTSZAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        a = {
          src: "/_next/static/media/faq_moin.a67e1a20.png",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAwkYAw0YAvjpk2o4AwUJJ03sayFlAXHhzAAAAAXRSTlPaJuDjrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGAEAwYozcjIwMjIwsTEBGKwsDEzs6Iw4FIwxTDtAA8AAGnjN86zAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        o = r(3179),
        i = r(7797);
      function l(e) {
        let {
            qaList: t,
            className: r = "",
            itemClassName: l = "",
            questionClassName: n = "",
            answerClassName: s = "",
            title: x = "FAQ",
            desc: c,
            openIcon: p,
            closeIcon: u,
            iconClassName: h = "",
          } = e,
          b = null != p ? p : m,
          f = null != u ? u : a;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("h2", {
              className: (0, o.W)(
                "my-[0.4rem] text-center text-[0.4rem] font-extrabold text-[#2D3436FF] md:mb-[40px] md:mt-[60px] md:text-[50px]",
                r,
              ),
              children: x,
            }),
            c &&
              (0, d.jsx)("p", {
                className:
                  "mx-auto mb-[0.4rem] mt-[-0.2rem] text-center text-[0.24rem] text-[#2D3436FF] md:mb-[40px] md:mt-[-20px] md:w-[983px] md:text-[14px]",
                children: c,
              }),
            t.map((e, t) =>
              (0, d.jsx)(
                "div",
                {
                  className: (0, o.W)(
                    "mx-auto mb-[0.4rem] w-[6.7rem] border-b-[1px] border-b-[#D0D0D0FF] md:mb-[30px] md:w-[983px] md:pb-[30px]",
                    l,
                  ),
                  children: (0, d.jsxs)("details", {
                    className: "group",
                    children: [
                      (0, d.jsxs)("summary", {
                        className:
                          "mb-[0.3rem] flex w-full cursor-pointer list-none items-center justify-between",
                        children: [
                          (0, d.jsx)("div", {
                            className: (0, o.W)(
                              "w-[6.34rem] text-[0.3rem] font-bold text-[#2D3436FF] md:w-fit md:text-[24px]",
                              n,
                            ),
                            children: e.q,
                          }),
                          (0, d.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, d.jsx)(i.default, {
                                src: b,
                                alt: "open",
                                className: (0, o.W)(
                                  "h-[0.4rem] w-[0.4rem] group-open:hidden md:h-[30px] md:w-[30px]",
                                  h,
                                ),
                                width: 30,
                                height: 30,
                                unoptimized: !0,
                              }),
                              (0, d.jsx)(i.default, {
                                src: f,
                                alt: "close",
                                className: (0, o.W)(
                                  "hidden h-[0.4rem] w-[0.4rem] group-open:block md:h-[30px] md:w-[30px]",
                                  h,
                                ),
                                width: 30,
                                height: 30,
                                unoptimized: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: (0, o.W)(
                          "mb-[0.3rem] w-[6.34rem] text-[0.24rem] font-bold leading-[0.4rem] text-[#1C4B70FF] md:w-fit md:pt-[30px] md:text-[18px] md:leading-[30px]",
                          s,
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
    8775: function (e, t, r) {
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var d = r(4336),
        m = r(6777),
        a = r(7797);
      function o(e, t) {
        return "".concat(e, ".").concat(t);
      }
      function i(e) {
        let {
            title: t,
            kind: r,
            mobileImages: i,
            desktopImages: l,
            mobileSectionTitle: n,
            desktopSectionTitle: s,
            mobileTextPrefix: x,
            desktopTextPrefix: c,
            host: p = "",
            mobileHostIndexes: u = [2],
            desktopHostIndexes: h = [2],
            desktopGridColsClassName: b = "md:grid-cols-3",
          } = e,
          f = (0, m.useTranslations)("howToUse"),
          g = x || "textList_".concat(r),
          A = c || "textListDesktop_".concat(r);
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("h2", {
              className:
                "my-[0.4rem] text-center text-[0.4rem] font-bold md:mb-[40px] md:mt-[60px] md:text-[50px]",
              children: t,
            }),
            (0, d.jsxs)("div", {
              className:
                "mx-auto flex w-[7.2rem] flex-col items-center md:w-[1310px] md:flex-row md:flex-wrap md:gap-5 md:pb-[60px]",
              children: [
                (0, d.jsx)("div", {
                  className:
                    "mb-[0.3rem] flex w-full flex-col rounded-[0.2rem] bg-white pb-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:rounded-[20px] md:pb-[23px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                  children: (0, d.jsx)("div", {
                    className: "mx-auto w-full px-[0.2rem] md:px-[18px]",
                    children: (0, d.jsxs)("div", {
                      className:
                        "rounded-[0.24rem] px-[0.14rem] pb-[0.24rem] md:rounded-[24px] md:px-[24px] md:pb-[30px]",
                      children: [
                        (0, d.jsx)("h3", {
                          className:
                            "mx-auto mb-[0.24rem] w-[6.2rem] rounded-b-[2.44rem] bg-gradient-to-b from-[#0090E050] to-[#01c6c950] px-[0.2rem] py-[0.18rem] text-center text-[0.32rem] font-bold text-[#2D3436] md:mb-[28px] md:w-[760px] md:rounded-b-[100px] md:py-[20px] md:text-[32px]",
                          children: n || f("fromMobile"),
                        }),
                        (0, d.jsx)("div", {
                          className: "grid grid-cols-1 gap-[0.8rem] ".concat(
                            b,
                            " md:gap-[20px]",
                          ),
                          children: i.map((e, t) => {
                            let m = o(g, t);
                            return (0, d.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, d.jsx)("div", {
                                    className:
                                      "relative after:absolute after:left-[12%] after:top-[12%] after:text-[0.36rem] after:content-[attr(data-host)] md:p-[10px] md:after:left-[13%] md:after:top-[17%] md:after:text-[18px]",
                                    "data-host": u.includes(t) ? p : "",
                                    children: (0, d.jsx)(a.default, {
                                      src: e,
                                      alt: f("stepList.".concat(t)),
                                      className:
                                        "h-auto w-full rounded-[0.16rem] md:rounded-[16px]",
                                      width: 800,
                                      height: 536,
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, d.jsx)("div", {
                                    className:
                                      "mt-[0.16rem] inline-flex rounded-[0.12rem] bg-[#FF7A00] p-[0.06rem] text-[0.3rem] font-bold text-white md:mt-[18px] md:rounded-[10px] md:p-[8px] md:text-[30px]",
                                    children: f("stepList.".concat(t)),
                                  }),
                                  (0, d.jsx)("p", {
                                    className:
                                      "mt-[0.14rem] text-[0.24rem] leading-[0.34rem] text-[#6F7779] md:mt-[16px] md:text-[18px] md:leading-[28px]",
                                    children: f(m),
                                  }),
                                ],
                              },
                              "mobile_card_".concat(r, "_").concat(t),
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, d.jsx)("div", {
                  className:
                    "mb-[0.3rem] flex w-full flex-col rounded-[0.2rem] bg-white pb-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:mb-0 md:rounded-[20px] md:pb-[23px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                  children: (0, d.jsx)("div", {
                    className: "mx-auto w-full px-[0.2rem] md:px-[18px]",
                    children: (0, d.jsxs)("div", {
                      className:
                        "rounded-[0.24rem] px-[0.14rem] pb-[0.24rem] md:rounded-[24px] md:px-[24px] md:pb-[30px]",
                      children: [
                        (0, d.jsx)("h3", {
                          className:
                            "mx-auto mb-[0.24rem] w-[6.2rem] rounded-b-[2.44rem] bg-gradient-to-b from-[#0090E050] to-[#01c6c950] px-[0.2rem] py-[0.18rem] text-center text-[0.32rem] font-bold text-[#2D3436] md:mb-[28px] md:w-[760px] md:rounded-b-[100px] md:py-[20px] md:text-[32px]",
                          children: s || f("fromDesktop"),
                        }),
                        (0, d.jsx)("div", {
                          className: "grid grid-cols-1 gap-[0.24rem] ".concat(
                            b,
                            " md:gap-[20px]",
                          ),
                          children: l.map((e, t) => {
                            let m = o(A, t);
                            return (0, d.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, d.jsx)("div", {
                                    className:
                                      "relative after:absolute after:left-[12%] after:top-[12%] after:text-[0.36rem] after:content-[attr(data-host)] md:p-[10px] md:after:left-[13%] md:after:top-[17%] md:after:text-[18px]",
                                    "data-host": h.includes(t) ? p : "",
                                    children: (0, d.jsx)(a.default, {
                                      src: e,
                                      alt: f("stepList.".concat(t)),
                                      className:
                                        "h-auto w-full rounded-[0.16rem] md:rounded-[16px]",
                                      width: 800,
                                      height: 536,
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, d.jsx)("div", {
                                    className:
                                      "mt-[0.16rem] inline-flex rounded-[0.12rem] bg-[#FF7A00] p-[0.06rem] text-[0.3rem] font-bold leading-none text-white md:mt-[18px] md:rounded-[10px] md:p-[8px] md:text-[30px]",
                                    children: f("stepList.".concat(t)),
                                  }),
                                  (0, d.jsx)("p", {
                                    className:
                                      "mt-[0.14rem] text-[0.24rem] leading-[0.34rem] text-[#6F7779] md:mt-[16px] md:text-[18px] md:leading-[28px]",
                                    children: f(m),
                                  }),
                                ],
                              },
                              "desktop_card_".concat(r, "_").concat(t),
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    2664: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var d = r(4336),
        m = r(6964),
        a = r(3539),
        o = r(7797);
      function i(e) {
        let {
          name: t,
          description: r,
          icon: i,
          href: l,
          gradient: n,
          className: s,
        } = e;
        return (0, d.jsxs)(m.rU, {
          href: l,
          prefetch: !1,
          title: t,
          className:
            "group relative overflow-hidden rounded-[0.2rem] bg-white p-[0.3rem] shadow-[0px_0.04rem_0.16rem_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_0.08rem_0.24rem_rgba(0,0,0,0.12)] md:rounded-[20px] md:p-[30px] ".concat(
              s,
            ),
          children: [
            (0, d.jsx)("div", {
              className:
                "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 ".concat(
                  n,
                ),
            }),
            (0, d.jsxs)("div", {
              className:
                "relative flex items-center gap-[0.2rem] md:gap-[20px]",
              children: [
                (0, d.jsx)("div", {
                  className:
                    "flex h-[0.8rem] w-[0.8rem] shrink-0 items-center justify-center rounded-[0.12rem] bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] md:h-[80px] md:w-[80px] md:rounded-[12px]",
                  children: (0, d.jsx)(o.default, {
                    src: i,
                    alt: t,
                    width: 48,
                    height: 48,
                    unoptimized: !0,
                    className:
                      "h-[0.48rem] w-[0.48rem] object-contain md:h-[48px] md:w-[48px]",
                  }),
                }),
                (0, d.jsxs)("div", {
                  className: "flex-1",
                  children: [
                    (0, d.jsx)("h3", {
                      className:
                        "mb-[0.08rem] text-[0.28rem] font-bold text-[var(--text-primary)] md:mb-[8px] md:text-[20px]",
                      children: t,
                    }),
                    (0, d.jsx)("p", {
                      className:
                        "text-[0.22rem] text-[var(--text-secondary)] md:text-[14px]",
                      children: r,
                    }),
                  ],
                }),
                (0, d.jsx)(a.Z, {
                  className:
                    "h-[0.32rem] w-[0.32rem] shrink-0 text-[var(--brand-primary)] opacity-0 transition-all duration-300 group-hover:translate-x-[0.08rem] group-hover:opacity-100 md:h-[24px] md:w-[24px] md:group-hover:translate-x-[8px]",
                }),
              ],
            }),
          ],
        });
      }
    },
    6377: function (e, t, r) {
      r.d(t, {
        default: function () {
          return n;
        },
      });
      var d = r(4336),
        m = r(7414),
        a = r(2664),
        o = r(2990),
        i = r(6777);
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
      function n(e) {
        let { showX: t = !0, className: r, kind: n = "" } = e,
          s = (0, i.useTranslations)("VideoDownloaderHub"),
          x = (0, i.useLocale)(),
          c = (t ? o.CZ : o.CZ.filter((e) => "x" !== e.key)).map((e) => {
            let t = l[e.key] || {
              localeKey: e.key,
              gradient: "bg-gradient-to-br from-gray-500 to-gray-600",
            };
            return {
              name: s("platforms.".concat(t.localeKey, ".name")),
              description: s("platforms.".concat(t.localeKey, ".description")),
              icon: e.icon,
              href: (0, m.D_)(x, e.link),
              gradient: t.gradient,
            };
          });
        return (0, d.jsxs)("div", {
          className:
            "my-[0.4rem] flex w-full flex-col items-center md:my-[60px] ".concat(
              r,
            ),
          children: [
            (0, d.jsx)("h2", {
              className:
                "mb-[0.4rem] text-center text-[0.4rem] font-extrabold leading-[0.45rem] md:mb-[40px] md:text-[50px] md:leading-[58px] ".concat(
                  "tiktok" === n ? "text-[#ffffff]" : "",
                ),
              children: s("platforms.title"),
            }),
            (0, d.jsx)("p", {
              className:
                "mb-[0.4rem] max-w-[90%] text-center text-[0.24rem] ".concat(
                  "tiktok" === n
                    ? "text-[#ffffff]"
                    : "text-[var(--text-secondary)]",
                  " md:mb-[40px] md:text-[18px]",
                ),
              children: s("platforms.subtitle"),
            }),
            (0, d.jsx)("div", {
              className:
                "grid w-full max-w-[7rem] grid-cols-1 gap-[0.24rem] px-[0.3rem] md:max-w-[1310px] md:grid-cols-2 md:gap-[24px] md:px-0 lg:grid-cols-3",
              children: c.map((e, t) => (0, d.jsx)(a.Z, { ...e }, t)),
            }),
          ],
        });
      }
    },
    6057: function (e, t, r) {
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var d = r(4336),
        m = {
          src: "/_next/static/media/youtube-main.72c318c8.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: "/_next/static/media/youtube-music.c4b463ca.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/youtube-shorts.22fca465.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        i = r(7414),
        l = r(6777),
        n = r(2664);
      function s() {
        let e = (0, l.useTranslations)("Product"),
          t = (0, l.useLocale)();
        return (0, d.jsx)("div", {
          className: "w-full py-[0.4rem] md:py-[60px]",
          children: (0, d.jsxs)("div", {
            className:
              "mx-auto w-[7.2rem] px-[0.3rem] md:w-full md:max-w-[1310px] md:px-0",
            children: [
              (0, d.jsx)("h2", {
                className:
                  "mb-[0.3rem] text-center text-[0.35rem] font-bold text-[#2D3436FF] md:mb-[40px] md:text-[36px]",
                children: e("relate_to_yt.title"),
              }),
              (0, d.jsx)("div", {
                className:
                  "grid grid-cols-1 gap-[0.24rem] md:grid-cols-3 md:gap-10",
                children: [
                  {
                    label: "yt",
                    link: "/yt",
                    description: "Download YouTube videos",
                    icon: m,
                  },
                  {
                    label: "yt_music",
                    link: "/youtube-music-download",
                    description: "Download music from YT",
                    icon: a,
                  },
                  {
                    label: "yt_movies",
                    link: "/youtube-movies",
                    description: "Download movies from YT",
                    icon: m,
                  },
                  {
                    label: "yt_mp3",
                    link: "/youtube-to-mp3",
                    description: "Convert YouTube videos to MP3 audio",
                    icon: a,
                  },
                  {
                    label: "yt_mp4",
                    link: "/youtube-to-mp4",
                    description: "Download YouTube videos as MP4",
                    icon: m,
                  },
                  {
                    label: "yt_shorts",
                    link: "/youtube-shorts-download",
                    icon: o,
                    description: "Download YouTube Shorts videos",
                  },
                ].map((r, m) =>
                  (0, d.jsx)(
                    n.Z,
                    {
                      name: e("relate_to_yt.".concat(r.label)),
                      icon: r.icon,
                      href: (0, i.D_)(t, r.link),
                      gradient: "bg-gradient-to-br from-red-500 to-red-600",
                      description: "",
                      className: "w-full md:w-[340px] md:!p-[20px]",
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        });
      }
    },
  },
]);
