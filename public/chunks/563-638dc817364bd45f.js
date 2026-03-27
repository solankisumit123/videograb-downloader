"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [563],
  {
    563: function (e, t, r) {
      r.d(t, {
        default: function () {
          return U;
        },
      });
      var d = r(4336),
        i = { src: "/_next/static/media/audio.29f16c06.png" },
        m = { src: "/_next/static/media/audio_selected.695b4d27.png" },
        a = {
          src: "/_next/static/media/banner_bg.131665c2.png",
          height: 464,
          width: 1500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEW8wPrIu/9MaXE5j74kAAAAA3RSTlMKFADZT5ZdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYGRiYmJiZIDQTAyMAADUABc30uJ1AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        l = r(1929),
        s = r(3212),
        n = { src: "/_next/static/media/image.5d5445b6.png" },
        o = { src: "/_next/static/media/image_selected.52f2a885.png" },
        c = r(8685),
        p = { src: "/_next/static/media/sound.ac2fd8cf.png" },
        x = { src: "/_next/static/media/sound_close.9bb43c1f.png" },
        u = { src: "/_next/static/media/video.7294e888.png" },
        A = r(5212),
        h = { src: "/_next/static/media/video_selected.9e30a01c.png" },
        f = r(281),
        b = r(2297),
        w = r(2244),
        g = {
          src: "/_next/static/media/play_icon.c7181af2.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXH29vbo6Ojz8/P09PTo6Oju7u7z8/P5+fn29vYl8QmrAAAACnRSTlMAiiANoDRDXWG4AV617wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJxjYEAANnYog5WRkQlEMzMysHKyghnMHCxgIRYWqCI2MBcOAAz8AFoweO3NAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        v = {
          src: "/_next/static/media/vidmate_logo.5b709b02.png",
          height: 144,
          width: 144,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXyIhHzOyP9TAz/Mw7mFg7rHyDsExjmDg7qHxL8NBT2Ehf9Cgz/8/L+o5z3OSD6SyXyMDT8MTL809L9yMj0SkH8IRfvFRb8qKX/RhTzXV73lZPtFgXRJq3KAAAACnRSTlP9s/6xsP38/v79G6+TuwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwFwYUBgDAQALEDql83dP89SdjuvRRZB7n4nGV5fLpgJAgtzidOCCH1/n4g0uLQziEitVoH6tTGWKt+bqgC56jPEc4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        y = r(3365),
        j = r(8559),
        N = r(5798),
        _ = r(4308),
        E = r(6777),
        z = r(7797),
        C = r(3090),
        M = r(4271),
        k = r(6522);
      let R = !1,
        S = !1,
        B = 0,
        L = ["144p", "360p", "720p", "1080p"],
        F = ["48kbps", "128kbps", "256kbps"];
      function U(e) {
        let { locale: t = "en", queryParams: r = {} } = e,
          U = (0, C.useRouter)(),
          T = (0, E.useTranslations)("DownloadPanel"),
          [V, q] = (0, M.useState)("video"),
          D = (0, M.useRef)(null),
          [I, P] = (0, M.useState)(""),
          [Z] = (0, M.useState)({
            h1: T("title_home"),
            desc: T("subtitle_home"),
          }),
          [G, J] = (0, M.useState)({
            title: "",
            duration: 0,
            thumbnail: A.Z.src,
            audioList: [
              {
                resource_id: "490f4e0bccaa64d1c9136c0bbed40371",
                quality: "48kbps",
                format: "OPUS",
                type: "audio",
                size: 0,
                download_mode: "direct",
              },
              {
                resource_id: "30dfa2fcfc92153eb39a61989d3492eb",
                quality: "128kbps",
                format: "OPUS",
                type: "audio",
                size: 0,
                download_mode: "direct",
              },
              {
                resource_id: "30dfa2fcfc92153eb39a61989d3492eb",
                quality: "256kbps",
                format: "OPUS",
                type: "audio",
                size: 0,
                download_mode: "direct",
              },
            ],
            videoList: [
              {
                resource_id: "3b77ff1cf2e110160d99655ea30fcdfc",
                quality: "144p",
                format: "MP4",
                type: "video",
                size: 0,
                download_mode: "direct",
              },
              {
                resource_id: "c5216569ca7affd4260b4c17efa4607f",
                quality: "360p",
                format: "MP4",
                type: "video",
                size: 0,
                download_mode: "direct",
              },
              {
                resource_id: "7bdf5e6f279bbf219b12667c5c860bbc",
                quality: "720p",
                format: "MP4",
                type: "video",
                size: 0,
                download_mode: "direct",
              },
              {
                resource_id: "7bdf5e6f279bbf219b12667c5c860bbc",
                quality: "1080p",
                format: "MP4",
                type: "video",
                size: 0,
                download_mode: "direct",
              },
              {
                resource_id: "7bdf5e6f279bbf219b12667c5c860bbc",
                quality: "2K",
                format: "MP4",
                type: "video",
                size: 0,
                download_mode: "direct",
              },
            ],
          }),
          O = (0, M.useRef)(""),
          [H, Y] = (0, M.useState)(!1),
          [K, X] = (0, M.useState)(!0);
        (0, M.useEffect)(() => {
          (window.sendLog("share_enter", r),
            (function () {
              let e = document.getElementById("url-input-wrapper");
              if (e) {
                if (r.id) {
                  let t = "https://www.youtube.com/embed/".concat(r.id);
                  (P(t), (e.value = t), (O.current = t));
                }
                e.addEventListener("input", (e) => {
                  let { inputType: t } = e,
                    r = e.target.value;
                  "insertFromPaste" === t ? Q(r ? r.trim() : "", !0) : Q(r);
                });
              }
            })(),
            document.addEventListener("visibilitychange", function () {
              "hidden" === document.visibilityState &&
                (R ? ((R = !1), (S = !0)) : (S = !1));
            }),
            (function () {
              if (r.id) {
                let e = "https://www.youtube.com/embed/".concat(r.id),
                  { reqUrl: t, bodyStr: d } = (0, j.Ar)({
                    data: { origin: "cache", link: e },
                    path: "media/parse",
                  });
                fetch(t, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: d,
                }).then(async (e) => {
                  let t = await e.json(),
                    d = JSON.parse(JSON.stringify(G.videoList)),
                    i = JSON.parse(JSON.stringify(G.audioList));
                  if (1 === t.status) {
                    let {
                      resources: e,
                      thumbnail: r,
                      title: m,
                      duration: a,
                    } = t.data;
                    if (null == e ? void 0 : e.length) {
                      let t = [],
                        r = [];
                      e.forEach((e) => {
                        ((e.isFast = 1),
                          "video" === e.type
                            ? t.push(e)
                            : "audio" === e.type && r.push(e));
                      });
                      let m = (function (e) {
                          let t = e.map((e) => ({
                              ...e,
                              quality_number: parseInt(e.quality),
                            })),
                            r = t.filter((e) => !e.has_audio),
                            d = t.filter((e) => e.has_audio);
                          function i(e) {
                            let t = new Map();
                            return (
                              e.forEach((e) => {
                                let r = e.quality_number || 0;
                                if (t.has(r)) {
                                  let d = t.get(r);
                                  r >= 1080
                                    ? e.size > d.size && t.set(r, e)
                                    : e.size < d.size && t.set(r, e);
                                } else t.set(r, e);
                              }),
                              Array.from(t.values())
                            );
                          }
                          let m = i(r),
                            a = i(d);
                          function l(e) {
                            return e.sort(
                              (e, t) => e.quality_number - t.quality_number,
                            );
                          }
                          return [...l(m), ...l(a)];
                        })(t),
                        a = r
                          .map((e) => ({
                            ...e,
                            quality_number: parseInt(e.quality),
                          }))
                          .sort((e, t) => e.quality_number - t.quality_number);
                      for (let e of m) {
                        let { quality: t } = e;
                        (L.includes(t) &&
                          (d = d.filter((e) => e.quality !== t)),
                          (e.has_cache = 1),
                          d.unshift(e));
                      }
                      for (let e of a) {
                        let { quality: t } = e;
                        (F.includes(t) &&
                          (i = i.filter((e) => e.quality !== t)),
                          (e.has_cache = 1),
                          i.unshift(e));
                      }
                    }
                    J({
                      title: m,
                      duration: a,
                      thumbnail: r,
                      videoList: d,
                      audioList: i,
                    });
                  } else
                    J({
                      title: "",
                      duration: 0,
                      thumbnail: "https://i4.ytimg.com/vi/".concat(
                        r.id,
                        "/sddefault.jpg",
                      ),
                      videoList: d,
                      audioList: i,
                    });
                });
              }
            })(),
            (function () {
              if (void 0 === window.player) {
                window.player = "INIT";
                let e = document.createElement("script");
                e.src = "https://www.youtube.com/iframe_api";
                let t = document.getElementsByTagName("script")[0];
                (t.parentNode.insertBefore(e, t),
                  (window.onYouTubeIframeAPIReady = function () {
                    var e;
                    (e = r.id) &&
                      "" !== e &&
                      (window.player = new window.YT.Player("youtube-player", {
                        playerVars: { autoplay: 0, controls: 1 },
                        videoId: e,
                        events: {
                          onReady: () => {
                            Y(!0);
                          },
                          onStateChange: (e) => {
                            e.data === window.YT.PlayerState.PLAYING && X(!1);
                          },
                        },
                      }));
                  }));
              }
            })());
        }, []);
        let Q = function (e) {
          var t;
          let r =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          null === (t = D.current) || void 0 === t || t.hideAlert();
          let d = e;
          try {
            d = (0, N.vJ)(e).trim();
          } catch (e) {}
          (P(d), r && W(d));
        };
        async function W(e) {
          if (e) {
            if (e === O.current) {
              window.sendLog("download_click", r);
              return;
            }
          } else {
            D.current.showAlert();
            return;
          }
          let t = "/?type=analysis-now&url=".concat(encodeURIComponent(e));
          (r.utm_source && (t += "&utm_source=".concat(r.utm_source)),
            U.push(t));
        }
        function $() {
          let e = document.getElementById("url-input-wrapper"),
            t = null == e ? void 0 : e.value;
          ((null == t ? void 0 : t.trim) && (t = t.trim()), W(t));
        }
        function ee(e) {
          (window.sendLog("open_vidmate", { ...r, act: e }),
            clearTimeout(B),
            (B = setTimeout(function () {
              ((R = !1),
                S
                  ? (S = !1)
                  : (function () {
                      R = !1;
                      let e =
                          "https://api.v-videoapp.com/api/dev/redirect/redirect?pkg_name=com.video.fun.app",
                        t = r.pub || "com.nemo.vidmate.app.official_website";
                      t && (e += "&pub=".concat(t));
                      let d = r.subpub || "";
                      (d && (e += "&subpub=".concat(d)),
                        (window.location.href = e));
                    })());
            }, 1500)));
        }
        return (0, d.jsxs)("div", {
          className: "flex w-full flex-col items-center",
          children: [
            (0, d.jsxs)("div", {
              className:
                "relative w-full bg-gradient-to-b from-[#0085CF] to-[#01C5C9] pb-[0.64rem] md:pb-16 md:pt-[300px]",
              children: [
                (0, d.jsxs)("div", {
                  className: "relative block h-[2.72rem] w-[7.5rem] md:hidden",
                  children: [
                    (0, d.jsx)(z.default, {
                      className:
                        "pointer-events-none absolute right-0 top-0 z-0 h-[2.32rem] w-[7.5rem]",
                      src: a,
                      alt: "banner background image",
                      unoptimized: !0,
                    }),
                    (0, d.jsxs)("div", {
                      className: "relative z-[1] h-[2.72rem] w-[7.5rem]",
                      children: [
                        (0, d.jsx)("div", {
                          className: "mb-[0.13rem] pt-[0.7rem] text-center",
                          children: (0, d.jsx)(z.default, {
                            className:
                              "mx-auto h-[0.71rem] w-[4.73rem] object-contain",
                            src: c.Z,
                            alt: "VidsSave.com",
                            unoptimized: !0,
                          }),
                        }),
                        (0, d.jsx)("h1", {
                          className:
                            "text-center text-[0.32rem] font-bold text-[--text-anti-primary]",
                          children: Z.h1,
                        }),
                        (0, d.jsx)("h2", {
                          className:
                            "mb-[0.42rem] w-full text-center text-[0.26rem] text-[--text-anti-secondary]",
                          children: Z.desc,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  className:
                    "pointer-events-none absolute left-0 top-[45px] z-0 hidden w-full md:block",
                  children: [
                    (0, d.jsx)(z.default, {
                      className:
                        "absolute left-0 top-[36px] z-0 h-[332px] w-[157px]",
                      src: b.Z,
                      alt: "banner background image left",
                      unoptimized: !0,
                    }),
                    (0, d.jsx)(z.default, {
                      className:
                        "absolute right-0 top-[36px] z-0 h-[322px] w-[190px]",
                      src: w.Z,
                      alt: "banner background image right",
                      unoptimized: !0,
                    }),
                    (0, d.jsxs)("div", {
                      className: "relative mx-auto w-fit md:max-w-[1440px]",
                      children: [
                        (0, d.jsx)(z.default, {
                          className:
                            "relative z-[1] mx-auto mb-[10px] h-[94px] w-[563px] object-contain",
                          src: c.Z,
                          alt: y.yK.MAIN,
                          unoptimized: !0,
                        }),
                        (0, d.jsx)("h1", {
                          className:
                            "mb-[5px] w-full text-center text-[50px] font-bold text-[--text-anti-primary]",
                          children: Z.h1,
                        }),
                        (0, d.jsx)("h2", {
                          className:
                            "w-full text-center text-[24px] text-[--text-anti-secondary]",
                          children: Z.desc,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  id: "input-wrap",
                  className:
                    "relative mx-auto flex h-[1.12rem] w-[7.3rem] items-center justify-center rounded-[0.08rem] border-[0.02rem] border-[var(--border-medium)] bg-white py-[0.02rem] pl-[0.02rem] shadow-[0px_3px_3px_0px_rgba(33,33,33,0.2)] md:h-[90px] md:w-[1120px] md:rounded-[8px] md:border-[4px] md:py-[15px] md:pl-[15px] rtl:pl-0 rtl:pr-[0.02rem] md:rtl:pr-[15px]",
                  children: [
                    "" === I
                      ? (0, d.jsx)(z.default, {
                          className:
                            "h-[0.36rem] w-[0.36rem] md:h-[38px] md:w-[38px]",
                          src: f.Z,
                          alt: "world icon",
                          unoptimized: !0,
                        })
                      : (0, d.jsx)(_.Z, {
                          className:
                            "h-[0.36rem] w-[0.36rem] cursor-pointer md:h-[38px] md:w-[38px]",
                          onClick: () => {
                            let e =
                              document.getElementById("url-input-wrapper");
                            e && "" !== e.value && (P(""), (e.value = ""));
                          },
                        }),
                    (0, d.jsx)("input", {
                      id: "url-input-wrapper",
                      placeholder: T("paste_tips"),
                      spellCheck: "false",
                      onKeyDown: (e) => {
                        "Enter" === e.key && ($(), e.preventDefault());
                      },
                      className:
                        "min-h-[0.88rem] w-[3.9rem] px-[0.1rem] text-[18px] leading-[0.88rem] text-[rgba(0,0,0,0.6)] outline-none md:min-h-[38px] md:w-[830px] md:px-[15px] md:text-[23px] md:leading-[38px]",
                    }),
                    (0, d.jsxs)("button", {
                      onClick: () => {
                        $();
                      },
                      className:
                        "flex h-[0.88rem] w-[2.78rem] cursor-pointer items-center justify-center rounded-[0.08rem] bg-[var(--brand-primary)] px-[0.1rem] "
                          .concat(
                            ["de", "ja", "ms"].includes(t)
                              ? "text-[0.28rem]"
                              : "text-[0.34rem]",
                            " font-bold text-white md:h-[75px] md:w-[218px] md:rounded-[8px] md:px-[15px] ",
                          )
                          .concat(
                            ["ja"].includes(t)
                              ? "md:text-[20px]"
                              : "md:text-[22px]",
                          ),
                      children: [
                        (0, d.jsx)(z.default, {
                          className:
                            "mr-[0.2rem] h-[0.53rem] w-[0.53rem] md:mr-[14px] md:h-[50px] md:w-[50px] rtl:ml-[0.2rem] rtl:mr-0 md:rtl:ml-[14px]",
                          src: l.Z,
                          alt: "download icon",
                          unoptimized: !0,
                        }),
                        (0, d.jsx)("span", { children: T("download") }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsx)(k.Z, {
                  ref: D,
                  onLinkClick: (e) => {
                    let t = document.getElementById("url-input-wrapper");
                    (t && (t.value = e), Q(e, !0));
                  },
                }),
                (0, d.jsx)("section", {
                  className:
                    "mx-auto mt-[0.1rem] w-[7.3rem] rounded-[0.08rem] border-[0.04rem] border-solid border-[--border-medium] bg-[#ffffff] md:mt-[36px] md:w-[1120px] md:rounded-[8px] md:border-[4px]",
                  style: { boxShadow: "0px 3px 3px 0px rgba(33, 33, 33, 0.2)" },
                  children: (0, d.jsxs)("div", {
                    className:
                      "p-[0.2rem] md:flex md:items-start md:justify-start md:p-0",
                    children: [
                      (0, d.jsxs)("div", {
                        className:
                          "mb-[0.22rem] md:mb-[15px] md:ml-[29px] md:mr-[29px] md:mt-[23px] md:w-[354px]",
                        children: [
                          (0, d.jsxs)("div", {
                            className:
                              "relative mb-[0.2rem] h-[3.88rem] w-[6.89rem] bg-[#000000] md:mb-[21px] md:h-[197px] md:w-[354px]",
                            children: [
                              (0, d.jsxs)("div", {
                                onClick: function () {
                                  window.location.href =
                                    "vidmate://jump/?type=video_detail&info=".concat(
                                      r.id,
                                      "&title=video&type=fixed",
                                    );
                                  try {
                                    window.player.playVideo();
                                  } catch (e) {}
                                },
                                className: "".concat(
                                  H ? "visible" : "invisible",
                                  " absolute z-[2] h-[3.88rem] w-[6.89rem] md:h-[197px] md:w-[354px]",
                                ),
                                children: [
                                  (0, d.jsx)(z.default, {
                                    src: g,
                                    alt: "play icon",
                                    unoptimized: !0,
                                    width: 96,
                                    height: 96,
                                    className: "".concat(
                                      K ? "visible" : "invisible",
                                      " cursor-pointer absolute left-[2.48rem] top-[0.98rem] z-[2] h-[1.92rem] w-[1.92rem] md:left-[129px] md:top-[50px] md:h-[96px] md:w-[96px]",
                                    ),
                                  }),
                                  (0, d.jsx)("div", {
                                    id: "youtube-player",
                                    "data-videoid": r.id,
                                    className:
                                      "z-[1] h-[3.88rem] w-[6.89rem] md:h-[197px] md:w-[354px]",
                                  }),
                                ],
                              }),
                              (0, d.jsx)(z.default, {
                                src: G.thumbnail,
                                loader: (e) => {
                                  let { src: t } = e;
                                  return t;
                                },
                                alt: "video thumbnail",
                                onError: (e) => {
                                  e.currentTarget.src = A.Z.src;
                                },
                                unoptimized: !0,
                                width: 354,
                                height: 197,
                                className:
                                  "absolute z-[1] h-[3.88rem] w-[6.89rem] object-contain md:h-[197px] md:w-[354px]",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("div", {
                            className:
                              "flex w-[6.89rem] items-center justify-between text-left leading-[0.3rem] text-[var(--text-primary)] md:hidden",
                            children: [
                              (0, d.jsx)("div", {
                                className:
                                  "w-[5rem] truncate text-[0.24rem] font-bold",
                                children: G.title,
                              }),
                              (0, d.jsx)("div", {
                                className: "text-[0.24rem]",
                                children: G.duration
                                  ? (0, d.jsxs)("span", {
                                      children: [
                                        T("duration"),
                                        ": ",
                                        (0, N.ZC)(G.duration),
                                      ],
                                    })
                                  : null,
                              }),
                            ],
                          }),
                          (0, d.jsxs)("div", {
                            className:
                              "hidden w-[355px] text-left leading-[30px] md:block",
                            children: [
                              (0, d.jsx)("div", {
                                className: "w-full text-[18px]",
                                children: G.title,
                              }),
                              (0, d.jsx)("div", {
                                className: "mt-[8px] text-[24px]",
                                children: G.duration
                                  ? (0, d.jsxs)("span", {
                                      children: [
                                        T("duration"),
                                        ": ",
                                        (0, N.ZC)(G.duration),
                                      ],
                                    })
                                  : null,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className:
                          "min-h-[0.7rem] w-[6.89rem] md:min-h-[270px] md:w-[700px] md:py-[23px]",
                        children: [
                          (function () {
                            let e = (e) => {
                              let t = u.src;
                              switch (e) {
                                case "video":
                                  t = "video" === V ? h.src : u.src;
                                  break;
                                case "audio":
                                  t = "audio" === V ? m.src : i.src;
                                  break;
                                case "picture":
                                  t = "picture" === V ? o.src : n.src;
                              }
                              return (0, d.jsxs)("div", {
                                className: "".concat(
                                  V === e
                                    ? "bg-[var(--brand-primary)] text-[#ffffff]"
                                    : "cursor-pointer bg-[#F5F5F5] text-[var(--text-secondary)]",
                                  " flex items-center justify-center md:h-[56px] md:w-[350px] w-[3.53rem] h-[0.7rem]",
                                ),
                                onClick: () => {
                                  V !== e && q(e);
                                },
                                children: [
                                  (0, d.jsx)("div", {
                                    className:
                                      "relative mr-[0.1rem] h-[0.38rem] w-[0.38rem] md:mr-[10px] md:h-[29px] md:w-[29px] rtl:ml-[0.1rem] rtl:mr-0 md:rtl:ml-[10px]",
                                    children: (0, d.jsx)(z.default, {
                                      src: t,
                                      alt: "".concat(e, " icon"),
                                      fill: !0,
                                      unoptimized: !0,
                                      className: "object-contain",
                                    }),
                                  }),
                                  (0, d.jsx)("span", {
                                    className: "text-[0.3rem] md:text-[24px]",
                                    children: T(e),
                                  }),
                                ],
                              });
                            };
                            return (0, d.jsxs)("div", {
                              className: "flex items-center justify-start",
                              children: [e("video"), e("audio")],
                            });
                          })(),
                          (function () {
                            var e;
                            let t = null,
                              i = [],
                              m = (e, t, i) => {
                                let {
                                    quality: m,
                                    size: a,
                                    download_url: l,
                                    has_audio: n,
                                    has_cache: o,
                                  } = e,
                                  c = o
                                    ? (0, d.jsxs)(d.Fragment, {
                                        children: [
                                          (0, d.jsx)("div", {
                                            className:
                                              "relative mr-[0.1rem] h-[0.44rem] w-[0.44rem] md:mr-[10px] md:h-[33px] md:w-[33px] rtl:ml-[0.1rem] rtl:mr-0 md:rtl:ml-[10px]",
                                            children: (0, d.jsx)(z.default, {
                                              src: s.Z,
                                              alt: "download icon",
                                              fill: !0,
                                              className: "object-contain",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, d.jsx)("span", {
                                            className:
                                              "text-[0.28rem] text-[var(--brand-primary)] md:text-[18px]",
                                            children: T("download"),
                                          }),
                                        ],
                                      })
                                    : (0, d.jsx)("span", {
                                        className:
                                          "text-[0.28rem] text-[var(--brand-primary)] md:text-[18px]",
                                        children: T("open_vdm"),
                                      }),
                                  u = null;
                                return (
                                  (u = o
                                    ? (0, d.jsx)("a", {
                                        className:
                                          "flex h-[0.7rem] w-[2.19rem] cursor-pointer items-center justify-center rounded-[0.08rem] border-[0.03rem] border-solid border-[var(--brand-primary)] hover:bg-[#D4FBFF] md:h-[58px] md:w-[164px] md:rounded-[10px] md:border-[3px]",
                                        href: l,
                                        target: "_blank",
                                        onClick: () => {
                                          window.sendLog(
                                            "share_download_succ",
                                            r,
                                          );
                                        },
                                        children: c,
                                      })
                                    : (0, d.jsx)("a", {
                                        id: "fixedDownloadBtn",
                                        href: "vidmate://jump/?type=video_detail&info=".concat(
                                          r.id,
                                          "&title=video&type=fixed",
                                        ),
                                        rel: "nofollow",
                                        className:
                                          "flex h-[0.7rem] w-[2.19rem] cursor-pointer items-center justify-center rounded-[0.08rem] border-[0.03rem] border-solid border-[var(--brand-primary)] hover:bg-[#D4FBFF] md:h-[58px] md:w-[164px] md:rounded-[10px] md:border-[3px]",
                                        onClick: () => {
                                          ee("task_add");
                                        },
                                        children: c,
                                      })),
                                  (0, d.jsxs)(
                                    "li",
                                    {
                                      className:
                                        "flex h-[1rem] items-center justify-between border-b-[0.01rem] border-solid border-[--border-light] text-[0.26rem] text-[#383838] md:h-[100px] md:border-b-[1px] md:text-[20px]",
                                      children: [
                                        (0, d.jsxs)("div", {
                                          className:
                                            "ml-[0.24rem] flex items-center justify-start md:ml-[20px] rtl:ml-0 rtl:mr-[0.24rem] md:rtl:mr-[18px]",
                                          children: [
                                            (0, d.jsx)("div", {
                                              className:
                                                "mr-[0.16rem] h-[0.32rem] w-[0.58rem] rounded-[0.08rem] bg-[#FFAF32] text-center text-[0.2rem] leading-[0.32rem] text-[#ffffff] md:mr-[12px] md:h-[32px] md:w-[51px] md:rounded-[8px] md:text-[20px] md:leading-[28px] rtl:ml-[0.16rem] rtl:mr-0 md:rtl:ml-[12px]",
                                              children: t,
                                            }),
                                            (0, d.jsx)("div", {
                                              className:
                                                "w-[1.2rem] text-left leading-[0.32rem] md:w-[90px] md:leading-[23px]",
                                              children: m || "-",
                                            }),
                                            "video" === V
                                              ? (0, d.jsxs)("div", {
                                                  className:
                                                    "ml-[0.24rem] flex w-[2rem] items-center justify-start text-left md:ml-[10px] md:w-[180px] rtl:ml-0 rtl:mr-[0.24rem] md:rtl:mr-[10px]",
                                                  children: [
                                                    (0, d.jsx)("div", {
                                                      className:
                                                        "relative mr-[0.1rem] h-[0.32rem] w-[0.32rem] md:mr-[10px] md:h-[32px] md:w-[32px] rtl:ml-[0.1rem] rtl:mr-0 md:rtl:ml-[10px]",
                                                      children: (0, d.jsx)(
                                                        z.default,
                                                        {
                                                          src: n
                                                            ? x.src
                                                            : p.src,
                                                          alt: "sound icon",
                                                          fill: !0,
                                                          className:
                                                            "object-contain",
                                                          unoptimized: !0,
                                                        },
                                                      ),
                                                    }),
                                                    (0, d.jsx)("span", {
                                                      children:
                                                        a > 0
                                                          ? (0, N.td)(a)
                                                          : "",
                                                    }),
                                                  ],
                                                })
                                              : (0, d.jsx)("div", {
                                                  className:
                                                    "ml-[0.24rem] flex w-[2rem] items-center justify-start text-left md:ml-[10px] md:w-[180px] rtl:ml-0 rtl:mr-[0.24rem] md:rtl:mr-[10px]",
                                                  children:
                                                    a > 0 ? (0, N.td)(a) : "",
                                                }),
                                          ],
                                        }),
                                        (0, d.jsx)("div", {
                                          className:
                                            "mr-[0.24rem] flex items-center justify-start md:mr-[26px] rtl:ml-[0.24rem] rtl:mr-0 md:rtl:ml-[26px]",
                                          children: u,
                                        }),
                                      ],
                                    },
                                    "".concat(i, "_video"),
                                  )
                                );
                              };
                            return (
                              "audio" === V
                                ? ((i = G.audioList),
                                  (t = (0, d.jsx)("ul", {
                                    className:
                                      "min-h-[1rem] w-[6.89rem] border-[0.01rem] border-solid border-[--border-light] font-bold md:min-h-[75px] md:w-[700px] md:border-[1px] md:border-b-0",
                                    children: i.map((e, t) => m(e, "MP3", t)),
                                  })))
                                : (null === (e = G.videoList) || void 0 === e
                                    ? void 0
                                    : e.length) > 0 &&
                                  ((i = G.videoList),
                                  (t = (0, d.jsx)("ul", {
                                    className:
                                      "min-h-[1rem] w-[6.89rem] border-[0.01rem] border-solid border-[--border-light] font-bold md:min-h-[100px] md:w-[700px] md:border-[1px] md:border-b-0",
                                    children: i.map((e, t) => m(e, "MP4", t)),
                                  }))),
                              t
                            );
                          })(),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, d.jsx)("div", {
              id: "download-vdm-banner",
              className:
                "fixed bottom-0 left-0 right-0 z-[1000] mx-auto mt-[0.2rem] w-full rounded-[0.08rem] border-[0.01rem] border-solid border-[#E5E5E5] bg-white p-[0.16rem] shadow-sm md:bottom-[20px] md:left-auto md:right-[15px] md:mt-[20px] md:w-[520px] md:rounded-[12px] md:border-[1px] md:p-[20px]",
              children: (0, d.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, d.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, d.jsx)("div", {
                        className:
                          "relative mr-[0.16rem] h-[0.64rem] w-[0.64rem] overflow-hidden rounded-[0.12rem] md:mr-[16px] md:h-[64px] md:w-[64px] md:rounded-[12px]",
                        children: (0, d.jsx)(z.default, {
                          src: v,
                          alt: "VidMate",
                          fill: !0,
                          unoptimized: !0,
                          className: "object-cover",
                        }),
                      }),
                      (0, d.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, d.jsx)("h3", {
                            className:
                              "text-[0.18rem] font-semibold text-[#1a1a1a] md:text-[18px]",
                            children: "VidMate",
                          }),
                          (0, d.jsx)("p", {
                            className:
                              "mt-[0.02rem] text-[0.14rem] text-[#666666] md:mt-[2px] md:text-[14px]",
                            children: T("best_resource_tips"),
                          }),
                          (0, d.jsx)("p", {
                            className:
                              "text-[0.14rem] text-[#666666] md:text-[14px]",
                            children: T("ytb_downloader"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)("a", {
                    href: "vidmate://jump/?type=video_detail&info=".concat(
                      r.id,
                      "&title=video&type=fixed",
                    ),
                    className:
                      "flex h-[0.32rem] w-[0.8rem] items-center justify-center rounded-[0.06rem] bg-[#FF4444] text-[0.14rem] font-semibold text-white transition-colors hover:bg-[#E63939] md:h-[36px] md:w-[80px] md:rounded-[6px] md:text-[14px]",
                    onClick: () => {
                      ((R = !0), ee("open"));
                    },
                    children: T("open"),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    2297: function (e, t) {
      t.Z = {
        src: "/_next/static/media/bg_left.85a06081.png",
        height: 666,
        width: 314,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAFVBMVEVMaXGa2udOu8qK0d2z5OyV1+Oy3e5dmmmBAAAAB3RSTlMAGgswS0EeH3AjEwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRJREFUeJxjYGBmZmJgYGZhZGBgYGKAARCLkZWRgYENLMHAAAADUQAnKx5nkQAAAABJRU5ErkJggg==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    2244: function (e, t) {
      t.Z = {
        src: "/_next/static/media/bg_right.fae3faed.png",
        height: 644,
        width: 384,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAElBMVEVMaXGC0Np/y9xStdG05eml1+Y4Ag9SAAAABnRSTlMAEDwkHVFo/zRIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nDXIwQ0AMAjEMB+U/VeuqNT8HCRQc9D1sGWtZkf63wsD8wAlXeZrdAAAAABJRU5ErkJggg==",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
  },
]);
