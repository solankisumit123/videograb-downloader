"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2346],
  {
    9982: function (t, e, a) {
      (a.r(e),
        a.d(e, {
          default: function () {
            return r.a;
          },
        }));
      var n = a(8187),
        r = a.n(n),
        o = {};
      for (var s in n)
        "default" !== s &&
          (o[s] = function (t) {
            return n[t];
          }.bind(0, s));
      a.d(e, o);
    },
    5507: function (t, e) {
      let a;
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var a in e)
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
        })(e, {
          DOMAttributeNames: function () {
            return n;
          },
          default: function () {
            return s;
          },
          isEqualNode: function () {
            return o;
          },
        }));
      let n = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function r(t) {
        let { type: e, props: a } = t,
          r = document.createElement(e);
        for (let t in a) {
          if (
            !a.hasOwnProperty(t) ||
            "children" === t ||
            "dangerouslySetInnerHTML" === t ||
            void 0 === a[t]
          )
            continue;
          let o = n[t] || t.toLowerCase();
          "script" === e && ("async" === o || "defer" === o || "noModule" === o)
            ? (r[o] = !!a[t])
            : r.setAttribute(o, a[t]);
        }
        let { children: o, dangerouslySetInnerHTML: s } = a;
        return (
          s
            ? (r.innerHTML = s.__html || "")
            : o &&
              (r.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
          r
        );
      }
      function o(t, e) {
        if (t instanceof HTMLElement && e instanceof HTMLElement) {
          let a = e.getAttribute("nonce");
          if (a && !t.getAttribute("nonce")) {
            let n = e.cloneNode(!0);
            return (
              n.setAttribute("nonce", ""),
              (n.nonce = a),
              a === t.nonce && t.isEqualNode(n)
            );
          }
        }
        return t.isEqualNode(e);
      }
      function s() {
        return {
          mountedInstances: new Set(),
          updateHead: (t) => {
            let e = {};
            t.forEach((t) => {
              if ("link" === t.type && t.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + t.props["data-href"] + '"]',
                  )
                )
                  return;
                ((t.props.href = t.props["data-href"]),
                  (t.props["data-href"] = void 0));
              }
              let a = e[t.type] || [];
              (a.push(t), (e[t.type] = a));
            });
            let n = e.title ? e.title[0] : null,
              r = "";
            if (n) {
              let { children: t } = n.props;
              r = "string" == typeof t ? t : Array.isArray(t) ? t.join("") : "";
            }
            (r !== document.title && (document.title = r),
              ["meta", "base", "link", "style", "script"].forEach((t) => {
                a(t, e[t] || []);
              }));
          },
        };
      }
      ((a = (t, e) => {
        let a = document.getElementsByTagName("head")[0],
          n = a.querySelector("meta[name=next-head-count]"),
          s = Number(n.content),
          i = [];
        for (
          let e = 0, a = n.previousElementSibling;
          e < s;
          e++, a = (null == a ? void 0 : a.previousElementSibling) || null
        ) {
          var l;
          (null == a
            ? void 0
            : null == (l = a.tagName)
              ? void 0
              : l.toLowerCase()) === t && i.push(a);
        }
        let d = e.map(r).filter((t) => {
          for (let e = 0, a = i.length; e < a; e++)
            if (o(i[e], t)) return (i.splice(e, 1), !1);
          return !0;
        });
        (i.forEach((t) => {
          var e;
          return null == (e = t.parentNode) ? void 0 : e.removeChild(t);
        }),
          d.forEach((t) => a.insertBefore(t, n)),
          (n.content = (s - i.length + d.length).toString()));
      }),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default)));
    },
    8187: function (t, e, a) {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var a in e)
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
        })(e, {
          default: function () {
            return b;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return v;
          },
        }));
      let n = a(4620),
        r = a(5278),
        o = a(4336),
        s = n._(a(4583)),
        i = r._(a(4271)),
        l = a(1534),
        d = a(5507),
        c = a(7723),
        u = new Map(),
        f = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        m = (t) => {
          if (s.default.preinit) {
            t.forEach((t) => {
              s.default.preinit(t, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let e = document.head;
            t.forEach((t) => {
              let a = document.createElement("link");
              ((a.type = "text/css"),
                (a.rel = "stylesheet"),
                (a.href = t),
                e.appendChild(a));
            });
          }
        },
        h = (t) => {
          let {
              src: e,
              id: a,
              onLoad: n = () => {},
              onReady: r = null,
              dangerouslySetInnerHTML: o,
              children: s = "",
              strategy: i = "afterInteractive",
              onError: l,
              stylesheets: c,
            } = t,
            h = a || e;
          if (h && f.has(h)) return;
          if (u.has(e)) {
            (f.add(h), u.get(e).then(n, l));
            return;
          }
          let g = () => {
              (r && r(), f.add(h));
            },
            v = document.createElement("script"),
            y = new Promise((t, e) => {
              (v.addEventListener("load", function (e) {
                (t(), n && n.call(this, e), g());
              }),
                v.addEventListener("error", function (t) {
                  e(t);
                }));
            }).catch(function (t) {
              l && l(t);
            });
          for (let [a, n] of (o
            ? ((v.innerHTML = o.__html || ""), g())
            : s
              ? ((v.textContent =
                  "string" == typeof s
                    ? s
                    : Array.isArray(s)
                      ? s.join("")
                      : ""),
                g())
              : e && ((v.src = e), u.set(e, y)),
          Object.entries(t))) {
            if (void 0 === n || p.includes(a)) continue;
            let t = d.DOMAttributeNames[a] || a.toLowerCase();
            v.setAttribute(t, n);
          }
          ("worker" === i && v.setAttribute("type", "text/partytown"),
            v.setAttribute("data-nscript", i),
            c && m(c),
            document.body.appendChild(v));
        };
      function g(t) {
        let { strategy: e = "afterInteractive" } = t;
        "lazyOnload" === e
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => h(t));
            })
          : h(t);
      }
      function v(t) {
        (t.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((t) => {
            let e = t.id || t.getAttribute("src");
            f.add(e);
          }));
      }
      function y(t) {
        let {
            id: e,
            src: a = "",
            onLoad: n = () => {},
            onReady: r = null,
            strategy: d = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...m
          } = t,
          {
            updateScripts: g,
            scripts: v,
            getIsSsr: y,
            appDir: b,
            nonce: w,
          } = (0, i.useContext)(l.HeadManagerContext),
          x = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let t = e || a;
          x.current || (r && t && f.has(t) && r(), (x.current = !0));
        }, [r, e, a]);
        let E = (0, i.useRef)(!1);
        if (
          ((0, i.useEffect)(() => {
            !E.current &&
              ("afterInteractive" === d
                ? h(t)
                : "lazyOnload" === d &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => h(t))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => h(t));
                      })),
              (E.current = !0));
          }, [t, d]),
          ("beforeInteractive" === d || "worker" === d) &&
            (g
              ? ((v[d] = (v[d] || []).concat([
                  { id: e, src: a, onLoad: n, onReady: r, onError: u, ...m },
                ])),
                g(v))
              : y && y()
                ? f.add(e || a)
                : y && !y() && h(t)),
          b)
        ) {
          if (
            (p &&
              p.forEach((t) => {
                s.default.preinit(t, { as: "style" });
              }),
            "beforeInteractive" === d)
          )
            return a
              ? (s.default.preload(
                  a,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: w,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: w, crossOrigin: m.crossOrigin },
                ),
                (0, o.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([a, { ...m, id: e }]) +
                      ")",
                  },
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: e }]) +
                      ")",
                  },
                }));
          "afterInteractive" === d &&
            a &&
            s.default.preload(
              a,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: w,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: w, crossOrigin: m.crossOrigin },
            );
        }
        return null;
      }
      Object.defineProperty(y, "__nextScript", { value: !0 });
      let b = y;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1175: function (t, e, a) {
      a.d(e, {
        A: function () {
          return v;
        },
        Toaster: function () {
          return E;
        },
      });
      var n = a(4271),
        r = a(4583),
        o = (t) => {
          switch (t) {
            case "success":
              return l;
            case "info":
              return c;
            case "warning":
              return d;
            case "error":
              return u;
            default:
              return null;
          }
        },
        s = Array(12).fill(0),
        i = (t) => {
          let { visible: e, className: a } = t;
          return n.createElement(
            "div",
            {
              className: ["sonner-loading-wrapper", a]
                .filter(Boolean)
                .join(" "),
              "data-visible": e,
            },
            n.createElement(
              "div",
              { className: "sonner-spinner" },
              s.map((t, e) =>
                n.createElement("div", {
                  className: "sonner-loading-bar",
                  key: "spinner-bar-".concat(e),
                }),
              ),
            ),
          );
        },
        l = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          }),
        ),
        d = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          }),
        ),
        c = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          }),
        ),
        u = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          }),
        ),
        f = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          n.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          n.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
        ),
        p = () => {
          let [t, e] = n.useState(document.hidden);
          return (
            n.useEffect(() => {
              let t = () => {
                e(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", t),
                () => window.removeEventListener("visibilitychange", t)
              );
            }, []),
            t
          );
        },
        m = 1,
        h = new (class {
          constructor() {
            ((this.subscribe = (t) => (
              this.subscribers.push(t),
              () => {
                let e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1);
              }
            )),
              (this.publish = (t) => {
                this.subscribers.forEach((e) => e(t));
              }),
              (this.addToast = (t) => {
                (this.publish(t), (this.toasts = [...this.toasts, t]));
              }),
              (this.create = (t) => {
                var e;
                let { message: a, ...n } = t,
                  r =
                    "number" == typeof (null == t ? void 0 : t.id) ||
                    (null == (e = t.id) ? void 0 : e.length) > 0
                      ? t.id
                      : m++,
                  o = this.toasts.find((t) => t.id === r),
                  s = void 0 === t.dismissible || t.dismissible;
                return (
                  this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
                  o
                    ? (this.toasts = this.toasts.map((e) =>
                        e.id === r
                          ? (this.publish({ ...e, ...t, id: r, title: a }),
                            { ...e, ...t, id: r, dismissible: s, title: a })
                          : e,
                      ))
                    : this.addToast({ title: a, ...n, dismissible: s, id: r }),
                  r
                );
              }),
              (this.dismiss = (t) => (
                this.dismissedToasts.add(t),
                t ||
                  this.toasts.forEach((t) => {
                    this.subscribers.forEach((e) =>
                      e({ id: t.id, dismiss: !0 }),
                    );
                  }),
                this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
                t
              )),
              (this.message = (t, e) => this.create({ ...e, message: t })),
              (this.error = (t, e) =>
                this.create({ ...e, message: t, type: "error" })),
              (this.success = (t, e) =>
                this.create({ ...e, type: "success", message: t })),
              (this.info = (t, e) =>
                this.create({ ...e, type: "info", message: t })),
              (this.warning = (t, e) =>
                this.create({ ...e, type: "warning", message: t })),
              (this.loading = (t, e) =>
                this.create({ ...e, type: "loading", message: t })),
              (this.promise = (t, e) => {
                let a;
                if (!e) return;
                void 0 !== e.loading &&
                  (a = this.create({
                    ...e,
                    promise: t,
                    type: "loading",
                    message: e.loading,
                    description:
                      "function" != typeof e.description
                        ? e.description
                        : void 0,
                  }));
                let r = t instanceof Promise ? t : t(),
                  o = void 0 !== a,
                  s,
                  i = r
                    .then(async (t) => {
                      if (((s = ["resolve", t]), n.isValidElement(t)))
                        ((o = !1),
                          this.create({ id: a, type: "default", message: t }));
                      else if (g(t) && !t.ok) {
                        o = !1;
                        let n =
                            "function" == typeof e.error
                              ? await e.error(
                                  "HTTP error! status: ".concat(t.status),
                                )
                              : e.error,
                          r =
                            "function" == typeof e.description
                              ? await e.description(
                                  "HTTP error! status: ".concat(t.status),
                                )
                              : e.description;
                        this.create({
                          id: a,
                          type: "error",
                          message: n,
                          description: r,
                        });
                      } else if (void 0 !== e.success) {
                        o = !1;
                        let n =
                            "function" == typeof e.success
                              ? await e.success(t)
                              : e.success,
                          r =
                            "function" == typeof e.description
                              ? await e.description(t)
                              : e.description;
                        this.create({
                          id: a,
                          type: "success",
                          message: n,
                          description: r,
                        });
                      }
                    })
                    .catch(async (t) => {
                      if (((s = ["reject", t]), void 0 !== e.error)) {
                        o = !1;
                        let n =
                            "function" == typeof e.error
                              ? await e.error(t)
                              : e.error,
                          r =
                            "function" == typeof e.description
                              ? await e.description(t)
                              : e.description;
                        this.create({
                          id: a,
                          type: "error",
                          message: n,
                          description: r,
                        });
                      }
                    })
                    .finally(() => {
                      var t;
                      (o && (this.dismiss(a), (a = void 0)),
                        null == (t = e.finally) || t.call(e));
                    }),
                  l = () =>
                    new Promise((t, e) =>
                      i
                        .then(() => ("reject" === s[0] ? e(s[1]) : t(s[1])))
                        .catch(e),
                    );
                return "string" != typeof a && "number" != typeof a
                  ? { unwrap: l }
                  : Object.assign(a, { unwrap: l });
              }),
              (this.custom = (t, e) => {
                let a = (null == e ? void 0 : e.id) || m++;
                return (this.create({ jsx: t(a), id: a, ...e }), a);
              }),
              (this.getActiveToasts = () =>
                this.toasts.filter((t) => !this.dismissedToasts.has(t.id))),
              (this.subscribers = []),
              (this.toasts = []),
              (this.dismissedToasts = new Set()));
          }
        })(),
        g = (t) =>
          t &&
          "object" == typeof t &&
          "ok" in t &&
          "boolean" == typeof t.ok &&
          "status" in t &&
          "number" == typeof t.status,
        v = Object.assign(
          (t, e) => {
            let a = (null == e ? void 0 : e.id) || m++;
            return (h.addToast({ title: t, ...e, id: a }), a);
          },
          {
            success: h.success,
            info: h.info,
            warning: h.warning,
            error: h.error,
            custom: h.custom,
            message: h.message,
            promise: h.promise,
            dismiss: h.dismiss,
            loading: h.loading,
          },
          { getHistory: () => h.toasts, getToasts: () => h.getActiveToasts() },
        );
      function y(t) {
        return void 0 !== t.label;
      }
      function b() {
        for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
          e[a] = arguments[a];
        return e.filter(Boolean).join(" ");
      }
      !(function (t) {
        let { insertAt: e } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || "undefined" == typeof document) return;
        let a = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        ((n.type = "text/css"),
          "top" === e && a.firstChild
            ? a.insertBefore(n, a.firstChild)
            : a.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = t)
            : n.appendChild(document.createTextNode(t)));
      })(
        ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n',
      );
      var w = (t) => {
        var e, a, r, s, l, d, c, u, m, h, g, v, w, x;
        let {
            invert: E,
            toast: k,
            unstyled: N,
            interacting: S,
            setHeights: M,
            visibleToasts: T,
            heights: C,
            index: _,
            toasts: I,
            expanded: B,
            removeToast: j,
            defaultRichColors: L,
            closeButton: A,
            style: O,
            cancelButtonStyle: z,
            actionButtonStyle: H,
            className: P = "",
            descriptionClassName: R = "",
            duration: Y,
            position: D,
            gap: q,
            loadingIcon: V,
            expandByDefault: U,
            classNames: W,
            icons: F,
            closeButtonAriaLabel: K = "Close toast",
            pauseWhenPageIsHidden: J,
          } = t,
          [X, G] = n.useState(null),
          [Q, Z] = n.useState(null),
          [$, tt] = n.useState(!1),
          [te, ta] = n.useState(!1),
          [tn, tr] = n.useState(!1),
          [to, ts] = n.useState(!1),
          [ti, tl] = n.useState(!1),
          [td, tc] = n.useState(0),
          [tu, tf] = n.useState(0),
          tp = n.useRef(k.duration || Y || 4e3),
          tm = n.useRef(null),
          th = n.useRef(null),
          tg = 0 === _,
          tv = _ + 1 <= T,
          ty = k.type,
          tb = !1 !== k.dismissible,
          tw = k.className || "",
          tx = k.descriptionClassName || "",
          tE = n.useMemo(
            () => C.findIndex((t) => t.toastId === k.id) || 0,
            [C, k.id],
          ),
          tk = n.useMemo(() => {
            var t;
            return null != (t = k.closeButton) ? t : A;
          }, [k.closeButton, A]),
          tN = n.useMemo(() => k.duration || Y || 4e3, [k.duration, Y]),
          tS = n.useRef(0),
          tM = n.useRef(0),
          tT = n.useRef(0),
          tC = n.useRef(null),
          [t_, tI] = D.split("-"),
          tB = n.useMemo(
            () => C.reduce((t, e, a) => (a >= tE ? t : t + e.height), 0),
            [C, tE],
          ),
          tj = p(),
          tL = k.invert || E,
          tA = "loading" === ty;
        ((tM.current = n.useMemo(() => tE * q + tB, [tE, tB])),
          n.useEffect(() => {
            tp.current = tN;
          }, [tN]),
          n.useEffect(() => {
            tt(!0);
          }, []),
          n.useEffect(() => {
            let t = th.current;
            if (t) {
              let e = t.getBoundingClientRect().height;
              return (
                tf(e),
                M((t) => [
                  { toastId: k.id, height: e, position: k.position },
                  ...t,
                ]),
                () => M((t) => t.filter((t) => t.toastId !== k.id))
              );
            }
          }, [M, k.id]),
          n.useLayoutEffect(() => {
            if (!$) return;
            let t = th.current,
              e = t.style.height;
            t.style.height = "auto";
            let a = t.getBoundingClientRect().height;
            ((t.style.height = e),
              tf(a),
              M((t) =>
                t.find((t) => t.toastId === k.id)
                  ? t.map((t) => (t.toastId === k.id ? { ...t, height: a } : t))
                  : [{ toastId: k.id, height: a, position: k.position }, ...t],
              ));
          }, [$, k.title, k.description, M, k.id]));
        let tO = n.useCallback(() => {
          (ta(!0),
            tc(tM.current),
            M((t) => t.filter((t) => t.toastId !== k.id)),
            setTimeout(() => {
              j(k);
            }, 200));
        }, [k, j, M, tM]);
        return (
          n.useEffect(() => {
            let t;
            if (
              (!k.promise || "loading" !== ty) &&
              k.duration !== 1 / 0 &&
              "loading" !== k.type
            )
              return (
                B || S || (J && tj)
                  ? (() => {
                      if (tT.current < tS.current) {
                        let t = new Date().getTime() - tS.current;
                        tp.current = tp.current - t;
                      }
                      tT.current = new Date().getTime();
                    })()
                  : tp.current !== 1 / 0 &&
                    ((tS.current = new Date().getTime()),
                    (t = setTimeout(() => {
                      var t;
                      (null == (t = k.onAutoClose) || t.call(k, k), tO());
                    }, tp.current))),
                () => clearTimeout(t)
              );
          }, [B, S, k, ty, J, tj, tO]),
          n.useEffect(() => {
            k.delete && tO();
          }, [tO, k.delete]),
          n.createElement(
            "li",
            {
              tabIndex: 0,
              ref: th,
              className: b(
                P,
                tw,
                null == W ? void 0 : W.toast,
                null == (e = null == k ? void 0 : k.classNames)
                  ? void 0
                  : e.toast,
                null == W ? void 0 : W.default,
                null == W ? void 0 : W[ty],
                null == (a = null == k ? void 0 : k.classNames)
                  ? void 0
                  : a[ty],
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (r = k.richColors) ? r : L,
              "data-styled": !(k.jsx || k.unstyled || N),
              "data-mounted": $,
              "data-promise": !!k.promise,
              "data-swiped": ti,
              "data-removed": te,
              "data-visible": tv,
              "data-y-position": t_,
              "data-x-position": tI,
              "data-index": _,
              "data-front": tg,
              "data-swiping": tn,
              "data-dismissible": tb,
              "data-type": ty,
              "data-invert": tL,
              "data-swipe-out": to,
              "data-swipe-direction": Q,
              "data-expanded": !!(B || (U && $)),
              style: {
                "--index": _,
                "--toasts-before": _,
                "--z-index": I.length - _,
                "--offset": "".concat(te ? td : tM.current, "px"),
                "--initial-height": U ? "auto" : "".concat(tu, "px"),
                ...O,
                ...k.style,
              },
              onDragEnd: () => {
                (tr(!1), G(null), (tC.current = null));
              },
              onPointerDown: (t) => {
                tA ||
                  !tb ||
                  ((tm.current = new Date()),
                  tc(tM.current),
                  t.target.setPointerCapture(t.pointerId),
                  "BUTTON" !== t.target.tagName &&
                    (tr(!0), (tC.current = { x: t.clientX, y: t.clientY })));
              },
              onPointerUp: () => {
                var t, e, a, n;
                if (to || !tb) return;
                tC.current = null;
                let r = Number(
                    (null == (t = th.current)
                      ? void 0
                      : t.style
                          .getPropertyValue("--swipe-amount-x")
                          .replace("px", "")) || 0,
                  ),
                  o = Number(
                    (null == (e = th.current)
                      ? void 0
                      : e.style
                          .getPropertyValue("--swipe-amount-y")
                          .replace("px", "")) || 0,
                  ),
                  s =
                    new Date().getTime() -
                    (null == (a = tm.current) ? void 0 : a.getTime()),
                  i = "x" === X ? r : o;
                if (Math.abs(i) >= 20 || Math.abs(i) / s > 0.11) {
                  (tc(tM.current),
                    null == (n = k.onDismiss) || n.call(k, k),
                    Z(
                      "x" === X
                        ? r > 0
                          ? "right"
                          : "left"
                        : o > 0
                          ? "down"
                          : "up",
                    ),
                    tO(),
                    ts(!0),
                    tl(!1));
                  return;
                }
                (tr(!1), G(null));
              },
              onPointerMove: (e) => {
                var a, n, r, o;
                if (
                  !tC.current ||
                  !tb ||
                  (null == (a = window.getSelection())
                    ? void 0
                    : a.toString().length) > 0
                )
                  return;
                let s = e.clientY - tC.current.y,
                  i = e.clientX - tC.current.x,
                  l =
                    null != (n = t.swipeDirections)
                      ? n
                      : (function (t) {
                          let [e, a] = t.split("-"),
                            n = [];
                          return (e && n.push(e), a && n.push(a), n);
                        })(D);
                !X &&
                  (Math.abs(i) > 1 || Math.abs(s) > 1) &&
                  G(Math.abs(i) > Math.abs(s) ? "x" : "y");
                let d = { x: 0, y: 0 };
                ("y" === X
                  ? (l.includes("top") || l.includes("bottom")) &&
                    ((l.includes("top") && s < 0) ||
                      (l.includes("bottom") && s > 0)) &&
                    (d.y = s)
                  : "x" === X &&
                    (l.includes("left") || l.includes("right")) &&
                    ((l.includes("left") && i < 0) ||
                      (l.includes("right") && i > 0)) &&
                    (d.x = i),
                  (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && tl(!0),
                  null == (r = th.current) ||
                    r.style.setProperty(
                      "--swipe-amount-x",
                      "".concat(d.x, "px"),
                    ),
                  null == (o = th.current) ||
                    o.style.setProperty(
                      "--swipe-amount-y",
                      "".concat(d.y, "px"),
                    ));
              },
            },
            tk && !k.jsx
              ? n.createElement(
                  "button",
                  {
                    "aria-label": K,
                    "data-disabled": tA,
                    "data-close-button": !0,
                    onClick:
                      tA || !tb
                        ? () => {}
                        : () => {
                            var t;
                            (tO(), null == (t = k.onDismiss) || t.call(k, k));
                          },
                    className: b(
                      null == W ? void 0 : W.closeButton,
                      null == (s = null == k ? void 0 : k.classNames)
                        ? void 0
                        : s.closeButton,
                    ),
                  },
                  null != (l = null == F ? void 0 : F.close) ? l : f,
                )
              : null,
            k.jsx || (0, n.isValidElement)(k.title)
              ? k.jsx
                ? k.jsx
                : "function" == typeof k.title
                  ? k.title()
                  : k.title
              : n.createElement(
                  n.Fragment,
                  null,
                  ty || k.icon || k.promise
                    ? n.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: b(
                            null == W ? void 0 : W.icon,
                            null == (d = null == k ? void 0 : k.classNames)
                              ? void 0
                              : d.icon,
                          ),
                        },
                        k.promise || ("loading" === k.type && !k.icon)
                          ? k.icon ||
                              (null != F && F.loading
                                ? n.createElement(
                                    "div",
                                    {
                                      className: b(
                                        null == W ? void 0 : W.loader,
                                        null ==
                                          (v =
                                            null == k ? void 0 : k.classNames)
                                          ? void 0
                                          : v.loader,
                                        "sonner-loader",
                                      ),
                                      "data-visible": "loading" === ty,
                                    },
                                    F.loading,
                                  )
                                : V
                                  ? n.createElement(
                                      "div",
                                      {
                                        className: b(
                                          null == W ? void 0 : W.loader,
                                          null ==
                                            (w =
                                              null == k ? void 0 : k.classNames)
                                            ? void 0
                                            : w.loader,
                                          "sonner-loader",
                                        ),
                                        "data-visible": "loading" === ty,
                                      },
                                      V,
                                    )
                                  : n.createElement(i, {
                                      className: b(
                                        null == W ? void 0 : W.loader,
                                        null ==
                                          (x =
                                            null == k ? void 0 : k.classNames)
                                          ? void 0
                                          : x.loader,
                                      ),
                                      visible: "loading" === ty,
                                    }))
                          : null,
                        "loading" !== k.type
                          ? k.icon || (null == F ? void 0 : F[ty]) || o(ty)
                          : null,
                      )
                    : null,
                  n.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: b(
                        null == W ? void 0 : W.content,
                        null == (c = null == k ? void 0 : k.classNames)
                          ? void 0
                          : c.content,
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        "data-title": "",
                        className: b(
                          null == W ? void 0 : W.title,
                          null == (u = null == k ? void 0 : k.classNames)
                            ? void 0
                            : u.title,
                        ),
                      },
                      "function" == typeof k.title ? k.title() : k.title,
                    ),
                    k.description
                      ? n.createElement(
                          "div",
                          {
                            "data-description": "",
                            className: b(
                              R,
                              tx,
                              null == W ? void 0 : W.description,
                              null == (m = null == k ? void 0 : k.classNames)
                                ? void 0
                                : m.description,
                            ),
                          },
                          "function" == typeof k.description
                            ? k.description()
                            : k.description,
                        )
                      : null,
                  ),
                  (0, n.isValidElement)(k.cancel)
                    ? k.cancel
                    : k.cancel && y(k.cancel)
                      ? n.createElement(
                          "button",
                          {
                            "data-button": !0,
                            "data-cancel": !0,
                            style: k.cancelButtonStyle || z,
                            onClick: (t) => {
                              var e, a;
                              y(k.cancel) &&
                                tb &&
                                (null == (a = (e = k.cancel).onClick) ||
                                  a.call(e, t),
                                tO());
                            },
                            className: b(
                              null == W ? void 0 : W.cancelButton,
                              null == (h = null == k ? void 0 : k.classNames)
                                ? void 0
                                : h.cancelButton,
                            ),
                          },
                          k.cancel.label,
                        )
                      : null,
                  (0, n.isValidElement)(k.action)
                    ? k.action
                    : k.action && y(k.action)
                      ? n.createElement(
                          "button",
                          {
                            "data-button": !0,
                            "data-action": !0,
                            style: k.actionButtonStyle || H,
                            onClick: (t) => {
                              var e, a;
                              y(k.action) &&
                                (null == (a = (e = k.action).onClick) ||
                                  a.call(e, t),
                                t.defaultPrevented || tO());
                            },
                            className: b(
                              null == W ? void 0 : W.actionButton,
                              null == (g = null == k ? void 0 : k.classNames)
                                ? void 0
                                : g.actionButton,
                            ),
                          },
                          k.action.label,
                        )
                      : null,
                ),
          )
        );
      };
      function x() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let t = document.documentElement.getAttribute("dir");
        return "auto" !== t && t
          ? t
          : window.getComputedStyle(document.documentElement).direction;
      }
      var E = (0, n.forwardRef)(function (t, e) {
        let {
            invert: a,
            position: o = "bottom-right",
            hotkey: s = ["altKey", "KeyT"],
            expand: i,
            closeButton: l,
            className: d,
            offset: c,
            mobileOffset: u,
            theme: f = "light",
            richColors: p,
            duration: m,
            style: g,
            visibleToasts: v = 3,
            toastOptions: y,
            dir: b = x(),
            gap: E = 14,
            loadingIcon: k,
            icons: N,
            containerAriaLabel: S = "Notifications",
            pauseWhenPageIsHidden: M,
          } = t,
          [T, C] = n.useState([]),
          _ = n.useMemo(
            () =>
              Array.from(
                new Set(
                  [o].concat(
                    T.filter((t) => t.position).map((t) => t.position),
                  ),
                ),
              ),
            [T, o],
          ),
          [I, B] = n.useState([]),
          [j, L] = n.useState(!1),
          [A, O] = n.useState(!1),
          [z, H] = n.useState(
            "system" !== f
              ? f
              : "undefined" != typeof window &&
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light",
          ),
          P = n.useRef(null),
          R = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          Y = n.useRef(null),
          D = n.useRef(!1),
          q = n.useCallback((t) => {
            C((e) => {
              var a;
              return (
                (null != (a = e.find((e) => e.id === t.id)) && a.delete) ||
                  h.dismiss(t.id),
                e.filter((e) => {
                  let { id: a } = e;
                  return a !== t.id;
                })
              );
            });
          }, []);
        return (
          n.useEffect(
            () =>
              h.subscribe((t) => {
                if (t.dismiss) {
                  C((e) =>
                    e.map((e) => (e.id === t.id ? { ...e, delete: !0 } : e)),
                  );
                  return;
                }
                setTimeout(() => {
                  r.flushSync(() => {
                    C((e) => {
                      let a = e.findIndex((e) => e.id === t.id);
                      return -1 !== a
                        ? [
                            ...e.slice(0, a),
                            { ...e[a], ...t },
                            ...e.slice(a + 1),
                          ]
                        : [t, ...e];
                    });
                  });
                });
              }),
            [],
          ),
          n.useEffect(() => {
            if ("system" !== f) {
              H(f);
              return;
            }
            if (
              ("system" === f &&
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? H("dark")
                  : H("light")),
              "undefined" == typeof window)
            )
              return;
            let t = window.matchMedia("(prefers-color-scheme: dark)");
            try {
              t.addEventListener("change", (t) => {
                let { matches: e } = t;
                H(e ? "dark" : "light");
              });
            } catch (e) {
              t.addListener((t) => {
                let { matches: e } = t;
                try {
                  H(e ? "dark" : "light");
                } catch (t) {
                  console.error(t);
                }
              });
            }
          }, [f]),
          n.useEffect(() => {
            T.length <= 1 && L(!1);
          }, [T]),
          n.useEffect(() => {
            let t = (t) => {
              var e, a;
              (s.every((e) => t[e] || t.code === e) &&
                (L(!0), null == (e = P.current) || e.focus()),
                "Escape" === t.code &&
                  (document.activeElement === P.current ||
                    (null != (a = P.current) &&
                      a.contains(document.activeElement))) &&
                  L(!1));
            };
            return (
              document.addEventListener("keydown", t),
              () => document.removeEventListener("keydown", t)
            );
          }, [s]),
          n.useEffect(() => {
            if (P.current)
              return () => {
                Y.current &&
                  (Y.current.focus({ preventScroll: !0 }),
                  (Y.current = null),
                  (D.current = !1));
              };
          }, [P.current]),
          n.createElement(
            "section",
            {
              ref: e,
              "aria-label": "".concat(S, " ").concat(R),
              tabIndex: -1,
              "aria-live": "polite",
              "aria-relevant": "additions text",
              "aria-atomic": "false",
              suppressHydrationWarning: !0,
            },
            _.map((e, r) => {
              var o;
              let s;
              let [f, h] = e.split("-");
              return T.length
                ? n.createElement(
                    "ol",
                    {
                      key: e,
                      dir: "auto" === b ? x() : b,
                      tabIndex: -1,
                      ref: P,
                      className: d,
                      "data-sonner-toaster": !0,
                      "data-theme": z,
                      "data-y-position": f,
                      "data-lifted": j && T.length > 1 && !i,
                      "data-x-position": h,
                      style: {
                        "--front-toast-height": "".concat(
                          (null == (o = I[0]) ? void 0 : o.height) || 0,
                          "px",
                        ),
                        "--width": "".concat(356, "px"),
                        "--gap": "".concat(E, "px"),
                        ...g,
                        ...((s = {}),
                        [c, u].forEach((t, e) => {
                          let a = 1 === e,
                            n = a ? "--mobile-offset" : "--offset",
                            r = a ? "16px" : "32px";
                          function o(t) {
                            ["top", "right", "bottom", "left"].forEach((e) => {
                              s["".concat(n, "-").concat(e)] =
                                "number" == typeof t ? "".concat(t, "px") : t;
                            });
                          }
                          "number" == typeof t || "string" == typeof t
                            ? o(t)
                            : "object" == typeof t
                              ? ["top", "right", "bottom", "left"].forEach(
                                  (e) => {
                                    void 0 === t[e]
                                      ? (s["".concat(n, "-").concat(e)] = r)
                                      : (s["".concat(n, "-").concat(e)] =
                                          "number" == typeof t[e]
                                            ? "".concat(t[e], "px")
                                            : t[e]);
                                  },
                                )
                              : o(r);
                        }),
                        s),
                      },
                      onBlur: (t) => {
                        D.current &&
                          !t.currentTarget.contains(t.relatedTarget) &&
                          ((D.current = !1),
                          Y.current &&
                            (Y.current.focus({ preventScroll: !0 }),
                            (Y.current = null)));
                      },
                      onFocus: (t) => {
                        (t.target instanceof HTMLElement &&
                          "false" === t.target.dataset.dismissible) ||
                          D.current ||
                          ((D.current = !0), (Y.current = t.relatedTarget));
                      },
                      onMouseEnter: () => L(!0),
                      onMouseMove: () => L(!0),
                      onMouseLeave: () => {
                        A || L(!1);
                      },
                      onDragEnd: () => L(!1),
                      onPointerDown: (t) => {
                        (t.target instanceof HTMLElement &&
                          "false" === t.target.dataset.dismissible) ||
                          O(!0);
                      },
                      onPointerUp: () => O(!1),
                    },
                    T.filter(
                      (t) => (!t.position && 0 === r) || t.position === e,
                    ).map((r, o) => {
                      var s, d;
                      return n.createElement(w, {
                        key: r.id,
                        icons: N,
                        index: o,
                        toast: r,
                        defaultRichColors: p,
                        duration:
                          null != (s = null == y ? void 0 : y.duration) ? s : m,
                        className: null == y ? void 0 : y.className,
                        descriptionClassName:
                          null == y ? void 0 : y.descriptionClassName,
                        invert: a,
                        visibleToasts: v,
                        closeButton:
                          null != (d = null == y ? void 0 : y.closeButton)
                            ? d
                            : l,
                        interacting: A,
                        position: e,
                        style: null == y ? void 0 : y.style,
                        unstyled: null == y ? void 0 : y.unstyled,
                        classNames: null == y ? void 0 : y.classNames,
                        cancelButtonStyle:
                          null == y ? void 0 : y.cancelButtonStyle,
                        actionButtonStyle:
                          null == y ? void 0 : y.actionButtonStyle,
                        removeToast: q,
                        toasts: T.filter((t) => t.position == r.position),
                        heights: I.filter((t) => t.position == r.position),
                        setHeights: B,
                        expandByDefault: i,
                        gap: E,
                        loadingIcon: k,
                        expanded: j,
                        pauseWhenPageIsHidden: M,
                        swipeDirections: t.swipeDirections,
                      });
                    }),
                  )
                : null;
            }),
          )
        );
      });
    },
  },
]);
