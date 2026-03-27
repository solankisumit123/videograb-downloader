"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7455],
  {
    6213: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r,
        o,
        i,
        a = n(8197),
        l = n(4271),
        u = n(5796),
        c = function (e) {
          return "function" == typeof e;
        },
        s = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        );
      function d(e, t) {
        return s
          ? e
            ? c(e)
              ? e()
              : "current" in e
                ? e.current
                : e
            : t
          : void 0;
      }
      var f = function (e) {
          var t = (0, u.Z)(e);
          (0, l.useEffect)(function () {
            return function () {
              t.current();
            };
          }, []);
        },
        p = function (e, t) {
          if (e === t) return !0;
          for (var n = 0; n < e.length; n++)
            if (!Object.is(e[n], t[n])) return !1;
          return !0;
        },
        v =
          ((r = l.useEffect),
          function (e, t, n) {
            var o = (0, l.useRef)(!1),
              i = (0, l.useRef)([]),
              a = (0, l.useRef)([]),
              u = (0, l.useRef)(void 0);
            (r(function () {
              var r,
                l = (Array.isArray(n) ? n : [n]).map(function (e) {
                  return d(e);
                });
              if (!o.current) {
                ((o.current = !0),
                  (i.current = l),
                  (a.current = t),
                  (u.current = e()));
                return;
              }
              (l.length === i.current.length &&
                p(i.current, l) &&
                p(a.current, t)) ||
                (null === (r = u.current) || void 0 === r || r.call(u),
                (i.current = l),
                (a.current = t),
                (u.current = e()));
            }),
              f(function () {
                var e;
                (null === (e = u.current) || void 0 === e || e.call(u),
                  (o.current = !1));
              }));
          }),
        m = function (e, t, n) {
          void 0 === n && (n = {});
          var r = n.enable,
            o = void 0 === r || r,
            i = (0, u.Z)(t);
          v(
            function () {
              if (o) {
                var t = d(n.target, window);
                if (null == t ? void 0 : t.addEventListener) {
                  var r = function (e) {
                      return i.current(e);
                    },
                    a = Array.isArray(e) ? e : [e];
                  return (
                    a.forEach(function (e) {
                      t.addEventListener(e, r, {
                        capture: n.capture,
                        once: n.once,
                        passive: n.passive,
                      });
                    }),
                    function () {
                      a.forEach(function (e) {
                        t.removeEventListener(e, r, { capture: n.capture });
                      });
                    }
                  );
                }
              }
            },
            [e, n.capture, n.once, n.passive, o],
            n.target,
          );
        },
        h = function (e) {
          var t = (0, l.useRef)(e);
          t.current = (0, l.useMemo)(
            function () {
              return e;
            },
            [e],
          );
          var n = (0, l.useRef)(void 0);
          return (
            n.current ||
              (n.current = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                return t.current.apply(this, e);
              }),
            n.current
          );
        },
        g =
          ((o = l.useEffect),
          function (e, t) {
            var n = (0, l.useRef)(!1);
            (o(function () {
              return function () {
                n.current = !1;
              };
            }, []),
              o(function () {
                if (n.current) return e();
                n.current = !0;
              }, t));
          }),
        y = "AHOOKS_SYNC_STORAGE_EVENT_NAME",
        w =
          ((i = function () {
            return s ? localStorage : void 0;
          }),
          function (e, t) {
            void 0 === t && (t = {});
            var n,
              r = t.listenStorageChange,
              o = void 0 !== r && r,
              u = t.onError,
              s =
                void 0 === u
                  ? function (e) {
                      console.error(e);
                    }
                  : u;
            try {
              n = i();
            } catch (e) {
              s(e);
            }
            function d() {
              try {
                var r = null == n ? void 0 : n.getItem(e);
                if (r)
                  return t.deserializer ? t.deserializer(r) : JSON.parse(r);
              } catch (e) {
                s(e);
              }
              return c(t.defaultValue) ? t.defaultValue() : t.defaultValue;
            }
            var f = (0, a.CR)((0, l.useState)(d), 2),
              p = f[0],
              v = f[1];
            g(
              function () {
                v(d());
              },
              [e],
            );
            var w = function (t) {
              t.key === e && t.storageArea === n && v(d());
            };
            return (
              m("storage", w, { enable: o }),
              m(
                y,
                function (e) {
                  w(e.detail);
                },
                { enable: o },
              ),
              [
                p,
                h(function (r) {
                  var i = c(r) ? r(p) : r;
                  o || v(i);
                  try {
                    var a = void 0,
                      l = null == n ? void 0 : n.getItem(e);
                    (void 0 === i
                      ? ((a = null), null == n || n.removeItem(e))
                      : ((a = t.serializer
                          ? t.serializer(i)
                          : JSON.stringify(i)),
                        null == n || n.setItem(e, a)),
                      dispatchEvent(
                        new CustomEvent(y, {
                          detail: {
                            key: e,
                            newValue: a,
                            oldValue: l,
                            storageArea: n,
                          },
                        }),
                      ));
                  } catch (e) {
                    s(e);
                  }
                }),
              ]
            );
          });
    },
    3539: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    125: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    7568: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    2861: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    7106: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    2101: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    5401: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("Download", [
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
      ]);
    },
    995: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("Heart", [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
          },
        ],
      ]);
    },
    4411: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("MessageCircle", [
        ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
      ]);
    },
    6845: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("Play", [
        ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
      ]);
    },
    8710: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(3834).Z)("Scan", [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ]);
    },
    9712: function (e, t, n) {
      let r;
      n.d(t, {
        oC: function () {
          return on;
        },
        VY: function () {
          return r8;
        },
        ZA: function () {
          return r9;
        },
        ck: function () {
          return ot;
        },
        wU: function () {
          return oi;
        },
        __: function () {
          return oe;
        },
        Uv: function () {
          return r7;
        },
        Ee: function () {
          return or;
        },
        Rk: function () {
          return oo;
        },
        fC: function () {
          return r4;
        },
        Z0: function () {
          return oa;
        },
        Tr: function () {
          return ol;
        },
        tu: function () {
          return oc;
        },
        fF: function () {
          return ou;
        },
        xz: function () {
          return r6;
        },
      });
      var o,
        i,
        a,
        l,
        u,
        c,
        s,
        d,
        f = n(4271),
        p = n.t(f, 2);
      function v(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function m(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function h(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = m(e, t);
              return (n || "function" != typeof r || (n = !0), r);
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : m(e[t], null);
              }
            };
        };
      }
      function g(...e) {
        return f.useCallback(h(...e), e);
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var y = n(4336);
      function w(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => f.createContext(e));
            return function (n) {
              let r = n?.[e] || t;
              return f.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r],
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let o = f.createContext(r),
                i = n.length;
              n = [...n, r];
              let a = (t) => {
                let { scope: n, children: r, ...a } = t,
                  l = n?.[e]?.[i] || o,
                  u = f.useMemo(() => a, Object.values(a));
                return (0, y.jsx)(l.Provider, { value: u, children: r });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, a) {
                    let l = a?.[e]?.[i] || o,
                      u = f.useContext(l);
                    if (u) return u;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return f.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: r }),
                    [r],
                  );
                };
              };
              return ((n.scopeName = t.scopeName), n);
            })(r, ...t),
          ]
        );
      }
      var b = globalThis?.document ? f.useLayoutEffect : () => {},
        x = p[" useInsertionEffect ".trim().toString()] || b;
      function E({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [o, i, a] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = f.useState(e),
              o = f.useRef(n),
              i = f.useRef(t);
            return (
              x(() => {
                i.current = t;
              }, [t]),
              f.useEffect(() => {
                o.current !== n && (i.current?.(n), (o.current = n));
              }, [n, o]),
              [n, r, i]
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          u = l ? e : o;
        {
          let t = f.useRef(void 0 !== e);
          f.useEffect(() => {
            let e = t.current;
            if (e !== l) {
              let t = l ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
              );
            }
            t.current = l;
          }, [l, r]);
        }
        return [
          u,
          f.useCallback(
            (t) => {
              if (l) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && a.current?.(n);
              } else i(t);
            },
            [l, e, i, a],
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
      var R = n(4583);
      function C(e) {
        let t = (function (e) {
            let t = f.forwardRef((e, t) => {
              let { children: n, ...r } = e;
              if (f.isValidElement(n)) {
                let e, o;
                let i =
                    (e = Object.getOwnPropertyDescriptor(
                      n.props,
                      "ref",
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning
                      ? n.ref
                      : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning
                        ? n.props.ref
                        : n.props.ref || n.ref,
                  a = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let o = e[r],
                        i = t[r];
                      /^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = (...e) => {
                              let t = i(...e);
                              return (o(...e), t);
                            })
                          : o && (n[r] = o)
                        : "style" === r
                          ? (n[r] = { ...o, ...i })
                          : "className" === r &&
                            (n[r] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(r, n.props);
                return (
                  n.type !== f.Fragment && (a.ref = t ? h(t, i) : i),
                  f.cloneElement(n, a)
                );
              }
              return f.Children.count(n) > 1 ? f.Children.only(null) : null;
            });
            return ((t.displayName = `${e}.SlotClone`), t);
          })(e),
          n = f.forwardRef((e, n) => {
            let { children: r, ...o } = e,
              i = f.Children.toArray(r),
              a = i.find(M);
            if (a) {
              let e = a.props.children,
                r = i.map((t) =>
                  t !== a
                    ? t
                    : f.Children.count(e) > 1
                      ? f.Children.only(null)
                      : f.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, y.jsx)(t, {
                ...o,
                ref: n,
                children: f.isValidElement(e)
                  ? f.cloneElement(e, void 0, r)
                  : null,
              });
            }
            return (0, y.jsx)(t, { ...o, ref: n, children: r });
          });
        return ((n.displayName = `${e}.Slot`), n);
      }
      var S = Symbol("radix.slottable");
      function M(e) {
        return (
          f.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === S
        );
      }
      var A = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = C(`Primitive.${t}`),
          r = f.forwardRef((e, r) => {
            let { asChild: o, ...i } = e,
              a = o ? n : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, y.jsx)(a, { ...i, ref: r })
            );
          });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
      }, {});
      function k(e, t) {
        e && R.flushSync(() => e.dispatchEvent(t));
      }
      function T(e) {
        let t = e + "CollectionProvider",
          [n, r] = w(t),
          [o, i] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          a = (e) => {
            let { scope: t, children: n } = e,
              r = f.useRef(null),
              i = f.useRef(new Map()).current;
            return (0, y.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n,
            });
          };
        a.displayName = t;
        let l = e + "CollectionSlot",
          u = C(l),
          c = f.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = g(t, i(l, n).collectionRef);
            return (0, y.jsx)(u, { ref: o, children: r });
          });
        c.displayName = l;
        let s = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          p = C(s),
          v = f.forwardRef((e, t) => {
            let { scope: n, children: r, ...o } = e,
              a = f.useRef(null),
              l = g(t, a),
              u = i(s, n);
            return (
              f.useEffect(
                () => (
                  u.itemMap.set(a, { ref: a, ...o }),
                  () => void u.itemMap.delete(a)
                ),
              ),
              (0, y.jsx)(p, { [d]: "", ref: l, children: r })
            );
          });
        return (
          (v.displayName = s),
          [
            { Provider: a, Slot: c, ItemSlot: v },
            function (t) {
              let n = i(e + "CollectionConsumer", t);
              return f.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(d, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ]
        );
      }
      var D = f.createContext(void 0);
      function N(e) {
        let t = f.useContext(D);
        return e || t || "ltr";
      }
      function P(e) {
        let t = f.useRef(e);
        return (
          f.useEffect(() => {
            t.current = e;
          }),
          f.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
      var L = "dismissableLayer.update",
        O = f.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        j = f.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: a,
              onFocusOutside: l,
              onInteractOutside: u,
              onDismiss: c,
              ...d
            } = e,
            p = f.useContext(O),
            [m, h] = f.useState(null),
            w =
              null !== (r = null == m ? void 0 : m.ownerDocument) &&
              void 0 !== r
                ? r
                : null === (n = globalThis) || void 0 === n
                  ? void 0
                  : n.document,
            [, b] = f.useState({}),
            x = g(t, (e) => h(e)),
            E = Array.from(p.layers),
            [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
            C = E.indexOf(R),
            S = m ? E.indexOf(m) : -1,
            M = p.layersWithOutsidePointerEventsDisabled.size > 0,
            k = S >= C,
            T = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = P(e),
                o = f.useRef(!1),
                i = f.useRef(() => {});
              return (
                f.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            _("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    (window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current));
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...p.branches].some((e) => e.contains(t));
              !k ||
                n ||
                (null == a || a(e),
                null == u || u(e),
                e.defaultPrevented || null == c || c());
            }, w),
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = P(e),
                o = f.useRef(!1);
              return (
                f.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      _(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...p.branches].some((e) => e.contains(t)) ||
                (null == l || l(e),
                null == u || u(e),
                e.defaultPrevented || null == c || c());
            }, w);
          return (
            !(function (e, t = globalThis?.document) {
              let n = P(e);
              f.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              S !== p.layers.size - 1 ||
                (null == i || i(e),
                !e.defaultPrevented && c && (e.preventDefault(), c()));
            }, w),
            f.useEffect(() => {
              if (m)
                return (
                  o &&
                    (0 === p.layersWithOutsidePointerEventsDisabled.size &&
                      ((s = w.body.style.pointerEvents),
                      (w.body.style.pointerEvents = "none")),
                    p.layersWithOutsidePointerEventsDisabled.add(m)),
                  p.layers.add(m),
                  I(),
                  () => {
                    o &&
                      1 === p.layersWithOutsidePointerEventsDisabled.size &&
                      (w.body.style.pointerEvents = s);
                  }
                );
            }, [m, w, o, p]),
            f.useEffect(
              () => () => {
                m &&
                  (p.layers.delete(m),
                  p.layersWithOutsidePointerEventsDisabled.delete(m),
                  I());
              },
              [m, p],
            ),
            f.useEffect(() => {
              let e = () => b({});
              return (
                document.addEventListener(L, e),
                () => document.removeEventListener(L, e)
              );
            }, []),
            (0, y.jsx)(A.div, {
              ...d,
              ref: x,
              style: {
                pointerEvents: M ? (k ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: v(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: v(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: v(
                e.onPointerDownCapture,
                T.onPointerDownCapture,
              ),
            })
          );
        });
      function I() {
        let e = new CustomEvent(L);
        document.dispatchEvent(e);
      }
      function _(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && i.addEventListener(e, t, { once: !0 }),
          o ? k(i, a) : i.dispatchEvent(a));
      }
      ((j.displayName = "DismissableLayer"),
        (f.forwardRef((e, t) => {
          let n = f.useContext(O),
            r = f.useRef(null),
            o = g(t, r);
          return (
            f.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, y.jsx)(A.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch"));
      var F = 0;
      function W() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var K = "focusScope.autoFocusOnMount",
        B = "focusScope.autoFocusOnUnmount",
        Z = { bubbles: !1, cancelable: !0 },
        H = f.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...a
            } = e,
            [l, u] = f.useState(null),
            c = P(o),
            s = P(i),
            d = f.useRef(null),
            p = g(t, (e) => u(e)),
            v = f.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (f.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (v.paused || !l) return;
                  let t = e.target;
                  l.contains(t)
                    ? (d.current = t)
                    : U(d.current, { select: !0 });
                },
                t = function (e) {
                  if (v.paused || !l) return;
                  let t = e.relatedTarget;
                  null === t || l.contains(t) || U(d.current, { select: !0 });
                };
              (document.addEventListener("focusin", e),
                document.addEventListener("focusout", t));
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && U(l);
              });
              return (
                l && n.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  (document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect());
                }
              );
            }
          }, [r, l, v.paused]),
            f.useEffect(() => {
              if (l) {
                X.add(v);
                let e = document.activeElement;
                if (!l.contains(e)) {
                  let t = new CustomEvent(K, Z);
                  (l.addEventListener(K, c),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (U(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        V(l).filter((e) => "A" !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && U(l)));
                }
                return () => {
                  (l.removeEventListener(K, c),
                    setTimeout(() => {
                      let t = new CustomEvent(B, Z);
                      (l.addEventListener(B, s),
                        l.dispatchEvent(t),
                        t.defaultPrevented ||
                          U(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(B, s),
                        X.remove(v));
                    }, 0));
                };
              }
            }, [l, c, s, v]));
          let m = f.useCallback(
            (e) => {
              if ((!n && !r) || v.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = V(e);
                    return [z(t, e), z(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && U(i, { select: !0 }))
                    : (e.preventDefault(), n && U(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, v.paused],
          );
          return (0, y.jsx)(A.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: m,
          });
        });
      function V(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function z(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function U(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          (e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select());
        }
      }
      H.displayName = "FocusScope";
      var X =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            (e !== t && (null == t || t.pause()), (r = Y(r, e)).unshift(e));
          },
          remove(e) {
            var t;
            null === (t = (r = Y(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function Y(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return (-1 !== r && n.splice(r, 1), n);
      }
      var G = p[" useId ".trim().toString()] || (() => void 0),
        $ = 0;
      function q(e) {
        let [t, n] = f.useState(G());
        return (
          b(() => {
            e || n((e) => e ?? String($++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let J = ["top", "right", "bottom", "left"],
        Q = Math.min,
        ee = Math.max,
        et = Math.round,
        en = Math.floor,
        er = (e) => ({ x: e, y: e }),
        eo = { left: "right", right: "left", bottom: "top", top: "bottom" },
        ei = { start: "end", end: "start" };
      function ea(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function el(e) {
        return e.split("-")[0];
      }
      function eu(e) {
        return e.split("-")[1];
      }
      function ec(e) {
        return "x" === e ? "y" : "x";
      }
      function es(e) {
        return "y" === e ? "height" : "width";
      }
      let ed = new Set(["top", "bottom"]);
      function ef(e) {
        return ed.has(el(e)) ? "y" : "x";
      }
      function ep(e) {
        return e.replace(/start|end/g, (e) => ei[e]);
      }
      let ev = ["left", "right"],
        em = ["right", "left"],
        eh = ["top", "bottom"],
        eg = ["bottom", "top"];
      function ey(e) {
        return e.replace(/left|right|bottom|top/g, (e) => eo[e]);
      }
      function ew(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function eb(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function ex(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          a = ef(t),
          l = ec(ef(t)),
          u = es(l),
          c = el(t),
          s = "y" === a,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (c) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (eu(t)) {
          case "start":
            r[l] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[l] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let eE = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: a,
          } = n,
          l = i.filter(Boolean),
          u = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: d } = ex(c, r, u),
          f = r,
          p = {},
          v = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: i, fn: m } = l[n],
            {
              x: h,
              y: g,
              data: y,
              reset: w,
            } = await m({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: a,
              elements: { reference: e, floating: t },
            });
          ((s = null != h ? h : s),
            (d = null != g ? g : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              v <= 50 &&
              (v++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: d } = ex(c, f, u))),
              (n = -1)));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function eR(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: a, elements: l, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = ea(t, e),
          v = ew(p),
          m = l[f ? ("floating" === d ? "reference" : "floating") : d],
          h = eb(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            }),
          ),
          g =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(l.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = eb(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g,
          );
        return {
          top: (h.top - b.top + v.top) / w.y,
          bottom: (b.bottom - h.bottom + v.bottom) / w.y,
          left: (h.left - b.left + v.left) / w.x,
          right: (b.right - h.right + v.right) / w.x,
        };
      }
      function eC(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function eS(e) {
        return J.some((t) => e[t] >= 0);
      }
      let eM = new Set(["left", "top"]);
      async function eA(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          a = el(n),
          l = eu(n),
          u = "y" === ef(n),
          c = eM.has(a) ? -1 : 1,
          s = i && u ? -1 : 1,
          d = ea(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: v,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          l && "number" == typeof v && (p = "end" === l ? -1 * v : v),
          u ? { x: p * s, y: f * c } : { x: f * c, y: p * s }
        );
      }
      function ek() {
        return "undefined" != typeof window;
      }
      function eT(e) {
        return eP(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function eD(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function eN(e) {
        var t;
        return null ==
          (t = (eP(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function eP(e) {
        return !!ek() && (e instanceof Node || e instanceof eD(e).Node);
      }
      function eL(e) {
        return !!ek() && (e instanceof Element || e instanceof eD(e).Element);
      }
      function eO(e) {
        return (
          !!ek() && (e instanceof HTMLElement || e instanceof eD(e).HTMLElement)
        );
      }
      function ej(e) {
        return (
          !!ek() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof eD(e).ShadowRoot)
        );
      }
      let eI = new Set(["inline", "contents"]);
      function e_(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = eY(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !eI.has(o);
      }
      let eF = new Set(["table", "td", "th"]),
        eW = [":popover-open", ":modal"];
      function eK(e) {
        return eW.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      let eB = ["transform", "translate", "scale", "rotate", "perspective"],
        eZ = [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective",
          "filter",
        ],
        eH = ["paint", "layout", "strict", "content"];
      function eV(e) {
        let t = ez(),
          n = eL(e) ? eY(e) : e;
        return (
          eB.some((e) => !!n[e] && "none" !== n[e]) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          eZ.some((e) => (n.willChange || "").includes(e)) ||
          eH.some((e) => (n.contain || "").includes(e))
        );
      }
      function ez() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      let eU = new Set(["html", "body", "#document"]);
      function eX(e) {
        return eU.has(eT(e));
      }
      function eY(e) {
        return eD(e).getComputedStyle(e);
      }
      function eG(e) {
        return eL(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function e$(e) {
        if ("html" === eT(e)) return e;
        let t = e.assignedSlot || e.parentNode || (ej(e) && e.host) || eN(e);
        return ej(t) ? t.host : t;
      }
      function eq(e, t, n) {
        var r;
        (void 0 === t && (t = []), void 0 === n && (n = !0));
        let o = (function e(t) {
            let n = e$(t);
            return eX(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eO(n) && e_(n)
                ? n
                : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = eD(o);
        if (i) {
          let e = eJ(a);
          return t.concat(
            a,
            a.visualViewport || [],
            e_(o) ? o : [],
            e && n ? eq(e) : [],
          );
        }
        return t.concat(o, eq(o, [], n));
      }
      function eJ(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eQ(e) {
        let t = eY(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = eO(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          l = et(n) !== i || et(r) !== a;
        return (l && ((n = i), (r = a)), { width: n, height: r, $: l });
      }
      function e0(e) {
        return eL(e) ? e : e.contextElement;
      }
      function e1(e) {
        let t = e0(e);
        if (!eO(t)) return er(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = eQ(t),
          a = (i ? et(n.width) : n.width) / r,
          l = (i ? et(n.height) : n.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: a, y: l }
        );
      }
      let e2 = er(0);
      function e5(e) {
        let t = eD(e);
        return ez() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : e2;
      }
      function e3(e, t, n, r) {
        var o;
        (void 0 === t && (t = !1), void 0 === n && (n = !1));
        let i = e.getBoundingClientRect(),
          a = e0(e),
          l = er(1);
        t && (r ? eL(r) && (l = e1(r)) : (l = e1(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === eD(a)) && o)
            ? e5(a)
            : er(0),
          c = (i.left + u.x) / l.x,
          s = (i.top + u.y) / l.y,
          d = i.width / l.x,
          f = i.height / l.y;
        if (a) {
          let e = eD(a),
            t = r && eL(r) ? eD(r) : r,
            n = e,
            o = eJ(n);
          for (; o && r && t !== n; ) {
            let e = e1(o),
              t = o.getBoundingClientRect(),
              r = eY(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += i),
              (s += a),
              (o = eJ((n = eD(o)))));
          }
        }
        return eb({ width: d, height: f, x: c, y: s });
      }
      function e4(e, t) {
        let n = eG(e).scrollLeft;
        return t ? t.left + n : e3(eN(e)).left + n;
      }
      function e6(e, t) {
        let n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - e4(e, n), y: n.top + t.scrollTop };
      }
      let e7 = new Set(["absolute", "fixed"]);
      function e8(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = eD(e),
              r = eN(e),
              o = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              l = 0,
              u = 0;
            if (o) {
              ((i = o.width), (a = o.height));
              let e = ez();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (u = o.offsetTop));
            }
            let c = e4(r);
            if (c <= 0) {
              let e = r.ownerDocument,
                t = e.body,
                n = getComputedStyle(t),
                o =
                  ("CSS1Compat" === e.compatMode &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                  0,
                a = Math.abs(r.clientWidth - t.clientWidth - o);
              a <= 25 && (i -= a);
            } else c <= 25 && (i += c);
            return { width: i, height: a, x: l, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = eN(e),
              n = eG(e),
              r = e.ownerDocument.body,
              o = ee(
                t.scrollWidth,
                t.clientWidth,
                r.scrollWidth,
                r.clientWidth,
              ),
              i = ee(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              ),
              a = -n.scrollLeft + e4(e),
              l = -n.scrollTop;
            return (
              "rtl" === eY(r).direction &&
                (a += ee(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: l }
            );
          })(eN(e));
        else if (eL(t))
          r = (function (e, t) {
            let n = e3(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = eO(e) ? e1(e) : er(1),
              a = e.clientWidth * i.x;
            return {
              width: a,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = e5(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return eb(r);
      }
      function e9(e) {
        return "static" === eY(e).position;
      }
      function te(e, t) {
        if (!eO(e) || "fixed" === eY(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (eN(e) === n && (n = n.ownerDocument.body), n);
      }
      function tt(e, t) {
        var n;
        let r = eD(e);
        if (eK(e)) return r;
        if (!eO(e)) {
          let t = e$(e);
          for (; t && !eX(t); ) {
            if (eL(t) && !e9(t)) return t;
            t = e$(t);
          }
          return r;
        }
        let o = te(e, t);
        for (; o && ((n = o), eF.has(eT(n))) && e9(o); ) o = te(o, t);
        return o && eX(o) && e9(o) && !eV(o)
          ? r
          : o ||
              (function (e) {
                let t = e$(e);
                for (; eO(t) && !eX(t); ) {
                  if (eV(t)) return t;
                  if (eK(t)) break;
                  t = e$(t);
                }
                return null;
              })(e) ||
              r;
      }
      let tn = async function (e) {
          let t = this.getOffsetParent || tt,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = eO(t),
                o = eN(t),
                i = "fixed" === n,
                a = e3(e, !0, i, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                u = er(0);
              if (r || (!r && !i)) {
                if ((("body" !== eT(t) || e_(o)) && (l = eG(t)), r)) {
                  let e = e3(t, !0, i, t);
                  ((u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop));
                } else o && (u.x = e4(o));
              }
              i && !r && o && (u.x = e4(o));
              let c = !o || r || i ? er(0) : e6(o, l);
              return {
                x: a.left + l.scrollLeft - u.x - c.x,
                y: a.top + l.scrollTop - u.y - c.y,
                width: a.width,
                height: a.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        tr = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              a = eN(r),
              l = !!t && eK(t.floating);
            if (r === a || (l && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = er(1),
              s = er(0),
              d = eO(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== eT(r) || e_(a)) && (u = eG(r)), eO(r))
            ) {
              let e = e3(r);
              ((c = e1(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop));
            }
            let f = !a || d || i ? er(0) : e6(a, u);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x + f.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y + f.y,
            };
          },
          getDocumentElement: eN,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? eK(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eq(e, [], !1).filter(
                            (e) => eL(e) && "body" !== eT(e),
                          ),
                          o = null,
                          i = "fixed" === eY(e).position,
                          a = i ? e$(e) : e;
                        for (; eL(a) && !eX(a); ) {
                          let t = eY(a),
                            n = eV(a);
                          (n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    e7.has(o.position)) ||
                                  (e_(a) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = e$(t);
                                      return (
                                        !(r === n || !eL(r) || eX(r)) &&
                                        ("fixed" === eY(r).position || e(r, n))
                                      );
                                    })(e, a))
                            )
                              ? (r = r.filter((e) => e !== a))
                              : (o = t),
                            (a = e$(a)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = i[0],
              l = i.reduce(
                (e, n) => {
                  let r = e8(t, n, o);
                  return (
                    (e.top = ee(r.top, e.top)),
                    (e.right = Q(r.right, e.right)),
                    (e.bottom = Q(r.bottom, e.bottom)),
                    (e.left = ee(r.left, e.left)),
                    e
                  );
                },
                e8(t, a, o),
              );
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: tt,
          getElementRects: tn,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eQ(e);
            return { width: t, height: n };
          },
          getScale: e1,
          isElement: eL,
          isRTL: function (e) {
            return "rtl" === eY(e).direction;
          },
        };
      function to(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let ti = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: a,
                elements: l,
                middlewareData: u,
              } = t,
              { element: c, padding: s = 0 } = ea(e, t) || {};
            if (null == c) return {};
            let d = ew(s),
              f = { x: n, y: r },
              p = ec(ef(o)),
              v = es(p),
              m = await a.getDimensions(c),
              h = "y" === p,
              g = h ? "clientHeight" : "clientWidth",
              y = i.reference[v] + i.reference[p] - f[p] - i.floating[v],
              w = f[p] - i.reference[p],
              b = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c)),
              x = b ? b[g] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(b)))) ||
              (x = l.floating[g] || i.floating[v]);
            let E = x / 2 - m[v] / 2 - 1,
              R = Q(d[h ? "top" : "left"], E),
              C = Q(d[h ? "bottom" : "right"], E),
              S = x - m[v] - C,
              M = x / 2 - m[v] / 2 + (y / 2 - w / 2),
              A = ee(R, Q(M, S)),
              k =
                !u.arrow &&
                null != eu(o) &&
                M !== A &&
                i.reference[v] / 2 - (M < R ? R : C) - m[v] / 2 < 0,
              T = k ? (M < R ? M - R : M - S) : 0;
            return {
              [p]: f[p] + T,
              data: {
                [p]: A,
                centerOffset: M - A - T,
                ...(k && { alignmentOffset: T }),
              },
              reset: k,
            };
          },
        }),
        ta = (e, t, n) => {
          let r = new Map(),
            o = { platform: tr, ...n },
            i = { ...o.platform, _c: r };
          return eE(e, t, { ...o, platform: i });
        };
      var tl =
        "undefined" != typeof document ? f.useLayoutEffect : function () {};
      function tu(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!tu(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !tu(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function tc(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ts(e, t) {
        let n = tc(e);
        return Math.round(t * n) / n;
      }
      function td(e) {
        let t = f.useRef(e);
        return (
          tl(() => {
            t.current = e;
          }),
          t
        );
      }
      let tf = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? ti({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? ti({ element: n, padding: r }).fn(t)
                : {};
          },
        }),
        tp = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: i, placement: a, middlewareData: l } = e,
                  u = await eA(e, n);
                return a === (null == (t = l.offset) ? void 0 : t.placement) &&
                  null != (r = l.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: a } };
              },
            }),
            options: [e, t],
          };
        },
        tv = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: i = !0,
                    crossAxis: a = !1,
                    limiter: l = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...u
                  } = ea(n, e),
                  c = { x: t, y: r },
                  s = await eR(e, u),
                  d = ef(el(o)),
                  f = ec(d),
                  p = c[f],
                  v = c[d];
                if (i) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    n = p + s[e],
                    r = p - s[t];
                  p = ee(n, Q(p, r));
                }
                if (a) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = v + s[e],
                    r = v - s[t];
                  v = ee(n, Q(v, r));
                }
                let m = l.fn({ ...e, [f]: p, [d]: v });
                return {
                  ...m,
                  data: { x: m.x - t, y: m.y - r, enabled: { [f]: i, [d]: a } },
                };
              },
            }),
            options: [e, t],
          };
        },
        tm = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: a,
                  } = e,
                  {
                    offset: l = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0,
                  } = ea(n, e),
                  s = { x: t, y: r },
                  d = ef(o),
                  f = ec(d),
                  p = s[f],
                  v = s[d],
                  m = ea(l, e),
                  h =
                    "number" == typeof m
                      ? { mainAxis: m, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...m };
                if (u) {
                  let e = "y" === f ? "height" : "width",
                    t = i.reference[f] - i.floating[e] + h.mainAxis,
                    n = i.reference[f] + i.reference[e] - h.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (c) {
                  var g, y;
                  let e = "y" === f ? "width" : "height",
                    t = eM.has(el(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (g = a.offset) ? void 0 : g[d])) || 0) +
                      (t ? 0 : h.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) -
                      (t ? h.crossAxis : 0);
                  v < n ? (v = n) : v > r && (v = r);
                }
                return { [f]: p, [d]: v };
              },
            }),
            options: [e, t],
          };
        },
        th = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, i, a;
                let {
                    placement: l,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: s,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: v = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: h = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: y = !0,
                    ...w
                  } = ea(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let b = el(l),
                  x = ef(s),
                  E = el(s) === s,
                  R = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  C =
                    m ||
                    (E || !y
                      ? [ey(s)]
                      : (function (e) {
                          let t = ey(e);
                          return [ep(e), t, ep(t)];
                        })(s)),
                  S = "none" !== g;
                !m &&
                  S &&
                  C.push(
                    ...(function (e, t, n, r) {
                      let o = eu(e),
                        i = (function (e, t, n) {
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? em : ev;
                              return t ? ev : em;
                            case "left":
                            case "right":
                              return t ? eh : eg;
                            default:
                              return [];
                          }
                        })(el(e), "start" === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(ep)))),
                        i
                      );
                    })(s, y, g, R),
                  );
                let M = [s, ...C],
                  A = await eR(e, w),
                  k = [],
                  T = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((p && k.push(A[b]), v)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = eu(e),
                      o = ec(ef(e)),
                      i = es(o),
                      a =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                    return (
                      t.reference[i] > t.floating[i] && (a = ey(a)),
                      [a, ey(a)]
                    );
                  })(l, c, R);
                  k.push(A[e[0]], A[e[1]]);
                }
                if (
                  ((T = [...T, { placement: l, overflows: k }]),
                  !k.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = M[e];
                  if (
                    t &&
                    (!("alignment" === v && x !== ef(t)) ||
                      T.every(
                        (e) => ef(e.placement) !== x || e.overflows[0] > 0,
                      ))
                  )
                    return {
                      data: { index: e, overflows: T },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = T.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (h) {
                      case "bestFit": {
                        let e =
                          null ==
                          (a = T.filter((e) => {
                            if (S) {
                              let t = ef(e.placement);
                              return t === x || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : a[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = s;
                    }
                  if (l !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        tg = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let o, i;
                let { placement: a, rects: l, platform: u, elements: c } = e,
                  { apply: s = () => {}, ...d } = ea(n, e),
                  f = await eR(e, d),
                  p = el(a),
                  v = eu(a),
                  m = "y" === ef(a),
                  { width: h, height: g } = l.floating;
                "top" === p || "bottom" === p
                  ? ((o = p),
                    (i =
                      v ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((i = p), (o = "end" === v ? "top" : "bottom"));
                let y = g - f.top - f.bottom,
                  w = h - f.left - f.right,
                  b = Q(g - f[o], y),
                  x = Q(h - f[i], w),
                  E = !e.middlewareData.shift,
                  R = b,
                  C = x;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (C = w),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (R = y),
                  E && !v)
                ) {
                  let e = ee(f.left, 0),
                    t = ee(f.right, 0),
                    n = ee(f.top, 0),
                    r = ee(f.bottom, 0);
                  m
                    ? (C =
                        h -
                        2 * (0 !== e || 0 !== t ? e + t : ee(f.left, f.right)))
                    : (R =
                        g -
                        2 * (0 !== n || 0 !== r ? n + r : ee(f.top, f.bottom)));
                }
                await s({ ...e, availableWidth: C, availableHeight: R });
                let S = await u.getDimensions(c.floating);
                return h !== S.width || g !== S.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        ty = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = ea(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = eC(
                      await eR(e, { ...o, elementContext: "reference" }),
                      t.reference,
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: eS(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = eC(
                      await eR(e, { ...o, altBoundary: !0 }),
                      t.floating,
                    );
                    return { data: { escapedOffsets: n, escaped: eS(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        tw = (e, t) => ({ ...tf(e), options: [e, t] });
      var tb = f.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, y.jsx)(A.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, y.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      tb.displayName = "Arrow";
      var tx = "Popper",
        [tE, tR] = w(tx),
        [tC, tS] = tE(tx),
        tM = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = f.useState(null);
          return (0, y.jsx)(tC, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n,
          });
        };
      tM.displayName = tx;
      var tA = "PopperAnchor",
        tk = f.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            i = tS(tA, n),
            a = f.useRef(null),
            l = g(t, a),
            u = f.useRef(null);
          return (
            f.useEffect(() => {
              let e = u.current;
              ((u.current = (null == r ? void 0 : r.current) || a.current),
                e !== u.current && i.onAnchorChange(u.current));
            }),
            r ? null : (0, y.jsx)(A.div, { ...o, ref: l })
          );
        });
      tk.displayName = tA;
      var tT = "PopperContent",
        [tD, tN] = tE(tT),
        tP = f.forwardRef((e, t) => {
          var n, r, o, i, a, l, u, c;
          let {
              __scopePopper: s,
              side: d = "bottom",
              sideOffset: p = 0,
              align: v = "center",
              alignOffset: m = 0,
              arrowPadding: h = 0,
              avoidCollisions: w = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: C = "partial",
              hideWhenDetached: S = !1,
              updatePositionStrategy: M = "optimized",
              onPlaced: k,
              ...T
            } = e,
            D = tS(tT, s),
            [N, L] = f.useState(null),
            O = g(t, (e) => L(e)),
            [j, I] = f.useState(null),
            _ = (function (e) {
              let [t, n] = f.useState(void 0);
              return (
                b(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        ((r = t.inlineSize), (o = t.blockSize));
                      } else ((r = e.offsetWidth), (o = e.offsetHeight));
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }),
                      () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(j),
            F =
              null !== (u = null == _ ? void 0 : _.width) && void 0 !== u
                ? u
                : 0,
            W =
              null !== (c = null == _ ? void 0 : _.height) && void 0 !== c
                ? c
                : 0,
            K =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            B = Array.isArray(x) ? x : [x],
            Z = B.length > 0,
            H = { padding: K, boundary: B.filter(tI), altBoundary: Z },
            {
              refs: V,
              floatingStyles: z,
              placement: U,
              isPositioned: X,
              middlewareData: Y,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: i, floating: a } = {},
                  transform: l = !0,
                  whileElementsMounted: u,
                  open: c,
                } = e,
                [s, d] = f.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, v] = f.useState(r);
              tu(p, r) || v(r);
              let [m, h] = f.useState(null),
                [g, y] = f.useState(null),
                w = f.useCallback((e) => {
                  e !== C.current && ((C.current = e), h(e));
                }, []),
                b = f.useCallback((e) => {
                  e !== S.current && ((S.current = e), y(e));
                }, []),
                x = i || m,
                E = a || g,
                C = f.useRef(null),
                S = f.useRef(null),
                M = f.useRef(s),
                A = null != u,
                k = td(u),
                T = td(o),
                D = td(c),
                N = f.useCallback(() => {
                  if (!C.current || !S.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  (T.current && (e.platform = T.current),
                    ta(C.current, S.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== D.current };
                      P.current &&
                        !tu(M.current, t) &&
                        ((M.current = t),
                        R.flushSync(() => {
                          d(t);
                        }));
                    }));
                }, [p, t, n, T, D]);
              tl(() => {
                !1 === c &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let P = f.useRef(!1);
              (tl(
                () => (
                  (P.current = !0),
                  () => {
                    P.current = !1;
                  }
                ),
                [],
              ),
                tl(() => {
                  if ((x && (C.current = x), E && (S.current = E), x && E)) {
                    if (k.current) return k.current(x, E, N);
                    N();
                  }
                }, [x, E, N, k, A]));
              let L = f.useMemo(
                  () => ({
                    reference: C,
                    floating: S,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b],
                ),
                O = f.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                j = f.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!O.floating) return e;
                  let t = ts(O.floating, s.x),
                    r = ts(O.floating, s.y);
                  return l
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(tc(O.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, l, O.floating, s.x, s.y]);
              return f.useMemo(
                () => ({
                  ...s,
                  update: N,
                  refs: L,
                  elements: O,
                  floatingStyles: j,
                }),
                [s, N, L, O, j],
              );
            })({
              strategy: "fixed",
              placement: d + ("center" !== v ? "-" + v : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: a = !0,
                      elementResize: l = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    s = e0(e),
                    d = i || a ? [...(s ? eq(s) : []), ...eq(t)] : [];
                  d.forEach((e) => {
                    (i && e.addEventListener("scroll", n, { passive: !0 }),
                      a && e.addEventListener("resize", n));
                  });
                  let f =
                      s && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = eN(e);
                            function i() {
                              var e;
                              (clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null));
                            }
                            return (
                              !(function a(l, u) {
                                (void 0 === l && (l = !1),
                                  void 0 === u && (u = 1),
                                  i());
                                let c = e.getBoundingClientRect(),
                                  { left: s, top: d, width: f, height: p } = c;
                                if ((l || t(), !f || !p)) return;
                                let v = en(d),
                                  m = en(o.clientWidth - (s + f)),
                                  h = {
                                    rootMargin:
                                      -v +
                                      "px " +
                                      -m +
                                      "px " +
                                      -en(o.clientHeight - (d + p)) +
                                      "px " +
                                      -en(s) +
                                      "px",
                                    threshold: ee(0, Q(1, u)) || 1,
                                  },
                                  g = !0;
                                function y(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== u) {
                                    if (!g) return a();
                                    r
                                      ? a(!1, r)
                                      : (n = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  (1 !== r ||
                                    to(c, e.getBoundingClientRect()) ||
                                    a(),
                                    (g = !1));
                                }
                                try {
                                  r = new IntersectionObserver(y, {
                                    ...h,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(y, h);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    v = null;
                  l &&
                    ((v = new ResizeObserver((e) => {
                      let [r] = e;
                      (r &&
                        r.target === s &&
                        v &&
                        (v.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = v) || e.observe(t);
                        }))),
                        n());
                    })),
                    s && !c && v.observe(s),
                    v.observe(t));
                  let m = c ? e3(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = e3(e);
                        (m && !to(m, r) && n(),
                          (m = r),
                          (o = requestAnimationFrame(t)));
                      })(),
                    n(),
                    () => {
                      var e;
                      (d.forEach((e) => {
                        (i && e.removeEventListener("scroll", n),
                          a && e.removeEventListener("resize", n));
                      }),
                        null == f || f(),
                        null == (e = v) || e.disconnect(),
                        (v = null),
                        c && cancelAnimationFrame(o));
                    }
                  );
                })(...t, { animationFrame: "always" === M });
              },
              elements: { reference: D.anchor },
              middleware: [
                tp({ mainAxis: p + W, alignmentAxis: m }),
                w &&
                  tv({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === C ? tm() : void 0,
                    ...H,
                  }),
                w && th({ ...H }),
                tg({
                  ...H,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: a } = n.reference,
                      l = t.floating.style;
                    (l.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px"),
                    ),
                      l.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px"),
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px"),
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(a, "px"),
                      ));
                  },
                }),
                j && tw({ element: j, padding: h }),
                t_({ arrowWidth: F, arrowHeight: W }),
                S && ty({ strategy: "referenceHidden", ...H }),
              ],
            }),
            [G, $] = tF(U),
            q = P(k);
          b(() => {
            X && (null == q || q());
          }, [X, q]);
          let J = null === (n = Y.arrow) || void 0 === n ? void 0 : n.x,
            et = null === (r = Y.arrow) || void 0 === r ? void 0 : r.y,
            er =
              (null === (o = Y.arrow) || void 0 === o
                ? void 0
                : o.centerOffset) !== 0,
            [eo, ei] = f.useState();
          return (
            b(() => {
              N && ei(window.getComputedStyle(N).zIndex);
            }, [N]),
            (0, y.jsx)("div", {
              ref: V.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...z,
                transform: X ? z.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: eo,
                "--radix-popper-transform-origin": [
                  null === (i = Y.transformOrigin) || void 0 === i
                    ? void 0
                    : i.x,
                  null === (a = Y.transformOrigin) || void 0 === a
                    ? void 0
                    : a.y,
                ].join(" "),
                ...((null === (l = Y.hide) || void 0 === l
                  ? void 0
                  : l.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, y.jsx)(tD, {
                scope: s,
                placedSide: G,
                onArrowChange: I,
                arrowX: J,
                arrowY: et,
                shouldHideArrow: er,
                children: (0, y.jsx)(A.div, {
                  "data-side": G,
                  "data-align": $,
                  ...T,
                  ref: O,
                  style: { ...T.style, animation: X ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      tP.displayName = tT;
      var tL = "PopperArrow",
        tO = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tj = f.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = tN(tL, n),
            i = tO[o.placedSide];
          return (0, y.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, y.jsx)(tb, {
              ...r,
              ref: t,
              style: { ...r.style, display: "block" },
            }),
          });
        });
      function tI(e) {
        return null !== e;
      }
      tj.displayName = tL;
      var t_ = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          let { placement: l, rects: u, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, v] = tF(l),
            m = { start: "0%", center: "50%", end: "100%" }[v],
            h =
              (null !==
                (i = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            g =
              (null !==
                (a = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== a
                ? a
                : 0) +
              f / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = s ? m : "".concat(h, "px")), (w = "".concat(-f, "px")))
              : "top" === p
                ? ((y = s ? m : "".concat(h, "px")),
                  (w = "".concat(u.floating.height + f, "px")))
                : "right" === p
                  ? ((y = "".concat(-f, "px")),
                    (w = s ? m : "".concat(g, "px")))
                  : "left" === p &&
                    ((y = "".concat(u.floating.width + f, "px")),
                    (w = s ? m : "".concat(g, "px"))),
            { data: { x: y, y: w } }
          );
        },
      });
      function tF(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var tW = f.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...i } = e,
          [a, l] = f.useState(!1);
        b(() => l(!0), []);
        let u =
          o ||
          (a &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
        return u
          ? R.createPortal((0, y.jsx)(A.div, { ...i, ref: t }), u)
          : null;
      });
      tW.displayName = "Portal";
      var tK = (e) => {
        var t, n;
        let r, o;
        let { present: i, children: a } = e,
          l = (function (e) {
            var t, n;
            let [r, o] = f.useState(),
              i = f.useRef(null),
              a = f.useRef(e),
              l = f.useRef("none"),
              [u, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                f.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              f.useEffect(() => {
                let e = tB(i.current);
                l.current = "mounted" === u ? e : "none";
              }, [u]),
              b(() => {
                let t = i.current,
                  n = a.current;
                if (n !== e) {
                  let r = l.current,
                    o = tB(t);
                  (e
                    ? c("MOUNT")
                    : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? c("UNMOUNT")
                      : n && r !== o
                        ? c("ANIMATION_OUT")
                        : c("UNMOUNT"),
                    (a.current = e));
                }
              }, [e, c]),
              b(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = tB(i.current).includes(
                        CSS.escape(e.animationName),
                      );
                      if (
                        e.target === r &&
                        o &&
                        (c("ANIMATION_END"), !a.current)
                      ) {
                        let e = r.style.animationFillMode;
                        ((r.style.animationFillMode = "forwards"),
                          (t = n.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          })));
                      }
                    },
                    u = (e) => {
                      e.target === r && (l.current = tB(i.current));
                    };
                  return (
                    r.addEventListener("animationstart", u),
                    r.addEventListener("animationcancel", o),
                    r.addEventListener("animationend", o),
                    () => {
                      (n.clearTimeout(t),
                        r.removeEventListener("animationstart", u),
                        r.removeEventListener("animationcancel", o),
                        r.removeEventListener("animationend", o));
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(u),
                ref: f.useCallback((e) => {
                  ((i.current = e ? getComputedStyle(e) : null), o(e));
                }, []),
              }
            );
          })(i),
          u =
            "function" == typeof a
              ? a({ present: l.isPresent })
              : f.Children.only(a),
          c = g(
            l.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(u.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? u.ref
              : (r =
                    null === (n = Object.getOwnPropertyDescriptor(u, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in r &&
                  r.isReactWarning
                ? u.props.ref
                : u.props.ref || u.ref,
          );
        return "function" == typeof a || l.isPresent
          ? f.cloneElement(u, { ref: c })
          : null;
      };
      function tB(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      tK.displayName = "Presence";
      var tZ = "rovingFocusGroup.onEntryFocus",
        tH = { bubbles: !1, cancelable: !0 },
        tV = "RovingFocusGroup",
        [tz, tU, tX] = T(tV),
        [tY, tG] = w(tV, [tX]),
        [t$, tq] = tY(tV),
        tJ = f.forwardRef((e, t) =>
          (0, y.jsx)(tz.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, y.jsx)(tz.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, y.jsx)(tQ, { ...e, ref: t }),
            }),
          }),
        );
      tJ.displayName = tV;
      var tQ = f.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: r,
              loop: o = !1,
              dir: i,
              currentTabStopId: a,
              defaultCurrentTabStopId: l,
              onCurrentTabStopIdChange: u,
              onEntryFocus: c,
              preventScrollOnEntryFocus: s = !1,
              ...d
            } = e,
            p = f.useRef(null),
            m = g(t, p),
            h = N(i),
            [w, b] = E({
              prop: a,
              defaultProp: null != l ? l : null,
              onChange: u,
              caller: tV,
            }),
            [x, R] = f.useState(!1),
            C = P(c),
            S = tU(n),
            M = f.useRef(!1),
            [k, T] = f.useState(0);
          return (
            f.useEffect(() => {
              let e = p.current;
              if (e)
                return (
                  e.addEventListener(tZ, C),
                  () => e.removeEventListener(tZ, C)
                );
            }, [C]),
            (0, y.jsx)(t$, {
              scope: n,
              orientation: r,
              dir: h,
              loop: o,
              currentTabStopId: w,
              onItemFocus: f.useCallback((e) => b(e), [b]),
              onItemShiftTab: f.useCallback(() => R(!0), []),
              onFocusableItemAdd: f.useCallback(() => T((e) => e + 1), []),
              onFocusableItemRemove: f.useCallback(() => T((e) => e - 1), []),
              children: (0, y.jsx)(A.div, {
                tabIndex: x || 0 === k ? -1 : 0,
                "data-orientation": r,
                ...d,
                ref: m,
                style: { outline: "none", ...e.style },
                onMouseDown: v(e.onMouseDown, () => {
                  M.current = !0;
                }),
                onFocus: v(e.onFocus, (e) => {
                  let t = !M.current;
                  if (e.target === e.currentTarget && t && !x) {
                    let t = new CustomEvent(tZ, tH);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = S().filter((e) => e.focusable);
                      t5(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === w),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        s,
                      );
                    }
                  }
                  M.current = !1;
                }),
                onBlur: v(e.onBlur, () => R(!1)),
              }),
            })
          );
        }),
        t0 = "RovingFocusGroupItem",
        t1 = f.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: r = !0,
              active: o = !1,
              tabStopId: i,
              children: a,
              ...l
            } = e,
            u = q(),
            c = i || u,
            s = tq(t0, n),
            d = s.currentTabStopId === c,
            p = tU(n),
            {
              onFocusableItemAdd: m,
              onFocusableItemRemove: h,
              currentTabStopId: g,
            } = s;
          return (
            f.useEffect(() => {
              if (r) return (m(), () => h());
            }, [r, m, h]),
            (0, y.jsx)(tz.ItemSlot, {
              scope: n,
              id: c,
              focusable: r,
              active: o,
              children: (0, y.jsx)(A.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": s.orientation,
                ...l,
                ref: t,
                onMouseDown: v(e.onMouseDown, (e) => {
                  r ? s.onItemFocus(c) : e.preventDefault();
                }),
                onFocus: v(e.onFocus, () => s.onItemFocus(c)),
                onKeyDown: v(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    s.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, n) {
                    var r;
                    let o =
                      ((r = e.key),
                      "rtl" !== n
                        ? r
                        : "ArrowLeft" === r
                          ? "ArrowRight"
                          : "ArrowRight" === r
                            ? "ArrowLeft"
                            : r);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return t2[o];
                  })(e, s.orientation, s.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = p()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) o.reverse();
                    else if ("prev" === t || "next" === t) {
                      var n, r;
                      "prev" === t && o.reverse();
                      let i = o.indexOf(e.currentTarget);
                      o = s.loop
                        ? ((n = o),
                          (r = i + 1),
                          n.map((e, t) => n[(r + t) % n.length]))
                        : o.slice(i + 1);
                    }
                    setTimeout(() => t5(o));
                  }
                }),
                children:
                  "function" == typeof a
                    ? a({ isCurrentTabStop: d, hasTabStop: null != g })
                    : a,
              }),
            })
          );
        });
      t1.displayName = t0;
      var t2 = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function t5(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement;
        for (let r of e)
          if (
            r === n ||
            (r.focus({ preventScroll: t }), document.activeElement !== n)
          )
            return;
      }
      var t3 = new WeakMap(),
        t4 = new WeakMap(),
        t6 = {},
        t7 = 0,
        t8 = function (e) {
          return e && (e.host || t8(e.parentNode));
        },
        t9 = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = t8(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing",
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          t6[n] || (t6[n] = new WeakMap());
          var i = t6[n],
            a = [],
            l = new Set(),
            u = new Set(o),
            c = function (e) {
              !e || l.has(e) || (l.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      u = (t3.get(e) || 0) + 1,
                      c = (i.get(e) || 0) + 1;
                    (t3.set(e, u),
                      i.set(e, c),
                      a.push(e),
                      1 === u && o && t4.set(e, !0),
                      1 === c && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true"));
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            s(t),
            l.clear(),
            t7++,
            function () {
              (a.forEach(function (e) {
                var t = t3.get(e) - 1,
                  o = i.get(e) - 1;
                (t3.set(e, t),
                  i.set(e, o),
                  t || (t4.has(e) || e.removeAttribute(r), t4.delete(e)),
                  o || e.removeAttribute(n));
              }),
                --t7 ||
                  ((t3 = new WeakMap()),
                  (t3 = new WeakMap()),
                  (t4 = new WeakMap()),
                  (t6 = {})));
            }
          );
        },
        ne = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(
                r,
                Array.from(o.querySelectorAll("[aria-live], script")),
              ),
              t9(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        nt = n(8197),
        nn = "right-scroll-bar-position",
        nr = "width-before-scroll-bar";
      function no(e, t) {
        return ("function" == typeof e ? e(t) : e && (e.current = t), e);
      }
      var ni = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        na = new WeakMap(),
        nl =
          (void 0 === o && (o = {}),
          ((void 0 === i &&
            (i = function (e) {
              return e;
            }),
          (a = []),
          (l = !1),
          (u = {
            read: function () {
              if (l)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                );
              return a.length ? a[a.length - 1] : null;
            },
            useMedium: function (e) {
              var t = i(e, l);
              return (
                a.push(t),
                function () {
                  a = a.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (l = !0; a.length; ) {
                var t = a;
                ((a = []), t.forEach(e));
              }
              a = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return a;
                },
              };
            },
            assignMedium: function (e) {
              l = !0;
              var t = [];
              if (a.length) {
                var n = a;
                ((a = []), n.forEach(e), (t = a));
              }
              var r = function () {
                  var n = t;
                  ((t = []), n.forEach(e));
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              (o(),
                (a = {
                  push: function (e) {
                    (t.push(e), o());
                  },
                  filter: function (e) {
                    return ((t = t.filter(e)), a);
                  },
                }));
            },
          })).options = (0, nt.pi)({ async: !0, ssr: !1 }, o)),
          u),
        nu = function () {},
        nc = f.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a = f.useRef(null),
            l = f.useState({
              onScrollCapture: nu,
              onWheelCapture: nu,
              onTouchMoveCapture: nu,
            }),
            u = l[0],
            c = l[1],
            s = e.forwardProps,
            d = e.children,
            p = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            h = e.shards,
            g = e.sideCar,
            y = e.noRelative,
            w = e.noIsolation,
            b = e.inert,
            x = e.allowPinchZoom,
            E = e.as,
            R = e.gapMode,
            C = (0, nt._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            S =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return no(t, e);
                });
              }),
              ((o = (0, f.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              ni(
                function () {
                  var e = na.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    (t.forEach(function (e) {
                      r.has(e) || no(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || no(e, o);
                      }));
                  }
                  na.set(i, n);
                },
                [n],
              ),
              i),
            M = (0, nt.pi)((0, nt.pi)({}, C), u);
          return f.createElement(
            f.Fragment,
            null,
            m &&
              f.createElement(g, {
                sideCar: nl,
                removeScrollBar: v,
                shards: h,
                noRelative: y,
                noIsolation: w,
                inert: b,
                setCallbacks: c,
                allowPinchZoom: !!x,
                lockRef: a,
                gapMode: R,
              }),
            s
              ? f.cloneElement(
                  f.Children.only(d),
                  (0, nt.pi)((0, nt.pi)({}, M), { ref: S }),
                )
              : f.createElement(
                  void 0 === E ? "div" : E,
                  (0, nt.pi)({}, M, { className: p, ref: S }),
                  d,
                ),
          );
        });
      ((nc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (nc.classNames = { fullWidth: nr, zeroRight: nn }));
      var ns = function (e) {
        var t = e.sideCar,
          n = (0, nt._T)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car",
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, (0, nt.pi)({}, n));
      };
      ns.isSideCarExport = !0;
      var nd = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = d || n.nc;
                  return (t && e.setAttribute("nonce", t), e);
                })())
              ) {
                var o, i;
                ((o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i));
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        nf = function () {
          var e = nd();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        np = function () {
          var e = nf();
          return function (t) {
            return (e(t.styles, t.dynamic), null);
          };
        },
        nv = { left: 0, top: 0, right: 0, gap: 0 },
        nm = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        nh = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [nm(n), nm(r), nm(o)];
        },
        ng = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return nv;
          var t = nh(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        ny = np(),
        nw = "data-scroll-locked",
        nb = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(nw, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat(nn, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(nr, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(nn, " .")
              .concat(nn, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(nr, " .")
              .concat(nr, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(nw, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        nx = function () {
          var e = parseInt(document.body.getAttribute(nw) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        nE = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(nw, (nx() + 1).toString()),
              function () {
                var e = nx() - 1;
                e <= 0
                  ? document.body.removeAttribute(nw)
                  : document.body.setAttribute(nw, e.toString());
              }
            );
          }, []);
        },
        nR = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          nE();
          var i = f.useMemo(
            function () {
              return ng(o);
            },
            [o],
          );
          return f.createElement(ny, {
            styles: nb(i, !t, o, n ? "" : "!important"),
          });
        },
        nC = !1;
      if ("undefined" != typeof window)
        try {
          var nS = Object.defineProperty({}, "passive", {
            get: function () {
              return ((nC = !0), !0);
            },
          });
          (window.addEventListener("test", nS, nS),
            window.removeEventListener("test", nS, nS));
        } catch (e) {
          nC = !1;
        }
      var nM = !!nC && { passive: !1 },
        nA = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        nk = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              nT(e, r))
            ) {
              var o = nD(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        nT = function (e, t) {
          return "v" === e ? nA(t, "overflowY") : nA(t, "overflowX");
        },
        nD = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        nN = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            if (!u) break;
            var v = nD(e, u),
              m = v[0],
              h = v[1] - v[2] - a * m;
            (m || h) && nT(e, u) && ((f += h), (p += m));
            var g = u.parentNode;
            u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        nP = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        nL = function (e) {
          return [e.deltaX, e.deltaY];
        },
        nO = function (e) {
          return e && "current" in e ? e.current : e;
        },
        nj = 0,
        nI = [],
        n_ =
          ((c = function (e) {
            var t = f.useRef([]),
              n = f.useRef([0, 0]),
              r = f.useRef(),
              o = f.useState(nj++)[0],
              i = f.useState(np)[0],
              a = f.useRef(e);
            (f.useEffect(
              function () {
                a.current = e;
              },
              [e],
            ),
              f.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o),
                    );
                    var t = (0, nt.ev)(
                      [e.lockRef.current],
                      (e.shards || []).map(nO),
                      !0,
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o),
                        );
                      }),
                      function () {
                        (document.body.classList.remove(
                          "block-interactivity-".concat(o),
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o),
                            );
                          }));
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards],
              ));
            var l = f.useCallback(function (e, t) {
                if (
                  ("touches" in e && 2 === e.touches.length) ||
                  ("wheel" === e.type && e.ctrlKey)
                )
                  return !a.current.allowPinchZoom;
                var o,
                  i = nP(e),
                  l = n.current,
                  u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                  c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                  s = e.target,
                  d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type)
                  return !1;
                var f = nk(d, s);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = nk(d, s))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (u || c) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return nN(p, t, e, "h" === p ? u : c, !0);
              }, []),
              u = f.useCallback(function (e) {
                if (nI.length && nI[nI.length - 1] === i) {
                  var n = "deltaY" in e ? nL(e) : nP(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (a.current.shards || [])
                      .map(nO)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              c = f.useCallback(function (e, n, r, o) {
                var i = {
                  name: e,
                  delta: n,
                  target: r,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode));
                    return t;
                  })(r),
                };
                (t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1));
              }, []),
              s = f.useCallback(function (e) {
                ((n.current = nP(e)), (r.current = void 0));
              }, []),
              d = f.useCallback(function (t) {
                c(t.type, nL(t), t.target, l(t, e.lockRef.current));
              }, []),
              p = f.useCallback(function (t) {
                c(t.type, nP(t), t.target, l(t, e.lockRef.current));
              }, []);
            f.useEffect(function () {
              return (
                nI.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", u, nM),
                document.addEventListener("touchmove", u, nM),
                document.addEventListener("touchstart", s, nM),
                function () {
                  ((nI = nI.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", u, nM),
                    document.removeEventListener("touchmove", u, nM),
                    document.removeEventListener("touchstart", s, nM));
                }
              );
            }, []);
            var v = e.removeScrollBar,
              m = e.inert;
            return f.createElement(
              f.Fragment,
              null,
              m
                ? f.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-",
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              v
                ? f.createElement(nR, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode,
                  })
                : null,
            );
          }),
          nl.useMedium(c),
          ns),
        nF = f.forwardRef(function (e, t) {
          return f.createElement(
            nc,
            (0, nt.pi)({}, e, { ref: t, sideCar: n_ }),
          );
        });
      nF.classNames = nc.classNames;
      var nW = ["Enter", " "],
        nK = ["ArrowUp", "PageDown", "End"],
        nB = ["ArrowDown", "PageUp", "Home", ...nK],
        nZ = { ltr: [...nW, "ArrowRight"], rtl: [...nW, "ArrowLeft"] },
        nH = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        nV = "Menu",
        [nz, nU, nX] = T(nV),
        [nY, nG] = w(nV, [nX, tR, tG]),
        n$ = tR(),
        nq = tG(),
        [nJ, nQ] = nY(nV),
        [n0, n1] = nY(nV),
        n2 = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: o,
              onOpenChange: i,
              modal: a = !0,
            } = e,
            l = n$(t),
            [u, c] = f.useState(null),
            s = f.useRef(!1),
            d = P(i),
            p = N(o);
          return (
            f.useEffect(() => {
              let e = () => {
                  ((s.current = !0),
                    document.addEventListener("pointerdown", t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", t, {
                      capture: !0,
                      once: !0,
                    }));
                },
                t = () => (s.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  (document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", t, {
                      capture: !0,
                    }));
                }
              );
            }, []),
            (0, y.jsx)(tM, {
              ...l,
              children: (0, y.jsx)(nJ, {
                scope: t,
                open: n,
                onOpenChange: d,
                content: u,
                onContentChange: c,
                children: (0, y.jsx)(n0, {
                  scope: t,
                  onClose: f.useCallback(() => d(!1), [d]),
                  isUsingKeyboardRef: s,
                  dir: p,
                  modal: a,
                  children: r,
                }),
              }),
            })
          );
        };
      n2.displayName = nV;
      var n5 = f.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = n$(n);
        return (0, y.jsx)(tk, { ...o, ...r, ref: t });
      });
      n5.displayName = "MenuAnchor";
      var n3 = "MenuPortal",
        [n4, n6] = nY(n3, { forceMount: void 0 }),
        n7 = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
            i = nQ(n3, t);
          return (0, y.jsx)(n4, {
            scope: t,
            forceMount: n,
            children: (0, y.jsx)(tK, {
              present: n || i.open,
              children: (0, y.jsx)(tW, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      n7.displayName = n3;
      var n8 = "MenuContent",
        [n9, re] = nY(n8),
        rt = f.forwardRef((e, t) => {
          let n = n6(n8, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            i = nQ(n8, e.__scopeMenu),
            a = n1(n8, e.__scopeMenu);
          return (0, y.jsx)(nz.Provider, {
            scope: e.__scopeMenu,
            children: (0, y.jsx)(tK, {
              present: r || i.open,
              children: (0, y.jsx)(nz.Slot, {
                scope: e.__scopeMenu,
                children: a.modal
                  ? (0, y.jsx)(rn, { ...o, ref: t })
                  : (0, y.jsx)(rr, { ...o, ref: t }),
              }),
            }),
          });
        }),
        rn = f.forwardRef((e, t) => {
          let n = nQ(n8, e.__scopeMenu),
            r = f.useRef(null),
            o = g(t, r);
          return (
            f.useEffect(() => {
              let e = r.current;
              if (e) return ne(e);
            }, []),
            (0, y.jsx)(ri, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: n.open,
              disableOutsideScroll: !0,
              onFocusOutside: v(e.onFocusOutside, (e) => e.preventDefault(), {
                checkForDefaultPrevented: !1,
              }),
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        rr = f.forwardRef((e, t) => {
          let n = nQ(n8, e.__scopeMenu);
          return (0, y.jsx)(ri, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1),
          });
        }),
        ro = C("MenuContent.ScrollLock"),
        ri = f.forwardRef((e, t) => {
          let {
              __scopeMenu: n,
              loop: r = !1,
              trapFocus: o,
              onOpenAutoFocus: i,
              onCloseAutoFocus: a,
              disableOutsidePointerEvents: l,
              onEntryFocus: u,
              onEscapeKeyDown: c,
              onPointerDownOutside: s,
              onFocusOutside: d,
              onInteractOutside: p,
              onDismiss: m,
              disableOutsideScroll: h,
              ...w
            } = e,
            b = nQ(n8, n),
            x = n1(n8, n),
            E = n$(n),
            R = nq(n),
            C = nU(n),
            [S, M] = f.useState(null),
            A = f.useRef(null),
            k = g(t, A, b.onContentChange),
            T = f.useRef(0),
            D = f.useRef(""),
            N = f.useRef(0),
            P = f.useRef(null),
            L = f.useRef("right"),
            O = f.useRef(0),
            I = h ? nF : f.Fragment,
            _ = (e) => {
              var t, n;
              let r = D.current + e,
                o = C().filter((e) => !e.disabled),
                i = document.activeElement,
                a =
                  null === (t = o.find((e) => e.ref.current === i)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                l = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    i =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (i = i.filter((e) => e !== n));
                  let a = i.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase()),
                  );
                  return a !== n ? a : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  a,
                ),
                u =
                  null === (n = o.find((e) => e.textValue === l)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              (!(function e(t) {
                ((D.current = t),
                  window.clearTimeout(T.current),
                  "" !== t &&
                    (T.current = window.setTimeout(() => e(""), 1e3)));
              })(r),
                u && setTimeout(() => u.focus()));
            };
          (f.useEffect(() => () => window.clearTimeout(T.current), []),
            f.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : W(),
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : W(),
                ),
                F++,
                () => {
                  (1 === F &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    F--);
                }
              );
            }, []));
          let K = f.useCallback((e) => {
            var t, n, r;
            return (
              L.current ===
                (null === (t = P.current) || void 0 === t ? void 0 : t.side) &&
              !!(r =
                null === (n = P.current) || void 0 === n ? void 0 : n.area) &&
              (function (e, t) {
                let { x: n, y: r } = e,
                  o = !1;
                for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                  let a = t[e],
                    l = t[i],
                    u = a.x,
                    c = a.y,
                    s = l.x,
                    d = l.y;
                  c > r != d > r &&
                    n < ((s - u) * (r - c)) / (d - c) + u &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, y.jsx)(n9, {
            scope: n,
            searchRef: D,
            onItemEnter: f.useCallback(
              (e) => {
                K(e) && e.preventDefault();
              },
              [K],
            ),
            onItemLeave: f.useCallback(
              (e) => {
                var t;
                K(e) ||
                  (null === (t = A.current) || void 0 === t || t.focus(),
                  M(null));
              },
              [K],
            ),
            onTriggerLeave: f.useCallback(
              (e) => {
                K(e) && e.preventDefault();
              },
              [K],
            ),
            pointerGraceTimerRef: N,
            onPointerGraceIntentChange: f.useCallback((e) => {
              P.current = e;
            }, []),
            children: (0, y.jsx)(I, {
              ...(h ? { as: ro, allowPinchZoom: !0 } : void 0),
              children: (0, y.jsx)(H, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: v(i, (e) => {
                  var t;
                  (e.preventDefault(),
                    null === (t = A.current) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }));
                }),
                onUnmountAutoFocus: a,
                children: (0, y.jsx)(j, {
                  asChild: !0,
                  disableOutsidePointerEvents: l,
                  onEscapeKeyDown: c,
                  onPointerDownOutside: s,
                  onFocusOutside: d,
                  onInteractOutside: p,
                  onDismiss: m,
                  children: (0, y.jsx)(tJ, {
                    asChild: !0,
                    ...R,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: v(u, (e) => {
                      x.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, y.jsx)(tP, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": rL(b.open),
                      "data-radix-menu-content": "",
                      dir: x.dir,
                      ...E,
                      ...w,
                      ref: k,
                      style: { outline: "none", ...w.style },
                      onKeyDown: v(w.onKeyDown, (e) => {
                        let t =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          r = 1 === e.key.length;
                        t &&
                          ("Tab" === e.key && e.preventDefault(),
                          !n && r && _(e.key));
                        let o = A.current;
                        if (e.target !== o || !nB.includes(e.key)) return;
                        e.preventDefault();
                        let i = C()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        (nK.includes(e.key) && i.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let n of e)
                              if (
                                n === t ||
                                (n.focus(), document.activeElement !== t)
                              )
                                return;
                          })(i));
                      }),
                      onBlur: v(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(T.current), (D.current = ""));
                      }),
                      onPointerMove: v(
                        e.onPointerMove,
                        rI((e) => {
                          let t = e.target,
                            n = O.current !== e.clientX;
                          if (e.currentTarget.contains(t) && n) {
                            let t = e.clientX > O.current ? "right" : "left";
                            ((L.current = t), (O.current = e.clientX));
                          }
                        }),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      rt.displayName = n8;
      var ra = f.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, y.jsx)(A.div, { role: "group", ...r, ref: t });
      });
      ra.displayName = "MenuGroup";
      var rl = f.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, y.jsx)(A.div, { ...r, ref: t });
      });
      rl.displayName = "MenuLabel";
      var ru = "MenuItem",
        rc = "menu.itemSelect",
        rs = f.forwardRef((e, t) => {
          let { disabled: n = !1, onSelect: r, ...o } = e,
            i = f.useRef(null),
            a = n1(ru, e.__scopeMenu),
            l = re(ru, e.__scopeMenu),
            u = g(t, i),
            c = f.useRef(!1);
          return (0, y.jsx)(rd, {
            ...o,
            ref: u,
            disabled: n,
            onClick: v(e.onClick, () => {
              let e = i.current;
              if (!n && e) {
                let t = new CustomEvent(rc, { bubbles: !0, cancelable: !0 });
                (e.addEventListener(rc, (e) => (null == r ? void 0 : r(e)), {
                  once: !0,
                }),
                  k(e, t),
                  t.defaultPrevented ? (c.current = !1) : a.onClose());
              }
            }),
            onPointerDown: (t) => {
              var n;
              (null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                (c.current = !0));
            },
            onPointerUp: v(e.onPointerUp, (e) => {
              var t;
              c.current ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.click();
            }),
            onKeyDown: v(e.onKeyDown, (e) => {
              let t = "" !== l.searchRef.current;
              !n &&
                (!t || " " !== e.key) &&
                nW.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            }),
          });
        });
      rs.displayName = ru;
      var rd = f.forwardRef((e, t) => {
          let { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
            a = re(ru, n),
            l = nq(n),
            u = f.useRef(null),
            c = g(t, u),
            [s, d] = f.useState(!1),
            [p, m] = f.useState("");
          return (
            f.useEffect(() => {
              let e = u.current;
              if (e) {
                var t;
                m(
                  (null !== (t = e.textContent) && void 0 !== t
                    ? t
                    : ""
                  ).trim(),
                );
              }
            }, [i.children]),
            (0, y.jsx)(nz.ItemSlot, {
              scope: n,
              disabled: r,
              textValue: null != o ? o : p,
              children: (0, y.jsx)(t1, {
                asChild: !0,
                ...l,
                focusable: !r,
                children: (0, y.jsx)(A.div, {
                  role: "menuitem",
                  "data-highlighted": s ? "" : void 0,
                  "aria-disabled": r || void 0,
                  "data-disabled": r ? "" : void 0,
                  ...i,
                  ref: c,
                  onPointerMove: v(
                    e.onPointerMove,
                    rI((e) => {
                      r
                        ? a.onItemLeave(e)
                        : (a.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    }),
                  ),
                  onPointerLeave: v(
                    e.onPointerLeave,
                    rI((e) => a.onItemLeave(e)),
                  ),
                  onFocus: v(e.onFocus, () => d(!0)),
                  onBlur: v(e.onBlur, () => d(!1)),
                }),
              }),
            })
          );
        }),
        rf = f.forwardRef((e, t) => {
          let { checked: n = !1, onCheckedChange: r, ...o } = e;
          return (0, y.jsx)(rb, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, y.jsx)(rs, {
              role: "menuitemcheckbox",
              "aria-checked": rO(n) ? "mixed" : n,
              ...o,
              ref: t,
              "data-state": rj(n),
              onSelect: v(
                o.onSelect,
                () => (null == r ? void 0 : r(!!rO(n) || !n)),
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      rf.displayName = "MenuCheckboxItem";
      var rp = "MenuRadioGroup",
        [rv, rm] = nY(rp, { value: void 0, onValueChange: () => {} }),
        rh = f.forwardRef((e, t) => {
          let { value: n, onValueChange: r, ...o } = e,
            i = P(r);
          return (0, y.jsx)(rv, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: i,
            children: (0, y.jsx)(ra, { ...o, ref: t }),
          });
        });
      rh.displayName = rp;
      var rg = "MenuRadioItem",
        ry = f.forwardRef((e, t) => {
          let { value: n, ...r } = e,
            o = rm(rg, e.__scopeMenu),
            i = n === o.value;
          return (0, y.jsx)(rb, {
            scope: e.__scopeMenu,
            checked: i,
            children: (0, y.jsx)(rs, {
              role: "menuitemradio",
              "aria-checked": i,
              ...r,
              ref: t,
              "data-state": rj(i),
              onSelect: v(
                r.onSelect,
                () => {
                  var e;
                  return null === (e = o.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(o, n);
                },
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      ry.displayName = rg;
      var rw = "MenuItemIndicator",
        [rb, rx] = nY(rw, { checked: !1 }),
        rE = f.forwardRef((e, t) => {
          let { __scopeMenu: n, forceMount: r, ...o } = e,
            i = rx(rw, n);
          return (0, y.jsx)(tK, {
            present: r || rO(i.checked) || !0 === i.checked,
            children: (0, y.jsx)(A.span, {
              ...o,
              ref: t,
              "data-state": rj(i.checked),
            }),
          });
        });
      rE.displayName = rw;
      var rR = f.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, y.jsx)(A.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...r,
          ref: t,
        });
      });
      rR.displayName = "MenuSeparator";
      var rC = f.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = n$(n);
        return (0, y.jsx)(tj, { ...o, ...r, ref: t });
      });
      rC.displayName = "MenuArrow";
      var rS = "MenuSub",
        [rM, rA] = nY(rS),
        rk = (e) => {
          let {
              __scopeMenu: t,
              children: n,
              open: r = !1,
              onOpenChange: o,
            } = e,
            i = nQ(rS, t),
            a = n$(t),
            [l, u] = f.useState(null),
            [c, s] = f.useState(null),
            d = P(o);
          return (
            f.useEffect(
              () => (!1 === i.open && d(!1), () => d(!1)),
              [i.open, d],
            ),
            (0, y.jsx)(tM, {
              ...a,
              children: (0, y.jsx)(nJ, {
                scope: t,
                open: r,
                onOpenChange: d,
                content: c,
                onContentChange: s,
                children: (0, y.jsx)(rM, {
                  scope: t,
                  contentId: q(),
                  triggerId: q(),
                  trigger: l,
                  onTriggerChange: u,
                  children: n,
                }),
              }),
            })
          );
        };
      rk.displayName = rS;
      var rT = "MenuSubTrigger",
        rD = f.forwardRef((e, t) => {
          let n = nQ(rT, e.__scopeMenu),
            r = n1(rT, e.__scopeMenu),
            o = rA(rT, e.__scopeMenu),
            i = re(rT, e.__scopeMenu),
            a = f.useRef(null),
            { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = i,
            c = { __scopeMenu: e.__scopeMenu },
            s = f.useCallback(() => {
              (a.current && window.clearTimeout(a.current), (a.current = null));
            }, []);
          return (
            f.useEffect(() => s, [s]),
            f.useEffect(() => {
              let e = l.current;
              return () => {
                (window.clearTimeout(e), u(null));
              };
            }, [l, u]),
            (0, y.jsx)(n5, {
              asChild: !0,
              ...c,
              children: (0, y.jsx)(rd, {
                id: o.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": o.contentId,
                "data-state": rL(n.open),
                ...e,
                ref: h(t, o.onTriggerChange),
                onClick: (t) => {
                  var r;
                  (null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
                },
                onPointerMove: v(
                  e.onPointerMove,
                  rI((t) => {
                    (i.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        n.open ||
                        a.current ||
                        (i.onPointerGraceIntentChange(null),
                        (a.current = window.setTimeout(() => {
                          (n.onOpenChange(!0), s());
                        }, 100))));
                  }),
                ),
                onPointerLeave: v(
                  e.onPointerLeave,
                  rI((e) => {
                    var t, r;
                    s();
                    let o =
                      null === (t = n.content) || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t =
                          null === (r = n.content) || void 0 === r
                            ? void 0
                            : r.dataset.side,
                        a = "right" === t,
                        u = o[a ? "left" : "right"],
                        c = o[a ? "right" : "left"];
                      (i.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                          { x: u, y: o.top },
                          { x: c, y: o.top },
                          { x: c, y: o.bottom },
                          { x: u, y: o.bottom },
                        ],
                        side: t,
                      }),
                        window.clearTimeout(l.current),
                        (l.current = window.setTimeout(
                          () => i.onPointerGraceIntentChange(null),
                          300,
                        )));
                    } else {
                      if ((i.onTriggerLeave(e), e.defaultPrevented)) return;
                      i.onPointerGraceIntentChange(null);
                    }
                  }),
                ),
                onKeyDown: v(e.onKeyDown, (t) => {
                  let o = "" !== i.searchRef.current;
                  if (
                    !e.disabled &&
                    (!o || " " !== t.key) &&
                    nZ[r.dir].includes(t.key)
                  ) {
                    var a;
                    (n.onOpenChange(!0),
                      null === (a = n.content) || void 0 === a || a.focus(),
                      t.preventDefault());
                  }
                }),
              }),
            })
          );
        });
      rD.displayName = rT;
      var rN = "MenuSubContent",
        rP = f.forwardRef((e, t) => {
          let n = n6(n8, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            i = nQ(n8, e.__scopeMenu),
            a = n1(n8, e.__scopeMenu),
            l = rA(rN, e.__scopeMenu),
            u = f.useRef(null),
            c = g(t, u);
          return (0, y.jsx)(nz.Provider, {
            scope: e.__scopeMenu,
            children: (0, y.jsx)(tK, {
              present: r || i.open,
              children: (0, y.jsx)(nz.Slot, {
                scope: e.__scopeMenu,
                children: (0, y.jsx)(ri, {
                  id: l.contentId,
                  "aria-labelledby": l.triggerId,
                  ...o,
                  ref: c,
                  align: "start",
                  side: "rtl" === a.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var t;
                    (a.isUsingKeyboardRef.current &&
                      (null === (t = u.current) || void 0 === t || t.focus()),
                      e.preventDefault());
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: v(e.onFocusOutside, (e) => {
                    e.target !== l.trigger && i.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: v(e.onEscapeKeyDown, (e) => {
                    (a.onClose(), e.preventDefault());
                  }),
                  onKeyDown: v(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      n = nH[a.dir].includes(e.key);
                    if (t && n) {
                      var r;
                      (i.onOpenChange(!1),
                        null === (r = l.trigger) || void 0 === r || r.focus(),
                        e.preventDefault());
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function rL(e) {
        return e ? "open" : "closed";
      }
      function rO(e) {
        return "indeterminate" === e;
      }
      function rj(e) {
        return rO(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function rI(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      rP.displayName = rN;
      var r_ = "DropdownMenu",
        [rF, rW] = w(r_, [nG]),
        rK = nG(),
        [rB, rZ] = rF(r_),
        rH = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              dir: r,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              modal: l = !0,
            } = e,
            u = rK(t),
            c = f.useRef(null),
            [s, d] = E({
              prop: o,
              defaultProp: null != i && i,
              onChange: a,
              caller: r_,
            });
          return (0, y.jsx)(rB, {
            scope: t,
            triggerId: q(),
            triggerRef: c,
            contentId: q(),
            open: s,
            onOpenChange: d,
            onOpenToggle: f.useCallback(() => d((e) => !e), [d]),
            modal: l,
            children: (0, y.jsx)(n2, {
              ...u,
              open: s,
              onOpenChange: d,
              dir: r,
              modal: l,
              children: n,
            }),
          });
        };
      rH.displayName = r_;
      var rV = "DropdownMenuTrigger",
        rz = f.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
            i = rZ(rV, n),
            a = rK(n);
          return (0, y.jsx)(n5, {
            asChild: !0,
            ...a,
            children: (0, y.jsx)(A.button, {
              type: "button",
              id: i.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": i.open,
              "aria-controls": i.open ? i.contentId : void 0,
              "data-state": i.open ? "open" : "closed",
              "data-disabled": r ? "" : void 0,
              disabled: r,
              ...o,
              ref: h(t, i.triggerRef),
              onPointerDown: v(e.onPointerDown, (e) => {
                r ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (i.onOpenToggle(), i.open || e.preventDefault());
              }),
              onKeyDown: v(e.onKeyDown, (e) => {
                !r &&
                  (["Enter", " "].includes(e.key) && i.onOpenToggle(),
                  "ArrowDown" === e.key && i.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      rz.displayName = rV;
      var rU = (e) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          r = rK(t);
        return (0, y.jsx)(n7, { ...r, ...n });
      };
      rU.displayName = "DropdownMenuPortal";
      var rX = "DropdownMenuContent",
        rY = f.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, ...r } = e,
            o = rZ(rX, n),
            i = rK(n),
            a = f.useRef(!1);
          return (0, y.jsx)(rt, {
            id: o.contentId,
            "aria-labelledby": o.triggerId,
            ...i,
            ...r,
            ref: t,
            onCloseAutoFocus: v(e.onCloseAutoFocus, (e) => {
              var t;
              (a.current ||
                null === (t = o.triggerRef.current) ||
                void 0 === t ||
                t.focus(),
                (a.current = !1),
                e.preventDefault());
            }),
            onInteractOutside: v(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey,
                r = 2 === t.button || n;
              (!o.modal || r) && (a.current = !0);
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      rY.displayName = rX;
      var rG = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(ra, { ...o, ...r, ref: t });
      });
      rG.displayName = "DropdownMenuGroup";
      var r$ = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rl, { ...o, ...r, ref: t });
      });
      r$.displayName = "DropdownMenuLabel";
      var rq = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rs, { ...o, ...r, ref: t });
      });
      rq.displayName = "DropdownMenuItem";
      var rJ = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rf, { ...o, ...r, ref: t });
      });
      rJ.displayName = "DropdownMenuCheckboxItem";
      var rQ = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rh, { ...o, ...r, ref: t });
      });
      rQ.displayName = "DropdownMenuRadioGroup";
      var r0 = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(ry, { ...o, ...r, ref: t });
      });
      r0.displayName = "DropdownMenuRadioItem";
      var r1 = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rE, { ...o, ...r, ref: t });
      });
      r1.displayName = "DropdownMenuItemIndicator";
      var r2 = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rR, { ...o, ...r, ref: t });
      });
      ((r2.displayName = "DropdownMenuSeparator"),
        (f.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, ...r } = e,
            o = rK(n);
          return (0, y.jsx)(rC, { ...o, ...r, ref: t });
        }).displayName = "DropdownMenuArrow"));
      var r5 = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rD, { ...o, ...r, ref: t });
      });
      r5.displayName = "DropdownMenuSubTrigger";
      var r3 = f.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = rK(n);
        return (0, y.jsx)(rP, {
          ...o,
          ...r,
          ref: t,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      r3.displayName = "DropdownMenuSubContent";
      var r4 = rH,
        r6 = rz,
        r7 = rU,
        r8 = rY,
        r9 = rG,
        oe = r$,
        ot = rq,
        on = rJ,
        or = rQ,
        oo = r0,
        oi = r1,
        oa = r2,
        ol = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              open: r,
              onOpenChange: o,
              defaultOpen: i,
            } = e,
            a = rK(t),
            [l, u] = E({
              prop: r,
              defaultProp: null != i && i,
              onChange: o,
              caller: "DropdownMenuSub",
            });
          return (0, y.jsx)(rk, {
            ...a,
            open: l,
            onOpenChange: u,
            children: n,
          });
        },
        ou = r5,
        oc = r3;
    },
  },
]);
