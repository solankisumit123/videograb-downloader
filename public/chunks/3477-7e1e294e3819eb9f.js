"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3477],
  {
    3329: function (t, e, n) {
      let o;
      n.d(e, {
        ClarityProvider: function () {
          return d;
        },
        H: function () {
          return c;
        },
        _: function () {
          return s;
        },
      });
      var r = n(5798),
        a = n(1744),
        i = n(4271);
      let l = 0;
      function d() {
        return (
          (0, i.useEffect)(() => {
            var t, e;
            let n =
              null !==
                (e =
                  null ===
                    (t = document.getElementById("clarity_project_id")) ||
                  void 0 === t
                    ? void 0
                    : t.getAttribute("data-id")) && void 0 !== e
                ? e
                : "";
            if (n)
              try {
                (a.Z.init(n),
                  (function () {
                    if (sessionStorage.getItem("clarity_identify")) return;
                    let t = () => {
                      if (
                        (clearTimeout(o),
                        (function () {
                          let t = !1;
                          if (
                            window &&
                            window.clarity &&
                            void 0 !== window.clarity
                          ) {
                            var e;
                            let n = "",
                              o = "",
                              i =
                                (null === (e = localStorage) || void 0 === e
                                  ? void 0
                                  : e.getItem("uid")) || "";
                            if (i) {
                              ((t = !0), (n = i.split("=")[0]));
                              let e = i.split("=")[1];
                              (e && (o = (0, r.o0)(new Date(Number(e)))),
                                a.Z.identify(n, null, null, o),
                                sessionStorage.setItem(
                                  "clarity_identify",
                                  "1",
                                ));
                            }
                          }
                          return t;
                        })())
                      ) {
                        o && clearTimeout(o);
                        return;
                      }
                      ++l >= 5
                        ? (o && clearTimeout(o),
                          console.warn(
                            "[Clarity] identify failed, retry ".concat(
                              5,
                              " times",
                            ),
                          ))
                        : (o = setTimeout(t, 500));
                    };
                    l < 5 && (o = setTimeout(t, 500));
                  })());
              } catch (t) {
                console.error("Failed to initialize Clarity:", t);
              }
            else console.warn("Clarity project ID not found");
          }, []),
          null
        );
      }
      function s(t) {
        try {
          window && window.clarity && void 0 !== window.clarity
            ? a.Z.setTag("page_type", t)
            : setTimeout(() => {
                a.Z.setTag("page_type", t);
              }, 500);
        } catch (t) {
          console.error("Failed to set Clarity tag:", t);
        }
      }
      function c(t) {
        try {
          window && window.clarity && void 0 !== window.clarity
            ? a.Z.event(t)
            : setTimeout(() => {
                a.Z.event(t);
              }, 500);
        } catch (t) {
          console.error("Failed to emit Clarity event:", t);
        }
      }
    },
    4228: function (t, e, n) {
      n.d(e, {
        GoogleAdManager: function () {
          return p;
        },
        J: function () {
          return _;
        },
        Me: function () {
          return y;
        },
        RL: function () {
          return h;
        },
        dW: function () {
          return v;
        },
        k0: function () {
          return S;
        },
      });
      var o = n(4336),
        r = n(654),
        a = n(13),
        i = n(3365),
        l = n(1858),
        d = n(4775),
        s = n.n(d),
        c = n(9982),
        u = n(4271);
      let g = null,
        w = "download_button_ad_state";
      function f(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "_blank";
        try {
          let n = document.createElement("a");
          return (
            (n.href = t),
            (n.target = e),
            (n.rel = "noopener"),
            document.body.appendChild(n),
            n.click(),
            document.body.removeChild(n),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function m(t) {
        let e = s()().format("YYYY-MM-DD"),
          n = { date: e, count: 0, lastOpenedAt: 0 };
        try {
          let o = window.localStorage.getItem(t);
          if (!o) return n;
          let r = JSON.parse(o);
          if (!r || "object" != typeof r || r.date !== e) return n;
          return {
            date: e,
            count: "number" == typeof r.count ? r.count : 0,
            lastOpenedAt:
              "number" == typeof r.lastOpenedAt ? r.lastOpenedAt : 0,
          };
        } catch (t) {
          return n;
        }
      }
      function h(t) {
        let {
          url: e = i.ns.ADS.DOWNLOAD_BUTTON,
          storageKey: n = w,
          target: o = "_blank",
        } = t || {};
        if (
          !(function (t) {
            if (!(0, a.tF)(a.$8.DOWNLOAD_BUTTON_AD)) return !1;
            let {
                storageKey: e = w,
                cooldownMs: n = 18e5,
                dailyLimit: o = 2,
              } = t || {},
              r = m(e),
              i = Date.now();
            return (
              !(r.count >= o) && (!r.lastOpenedAt || !(i - r.lastOpenedAt < n))
            );
          })(t)
        )
          return !1;
        if (e === i.ns.ADS.DOWNLOAD_BUTTON) {
          let t = (0, l.e5)();
          (t || (0, l.zY)(),
            f(
              (function () {
                let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  e = new URL(i.ns.ADS.DOWNLOAD_BUTTON),
                  n = new URL(window.location.href),
                  o =
                    localStorage.getItem("selected_language") ||
                    navigator.language ||
                    "",
                  r = navigator.userAgent || "",
                  {
                    osVersion: a,
                    model: l,
                    brand: d,
                  } = (function (t) {
                    let e = "",
                      n = "",
                      o = "",
                      r = t.match(/Android\s([\d.]+)/i);
                    if (r) {
                      var a, i;
                      ((e = r[1]),
                        (n =
                          (null ===
                            (i = t.match(
                              /Android\s[\d.]+;\s*([^;]+?)\s+Build\//i,
                            )) || void 0 === i
                            ? void 0
                            : null === (a = i[1]) || void 0 === a
                              ? void 0
                              : a.trim()) || ""));
                    } else {
                      let o = t.match(
                        /(?:iPhone OS|CPU (?:iPhone )?OS)\s([\d_]+)/i,
                      );
                      if (o) e = o[1].replace(/_/g, ".");
                      else {
                        let n = t.match(/Windows NT\s([\d.]+)/i);
                        if (n) e = n[1];
                        else {
                          let n = t.match(/Mac OS X\s([\d_]+)/i);
                          n && (e = n[1].replace(/_/g, "."));
                        }
                      }
                      /iPhone/i.test(t)
                        ? (n = "iPhone")
                        : /iPad/i.test(t) && (n = "iPad");
                    }
                    return (
                      (o = /iPhone|iPad|Macintosh/i.test(t)
                        ? "Apple"
                        : n.split(/\s+/)[0] || ""),
                      { osVersion: e, model: n, brand: o }
                    );
                  })(r);
                return (
                  e.searchParams.set(
                    "click_id",
                    "undefined" != typeof crypto && crypto.randomUUID
                      ? crypto.randomUUID()
                      : ""
                          .concat(Date.now(), "-")
                          .concat(Math.random().toString(16).slice(2)),
                  ),
                  e.searchParams.set("aid", n.searchParams.get("aid") || ""),
                  e.searchParams.set("country", t || ""),
                  e.searchParams.set("sub", n.searchParams.get("sub") || ""),
                  e.searchParams.set("ua", r),
                  e.searchParams.set("lang", o),
                  e.searchParams.set("osv", a),
                  e.searchParams.set("model", l),
                  e.searchParams.set("brand", d),
                  e.toString()
                );
              })(t),
              o,
            ));
        } else f(e, o);
        let r = m(n);
        return (
          localStorage.setItem(
            n,
            JSON.stringify({
              date: r.date,
              count: r.count + 1,
              lastOpenedAt: Date.now(),
            }),
          ),
          window.sendLog &&
            window.sendLog("ad_action", {
              act: "download_button_open",
              adType: "flat_ads",
              adId: e,
            }),
          !0
        );
      }
      function p(t) {
        let { adId: e } = t;
        return (0, r.X)(a.$8.GOOGLE_AD_MANAGER)
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(c.default, {
                  src: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                  strategy: "afterInteractive",
                  onLoad: () => {
                    window.sendLog("ad_script_loaded");
                  },
                }),
                (0, o.jsx)(c.default, {
                  id: "google-ad-manager",
                  strategy: "afterInteractive",
                  children:
                    "\n          window.googletag = window.googletag || {cmd: []};\n          googletag.cmd.push(function() {\n            // --- A. 公共设置 ---\n            // 如果广告没加载出来，折叠空的 div，避免占位空白\n            googletag.pubads().collapseEmptyDivs();\n\n            var anchorSlot = googletag.defineOutOfPageSlot('"
                      .concat(
                        e,
                        "', googletag.enums.OutOfPageFormat.TOP_ANCHOR);\n\n            if (anchorSlot) {\n              anchorSlot.addService(googletag.pubads());\n            }\n\n            var anchorAdId = '",
                      )
                      .concat(
                        e,
                        "';\n\n            googletag.pubads().addEventListener('slotRequested', function(event) {\n              var slot = event.slot;\n              var adUnitPath = slot.getAdUnitPath();\n              var isAnchor = adUnitPath === anchorAdId;\n              var isInterstitial = window.interstitialSlot && slot === window.interstitialSlot;\n              var adType = isAnchor ? 'anchor_top' : (isInterstitial ? 'interstitial' : 'banner');\n              window.sendLog('ad_action', { act: 'request', adId: adUnitPath, adType: adType });\n            });\n\n            googletag.pubads().addEventListener('slotRenderEnded', function(event) {\n              var slot = event.slot;\n              var adUnitPath = slot.getAdUnitPath();\n              var isAnchor = adUnitPath === anchorAdId;\n              var isInterstitial = window.interstitialSlot && slot === window.interstitialSlot;\n              var adType = isAnchor ? 'anchor_top' : (isInterstitial ? 'interstitial' : 'banner');\n              var act = event.isEmpty ? 'fill_fail' : 'fill_suc';\n              var logData = {\n                act: act,\n                adId: adUnitPath,\n                adType: adType,\n                size: event.size,\n                isEmpty: event.isEmpty\n              };\n              window.sendLog('ad_action', logData);\n            });\n\n            googletag.pubads().addEventListener('slotOnload', function(event) {\n              var slot = event.slot;\n              var adUnitPath = slot.getAdUnitPath();\n              var isAnchor = adUnitPath === anchorAdId;\n              var isInterstitial = window.interstitialSlot && slot === window.interstitialSlot;\n              var adType = isAnchor ? 'anchor_top' : (isInterstitial ? 'interstitial' : 'banner');\n              window.sendLog('ad_action', { act: 'loaded', adId: adUnitPath, adType: adType });\n            });\n\n            googletag.pubads().addEventListener('impressionViewable', function(event) {\n              var slot = event.slot;\n              var adUnitPath = slot.getAdUnitPath();\n              var isAnchor = adUnitPath === anchorAdId;\n              var isInterstitial = window.interstitialSlot && slot === window.interstitialSlot;\n              var adType = isAnchor ? 'anchor_top' : (isInterstitial ? 'interstitial' : 'banner');\n              window.sendLog('ad_action', { act: 'show', adId: adUnitPath, adType: adType, viewable: true });\n            });\n\n            googletag.enableServices();\n\n            if(anchorSlot) {\n              googletag.display(anchorSlot);\n            }\n            for(var slot of (window.slots||[])) {\n              googletag.display(slot);\n            }\n          });\n        ",
                      ),
                }),
              ],
            })
          : null;
      }
      let v = (t) => {
        let {
            adId: e,
            style: n,
            divId: i,
            className: l,
            width: d,
            height: s,
          } = t,
          c = (0, r.X)(a.$8.GOOGLE_AD_BANNER),
          g = (0, u.useRef)(!1);
        return (
          (0, u.useEffect)(() => {
            var t, n;
            c &&
              !g.current &&
              ((g.current = !0),
              (window.googletag = window.googletag || { cmd: [] }),
              null === (n = window.googletag) ||
                void 0 === n ||
                null === (t = n.cmd) ||
                void 0 === t ||
                t.push(function () {
                  var t = window.googletag.defineSlot(e, [d, s], i);
                  t &&
                    (t.addService(window.googletag.pubads()),
                    window.googletag.display(t),
                    window.sendLog("ad_init", {
                      type: "ad_display",
                      adId: e,
                      adType: "banner",
                    }));
                }));
          }, [c]),
          c &&
            (0, o.jsx)("div", {
              id: i,
              className: l,
              style: { ...n, minWidth: d, minHeight: s },
            })
        );
      };
      function y(t) {
        let {
            adId: e,
            style: n,
            divId: i,
            width: l,
            height: d,
            className: s,
          } = t,
          c = (0, r.X)(a.$8.GOOGLE_AD_BANNER),
          g = (0, u.useRef)(null),
          [w, f] = (0, u.useState)(!1),
          m = (0, u.useRef)(!1),
          h = (0, u.useRef)(null);
        return (
          (0, u.useEffect)(() => {
            if (!c || !g.current || m.current) return;
            let t = new IntersectionObserver(
              (t) => {
                t.forEach((t) => {
                  t.isIntersecting &&
                    (f(!0), h.current && h.current.unobserve(t.target));
                });
              },
              { rootMargin: "50px" },
            );
            return (
              (h.current = t),
              t.observe(g.current),
              () => {
                h.current && h.current.disconnect();
              }
            );
          }, [c]),
          (0, u.useEffect)(() => {
            w &&
              !m.current &&
              ((m.current = !0),
              (window.googletag = window.googletag || { cmd: [] }),
              window.googletag.cmd.push(function () {
                let t = window.googletag.defineSlot(e, [l, d], i);
                t &&
                  (t.addService(window.googletag.pubads()),
                  window.googletag.display(t),
                  window.sendLog("ad_init", {
                    type: "ad_display",
                    adId: e,
                    adType: "banner",
                  }));
              }));
          }, [w]),
          c &&
            (0, o.jsx)("div", {
              ref: g,
              id: i,
              className: s,
              style: { ...n, minWidth: l, minHeight: d },
            })
        );
      }
      function _(t, e) {
        if (!(0, a.tF)(a.$8.GOOGLE_AD_MANAGER)) return;
        let {
            storageKey: n = "gpt_interstitial_last_shown_at",
            cooldownMs: o = 36e5,
            onSuccess: r,
            onFail: i,
          } = e || {},
          l = !1,
          d = window.setTimeout(() => {
            s(i);
          }, 3e3),
          s = (t) => {
            (window.clearTimeout(d), !l && t && ((l = !0), t()));
          },
          c = Date.now();
        try {
          let t = Number(window.localStorage.getItem(n) || "0");
          if (t && c - t < o) {
            s(i);
            return;
          }
        } catch (t) {
          s(i);
          return;
        }
        ((window.googletag = window.googletag || { cmd: [] }),
          window.googletag.cmd.push(function () {
            if (!window.googletag || !window.googletag.pubads) {
              s(i);
              return;
            }
            let e = window.googletag,
              o = e.pubads();
            if (!g) {
              if (
                (g = e.defineOutOfPageSlot(
                  t,
                  e.enums.OutOfPageFormat.INTERSTITIAL,
                ))
              )
                (g
                  .addService(o)
                  .setConfig({
                    interstitial: {
                      triggers: { navBar: !0, unhideWindow: !0 },
                    },
                  }),
                  (window.interstitialSlot = g));
              else {
                (window.sendLog &&
                  window.sendLog("ad_action", {
                    act: "interstitial_unsupported",
                    adId: t,
                    adType: "interstitial",
                  }),
                  s(i));
                return;
              }
            }
            let a = g,
              l = (t) => {
                if (t && t.slot === a) {
                  if (
                    (o.removeEventListener("slotRenderEnded", l), t.isEmpty)
                  ) {
                    if ("function" == typeof window.googletag.destroySlots)
                      try {
                        window.googletag.destroySlots([a]);
                      } catch (t) {}
                    ((g = null), (window.interstitialSlot = null), s(i));
                    return;
                  }
                  try {
                    window.localStorage.setItem(n, String(Date.now()));
                  } catch (t) {}
                  s(r);
                }
              };
            (o.addEventListener("slotRenderEnded", l), e.display(a));
          }));
      }
      function S(t) {
        let {
            adUnitPath: e,
            isOpen: n,
            onClose: r,
            width: a = 300,
            height: i = 250,
            storageKey: l = "interstitial_last_shown_at",
            divId: d,
          } = t,
          [s, c] = (0, u.useState)(!1),
          g = (0, u.useRef)(null),
          w = (0, u.useRef)(null),
          f = (0, u.useCallback)(() => {
            if (
              (c(!1),
              w.current &&
                window.googletag &&
                "function" == typeof window.googletag.destroySlots)
            )
              try {
                window.googletag.destroySlots([w.current]);
              } catch (t) {}
            (g.current &&
              ((g.current.innerHTML = ""), g.current.removeAttribute("id")),
              (w.current = null),
              r());
          }, [r]);
        return ((0, u.useEffect)(() => {
          if (!n) {
            c(!1);
            return;
          }
          let t = Date.now();
          try {
            let e = Number(window.localStorage.getItem(l) || "0");
            if (e && t - e < 3e5) {
              f();
              return;
            }
          } catch (t) {
            f();
            return;
          }
          window.googletag = window.googletag || { cmd: [] };
          let o =
            d ||
            "simulated-interstitial-" + Math.random().toString(36).slice(2);
          return (
            g.current && (g.current.id = o),
            window.googletag.cmd.push(function () {
              if (!g.current || !window.googletag) {
                f();
                return;
              }
              let t = window.googletag,
                n = t.pubads(),
                r = t.defineSlot(e, [a, i], o);
              if (!r) {
                f();
                return;
              }
              ((w.current = r),
                r.addService(n),
                n.addEventListener("slotRenderEnded", function t(e) {
                  if (e.slot === w.current) {
                    if (
                      (n.removeEventListener("slotRenderEnded", t), e.isEmpty)
                    ) {
                      f();
                      return;
                    }
                    c(!0);
                    try {
                      window.localStorage.setItem(l, String(Date.now()));
                    } catch (t) {}
                  }
                }),
                t.display(o));
            }),
            () => {
              if (
                (c(!1),
                w.current &&
                  window.googletag &&
                  "function" == typeof window.googletag.destroySlots)
              )
                try {
                  window.googletag.destroySlots([w.current]);
                } catch (t) {}
              (g.current &&
                ((g.current.innerHTML = ""), g.current.removeAttribute("id")),
                (w.current = null));
            }
          );
        }, [e, d, f, i, n, l, a]),
        n)
          ? (0, o.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/60",
              style: { display: s ? "flex" : "none" },
              children: (0, o.jsxs)("div", {
                className: "flex flex-col items-center justify-center",
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "overflow-hidden rounded-[0.16rem] bg-white shadow-[0_0.12rem_0.24rem_rgba(0,0,0,0.3)]",
                    style: { width: a, height: i },
                    children: (0, o.jsx)("div", {
                      ref: g,
                      className: "h-full w-full",
                    }),
                  }),
                  (0, o.jsx)("button", {
                    type: "button",
                    onClick: f,
                    className:
                      "mt-[0.24rem] h-[0.8rem] w-[3.8rem] rounded-[0.08rem] bg-[#3399FF] px-[0.4rem] text-center text-[0.28rem] font-bold text-white md:h-[40px] md:text-[18px]",
                    children: "Close",
                  }),
                ],
              }),
            })
          : null;
      }
    },
    654: function (t, e, n) {
      n.d(e, {
        X: function () {
          return a;
        },
      });
      var o = n(13),
        r = n(4271);
      function a(t) {
        let [e, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            n((0, o.tF)(t));
          }, [t]),
          e
        );
      }
    },
    13: function (t, e, n) {
      n.d(e, {
        $8: function () {
          return r;
        },
        el: function () {
          return d;
        },
        tF: function () {
          return s;
        },
      });
      var o,
        r,
        a = n(5798);
      (((o = r || (r = {})).FAST_DOWNLOAD = "fast_download"),
        (o.PENDAN = "pendan"),
        (o.RES_LIMIT = "resolution_limit"),
        (o.GOOGLE_AD_MANAGER = "google_ad_manager"),
        (o.GOOGLE_AD_BANNER = "google_ad_banner"),
        (o.DOWNLOAD_BUTTON_AD = "download_button_ad"));
      let i = new Set(["fast_download", "pendan", "resolution_limit"]),
        l = {
          google_ad_manager: [],
          google_ad_banner: [],
          download_button_ad: [],
        },
        d = () => {
          try {
            let t = "ab_bucket_id",
              e = window.localStorage.getItem(t);
            if (null !== e) {
              let t = parseInt(e, 10);
              if (!isNaN(t) && t >= 0 && t <= 9) return t;
            }
            let n = Math.floor(10 * Math.random());
            return (window.localStorage.setItem(t, n.toString()), n);
          } catch (t) {
            return (console.error("Error getting bucket id:", t), 0);
          }
        },
        s = (t) => {
          if ("pc" === (0, a.l7)()) return !1;
          if (i.has(t)) return !0;
          let e = d();
          if (-1 === e) return !0;
          let n = l[t];
          return !!n && n.includes(e);
        };
    },
    1858: function (t, e, n) {
      n.d(e, {
        e5: function () {
          return s;
        },
        zY: function () {
          return c;
        },
      });
      var o = n(3365);
      let r = "".concat(o.yK.MAIN_URL, "/api/server_country"),
        a = "shared_server_country",
        i = "",
        l = null;
      function d(t) {
        return (t || "").trim().toUpperCase();
      }
      function s() {
        if (i) return i;
        let t = d(window.localStorage.getItem(a));
        return (t && (i = t), i);
      }
      async function c() {
        let t = s();
        if (t) return t;
        if (!l) {
          let t = new AbortController(),
            e = window.setTimeout(() => {
              t.abort();
            }, 1500);
          l = fetch(r, { cache: "no-store", signal: t.signal })
            .then(async (t) => {
              if (!t.ok) return "";
              let e = await t.json();
              return (function (t) {
                let e = d(t);
                return e ? ((i = e), window.localStorage.setItem(a, e), e) : "";
              })(null == e ? void 0 : e.data);
            })
            .catch(() => "")
            .finally(() => {
              (window.clearTimeout(e), s() || (l = null));
            });
        }
        return l;
      }
    },
  },
]);
