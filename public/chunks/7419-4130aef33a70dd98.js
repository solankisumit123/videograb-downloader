"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7419],
  {
    7419: function (A, e, t) {
      t.d(e, {
        default: function () {
          return j;
        },
      });
      var m = t(4336),
        d = t(3329),
        a = t(1210),
        r = t(910),
        s = t(9630),
        i = t(9285),
        l = t(9135),
        x = t(9336),
        p = t(8908),
        c = t(1187),
        n = t(2418),
        h = t(6718),
        g = t(9426),
        o = t(9718),
        u = t(720),
        w = t(5853),
        b = t(8694),
        f = t(5714),
        E = t(7414),
        B = t(6964),
        v = t(2990),
        C = t(5798),
        F = t(6777),
        N = t(7797),
        R = t(4271),
        U = t(4165),
        M = t(4228),
        S = t(1946);
      function j(A) {
        let { type: e = "home", kind: t = "", queryParams: j = {} } = A,
          X = (0, F.useTranslations)("Index"),
          V = (0, F.useLocale)(),
          T = (0, B.jD)(),
          Z = (0, E.LA)(T || "/", V),
          z = [
            {
              icon: s.Z.src,
              title: X("adva.0.title"),
              exp: X("adva.0.description"),
            },
            {
              icon: i.Z.src,
              title: X("adva.1.title"),
              exp: X("adva.1.description"),
            },
            {
              icon: u.Z.src,
              title: X("adva.2.title"),
              exp: X("adva.2.description"),
            },
            {
              icon: l.Z.src,
              title: X("adva.3.title"),
              exp: X("adva.3.description"),
            },
            {
              icon: r.Z.src,
              title: X("adva.4.title"),
              exp: X("adva.4.description"),
            },
            {
              icon: x.Z.src,
              title: X("adva.5.title"),
              exp: X("adva.5.description"),
            },
          ],
          O = [
            { img: c.Z.src },
            { img: n.Z.src },
            { img: h.Z.src },
            { img: g.Z.src },
            { img: o.Z.src },
          ],
          [D, G] = (0, R.useState)(!1),
          [L, k] = (0, R.useState)(!1),
          [I, Q] = (0, R.useState)(!1),
          J = (0, R.useRef)(null);
        return (
          (0, R.useEffect)(() => {
            (G("pc" === (0, C.l7)()), (0, d._)("home"));
          }, []),
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [
                  (0, m.jsx)(a.default, {
                    ref: J,
                    setSaveModalOpen: k,
                    type: e,
                    kind: t,
                    queryParams: j,
                  }),
                  (0, m.jsxs)("div", {
                    className:
                      "my-[0.4rem] flex w-full flex-col items-center md:my-[40px]",
                    children: [
                      (0, m.jsx)("h2", {
                        className:
                          "mb-[0.4rem] text-center text-[0.4rem] font-extrabold leading-[0.45rem] text-[var(--text-tertiary)] md:mb-[30px] md:text-[50px] md:leading-[58px]",
                        children: (0, m.jsx)(B.rU, {
                          href: "/platform-supports",
                          prefetch: !1,
                          children: X("support"),
                        }),
                      }),
                      (0, m.jsx)("div", {
                        className: "flex justify-evenly gap-1 md:gap-32",
                        children: v.Q1.map((A) => {
                          let e = (0, E.D_)(V, A.link);
                          return (0, m.jsxs)(
                            B.rU,
                            {
                              href: e,
                              prefetch: !1,
                              title: A.label,
                              className:
                                "user-select-none flex w-[0.9rem] flex-col items-center text-center text-[0.2rem] text-[var(--text-tertiary)] hover:text-[--text-focus] md:w-[100px] md:text-[16px]",
                              children: [
                                (0, m.jsx)(N.default, {
                                  src: A.icon,
                                  alt: A.label,
                                  width: 80,
                                  height: 80,
                                  unoptimized: !0,
                                  className:
                                    "mb-[0.1rem] block h-[0.7rem] w-[0.7rem] bg-transparent md:mb-[10px] md:h-[80px] md:w-[80px]",
                                }),
                                X(A.label),
                              ],
                            },
                            A.label,
                          );
                        }),
                      }),
                    ],
                  }),
                  Z
                    ? null
                    : (0, m.jsx)(M.dW, {
                        adId: "/23067704912/vidssave.com/vidssave.com-320x50-011201",
                        divId: "div-gpt-ad-1768213660815995-0",
                        width: 320,
                        height: 50,
                      }),
                  (0, m.jsxs)("div", {
                    className:
                      "flex w-full flex-col items-center bg-gradient-to-b from-[#C9FAE9] to-[#C1EAF9] py-[0.4rem] md:pb-[70px] md:pt-[60px]",
                    children: [
                      (0, m.jsx)("h2", {
                        className: "text-[0.4rem] font-bold md:text-[50px]",
                        children: X("advantage"),
                      }),
                      (0, m.jsx)("div", {
                        className:
                          "flex flex-col md:mt-[40px] md:w-[1310px] md:flex-row md:flex-wrap md:gap-7",
                        children: z.map((A) =>
                          (0, m.jsxs)(
                            "div",
                            {
                              className:
                                "mt-[0.3rem] flex h-[3.8rem] w-[6.7rem] flex-col items-center rounded-[0.2rem] bg-white pt-[0.3rem] md:h-[300px] md:w-[410px] md:items-start md:rounded-[20px] md:pl-[20px] md:pt-[20px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)] md:rtl:pr-[20px]",
                              children: [
                                (0, m.jsx)(N.default, {
                                  src: A.icon,
                                  width: 96,
                                  height: 96,
                                  alt: "fast",
                                  unoptimized: !0,
                                  className:
                                    "h-[0.96rem] w-[0.96rem] md:h-[80px] md:w-[80px]",
                                }),
                                (0, m.jsx)("div", {
                                  className:
                                    "mt-[0.3rem] text-wrap text-[0.34rem] font-bold leading-[0.4rem] text-[var(--text-primary)FF] md:mt-[20px] md:text-[24px] md:leading-[28px]",
                                  children: A.title,
                                }),
                                (0, m.jsx)("div", {
                                  className:
                                    "mt-[0.2rem] px-[0.62rem] text-center text-[0.28rem] text-[var(--text-brand)FF] md:mt-[15px] md:px-0 md:pr-[23px] md:text-left md:text-[16px] md:leading-[30px]",
                                  children: A.exp,
                                }),
                              ],
                            },
                            A.exp,
                          ),
                        ),
                      }),
                    ],
                  }),
                  Z
                    ? null
                    : (0, m.jsx)(M.Me, {
                        adId: "/23067704912/vidssave.com/vidssave.com-300x250-011201",
                        divId: "div-gpt-ad-1768203530337770-0",
                        width: 300,
                        height: 250,
                      }),
                  (0, m.jsx)("h2", {
                    className:
                      "my-[0.4rem] text-[0.4rem] font-bold md:mb-[40px] md:mt-[60px] md:text-[50px]",
                    children: X("stepTitle"),
                  }),
                  (0, m.jsx)("div", {
                    className:
                      "flex flex-col md:w-[1310px] md:flex-row md:flex-wrap md:gap-4 md:pb-[60px]",
                    children: O.map((A, e) =>
                      4 === e && D
                        ? (0, m.jsxs)(
                            "div",
                            {
                              className:
                                "flex h-[310px] w-[1286px] flex-row overflow-hidden rounded-[20px] bg-white shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                              children: [
                                (0, m.jsxs)("div", {
                                  className: "flex h-full flex-col pt-[75px]",
                                  children: [
                                    (0, m.jsxs)("div", {
                                      className:
                                        "text-center text-[0.3rem] font-bold text-[var(--text-primary)] md:text-[24px]",
                                      children: [
                                        (0, m.jsxs)("span", {
                                          className: "text-[#FF6B00FF]",
                                          children: [
                                            X("stepword"),
                                            " ",
                                            e + 1,
                                            " ",
                                          ],
                                        }),
                                        ": ",
                                        X("step.".concat(e, ".title")),
                                      ],
                                    }),
                                    (0, m.jsx)("div", {
                                      className:
                                        "mt-[0.2rem] px-[0.33rem] text-center text-[0.24rem] text-[var(--text-brand)] md:mt-[8px] md:px-[30px] md:text-[16px] md:leading-[26px]",
                                      children: X(
                                        "step.".concat(e, ".description"),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, m.jsx)(N.default, {
                                  src: A.img,
                                  width: 635,
                                  height: 325,
                                  alt: X("step.".concat(e, ".title")),
                                  unoptimized: !0,
                                  className: "h-[310px] w-[651px] md:mt-auto",
                                }),
                              ],
                            },
                            e,
                          )
                        : (0, m.jsxs)(
                            "div",
                            {
                              className:
                                "mb-[0.4rem] flex w-[6.35rem] flex-col rounded-[0.2rem] bg-white pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:mb-0 md:h-[525px] md:w-[635px] md:rounded-[20px] md:pt-[23px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                              children: [
                                (0, m.jsxs)("div", {
                                  className:
                                    "text-center text-[0.3rem] font-bold text-[var(--text-primary)FF] md:text-[24px]",
                                  children: [
                                    (0, m.jsxs)("span", {
                                      className: "text-[#FF6B00FF]",
                                      children: [
                                        X("stepword"),
                                        " ",
                                        e + 1,
                                        " ",
                                      ],
                                    }),
                                    ": ",
                                    X("step.".concat(e, ".title")),
                                  ],
                                }),
                                (0, m.jsx)("div", {
                                  className:
                                    "mt-[0.2rem] px-[0.33rem] text-center text-[0.24rem] text-[var(--text-brand)FF] md:mt-[8px] md:px-[44px] md:text-[16px]",
                                  children: X(
                                    "step.".concat(e, ".description"),
                                  ),
                                }),
                                (0, m.jsx)(N.default, {
                                  src: A.img,
                                  width: 635,
                                  height: 325,
                                  alt: X("step.".concat(e, ".title")),
                                  unoptimized: !0,
                                  className:
                                    "mt-[0.4rem] h-[3.25rem] w-full md:mt-auto md:h-[325px]",
                                }),
                              ],
                            },
                            X("step.".concat(e, ".title")),
                          ),
                    ),
                  }),
                  ["", "yt"].includes(t)
                    ? (0, m.jsxs)("div", {
                        className:
                          "flex w-full flex-col items-center bg-gradient-to-b from-[#4ED8C7FF] to-[#24B1FFFF] py-[0.4rem] md:py-[60px]",
                        children: [
                          (0, m.jsx)("h2", {
                            className:
                              "w-[5rem] text-center text-[0.4rem] font-extrabold text-white md:w-full md:text-[50px]",
                            children: X("howTitle"),
                          }),
                          (0, m.jsx)(N.default, {
                            src: w.Z.src,
                            width: 670,
                            height: 100,
                            alt: "Fastest Way",
                            unoptimized: !0,
                            className:
                              "mt-[0.4rem] h-[1rem] w-[6.7rem] md:mt-[40px] md:h-[117px] md:w-[782px]",
                          }),
                          (0, m.jsxs)("div", {
                            className:
                              "mt-[0.3rem] flex w-full items-center md:flex-col",
                            children: [
                              (0, m.jsx)(N.default, {
                                src: b.Z.src,
                                width: 708,
                                height: 33,
                                alt: "progress",
                                className:
                                  "mt-[30px] hidden h-[44px] w-[944px] md:block",
                                unoptimized: !0,
                              }),
                              (0, m.jsx)(N.default, {
                                src: p.Z.src,
                                width: 44,
                                height: 444,
                                alt: "progress",
                                className:
                                  "mb-[0 rem] mx-[0.13rem] h-[4.44rem] w-[0.44rem] md:hidden",
                                unoptimized: !0,
                              }),
                              (0, m.jsxs)("div", {
                                className:
                                  "flex w-[6.4rem] flex-col md:mt-[30px] md:w-fit md:flex-row md:items-center",
                                children: [
                                  (0, m.jsxs)("div", {
                                    className:
                                      "mb-[0.30rem] min-h-[1.7rem] w-full rounded-[0.2rem] bg-[#E3F7FBFF] pl-[0.3rem] pr-[0.12rem] pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.12)] md:mb-0 md:h-[210px] md:min-h-[210px] md:w-[410px] md:rounded-[20px] md:pl-[20px] md:pr-0 md:pt-[30px] md:rtl:pr-[20px]",
                                    children: [
                                      (0, m.jsxs)("div", {
                                        className:
                                          "mb-[0.1rem] text-[0.24rem] font-bold text-[var(--text-primary)FF] md:mb-[20px] md:text-[24px]",
                                        children: [
                                          (0, m.jsxs)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: [X("stepword"), " 1"],
                                          }),
                                          ": ",
                                          X("how.0.title"),
                                        ],
                                      }),
                                      (0, m.jsx)("div", {
                                        className:
                                          "text-[0.24rem] md:text-[16px]",
                                        children: X("how.0.description"),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsx)(N.default, {
                                    src: f.Z.src,
                                    alt: "step",
                                    width: 27,
                                    height: 27,
                                    className:
                                      "mx-[15px] hidden h-[36px] w-[36px] md:block",
                                    unoptimized: !0,
                                  }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "mb-[0.30rem] min-h-[1.7rem] w-full rounded-[0.2rem] bg-[#E3F7FBFF] pl-[0.3rem] pr-[0.12rem] pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.12)] md:mb-0 md:h-[210px] md:min-h-[210px] md:w-[410px] md:rounded-[20px] md:pl-[20px] md:pr-0 md:pt-[30px] md:rtl:pr-[20px]",
                                    children: [
                                      (0, m.jsxs)("div", {
                                        className:
                                          "mb-[0.1rem] text-[0.24rem] font-bold text-[var(--text-primary)FF] md:mb-[20px] md:text-[24px]",
                                        children: [
                                          (0, m.jsxs)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: [X("stepword"), " 2"],
                                          }),
                                          ": ",
                                          X("add"),
                                          "\xa0",
                                          (0, m.jsx)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: "“vids”",
                                          }),
                                          " ",
                                          X("how.1.title"),
                                        ],
                                      }),
                                      (0, m.jsx)("div", {
                                        className:
                                          "text-[0.24rem] md:text-[16px]",
                                        children: X("how.1.description"),
                                      }),
                                    ],
                                  }),
                                  D &&
                                    (0, m.jsx)(N.default, {
                                      src: f.Z.src,
                                      alt: "step",
                                      width: 27,
                                      height: 27,
                                      className: "mx-[15px] h-[27px] w-[27px]",
                                      unoptimized: !0,
                                    }),
                                  (0, m.jsxs)("div", {
                                    className:
                                      "mb-[0rem] min-h-[1.7rem] w-full rounded-[0.2rem] bg-[#E3F7FBFF] pl-[0.3rem] pr-[0.12rem] pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.12)] md:mb-0 md:h-[210px] md:min-h-[210px] md:w-[410px] md:rounded-[20px] md:pl-[20px] md:pr-0 md:pt-[30px] md:rtl:pr-[20px]",
                                    children: [
                                      (0, m.jsxs)("div", {
                                        className:
                                          "mb-[0.1rem] text-[0.24rem] font-bold text-[var(--text-primary)FF] md:mb-[20px] md:text-[24px]",
                                        children: [
                                          (0, m.jsxs)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: [X("stepword"), " 3"],
                                          }),
                                          ": ",
                                          X("how.2.title"),
                                        ],
                                      }),
                                      (0, m.jsx)("div", {
                                        className:
                                          "text-[0.24rem] md:text-[16px]",
                                        children: X("how.2.description"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              (0, m.jsx)(S.default, { show: I }),
              (0, m.jsx)(U.default, { open: I }),
            ],
          })
        );
      }
    },
    910: function (A, e) {
      e.Z = {
        src: "/_next/static/media/earth.520cb344.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXf9OiM3Z2W3sPJ7uTX8+Xs+PPs+ere8+jk+u7j9uqJ2eK66dgtudEBqZDK79i97MtWyqEArCczwmdOx7GR2+hKx5EArmkApMZNym2O28t9+Br8AAAACHRSTlP+////////s0BBX/EAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicFcpHEsAgDACxJRhsU9Lr/z+aQWehhjummEut4gaxxGsXyKUd9xYS+Xz69IYE0vq6zIz8TSOrkROmP0wSAh4MaP/bAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9630: function (A, e) {
      e.Z = {
        src: "/_next/static/media/fast.18ac9208.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXd8+gIsW0+xme97Mzk+e7m9+rx+vPf9ejc8+fr+/FZy6Rmzda46OfM798Ys6G16Naa4bfT8eGG26V01YVNx7DT8OgAp5ig4OM1vdRCtZktAAAAAXRSTlOzEo46UAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVxUkSgCAQBLAGZukBFHf9/0stcgkgpEdgrvtRAnQbNZ8Gv9uachFQ25O2ILR/VzUS0V9fnAKE+vwHTC4CJme2x18AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9285: function (A, e) {
      e.Z = {
        src: "/_next/static/media/fuiiy.b50f9e91.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXe8+ic4M/A7NG+6unl9+zs+fCy59/h9efa8ubk+u4JrcqX4acLsnQSsqB+17dHw9YFsz5fz4Vqzto8xWsAsDex6L8atqPO7+hpdmydAAAACXRSTlOz/////////v4o92ZbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nBXLSRIAIQgEsAYbAXX27f8/nTL3ABm0SCDdqhgT/p3vOJRgbaJ3N7C0qns3eNmWcT1EOmUlZwub/QdGeQH1bMkMagAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9135: function (A, e) {
      e.Z = {
        src: "/_next/static/media/multi.4d62fe72.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEXe8+iZ4Lu/7M6059/f9enl9urt+vbZ8ufc8+bm+e/A6uVkzNB+2ZcAph1fzY6e3+cpuXbI7eQGrb9Rxs2s5NpGxo4LtkR21Mlw03uu5rvU8t+bGl20AAAACXRSTlOz/////////rMgmlt2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nBXLRxLAIAwEsDXYhqWl1/8/NBPdBdCU7hnUmKQFR9Ja5n471OpynM2hZdtlBINN6zX6Q9CiBnmJvxuZP08BAkoXqc4HAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9336: function (A, e) {
      e.Z = {
        src: "/_next/static/media/no.fd0026a5.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXe8+gIrJ3m9u3C6+rh9evk9ugNrtTe9Ojk+u/r+PBmzdCL2sqv57sMtTiA2LdJynS86OoAqluh4rBhzqYFrWQpwFBTypTK8NfQ8OiD2LZKiBStAAAAA3RSTlOz//70T6b+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nCXLRw6AMAwEwDXYWTuF0Mv/P4oQ15EGcEaoA867PBcdNibZWx1gc5LtWOOTfLYaoGZZOgmnlUn/FkHHC1RGAj0g97HsAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    8908: function (A, e) {
      e.Z = {
        src: "/_next/static/media/pregress.993e5b40.png",
        height: 888,
        width: 88,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAACVBMVEX////p+ff///8RMdk3AAAAA3RSTlMOehlBU9BoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgAANGBkYwzQQAACIABSC2fZgAAAAASUVORK5CYII=",
        blurWidth: 1,
        blurHeight: 8,
      };
    },
    1187: function (A, e) {
      e.Z = {
        src: "/_next/static/media/s1.b3b547c6.png",
        height: 650,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEXm9fn0+/3h7eTs9O7q8+wDn6DUAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGAEAwYGFiYwYGBgYGZmYWEGMaBSAAN1ADDtpS1AAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    2418: function (A, e) {
      e.Z = {
        src: "/_next/static/media/s2.e5a3abe7.png",
        height: 650,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEXm9vzu+fHx+fzz+v3m9O39/P+65M7c7OCR5a2m6MLT+MSbAAAAA3RSTlP8//6PiWwDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXJsREAMAgDsbcNJNl/4RyVCkFiu02dknQfrJqB7DUfBrYAXW5nX44AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    6718: function (A, e) {
      e.Z = {
        src: "/_next/static/media/s3.f6a3d64d.png",
        height: 610,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEXm9frt9/v0+Pzo8erw+//q9/HB7tH5+/7M8t/m7ebU8u+r2sOsvOKTAAAAAnRSTlP9/o2EjdMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAmSURBVHicFcGJEQAgCASxhePV/vt1TMAiotvJmpM5BVpJdcG/tgcKXwCLDyPDZQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9426: function (A, e) {
      e.Z = {
        src: "/_next/static/media/s4.0f62b407.png",
        height: 610,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEXp9vzz+v36/f32/PTi9+ro49725s59XDrlAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJwdybENACAAw7CkLfx/MhJeDaoJ2CSteE+6DfzJAwQxADwRMp/hAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9718: function (A, e) {
      e.Z = {
        src: "/_next/static/media/s5.4f5580fe.png",
        height: 620,
        width: 1302,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEXy+v7r+Png8v7j+uj//fvF7OzN7v2+7sq98M7zIS2cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nBXGuREAIBDEMHvvgf4rZlAkZnaTBFUUqKo+t/kHeAYRAEYYn4Y2AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    720: function (A, e) {
      e.Z = {
        src: "/_next/static/media/supports.1380535d.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXe8+jU8eLr+e+p4+bn9+mL28SL2eHf8+jj+e7g9ekluMkDrYaC2aQJsl9214686t2x59BnzNeX3sx51bQZtaAmvmKU4KiJ3J5GPDrcAAAACnRSTlOz////////s//+Fc9gXgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVy0kSgDAMAzCnJMXuxg7//ynTs0ZYqZREgK64LBFaSu39EzyXuz6D8Hyc0cakHNFegW7bbpxNkogfTYQCK+H0W44AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5853: function (A, e) {
      e.Z = {
        src: "/_next/static/media/use.16cb38ad.png",
        height: 234,
        width: 1564,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEXK5O3r7fHb5vTi6fNvMv9GAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA5JREFUeJxjYAQBJiYGAAAxAApJEOquAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    8694: function (A, e) {
      e.Z = {
        src: "/_next/static/media/progress.f983e5a9.png",
        height: 88,
        width: 1888,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEX////7+/vk+fZQzMXMAAAAA3RSTlMKH6t7vzX2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYGBkYmRgYAAAAB0ABRyOgNQAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    5714: function (A, e) {
      e.Z = {
        src: "/_next/static/media/step.c2664dbd.png",
        height: 72,
        width: 72,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXH////////////////////////////////liRbkAAAACXRSTlMAh2IcaghSOjOh0Ir8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nGNgYGBlgAImdhiDkQ0iyMTIyMIMZTByQBgQAQYWqBIGCBcAC18AUYQyxe8AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
]);
