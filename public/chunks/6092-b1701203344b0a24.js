"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6092],
  {
    4165: function (e, t, a) {
      a.d(t, {
        default: function () {
          return f;
        },
      });
      var r = a(4336),
        i = a(8175),
        l = a(4319),
        n = {
          src: "/_next/static/media/feedback_icon.6aa9a10a.png",
          height: 90,
          width: 90,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAsU0AwkUAxkcAwkUAwEUAwEkAyEgAw0cAwUUAxEYAwUUAwEZheB2BAAAADHRSTlMBgyTwoRn8KOXXzlrqlzRaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nD3LuRHAMAwDQYAEX/ffr0YKfNElC/xRkghYzu6kwZwk/Y64noZob88OoOaLisvq6QMbYwDXAvI7tQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        s = {
          src: "/_next/static/media/icon_close@2x.d45724fe.png",
          height: 80,
          width: 80,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEUdx1gBwkYCwUYBxUcCw0YCwUYCxUlMaXEArAAEwEYAx0QBx0li2o4CwUMCwEIAy0aS5bBi3Y9i3I9h4pEPd5FsAAAAD3RSTlP7lzyNTmxgAAEg7ZL8+u2rSWL/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nDXGOQKAMAwDwc2F7HAowP//SsVUQyi3kQrUL/scIucLtyubWQu3Pzs5Hzjc0bDtIkK1lR76AFADAiY+ePznAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        o = {
          src: "/_next/static/media/icon_loading@2x.9ac3c03f.png",
          height: 156,
          width: 156,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXEAwkUAvUEAxUYAxkYAwkUAw0cAwUUAwkbmHp1BAAAACXRSTlMAYRCLdio5nEPcChJHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nD2LyQ0AMAzCTM7uP3GlHuGDJQyAGTcep1qrwoEUKIH6MNPI774BDxYAagieNPsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
          src: "/_next/static/media/icon_upload@2x.9d891040.png",
          height: 156,
          width: 156,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEVMaXHh4uLg4uLh4eHi4uJbLmr5AAAABXRSTlMATBCJEhZ3EA4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhSURBVHicY2BAAkxMUAYjI4TPyMzMCBIDM1iQpZAUgwEABZIAJ4da73QAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = a(3365),
        c = a(5798),
        m = a(6777),
        u = a(7797),
        p = a(4271),
        h = a(1175);
      let x = "feedback_history";
      function g() {
        try {
          let e = localStorage.getItem(x);
          return e ? JSON.parse(e) : [];
        } catch (e) {
          return [];
        }
      }
      function w(e) {
        let { visible: t, setVisble: a } = e,
          [i, n] = (0, p.useState)(""),
          [c, w] = (0, p.useState)(""),
          [f, b] = (0, p.useState)(""),
          [U, v] = (0, p.useState)(!1),
          y = (0, m.useTranslations)("FeedbackModal"),
          [k, E] = (0, p.useState)([
            { key: 1, previewUrl: "", uploadUrl: "", loading: !1 },
            { key: 2, previewUrl: "", uploadUrl: "", loading: !1 },
            { key: 3, previewUrl: "", uploadUrl: "", loading: !1 },
            { key: 4, previewUrl: "", uploadUrl: "", loading: !1 },
          ]);
        function _(e) {
          let { key: t, newObj: a } = e;
          E((e) => {
            let r = [...e],
              i = r.findIndex((e) => e.key === t);
            return (-1 !== i && (r[i] = { ...r[i], ...a }), r);
          });
        }
        function N() {
          (w(""),
            b(""),
            E([
              { key: 1, previewUrl: "", uploadUrl: "", loading: !1 },
              { key: 2, previewUrl: "", uploadUrl: "", loading: !1 },
              { key: 3, previewUrl: "", uploadUrl: "", loading: !1 },
              { key: 4, previewUrl: "", uploadUrl: "", loading: !1 },
            ]));
        }
        async function C(e) {
          let t = document.createElement("input");
          ((t.type = "file"),
            (t.accept = "image/*"),
            (t.style.display = "none"),
            document.body.appendChild(t),
            (t.onchange = async (a) => {
              var r;
              let i =
                null === (r = a.target.files) || void 0 === r ? void 0 : r[0];
              if (!i) return;
              if (i.size >= 5242880) {
                h.A.error(y("toast.oversize"));
                return;
              }
              let l = new FileReader();
              ((l.onload = (t) => {
                var a;
                _({
                  key: e,
                  newObj: {
                    previewUrl:
                      null === (a = t.target) || void 0 === a
                        ? void 0
                        : a.result,
                    uploadUrl: "",
                    loading: !0,
                  },
                });
              }),
                l.readAsDataURL(i));
              let n = new FormData();
              n.append("file", i);
              try {
                let t = await fetch("/api/upload-img?scenario=feedback", {
                    method: "POST",
                    body: n,
                  }),
                  a = await t.json();
                if (t.ok) {
                  h.A.success("File uploaded successfully");
                  let t = a.data;
                  E((a) => {
                    let r = [...a],
                      i = r.findIndex((t) => t.key === e);
                    return (
                      -1 !== i &&
                        (r[i] = { ...r[i], uploadUrl: t, loading: !1 }),
                      r
                    );
                  });
                } else
                  (h.A.error("Upload failed: ".concat(a.error)),
                    _({
                      key: e,
                      newObj: { previewUrl: "", uploadUrl: "", loading: !1 },
                    }));
              } catch (t) {
                (console.error(t),
                  h.A.error(y("toast.upload_err")),
                  _({
                    key: e,
                    newObj: { previewUrl: "", uploadUrl: "", loading: !1 },
                  }));
              }
              ((t.value = ""), document.body.removeChild(t));
            }),
            t.click());
        }
        async function j() {
          if (
            !(c
              ? !!f || ((0, h.A)(y("toast.content")), !1)
              : ((0, h.A)(y("toast.email")), !1))
          )
            return;
          if (
            (function (e) {
              let t = e.trim();
              return !!t && g().includes(t);
            })(f)
          ) {
            (h.A.success(y("toast.success")), N(), a(!1));
            return;
          }
          let e = {};
          e.img_url_list = k.filter((e) => e.uploadUrl).map((e) => e.uploadUrl);
          let t = {
            anm: d.kD,
            ext_content: JSON.stringify(e),
            msg: encodeURIComponent(f),
            whatsappid: encodeURIComponent(c),
            uid: "",
            cou: "",
            did: "",
            ver: "1.0.0",
            mod: "",
            os: "",
            lan: "",
            pkg: d.dj.SHORT,
            slan: "",
            net: "",
            bucket: "",
          };
          try {
            let e = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  url: "/feedback/feedback/add_feedback",
                  data: t,
                }),
              }),
              a = await e.json();
            (null == a ? void 0 : a.status) === 1
              ? (h.A.success(y("toast.success")),
                (function (e) {
                  try {
                    let t = g(),
                      a = [e.trim(), ...t].slice(0, 20);
                    localStorage.setItem(x, JSON.stringify(a));
                  } catch (e) {
                    console.error("Failed to save feedback record:", e);
                  }
                })(f),
                N())
              : h.A.error(y("toast.faild"));
          } catch (e) {
            (h.A.error(y("toast.faild")), console.error(e));
          }
          a(!1);
        }
        return (
          (0, p.useEffect)(() => {
            if (t)
              (a(!0),
                n("opacity-0 transform scale-95"),
                requestAnimationFrame(() => {
                  n("opacity-100 transform scale-100");
                }),
                (document.body.style.overflow = "hidden"));
            else {
              n("opacity-0 transform scale-95");
              let e = setTimeout(() => {
                a(!1);
              }, 300);
              return (
                (document.body.style.overflow = "unset"),
                () => clearTimeout(e)
              );
            }
          }, [t]),
          t
            ? (0, r.jsx)("div", {
                className:
                  "flex fixed w-[100vw] h-[100vh] inset-0 justify-center items-center top-0 left-0 bg-black z-50 transition-all duration-300 ease-in-out md:pt-[40px]  ".concat(
                    t
                      ? "bg-opacity-70 opacity-100"
                      : "bg-opacity-0 opacity-0 pointer-events-none",
                  ),
                children: (0, r.jsxs)("div", {
                  className:
                    "flex items-center flex-col w-[6.9rem] md:w-[874px] h-fit bg-white shadow-[0px_0.04rem_0.04rem_0px_rgba(33,33,33,0.2)] md:shadow-[0px_3px_3px_0px_rgba(33,33,33,0.2)] rounded-[0.1rem] md:rounded-[10px] relative py-[0.3rem] md:py-[30px]  transition-all duration-300 ease-in-out ".concat(
                      i,
                    ),
                  children: [
                    (0, r.jsx)(u.default, {
                      src: l.Z.src,
                      width: 40,
                      height: 40,
                      alt: "close",
                      unoptimized: !0,
                      className:
                        "absolute -top-[0.8rem] h-[0.5rem] w-[0.5rem] cursor-pointer md:-top-[50px] md:h-[38px] md:w-[38px] ltr:right-[0rem] rtl:left-0",
                      onClick: () => a(!1),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "mb-[0.3rem] w-full text-center text-[0.3rem] font-bold text-[var(--text-primary)] md:text-[40px]",
                      children: y("title"),
                    }),
                    (0, r.jsx)("input", {
                      value: c,
                      maxLength: 50,
                      onChange: (e) => w(e.target.value),
                      className:
                        "mb-[0.2rem] h-[0.9rem] w-[6.5rem] border-none bg-[#F5F8F7] p-[0.3rem] text-[0.24rem] leading-[0.3rem] md:h-[69px] md:w-[814px] md:pl-[30px] md:pt-[00px] md:text-[28px] md:leading-[30px]",
                      placeholder: y("email"),
                    }),
                    (0, r.jsx)("textarea", {
                      value: f,
                      maxLength: 500,
                      onChange: (e) => b(e.target.value),
                      className:
                        "mb-[0.2rem] mt-[0.1rem] h-[2.19rem] w-[6.5rem] border-none bg-[#F5F8F7] p-[0.3rem] text-[0.24rem] leading-[0.3rem] md:mt-[12px] md:h-[219px] md:w-[814px] md:p-[30px] md:text-[28px] md:leading-[30px]",
                      placeholder: y("content"),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "mb-[0.3rem] flex h-[1.2rem] w-full justify-evenly md:mb-[30px] md:mt-[12px] md:h-[150px]",
                      children: k.map((e) =>
                        (0, r.jsx)(
                          "div",
                          {
                            onClick: () => C(e.key),
                            className:
                              "flex h-full w-[1.44rem] cursor-pointer items-center justify-center rounded-[0.08rem] bg-[#F8FAFB] hover:bg-[#f0f3f6] md:w-[180px] md:rounded-[12px]",
                            children: e.loading
                              ? (0, r.jsx)(u.default, {
                                  src: o,
                                  alt: "loading",
                                  width: 74,
                                  height: 74,
                                  unoptimized: !0,
                                  className:
                                    "animate-spinner-ease-spin h-[0.54rem] w-[0.54rem] md:h-[78px] md:w-[78px]",
                                })
                              : (0, r.jsx)(r.Fragment, {
                                  children: e.previewUrl
                                    ? (0, r.jsxs)("div", {
                                        className:
                                          "relative block h-full w-full",
                                        children: [
                                          (0, r.jsx)(u.default, {
                                            src: e.previewUrl,
                                            width: 54,
                                            height: 54,
                                            alt: "upload pic",
                                            className:
                                              "h-auto max-h-full w-full",
                                            unoptimized: !0,
                                          }),
                                          (0, r.jsx)(u.default, {
                                            src: s,
                                            width: 10,
                                            height: 10,
                                            alt: "delete",
                                            unoptimized: !0,
                                            className:
                                              "absolute right-0 top-0 h-[0.4rem] w-[0.4rem] md:right-[12px] md:top-[12px] md:h-[32px] md:w-[32px]",
                                            onClick: (t) => {
                                              (t.stopPropagation(),
                                                _({
                                                  key: e.key,
                                                  newObj: {
                                                    previewUrl: "",
                                                    uploadUrl: "",
                                                    loading: !1,
                                                  },
                                                }));
                                            },
                                          }),
                                        ],
                                      })
                                    : (0, r.jsx)(u.default, {
                                        src: A,
                                        width: 10,
                                        height: 10,
                                        alt: "plus image",
                                        unoptimized: !0,
                                        className:
                                          "h-[0.54rem] w-[0.54rem] md:h-[58px] md:w-[58px]",
                                      }),
                                }),
                          },
                          e.key,
                        ),
                      ),
                    }),
                    (0, r.jsx)("button", {
                      onClick: () => j(),
                      className:
                        "flex h-[0.9rem] w-[6.5rem] items-center justify-center rounded-[0.08rem] bg-[var(--brand-primary)] text-[0.34rem] text-white md:h-[90px] md:w-[814px] md:rounded-md md:text-[34px]",
                      children: y("confirm"),
                    }),
                  ],
                }),
              })
            : (0, r.jsx)(r.Fragment, {})
        );
      }
      function f(e) {
        let { open: t } = e,
          [a, l] = (0, p.useState)(!1),
          [s, o] = (0, p.useState)(!0);
        return (
          (0, p.useEffect)(() => {
            let e = "mobile" === (0, c.l7)();
            return (
              i.Z.on("DOWNLOAD_STATUS_CHANGE", (t) => {
                3 === t && e && o(!1);
              }),
              () => {
                i.Z.off("DOWNLOAD_STATUS_CHANGE", () => {
                  o(!0);
                });
              }
            );
          }, []),
          s
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("button", {
                    onClick: () => {
                      l(!0);
                    },
                    className:
                      "fixed right-[0.3rem] bottom-[2.7rem] md:right-5 xl:right-10 ".concat(
                        t ? "md:bottom-[330px]" : "md:bottom-28",
                        " flex h-[1rem] w-[1rem] items-center z-20 justify-center rounded-[0.12rem] bg-white text-[rgba(0,0,0,0.88)] shadow-lg transition-all hover:bg-[#F0FFF4FF] md:h-[64px] md:w-[64px] md:rounded-[12px] cursor-pointer",
                      ),
                    children: (0, r.jsx)(u.default, {
                      className:
                        "h-[0.35rem] w-[0.43rem] md:h-[39px] md:w-[39px]",
                      src: n,
                      style: { objectFit: "contain" },
                      alt: "feedback",
                      unoptimized: !0,
                    }),
                  }),
                  (0, r.jsx)(w, { visible: a, setVisble: l }),
                ],
              })
            : (0, r.jsx)(r.Fragment, {})
        );
      }
    },
    1946: function (e, t, a) {
      a.d(t, {
        default: function () {
          return m;
        },
      });
      var r = a(4336),
        i = a(8175),
        l = {
          src: "/_next/static/media/share.6e9c68f9.svg",
          height: 29,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = a(3365),
        s = a(5798),
        o = a(7797),
        A = a(3090),
        d = a(9982),
        c = a(4271);
      function m(e) {
        let { title: t = "", description: a = "", show: m } = e,
          u = (0, A.usePathname)(),
          [p, h] = (0, c.useState)(!1),
          [x, g] = (0, c.useState)(!1),
          w = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          if (
            (setTimeout(() => {
              g(!p);
            }, 100),
            p)
          )
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          function e(e) {
            w.current && !w.current.contains(e.target) && h(!1);
          }
        }, [p]);
        let f = "".concat(window.location.origin).concat(u),
          [b, U] = (0, c.useState)(!["/library"].includes(u));
        return (
          (0, c.useEffect)(() => {
            window.a2a && window.a2a.init_all();
          }, [u]),
          (0, c.useEffect)(() => {
            let e = "mobile" === (0, s.l7)();
            return (
              i.Z.on("DOWNLOAD_STATUS_CHANGE", (t) => {
                3 === t && e && U(!1);
              }),
              () => {
                i.Z.off("DOWNLOAD_STATUS_CHANGE", () => {
                  U(!0);
                });
              }
            );
          }, []),
          b
            ? (0, r.jsxs)("div", {
                className: "fixed bottom-[1.5rem] md:bottom-10 ".concat(
                  m ? "md:bottom-[250px]" : "",
                  " right-[0.3rem]  md:right-5 xl:right-10 z-30 share-buttons flex flex-col items-center transition-all",
                ),
                ref: w,
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "bg-white md:rounded-lg shadow-lg p-[0.14rem] md:p-2.5 md:mb-2 mb-0.5 rounded-sm transition-all duration-300 transform  "
                        .concat(
                          p
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none",
                          " ",
                        )
                        .concat(x ? "hidden" : ""),
                    children: (0, r.jsxs)("div", {
                      className:
                        "a2a_kit a2a_kit_size_32 a2a_default_style flex flex-col space-y-1 md:space-y-2.5",
                      "data-a2a-url": f,
                      "data-a2a-title": t,
                      children: [
                        (0, r.jsx)("a", { className: "a2a_button_facebook" }),
                        (0, r.jsx)("a", { className: "a2a_button_whatsapp" }),
                        (0, r.jsx)("a", { className: "a2a_button_telegram" }),
                        (0, r.jsx)("a", { className: "a2a_button_reddit" }),
                        (0, r.jsx)("a", {
                          className: "a2a_button_facebook_messenger",
                        }),
                        (0, r.jsx)("a", { className: "a2a_button_twitter" }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => {
                      h(!p);
                    },
                    className:
                      "flex h-[1rem] w-[1rem] items-center justify-center rounded-[0.12rem] bg-white text-[rgba(0,0,0,0.88)] shadow-lg transition-all hover:bg-[#F0FFF4FF] md:h-[64px] md:w-[64px] md:rounded-[12px]",
                    children: (0, r.jsx)(o.default, {
                      className:
                        "h-[0.35rem] w-[0.43rem] md:h-[43px] md:w-[39px]",
                      src: l,
                      alt: "share",
                      unoptimized: !0,
                    }),
                  }),
                  (0, r.jsx)(d.default, {
                    src: n.ns.THIRD_PARTY.ADDTOANY_SCRIPT,
                    strategy: "lazyOnload",
                    onLoad: () => {
                      window.a2a && window.a2a.init_all();
                    },
                  }),
                ],
              })
            : null
        );
      }
    },
    8175: function (e, t) {
      class a {
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = []),
            this.events[e].push(t),
            this
          );
        }
        off(e, t) {
          return (
            this.events[e] &&
              (this.events[e] = this.events[e].filter((e) => e !== t)),
            this
          );
        }
        emit(e) {
          for (
            var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            a[r - 1] = arguments[r];
          return (
            !!this.events[e] &&
            (this.events[e].forEach((e) => {
              e(...a);
            }),
            !0)
          );
        }
        once(e, t) {
          var a = this;
          let r = function () {
            for (var i = arguments.length, l = Array(i), n = 0; n < i; n++)
              l[n] = arguments[n];
            (t(...l), a.off(e, r));
          };
          return (this.on(e, r), this);
        }
        constructor() {
          this.events = {};
        }
      }
      let r = new a();
      t.Z = r;
    },
    4319: function (e, t) {
      t.Z = {
        src: "/_next/static/media/close.79df833a.png",
        height: 100,
        width: 100,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEX///9MaXH////////////////////+/v7SDDtGAAAACHRSTlNrAEApH4sQoxno+v4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicNcvJDcAwDASx2UNy/x0HMeA/iWSwhKAFYZIGQzRnA2RnGjDtFl+cH7/+ARGkAH4MDmRUAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
]);
