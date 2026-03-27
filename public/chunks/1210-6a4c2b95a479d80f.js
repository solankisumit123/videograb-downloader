"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1210],
  {
    1210: function (e, t, r) {
      r.d(t, {
        default: function () {
          return eD;
        },
      });
      var a,
        d,
        i,
        l,
        n = r(4336),
        s = r(3329),
        m = r(8559),
        A = r(9742),
        o = r(8780),
        c = r(4271);
      let p = (0, c.forwardRef)((e, t) => {
        let { onVideoSelect: r } = e,
          [a, d] = (0, c.useState)([]),
          [i, l] = (0, c.useState)(!1),
          s = (0, c.useRef)(0),
          p = (0, c.useRef)(null),
          u = async (e) => {
            let t = Date.now();
            if (!(t - s.current < 5e3)) {
              ((s.current = t), (p.current = e || null), l(!0));
              try {
                let { bodyStr: t, reqUrl: l } = (0, m.Ar)({
                    path: "media/hot_list",
                    data: { hot_type: e ? "ytb" : "v", keyword: e },
                  }),
                  s = await fetch("".concat(l), {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: t,
                  });
                if (!s.ok) throw Error("Failed to fetch hot videos");
                let o = await s.json();
                if (o.data && Array.isArray(o.data.items)) {
                  var r, a, i, n, A;
                  let t = "";
                  ((null === (a = o.data) || void 0 === a
                    ? void 0
                    : null === (r = a.items) || void 0 === r
                      ? void 0
                      : r.length) > 0 &&
                    (t =
                      null === (A = o.data) || void 0 === A
                        ? void 0
                        : null === (n = A.items) || void 0 === n
                          ? void 0
                          : n.map((e) => e.id).join(",")),
                    window.sendLog("feed_show", {
                      key_words: e || null,
                      ids: t,
                      search_type: e ? "words" : "null",
                    }),
                    d(
                      null === (i = o.data) || void 0 === i ? void 0 : i.items,
                    ));
                }
              } catch (e) {
                console.error("Error fetching hot videos:", e);
              } finally {
                l(!1);
              }
            }
          };
        (0, c.useImperativeHandle)(t, () => ({ updateList: u }), []);
        let x = (e) => {
          let t = p.current ? "search" : "empty_search";
          (null == r || r(e, t),
            window.scrollTo({ top: 0, behavior: "smooth" }));
          let a = p.current ? "words" : "null";
          window.sendLog("feed_click", {
            key_words: p.current || "",
            search_type: a,
            item_id: e.id,
            video_url: e.url,
          });
        };
        return 0 !== a.length || i
          ? (0, n.jsx)("div", {
              className: "w-full bg-white py-[0.4rem] md:py-[60px]",
              children: i
                ? (0, n.jsx)("div", {
                    className: "flex justify-center py-[2rem]",
                    children: (0, n.jsx)(A.Z, { className: "animate-spin" }),
                  })
                : (0, n.jsx)("div", {
                    className:
                      "mx-auto grid max-w-[1440px] grid-cols-1 gap-[0.4rem] px-[0.3rem] md:grid-cols-3 md:gap-0 md:px-[25px]",
                    children: a.map((e) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          className:
                            "flex cursor-pointer flex-col md:rounded-[20px] md:p-[10px] md:pb-[16px] md:hover:bg-[#0F1F6014]",
                          onClick: () => x(e),
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "relative aspect-[670/378] w-full overflow-hidden rounded-[0.2rem] md:aspect-[450/254] md:rounded-[14px]",
                              children: [
                                (0, n.jsx)("img", {
                                  src: e.thumbnail,
                                  alt: e.title,
                                  className:
                                    "h-full w-full bg-cyan-100 object-cover transition-transform duration-300 hover:scale-105",
                                }),
                                void 0 !== e.duration &&
                                  (0, n.jsx)("div", {
                                    className:
                                      "absolute bottom-[0.1rem] right-[0.1rem] rounded-[0.08rem] bg-black bg-opacity-70 px-[0.1rem] py-[0.05rem] text-[0.2rem] text-white md:bottom-[8px] md:right-[8px] md:rounded-[4px] md:px-[8px] md:py-[4px] md:text-[14px]",
                                    children: (0, m.ZC)(e.duration),
                                  }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "mt-[0.2rem] flex items-center justify-between gap-[0.1rem] pe-[0.1rem] md:mt-[10px] md:gap-[8px] md:pe-[8px]",
                              children: [
                                (0, n.jsx)("p", {
                                  className:
                                    "line-clamp-2 text-[0.32rem] font-medium leading-[0.36rem] text-[var(--text-primary)] md:text-[16px] md:leading-[22px]",
                                  children: e.title,
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "h-[0.48rem] w-[0.48rem] shrink-0 cursor-pointer text-gray-500 transition-colors duration-200 hover:text-green-500 md:h-[28px] md:w-[28px]",
                                  children: (0, n.jsx)(o.Z, {
                                    className:
                                      "h-full w-full text-[#00C145] duration-300 hover:text-[#00C145] md:text-[#4B5253]",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
            })
          : null;
      });
      p.displayName = "HotVideoList";
      var u = r(8175),
        x = r(1929),
        h = r(7546),
        w = r(8685),
        f = r(8448),
        g = r(3462),
        b = r(9999),
        y = r(281),
        _ = r(3365),
        v = r(5798),
        E = r(2813),
        j = r(4308),
        N = r(6777),
        k = r(7797),
        C = r(1175),
        U = r(6522),
        B = {
          src: "/_next/static/media/loding.09984ff7.png",
          height: 68,
          width: 1268,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEW19Ni29NiIP6AfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZGBgZGRkYAQAAB4ABuVkSogAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        };
      function M() {
        let e = (0, N.useTranslations)("DownloadPanel");
        return (0, n.jsxs)("div", {
          className:
            "mx-auto mt-[0.1rem] min-h-[1.15rem] w-[5.2rem] md:mt-[40px] md:w-[634px]",
          children: [
            (0, n.jsx)("div", {
              className:
                "relative mx-auto mb-[0.42rem] h-[0.4rem] w-[5.2rem] overflow-hidden rounded-full bg-[rgba(0,0,0,0.65)] md:mb-[33px] md:h-[34px] md:w-[634px]",
              children: (0, n.jsx)(k.default, {
                className:
                  "absolute left-0 h-[0.4rem] w-full animate-charging rounded-full object-none md:h-[34px]",
                src: B,
                alt: "loading image",
                unoptimized: !0,
                fill: !0,
                objectFit: "cover",
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "text-center text-[0.28rem] text-[#ffffff] md:text-[30px]",
              children: e("loading"),
            }),
          ],
        });
      }
      var R = r(4228),
        L = r(654),
        z = r(13);
      let S = "vdm_daily_1080p_date",
        D = "vdm_daily_success_count";
      function F(e) {
        if (!e) return -1;
        let t = e.toLowerCase().replace(/\s/g, ""),
          r = t.match(/^(\d+)p$/);
        if (r) return parseInt(r[1], 10);
        switch (t) {
          case "144p":
            return 144;
          case "240p":
            return 240;
          case "360p":
            return 360;
          case "480p":
            return 480;
          case "720p":
          case "hd":
            return 720;
          case "1080p":
          case "fullhd":
          case "full hd":
          case "fhd":
            return 1080;
          case "2k":
          case "1440p":
          case "qhd":
            return 1440;
          case "4k":
          case "2160p":
          case "uhd":
            return 2160;
          default:
            try {
              return parseInt(e);
            } catch (e) {
              return -1;
            }
        }
      }
      function O(e) {
        return 1080 === F(e);
      }
      function V() {
        let e = new Date(),
          t = e.getFullYear(),
          r = String(e.getMonth() + 1).padStart(2, "0"),
          a = String(e.getDate()).padStart(2, "0");
        return "".concat(t, "-").concat(r, "-").concat(a);
      }
      function I() {
        !(function () {
          try {
            let e = V();
            localStorage.setItem(S, e);
          } catch (e) {
            console.error("Error marking 1080p download:", e);
          }
        })();
      }
      function T(e) {
        return (0, z.tF)(z.$8.RES_LIMIT)
          ? F(e) > 1080
            ? "high_resolution"
            : O(e) &&
                (function () {
                  try {
                    let e = localStorage.getItem(S),
                      t = V();
                    return e === t;
                  } catch (e) {
                    return (
                      console.error("Error checking 1080p download status:", e),
                      !1
                    );
                  }
                })()
              ? "1080p_daily_limit"
              : "none"
          : "none";
      }
      (((a = i || (i = {})).NONE = "none"),
        (a.DAILY_LIMIT_1080P = "1080p_daily_limit"),
        (a.HIGH_RESOLUTION = "high_resolution"));
      var Q = r(3212),
        Y = {
          src: "/_next/static/media/fast_loading.58afaae3.png",
          height: 80,
          width: 80,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAyUsA0lMAxkoAylMAwUQAwUQAwkkAwUYAwEQAwUWtbL7lAAAACnRSTlMBDTQYc99YkSm1s62hqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJxFykkKACAMBMHOrv//sMQI9qkYBn4VMvA9CAeaqYABq0y0F1PN974dC+MAVQbJVvsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        J = {
          src: "/_next/static/media/group_icon_image.a9b23066.png",
          height: 76,
          width: 76,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUAxEkAw0ZMaXEAyEgAw0UAw0YAxUUAxkcAwUUAwUUAwUUAwkUAxUgAzkoAzUkA2E64fsw1AAAAD3RSTlMPvgA2y6Yr5Uz6X1iG83ZmSNCiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nDXLSw6AMAzEUE8zScq3978tEgKv3saML0hJSoi8V1+rqM1d54tg0EF4HvtUQNpywr8/KlwBIyrGaeQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        X = {
          src: "/_next/static/media/group_icon_music.aeba647a.png",
          height: 76,
          width: 76,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXEAwkAAwkQAxkcAw0UAwkYAwEUAw0UAwkUA2E4AzEkA0EsAwUYA51MVElZWAAAADXRSTlMAEUyQgGk4ptb9sObIsEjceAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJxFyzESwCAIBdHlA6JJuP91M46FW71m4aaomYC9vZZvfKHcyILhoH7QdLAYeMf5TMYPGw4AwmTFhUgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        H = {
          src: "/_next/static/media/group_icon_video.b740a289.png",
          height: 76,
          width: 76,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXEAw0YAw0YAxEYAw0UAukQAwUYA0EoAv0QAwUUAwkUAwEYAwEYA3lAA0UtzJCqxAAAADXRSTlMAyuKLuAwrkkz9dn9BH292ogAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJw1xkkOgDAMBMGeeMgCOP9/LrJE6lRwdEt2h0gpMyrBvfT8aYOR8t6ezFZe4CrwASTQASP+i4jBAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        G = {
          src: "/_next/static/media/icon_fast_small.12a209e3.png",
          height: 32,
          width: 26,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAJ1BMVEX///////////////////////////////////////////////////9Ruv0SAAAADXRSTlMB/49NFKLoLM48l3TcAE3eiwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwlyckRACAMw0DZ4QhH//UygD77EBDqAGV/LVUvQjcT0015B6nxbH5QCxwR9ACFurYhjQAAAABJRU5ErkJggg==",
          blurWidth: 7,
          blurHeight: 8,
        },
        Z = { src: "/_next/static/media/nodata.c35bb59d.png" },
        q = r(5212),
        W = r(440),
        P = r(7414),
        K = r(6964),
        $ = r(3368),
        ee = r(3179);
      function et(e) {
        let {
            isOpen: t,
            onClose: r,
            children: a,
            closeOnBackdropClick: d = !0,
            closeOnEscape: i = !0,
            showCloseButton: l = !0,
            animation: s = "fade",
            overlayClassname: m,
            className: A,
          } = e,
          [o, p] = (0, c.useState)(!1),
          [u, x] = (0, c.useState)(!1);
        ((0, c.useEffect)(() => {
          if (t) {
            p(!0);
            let e = setTimeout(() => {
              x(!0);
            }, 10);
            return () => clearTimeout(e);
          }
          {
            x(!1);
            let e = setTimeout(() => {
              p(!1);
            }, 300);
            return () => clearTimeout(e);
          }
        }, [t]),
          (0, c.useEffect)(() => {
            if (!t || !i) return;
            let e = (e) => {
              "Escape" === e.key && (null == r || r());
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [t, i, r]));
        let h = u
          ? {
              backdrop: "opacity-100",
              modal:
                "fade" === s
                  ? "opacity-100"
                  : "slide" === s
                    ? "translate-y-0"
                    : "scale" === s
                      ? "scale-100"
                      : "bounce" === s
                        ? "scale-100"
                        : "opacity-100",
            }
          : {
              backdrop: "opacity-0",
              modal:
                "fade" === s
                  ? "opacity-0"
                  : "slide" === s
                    ? "translate-y-[-100%]"
                    : "scale" === s
                      ? "scale-0"
                      : "bounce" === s
                        ? "scale-0"
                        : "opacity-0",
            };
        return o
          ? (0, n.jsx)("div", {
              className: (0, ee.Z)(
                "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
                h.backdrop,
                m,
              ),
              style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
              onClick: (e) => {
                e.target === e.currentTarget && d && (null == r || r());
              },
              children: (0, n.jsxs)("div", {
                className: (0, ee.Z)(
                  "relative transform bg-white transition-all duration-300 ease-out",
                  h.modal,
                  "bounce" === s && "animate-bounce",
                  A,
                ),
                onClick: (e) => e.stopPropagation(),
                children: [
                  l &&
                    (0, n.jsx)("button", {
                      onClick: r,
                      className:
                        "absolute right-4 top-4 z-10 rounded-full p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600",
                      "aria-label": "close",
                      children: (0, n.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                  a,
                ],
              }),
            })
          : null;
      }
      var er = {
          src: "/_next/static/media/popup_failed.5fe4ebe1.png",
          height: 140,
          width: 140,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXH/aEj/ZEL/ln//hmz/aEf/ZUT/ZUT/aEf/aUf+sqH/YT7/aEP/XTpjqllHAAAADHRSTlMAEuj8/HiAnqbN/PcwnoCDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGNgYGBgZGQAAzYmJnYQk5WHhZmHg4GBgZOXmYuXiRHEYGEGM+BScMVQ7QAf5gDhy5Q9uQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        ea = {
          src: "/_next/static/media/vidmate_img.15baed9c.png",
          height: 886,
          width: 1454,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEWRiILOl5edgH/Ltrbc4uK/vL308vHT2trp7+yzhH7DwcHt/Pq7u7m8qKXCl5GXopyyh33BtbKib2zV1NT///+8vLuaoZOmtKi5vrXeubLVqpx4oc16AAAAE3RSTlM+2WaFgX3+VMZ0kWf63/5bU9VQAFtVUwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwFwQkCgBAAAMEldwq54v8PNYONPdzOWRhV+38mME3J+n5o05RfO4MQl3wKByiZAbHvEZNAAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        ed = r(4319),
        ei = r(6140);
      function el(e) {
        let { isOpen: t, fromUrl: r, onClose: a, reportData: d } = e,
          i = (0, N.useTranslations)("DownloadPanel");
        return (
          (0, c.useEffect)(() => {
            t && (0, ei.N)("large_file");
          }, [t]),
          (0, n.jsxs)(et, {
            isOpen: t,
            onClose: a,
            animation: "scale",
            size: "md",
            closeOnBackdropClick: !0,
            closeOnEscape: !0,
            showCloseButton: !1,
            className:
              "relative flex min-h-[5.66rem] w-[6.9rem] flex-col items-center rounded-[0.1rem] px-[0.2rem] py-[0.4rem] text-center text-[var(--text-primary)] shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)] md:w-[1108px] md:rounded-[8px] md:px-[16px] md:py-[30px]",
            children: [
              (0, n.jsx)(k.default, {
                alt: "close",
                src: ed.Z,
                width: 20,
                height: 20,
                className:
                  "absolute -top-[0.7rem] right-[0rem] h-[0.5rem] w-[0.5rem] cursor-pointer md:-top-[56px] md:right-[0px] md:h-[33px] md:w-[33px]",
                onClick: a,
                unoptimized: !0,
              }),
              (0, n.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "mb-[0.3rem] flex items-center text-[0.36rem] font-bold text-[#F43E3D] md:text-[40px]",
                    children: [
                      (0, n.jsx)(k.default, {
                        src: er,
                        alt: "notification icon",
                        unoptimized: !0,
                        className:
                          "mr-[0.2rem] inline-block h-[0.6rem] w-[0.6rem] object-contain md:mr-[20px] md:h-[70px] md:w-[70px]",
                      }),
                      (0, n.jsx)("span", {
                        children: i("vidmate_popup.title"),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "whitespace-pre text-center text-[0.26rem] text-[var(--text-secondary)] md:text-[24px] md:leading-tight",
                    children: i("vidmate_popup.desc"),
                  }),
                  (0, n.jsx)(k.default, {
                    alt: "vidmate app screenshot",
                    src: ea,
                    unoptimized: !0,
                    className:
                      "my-[0.3rem] w-[65%] object-contain md:my-[30px]",
                  }),
                  (0, n.jsx)("a", {
                    className:
                      "flex h-[0.9rem] w-[6.5rem] items-center justify-center rounded-[0.1rem] bg-[#F43E3D] text-center transition-all hover:bg-opacity-90 md:h-[92px] md:w-[814px] md:rounded-[8px]",
                    target: "_blank",
                    onClick: () => {
                      (0, ei.z)("large_file", d);
                    },
                    children: (0, n.jsx)("div", {
                      className:
                        "text-[0.34rem] font-bold text-[#ffffff] md:text-[26px]",
                      children: i("vidmate_popup.btn"),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var en = { src: "/_next/static/media/decoration.a1033cbe.png" },
        es = {
          src: "/_next/static/media/img_download_vdm.7f0d9495.png",
          height: 698,
          width: 1300,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX/6enw4OHGsKxgYFv/7Ozw6enuzs/+9/j/8fL9/v/qo5nftbXW1dD62NF/gID7m5HewcHuxrr6AAAACHRSTlP+/////////kgsYtwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAoSURBVHicBcGHAQAgCAOwokCL+/9rTcBq/UQR1FiRJORW+0oAcj5zfBB9AN8XidaQAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        em = {
          src: "/_next/static/media/pop_close.fd159dde.png",
          height: 38,
          width: 38,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEWcnJxMaXGcnJy/v7+ZmZmgoKCnp6du0tWEAAAABnRSTlNtAGIEBeifTBJOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nEWLMQ4AMAiEQO39/8mdajcSgIMzciAoAUlVkLaSsj+s2vjtFxWoAJmC1p4EAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        eA = {
          src: "/_next/static/media/popup-failed.822160b8.png",
          height: 340,
          width: 308,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAe1BMVEVMaXEKzf0SyPol1v5r7P//KygAzf8g3f9I4v/9PDtT5/9L3//7MDBBqdkazP6Ma41B5P//OTVQ6/8AlP//YWAAt/+M8v//dG0s1P/qcXMt0/9DjM073f8c1P8G3f8Z2P9l6v812v020PcFy/77LSsTpO//Q0LxXmKQkq+wEK/0AAAAInRSTlMApMjW8rbf/f6pYKiZ7Pz7/UPS/vz9ZvqF/ey9xPdLFLqUJ0CP3AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAENJREFUeJwFwQUCgCAQBMAlD7C7CwX9/wudQS9XdzqgHjld4kBiZrExQBpPnu8o8yZMnwbdXTG8C5jOnjYqAJWyNv0Bcu0DlTUm4v8AAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        },
        eo = {
          src: "/_next/static/media/popup-suc.d73ad025.png",
          height: 340,
          width: 308,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAeFBMVEU3t9wKx/8ey+1Z83xW6v863/436Pks0v8g1P1Q4v0R6Yxn8v+V9P842/927flz6/8W1f4Z0P0Cnf9k6f895P8Gxf927P8JyORT+k803Nwu8ZUMwv9I77t9874b65xU9YAM5ZEH4I4Ox/8RvOA/5J9a/3p9+ZhD+KRQIKnvAAAAInRSTlMF8Dn8/fP9/OOs1Mxjgun4z7b9sZp0Yeb6sPsqpv1B13nyzGe1kQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwFwQUCgCAAALEDkbK7u/7/QzfizLWVhCjJw9pKXGitaCBVxuhhQpny7p8ZfV5B8G4UohuXzwPsh19/WxYDU2W2CNIAAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        },
        ec = {
          src: "/_next/static/media/popup_video.3a2c16bc.png",
          height: 76,
          width: 76,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXEAw0YAw0YAxEYAw0UAukQAwUYA0EoAv0QAwUUAwkUAwEYAwEYA3lAA0UtzJCqxAAAADXRSTlMAyuKLuAwrkkz9dn9BH292ogAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJw1xkkOgDAMBMGeeMgCOP9/LrJE6lRwdEt2h0gpMyrBvfT8aYOR8t6ezFZe4CrwASTQASP+i4jBAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      let ep = { success: "task_download_succ", failed: "fail_popup" };
      function eu(e) {
        let { isOpen: t, status: r, youtube_info: a = {}, onClose: d } = e,
          i = (0, N.useTranslations)("downloadModal");
        return (
          (0, c.useEffect)(() => {
            !0 === t && (0, ei.N)(ep[r]);
          }, [t, r]),
          (0, n.jsxs)(et, {
            isOpen: t,
            animation: "scale",
            size: "md",
            closeOnBackdropClick: !0,
            closeOnEscape: !0,
            showCloseButton: !1,
            className:
              "flex min-h-[5.43rem] w-[6.9rem] flex-col items-center rounded-[0.1rem] px-[0.2rem] pb-[0.3rem] pt-[0.5rem] text-center text-[var(--text-primary)] shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)] md:min-h-[435px] md:w-[552px] md:rounded-[8px] md:px-[16px] md:py-[24px]",
            children: [
              (0, n.jsx)(k.default, {
                alt: "close",
                src: em,
                width: 20,
                height: 20,
                className:
                  "absolute right-[0.2rem] top-[0.2rem] h-[0.25rem] w-[0.25rem] cursor-pointer md:right-[8px] md:top-[8px] md:h-[20px] md:w-[20px]",
                onClick: d,
                unoptimized: !0,
              }),
              "success" === r
                ? (0, n.jsxs)("div", {
                    className:
                      "flex w-full flex-col items-center pt-[0.4rem] md:pt-[52px]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute -top-[0.9rem] left-1/2 h-[1.6rem] w-[4rem] -translate-x-1/2 md:top-[-60px] md:h-[116px] md:w-[300px]",
                        style: {
                          background: "url(".concat(
                            en.src,
                            ") no-repeat center/contain",
                          ),
                        },
                        children: (0, n.jsx)(k.default, {
                          src: eo,
                          alt: "success",
                          width: 340,
                          height: 340,
                          unoptimized: !0,
                          className: "z-10 h-full w-full object-contain",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "text-center text-[0.32rem] font-bold leading-[0.34rem] text-[var(--text-primary)] md:text-[24px] md:leading-[27px]",
                        children: i("download_success"),
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "mt-[0.24rem] text-center text-[0.24rem] text-[var(--text-primary)] md:mt-[24px] md:text-[24px] md:leading-[27px]",
                        children: i("download_success_desc"),
                      }),
                      (0, n.jsx)(k.default, {
                        src: es,
                        alt: "download guide",
                        unoptimized: !0,
                        className:
                          "my-[0.3rem] h-auto w-full object-contain md:my-[24px]",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex h-[0.92rem] w-full cursor-pointer items-center justify-center rounded-[0.1rem] bg-[#E72015] text-[0.32rem] font-bold text-[#ffffff] transition-all hover:bg-opacity-90 md:h-[74px] md:rounded-[8px] md:text-[24px]",
                        onClick: () => (0, ei.z)("task_download_succ"),
                        children: [
                          (0, n.jsx)(k.default, {
                            alt: "logo",
                            src: W.Z,
                            width: 20,
                            height: 20,
                            className:
                              "mr-[0.1rem] h-[0.5rem] w-[0.5rem] md:mr-[8px] md:h-[32px] md:w-[32px]",
                            unoptimized: !0,
                          }),
                          i("download"),
                        ],
                      }),
                    ],
                  })
                : (0, n.jsxs)("div", {
                    className:
                      "flex w-full flex-col items-center pt-[0.4rem] md:pt-[52px]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute -top-[0.9rem] left-1/2 h-[1.6rem] w-[4rem] -translate-x-1/2 md:top-[-60px] md:h-[116px] md:w-[300px]",
                        children: (0, n.jsx)(k.default, {
                          src: eA,
                          alt: "failed",
                          width: 340,
                          height: 340,
                          unoptimized: !0,
                          className: "z-10 h-full w-full object-contain",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex items-center justify-center text-center text-[0.3rem] font-bold leading-[0.34rem] md:text-[24px] md:leading-[27px]",
                        children: [
                          (0, n.jsx)(k.default, {
                            src: er,
                            width: 20,
                            height: 20,
                            alt: "failed",
                            unoptimized: !0,
                            className:
                              "mr-[0.1rem] h-[0.5rem] w-[0.5rem] md:mr-[8px] md:h-[28px] md:w-[28px]",
                          }),
                          (0, n.jsx)("div", {
                            className: "text-[#E72015]",
                            children: i("fail"),
                          }),
                        ],
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "my-[0.2rem] text-center text-[0.24rem] md:my-[16px] md:text-[22px] md:leading-[27px]",
                        children: i("download_failed_desc"),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex h-[0.92rem] w-full cursor-pointer items-center justify-center rounded-[0.1rem] bg-[#E72015] text-[0.32rem] font-bold text-[#ffffff] transition-all hover:bg-opacity-90 md:h-[74px] md:rounded-[8px] md:text-[24px]",
                        onClick: () => (0, ei.z)("fail_popup"),
                        children: [
                          (0, n.jsx)(k.default, {
                            alt: "logo",
                            src: W.Z,
                            width: 20,
                            height: 20,
                            className:
                              "mr-[0.1rem] h-[0.5rem] w-[0.5rem] md:mr-[8px] md:h-[32px] md:w-[32px]",
                            unoptimized: !0,
                          }),
                          i("download"),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "mt-[0.3rem] flex items-center justify-between rounded-[0.08rem] bg-[#F3F4F4] px-[0.2rem] py-[0.34rem] md:mt-[24px]",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "h-[1.66rem] w-[3rem] rounded-[0.1rem] md:h-[155px] md:w-[280px] md:rounded-[8px]",
                            style: {
                              background: "#000 url(".concat(
                                a.thumbnail,
                                ") no-repeat center/contain",
                              ),
                            },
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "ml-[0.2rem] flex w-[2.8rem] flex-col md:ml-[16px] md:w-[224px]",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "mb-[0.2rem] line-clamp-2 text-left text-[0.3rem] font-bold leading-[0.32rem] md:mb-[16px] md:text-[24px] md:leading-[26px]",
                                children: a.title,
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, n.jsx)(k.default, {
                                    alt: "type",
                                    src: ec,
                                    width: 20,
                                    height: 20,
                                    unoptimized: !0,
                                    className:
                                      "h-[0.5rem] w-[0.5rem] md:h-[20px] md:w-[20px]",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "ml-[0.1rem] text-left text-[0.24rem] leading-[0.28rem] md:ml-[8px] md:text-[19px] md:leading-[22px]",
                                    children: [a.type, "\xa0", a.quality],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          })
        );
      }
      var ex = {
          src: "/_next/static/media/vdm-logo@2x.044e4579.png",
          height: 352,
          width: 352,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX2Fw7+5eT0bmzuGhDvFBXeFhDrJRLjFRjSHBXzJhjxORPwSif8e377n5nuNCL8zc7+QA75sK75Tgz6tLfmPAz+GB3/Cg//RiT/JRn929r/eGT1W1j/OCL6GAV0344FAAAAF3RSTlOn/P6N+o2mqBX9jab8+Yz8/Pyq+RX//hOztWcAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVHicFcZJEoAgDATAYQ0Bdw0B1P9/07JPjZSPUuAuLLqp1paBMTOfA0AztzVPBOrUu33/+HX3HOFERHwLSIGIKKQPd7MDIBCSKJgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        eh = "/_next/static/media/icon_secure.960e79f0.png";
      function ew(e) {
        let { isOpen: t, onClose: r } = e,
          a = (0, N.useTranslations)("downloadModal");
        return (
          (0, c.useEffect)(() => {
            t && (0, ei.N)("fast_download");
          }, [t]),
          (0, n.jsxs)(et, {
            isOpen: t,
            animation: "scale",
            size: "md",
            closeOnBackdropClick: !0,
            closeOnEscape: !0,
            showCloseButton: !1,
            className:
              "flex min-h-[5.43rem] w-[6.9rem] flex-col items-center rounded-[0.1rem] px-[0.2rem] pb-[0.3rem] pt-[0.5rem] text-center text-[var(--text-primary)] shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)] md:min-h-[435px] md:w-[552px] md:rounded-[8px] md:px-[16px] md:py-[24px]",
            children: [
              (0, n.jsx)(k.default, {
                alt: "close",
                src: em,
                width: 20,
                height: 20,
                className:
                  "absolute right-[0.2rem] top-[0.2rem] h-[0.25rem] w-[0.25rem] cursor-pointer md:right-[8px] md:top-[8px] md:h-[20px] md:w-[20px]",
                onClick: r,
                unoptimized: !0,
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center pt-[0.4rem] md:pt-[52px]",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute -top-[0.9rem] left-1/2 h-[1.9rem] w-[4rem] -translate-x-1/2 md:top-[-60px] md:h-[116px] md:w-[300px]",
                    children: (0, n.jsx)(k.default, {
                      src: ex,
                      alt: "logo",
                      width: 340,
                      height: 340,
                      unoptimized: !0,
                      className: "z-10 h-full w-full object-contain",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mt-[0.5rem] whitespace-pre-wrap text-center text-[0.36rem] font-bold leading-[0.42rem] text-[var(--text-primary)] md:mt-[60px] md:text-[28px] md:leading-[34px]",
                    children: a("download_fast_with_vidmate"),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-[0.6rem] flex h-[0.92rem] w-full cursor-pointer items-center justify-center rounded-[0.1rem] bg-[#E72015] text-[0.32rem] font-bold text-[#ffffff] transition-all hover:bg-opacity-90 md:mt-[50px] md:h-[74px] md:rounded-[8px] md:text-[24px]",
                    onClick: () => {
                      (0, ei.z)("fast_download");
                    },
                    children: [
                      (0, n.jsx)(k.default, {
                        alt: "logo",
                        src: ex,
                        width: 20,
                        height: 20,
                        className:
                          "mr-[0.1rem] h-[0.5rem] w-[0.5rem] md:mr-[8px] md:h-[32px] md:w-[32px]",
                        unoptimized: !0,
                      }),
                      a("download"),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mt-[0.6rem] flex items-center justify-center gap-2 pl-[24px] text-[#00C853] md:mt-[24px]",
                    style: {
                      background: "url(".concat(eh, ") no-repeat left/contain"),
                    },
                    children: (0, n.jsx)("span", {
                      className: "text-[0.24rem] font-medium md:text-[16px]",
                      children: a("secure_verified"),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ef = {
        src: "/_next/static/media/rocket-g.28c2b468.png",
        height: 44,
        width: 108,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEXF+NTb/fPp/fcI7Gmc/9r/xUHRunX0/P32smH/3W4h9Yjy/PzL9bH7//2TIaQaAAAADXRSTlOD+bQh/hEFvD/VwL7pt9B8uQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGNlYGRnYmBm4ODkYeRlYeFigIkAAAYIAG6iyj8FAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 3,
      };
      function eg(e) {
        let {
            status: t,
            id: r,
            onChange: a,
            youtube_info: d,
            referer: i = "url",
          } = e,
          l = (0, N.useTranslations)("downloadModal"),
          [A, o] = (0, c.useState)(10),
          p = (0, c.useRef)(null),
          [u, x] = (0, c.useState)("running"),
          [h, w] = (0, c.useState)(""),
          [f, g] = (0, c.useState)(""),
          b = (0, c.useRef)("360P"),
          y = (0, c.useRef)(0),
          _ = (0, c.useRef)("download_owner"),
          E = (0, c.useRef)(!1),
          j = (0, c.useRef)(""),
          C = (0, L.X)(z.$8.RES_LIMIT),
          U = async () => {
            let e = performance.now();
            y.current = e;
            try {
              let { reqUrl: t, bodyStr: l } = (0, m.Ar)({
                  path: "media/download",
                  data: { request: r, no_encrypt: 1 },
                }),
                n = await fetch(t, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: l,
                }),
                A = await n.json();
              if ((null == A ? void 0 : A.status) !== 1) {
                let t = A.status,
                  r = "";
                (x("failed"),
                  2 === t
                    ? ((r = "exceed_failed"), a("exceed_failed"))
                    : ((r = "failed"), a("failed")),
                  (0, s.H)("video_download_popup_fail"),
                  (E.current = !0),
                  window.sendLog("task_download_fail", {
                    key_words: d.url,
                    download_type: "owner",
                    quality: d.quality,
                    f_type: d.type,
                    tm: ((performance.now() - e) / 1e3).toFixed(0),
                    search_type: (0, v.z8)(i),
                    referer: i,
                    file_size: d.size || 0,
                    duration: d.duration || 0,
                    fail_type: r,
                  }));
                return;
              }
              let c = A.data.task_id;
              j.current = c;
              let u = (0, m.Lu)({
                  path: "media/download_query",
                  data: {
                    task_id: c,
                    download_domain: "vidssave.com",
                    origin: "content_site",
                  },
                }),
                h = new EventSource(u.replace("api/", "sse/"));
              return (
                (h.onopen = () => {}),
                (h.onerror = (e) => {
                  try {
                    var t;
                    let r =
                      null == e
                        ? void 0
                        : null === (t = e.currentTarget) || void 0 === t
                          ? void 0
                          : t.readyState;
                    console.error("[SSE] error, readyState=", r, e);
                  } catch (t) {
                    console.error("[SSE] error", e);
                  }
                  h.close();
                }),
                h.addEventListener("success", (t) => {
                  let r = JSON.parse(t.data);
                  (w(r.download_link),
                    "sf" === r.download_type && (_.current = "download_sf"),
                    (0, s.H)("video_download_popup_download_show"),
                    window.sendLog("download_link", {
                      key_words: d.url,
                      download_type: _.current,
                      quality: d.quality,
                      f_type: d.type,
                      tm: ((performance.now() - e) / 1e3).toFixed(0),
                      search_type: (0, v.z8)(i),
                      referer: i,
                      file_size: d.size || 0,
                      duration: d.duration || 0,
                    }),
                    x("success"),
                    h.close());
                }),
                h.addEventListener("failed", (t) => {
                  (x("failed"),
                    a("failed"),
                    (0, s.H)("video_download_popup_fail"),
                    (E.current = !0),
                    window.sendLog("task_download_fail", {
                      key_words: d.url,
                      download_type: "owner",
                      quality: d.quality,
                      f_type: d.type,
                      tm: ((performance.now() - e) / 1e3).toFixed(0),
                      search_type: (0, v.z8)(i),
                      referer: i,
                      file_size: d.size || 0,
                      duration: d.duration || 0,
                    }),
                    h.close());
                }),
                h.addEventListener("running", (e) => {
                  x("running");
                  let t = JSON.parse(e.data);
                  o(t.progress < 10 ? 10 : t.progress);
                }),
                (p.current = h),
                h
              );
            } catch (e) {
              (console.error("Request init error:", e),
                x("failed"),
                a("failed"));
            }
          };
        function B() {
          ((0, s.H)("video_download_popup_download_click"),
            (E.current = !0),
            null == a || a("success"),
            C && O(d.quality) && I(),
            (function () {
              try {
                let e = localStorage.getItem(D),
                  t = V(),
                  r = { date: t, count: 0 };
                (e &&
                  ((r = JSON.parse(e)),
                  t !== r.date && (r = { date: t, count: 0 })),
                  (r.count += 1),
                  localStorage.setItem(D, JSON.stringify(r)));
              } catch (e) {
                console.error("Error recording download success:", e);
              }
            })(),
            window.sendLog("task_download_succ", {
              key_words: d.url,
              download_type: _.current,
              quality: d.quality,
              f_type: d.type,
              tm: ((performance.now() - y.current) / 1e3).toFixed(0),
              search_type: (0, v.z8)(i),
              download_url: h,
              referer: i,
              file_size: d.size || 0,
              duration: d.duration || 0,
            }));
        }
        return (
          (0, c.useEffect)(() => {
            if (t) (U(), (0, s.H)("video_download_popup_show"));
            else {
              var e;
              null === (e = p.current) || void 0 === e || e.close();
            }
            let r = "";
            return (
              "audio" === d.type
                ? window.ytbAudioLink &&
                  ((r = window.ytbAudioLink),
                  (b.current = window.ytbAudioLinkQuality))
                : window.ytbLink &&
                  ((r = window.ytbLink), (b.current = window.ytbLinkQuality)),
              g(r),
              () => {
                var e;
                null === (e = p.current) || void 0 === e || e.close();
              }
            );
          }, [t]),
          (0, n.jsxs)(et, {
            isOpen: t,
            onClose: () => {},
            animation: "scale",
            size: "md",
            closeOnBackdropClick: !0,
            closeOnEscape: !0,
            showCloseButton: !1,
            className:
              "relative flex min-h-[5.43rem] w-[6.9rem] flex-col items-center !overflow-visible rounded-[0.1rem] px-[0.2rem] pb-[0.3rem] pt-[0.5rem] text-center text-[var(--text-primary)] shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)] md:min-h-[435px] md:w-[552px] md:rounded-[8px] md:px-[16px] md:py-[24px]",
            children: [
              (0, n.jsx)(k.default, {
                alt: "close",
                src: em,
                width: 20,
                height: 20,
                className:
                  "absolute right-[0.2rem] top-[0.2rem] h-[0.25rem] w-[0.25rem] cursor-pointer md:right-[8px] md:top-[8px] md:h-[20px] md:w-[20px]",
                onClick: () => {
                  var e;
                  if (
                    (a("close"),
                    o(10),
                    null === (e = p.current) || void 0 === e || e.close(),
                    x("running"),
                    E.current)
                  )
                    E.current = !1;
                  else if (
                    (window.sendLog("task_download_cancel", {
                      key_words: d.url,
                      download_type: _.current,
                      quality: d.quality,
                      f_type: d.type,
                      tm: ((performance.now() - y.current) / 1e3).toFixed(0),
                      search_type: (0, v.z8)(i),
                      referer: i,
                      file_size: d.size || 0,
                      duration: d.duration || 0,
                    }),
                    j.current)
                  ) {
                    let { reqUrl: e, bodyStr: t } = (0, m.Ar)({
                      data: { task_id: j.current },
                      path: "media/download_cancel",
                    });
                    fetch(e, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: t,
                    })
                      .then((e) => {})
                      .catch((e) => {
                        console.error("[download_cancel] error:", e);
                      });
                  }
                },
                unoptimized: !0,
              }),
              "running" === u &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "text-center text-[0.3rem] font-bold leading-[0.34rem] md:text-[24px] md:leading-[27px]",
                      children:
                        "audio" === d.type ? l("title_music") : l("title"),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "mt-[0.2rem] text-center text-[0.26rem] leading-[0.31rem] md:mt-[16px] md:text-[20px] md:leading-[24px]",
                      children: l("do_not_close"),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mb-[0.3rem] mt-[0.6rem] flex items-center justify-between md:mb-[24px] md:mt-[48px]",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "h-[1.94rem] w-[3.5rem] rounded-[0.1rem] md:h-[155px] md:w-[280px] md:rounded-[8px]",
                          style: {
                            background: "#000 url(".concat(
                              d.thumbnail,
                              ") no-repeat center/contain",
                            ),
                          },
                          onClick: () => {
                            (x("failed"), a("failed"));
                          },
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "ml-[0.2rem] flex w-[2.8rem] flex-col md:ml-[16px] md:w-[224px]",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "mb-[0.2rem] line-clamp-2 text-left text-[0.3rem] font-bold leading-[0.32rem] md:mb-[16px] md:text-[24px] md:leading-[26px]",
                              children: d.title,
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "mb-[0.2rem] text-left text-[0.23rem] leading-[0.3rem] md:mb-[16px] md:text-[18px] md:leading-[24px]",
                              children: (0, v.ZC)(d.duration),
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, n.jsx)(k.default, {
                                  alt: "type",
                                  src: ec,
                                  width: 20,
                                  height: 20,
                                  className:
                                    "h-[0.5rem] w-[0.5rem] md:h-[20px] md:w-[20px]",
                                  unoptimized: !0,
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "ml-[0.1rem] text-left text-[0.24rem] leading-[0.28rem] md:ml-[8px] md:text-[19px] md:leading-[22px]",
                                  children: [d.type, "\xa0", d.quality],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "relative my-[0.1rem] h-[0.36rem] w-[6.5rem] overflow-hidden rounded-[0.2rem] bg-[#00000010] md:my-[8px] md:h-[29px] md:w-[520px] md:rounded-[8px]",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute inset-0 h-full w-full rounded-[0.2rem] md:rounded-[8px]",
                        }),
                        (0, n.jsx)("div", {
                          className: (0, ee.Z)(
                            "bar loading-green relative h-full rounded-full transition-all duration-500 ease-out md:rounded-[8px]",
                            100 === A ? "before:animate-none" : "",
                          ),
                          style: { width: "".concat(A, "%") },
                          children: (0, n.jsx)(k.default, {
                            alt: "rocket",
                            src: ef,
                            width: 20,
                            height: 20,
                            unoptimized: !0,
                            className: (0, ee.Z)(
                              "absolute -top-[0.1rem] right-[0.05rem] h-[0.56rem] w-[0.56rem] object-contain md:-top-[5px] md:right-[6px] md:h-[40px] md:w-[40px]",
                              100 === A ? "" : "animate-floating",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              "success" === u &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "text-center text-[0.3rem] font-bold leading-[0.34rem] md:text-[24px] md:leading-[27px]",
                      children:
                        "audio" === d.type ? l("ready_music") : l("ready"),
                    }),
                    h.includes("media/download_redirect")
                      ? (0, n.jsx)("a", {
                          href: h,
                          target: "_blank",
                          onClick: B,
                          className:
                            "mt-[0.5rem] flex h-[1rem] w-[3.5rem] animate-[oversize_1s_ease-in-out_infinite] cursor-pointer items-center justify-center rounded-[0.1rem] bg-[var(--brand-primary)] text-[0.36rem] font-bold text-[#ffffff] transition-all duration-300 hover:scale-110 hover:animate-none active:scale-90 md:mt-[40px] md:h-[80px] md:w-[280px] md:rounded-[8px] md:text-[29px]",
                          children: l("download"),
                        })
                      : (0, n.jsx)("a", {
                          href: h,
                          rel: "noreferrer",
                          referrerPolicy: "no-referrer",
                          target: "_blank",
                          onClick: B,
                          className:
                            "mt-[0.5rem] flex h-[1rem] w-[3.5rem] animate-[oversize_1s_ease-in-out_infinite] cursor-pointer items-center justify-center rounded-[0.1rem] bg-[var(--brand-primary)] text-[0.36rem] font-bold text-[#ffffff] transition-all duration-300 hover:scale-110 hover:animate-none active:scale-90 md:mt-[40px] md:h-[80px] md:w-[280px] md:rounded-[8px] md:text-[29px]",
                          children: l("download"),
                        }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-[0.3rem] flex items-center justify-between rounded-[0.08rem] bg-[#F3F4F4] px-[0.2rem] py-[0.34rem] md:mt-[24px] md:bg-transparent",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "h-[1.66rem] w-[3rem] rounded-[0.1rem] md:h-[155px] md:w-[280px] md:rounded-[8px]",
                          style: {
                            background: "#000 url(".concat(
                              d.thumbnail,
                              ") no-repeat center/contain",
                            ),
                          },
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "ml-[0.2rem] flex w-[2.8rem] flex-col md:ml-[16px] md:w-[224px]",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "mb-[0.2rem] line-clamp-2 text-left text-[0.3rem] font-bold leading-[0.32rem] md:mb-[16px] md:text-[24px] md:leading-[26px]",
                              children: d.title,
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "mb-[0.2rem] text-left text-[0.23rem] leading-[0.3rem] md:mb-[16px] md:text-[18px] md:leading-[24px]",
                              children: (0, v.ZC)(d.duration),
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, n.jsx)(k.default, {
                                  alt: "type",
                                  src: ec,
                                  width: 20,
                                  height: 20,
                                  unoptimized: !0,
                                  className:
                                    "h-[0.5rem] w-[0.5rem] md:h-[20px] md:w-[20px]",
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "ml-[0.1rem] text-left text-[0.24rem] leading-[0.28rem] md:ml-[8px] md:text-[19px] md:leading-[22px]",
                                  children: [d.type, "\xa0", d.quality],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (function () {
                let e = null;
                if (f) {
                  let t =
                    "audio" === d.type
                      ? l("fast_link_tips_music", { quality: b.current })
                      : l("fast_link_tips", { quality: b.current });
                  e = f.includes("media/download_redirect")
                    ? (0, n.jsx)("a", {
                        href: f,
                        target: "_blank",
                        className:
                          "mb-[0.1rem] mt-[0.2rem] block w-full text-center text-[0.24rem] leading-[0.28rem] text-[#0772FF] underline md:mt-[30px] md:text-[18px]",
                        children: t,
                      })
                    : (0, n.jsx)("a", {
                        href: f,
                        rel: "noreferrer",
                        referrerPolicy: "no-referrer",
                        target: "_blank",
                        className:
                          "mb-[0.1rem] mt-[0.2rem] block w-full text-center text-[0.24rem] leading-[0.28rem] text-[#0772FF] underline md:mt-[30px] md:text-[18px]",
                        children: t,
                      });
                }
                return e;
              })(),
            ],
          })
        );
      }
      function eb(e) {
        let { isOpen: t, onClose: r, reportData: a } = e,
          d = (0, N.useTranslations)("downloadModal"),
          { isDownloadLimitExceeded: i = !1 } = a || {};
        return (
          (0, c.useEffect)(() => {
            t && (0, ei.N)("high_quality", a);
          }, [t]),
          (0, n.jsxs)(et, {
            isOpen: t,
            animation: "scale",
            size: "md",
            closeOnBackdropClick: !0,
            closeOnEscape: !0,
            showCloseButton: !1,
            className:
              "flex min-h-[5.43rem] w-[6.9rem] flex-col items-center rounded-[0.1rem] px-[0.2rem] pb-[0.3rem] pt-[0.5rem] text-center text-[var(--text-primary)] shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)] md:min-h-[435px] md:w-[552px] md:rounded-[8px] md:px-[16px] md:py-[24px]",
            children: [
              (0, n.jsx)(k.default, {
                alt: "close",
                src: em,
                width: 20,
                height: 20,
                className:
                  "absolute right-[0.2rem] top-[0.2rem] z-10 h-[0.25rem] w-[0.25rem] cursor-pointer brightness-200 md:right-[8px] md:top-[8px] md:h-[20px] md:w-[20px]",
                onClick: r,
                unoptimized: !0,
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center pt-[3rem] md:pt-[52px]",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute left-0 top-0 h-[3.8rem] w-full md:h-[160px]",
                    style: {
                      background: "url(".concat(
                        "/_next/static/media/hd-pop-bg.6a048e11.png",
                        ") no-repeat center/cover",
                      ),
                    },
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mt-[0.5rem] whitespace-pre-wrap text-center text-[0.36rem] font-bold leading-[0.42rem] text-[var(--text-primary)] md:mt-[120px] md:text-[28px] md:leading-[34px]",
                    children: d(
                      i
                        ? "download_day_limit_exceeded"
                        : "download_best_quality",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-[0.6rem] flex h-[0.92rem] w-full cursor-pointer items-center justify-center rounded-[0.1rem] bg-[#E72015] text-[0.32rem] font-bold text-[#ffffff] transition-all hover:bg-opacity-90 md:mt-[50px] md:h-[74px] md:rounded-[8px] md:text-[24px]",
                    onClick: () => (0, ei.z)("high_quality", a),
                    children: [
                      (0, n.jsx)(k.default, {
                        alt: "logo",
                        src: ex,
                        width: 20,
                        height: 20,
                        className:
                          "mr-[0.1rem] h-[0.5rem] w-[0.5rem] md:mr-[8px] md:h-[32px] md:w-[32px]",
                        unoptimized: !0,
                      }),
                      d("download"),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mt-[0.6rem] flex items-center justify-center gap-2 pl-[24px] text-[#00C853] md:mt-[24px]",
                    style: {
                      background: "url(".concat(eh, ") no-repeat left/contain"),
                    },
                    children: (0, n.jsx)("span", {
                      className: "text-[0.24rem] font-medium md:text-[16px]",
                      children: d("secure_verified"),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      (((d = l || (l = {})).Success = "success"),
        (d.Failed = "failed"),
        (d.ExceedFailed = "exceed_failed"),
        (d.Running = "running"));
      var ey = {
          src: "/_next/static/media/download_ytb.473e6e52.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACalcoGAAAACXRSTlMAHQnuPKH6jg3f6JTjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nCXISQ4AIAzDQDfpwv9fjAq+jGRAVWI73WdV2LEr3e3clf5CPjU1UyOIFxcVjQCXFz7gjwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        e_ = {
          src: "/_next/static/media/full_screen.e5a82006.png",
          height: 48,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlMB0xfFDfqjJVpXC9kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAtSURBVHicNYsxEgAgCMPSAvr/H3uoZEmHlCg5VYGckBaLy1ezR3qjY4Mt5n4ADx4AZ29DCBsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ev = {
          src: "/_next/static/media/gesture.f22cccb6.png",
          height: 118,
          width: 88,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEUAOo0AotUAb7oAyucA6/YA2vAAjMwAl88A+v0AN50AyOgA4vIAotYAm9QAgcQAud8AvOMAtNwA/v8AyesA2vmUwQ+dAAAAEnRSTlMB1Tn0/P5Yhfwb1PnCZ53xu+aaksrpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nBXFRxLAMAgAsXUFXBOc/781Y10ENXDNZLd6ghiySvkG7WT1Ruya/QFxdQF7044/IXUBcvCdcEMAAAAASUVORK5CYII=",
          blurWidth: 6,
          blurHeight: 8,
        },
        eE = {
          src: "/_next/static/media/more.95182415.png",
          height: 45,
          width: 11,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAMAAADk895wAAAAD1BMVEX///////////////////+Rd1MVAAAABXRSTlO2ytoCA289drkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAbSURBVHicY2BiYmBgYGBhZmBkBCFmZhCXiQkAAUkAGtESv54AAAAASUVORK5CYII=",
          blurWidth: 2,
          blurHeight: 8,
        },
        ej = {
          src: "/_next/static/media/pause.1c0321bf.png",
          height: 43,
          width: 32,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAElBMVEX///////9MaXH///////////9w+/2zAAAABnRSTlP6rQCN1MzMc2CaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGNgZWZiYmZlYGBkYmJkIIZiAWlgAQAIgQBLpOtXdAAAAABJRU5ErkJggg==",
          blurWidth: 6,
          blurHeight: 8,
        },
        eN = {
          src: "/_next/static/media/play.4208ec66.png",
          height: 222,
          width: 224,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////////////9MaXH////+/v7///////+ucYM6AAAACXRSTlNJVTQMAOYOccKNuUqgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nB3LwRHAMAyEQDhLcvqvOCPzXqgJZIpBkCF6wQB2Xzb7E4gP5WEX19n91A8S6QB+++jEpAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        ek = {
          src: "/_next/static/media/popup.9f0beec0.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzZU39AAAAD3RSTlObqACMC1guFsH8QVDWHGFhUvehAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nDXLNw7AMBDEQK50Qcn+/3OFA+yp2JD2wSl6UWSapcCabV9UxJxHKJ41hsSmF+ffLyEiAPis5b2RAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        eC = {
          src: "/_next/static/media/popup_download.186800e2.png",
          height: 70,
          width: 64,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAALVBMVEUAvkIAw0UAwUYAwkUAxEcAw0UAwkUAwkYAwkYAwEYAxEcAtkgAwkYAzkoA3lAzhd5GAAAADXRSTlMBXnWENNX7wdJFsxXrnGgsGgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJxjYGBg5GVhAAEEzQmm2Nh4wAJcfMxgcW5GEMnEzAxCDOysHKwcrOwAFZAAv45C+TAAAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        },
        eU = {
          src: "/_next/static/media/progress_bar.08609e14.png",
          height: 10,
          width: 1198,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAA1BMVEX///+nxBvIAAAAAXRSTlMxETjYXAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAtJREFUeJxjYIACAAAJAAH7UripAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        },
        eB = {
          src: "/_next/static/media/sound_ytb.95ddd124.png",
          height: 52,
          width: 52,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX///////////////////////////////////////////////////////////+g0jAFAAAADnRSTlMB7t5AOAxnIpjDecDGEqlATfkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicNYtbCsAgEMSyb9uq9z+uLNL5CiQDEKEJUHO5GJkqbu+H7K32uKA/VI2rIEZ03Ov7ASoMASFcXLPvAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        eM = {
          src: "/_next/static/media/speed.267562c2.png",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUUeIgAAAACXRSTlMBQieLWHkOFsDi/JgKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nD2KyQkAMBCEnNkr/VccFkJ+ikI7IwGkdgVYDFSi4QQO1A9++vPu6xcWcQCZF8tQ3gAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        };
      function eR(e) {
        let { ytbLink: t, logObj: r, onClose: a, onDownload: d } = e,
          i = (0, N.useTranslations)("downloadModal"),
          [l, s] = (0, c.useState)(0);
        (0, c.useEffect)(() => {
          let e = setInterval(() => {
            s((e) => (0 === e ? 1 : 0));
          }, 2e3);
          return () => clearInterval(e);
        }, []);
        let m = () => {
          a();
        };
        return (0, n.jsxs)(et, {
          isOpen: !0,
          onClose: m,
          animation: "scale",
          size: "md",
          closeOnBackdropClick: !0,
          closeOnEscape: !0,
          showCloseButton: !1,
          overlayClassname: "!z-30",
          className:
            "flex min-h-[5.66rem] w-[6.9rem] flex-col items-center rounded-[0.1rem] px-[0.2rem] py-[0.4rem] text-center text-[var(--text-primary)] shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)] md:min-h-[563px] md:w-[975px] md:rounded-[8px] md:px-[16px] md:py-[60px]",
          children: [
            (0, n.jsx)(k.default, {
              alt: "close",
              src: ed.Z,
              width: 20,
              height: 20,
              className:
                "absolute -top-[0.7rem] right-[0rem] h-[0.5rem] w-[0.5rem] cursor-pointer md:-top-[56px] md:right-[0px] md:h-[33px] md:w-[33px]",
              onClick: m,
              unoptimized: !0,
            }),
            (function () {
              let e = (0, n.jsxs)("div", {
                  className: "relative flex h-full items-center justify-center",
                  children: [
                    (0, n.jsx)(k.default, {
                      alt: "play icon",
                      src: eN,
                      width: 102,
                      height: 102,
                      className:
                        "h-[1.1rem] w-[1.1rem] md:h-[102px] md:w-[102px]",
                      unoptimized: !0,
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "absolute bottom-[0.22rem] left-[0.28rem] pr-[0.28rem] md:bottom-[20px] md:left-[26px] md:pr-[26px]",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "mb-[0.2rem] flex items-center justify-between md:mb-[20px]",
                          children: [
                            (0, n.jsx)(k.default, {
                              alt: "pause icon",
                              src: ej,
                              width: 14,
                              height: 20,
                              className:
                                "h-[0.21rem] w-[0.16rem] md:h-[20px] md:w-[14px]",
                              unoptimized: !0,
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "relative flex items-center justify-start gap-[0.35rem] md:gap-[31px]",
                              children: [
                                (0, n.jsx)(k.default, {
                                  alt: "sound icon",
                                  src: eB,
                                  width: 24,
                                  height: 24,
                                  className:
                                    "h-[0.25rem] w-[0.25rem] md:h-[24px] md:w-[24px]",
                                  unoptimized: !0,
                                }),
                                (0, n.jsx)(k.default, {
                                  alt: "full screen icon",
                                  src: e_,
                                  width: 23,
                                  height: 22,
                                  className:
                                    "h-[0.24rem] w-[0.25rem] md:h-[22px] md:w-[23px]",
                                  unoptimized: !0,
                                }),
                                (0, n.jsx)(k.default, {
                                  alt: "more icon",
                                  src: eE,
                                  width: 5,
                                  height: 20,
                                  className:
                                    "h-[0.22rem] w-[0.05rem] md:h-[20px] md:w-[5px]",
                                  unoptimized: !0,
                                }),
                                (0, n.jsx)(k.default, {
                                  alt: "gesture icon",
                                  src: ev,
                                  width: 38,
                                  height: 45,
                                  className:
                                    "gesture-shake absolute right-[-0.33rem] top-[0.13rem] h-[0.49rem] w-[0.41rem] md:right-[-33px] md:top-[13px] md:h-[45px] md:w-[38px]",
                                  unoptimized: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)(k.default, {
                          alt: "progress bar",
                          src: eU,
                          width: 737,
                          height: 6,
                          className:
                            "h-[0.05rem] w-[6rem] md:h-[6px] md:w-[737px]",
                          unoptimized: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                t = (0, n.jsxs)("div", {
                  className: "relative flex h-full items-center justify-center",
                  children: [
                    (0, n.jsx)(k.default, {
                      alt: "play icon",
                      src: eN,
                      width: 102,
                      height: 102,
                      className:
                        "h-[1.1rem] w-[1.1rem] md:h-[102px] md:w-[102px]",
                      unoptimized: !0,
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "absolute bottom-[0.22rem] left-[0.28rem] pr-[0.28rem] md:bottom-[20px] md:left-[26px] md:pr-[26px]",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "mb-[0.2rem] flex items-end justify-between md:mb-[20px]",
                          children: [
                            (0, n.jsx)(k.default, {
                              alt: "pause icon",
                              src: ej,
                              width: 14,
                              height: 20,
                              className:
                                "h-[0.21rem] w-[0.16rem] md:h-[20px] md:w-[14px]",
                              unoptimized: !0,
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "relative h-[1.46rem] w-[2.06rem] rounded-[0.11rem] bg-[#ffffff] md:h-[135px] md:w-[191px] md:rounded-[10px]",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex h-[0.49rem] w-[2.06rem] items-center justify-start gap-[0.13rem] rounded-[0.11rem] bg-[#D9FCFF] px-[0.17rem] md:h-[45px] md:w-[191px] md:gap-[12px] md:rounded-[10px] md:px-[16px]",
                                  children: [
                                    (0, n.jsx)(k.default, {
                                      alt: "download ytb icon",
                                      src: ey,
                                      width: 18,
                                      height: 18,
                                      className:
                                        "h-[0.2rem] w-[0.2rem] md:h-[18px] md:w-[18px]",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "h-[0.08rem] w-[1.24rem] rounded-[0.04rem] bg-[#EDEDED] md:h-[8px] md:w-[115px] md:rounded-[4px]",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex h-[0.49rem] w-[2.06rem] items-center justify-start gap-[0.13rem] rounded-[0.11rem] bg-[#ffffff] px-[0.17rem] md:h-[45px] md:w-[191px] md:gap-[12px] md:rounded-[10px] md:px-[16px]",
                                  children: [
                                    (0, n.jsx)(k.default, {
                                      alt: "speed icon",
                                      src: eM,
                                      width: 18,
                                      height: 18,
                                      className:
                                        "h-[0.2rem] w-[0.2rem] md:h-[18px] md:w-[18px]",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "h-[0.08rem] w-[1.24rem] rounded-[0.04rem] bg-[#EDEDED] md:h-[8px] md:w-[115px] md:rounded-[4px]",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex h-[0.49rem] w-[2.06rem] items-center justify-start gap-[0.13rem] rounded-[0.11rem] bg-[#ffffff] px-[0.17rem] md:h-[45px] md:w-[191px] md:gap-[12px] md:rounded-[10px] md:px-[16px]",
                                  children: [
                                    (0, n.jsx)(k.default, {
                                      alt: "popup icon",
                                      src: ek,
                                      width: 18,
                                      height: 18,
                                      className:
                                        "h-[0.2rem] w-[0.2rem] md:h-[18px] md:w-[18px]",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "h-[0.08rem] w-[1.24rem] rounded-[0.04rem] bg-[#EDEDED] md:h-[8px] md:w-[115px] md:rounded-[4px]",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)(k.default, {
                                  alt: "gesture icon",
                                  src: ev,
                                  width: 38,
                                  height: 45,
                                  className:
                                    "gesture-shake absolute left-[0.26rem] top-[0.24rem] h-[0.49rem] w-[0.41rem] md:left-[24px] md:top-[20px] md:h-[45px] md:w-[38px]",
                                  unoptimized: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)(k.default, {
                          alt: "progress bar",
                          src: eU,
                          width: 737,
                          height: 6,
                          className:
                            "h-[0.05rem] w-[6rem] md:h-[6px] md:w-[737px]",
                          unoptimized: !0,
                        }),
                      ],
                    }),
                  ],
                });
              return (0, n.jsx)("div", {
                className:
                  "h-[3.66rem] w-[6.5rem] rounded-[0.13rem] md:h-[338px] md:w-[600px] md:rounded-[12px]",
                style: {
                  background:
                    "linear-gradient( 134deg, #0090E0 0%, #01C5C9 100%)",
                },
                children: 0 === l ? e : t,
              });
            })(),
            (0, n.jsxs)("a", {
              href: t,
              rel: "noreferrer",
              referrerPolicy: "no-referrer",
              target: "_blank",
              className:
                "mt-[0.3rem] flex h-[0.9rem] w-[6.5rem] items-center justify-center rounded-[0.1rem] border-[0.03rem] border-solid border-[var(--brand-primary)] text-center text-[var(--brand-primary)] md:mt-[38px] md:h-[68px] md:w-[488px] md:rounded-[8px] md:border-[2px]",
              onClick: () => {
                (window.sendLog("task_download_succ", r), null == d || d());
              },
              children: [
                (0, n.jsx)(k.default, {
                  alt: "download icon",
                  src: eC,
                  width: 24,
                  height: 26,
                  className:
                    "mr-[0.16rem] h-[0.35rem] w-[0.32rem] md:mr-[15px] md:h-[26px] md:w-[24px]",
                  unoptimized: !0,
                }),
                (0, n.jsx)("div", {
                  className:
                    "text-[0.34rem] font-bold text-[var(--brand-primary)] md:text-[26px]",
                  children: i("download"),
                }),
              ],
            }),
          ],
        });
      }
      function eL(e) {
        var t, r, a;
        let {
            downloadObj: d,
            setSaveModalOpen: s,
            isAnalysis: A = !1,
            referer: o = "url",
          } = e,
          p = (0, N.useTranslations)("DownloadPanel"),
          u = (0, N.useLocale)(),
          x = (0, K.jD)(),
          h = (0, P.LA)(x || "/", u),
          w = (0, L.X)(z.$8.FAST_DOWNLOAD),
          f = (0, L.X)(z.$8.RES_LIMIT),
          {
            thumbnail: g,
            title: b,
            duration: y,
            videoList: E = [],
            audioList: j = [],
            pictureList: C = [],
            user_url: U,
          } = d,
          [B, M] = (0, c.useState)(!1),
          [S, F] = (0, c.useState)(!1),
          [ee, et] = (0, c.useState)(!1),
          er = (0, c.useRef)(null),
          [ea, ed] = (0, c.useState)({ status: !1, id: "", youtube_info: {} }),
          [ei, en] = (0, c.useState)({
            showDialog: !1,
            ytbLink: "",
            logObj: {},
          }),
          [es, em] = (0, c.useState)(!1),
          [eA, eo] = (0, c.useState)(!1),
          [ec, ep] = (0, c.useState)(null),
          [ex, eh] = (0, c.useState)({ show: !1, data: {} }),
          [ef, ey] = (0, c.useState)({
            show: !1,
            status: "success",
            youtubeInfo: {},
          }),
          [e_, ev] = (0, c.useState)(!1),
          eE = () => {
            h ||
              (0, R.J)("/23067704912/vidssave.com/vidssave.com-inter-012901", {
                storageKey: "gpt_interstitial_last_shown_at",
                cooldownMs: 36e5,
                onFail: () => {
                  ev(!0);
                },
              });
          };
        ((0, c.useEffect)(() => {
          M(
            !(
              (j && j.length > 5) ||
              (E && E.length > 5) ||
              (C && C.length > 5)
            ),
          );
        }, [b, j, E, C]),
          (0, c.useEffect)(() => {
            F(!1);
          }, [b]),
          (0, c.useEffect)(() => {
            let e = () => {
                if (S) {
                  et(!0);
                  return;
                }
                let e = er.current;
                e && et(e.scrollHeight > e.clientHeight + 1);
              },
              t = window.requestAnimationFrame(e);
            return (
              window.addEventListener("resize", e),
              () => {
                (window.cancelAnimationFrame(t),
                  window.removeEventListener("resize", e));
              }
            );
          }, [b, S]),
          (0, c.useEffect)(() => {
            var e;
            let t =
              null === (e = document.getElementById("url-input-wrapper")) ||
              void 0 === e
                ? void 0
                : e.parentElement;
            if (t) {
              let e = t.getBoundingClientRect().top + window.scrollY - 8;
              window.scrollTo({ top: e, behavior: "smooth" });
            }
          }, [U]));
        let ej = (e) => e > _.cM,
          eN = (e, t) => {
            (em(!0), ep({ item: e, format: t }));
          },
          ek = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            ey({ show: !0, status: e, youtubeInfo: t });
          },
          eC = function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!e || 0 === e.length) return null;
            let a = "",
              { user_url: i } = d;
            i.includes("tiktok.com") &&
              "video" === t &&
              "MP4" === r &&
              (a = p("watermark_tips"));
            let l = B ? e : e.slice(0, 5),
              s = {
                audio: p("audio"),
                video: p("video"),
                picture: p("picture"),
              };
            return (0, n.jsxs)(
              "div",
              {
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex items-center py-[0.16rem] ps-[0.2rem] text-[0.32rem] font-bold text-[var(--text-primary)] md:py-[16px] md:ps-[20px] md:text-[24px]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative me-[0.1rem] h-[0.34rem] w-[0.34rem] md:mr-[10px] md:h-[32px] md:w-[32px]",
                        children: (0, n.jsx)(k.default, {
                          src: { audio: X, video: H, picture: J }[t].src,
                          alt: "".concat(t, " icon"),
                          unoptimized: !0,
                          fill: !0,
                          className: "object-contain",
                        }),
                      }),
                      (0, n.jsx)("span", { children: s[t] }),
                      a
                        ? (0, n.jsx)("span", {
                            className:
                              "ml-[0.1rem] text-[0.24rem] text-[var(--text-primary)] md:ml-[10px] md:text-[16px] rtl:ml-auto rtl:mr-[0.1rem] rtl:md:mr-[10px]",
                            children: a,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)("ul", {
                    className:
                      "min-h-[0.8rem] w-[6.89rem] border-t border-[--border-light] font-bold md:min-h-[100px] md:w-[700px]",
                    children: l.map((e, a) => {
                      let d = r || e.format || "MP4";
                      return eU(e, d, a, t);
                    }),
                  }),
                ],
              },
              t,
            );
          },
          eU = (e, t, r, a) => {
            let {
                quality: l,
                size: s,
                download_url: A,
                isFast: c,
                download_mode: u,
                type: x,
              } = e,
              h = (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "relative mr-[0.1rem] h-[0.44rem] w-[0.44rem] md:mr-[10px] md:h-[33px] md:w-[33px] rtl:ml-[0.1rem] rtl:mr-0 md:rtl:ml-[10px]",
                    children: (0, n.jsx)(k.default, {
                      src: Q.Z,
                      alt: "download icon",
                      fill: !0,
                      unoptimized: !0,
                      className: "object-contain",
                    }),
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[0.28rem] text-[var(--brand-primary)] md:text-[18px]",
                    children: p("download"),
                  }),
                ],
              }),
              w =
                c &&
                (0, n.jsxs)("div", {
                  className:
                    "absolute top-[-0.02rem] flex min-w-[0.85rem] items-center justify-center bg-[var(--brand-primary)] px-[0.06rem] py-[0.01rem] text-[0.16rem] leading-[0.2rem] text-white md:top-[-2px] md:min-w-[65px] md:px-[6px] md:py-[1px] md:text-[12px] md:leading-[14px] ltr:left-auto ltr:right-[-0.02rem] ltr:rounded-bl-[0.08rem] ltr:rounded-tr-[0.08rem] md:ltr:rounded-bl-[8px] md:ltr:rounded-tr-[10px] rtl:left-[-0.02rem] rtl:right-auto rtl:rounded-br-[0.08rem] rtl:rounded-tl-[0.08rem] md:rtl:rounded-br-[8px] md:rtl:rounded-tl-[10px]",
                  children: [
                    (0, n.jsx)("span", {
                      className:
                        "relative h-[0.14rem] w-[0.14rem] md:h-[10px] md:w-[10px] ltr:mr-[0.03rem] md:ltr:mr-[3px] rtl:ml-[0.03rem] md:rtl:ml-[3px]",
                      children: (0, n.jsx)(k.default, {
                        src: G,
                        alt: "fast",
                        fill: !0,
                        unoptimized: !0,
                        className: "object-contain",
                      }),
                    }),
                    (0, n.jsx)("span", { children: p("fast") }),
                  ],
                }),
              _ = A && "direct" === u,
              E = A && c,
              j = !_ && !E && ej(s),
              N = (0, n.jsxs)("div", {
                className:
                  "relative flex h-[0.7rem] w-[2.19rem] cursor-pointer items-center justify-center rounded-[0.08rem] border-[0.03rem] border-solid border-[var(--brand-primary)] hover:bg-[#D4FBFF] md:h-[58px] md:w-[164px] md:rounded-[10px] md:border-[3px]",
                onClick: _
                  ? () => {
                      let e = T(l);
                      if (f && e !== i.NONE) {
                        eh({
                          show: !0,
                          data: {
                            key_words: U,
                            quality: l,
                            f_type: x,
                            search_type: (0, v.z8)(o),
                            referer: o,
                          },
                        });
                        return;
                      }
                      (f && O(l) && I(),
                        (0, R.RL)(),
                        eE(),
                        (0, m.Sv)(A),
                        window.sendLog("task_add", {
                          key_words: U,
                          download_type: "cache",
                          quality: l,
                          f_type: x,
                          search_type: (0, v.z8)(o),
                          download_url: A,
                          referer: o,
                          file_size: s,
                          duration: d.duration,
                        }),
                        window.sendLog("task_download_succ", {
                          key_words: U,
                          download_type: "cache",
                          quality: l,
                          f_type: x,
                          tm: 0,
                          search_type: (0, v.z8)(o),
                          download_url: A,
                          referer: o,
                          file_size: s,
                          duration: d.duration,
                        }));
                    }
                  : () => {
                      eE();
                      let r = T(l);
                      if (f && r !== i.NONE) {
                        eh({
                          show: !0,
                          data: {
                            quality: l,
                            f_type: x,
                            referer: o,
                            key_words: U,
                            search_type: (0, v.z8)(o),
                          },
                        });
                        return;
                      }
                      if (E)
                        ((0, R.RL)(),
                          window.sendLog("task_add", {
                            key_words: U,
                            download_type: "ytb",
                            quality: l,
                            f_type: x,
                            search_type: (0, v.z8)(o),
                            download_url: A,
                            referer: o,
                            file_size: s,
                            duration: d.duration,
                          }),
                          en({
                            showDialog: !0,
                            ytbLink: A,
                            logObj: {
                              key_words: U,
                              download_type: "ytb",
                              quality: l,
                              f_type: x,
                              tm: 0,
                              search_type: (0, v.z8)(o),
                              download_url: A,
                              referer: o,
                              file_size: s,
                              duration: d.duration,
                            },
                          }));
                      else if (j)
                        (eN(e, t),
                          window.sendLog("open_app_download", {
                            key_words: U,
                            f_type: x,
                            search_type: (0, v.z8)(o),
                            download_url: A,
                            referer: o,
                            file_size: s,
                            duration: d.duration,
                          }));
                      else if (!_) {
                        if (
                          (function () {
                            let e = 0;
                            try {
                              let t = localStorage.getItem(D);
                              if (t) {
                                let r = JSON.parse(t);
                                r.date === V() && (e = r.count || 0);
                              }
                            } catch (e) {
                              console.error(
                                "Error checking download success count:",
                                e,
                              );
                            }
                            return e >= 10;
                          })()
                        ) {
                          eh({
                            show: !0,
                            data: {
                              isDownloadLimitExceeded: !0,
                              quality: l,
                              f_type: x,
                              referer: o,
                              key_words: U,
                              search_type: (0, v.z8)(o),
                            },
                          });
                          return;
                        }
                        ((0, R.RL)(),
                          window.sendLog("task_add", {
                            key_words: U,
                            download_type: "download",
                            quality: l,
                            f_type: x,
                            search_type: (0, v.z8)(o),
                            download_url: A,
                            referer: o,
                            file_size: s,
                            duration: d.duration,
                          }),
                          ed({
                            status: !0,
                            id: e.resource_content,
                            youtube_info: {
                              thumbnail: g,
                              title: b,
                              duration: y,
                              type: e.type,
                              quality: e.quality,
                              size: e.size,
                              url: U,
                            },
                          }));
                      }
                    },
                children: [w, h],
              });
            return (0, n.jsxs)(
              "li",
              {
                className:
                  "flex h-[1rem] items-center justify-between border-b-[0.01rem] border-solid border-[--border-light] text-[0.26rem] text-[#383838] md:h-[100px] md:border-b-[1px] md:text-[20px]",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "ml-[0.24rem] flex items-center justify-start md:ml-[20px] rtl:ml-0 rtl:mr-[0.24rem] md:rtl:mr-[18px]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "mr-[0.16rem] h-[0.32rem] w-[0.58rem] rounded-[0.08rem] bg-[#FFAF32] text-center text-[0.2rem] leading-[0.32rem] text-[#ffffff] md:mr-[12px] md:h-[32px] md:w-[51px] md:rounded-[8px] md:text-[20px] md:leading-[28px] rtl:ml-[0.16rem] rtl:mr-0 md:rtl:ml-[12px]",
                        children: t,
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "text-left leading-[0.32rem] md:w-[90px] md:leading-[23px]",
                        children: l || "-",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "ml-[0.24rem] flex w-[2rem] items-center justify-start text-left md:ml-[10px] md:w-[180px] rtl:ml-0 rtl:mr-[0.24rem] md:rtl:mr-[10px]",
                        children: s > 0 ? (0, v.td)(s) : "",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mr-[0.24rem] flex items-center justify-start md:mr-[26px] rtl:ml-[0.24rem] rtl:mr-0 md:rtl:ml-[26px]",
                    children: N,
                  }),
                ],
              },
              "".concat(a, "_").concat(r),
            );
          },
          eB = /(?:youtube\.com|youtu\.be)/i.test(U || "")
            ? (0, m.eu)(U || "")
            : "";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("section", {
              className:
                "mx-auto mt-[0.1rem] w-[7.3rem] rounded-[0.08rem] border-[0.04rem] border-solid border-[--border-medium] bg-[#ffffff] md:mt-[36px] md:w-[1120px] md:rounded-[8px] md:border-[4px]",
              style: { boxShadow: "0px 3px 3px 0px rgba(33, 33, 33, 0.2)" },
              children: (0, n.jsxs)("div", {
                className:
                  "p-[0.2rem] md:flex md:items-start md:justify-start md:p-0",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "mb-[0.22rem] md:mb-[15px] md:ml-[29px] md:mr-[29px] md:mt-[23px] md:w-[354px]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "mb-[0.2rem] h-[3.88rem] w-[6.89rem] bg-[#000000] md:mb-[21px] md:h-[197px] md:w-[354px]",
                        children: eB
                          ? (0, n.jsx)("iframe", {
                              src: eB,
                              title: b || "youtube preview",
                              allow:
                                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                              referrerPolicy: "strict-origin-when-cross-origin",
                              allowFullScreen: !0,
                              className:
                                "absolute h-[3.88rem] w-[6.89rem] border-0 md:h-[197px] md:w-[354px]",
                            })
                          : (0, n.jsx)("img", {
                              src: g,
                              alt: "video thumbnail",
                              onError: (e) => {
                                e.currentTarget.src = q.Z.src;
                              },
                              className:
                                "absolute h-[3.88rem] w-[6.89rem] object-contain md:h-[197px] md:w-[354px]",
                            }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex w-[6.89rem] items-center justify-between text-left leading-[0.3rem] text-[var(--text-primary)] md:hidden",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "w-[5rem] truncate break-words text-[0.24rem] font-bold",
                            children: b,
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex items-center gap-[0.06rem] rounded-[0.06rem] bg-[var(--progress-bar)] px-[0.14rem] py-[0.06rem] text-[0.24rem] font-medium leading-[0.32rem]",
                            children: [
                              (0, n.jsx)($.Z, {
                                className: "h-[0.24rem] w-[0.24rem]",
                              }),
                              (0, n.jsx)("span", { children: (0, v.ZC)(y) }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "hidden w-[355px] text-left leading-[30px] md:block",
                        children: [
                          (0, n.jsx)("div", {
                            ref: er,
                            className: "".concat(
                              S ? "" : "line-clamp-3",
                              " w-full break-words text-[18px]",
                            ),
                            children: b,
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "mt-[8px] inline-flex items-center gap-[6px] rounded-[6px] bg-[var(--progress-bar)] px-[14px] py-[6px] text-[24px] font-medium",
                                children: [
                                  (0, n.jsx)($.Z, {
                                    className: "h-[22px] w-[22px]",
                                  }),
                                  (0, n.jsx)("span", {
                                    children: (0, v.ZC)(y),
                                  }),
                                ],
                              }),
                              ee
                                ? (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: () => F((e) => !e),
                                    className:
                                      "mt-[6px] text-[14px] font-medium leading-[20px] text-[var(--brand-primary)]",
                                    children: S
                                      ? p("show_less")
                                      : p("show_more"),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "min-h-[0.7rem] w-[6.89rem] md:min-h-[270px] md:w-[700px] md:py-[23px]",
                    children: [
                      w &&
                        (0, n.jsxs)("div", {
                          className:
                            "mb-[0.2rem] flex w-full cursor-pointer items-center justify-center rounded-[0.08rem] border border-[#E72015] py-[0.16rem] text-[0.32rem] font-bold text-[#FF554C] md:mb-[20px] md:rounded-[8px] md:py-[12px] md:text-[20px]",
                          onClick: () => {
                            (eo(!0),
                              window.sendLog("fast_download", {
                                type: "click",
                                from: "ana_result",
                                key_words: U,
                                referer: o,
                              }));
                          },
                          children: [
                            (0, n.jsx)(k.default, {
                              alt: "vdm-logo",
                              src: W.Z,
                              width: 20,
                              height: 20,
                              className:
                                "mr-[0.1rem] h-[0.5rem] w-[0.5rem] align-middle md:mr-[8px] md:h-[32px] md:w-[32px]",
                              unoptimized: !0,
                            }),
                            p("fast_download_with_vidmate"),
                          ],
                        }),
                      (function () {
                        let e = [];
                        return (j &&
                          j.length > 0 &&
                          e.push(eC(j, "audio", "MP3")),
                        E && E.length > 0 && e.push(eC(E, "video", "MP4")),
                        C && C.length > 0 && e.push(eC(C, "picture")),
                        0 === e.length)
                          ? (0, n.jsxs)("div", {
                              className:
                                "pt-[0.2rem] md:min-h-[100px] md:w-[700px] md:pt-[60px]",
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "relative mx-auto mb-[0.1rem] h-[0.7rem] w-[0.7rem] md:mb-[10px] md:h-[60px] md:w-[70px]",
                                  children: (0, n.jsx)(k.default, {
                                    src: Z.src,
                                    alt: "no data icon",
                                    fill: !0,
                                    unoptimized: !0,
                                    className: "object-contain",
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "text-center text-[0.24rem] text-[var(--text-secondary)] md:text-[14px] md:font-bold",
                                  children: p("no_data"),
                                }),
                              ],
                            })
                          : (0, n.jsx)("div", {
                              className:
                                "overflow-x-hidden border-l border-r border-t border-[--border-light]",
                              children: e,
                            });
                      })(),
                      (j && j.length > 5) ||
                      (E && E.length > 5) ||
                      (C && C.length > 5)
                        ? (0, n.jsx)("div", {
                            onClick: () => M(!B),
                            className:
                              "mb-[0.1rem] mt-[0.1rem] cursor-pointer text-center text-[0.26rem] text-[var(--brand-primary)] underline md:mt-[10px] md:text-[18px]",
                            children: B ? p("show_less") : p("show_more"),
                          })
                        : null,
                      A
                        ? (0, n.jsx)("div", {
                            className:
                              "mt-[0.5rem] flex justify-center md:mt-[50px]",
                            children: (0, n.jsx)(k.default, {
                              className:
                                "h-[0.6rem] w-[0.6rem] animate-spin object-contain md:h-[50px] md:w-[50px]",
                              src: Y,
                              unoptimized: !0,
                              alt: "loading icon",
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)(eg, {
              ...ea,
              referer: o,
              onChange: (e) => {
                (ed({ status: !1, id: ea.id, youtube_info: ea.youtube_info }),
                  e === l.Failed
                    ? ek(e, ea.youtube_info)
                    : e === l.ExceedFailed &&
                      eh({
                        show: !0,
                        data: {
                          isDownloadLimitExceeded: !0,
                          quality: "",
                          f_type: "",
                          referer: o,
                          key_words: U,
                          search_type: (0, v.z8)(o),
                        },
                      }));
              },
            }),
            ei.showDialog
              ? (0, n.jsx)(eR, {
                  ytbLink: ei.ytbLink,
                  logObj: ei.logObj,
                  onClose: () => {
                    en({ showDialog: !1, ytbLink: "", logObj: {} });
                  },
                  onDownload: () => {
                    en({ showDialog: !1, ytbLink: "", logObj: {} });
                  },
                })
              : null,
            (0, n.jsx)(el, {
              isOpen: es,
              onClose: () => {
                (em(!1), ep(null));
              },
              fromUrl: U,
              reportData: {
                file_size:
                  null == ec
                    ? void 0
                    : null === (t = ec.item) || void 0 === t
                      ? void 0
                      : t.size,
                duration: d.duration,
                referer: o,
                f_type:
                  null == ec
                    ? void 0
                    : null === (r = ec.item) || void 0 === r
                      ? void 0
                      : r.type,
                download_url:
                  null == ec
                    ? void 0
                    : null === (a = ec.item) || void 0 === a
                      ? void 0
                      : a.download_url,
              },
            }),
            (0, n.jsx)(ew, { isOpen: eA, onClose: () => eo(!1) }),
            (0, n.jsx)(eu, {
              isOpen: ef.show,
              status: ef.status,
              youtube_info: ef.youtubeInfo,
              onClose: () => ey((e) => ({ ...e, show: !1 })),
            }),
            (0, n.jsx)(eb, {
              isOpen: ex.show,
              onClose: () => eh((e) => ({ ...e, show: !1 })),
              reportData: ex.data,
            }),
            h
              ? null
              : (0, n.jsx)(R.k0, {
                  adUnitPath:
                    "/23067704912/vidssave.com/vidssave.com-300x250-020201",
                  isOpen: e_,
                  onClose: () => ev(!1),
                  divId: "div-gpt-ad-1770012034633549-0",
                }),
          ],
        });
      }
      r(6888).Buffer;
      let ez = ["tiktok"],
        eS = (0, c.forwardRef)((e, t) => {
          let {
              setSaveModalOpen: r,
              kind: a = "",
              type: d = "home",
              queryParams: i = {},
              referer: l,
              showHotVideoList: A = !0,
              titleH1: o,
              subtitle: B,
              inputPlaceholder: R,
            } = e,
            L = (0, N.useTranslations)("DownloadPanel"),
            z = (0, N.useLocale)(),
            [S, D] = (0, c.useState)(""),
            F = (0, c.useRef)(null),
            O = (0, c.useRef)(null),
            [V, I, T] = (0, E.Z)({
              thumbnail: "",
              title: "",
              duration: 0,
              videoList: [],
              audioList: [],
              pictureList: [],
              user_url: "",
            }),
            [Q, Y] = (0, c.useState)(0),
            [J] = (0, c.useState)(
              (function (e, t, r) {
                let a = t || L("title_home"),
                  d = r || L("subtitle_home");
                if (!t && e)
                  try {
                    a = L("title_".concat(e));
                  } catch (e) {
                    a = L("title_home");
                  }
                if (!r && e)
                  try {
                    d = L("subtitle_".concat(e));
                  } catch (e) {
                    d = L("subtitle_home");
                  }
                return { h1: a, desc: d };
              })(a, o, B),
            ),
            X = (0, c.useRef)(""),
            H = (0, c.useRef)(l || "url"),
            [G, Z] = (0, c.useState)({
              url: _.ns.DEMO_VIDEOS.MOBILE,
              showVideo: !1,
            });
          (0, c.useEffect)(() => {
            u.Z.emit("DOWNLOAD_STATUS_CHANGE", Q);
          }, [Q]);
          let q = (0, c.useRef)(null),
            W = (0, c.useRef)(!1);
          (0, c.useRef)(null);
          let P = (0, c.useRef)([]),
            [K, $, ee] = (0, E.Z)(!1),
            et = (0, c.useRef)([]),
            er = (0, c.useRef)([]);
          ((0, c.useEffect)(() => {
            ((function () {
              let e = document.getElementById("url-input-wrapper");
              e &&
                e.addEventListener("input", (e) => {
                  let { inputType: t } = e,
                    r = e.target.value;
                  "insertFromPaste" === t ? ea(r ? r.trim() : "", !0) : ea(r);
                });
            })(),
              (function () {
                let e = document.getElementById("url-input-wrapper");
                if ("analysis-now" === i.type && (null == i ? void 0 : i.url)) {
                  var t;
                  let r =
                    (null == i
                      ? void 0
                      : null === (t = i.url) || void 0 === t
                        ? void 0
                        : t.trim()) || "";
                  (D(r),
                    e && (e.value = r),
                    setTimeout(() => {
                      ei(r);
                    }, 200));
                  return;
                }
                if (["watch", "shorts"].includes(d)) {
                  let t = window.location.search,
                    r = window.location.pathname,
                    a = "https://www.youtube.com".concat(r).concat(t);
                  (D(a), e && (e.value = a));
                }
              })());
            let e = a || "home";
            window.sendLog("page_show", { pageType: e });
          }, []),
            (0, c.useImperativeHandle)(
              t,
              () => ({
                clearInput: () => {
                  D("");
                  let e = document.getElementById("url-input-wrapper");
                  e && (e.value = "");
                },
                getDownloadStatus: () => Q,
                search: (e, t) => {
                  (t && (H.current = t || "url"), D(e));
                  let r = document.getElementById("url-input-wrapper");
                  (r && (r.value = e),
                    setTimeout(() => {
                      ei(e);
                    }, 100));
                },
              }),
              [Q],
            ));
          let ea = function (e) {
              var t;
              let r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              null === (t = F.current) || void 0 === t || t.hideAlert();
              let a = e;
              try {
                a = (0, v.vJ)(e).trim();
              } catch (e) {
                console.error(e);
              }
              (D(a), r && ei(a));
            },
            ed = (e) => e.startsWith("http://") || e.startsWith("https://");
          async function ei() {
            var e, t, r;
            let a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : S;
            if (
              W.current ||
              ((W.current = !0),
              q.current && clearTimeout(q.current),
              (q.current = setTimeout(() => {
                W.current = !1;
              }, 1e3)),
              1 === Q)
            )
              return;
            let d = a.trim(),
              i = ed(d);
            if (((0, s.H)("url_enter_start"), !i && "" !== d)) {
              (window.sendLog("search", {
                search_type: "words",
                parse_url: d,
                referer: d ? "search" : "empty_search",
                from_referer: "url" === H.current ? "" : H.current,
              }),
                Y(0),
                A &&
                  (null === (e = O.current) ||
                    void 0 === e ||
                    e.updateList(d)));
              return;
            }
            if (!a) {
              let e = document.getElementById("url-input-wrapper");
              if (e && e.value) a = e.value;
              else {
                (Y(0),
                  A &&
                    (null === (r = O.current) ||
                      void 0 === r ||
                      r.updateList("")),
                  window.sendLog("search", {
                    search_type: "null",
                    referer: "empty_search",
                    from_referer: "url" === H.current ? "" : H.current,
                  }),
                  null === (t = F.current) || void 0 === t || t.showAlert());
                return;
              }
            }
            if (a.includes("youtube.com") && a.includes("/@")) {
              ((0, s.H)("url_enter_fail_channel"),
                window.sendLog("search", {
                  search_type: (0, v.z8)(H.current),
                  referer: H.current,
                  key_words: a,
                  error_msg: "refuse channel",
                }),
                (0, C.A)(L("channel_download_tips")));
              return;
            }
            let l = (e) => {
                let t = JSON.parse(JSON.stringify(e)),
                  r = t.data;
                ((r.origin = "cache"), (P.current = []), el("", ""));
                let { reqUrl: d, bodyStr: i } = (0, m.Ar)({
                  data: r,
                  path: "media/parse",
                });
                fetch(d, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: i,
                }).then(async (e) => {
                  let r = await e.json();
                  if (1 === r.status) {
                    let {
                      resources: e,
                      duration: d,
                      thumbnail: i,
                      title: l,
                    } = r.data;
                    if (null == e ? void 0 : e.length) {
                      if (((P.current = e), ee())) {
                        let r = [],
                          a = [];
                        (e.forEach((e) => {
                          ((e.isFast = 1),
                            "video" === e.type
                              ? r.push(e)
                              : "audio" === e.type && a.push(e));
                        }),
                          I({
                            duration: d,
                            thumbnail: i,
                            title: "".concat(l, "_"),
                            videoList: r,
                            audioList: a,
                            pictureList: [],
                            user_url: t.data.link,
                          }),
                          Y(3));
                      } else {
                        let {
                            duration: t,
                            thumbnail: r,
                            title: a,
                            pictureList: d,
                            user_url: i,
                            videoList: l,
                            audioList: n,
                          } = T(),
                          s = !1,
                          m = !1;
                        (e.forEach((e) => {
                          ((e.isFast = 1), (e.download_mode = "direct"));
                          let { quality: t, download_url: r } = e;
                          "video" === e.type
                            ? (l.forEach((e, r) => {
                                e.quality === t && l.splice(r, 1);
                                let a = et.current.findIndex(
                                  (e) => e.quality === t,
                                );
                                -1 !== a && et.current.splice(a, 1);
                              }),
                              l.unshift(e),
                              s ||
                                ((window.ytbLink = r),
                                (window.ytbLinkQuality = t),
                                (s = !0)))
                            : "audio" !== e.type ||
                              (n.forEach((e, r) => {
                                e.quality === t && n.splice(r, 1);
                              }),
                              n.unshift(e),
                              m ||
                                ((window.ytbAudioLink = r),
                                (window.ytbAudioLinkQuality = t),
                                (m = !0)));
                        }),
                          I({
                            duration: t,
                            thumbnail: r,
                            title: a,
                            videoList: l,
                            audioList: n,
                            pictureList: d,
                            user_url: i,
                          }),
                          Y(3));
                      }
                      window.sendLog("ana_cache", {
                        search_type: (0, v.z8)(H.current),
                        key_words: a,
                        referer: H.current,
                      });
                    } else P.current = [];
                  }
                });
              },
              n = async (e, t) => {
                let { download_url: r } = e;
                if (!r || "string" != typeof r) return !1;
                try {
                  new URL(r);
                } catch (e) {
                  return (
                    console.error(
                      "Verification failed: The URL format is invalid",
                      e,
                    ),
                    !1
                  );
                }
                try {
                  let a = document.createElement("video");
                  ((a.preload = "metadata"),
                    (a.muted = !0),
                    (a.src = r),
                    (a.onloadedmetadata = () => {
                      if (
                        ((a.src = ""),
                        a.remove(),
                        er.current.push(e),
                        er.current.length === et.current.length)
                      ) {
                        let e = t.videoList || [],
                          a = "360p";
                        for (let t of er.current) {
                          let d = e.findIndex((e) =>
                            e.quality.includes(t.quality),
                          );
                          if (-1 !== d) {
                            let i = e.splice(d, 1)[0];
                            ((i.isFast = 1),
                              (i.download_url = r),
                              (a = t.quality),
                              e.unshift(i));
                          }
                        }
                        (I({ ...t, videoList: e }), el(r, a));
                      }
                    }),
                    (a.onerror = () => {
                      er.current.push(e);
                    }));
                } catch (e) {
                  "AbortError" === e.name
                    ? console.error("Verification failed: Request timeout")
                    : console.error(
                        "Verification failed: The link is inaccessible",
                        e.message,
                      );
                }
              },
              o = async function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = { origin: "source", link: a },
                  r = -2;
                try {
                  var d, i, A, o, c, p, u, x;
                  ((window.ytbLink = ""),
                    (window.ytbLinkQuality = ""),
                    (window.ytbAudioLink = ""),
                    (window.ytbAudioLinkQuality = ""),
                    I({
                      duration: 0,
                      thumbnail: "",
                      title: "",
                      videoList: [],
                      audioList: [],
                      pictureList: [],
                      user_url: "",
                    }),
                    Y(1),
                    (X.current = a),
                    e || (r = -1),
                    (0, s.H)("url_enter_succ"));
                  let h = { url: "/media/parse", data: t, token: e },
                    w =
                      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(
                        a,
                      );
                  ((et.current = []),
                    (er.current = []),
                    w && l(h),
                    $(!0),
                    window.sendLog("ana_begin", {
                      search_type: (0, v.z8)(H.current),
                      key_words: a,
                      referer: H.current,
                      from_referer: "url" === H.current ? "" : H.current,
                    }));
                  let { reqUrl: f, bodyStr: g } = (0, m.Ar)({
                      data: h.data,
                      path: "media/parse",
                    }),
                    b = await fetch(f, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: g,
                    }),
                    y = performance.now(),
                    _ = await b.json();
                  if (1 === _.status) {
                    let e = _.data,
                      {
                        duration: t,
                        thumbnail: l,
                        title: m,
                        resources: A,
                        is_live: o,
                      } = e;
                    if (
                      ((r =
                        null !== (d = null == e ? void 0 : e.check_score) &&
                        void 0 !== d
                          ? d
                          : 0),
                      (0, s.H)("ana_result_succ"),
                      window.sendLog("ana_succ", {
                        search_type: (0, v.z8)(H.current),
                        captcha_score: r,
                        key_words: a,
                        duration: ((performance.now() - y) / 1e3).toFixed(0),
                        referer: H.current,
                      }),
                      o)
                    ) {
                      (C.A.error(L("live_download_tips")), Y(0));
                      return;
                    }
                    let c = [],
                      p = [],
                      u = [];
                    for (let e of A)
                      if (e) {
                        let { type: t } = e;
                        switch (t) {
                          case "video":
                            let { download_mode: r, download_url: a } = e;
                            ("check_download" === r && a && et.current.push(e),
                              c.push(e));
                            break;
                          case "audio":
                            p.push(e);
                            break;
                          case "picture":
                            u.push(e);
                        }
                      }
                    let x = (function (e) {
                        let t = e.map((e) => ({
                            ...e,
                            quality_number: parseInt(e.quality),
                          })),
                          r = t.filter((e) => !e.has_audio),
                          a = t.filter((e) => e.has_audio);
                        function d(e) {
                          let t = new Map();
                          return (
                            e.forEach((e) => {
                              let r = e.quality_number || 0;
                              if (t.has(r)) {
                                let a = t.get(r);
                                r >= 1080
                                  ? e.size > a.size && t.set(r, e)
                                  : e.size < a.size && t.set(r, e);
                              } else t.set(r, e);
                            }),
                            Array.from(t.values())
                          );
                        }
                        let i = d(r),
                          l = d(a);
                        function n(e) {
                          return e.sort(
                            (e, t) => e.quality_number - t.quality_number,
                          );
                        }
                        return [...n(i), ...n(l)];
                      })(c),
                      h = p
                        .map((e) => ({
                          ...e,
                          quality_number: parseInt(e.quality),
                        }))
                        .sort((e, t) => e.quality_number - t.quality_number);
                    if (w) {
                      if (
                        null === (i = P.current) || void 0 === i
                          ? void 0
                          : i.length
                      ) {
                        let e = !1,
                          t = !1;
                        P.current.forEach((r) => {
                          ((r.isFast = 1), (r.download_mode = "direct"));
                          let { quality: a, download_url: d } = r;
                          "video" === r.type
                            ? (x.forEach((e, t) => {
                                e.quality === a && x.splice(t, 1);
                                let r = et.current.findIndex(
                                  (e) => e.quality === a,
                                );
                                -1 !== r && et.current.splice(r, 1);
                              }),
                              x.unshift(r),
                              e ||
                                ((window.ytbLink = d),
                                (window.ytbLinkQuality = a),
                                (e = !0)))
                            : "audio" !== r.type ||
                              (h.forEach((e, t) => {
                                e.quality === a && h.splice(t, 1);
                              }),
                              h.unshift(r),
                              t ||
                                ((window.ytbAudioLink = d),
                                (window.ytbAudioLinkQuality = a),
                                (t = !0)));
                        });
                      }
                      if (et.current.length > 0) {
                        let e = {
                          duration: t,
                          thumbnail: l,
                          title: m,
                          videoList: x,
                          audioList: h,
                          pictureList: u,
                          user_url: a,
                        };
                        for (let t of et.current) n(t, e);
                      }
                    }
                    (I({
                      duration: t,
                      thumbnail: l,
                      title: m,
                      videoList: x,
                      audioList: h,
                      pictureList: u,
                      user_url: a,
                    }),
                      Y(3),
                      $(!1));
                  } else if (-1 === _.status)
                    ((0, s.H)("ana_result_fail_captcha"),
                      (r =
                        null !==
                          (c =
                            null === (A = _.data) || void 0 === A
                              ? void 0
                              : A.check_score) && void 0 !== c
                          ? c
                          : 0),
                      window.sendLog("ana_fail", {
                        search_type: (0, v.z8)(H.current),
                        key_words: a,
                        error_msg: "captcha failed, score: ".concat(r),
                        captcha_score: r,
                        referer: H.current,
                      }),
                      $(!1),
                      Y(
                        (
                          null === (o = T().videoList) || void 0 === o
                            ? void 0
                            : o.length
                        )
                          ? 3
                          : 2,
                      ));
                  else {
                    let e = "parse failed";
                    (_.msg
                      ? (e = _.msg)
                      : _.hasOwnProperty("status") &&
                        (e = "ana fail, status: ".concat(_.status)),
                      (0, s.H)("ana_result_fail_parse"),
                      (r =
                        null !==
                          (x =
                            null === (p = _.data) || void 0 === p
                              ? void 0
                              : p.check_score) && void 0 !== x
                          ? x
                          : 0),
                      window.sendLog("ana_fail", {
                        search_type: (0, v.z8)(H.current),
                        key_words: a,
                        error_msg: e,
                        captcha_score: r,
                        referer: H.current,
                      }),
                      $(!1),
                      Y(
                        (
                          null === (u = T().videoList) || void 0 === u
                            ? void 0
                            : u.length
                        )
                          ? 3
                          : 2,
                      ));
                  }
                } catch (e) {
                  ((0, s.H)("ana_result_fail_other"),
                    window.sendLog("ana_fail", {
                      search_type: (0, v.z8)(H.current),
                      key_words: a,
                      error_msg: "ana_result_fail_other",
                      captcha_score: r,
                      referer: H.current,
                    }),
                    console.error(e),
                    Y(2));
                }
              };
            (window.sendLog("search", {
              search_type: (0, v.z8)(H.current),
              parse_url: a,
              referer: H.current,
              from_referer: "url" === H.current ? "" : H.current,
            }),
              o(""));
          }
          function el(e, t) {
            var r;
            (null !== (r = P.current) && void 0 !== r && r.length) ||
              ((window.ytbLink = e), (window.ytbLinkQuality = t));
          }
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: "".concat(
                  ez.includes(a) ? "tt-panel" : "panel",
                  " relative w-full bg-gradient-to-b from-[#0085CF] to-[#01C5C9] pb-[0.2rem] pt-[0.3rem] md:pb-[30px] md:pt-[42px]",
                ),
                children: [
                  (0, n.jsx)("div", {
                    className: "mb-[0.28rem] select-none md:mb-[40px]",
                    children: (0, n.jsxs)("div", {
                      className: "relative mx-auto w-fit md:max-w-[1440px]",
                      children: [
                        !ez.includes(a) &&
                          (0, n.jsx)(k.default, {
                            className:
                              "pointer-events-none relative z-[1] mx-auto mb-[0.13rem] h-[0.71rem] w-[4.73rem] object-contain md:mb-[10px] md:h-[94px] md:w-[563px]",
                            src: w.Z,
                            alt: "VidsSave.com",
                            unoptimized: !0,
                          }),
                        (0, n.jsx)("h1", {
                          className:
                            "w-full text-center text-[0.32rem] font-bold text-[--text-anti-primary] md:mb-[5px] md:text-[50px]",
                          children: J.h1,
                        }),
                        (0, n.jsx)("h2", {
                          className:
                            "w-full text-center text-[0.28rem] ".concat(
                              ez.includes(a)
                                ? "text-[#FFFFFF]"
                                : "text-[--text-anti-secondary]",
                              " md:text-[24px]",
                            ),
                          children: J.desc,
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "relative mx-auto flex h-[1.12rem] w-[7.3rem] items-center justify-center rounded-[0.08rem] border-[var(--border-medium)] bg-white py-[0.02rem] pl-[0.02rem] shadow-[0px_3px_3px_0px_rgba(33,33,33,0.2)] md:h-[90px] md:w-[1120px] md:rounded-[8px] ".concat(
                        ez.includes(a)
                          ? ""
                          : "border-[0.02rem] md:border-[4px]",
                        " md:py-[15px] md:pl-[15px] rtl:pl-0 rtl:pr-[0.02rem] md:rtl:pr-[15px]",
                      ),
                    children: [
                      "" === S
                        ? (0, n.jsx)(k.default, {
                            className:
                              "h-[0.36rem] w-[0.36rem] md:h-[38px] md:w-[38px]",
                            src: y.Z,
                            alt: "world icon",
                            unoptimized: !0,
                          })
                        : (0, n.jsx)(j.Z, {
                            className:
                              "h-[0.36rem] w-[0.36rem] cursor-pointer md:h-[38px] md:w-[38px]",
                            onClick: () => {
                              let e =
                                document.getElementById("url-input-wrapper");
                              (D(""), e && (e.value = ""));
                            },
                          }),
                      (0, n.jsx)("input", {
                        id: "url-input-wrapper",
                        placeholder:
                          R ||
                          (function (e) {
                            if (!e) return L("paste_tips");
                            let t = {
                              yt: "paste_tips_yt",
                              ytshort: "paste_tips_ytshort",
                              ytmp3: "paste_tips_ytmp3",
                              ytmp4: "paste_tips_ytmp4",
                              ytmusic: "paste_tips_ytmusic",
                              tiktok: "paste_tips_tiktok",
                              fb: "paste_tips_facebook",
                              ins: "paste_tips_instagram",
                              X: "paste_tips_X",
                              pin: "paste_tips_pinterest",
                            }[e];
                            if (t)
                              try {
                                return L(t);
                              } catch (e) {}
                            return L("paste_tips");
                          })(a),
                        spellCheck: "false",
                        onKeyDown: (e) => {
                          "Enter" === e.key && (ei(), e.preventDefault());
                        },
                        className:
                          "min-h-[0.88rem] w-[3.9rem] px-[0.1rem] text-[18px] leading-[0.88rem] text-[rgba(0,0,0,0.6)] outline-none md:min-h-[38px] md:w-[830px] md:px-[15px] md:text-[23px] md:leading-[38px]",
                      }),
                      (0, n.jsxs)("button", {
                        onClick: () => {
                          ei();
                        },
                        className:
                          "flex h-[0.88rem] w-[2.78rem] cursor-pointer items-center justify-center rounded-[0.08rem] "
                            .concat(
                              "tiktok" === a
                                ? "bg-[#FE2D56]"
                                : "bg-[var(--brand-primary)]",
                              " px-[0.1rem] ",
                            )
                            .concat(
                              ["de", "ja", "ms"].includes(z)
                                ? "text-[0.28rem]"
                                : "text-[0.34rem]",
                              " font-bold text-white md:h-[75px] md:w-[218px] md:rounded-[8px] md:px-[15px] ",
                            )
                            .concat(
                              ["ja"].includes(z)
                                ? "md:text-[20px]"
                                : "md:text-[22px]",
                            ),
                        children: [
                          (0, n.jsx)(k.default, {
                            className:
                              "mr-[0.2rem] h-[0.53rem] w-[0.53rem] md:mr-[14px] md:h-[50px] md:w-[50px] rtl:ml-[0.2rem] rtl:mr-0 md:rtl:ml-[14px]",
                            src: x.Z,
                            alt: "download icon",
                            unoptimized: !0,
                          }),
                          (0, n.jsx)("span", { children: L("download") }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(U.Z, {
                    ref: F,
                    kind: a,
                    onLinkClick: (e) => {
                      let t = document.getElementById("url-input-wrapper");
                      (t && (t.value = e), (H.current = "url"), ea(e, !0));
                    },
                  }),
                  "tiktok" === a &&
                    0 === Q &&
                    (0, n.jsxs)("div", {
                      className:
                        "mx-auto mt-[0.5rem] flex w-[7.3rem] flex-wrap justify-between md:mt-[20px] md:w-[1120px] md:items-stretch",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex h-auto w-[7.3rem] rounded-[0.1rem] bg-[linear-gradient(90deg,rgba(136,241,244,1),rgba(255,255,255,1),rgba(254,45,86,1))] p-[0.04rem] text-center shadow-[0_0.02rem_0.02rem_0_rgba(33,33,33,0.2)] md:w-[354px] md:rounded-[10px] md:p-[2px] md:shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)]",
                          children: (0, n.jsxs)("div", {
                            className:
                              "flex h-full w-full items-start justify-start rounded-[0.1rem] bg-[#000000] px-[0.2rem] py-[0.3rem] md:block md:rounded-[8px] md:p-[24px]",
                            children: [
                              (0, n.jsx)(k.default, {
                                className:
                                  "mr-[0.2rem] h-[0.5rem] w-[0.5rem] md:mx-auto md:mb-[16px] md:h-[50px] md:w-[50px]",
                                src: b.Z,
                                alt: "tiktok unlimited icon",
                                unoptimized: !0,
                              }),
                              (0, n.jsxs)("div", {
                                className: "w-[5.82rem] md:w-auto",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "mb-[0.2rem] w-full text-left text-[0.3rem] text-[#ffffff] md:mb-[20px] md:text-center md:text-[26px]",
                                    children: L("tt_feature.unlimited"),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-full text-left text-[0.24rem] leading-[0.28rem] text-[#B6C0C3] md:text-center md:text-[20px] md:leading-[23px]",
                                    children: L("tt_feature.unlimited_desc"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "mt-[0.2rem] flex h-auto w-[7.3rem] rounded-[0.1rem] bg-[linear-gradient(90deg,rgba(136,241,244,1),rgba(255,255,255,1),rgba(254,45,86,1))] p-[0.04rem] text-center shadow-[0_0.02rem_0.02rem_0_rgba(33,33,33,0.2)] md:mt-0 md:w-[354px] md:rounded-[10px] md:p-[2px] md:shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)]",
                          children: (0, n.jsxs)("div", {
                            className:
                              "flex h-full w-full items-start justify-start rounded-[0.1rem] bg-[#000000] px-[0.2rem] py-[0.3rem] md:block md:rounded-[8px] md:p-[24px]",
                            children: [
                              (0, n.jsx)(k.default, {
                                className:
                                  "mr-[0.2rem] h-[0.5rem] w-[0.5rem] md:mx-auto md:mb-[16px] md:h-[50px] md:w-[50px]",
                                src: g.Z,
                                alt: "tiktok no watermark icon",
                                unoptimized: !0,
                              }),
                              (0, n.jsxs)("div", {
                                className: "w-[5.82rem] md:w-auto",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "mb-[0.2rem] w-full text-left text-[0.3rem] text-[#ffffff] md:mb-[20px] md:text-center md:text-[26px]",
                                    children: L("tt_feature.no_watermark"),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-full text-left text-[0.24rem] leading-[0.28rem] text-[#B6C0C3] md:text-center md:text-[20px] md:leading-[23px]",
                                    children: L("tt_feature.no_watermark_desc"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "mt-[0.2rem] flex h-auto w-[7.3rem] rounded-[0.1rem] bg-[linear-gradient(90deg,rgba(136,241,244,1),rgba(255,255,255,1),rgba(254,45,86,1))] p-[0.04rem] text-center shadow-[0_0.02rem_0.02rem_0_rgba(33,33,33,0.2)] md:mt-0 md:w-[354px] md:rounded-[10px] md:p-[2px] md:shadow-[0px_4px_4px_0px_rgba(33,33,33,0.2)]",
                          children: (0, n.jsxs)("div", {
                            className:
                              "flex h-full w-full items-start justify-start rounded-[0.1rem] bg-[#000000] px-[0.2rem] py-[0.3rem] md:block md:rounded-[8px] md:p-[24px]",
                            children: [
                              (0, n.jsx)(k.default, {
                                className:
                                  "mr-[0.2rem] h-[0.5rem] w-[0.5rem] md:mx-auto md:mb-[16px] md:h-[50px] md:w-[50px]",
                                src: f.Z,
                                alt: "tiktok mp4 icon",
                                unoptimized: !0,
                              }),
                              (0, n.jsxs)("div", {
                                className: "w-[5.82rem] md:w-auto",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "mb-[0.2rem] w-full text-left text-[0.3rem] text-[#ffffff] md:mb-[20px] md:text-center md:text-[26px]",
                                    children: L("tt_feature.mp4"),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-full text-left text-[0.24rem] leading-[0.28rem] text-[#B6C0C3] md:text-center md:text-[20px] md:leading-[23px]",
                                    children: L("tt_feature.mp4_desc"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  (function () {
                    let e = null;
                    switch (Q) {
                      case 0:
                        e = (0, n.jsx)("div", {
                          className:
                            "mt-[0.22rem] flex items-center justify-center gap-x-[0.2rem] md:mt-[17px] md:gap-x-[15px]",
                        });
                        break;
                      case 1:
                        e = (0, n.jsx)(M, {});
                        break;
                      case 2:
                        e = (0, n.jsxs)("div", {
                          className:
                            "mx-auto mt-[0.1rem] text-center md:mt-[15px] md:w-[1120px]",
                          children: [
                            (0, n.jsx)(k.default, {
                              className:
                                "mx-auto h-[0.8rem] w-[0.8rem] md:h-[117px] md:w-[117px]",
                              src: h.Z,
                              alt: "download error icon",
                              unoptimized: !0,
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "text-[0.3rem] text-[#CBFFF3] md:text-[16px]",
                              children: [
                                L("get_resource_failed"),
                                ",",
                                " ",
                                (0, n.jsx)("span", {
                                  onClick: () => ei(),
                                  className:
                                    "cursor-pointer font-bold text-[#FFFFFF] underline",
                                  children: L("please_retry"),
                                }),
                              ],
                            }),
                          ],
                        });
                        break;
                      case 3:
                        e = (0, n.jsx)(eL, {
                          downloadObj: V,
                          setSaveModalOpen: r,
                          isAnalysis: K,
                          referer: H.current,
                        });
                    }
                    return e;
                  })(),
                ],
              }),
              A &&
                (0, n.jsx)(p, {
                  ref: O,
                  onVideoSelect: (e, t) => {
                    t && (H.current = t);
                    let r = document.getElementById("url-input-wrapper");
                    (r && (r.value = e.url), ea(e.url, !0));
                  },
                }),
            ],
          });
        });
      eS.displayName = "DownloadPanel";
      var eD = eS;
    },
    6140: function (e, t, r) {
      r.d(t, {
        N: function () {
          return l;
        },
        z: function () {
          return i;
        },
      });
      var a = r(3365),
        d = r(8559);
      function i(e, t) {
        ((0, d.Sv)("".concat(a.gZ, "&subpub=").concat(e)),
          window.sendLog("vdm_download_click", {
            from: e,
            from_url: window.location.pathname,
            key_words: window.location.pathname,
            ...t,
          }));
      }
      let l = (e, t) => {
        window.sendLog("vdm_download_show", {
          from: e,
          from_url: window.location.pathname,
          ...t,
        });
      };
    },
    3212: function (e, t) {
      t.Z = {
        src: "/_next/static/media/download_icon.8ca4e355.png",
        height: 88,
        width: 88,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXEAw0UAuEYAwkUAw0UAwUYAxkcAwkYAw0Za0dHCAAAACXRSTlMAMgPAn0r7016sJLUOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nE2KSQ4AMAiE0HHp/1/cVC/lRAgAZjwcBf6Jc6pyk2Ies8zZo6XeNlwN4ABp0NZSEQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    8685: function (e, t) {
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
    8448: function (e, t) {
      t.Z = {
        src: "/_next/static/media/tt_mp4.045c418a.png",
        height: 100,
        width: 100,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUA9+dMaXEA8uMA+u0A+e0A/fEA9ucA8eMA9ecA9ucA9ucA9egA//AA+OwAFhznAAAADnRSTlOCAChBTZN4EmCqxG8SN54oc+UAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAvSURBVHicY2CEAgZ2BgY2BgYGHgYWViYOJiZWZgYWbkYuTkY2ZAZMCqqYnQGmHQAezwDW66Y0ewAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    3462: function (e, t) {
      t.Z = {
        src: "/_next/static/media/tt_no_watermark.fcbf6c5c.png",
        height: 100,
        width: 100,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUA9ucA9udMaXEA//8A+u4A+OwA+u8A+OoA9uYA9+kA9+kA9uda2pBwAAAADHRSTlOjXAABCxB9NJJrRcF+KeGnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nBXIuREAIAwEsfP6Bfrvl3GiQMLJxJGTUuIC3btiBWVooWvnGecgYp4mEER3wAcdRgDlzzaIlAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9999: function (e, t) {
      t.Z = {
        src: "/_next/static/media/tt_unlimited.13170133.png",
        height: 100,
        width: 100,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUA//9MaXEA9ugA9+gA9eUA9ucA9eYA+/AA9ecA9+cA9eYA9eaFqysPAAAADHRSTlMCADtFH4KzicSfXW9QfguWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nB3JyQ0AMQzDQFGyc/bf7yL74gAUyBYIaoz64Tn9oNW9hIT39qs45w3S93YQlSTFBxgeAMGBTMUcAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5212: function (e, t) {
      t.Z = {
        src: "/_next/static/media/video_cover.c06b9539.png",
        height: 394,
        width: 708,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEXq//nx//q69fuT7PzP++Ng4/0A24X8///R+fso0P8v1f0Asv+Z7vx+6fyH6d128aXbySnlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGNgYGTi5WEAAUZmTi4ORhCDlZuNjx3EYGLmZ2FkAAAJCACDzI4k7QAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    440: function (e, t) {
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
]);
