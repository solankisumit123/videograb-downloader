(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7004],
  {
    7722: function (e, A, t) {
      Promise.resolve().then(t.bind(t, 7695));
    },
    7695: function (e, A, t) {
      "use strict";
      t.d(A, {
        default: function () {
          return T;
        },
      });
      var a = t(4336),
        i = t(3329),
        s = t(1210),
        r = t(4165),
        d = t(4228),
        m = t(1946),
        l = t(910),
        p = t(9630),
        n = t(9285),
        x = t(9135),
        c = t(9336),
        o = t(8908),
        h = t(1187),
        g = t(2418),
        u = t(6718),
        b = t(9426),
        w = t(9718),
        f = t(720),
        E = t(5853),
        v = t(8694),
        B = t(5714),
        C = t(7414),
        F = t(6964),
        U = t(2990),
        R = t(5798),
        N = t(6777),
        M = t(7797),
        S = t(4271);
      let j = {
        support: "Plataformas compatibles",
        advantage: "Por que elegir esta version",
        stepTitle: "Como descargar en 5 pasos",
        howTitle: "Atajo rapido con 'vids'",
        stepWord: "Paso",
        addWord: "Agrega",
        platformLabelByKey: {
          facebook: "Facebook",
          ins: "Instagram",
          yt: "YouTube",
          tiktok: "TikTok",
          pin: "Pinterest",
        },
        adva: [
          {
            title: "Descarga estable",
            description:
              "Procesa enlaces publicos rapido y entrega opciones listas para guardar en tu dispositivo.",
          },
          {
            title: "Sin registro",
            description:
              "No necesitas crear cuenta. Solo pega la URL y continua con la descarga.",
          },
          {
            title: "Compatibilidad amplia",
            description:
              "Funciona para YouTube, Facebook, Instagram, TikTok, Pinterest y otras rutas compatibles.",
          },
          {
            title: "Formatos utiles",
            description:
              "Selecciona la opcion disponible segun tu objetivo: video, audio o calidad especifica.",
          },
          {
            title: "Disponible globalmente",
            description:
              "Interfaz sencilla para usuarios de distintas regiones y dispositivos.",
          },
          {
            title: "Flujo seguro",
            description:
              "Solo se analiza el enlace de entrada. No te pedimos iniciar sesion en plataformas externas.",
          },
        ],
        step: [
          {
            title: "Encuentra el video",
            description:
              "Abre la plataforma y localiza el contenido que quieres guardar.",
          },
          {
            title: "Copia el enlace",
            description:
              "Usa el boton compartir y copia la URL completa del recurso.",
          },
          {
            title: "Pega el enlace",
            description:
              "Vuelve a esta pagina y pega la URL en el campo principal.",
          },
          {
            title: "Analiza opciones",
            description:
              "Espera unos segundos para ver formatos y calidades disponibles.",
          },
          {
            title: "Guarda en tu dispositivo",
            description:
              "Elige una opcion de descarga y guarda el archivo localmente.",
          },
        ],
        how: [
          {
            title: "Copia la URL del video",
            description:
              "Abre YouTube y copia el enlace del video que quieres descargar.",
          },
          {
            title: "antes de la URL de YouTube",
            description:
              "En la barra del navegador, agrega 'vids' justo antes de la URL de YouTube.",
          },
          {
            title: "Pulsa Enter y descarga",
            description:
              "Seras redirigido de inmediato para elegir formato y guardar el archivo.",
          },
        ],
      };
      function T(e) {
        let { type: A = "home", kind: t = "", queryParams: T = {} } = e,
          X = (0, N.useLocale)(),
          z = [
            {
              icon: p.Z.src,
              title: j.adva[0].title,
              exp: j.adva[0].description,
            },
            {
              icon: n.Z.src,
              title: j.adva[1].title,
              exp: j.adva[1].description,
            },
            {
              icon: f.Z.src,
              title: j.adva[2].title,
              exp: j.adva[2].description,
            },
            {
              icon: x.Z.src,
              title: j.adva[3].title,
              exp: j.adva[3].description,
            },
            {
              icon: l.Z.src,
              title: j.adva[4].title,
              exp: j.adva[4].description,
            },
            {
              icon: c.Z.src,
              title: j.adva[5].title,
              exp: j.adva[5].description,
            },
          ],
          V = [
            { img: h.Z.src },
            { img: g.Z.src },
            { img: u.Z.src },
            { img: b.Z.src },
            { img: w.Z.src },
          ],
          [k, y] = (0, S.useState)(!1),
          [L, Z] = (0, S.useState)(!1),
          [O, D] = (0, S.useState)(!1),
          G = (0, S.useRef)(null);
        return (
          (0, S.useEffect)(() => {
            (y("pc" === (0, R.l7)()), (0, i._)("home"));
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [
                  (0, a.jsx)(s.default, {
                    ref: G,
                    setSaveModalOpen: Z,
                    type: A,
                    kind: t,
                    queryParams: T,
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "my-[0.4rem] flex w-full flex-col items-center md:my-[40px]",
                    children: [
                      (0, a.jsx)("h2", {
                        className:
                          "mb-[0.4rem] text-center text-[0.4rem] font-extrabold leading-[0.45rem] text-[var(--text-tertiary)] md:mb-[30px] md:text-[50px] md:leading-[58px]",
                        children: (0, a.jsx)(F.rU, {
                          href: "/platform-supports",
                          prefetch: !1,
                          children: j.support,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex justify-evenly gap-1 md:gap-32",
                        children: U.Q1.map((e) => {
                          let A = (0, C.D_)(X, e.link),
                            t = j.platformLabelByKey[e.key] || e.label;
                          return (0, a.jsxs)(
                            F.rU,
                            {
                              href: A,
                              prefetch: !1,
                              title: t,
                              className:
                                "user-select-none flex w-[0.9rem] flex-col items-center text-center text-[0.2rem] text-[var(--text-tertiary)] hover:text-[--text-focus] md:w-[100px] md:text-[16px]",
                              children: [
                                (0, a.jsx)(M.default, {
                                  src: e.icon,
                                  alt: t,
                                  width: 80,
                                  height: 80,
                                  unoptimized: !0,
                                  className:
                                    "mb-[0.1rem] h-[0.7rem] w-[0.7rem] bg-transparent md:mb-[10px] md:h-[80px] md:w-[80px]",
                                }),
                                t,
                              ],
                            },
                            e.label,
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(d.dW, {
                    adId: "/23067704912/vidssave.com/vidssave.com-320x50-011201",
                    divId: "div-gpt-ad-1768213660815995-0",
                    width: 320,
                    height: 50,
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full flex-col items-center bg-gradient-to-b from-[#C9FAE9] to-[#C1EAF9] py-[0.4rem] md:pb-[70px] md:pt-[60px]",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-[0.4rem] font-bold md:text-[50px]",
                        children: j.advantage,
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex flex-col md:mt-[40px] md:w-[1310px] md:flex-row md:flex-wrap md:gap-7",
                        children: z.map((e) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "mt-[0.3rem] flex h-[3.8rem] w-[6.7rem] flex-col items-center rounded-[0.2rem] bg-white pt-[0.3rem] md:h-[300px] md:w-[410px] md:items-start md:rounded-[20px] md:pl-[20px] md:pt-[20px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)] md:rtl:pr-[20px]",
                              children: [
                                (0, a.jsx)(M.default, {
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
                                    "mt-[0.3rem] text-wrap text-[0.34rem] font-bold leading-[0.4rem] text-[var(--text-primary)FF] md:mt-[20px] md:text-[24px] md:leading-[28px]",
                                  children: e.title,
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "mt-[0.2rem] px-[0.62rem] text-center text-[0.28rem] text-[var(--text-brand)FF] md:mt-[15px] md:px-0 md:pr-[23px] md:text-left md:text-[16px] md:leading-[30px]",
                                  children: e.exp,
                                }),
                              ],
                            },
                            e.exp,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsx)(d.Me, {
                    adId: "/23067704912/vidssave.com/vidssave.com-300x250-011201",
                    divId: "div-gpt-ad-1768203530337770-0",
                    width: 300,
                    height: 250,
                  }),
                  (0, a.jsx)("h2", {
                    className:
                      "my-[0.4rem] text-[0.4rem] font-bold md:mb-[40px] md:mt-[60px] md:text-[50px]",
                    children: j.stepTitle,
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex flex-col md:w-[1310px] md:flex-row md:flex-wrap md:gap-4 md:pb-[60px]",
                    children: V.map((e, A) =>
                      4 === A && k
                        ? (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "flex h-[310px] w-[1286px] flex-row overflow-hidden rounded-[20px] bg-white shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex h-full flex-col pt-[75px]",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "text-center text-[0.3rem] font-bold text-[var(--text-primary)] md:text-[24px]",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className: "text-[#FF6B00FF]",
                                          children: [
                                            j.stepWord,
                                            " ",
                                            A + 1,
                                            " ",
                                          ],
                                        }),
                                        ": ",
                                        j.step[A].title,
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "mt-[0.2rem] px-[0.33rem] text-center text-[0.24rem] text-[var(--text-brand)] md:mt-[8px] md:px-[30px] md:text-[16px] md:leading-[26px]",
                                      children: j.step[A].description,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(M.default, {
                                  src: e.img,
                                  width: 635,
                                  height: 325,
                                  alt: j.step[A].title,
                                  unoptimized: !0,
                                  className: "h-[310px] w-[651px] md:mt-auto",
                                }),
                              ],
                            },
                            A,
                          )
                        : (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "mb-[0.4rem] flex w-[6.35rem] flex-col rounded-[0.2rem] bg-white pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:mb-0 md:h-[525px] md:w-[635px] md:rounded-[20px] md:pt-[23px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "text-center text-[0.3rem] font-bold text-[var(--text-primary)FF] md:text-[24px]",
                                  children: [
                                    (0, a.jsxs)("span", {
                                      className: "text-[#FF6B00FF]",
                                      children: [j.stepWord, " ", A + 1, " "],
                                    }),
                                    ": ",
                                    j.step[A].title,
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "mt-[0.2rem] px-[0.33rem] text-center text-[0.24rem] text-[var(--text-brand)FF] md:mt-[8px] md:px-[44px] md:text-[16px]",
                                  children: j.step[A].description,
                                }),
                                (0, a.jsx)(M.default, {
                                  src: e.img,
                                  width: 635,
                                  height: 325,
                                  alt: j.step[A].title,
                                  unoptimized: !0,
                                  className:
                                    "mt-[0.4rem] h-[3.25rem] w-full md:mt-auto md:h-[325px]",
                                }),
                              ],
                            },
                            j.step[A].title,
                          ),
                    ),
                  }),
                  ["", "yt"].includes(t)
                    ? (0, a.jsxs)("div", {
                        className:
                          "flex w-full flex-col items-center bg-gradient-to-b from-[#4ED8C7FF] to-[#24B1FFFF] py-[0.4rem] md:py-[60px]",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "w-[5rem] text-center text-[0.4rem] font-extrabold text-white md:w-full md:text-[50px]",
                            children: j.howTitle,
                          }),
                          (0, a.jsx)(M.default, {
                            src: E.Z.src,
                            width: 670,
                            height: 100,
                            alt: "Fastest Way",
                            unoptimized: !0,
                            className:
                              "mt-[0.4rem] h-[1rem] w-[6.7rem] md:mt-[40px] md:h-[117px] md:w-[782px]",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "mt-[0.3rem] flex w-full items-center md:flex-col",
                            children: [
                              (0, a.jsx)(M.default, {
                                src: v.Z.src,
                                width: 708,
                                height: 33,
                                alt: "progress",
                                className:
                                  "mt-[30px] hidden h-[44px] w-[944px] md:block",
                                unoptimized: !0,
                              }),
                              (0, a.jsx)(M.default, {
                                src: o.Z.src,
                                width: 44,
                                height: 444,
                                alt: "progress",
                                className:
                                  "mb-[0 rem] mx-[0.13rem] h-[4.44rem] w-[0.44rem] md:hidden",
                                unoptimized: !0,
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex w-[6.4rem] flex-col md:mt-[30px] md:w-fit md:flex-row md:items-center",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "mb-[0.30rem] min-h-[1.7rem] w-full rounded-[0.2rem] bg-[#E3F7FBFF] pl-[0.3rem] pr-[0.12rem] pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.12)] md:mb-0 md:h-[210px] md:min-h-[210px] md:w-[410px] md:rounded-[20px] md:pl-[20px] md:pr-0 md:pt-[30px] md:rtl:pr-[20px]",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "mb-[0.1rem] text-[0.24rem] font-bold text-[var(--text-primary)FF] md:mb-[20px] md:text-[24px]",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: [j.stepWord, " 1"],
                                          }),
                                          ": ",
                                          j.how[0].title,
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-[0.24rem] md:text-[16px]",
                                        children: j.how[0].description,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(M.default, {
                                    src: B.Z.src,
                                    alt: "step",
                                    width: 27,
                                    height: 27,
                                    className:
                                      "mx-[15px] hidden h-[36px] w-[36px] md:block",
                                    unoptimized: !0,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "mb-[0.30rem] min-h-[1.7rem] w-full rounded-[0.2rem] bg-[#E3F7FBFF] pl-[0.3rem] pr-[0.12rem] pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.12)] md:mb-0 md:h-[210px] md:min-h-[210px] md:w-[410px] md:rounded-[20px] md:pl-[20px] md:pr-0 md:pt-[30px] md:rtl:pr-[20px]",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "mb-[0.1rem] text-[0.24rem] font-bold text-[var(--text-primary)FF] md:mb-[20px] md:text-[24px]",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: [j.stepWord, " 2"],
                                          }),
                                          ": ",
                                          j.addWord,
                                          "\xa0",
                                          (0, a.jsx)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: '"vids"',
                                          }),
                                          " ",
                                          j.how[1].title,
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-[0.24rem] md:text-[16px]",
                                        children: j.how[1].description,
                                      }),
                                    ],
                                  }),
                                  k &&
                                    (0, a.jsx)(M.default, {
                                      src: B.Z.src,
                                      alt: "step",
                                      width: 27,
                                      height: 27,
                                      className: "mx-[15px] h-[27px] w-[27px]",
                                      unoptimized: !0,
                                    }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "mb-[0rem] min-h-[1.7rem] w-full rounded-[0.2rem] bg-[#E3F7FBFF] pl-[0.3rem] pr-[0.12rem] pt-[0.3rem] shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.12)] md:mb-0 md:h-[210px] md:min-h-[210px] md:w-[410px] md:rounded-[20px] md:pl-[20px] md:pr-0 md:pt-[30px] md:rtl:pr-[20px]",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "mb-[0.1rem] text-[0.24rem] font-bold text-[var(--text-primary)FF] md:mb-[20px] md:text-[24px]",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            className: "text-[#FF6B00FF]",
                                            children: [j.stepWord, " 3"],
                                          }),
                                          ": ",
                                          j.how[2].title,
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-[0.24rem] md:text-[16px]",
                                        children: j.how[2].description,
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
              (0, a.jsx)(m.default, { show: O }),
              (0, a.jsx)(r.default, { open: O }),
            ],
          })
        );
      }
    },
    910: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/earth.520cb344.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXf9OiM3Z2W3sPJ7uTX8+Xs+PPs+ere8+jk+u7j9uqJ2eK66dgtudEBqZDK79i97MtWyqEArCczwmdOx7GR2+hKx5EArmkApMZNym2O28t9+Br8AAAACHRSTlP+////////s0BBX/EAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicFcpHEsAgDACxJRhsU9Lr/z+aQWehhjummEut4gaxxGsXyKUd9xYS+Xz69IYE0vq6zIz8TSOrkROmP0wSAh4MaP/bAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9630: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/fast.18ac9208.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXd8+gIsW0+xme97Mzk+e7m9+rx+vPf9ejc8+fr+/FZy6Rmzda46OfM798Ys6G16Naa4bfT8eGG26V01YVNx7DT8OgAp5ig4OM1vdRCtZktAAAAAXRSTlOzEo46UAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVxUkSgCAQBLAGZukBFHf9/0stcgkgpEdgrvtRAnQbNZ8Gv9uachFQ25O2ILR/VzUS0V9fnAKE+vwHTC4CJme2x18AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9285: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/fuiiy.b50f9e91.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXe8+ic4M/A7NG+6unl9+zs+fCy59/h9efa8ubk+u4JrcqX4acLsnQSsqB+17dHw9YFsz5fz4Vqzto8xWsAsDex6L8atqPO7+hpdmydAAAACXRSTlOz/////////v4o92ZbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nBXLSRIAIQgEsAYbAXX27f8/nTL3ABm0SCDdqhgT/p3vOJRgbaJ3N7C0qns3eNmWcT1EOmUlZwub/QdGeQH1bMkMagAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9135: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/multi.4d62fe72.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEXe8+iZ4Lu/7M6059/f9enl9urt+vbZ8ufc8+bm+e/A6uVkzNB+2ZcAph1fzY6e3+cpuXbI7eQGrb9Rxs2s5NpGxo4LtkR21Mlw03uu5rvU8t+bGl20AAAACXRSTlOz/////////rMgmlt2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nBXLRxLAIAwEsDXYhqWl1/8/NBPdBdCU7hnUmKQFR9Ja5n471OpynM2hZdtlBINN6zX6Q9CiBnmJvxuZP08BAkoXqc4HAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    9336: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/no.fd0026a5.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXe8+gIrJ3m9u3C6+rh9evk9ugNrtTe9Ojk+u/r+PBmzdCL2sqv57sMtTiA2LdJynS86OoAqluh4rBhzqYFrWQpwFBTypTK8NfQ8OiD2LZKiBStAAAAA3RSTlOz//70T6b+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nCXLRw6AMAwEwDXYWTuF0Mv/P4oQ15EGcEaoA867PBcdNibZWx1gc5LtWOOTfLYaoGZZOgmnlUn/FkHHC1RGAj0g97HsAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    8908: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/pregress.993e5b40.png",
        height: 888,
        width: 88,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAACVBMVEX////p+ff///8RMdk3AAAAA3RSTlMOehlBU9BoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgAANGBkYwzQQAACIABSC2fZgAAAAASUVORK5CYII=",
        blurWidth: 1,
        blurHeight: 8,
      };
    },
    1187: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/s1.b3b547c6.png",
        height: 650,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEXm9fn0+/3h7eTs9O7q8+wDn6DUAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGAEAwYGFiYwYGBgYGZmYWEGMaBSAAN1ADDtpS1AAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    2418: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/s2.e5a3abe7.png",
        height: 650,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEXm9vzu+fHx+fzz+v3m9O39/P+65M7c7OCR5a2m6MLT+MSbAAAAA3RSTlP8//6PiWwDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXJsREAMAgDsbcNJNl/4RyVCkFiu02dknQfrJqB7DUfBrYAXW5nX44AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    6718: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/s3.f6a3d64d.png",
        height: 610,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEXm9frt9/v0+Pzo8erw+//q9/HB7tH5+/7M8t/m7ebU8u+r2sOsvOKTAAAAAnRSTlP9/o2EjdMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAmSURBVHicFcGJEQAgCASxhePV/vt1TMAiotvJmpM5BVpJdcG/tgcKXwCLDyPDZQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9426: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/s4.0f62b407.png",
        height: 610,
        width: 1270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEXp9vzz+v36/f32/PTi9+ro49725s59XDrlAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJwdybENACAAw7CkLfx/MhJeDaoJ2CSteE+6DfzJAwQxADwRMp/hAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    9718: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/s5.4f5580fe.png",
        height: 620,
        width: 1302,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEXy+v7r+Png8v7j+uj//fvF7OzN7v2+7sq98M7zIS2cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nBXGuREAIBDEMHvvgf4rZlAkZnaTBFUUqKo+t/kHeAYRAEYYn4Y2AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    720: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/supports.1380535d.png",
        height: 192,
        width: 192,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXe8+jU8eLr+e+p4+bn9+mL28SL2eHf8+jj+e7g9ekluMkDrYaC2aQJsl9214686t2x59BnzNeX3sx51bQZtaAmvmKU4KiJ3J5GPDrcAAAACnRSTlOz////////s//+Fc9gXgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVy0kSgDAMAzCnJMXuxg7//ynTs0ZYqZREgK64LBFaSu39EzyXuz6D8Hyc0cakHNFegW7bbpxNkogfTYQCK+H0W44AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    5853: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/use.16cb38ad.png",
        height: 234,
        width: 1564,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEXK5O3r7fHb5vTi6fNvMv9GAAAAAXRSTlP9g+pWxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA5JREFUeJxjYAQBJiYGAAAxAApJEOquAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    8694: function (e, A) {
      "use strict";
      A.Z = {
        src: "/_next/static/media/progress.f983e5a9.png",
        height: 88,
        width: 1888,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEX////7+/vk+fZQzMXMAAAAA3RSTlMKH6t7vzX2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYGBkYmRgYAAAAB0ABRyOgNQAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    5714: function (e, A) {
      "use strict";
      A.Z = {
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
  function (e) {
    (e.O(
      0,
      [
        5496, 7279, 2346, 9144, 9857, 2661, 8828, 3477, 6092, 9374, 1210, 2800,
        4722, 1744,
      ],
      function () {
        return e((e.s = 7722));
      },
    ),
      (_N_E = e.O()));
  },
]);
