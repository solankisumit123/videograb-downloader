"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8250],
  {
    8250: function (e, t, a) {
      a.d(t, {
        j: function () {
          return eT;
        },
        default: function () {
          return eH;
        },
      });
      var r,
        l,
        i,
        s,
        d,
        o,
        n = a(4336),
        m = a(6146),
        c = a(6964),
        u = a(7444),
        x = a(3179),
        p = a(6777);
      let A = {
        title: "Download Guide",
        description:
          "Learn how to download Instagram photos in full HD with clean links, working steps, and better quality checks.",
      };
      function h(e) {
        var t, a, r;
        let { className: l, title: i, descriptionClassName: s } = e,
          d = (0, p.useMessages)(),
          o =
            null !== (t = null == d ? void 0 : d.InstagramDownloadGuideLinks) &&
            void 0 !== t
              ? t
              : {},
          m =
            null !== (a = null != i ? i : o.title) && void 0 !== a
              ? a
              : A.title,
          h = null !== (r = o.description) && void 0 !== r ? r : A.description;
        return (0, n.jsxs)("section", {
          className: (0, x.Z)(
            "mx-auto w-[6.7rem] pb-[0.2rem] md:w-[983px] md:pb-[20px]",
            l,
          ),
          children: [
            (0, n.jsx)("h2", {
              className:
                "mb-[0.2rem] text-center text-[0.36rem] font-extrabold text-[#2D3436FF] md:mb-[18px] md:text-[36px]",
              children: m,
            }),
            (0, n.jsx)("p", {
              className: (0, x.Z)(
                "mx-auto mb-[0.28rem] text-center text-[0.24rem] leading-[0.36rem] text-[#6F7779] md:mb-[24px] md:max-w-[760px] md:text-[16px] md:leading-[28px]",
                s,
              ),
              children: h,
            }),
            (0, n.jsx)("div", {
              className:
                "flex flex-wrap items-center justify-center gap-[0.18rem] md:gap-[12px]",
              children: u.dV.map((e) =>
                (0, n.jsx)(
                  c.rU,
                  {
                    href: e.path,
                    prefetch: !1,
                    className:
                      "rounded-full border border-[#F7B6D8] bg-white px-[0.24rem] py-[0.14rem] text-center text-[0.22rem] font-semibold leading-[0.32rem] text-[#C82E8A] transition-colors hover:border-[#FD495D] hover:text-[#9B1D66] md:px-[18px] md:py-[10px] md:text-[14px] md:leading-[20px]",
                    children: (0, u.zq)(d, e),
                  },
                  e.slug,
                ),
              ),
            }),
          ],
        });
      }
      var g = a(6522),
        f = a(7546),
        w = a(7797),
        b = a(4271),
        v = a(1929),
        _ = a(281),
        y = a(4308),
        j = a(1175);
      function k(e) {
        let {
            inputValue: t,
            setInputValue: a,
            onSearch: r,
            onEmptyInput: l,
            onClear: i,
            placeholder: s,
            loading: o = !1,
          } = e,
          m = (0, p.useTranslations)("DownloadPanel"),
          c = (0, p.useLocale)(),
          u = (0, b.useRef)(null),
          x = (e) => {
            if (!e.trim()) return null;
            if (!A(e)) return d.PROFILE;
            let t = new URL(
              e.replace(/^(?!https?:\/\/)/, "https://"),
            ).pathname.toLowerCase();
            return /^\/reels?\/[\w-]+\/?$/.test(t)
              ? d.REELS
              : /^\/stories\/[\w.-]+\/\d+\/?$/.test(t) ||
                  /^\/stories\/highlights\/[\w-]+\/?$/.test(t)
                ? d.STORY
                : /^\/p\/[\w-]+\/?$/.test(t)
                  ? d.CAROUSEL
                  : /^\/[\w.-]+\/?$/.test(t)
                    ? d.PROFILE
                    : null;
          },
          A = (e) =>
            [
              /^(https?:\/\/)?(www\.)?instagram\.com\/.+/i,
              /^(https?:\/\/)?(www\.)?instagr\.am\/.+/i,
            ].some((t) => t.test(e)),
          h = (e) => {
            if (!e.trim()) {
              (null == l || l(), l || j.A.error(m("enter_url")));
              return;
            }
            let t = x(e);
            r(e, t);
          },
          g = (e) => {
            h(e);
          };
        return (0, n.jsxs)("div", {
          className:
            "relative mx-auto flex h-[1.12rem] w-[7.3rem] items-center justify-center rounded-[0.08rem] bg-white py-[0.02rem] pl-[0.02rem] shadow-[0px_3px_3px_0px_rgba(33,33,33,0.2)] md:h-[90px] md:w-[1120px] md:rounded-[8px] md:py-[15px] md:pl-[15px] rtl:pl-0 rtl:pr-[0.02rem] md:rtl:pr-[15px]",
          children: [
            "" === t
              ? (0, n.jsx)(w.default, {
                  className: "h-[0.36rem] w-[0.36rem] md:h-[38px] md:w-[38px]",
                  src: _.Z,
                  alt: "world icon",
                  unoptimized: !0,
                })
              : (0, n.jsx)(y.Z, {
                  className:
                    "h-[0.36rem] w-[0.36rem] cursor-pointer md:h-[38px] md:w-[38px]",
                  onClick: () => {
                    (a(""), null == i || i());
                  },
                }),
            (0, n.jsx)("input", {
              ref: u,
              placeholder: s || m("paste_tips"),
              value: t,
              onChange: (e) => a(e.target.value),
              onKeyDown: (e) => {
                "Enter" === e.key && (e.preventDefault(), g(t));
              },
              onPaste: (e) => {
                e.preventDefault();
                let t = e.clipboardData.getData("text");
                if (t) {
                  let e = t.trim();
                  (a(e), h(e));
                }
              },
              spellCheck: "false",
              disabled: o,
              className:
                "min-h-[0.88rem] w-[3.9rem] px-[0.1rem] text-[18px] leading-[0.88rem] text-[rgba(0,0,0,0.6)] outline-none md:min-h-[38px] md:w-[830px] md:px-[15px] md:text-[23px] md:leading-[38px]",
            }),
            (0, n.jsxs)("button", {
              onClick: () => g(t),
              disabled: o,
              className:
                "flex h-[0.88rem] w-[2.78rem] cursor-pointer items-center justify-center rounded-[0.08rem] bg-[#743CF3] px-[0.1rem] "
                  .concat(
                    ["de", "ja", "ms"].includes(c)
                      ? "text-[0.28rem]"
                      : "text-[0.34rem]",
                    " font-bold text-white md:h-[75px] md:w-[218px] md:rounded-[8px] md:px-[15px] ",
                  )
                  .concat(
                    ["ja"].includes(c) ? "md:text-[20px]" : "md:text-[22px]",
                    " ",
                  )
                  .concat(o ? "opacity-70 cursor-not-allowed" : ""),
              children: [
                (0, n.jsx)(w.default, {
                  className:
                    "mr-[0.2rem] h-[0.53rem] w-[0.53rem] md:mr-[14px] md:h-[50px] md:w-[50px] rtl:ml-[0.2rem] rtl:mr-0 md:rtl:ml-[14px]",
                  src: v.Z,
                  alt: "download icon",
                  unoptimized: !0,
                }),
                (0, n.jsx)("span", {
                  children: o ? m("loading") : m("download"),
                }),
              ],
            }),
          ],
        });
      }
      function N() {
        return (
          (0, p.useTranslations)("DownloadPanel"),
          (0, n.jsx)("div", {
            className:
              "mx-auto mb-[-0.42rem] mt-[0.26rem] flex w-full flex-col items-center md:mb-[-60px] md:mt-[40px]",
            children: (0, n.jsx)("div", {
              className:
                "relative h-[0.16rem] w-[5.2rem] overflow-hidden rounded-full border-2 border-white bg-white md:h-[20px] md:w-[634px]",
              children: (0, n.jsx)("div", {
                className:
                  "absolute left-0 top-0 h-full animate-charging rounded-full bg-[#743CF3]",
              }),
            }),
          })
        );
      }
      (((r = s || (s = {}))[(r.Idle = 0)] = "Idle"),
        (r[(r.Loading = 1)] = "Loading"),
        (r[(r.Failed = 2)] = "Failed"),
        (r[(r.Success = 3)] = "Success"),
        ((l = d || (d = {})).VIDEO = "video"),
        (l.PHOTO = "photo"),
        (l.REELS = "reels"),
        (l.STORY = "story"),
        (l.CAROUSEL = "carousel"),
        (l.PROFILE = "profile"),
        (l.DEFAULT = "default"));
      let S = [
        {
          id: d.VIDEO,
          icon: {
            src: "/_next/static/media/icon-video.79611b8c.webp",
            height: 80,
            width: 80,
            blurDataURL:
              "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDwAAAABYFNbW5vvYICNg4De9t8Rgv45CmKhj4ksioeIIJu0MWvpITC1Z9COrXc0JmiAuPt2OflfNYkCxOtkOQJWUDggSgAAABACAJ0BKggACAACQDglqAJ0Bivu+7ifGqAA/vSAoxFRpI5swQWDSPT2q0r66t7meCvXvW7Tsxf/loHcUl/eZL3+w3j+JuwMAAAA",
            blurWidth: 8,
            blurHeight: 8,
          },
          labelKey: "video",
          link: "/ins/video",
        },
        {
          id: d.REELS,
          icon: {
            src: "/_next/static/media/icon-reels.6b65a38f.webp",
            height: 80,
            width: 80,
            blurDataURL:
              "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABYBrbVpzvaASL/w0xX1HN05SAhiS/g+y7SzFrDREhJEikO4Ssu1kSvVLeVMCtCZ6Bc++W8QSYbvyTaLypfEYEVlA4IE4AAADQAQCdASoIAAgAAkA4JbACdAEPDAbSOAD+7y8uleZQyyYOnFclsaGXBb/cz868BVc3vTdYd8//+Sv8RoLP6vt63v+w4Ek/8t+1Wyd4gAA=",
            blurWidth: 8,
            blurHeight: 8,
          },
          labelKey: "reels",
          link: "/ins/reels",
        },
        {
          id: d.PHOTO,
          icon: {
            src: "/_next/static/media/icon-photo.68dfadab.webp",
            height: 80,
            width: 80,
            blurDataURL:
              "data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAABYFNbe5MvTULmvmb/ZTByEEBG9qbin3ESPdjoeIgIsQnBKocgl8eM2vbHVpkAZYmZzOS6l+08xpd+ngfif/IbAQBWUDggTgAAAPABAJ0BKggACAACQDglqAJ0AQ7MPP7WQAD+9KtMsEhu+Z+CE/4WWqNmL/tv6uah7f8EGrhI6h4nudX/yVKLiyjP/vMl7/Ybx/E3YGAAAA==",
            blurWidth: 8,
            blurHeight: 8,
          },
          labelKey: "photo",
          link: "/ins/photo",
        },
        {
          id: d.STORY,
          icon: {
            src: "/_next/static/media/icon-story.2b1a3635.webp",
            height: 80,
            width: 80,
            blurDataURL:
              "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAArJ5BQAQAAQnQsPJemAQF1EhgAAJZSSHwAyasPPJIhXwDKwRZRghFcNCkCEsomABq+s6PRSQAAAAAfKwQAAABWUDggUAAAABACAJ0BKggACAACQDglsAJ0BivGTQKZSYAA/vDrV0txn+iKjXMCziKC8o0N5YxwLKzTfE+RsVu5Wt/5NDYa2L/Ko43X91DR995OKKGkAAAA",
            blurWidth: 8,
            blurHeight: 8,
          },
          labelKey: "story",
          link: "/ins/story",
        },
        {
          id: d.CAROUSEL,
          icon: {
            src: "/_next/static/media/icon-carousel.69ff6db8.webp",
            height: 80,
            width: 80,
            blurDataURL:
              "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABR6AmkhQ2+eRggpoWIiLQ+1MaBzW1deCqjvMVMGlg14JZAx3+Cojof3A7laY8LA52B7uHRWkKtxMAVlA4IEwAAAAwAgCdASoIAAgAAkA4JagCdAYp52wpIuEJMAD+9Dq8m/8664+6IxKI0yNQA0c/LFdX/brnlvNFADhv/jeV4o7/Zgnf7d+PQmfIAAAA",
            blurWidth: 8,
            blurHeight: 8,
          },
          labelKey: "carousel",
          link: "/ins/carousel",
        },
        {
          id: d.PROFILE,
          icon: {
            src: "/_next/static/media/icon-profile.a0da6a25.webp",
            height: 80,
            width: 80,
            blurDataURL:
              "data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAA5hog+AAAAgrNmZqyOADizM83KPahFhUpZkYdmPpKHSAWfpwg8kz2xtrWyvKpKAI/LQ0HDnAAAAEiVl08AAABWUDggQgAAAHABAJ0BKggACAACQDglqAJ0AYhAAP7uR8H+ZGKOqeSaC1IPSoHPKqv4iXceVVv/ziYAhX/wI+P/QODdixN2VQAAAA==",
            blurWidth: 8,
            blurHeight: 8,
          },
          labelKey: "profile",
          link: "/ins/profile",
        },
      ];
      function C(e) {
        let { activeTab: t, className: a } = e,
          r = (0, p.useTranslations)("Product.ins.ins_tabs"),
          l = (0, p.useTranslations)("Product.ins"),
          i = (0, c.tv)(),
          s = (e, a) => {
            (t === e.id && (i.push("/ins"), a.preventDefault()),
              window.sendLog("tab_click", { tab_name: e.labelKey }));
          };
        return (0, n.jsx)("nav", {
          className: (0, x.Z)(
            "mx-auto mb-[0.6rem] flex w-fit max-w-full items-center justify-center gap-[0.1rem] overflow-x-auto rounded-full bg-white/20 p-[0.08rem] backdrop-blur-md md:mb-[30px] md:gap-[10px] md:p-[8px] no-scrollbar",
            a,
          ),
          children: S.map((e) => {
            let a = t === e.id;
            return (0, n.jsxs)(
              c.rU,
              {
                href: e.link,
                prefetch: !1,
                title: l("".concat(e.id, ".pageH1")),
                onClick: (t) => s(e, t),
                className: (0, x.Z)(
                  "flex items-center gap-[0.08rem] whitespace-nowrap rounded-full px-[0.32rem] py-[0.16rem] transition-all duration-200 md:h-[50px] md:gap-[8px] font-medium md:px-[24px] text-[0px] md:text-base",
                  a
                    ? "bg-white text-[#743CF3] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                    : "text-white hover:bg-white/10 brightness-[4]",
                ),
                children: [
                  (0, n.jsx)(w.default, {
                    src: e.icon,
                    alt: r(e.labelKey),
                    className:
                      "-me-[0.1rem] h-[0.4rem] w-[0.4rem] md:h-[20px] md:w-[20px]",
                    width: 20,
                    height: 20,
                    unoptimized: !0,
                  }),
                  r(e.labelKey),
                ],
              },
              e.id,
            );
          }),
        });
      }
      function D(e) {
        let {
            referer: t = "ins_page",
            className: a,
            style: r,
            inputValue: l,
            setInputValue: i,
            onSearch: o,
            status: m,
            errorMsg: c,
            activeTab: u = null,
            onReset: A,
          } = e,
          h = (0, p.useTranslations)("DownloadPanel"),
          v = u || "default",
          _ = (0, p.useTranslations)("Product.ins.".concat(v)),
          y = (0, b.useRef)(null);
        return (0, n.jsxs)("div", {
          className: (0, x.Z)(
            "panel relative w-full pb-[0.8rem] pt-[0.5rem] md:pb-[120px] md:pt-[57px]",
            a,
          ),
          style: r,
          children: [
            (0, n.jsx)(C, { activeTab: u, onChange: A }),
            (0, n.jsx)("div", {
              className: "mb-[0.36rem] select-none md:mb-[40px]",
              children: (0, n.jsxs)("div", {
                className: "relative mx-auto w-fit md:max-w-[1440px]",
                children: [
                  (0, n.jsx)("h1", {
                    className:
                      "w-full text-center text-[0.42rem] font-bold text-[--text-anti-primary] md:mb-[5px] md:text-[50px]",
                    children: _("pageH1"),
                  }),
                  (0, n.jsx)("h2", {
                    className:
                      "w-full text-center text-[0.24rem] text-[--text-anti-secondary] md:text-[24px]",
                    children: _("subtitle"),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(k, {
              inputValue: l,
              setInputValue: i,
              onSearch: o,
              onEmptyInput: () => {
                var e;
                (null == A || A(),
                  null === (e = y.current) || void 0 === e || e.showAlert());
              },
              onClear: () => {
                var e;
                (null == A || A(),
                  null === (e = y.current) || void 0 === e || e.hideAlert());
              },
              loading: m === s.Loading,
              placeholder: (() => {
                try {
                  return h("paste_tips_instagram");
                } catch (e) {
                  return h("paste_tips");
                }
              })(),
            }),
            (0, n.jsx)(g.Z, {
              ref: y,
              kind: "ins",
              onLinkClick: (e) => {
                var t;
                (i(e),
                  o(e, d.VIDEO),
                  null === (t = y.current) || void 0 === t || t.hideAlert());
              },
            }),
            m === s.Loading
              ? (0, n.jsx)(N, {})
              : m === s.Failed
                ? (0, n.jsxs)("div", {
                    className:
                      "mx-auto mt-[0.1rem] text-center md:mt-[15px] md:w-[1120px]",
                    children: [
                      (0, n.jsx)(w.default, {
                        className:
                          "mx-auto h-[0.8rem] w-[0.8rem] md:h-[117px] md:w-[117px]",
                        src: f.Z,
                        alt: "download error icon",
                        unoptimized: !0,
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "text-[0.3rem] text-[#CBFFF3] md:text-[16px]",
                        children: [
                          h("get_resource_failed"),
                          c && (0, n.jsxs)("span", { children: [": ", c] }),
                        ],
                      }),
                    ],
                  })
                : null,
          ],
        });
      }
      var R = {
          src: "/_next/static/media/empty-img-1.bbc36141.webp",
          height: 410,
          width: 440,
          blurDataURL:
            "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAAACgAABgAAAACcEwAhAAAUDPXlPwYAAABB2v9CAAAAAALJuwcAAAAAD35KNgAAAAIgKiMYAgAAVlA4IEwAAAAQAgCdASoIAAcAAkA4JZwCxC8AFcXYJCgAAP70xBfuXgtsXdbjX3su0mNR3rCkHZgH31t44miVa5+PJdz3thPBHVl6q4IakvQxKAAA",
          blurWidth: 8,
          blurHeight: 7,
        },
        L = {
          src: "/_next/static/media/empty-img-2.a308d2c1.webp",
          height: 410,
          width: 440,
          blurDataURL:
            "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAA868wQAAAAZv////ovAAAo0Padhw4Aanf2/3skcwBVi4P/4XPzGGyVp///d7xQR1Z+2dY8bV8AVlA4IFoAAADQAQCdASoIAAcAAkA4JagCdADdb21CiAD+0rF3jz8XLu0wH+pEGnNJkTn4Z15Uhsjt4cqUf55eTNsu84TUnxtAdoh9ss4E+/GWUfjGQ94Hz542YASB2S6fgAA=",
          blurWidth: 8,
          blurHeight: 7,
        },
        E = a(4228),
        I = a(8710),
        U = a(6845),
        Q = a(3834);
      let F = (0, Q.Z)("Music", [
          ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
          ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
          ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
        ]),
        T = (0, Q.Z)("Video", [
          [
            "path",
            {
              d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
              key: "ftymec",
            },
          ],
          [
            "rect",
            {
              x: "2",
              y: "6",
              width: "14",
              height: "12",
              rx: "2",
              key: "158x01",
            },
          ],
        ]),
        B = (0, Q.Z)("Image", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
        ]);
      var H = a(8559);
      let P = async function (e) {
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          let { reqUrl: t, bodyStr: a } = (0, H.Ar)({
              data: { origin: "source", link: e },
              path: "media/parse",
            }),
            r = await fetch(t, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: a,
            });
          if (!r.ok) throw Error("Network response was not ok");
          return r.json();
        },
        Z = async (e) => {
          let { reqUrl: t, bodyStr: a } = (0, H.Ar)({
            path: "media/download",
            data: { request: e, no_encrypt: 1 },
          });
          return (
            await fetch(t, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: a,
            })
          ).json();
        },
        G = async (e) => {
          let { reqUrl: t, bodyStr: a } = (0, H.Ar)({
            path: "media/blogger_parse",
            data: { link: e },
          });
          return (
            await fetch(t, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: a,
            })
          ).json();
        },
        O = async (e) => {
          let { site_name: t, uid: a, cursor: r, type: l } = e,
            { reqUrl: i, bodyStr: s } = (0, H.Ar)({
              path: "media/posts_parse",
              data: {
                site_name: t,
                uid: a,
                cursor: r || "",
                type: l || "posts",
              },
            });
          return (
            await fetch(i, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: s,
            })
          ).json();
        },
        J = (e, t) => {
          let a = document.createElement("a");
          ((a.href = e),
            (a.target = "_blank"),
            (a.rel = "noreferrer"),
            t && (a.download = t),
            document.body.appendChild(a),
            a.click(),
            document.body.removeChild(a));
        };
      var W = a(4775),
        q = a.n(W),
        V = a(3368),
        z = a(995),
        M = a(4411);
      let Y = (e) => {
        let [t, a] = (0, b.useState)(!1);
        return (
          (0, b.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = () => {
                let e = t.querySelector("span");
                if (e) {
                  let r = t.getBoundingClientRect();
                  a(e.getBoundingClientRect().height > r.height);
                }
              },
              l = new ResizeObserver(r);
            return (l.observe(t), r(), () => l.disconnect());
          }, [e]),
          t
        );
      };
      function X(e) {
        let { title: t } = e,
          [a, r] = (0, b.useState)(!1),
          l = (0, b.useRef)(null),
          i = Y(l);
        if (!t) return null;
        let s = t.split(/((?:#|@)[\w._]+)/g);
        return (0, n.jsxs)("div", {
          className: "relative",
          children: [
            (0, n.jsx)("div", {
              ref: l,
              className:
                "relative leading-relaxed text-[0.32rem] md:text-[16px] ".concat(
                  a ? "" : "line-clamp-2",
                ),
              children: (0, n.jsx)("span", {
                className: "text-[0.32rem] text-[#434343] md:text-[16px]",
                children: s.map((e, t) =>
                  e.match(/^(?:#|@)[\w._]+$/)
                    ? (0, n.jsx)(
                        "span",
                        { style: { color: "#EC1187" }, children: e },
                        t,
                      )
                    : e,
                ),
              }),
            }),
            (i || a) &&
              (0, n.jsx)("button", {
                onClick: () => r(!a),
                className:
                  "block text-[14px] font-bold text-[#743CF3] hover:underline md:mt-1",
                children: a ? "Less" : "More",
              }),
          ],
        });
      }
      function K(e) {
        let { data: t, className: a, metaClassName: r } = e,
          l = t.like_count,
          i = t.comment_count,
          s = "";
        if (t.publish_ts) {
          let e = q()().diff(q().unix(t.publish_ts), "hour"),
            a = q()().diff(q().unix(t.publish_ts), "day"),
            r = q()().diff(q().unix(t.publish_ts), "week"),
            l = q()().diff(q().unix(t.publish_ts), "month");
          l > 0
            ? (s += "".concat(l, " months ago"))
            : r > 0
              ? (s += "".concat(r, " weeks ago"))
              : a > 0
                ? (s += "".concat(a, " days ago"))
                : e > 0 && (s += "".concat(e, " hours ago"));
        }
        return (0, n.jsxs)("div", {
          className: a,
          children: [
            (0, n.jsx)(X, { title: t.title }),
            (0, n.jsxs)("div", {
              className: (0, x.Z)(
                "text-[14px] text-[#2D3436] mt-[0.2rem] flex flex-col items-start gap-[0.2rem] md:mt-[16px] md:flex-row md:items-center md:gap-3",
                r,
              ),
              children: [
                s &&
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-[0.1rem] md:gap-2",
                    children: [
                      (0, n.jsx)(V.Z, {
                        className: "h-[0.4rem] w-[0.4rem] md:h-4 md:w-4",
                      }),
                      (0, n.jsx)("span", { children: s }),
                    ],
                  }),
                void 0 !== l &&
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-[0.1rem] md:gap-2",
                    children: [
                      (0, n.jsx)(z.Z, {
                        className: "h-[0.4rem] w-[0.4rem] md:h-4 md:w-4",
                      }),
                      (0, n.jsxs)("span", {
                        children: [l.toLocaleString(), " likes"],
                      }),
                    ],
                  }),
                void 0 !== i &&
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-[0.1rem] md:gap-2",
                    children: [
                      (0, n.jsx)(M.Z, {
                        className: "h-[0.4rem] w-[0.4rem] md:h-4 md:w-4",
                      }),
                      (0, n.jsxs)("span", {
                        children: [i.toLocaleString(), " comments"],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var $ = a(2861),
        ee = a(7106),
        et = a(5401);
      function ea(e) {
        var t;
        let { initialIndex: a, items: r, onClose: l, t: i } = e,
          [s, d] = (0, b.useState)(a),
          [o, m] = (0, b.useState)(!0),
          c = r[s],
          u = (0, b.useContext)(eT),
          p = (null == u ? void 0 : u.keyWords) || "",
          A = (null == u ? void 0 : u.searchType) || "url";
        (0, b.useEffect)(() => {
          m(!0);
        }, [s]);
        let h = null === (t = c.resources) || void 0 === t ? void 0 : t[0];
        null == h || h.download_url;
        let g =
            (null == h ? void 0 : h.preview_url) ||
            (null == h ? void 0 : h.download_url),
          f = "video" === c.type,
          v = async (e) => {
            if (
              (e.stopPropagation(),
              (0, E.RL)(),
              null == h ? void 0 : h.download_url)
            )
              (J(h.download_url),
                window.sendLog("task_add", {
                  key_words: p,
                  download_type: "download",
                  quality: h.quality || "origin",
                  f_type: f ? "video" : "image",
                  search_type: A,
                  click_pos: "lightbox_preview",
                  platform: "ins",
                }),
                window.sendLog("task_download_succ", {
                  key_words: p,
                  download_type: "download",
                  quality: h.quality || "",
                  f_type: f ? "video" : "image",
                  tm: 0,
                  search_type: A,
                  download_url: h.download_url || "",
                  platform: "ins",
                }));
            else if (null == h ? void 0 : h.resource_content)
              try {
                var t;
                let e = await Z(h.resource_content);
                1 === e.status &&
                (null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.download_link)
                  ? (J(e.data.download_link),
                    window.sendLog("task_add", {
                      key_words: p,
                      download_type: "download",
                      quality: h.quality || "",
                      f_type: f ? "video" : "audio",
                      search_type: A,
                      click_pos: "lightbox_preview",
                      platform: "ins",
                    }))
                  : j.A.error(i("get_resource_failed"));
              } catch (e) {
                j.A.error(i("get_resource_failed"));
              }
          };
        return (
          (0, b.useEffect)(() => {
            let e = (e) => {
              ("Escape" === e.key && l(),
                "ArrowRight" === e.key && s < r.length - 1 && d((e) => e + 1),
                "ArrowLeft" === e.key && s > 0 && d((e) => e - 1));
            };
            return (
              window.addEventListener("keydown", e),
              (document.body.style.overflow = "hidden"),
              () => {
                (window.removeEventListener("keydown", e),
                  (document.body.style.overflow = "auto"));
              }
            );
          }, [s, r.length, l]),
          (0, n.jsxs)("div", {
            className:
              "animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm duration-200",
            onClick: l,
            children: [
              (0, n.jsx)("button", {
                onClick: l,
                className:
                  "absolute right-[0.32rem] top-[0.32rem] z-[110] rounded-full p-[0.16rem] text-white/70 transition-colors hover:bg-white/10 hover:text-white md:right-4 md:top-4 md:p-2",
                children: (0, n.jsx)(y.Z, {
                  className: "h-[0.64rem] w-[0.64rem] md:h-8 md:w-8",
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "relative flex h-full w-full max-w-5xl items-center justify-center p-[1rem] md:p-10",
                onClick: (e) => e.stopPropagation(),
                children: [
                  r.length > 1 &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("button", {
                          onClick: (e) => {
                            (e.stopPropagation(), s > 0 && d(s - 1));
                          },
                          disabled: 0 === s,
                          className:
                            "absolute left-[0.1rem] top-1/2 z-[110] -translate-y-1/2 rounded-full p-[0.04rem] text-white bg-[#CACACA] transition-all disabled:opacity-30 md:-left-4 md:p-3 ".concat(
                              0 === s ? "cursor-not-allowed" : "cursor-pointer",
                            ),
                          children: (0, n.jsx)($.Z, {
                            className:
                              "h-[0.64rem] w-[0.64rem] text-[#333333] md:h-8 md:w-8",
                          }),
                        }),
                        (0, n.jsx)("button", {
                          onClick: (e) => {
                            (e.stopPropagation(), s < r.length - 1 && d(s + 1));
                          },
                          disabled: s === r.length - 1,
                          className:
                            "absolute right-[0.1rem] top-1/2 z-[110] -translate-y-1/2 rounded-full p-[0.04rem] text-white bg-[#CACACA] transition-all disabled:opacity-30 md:-right-4 md:p-3 ".concat(
                              s === r.length - 1
                                ? "cursor-not-allowed"
                                : "cursor-pointer",
                            ),
                          children: (0, n.jsx)(ee.Z, {
                            className:
                              "h-[0.64rem] w-[0.64rem] text-[#333333] md:h-8 md:w-8",
                          }),
                        }),
                      ],
                    }),
                  (0, n.jsxs)("div", {
                    className:
                      "relative flex max-h-full max-w-full items-center justify-center overflow-hidden rounded-[0.32rem] md:rounded-[16px]",
                    children: [
                      f
                        ? (0, n.jsx)("video", {
                            src: g,
                            poster: g,
                            controls: !0,
                            autoPlay: !0,
                            className: (0, x.Z)(
                              "max-h-[85vh] w-full max-w-[90vw] object-contain",
                              o && "invisible",
                            ),
                            onLoadStart: () => m(!0),
                            onCanPlay: (e) => e.target.play(),
                            onPlay: () => m(!1),
                          })
                        : (0, n.jsx)(w.default, {
                            src: g,
                            alt: "preview",
                            className: (0, x.Z)(
                              "max-h-[85vh] w-full max-w-[90vw] bg-[#F2F2F2] object-contain",
                              o && "invisible",
                            ),
                            width: 903,
                            height: 1128,
                            unoptimized: !0,
                            onLoadStart: () => m(!0),
                            onLoad: () => m(!1),
                          }),
                      o &&
                        (0, n.jsx)("div", {
                          className:
                            "absolute inset-0 z-10 flex items-center justify-center",
                          children: (0, n.jsx)("div", {
                            className:
                              "h-[1.5rem] w-[1.5rem] animate-spin rounded-full border-4 border-white/30 border-t-white md:h-[80px] md:w-[80px]",
                          }),
                        }),
                      (0, n.jsx)("button", {
                        onClick: v,
                        className: (0, x.Z)(
                          "absolute right-[0.2rem] top-[0.2rem] z-[110] flex h-[0.8rem] w-[0.8rem] items-center justify-center rounded-full bg-[#743CF3] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:right-4 md:top-4 md:h-10 md:w-10",
                          o && "invisible",
                        ),
                        title: i("download"),
                        children: (0, n.jsx)(et.Z, {
                          className: "h-[0.4rem] w-[0.4rem] md:h-5 md:w-5",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function er(e) {
        var t, a;
        let { data: r } = e,
          l = (0, p.useTranslations)("DownloadPanel"),
          i = (0, p.useTranslations)("Product.ins"),
          [s, d] = (0, b.useState)(!1),
          [o, m] = (0, b.useState)(!1),
          [c, u] = (0, b.useState)(!1),
          [x, A] = (0, b.useState)(null),
          h = (0, b.useContext)(eT),
          g = (null == h ? void 0 : h.keyWords) || "",
          f = (null == h ? void 0 : h.searchType) || "url",
          w =
            (null === (a = r.media) || void 0 === a
              ? void 0
              : null === (t = a[0]) || void 0 === t
                ? void 0
                : t.resources) || [],
          v = (0, b.useMemo)(
            () =>
              w.filter((e) => {
                var t;
                return ["video", "mp4"].includes(
                  null === (t = e.format) || void 0 === t
                    ? void 0
                    : t.toLowerCase(),
                );
              }),
            [w],
          ),
          _ = (0, b.useMemo)(
            () =>
              w.filter((e) => {
                var t;
                return ["audio", "mp3"].includes(
                  null === (t = e.format) || void 0 === t
                    ? void 0
                    : t.toLowerCase(),
                );
              }),
            [w],
          ),
          y = (0, b.useMemo)(
            () =>
              w.filter((e) => {
                var t;
                return [
                  "jpg",
                  "jpeg",
                  "png",
                  "gif",
                  "webp",
                  "image",
                  "picture",
                ].includes(
                  null === (t = e.format) || void 0 === t
                    ? void 0
                    : t.toLowerCase(),
                );
              }),
            [w],
          );
        (0, b.useMemo)(() => {
          var e, t, a, l;
          return (
            (null === (a = r.media) || void 0 === a
              ? void 0
              : null === (t = a.find((e) => "video" === e.type)) || void 0 === t
                ? void 0
                : null === (e = t.resources[0]) || void 0 === e
                  ? void 0
                  : e.download_url) ||
            (null === (l = v[0]) || void 0 === l ? void 0 : l.download_url)
          );
        }, [r.media, v]);
        let k = async (e) => {
            let t =
                "audio" === e.type
                  ? "audio"
                  : "picture" === e.type
                    ? "image"
                    : "video",
              a = e.quality || "";
            if (((0, E.RL)(), e.download_url))
              (J(e.download_url),
                window.sendLog("task_add", {
                  key_words: g,
                  download_type: "download",
                  quality: a,
                  f_type: t,
                  search_type: f,
                  click_pos: "list",
                  platform: "ins",
                }));
            else if (e.resource_content)
              try {
                var r;
                let i = await Z(e.resource_content);
                1 === i.status &&
                (null === (r = i.data) || void 0 === r
                  ? void 0
                  : r.download_link)
                  ? (J(i.data.download_link),
                    window.sendLog("task_add", {
                      key_words: g,
                      download_type: "download",
                      quality: a,
                      f_type: t,
                      search_type: f,
                      click_pos: "list",
                      platform: "ins",
                    }))
                  : j.A.error(l("get_resource_failed"));
              } catch (e) {
                j.A.error(l("get_resource_failed"));
              }
          },
          N = (e, t) => {
            var a;
            let r = "MP4";
            "audio" === t ? (r = "MP3 Audio") : "image" === t && (r = "Image");
            let [i, s] =
              (null === (a = e.quality) || void 0 === a
                ? void 0
                : a.split(" - ")) || [];
            return (0, n.jsxs)(
              "div",
              {
                className:
                  "[&_.quality-label]:bg-red flex h-[1rem] items-center overflow-hidden rounded-[0.1rem] border-2 border-[#743CF3] bg-white transition-shadow hover:bg-[#E7DCFF] md:h-[56px] md:rounded-[12px] md:transition-colors md:duration-300 md:hover:shadow-md",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex h-full flex-1 items-center gap-[0.24rem] px-[0.36rem] md:gap-2 md:px-8",
                    children: [
                      (0, n.jsxs)("span", {
                        className:
                          "text-[0.32rem] font-bold text-[#434343] md:text-base",
                        children: [r, " ", i],
                      }),
                      s &&
                        (0, n.jsx)("span", {
                          className:
                            "quality-label rounded-full bg-[#743CF3]/10 px-[0.24rem] py-[0.04rem] text-[12px] text-[#743CF3] md:px-3 md:py-1",
                          children: s,
                        }),
                    ],
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => k(e),
                    className:
                      "flex h-full w-[2.6rem] items-center justify-center rounded-l-[0.1rem] bg-[#743CF3] text-[18px] font-bold text-white transition-colors hover:bg-[#5E2DD1] md:w-[180px] md:rounded-l-[8px]",
                    children: l("download"),
                  }),
                ],
              },
              e.download_url || e.resource_content,
            );
          },
          S = (0, n.jsx)(K, { data: r, className: "mt-[0.4rem] md:mt-[20px]" });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: "my-[0.6rem] text-center md:my-[30px]",
              children: (0, n.jsx)("h3", {
                className: "text-[28px] font-bold capitalize text-[#1A1A1A]",
                children: i("result_title"),
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "mx-auto w-[7rem] rounded-[0.2rem] bg-white p-[0.2rem] shadow-[0_4px_8px_rgb(0,0,0,0.08)] md:mt-[40px] md:w-full md:max-w-[980px] md:rounded-[24px] md:p-[40px]",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-[0.4rem] md:gap-10 lg:flex-row",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex-[2]",
                      children: (0, n.jsxs)("div", {
                        className:
                          "group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-[0.2rem] bg-black shadow-lg md:rounded-[20px]",
                        onClick: () => {
                          if (!r.media || 0 === r.media.length) return;
                          A(0);
                          let e =
                            "video" === r.media[0].type ? "video" : "image";
                          window.sendLog("lightbox_view", {
                            media_type: e,
                            source_page: "search_result",
                          });
                        },
                        children: [
                          r.media &&
                            r.media.length > 0 &&
                            (0, n.jsx)("div", {
                              className:
                                "absolute right-[0.2rem] top-[0.2rem] z-10 flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70 md:right-3 md:top-3 md:h-8 md:w-8",
                              children: (0, n.jsx)(I.Z, {
                                className:
                                  "h-[0.3rem] w-[0.3rem] text-white md:h-5 md:w-5",
                              }),
                            }),
                          (0, n.jsx)("img", {
                            src: r.thumbnail,
                            alt: "preview",
                            className: "h-full w-full object-contain",
                          }),
                          r.media &&
                            r.media.length > 0 &&
                            "video" === r.media[0].type &&
                            (0, n.jsx)("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20",
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex items-center justify-center rounded-full bg-black/60 p-[0.2rem] backdrop-blur-sm md:h-12 md:w-12 md:pl-1",
                                children: (0, n.jsx)(U.Z, {
                                  className:
                                    "h-[0.8rem] w-[0.8rem] fill-white text-white md:h-6 md:w-6",
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-[3] flex-col gap-8",
                      children: [
                        _.length > 0 &&
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-col gap-[0.12rem] md:gap-[16px]",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center gap-[0.1rem] text-[20px] font-bold text-[#1A1A1A] md:gap-2",
                                children: [
                                  (0, n.jsx)(F, {
                                    className:
                                      "h-[0.52rem] w-[0.52rem] text-[#743CF3] brightness-0 md:h-[24px] md:w-[24px]",
                                  }),
                                  (0, n.jsx)("h3", {
                                    children: l("audio_options"),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col gap-[0.2rem] md:gap-3",
                                children: [
                                  (o ? _ : _.slice(0, 3)).map((e) =>
                                    N(e, "audio"),
                                  ),
                                  _.length > 3 &&
                                    (0, n.jsx)("button", {
                                      onClick: () => m(!o),
                                      className:
                                        "text-center text-[0.26rem] font-medium text-[#743CF3] hover:underline md:text-[14px]",
                                      children: o
                                        ? l("show_less")
                                        : l("show_more"),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        v.length > 0 &&
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-col gap-[0.12rem] md:gap-[16px]",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center gap-[0.1rem] text-[20px] font-bold text-[#1A1A1A] md:gap-2",
                                children: [
                                  (0, n.jsx)(T, {
                                    className:
                                      "h-[0.52rem] w-[0.52rem] text-[#743CF3] brightness-0 md:h-[24px] md:w-[24px]",
                                  }),
                                  (0, n.jsx)("h3", {
                                    children: l("video_options"),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col gap-[0.2rem] md:gap-3",
                                children: [
                                  (s ? v : v.slice(0, 3)).map((e) =>
                                    N(e, "video"),
                                  ),
                                  v.length > 3 &&
                                    (0, n.jsx)("button", {
                                      onClick: () => d(!s),
                                      className:
                                        "text-center text-[0.26rem] font-medium text-[#743CF3] hover:underline md:text-[14px]",
                                      children: s
                                        ? l("show_less")
                                        : l("show_more"),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        y.length > 0 &&
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-col gap-[0.12rem] md:gap-[16px]",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center gap-[0.1rem] text-[20px] font-bold text-[#1A1A1A] md:gap-2",
                                children: [
                                  (0, n.jsx)(B, {
                                    className:
                                      "h-[0.52rem] w-[0.52rem] text-[#743CF3] brightness-0 md:h-[24px] md:w-[24px]",
                                  }),
                                  (0, n.jsx)("h3", {
                                    children: l("image_options"),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col gap-[0.2rem] md:gap-3",
                                children: [
                                  (c ? y : y.slice(0, 3)).map((e) =>
                                    N(e, "image"),
                                  ),
                                  y.length > 3 &&
                                    (0, n.jsx)("button", {
                                      onClick: () => u(!c),
                                      className:
                                        "text-center text-[0.26rem] font-medium text-[#743CF3] hover:underline md:text-[14px]",
                                      children: c
                                        ? l("show_less")
                                        : l("show_more"),
                                    }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "hidden md:block",
                  children: S,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "w-full px-[0.32rem] md:hidden",
              children: S,
            }),
            null !== x &&
              r.media &&
              r.media.length > 0 &&
              (0, n.jsx)(ea, {
                initialIndex: x,
                items: r.media,
                onClose: () => A(null),
                t: l,
              }),
          ],
        });
      }
      var el = a(3710),
        ei = a(6213),
        es = a(7568),
        ed = a(125);
      function eo(e) {
        let {
            item: t,
            t: a,
            onPreview: r,
            className: l,
            aspectRatio: i = "aspect-[4/5]",
          } = e,
          s = t.resources || [],
          d = "video" === t.type,
          o = (0, b.useContext)(eT),
          m = (null == o ? void 0 : o.keyWords) || "",
          c = (null == o ? void 0 : o.searchType) || "url",
          u = (e) =>
            e ? "".concat(e.format || "", "_").concat(e.quality || "") : "",
          [p, A] = (0, ei.Z)("ins_download_quality", {
            listenStorageChange: !0,
          }),
          h = s[0],
          g = s.find((e) => u(e) === p),
          f = g || h,
          v = s.length > 1,
          _ = (e) => {
            var t;
            if (!e) return "";
            let a =
                (null === (t = e.format) || void 0 === t
                  ? void 0
                  : t.toUpperCase()) || "FILE",
              r = e.quality
                ? "ORIGINAL" === e.quality
                  ? "HD"
                  : e.quality
                : "";
            return r ? "".concat(a, " ").concat(r) : a;
          },
          y = _(f),
          k = s[0],
          N =
            (null == k ? void 0 : k.preview_url) ||
            (null == k ? void 0 : k.download_url),
          S = (e) => {
            let t = u(e);
            t && A(t);
          },
          C = async (e, t) => {
            if ((null == t || t.stopPropagation(), (0, E.RL)(), e.download_url))
              (J(e.download_url),
                window.sendLog("task_add", {
                  key_words: m,
                  download_type: "download",
                  quality: e.quality || "",
                  f_type: d ? "video" : "image",
                  search_type: c,
                  click_pos: "list_card",
                  platform: "ins",
                }),
                window.sendLog("task_download_succ", {
                  key_words: m,
                  download_type: "download",
                  quality: e.quality || "",
                  f_type: d ? "video" : "image",
                  tm: 0,
                  search_type: c,
                  download_url: e.download_url || "",
                  platform: "ins",
                }));
            else if (e.resource_content)
              try {
                var r;
                let t = await Z(e.resource_content);
                1 === t.status &&
                (null === (r = t.data) || void 0 === r
                  ? void 0
                  : r.download_link)
                  ? (J(t.data.download_link),
                    window.sendLog("task_add", {
                      key_words: m,
                      download_type: "download",
                      quality: e.quality || "",
                      f_type: d ? "video" : "audio",
                      search_type: c,
                      click_pos: "list_card",
                      platform: "ins",
                    }))
                  : j.A.error(a("get_resource_failed"));
              } catch (e) {
                j.A.error(a("get_resource_failed"));
              }
          };
        return (0, n.jsxs)("div", {
          className: (0, x.Z)(
            "flex flex-col rounded-[0.2rem] bg-white overflow-hidden shadow-[0_3px_4px_rgba(201,201,201,0.51)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] md:rounded-[16px]",
            l,
          ),
          children: [
            (0, n.jsxs)("div", {
              className: (0, x.Z)(
                "group relative mb-[0.2rem] w-full overflow-hidden rounded-t-[0.2rem] bg-black md:mb-3 md:rounded-t-[16px] cursor-pointer",
                i,
              ),
              onClick: r,
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute right-[0.2rem] top-[0.2rem] z-10 flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70 md:right-3 md:top-3 md:h-8 md:w-8",
                  children: (0, n.jsx)(I.Z, {
                    className: "h-[0.3rem] w-[0.3rem] text-white md:h-5 md:w-5",
                  }),
                }),
                (0, n.jsx)(w.default, {
                  src: d ? t.thumbnail : N,
                  alt: d ? "video preview" : "preview",
                  width: 903,
                  height: 1128,
                  className: "h-full w-full object-cover",
                  unoptimized: !0,
                }),
                d &&
                  (0, n.jsx)("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30",
                    children: (0, n.jsx)("div", {
                      className:
                        "flex items-center justify-center rounded-full bg-black/60 p-[0.2rem] backdrop-blur-sm md:h-12 md:w-12 md:pl-1",
                      children: (0, n.jsx)(U.Z, {
                        className:
                          "h-[0.8rem] w-[0.8rem] fill-white text-white md:h-6 md:w-6",
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "relative w-full p-[0.2rem] pt-0 md:p-3",
              children:
                v && d
                  ? (0, n.jsxs)("div", {
                      className: "flex w-full",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: (e) => f && C(f, e),
                          className:
                            "flex flex-1 items-center justify-center rounded-l-[0.1rem] bg-[#743CF3] py-[0.2rem] text-[0.28rem] font-bold text-white transition-colors hover:bg-[#5E2DD1] md:rounded-l-[8px] md:py-2.5 md:text-[16px]",
                          children: (0, n.jsx)("span", {
                            children: a("download"),
                          }),
                        }),
                        (0, n.jsxs)(el.h_, {
                          children: [
                            (0, n.jsx)(el.$F, {
                              asChild: !0,
                              children:
                                g && p
                                  ? (0, n.jsxs)("button", {
                                      className:
                                        "flex w-[1.25rem] items-center justify-between rounded-r-[0.1rem] border-2 border-l-0 border-[#743CF3] bg-white text-[0.2rem] font-medium text-[#743CF3] focus-visible:outline-none md:w-[130px] md:rounded-r-[8px] md:px-3 md:py-2.5 md:text-sm",
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: "line-clamp-2 md:truncate",
                                          children: y,
                                        }),
                                        (0, n.jsx)(es.Z, {
                                          className: "md:ml-2 md:h-4 md:w-4",
                                        }),
                                      ],
                                    })
                                  : (0, n.jsx)("button", {
                                      className:
                                        "flex w-[0.8rem] items-center justify-center rounded-r-[0.1rem] border-l border-white/20 bg-[#743CF3] text-white transition-colors hover:bg-[#5E2DD1] md:w-[48px] md:rounded-r-[8px]",
                                      children: (0, n.jsx)(es.Z, {
                                        className: "md:h-4 md:w-4",
                                      }),
                                    }),
                            }),
                            (0, n.jsx)(el.AW, {
                              align: "end",
                              className:
                                "max-h-[4rem] w-full min-w-[2.5rem] overflow-y-auto rounded-[0.1rem] border border-gray-100 bg-white p-[0.1rem] shadow-xl md:max-h-[240px] md:min-w-[130px] md:rounded-[8px] md:p-1",
                              children: s.map((e, t) => {
                                let a = u(e),
                                  r = _(e);
                                return (0, n.jsxs)(
                                  el.Xi,
                                  {
                                    onClick: () => S(e),
                                    className:
                                      "flex cursor-pointer items-center justify-between rounded-sm px-[0.2rem] py-[0.2rem] text-[0.28rem] outline-none transition-colors focus:bg-gray-100 md:px-4 md:py-2.5 md:text-sm",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "font-medium text-[#434343]",
                                        children: r,
                                      }),
                                      a &&
                                        a === p &&
                                        (0, n.jsx)(ed.Z, {
                                          className:
                                            "h-[0.4rem] w-[0.4rem] text-[#743CF3] md:h-4 md:w-4",
                                        }),
                                    ],
                                  },
                                  t,
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, n.jsx)("button", {
                      onClick: (e) => h && C(h, e),
                      className:
                        "flex w-full items-center justify-center rounded-[0.1rem] bg-[#743CF3] py-[0.2rem] text-[0.28rem] font-bold text-white transition-colors hover:bg-[#5E2DD1] md:rounded-[8px] md:py-2.5 md:text-[16px]",
                      children: (0, n.jsx)("span", { children: a("download") }),
                    }),
            }),
          ],
        });
      }
      function en(e) {
        let { data: t, activeTab: a } = e,
          r = (0, p.useTranslations)("DownloadPanel"),
          l = (0, p.useTranslations)("Product.ins"),
          [i, s] = (0, b.useState)(null),
          o = t.media.filter((e) =>
            a === d.VIDEO || a === d.REELS
              ? "video" === e.type
              : a !== d.PHOTO || "picture" === e.type,
          ),
          m = (e) => {
            s(e);
            let t = "video" === o[e].type ? "video" : "image";
            window.sendLog("lightbox_view", {
              media_type: t,
              source_page: "search_result",
            });
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className:
                "mx-auto mt-[40px] w-full max-w-[1120px] px-[0.24rem] md:px-4",
              children: [
                (0, n.jsx)("div", {
                  className: "mb-[0.5rem] text-center md:mb-8",
                  children: (0, n.jsx)("h3", {
                    className:
                      "text-[28px] font-bold capitalize text-[#1A1A1A]",
                    children: l("result_title", { tab: a }),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: (0, x.Z)(
                    "grid gap-[0.2rem] md:gap-8 grid-cols-2 md:grid-cols-3",
                  ),
                  children: o.map((e, a) =>
                    (0, n.jsx)(
                      eo,
                      {
                        item: { ...e, thumbnail: t.thumbnail },
                        t: r,
                        onPreview: () => m(a),
                      },
                      e.media_id || a,
                    ),
                  ),
                }),
                0 === o.length &&
                  (0, n.jsx)("div", {
                    className: "py-20 text-center text-gray-500",
                    children: r("no_data"),
                  }),
                (0, n.jsx)(K, {
                  data: t,
                  className:
                    "mt-[0.4rem] border-t border-gray-100 md:mt-[40px]",
                }),
              ],
            }),
            null !== i &&
              (0, n.jsx)(ea, {
                initialIndex: i,
                items: t.media,
                onClose: () => s(null),
                t: r,
              }),
          ],
        });
      }
      function em(e) {
        let { items: t, selectedId: a, onSelect: r } = e,
          l = (0, b.useRef)(null);
        return ((0, b.useEffect)(() => {
          (l.current && (l.current.scrollLeft = 0), null == r || r(t[0], 0));
        }, [t]),
        t && 0 !== t.length)
          ? (0, n.jsx)("div", {
              className: "relative w-full md:mt-[-20px]",
              children: (0, n.jsx)("div", {
                ref: l,
                className:
                  "scrollbar-hide flex gap-[0.16rem] overflow-x-auto px-[0.04rem] pb-[0.16rem] pt-[0.2rem] md:gap-4 md:px-1 md:pt-[16px]",
                style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                children: t.map((e, t) => {
                  var l, i, s, d;
                  let o =
                      e.thumbnail ||
                      (null === (d = e.media) || void 0 === d
                        ? void 0
                        : null === (s = d[0]) || void 0 === s
                          ? void 0
                          : null === (i = s.resources) || void 0 === i
                            ? void 0
                            : null === (l = i[0]) || void 0 === l
                              ? void 0
                              : l.preview_url) ||
                      "/placeholder.png",
                    m = a && e.post_id === a;
                  return (0, n.jsxs)(
                    "button",
                    {
                      onClick: () => (null == r ? void 0 : r(e, t)),
                      className:
                        "flex flex-shrink-0 flex-col items-center gap-[0.08rem] md:gap-2",
                      style: { minWidth: "1.6rem" },
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "relative h-[1.44rem] w-[1.44rem] overflow-hidden rounded-full border-2 bg-gray-100 md:h-[84px] md:w-[84px] transition-transform duration-200 hover:scale-110 ".concat(
                              m ? "border-[#1A1A1A]" : "border-gray-200",
                            ),
                          children: (0, n.jsx)(w.default, {
                            src: o,
                            alt: e.title || "Highlight",
                            fill: !0,
                            className: "object-cover",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "w-[1.44rem] truncate text-center text-[0.24rem] md:w-[84px] md:text-sm ".concat(
                              m
                                ? "font-semibold text-[#1A1A1A]"
                                : "text-gray-700",
                            ),
                          title: e.title,
                          children: e.title || "Untitled",
                        }),
                      ],
                    },
                    e.post_id || t,
                  );
                }),
              }),
            })
          : null;
      }
      (((i = o || (o = {})).POSTS = "POSTS"),
        (i.STORIES = "STORIES"),
        (i.HIGHLIGHTS = "HIGHLIGHTS"),
        (i.REELS = "REELS"));
      let ec = ["POSTS", "STORIES", "HIGHLIGHTS", "REELS"],
        eu = {
          POSTS: "Posts",
          STORIES: "Stories",
          HIGHLIGHTS: "Highlights",
          REELS: "Reels",
        };
      function ex(e) {
        let { data: t } = e,
          a = (0, p.useTranslations)("DownloadPanel"),
          r = (0, p.useTranslations)("Product.ins"),
          [l, i] = (0, b.useState)("POSTS"),
          [s, d] = (0, b.useState)(null),
          [o, m] = (0, b.useState)(!1),
          [c, u] = (0, b.useState)({
            POSTS: t.post_media || [],
            STORIES: t.stories_media || [],
            HIGHLIGHTS: t.highlight_media || [],
            REELS: (t.reels_media || []).filter((e) => "video" === e.type),
          }),
          [A, h] = (0, b.useState)((t.post_media || []).slice(0, 12)),
          [g, f] = (0, b.useState)(!1),
          [v, _] = (0, b.useState)(!1),
          [y, k] = (0, b.useState)(null),
          [N, S] = (0, b.useState)([]),
          [C, D] = (0, b.useState)(!1),
          [E, U] = (0, b.useState)({
            POSTS: t.next_cursor || null,
            STORIES: null,
            HIGHLIGHTS: null,
            REELS: null,
          }),
          Q = (0, b.useContext)(eT),
          F = (null == Q ? void 0 : Q.keyWords) || "",
          [T, B] = (0, b.useState)({
            POSTS: !1,
            STORIES: !1,
            HIGHLIGHTS: !1,
            REELS: !1,
          }),
          [H, Z] = (0, b.useState)({});
        (0, b.useEffect)(() => {
          (i("POSTS"),
            h((t.post_media || []).slice(0, 12)),
            k(null),
            S([]),
            u({
              POSTS: t.post_media || [],
              STORIES: t.stories_media || [],
              HIGHLIGHTS: t.highlight_media || [],
              REELS: t.reels_media || [],
            }),
            U({
              POSTS: t.next_cursor || null,
              STORIES: null,
              HIGHLIGHTS: null,
              REELS: null,
            }));
        }, [t]);
        let G = async (e) => {
            var r, s, d, o, n, m;
            if (e === l) return;
            i(e);
            let x = e.toLowerCase(),
              p = T[e] ? 0 : 1,
              A = performance.now();
            if ("POSTS" === e) {
              let a = t.post_media || [];
              (h(a.slice(0, 12)),
                k(null),
                S([]),
                window.sendLog("tab_click", {
                  key_words: F,
                  platform: "ins",
                  tab_name: x,
                  is_first_click: p,
                  status: "succ",
                  res_cnt: a.length,
                  tm: Math.floor(performance.now() - A),
                }),
                T[e] || B((t) => ({ ...t, [e]: !0 })));
              return;
            }
            let g = c[e] || [];
            if (g.length > 0) {
              ("HIGHLIGHTS" === e
                ? (h(g),
                  g.length > 0
                    ? (k(g[0]), S(g[0].media || []))
                    : (k(null), S([])))
                : (h(g.slice(0, 12)), k(null), S([])),
                window.sendLog("tab_click", {
                  key_words: F,
                  platform: "ins",
                  tab_name: x,
                  is_first_click: p,
                  status: "succ",
                  res_cnt: g.length,
                  tm: Math.floor(performance.now() - A),
                }),
                T[e] || B((t) => ({ ...t, [e]: !0 })));
              return;
            }
            let w = null === (r = t.blogger) || void 0 === r ? void 0 : r.uid,
              b =
                null === (s = t.blogger) || void 0 === s ? void 0 : s.site_name;
            if (!w || !b) {
              (h([]),
                k(null),
                S([]),
                window.sendLog("tab_click", {
                  key_words: F,
                  platform: "ins",
                  tab_name: x,
                  is_first_click: p,
                  status: "fail",
                  error_msg: "blogger_missing_info",
                  tm: Math.floor(performance.now() - A),
                }));
              return;
            }
            f(!0);
            try {
              let t = await O({ uid: w, site_name: b, type: eu[e] });
              if (
                1 === t.status &&
                (null === (d = t.data) || void 0 === d ? void 0 : d.items)
              ) {
                let a = t.data.curosr || t.data.cursor || null,
                  r = 0;
                if ("HIGHLIGHTS" === e) {
                  let l = t.data.items;
                  ((r = l.length),
                    u((t) => ({ ...t, [e]: l })),
                    h(l),
                    k(null),
                    S([]),
                    U((t) => ({ ...t, [e]: a })),
                    window.sendLog("tab_click", {
                      key_words: F,
                      platform: "ins",
                      tab_name: x,
                      is_first_click: p,
                      status: "succ",
                      res_cnt: r,
                      tm: Math.floor(performance.now() - A),
                    }),
                    T[e] || B((t) => ({ ...t, [e]: !0 })));
                  return;
                }
                let l = t.data.items.flatMap(
                    (e) =>
                      e.media.map((t) => ({
                        ...t,
                        post_id: e.post_id || "",
                        post_link: e.post_link || "",
                        title: e.title || "",
                        thumbnail: e.thumbnail || "",
                      })) || [],
                  ),
                  i = "REELS" === e ? l.filter((e) => "video" === e.type) : l;
                if ("REELS" === e) {
                  let r = a;
                  for (; i.length < 12 && r; ) {
                    let a = await O({
                      uid: w,
                      site_name: b,
                      cursor: r,
                      type: eu[e],
                    });
                    if (
                      !(
                        1 === a.status &&
                        (null === (o = a.data) || void 0 === o
                          ? void 0
                          : o.items)
                      )
                    ) {
                      ((r =
                        (null === (n = a.data) || void 0 === n
                          ? void 0
                          : n.curosr) ||
                        (null === (m = a.data) || void 0 === m
                          ? void 0
                          : m.cursor) ||
                        null),
                        a.msg && j.A.error(a.msg));
                      break;
                    }
                    let l = t.data.items.flatMap(
                      (e) =>
                        e.media.map((t) => ({
                          ...t,
                          post_id: e.post_id || "",
                          post_link: e.post_link || "",
                          title: e.title || "",
                          thumbnail: e.thumbnail || "",
                        })) || [],
                    );
                    if (!l.length) {
                      r = null;
                      break;
                    }
                    let s = l.filter((e) => "video" === e.type);
                    if (!s.length) {
                      r = a.data.curosr || a.data.cursor || null;
                      continue;
                    }
                    ((i = [...i, ...s]),
                      (r = a.data.curosr || a.data.cursor || null));
                  }
                  a = r;
                }
                ((r = i.length),
                  u((t) => ({ ...t, [e]: i })),
                  h(i.slice(0, 12)),
                  U((t) => ({ ...t, [e]: a })),
                  window.sendLog("tab_click", {
                    key_words: F,
                    platform: "ins",
                    tab_name: x,
                    is_first_click: p,
                    status: "succ",
                    res_cnt: r,
                    tm: Math.floor(performance.now() - A),
                  }),
                  T[e] || B((t) => ({ ...t, [e]: !0 })));
              } else
                (u((t) => ({ ...t, [e]: [] })),
                  h([]),
                  window.sendLog("tab_click", {
                    key_words: F,
                    platform: "ins",
                    tab_name: x,
                    is_first_click: p,
                    status: "fail",
                    error_msg: t.msg || "parse_error",
                    tm: Math.floor(performance.now() - A),
                  }),
                  t.msg && j.A.error(t.msg));
            } catch (t) {
              (console.error(t),
                u((t) => ({ ...t, [e]: [] })),
                h([]),
                window.sendLog("tab_click", {
                  key_words: F,
                  platform: "ins",
                  tab_name: x,
                  is_first_click: p,
                  status: "fail",
                  error_msg: "exception",
                  tm: Math.floor(performance.now() - A),
                }),
                j.A.error(a("analyze_failed")));
            } finally {
              f(!1);
            }
          },
          J = async () => {
            var e, r, i, s, d, o, n, m;
            let x = c[l] || [],
              p = A.length;
            if (x.length - p >= 12) {
              (_(!0),
                setTimeout(() => {
                  (h(x.slice(0, p + 12)), _(!1));
                }, 300));
              return;
            }
            let g = null === (e = t.blogger) || void 0 === e ? void 0 : e.uid,
              f =
                null === (r = t.blogger) || void 0 === r ? void 0 : r.site_name;
            if (!g || !f) return;
            let w = E[l];
            if (!w) {
              x.length > p &&
                (_(!0),
                setTimeout(() => {
                  (h(x), _(!1));
                }, 300));
              return;
            }
            _(!0);
            try {
              if ("REELS" === l) {
                let e = [...x],
                  t = p + 12;
                for (; e.length < t && w; ) {
                  let t = await O({
                    uid: g,
                    site_name: f,
                    cursor: w,
                    type: eu[l],
                  });
                  if (
                    !(
                      1 === t.status &&
                      (null === (i = t.data) || void 0 === i ? void 0 : i.items)
                    )
                  ) {
                    ((w =
                      (null === (s = t.data) || void 0 === s
                        ? void 0
                        : s.curosr) ||
                      (null === (d = t.data) || void 0 === d
                        ? void 0
                        : d.cursor) ||
                      null),
                      t.msg && j.A.error(t.msg));
                    break;
                  }
                  let a = t.data.items.flatMap(
                    (e) =>
                      e.media.map((t) => ({
                        ...t,
                        post_id: e.post_id || "",
                        post_link: e.post_link || "",
                        title: e.title || "",
                        thumbnail: e.thumbnail || "",
                      })) || [],
                  );
                  if (!a.length) {
                    w = null;
                    break;
                  }
                  let r = a.filter((e) => "video" === e.type);
                  if (!r.length) {
                    w = t.data.curosr || t.data.cursor || null;
                    continue;
                  }
                  ((e = [...e, ...r]),
                    (w = t.data.curosr || t.data.cursor || null));
                }
                (u((t) => ({ ...t, [l]: e })), U((e) => ({ ...e, [l]: w })));
                let a = Math.min(e.length, t);
                h(e.slice(0, a));
              } else {
                let e = await O({
                  uid: g,
                  site_name: f,
                  cursor: w || void 0,
                  type: eu[l],
                });
                if (
                  1 === e.status &&
                  (null === (o = e.data) || void 0 === o ? void 0 : o.items)
                ) {
                  let t = e.data.items.flatMap(
                      (e) =>
                        e.media.map((t) => ({
                          ...t,
                          post_id: e.post_id || "",
                          post_link: e.post_link || "",
                          title: e.title || "",
                          thumbnail: e.thumbnail || "",
                        })) || [],
                    ),
                    a =
                      "STORIES" === l ? t.filter((e) => "video" === e.type) : t,
                    r = [...x, ...a];
                  u((e) => ({ ...e, [l]: r }));
                  let i = e.data.curosr || e.data.cursor || null;
                  if (
                    (t.length < 12 && (i = null),
                    U((e) => ({ ...e, [l]: i })),
                    t.length < 12)
                  )
                    h(r);
                  else {
                    let e = r.length - p;
                    h(r.slice(0, p + Math.min(12, e)));
                  }
                } else {
                  let t =
                    (null === (n = e.data) || void 0 === n
                      ? void 0
                      : n.curosr) ||
                    (null === (m = e.data) || void 0 === m
                      ? void 0
                      : m.cursor) ||
                    null;
                  (U((e) => ({ ...e, [l]: t })),
                    x.length > p && h(x),
                    e.msg && j.A.error(e.msg));
                }
              }
            } catch (e) {
              (console.error(e),
                x.length > p && h(x),
                j.A.error(a("analyze_failed")));
            } finally {
              _(!1);
            }
          },
          W = c[l] || [],
          q = A.length < W.length,
          V = !!E[l],
          z = !g && "STORIES" !== l && A.length > 0 && (q || V),
          M = "STORIES" === l || "HIGHLIGHTS" === l || "REELS" === l,
          Y = (0, b.useMemo)(
            () => ({
              media_id: "avatar",
              type: "picture",
              resources: [
                {
                  format: "image",
                  quality: "high",
                  download_url: t.thumbnail,
                  preview_url: t.thumbnail,
                  type: "picture",
                },
              ],
            }),
            [t.thumbnail],
          ),
          X = (e, t) => {
            d(e);
            let a = "video" === t[e].type ? "video" : "image";
            window.sendLog("lightbox_view", {
              media_type: a,
              source_page: "profile",
            });
          };
        return (0, n.jsxs)("div", {
          className:
            "mx-auto mt-[0.4rem] w-full max-w-[1120px] px-[0.24rem] md:mt-[40px] md:px-4",
          children: [
            (0, n.jsx)("div", {
              className: "mb-[0.32rem] text-center md:mb-8",
              children: (0, n.jsx)("h3", {
                className:
                  "text-[0.36rem] font-bold capitalize text-[#1A1A1A] md:text-[28px]",
                children: r("result_title", { tab: l }),
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "mb-[0.32rem] flex flex-col items-center text-center md:mb-8",
              children: [
                (0, n.jsxs)("div", {
                  className: "relative mb-[0.2rem] md:mb-4",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "h-[2rem] w-[2rem] overflow-hidden rounded-full border border-gray-100 shadow-sm md:h-[120px] md:w-[120px]",
                      children: (0, n.jsx)(w.default, {
                        src: t.thumbnail,
                        alt: t.title,
                        width: 120,
                        height: 120,
                        className: "h-full w-full object-cover",
                        unoptimized: !0,
                      }),
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => m(!0),
                      className:
                        "absolute bottom-[0.1rem] right-[0.1rem] flex h-[0.6rem] w-[0.6rem] items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 md:bottom-1 md:right-1 md:h-8 md:w-8",
                      children: (0, n.jsx)(I.Z, {
                        className: "h-[0.32rem] w-[0.32rem] md:h-4 md:w-4",
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("h2", {
                  className:
                    "text-[0.4rem] font-bold text-[#1A1A1A] md:text-2xl",
                  children: t.title,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className:
                "mb-[0.4rem] flex w-full justify-center border-b border-gray-200 md:mb-8",
              children: (0, n.jsx)("div", {
                className: "flex w-full justify-evenly md:gap-16",
                children: ec.map((e) =>
                  (0, n.jsx)(
                    "button",
                    {
                      onClick: () => G(e),
                      className:
                        "relative pb-[0.12rem] text-[0.24rem] font-medium uppercase tracking-wide transition-colors md:pb-3 md:text-sm ".concat(
                          l === e
                            ? "font-semibold text-[#1A1A1A] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#1A1A1A]"
                            : "text-gray-400 hover:text-gray-500",
                        ),
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
            }),
            g
              ? (0, n.jsx)("div", {
                  className: "flex justify-center py-12",
                  children: (0, n.jsx)("div", {
                    className:
                      "h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#1A1A1A]",
                  }),
                })
              : "HIGHLIGHTS" === l
                ? A.length > 0
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(em, {
                          items: A,
                          selectedId: null == y ? void 0 : y.post_id,
                          onSelect: async (e, t) => {
                            let r = e.post_id || t.toString(),
                              l = A.length,
                              i = H[r] ? 0 : 1,
                              s = performance.now();
                            if ((k(e), e.post_link)) {
                              (S([]), D(!0));
                              try {
                                var d, o;
                                let a = await P(e.post_link);
                                1 === a.status &&
                                (null === (o = a.data) || void 0 === o
                                  ? void 0
                                  : null === (d = o.media) || void 0 === d
                                    ? void 0
                                    : d.length)
                                  ? (S(a.data.media),
                                    window.sendLog("highlight_click", {
                                      key_words: F,
                                      highlight_cnt: l,
                                      pos: t + 1,
                                      highlight_id: r,
                                      res_cnt: a.data.media.length,
                                      is_first_click: i,
                                      status: "succ",
                                      tm: Math.floor(performance.now() - s),
                                    }),
                                    H[r] || Z((e) => ({ ...e, [r]: !0 })))
                                  : (S([]),
                                    window.sendLog("highlight_click", {
                                      key_words: F,
                                      highlight_cnt: l,
                                      pos: t + 1,
                                      highlight_id: r,
                                      res_cnt: 0,
                                      is_first_click: i,
                                      status: "fail",
                                      error_msg: a.msg || "parse_error",
                                      tm: Math.floor(performance.now() - s),
                                    }),
                                    a.msg && j.A.error(a.msg));
                              } catch (e) {
                                (console.error(e),
                                  S([]),
                                  window.sendLog("highlight_click", {
                                    key_words: F,
                                    highlight_cnt: l,
                                    pos: t + 1,
                                    highlight_id: r,
                                    res_cnt: 0,
                                    is_first_click: i,
                                    status: "fail",
                                    error_msg: "exception",
                                    tm: Math.floor(performance.now() - s),
                                  }),
                                  j.A.error(a("analyze_failed")));
                              } finally {
                                D(!1);
                              }
                            } else
                              e.media && e.media.length > 0
                                ? (S(e.media),
                                  window.sendLog("highlight_click", {
                                    key_words: F,
                                    highlight_cnt: l,
                                    pos: t + 1,
                                    highlight_id: r,
                                    res_cnt: e.media.length,
                                    is_first_click: i,
                                    status: "succ",
                                    tm: Math.floor(performance.now() - s),
                                  }),
                                  H[r] || Z((e) => ({ ...e, [r]: !0 })))
                                : (S([]),
                                  window.sendLog("highlight_click", {
                                    key_words: F,
                                    highlight_cnt: l,
                                    pos: t + 1,
                                    highlight_id: r,
                                    res_cnt: 0,
                                    is_first_click: i,
                                    status: "fail",
                                    error_msg: "no_media",
                                    tm: Math.floor(performance.now() - s),
                                  }));
                          },
                        }),
                        y &&
                          (0, n.jsx)("div", {
                            className: "mt-[0.3rem] md:mt-4",
                            children: C
                              ? (0, n.jsx)("div", {
                                  className: "flex items-center justify-center",
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "h-[1rem] w-[1rem] animate-spin rounded-full border-2 border-gray-200 border-t-[#1A1A1A] md:h-10 md:w-10",
                                  }),
                                })
                              : (0, n.jsx)("div", {
                                  className:
                                    "grid grid-cols-2 gap-[0.2rem] md:grid-cols-3 md:gap-8",
                                  children: N.map((e, t) =>
                                    (0, n.jsx)(
                                      eo,
                                      {
                                        item: e,
                                        t: a,
                                        aspectRatio: "aspect-[9/16]",
                                        onPreview: () => X(t, N),
                                      },
                                      e.media_id + t,
                                    ),
                                  ),
                                }),
                          }),
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center py-[0.6rem] text-center md:py-12",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "mb-[0.2rem] flex items-center justify-center md:mb-4",
                          children: (0, n.jsx)(w.default, {
                            src: L,
                            alt: "No data",
                            width: 240,
                            height: 240,
                            className:
                              "h-auto w-[4.8rem] object-contain md:w-[240px]",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "max-w-[8rem] whitespace-pre-line px-[0.32rem] text-gray-500 md:max-w-md md:px-4",
                          children: r("no_content_found", { content: eu[l] }),
                        }),
                      ],
                    })
                : A.length > 0
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: (0, x.Z)(
                            "grid gap-[0.2rem] md:gap-8 grid-cols-2",
                            "STORIES" === l
                              ? " place-items-center grid-cols-[--col]"
                              : "md:grid-cols-3",
                          ),
                          style: {
                            "--col": "repeat(".concat(
                              Math.min(A.length, 3),
                              ", minmax(0, 1fr))",
                            ),
                          },
                          children: A.map((e, t) =>
                            (0, n.jsx)(
                              eo,
                              {
                                item: e,
                                t: a,
                                className: "w-[3.42rem] md:w-[352px]",
                                aspectRatio: M
                                  ? "aspect-[9/16]"
                                  : "aspect-[4/5]",
                                onPreview: () => X(t, A),
                              },
                              e.media_id + t,
                            ),
                          ),
                        }),
                        z &&
                          (0, n.jsx)("div", {
                            className:
                              "mt-[0.4rem] flex justify-center md:mt-[60px]",
                            children: (0, n.jsx)("button", {
                              onClick: J,
                              disabled: v || g,
                              className:
                                "bg-[#E6E8F3] px-[0.24rem] py-[0.16rem] text-[0.28rem] font-semibold text-[#1A1A1A] transition-opacity disabled:cursor-not-allowed disabled:opacity-60 md:h-[84px] md:w-[410px] md:rounded-[10px] md:px-6 md:py-2 md:text-[28px]",
                              children: v ? a("loading") : a("load_more_posts"),
                            }),
                          }),
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center py-[0.6rem] text-center md:py-12",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "mb-[0.2rem] flex items-center justify-center md:mb-4",
                          children: (0, n.jsx)(w.default, {
                            src: "STORIES" === l ? R : L,
                            alt: "No data",
                            width: 240,
                            height: 240,
                            className:
                              "h-auto w-[4.8rem] object-contain md:w-[240px]",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "max-w-[8rem] whitespace-pre-line px-[0.32rem] text-gray-500 md:max-w-md md:px-4",
                          children:
                            "STORIES" === l
                              ? r("no_stories_found")
                              : r("no_content_found", { content: eu[l] }),
                        }),
                      ],
                    }),
            null !== s &&
              (0, n.jsx)(ea, {
                initialIndex: s,
                items: "HIGHLIGHTS" === l && y ? N : A,
                onClose: () => d(null),
                t: a,
              }),
            o &&
              (0, n.jsx)(ea, {
                initialIndex: 0,
                items: [Y],
                onClose: () => m(!1),
                t: a,
              }),
          ],
        });
      }
      function ep(e) {
        var t, a, r, l, i;
        let { data: s, activeTab: o } = e,
          m = (0, p.useTranslations)("Product.ins"),
          c =
            ((null === (t = s.post_media) || void 0 === t
              ? void 0
              : t.length) || 0) +
            ((null === (a = s.stories_media) || void 0 === a
              ? void 0
              : a.length) || 0) +
            ((null === (r = s.highlight_media) || void 0 === r
              ? void 0
              : r.length) || 0) +
            ((null === (l = s.reels_media) || void 0 === l
              ? void 0
              : l.length) || 0);
        if (
          !(o === d.PROFILE
            ? c > 0
            : ((null === (i = s.media) || void 0 === i ? void 0 : i.length) ||
                0) > 0)
        ) {
          let e = o === d.STORY ? R : L,
            t =
              o === d.STORY
                ? m("no_stories_found")
                : m("no_content_found", {
                    content: o === d.DEFAULT ? "content" : o,
                  });
          return (0, n.jsx)("div", {
            className:
              "mx-auto mt-[0.4rem] w-full max-w-[1120px] px-[0.24rem] md:mt-[40px] md:px-4",
            children: (0, n.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center py-[0.6rem] text-center md:py-12",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "mb-[0.2rem] flex items-center justify-center md:mb-4",
                  children: (0, n.jsx)(w.default, {
                    src: e,
                    alt: "No data",
                    width: 240,
                    height: 240,
                    className: "h-auto w-[4.8rem] object-contain md:w-[240px]",
                    unoptimized: !0,
                  }),
                }),
                (0, n.jsx)("p", {
                  className:
                    "max-w-[8rem] whitespace-pre-line px-[0.32rem] text-gray-500 md:max-w-md md:px-4",
                  children: t,
                }),
              ],
            }),
          });
        }
        return o === d.PROFILE
          ? (0, n.jsx)(ex, { data: s })
          : 1 === s.media.length
            ? (0, n.jsx)(er, { data: s })
            : (0, n.jsx)(en, { data: s, activeTab: o });
      }
      var eA = a(3329),
        eh = a(5798);
      let eg = (e) =>
          [
            /^(https?:\/\/)?(www\.)?instagram\.com\/.+/i,
            /^(https?:\/\/)?(www\.)?instagr\.am\/.+/i,
          ].some((t) => t.test(e)),
        ef = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "url",
            [t, a] = (0, b.useState)(s.Idle),
            [r, l] = (0, b.useState)(null),
            [i, o] = (0, b.useState)(""),
            [n, m] = (0, b.useState)(""),
            c = (0, b.useRef)(!1),
            u = (0, b.useRef)(null),
            x = () => {
              (a(s.Idle), l(null), m(""));
            };
          return {
            status: t,
            parseData: r,
            handleSearch: async (t, r) => {
              let i = (0, eh.vJ)(t).trim();
              if (!i) {
                (x(), o(""));
                return;
              }
              let n = i;
              if (!eg(i)) {
                let e = i.replace(/^@/, "");
                n = "https://www.instagram.com/".concat(e);
              }
              if (!c.current) {
                ((c.current = !0),
                  u.current && clearTimeout(u.current),
                  (u.current = setTimeout(() => {
                    c.current = !1;
                  }, 1e3)),
                  o(i),
                  a(s.Loading),
                  l(null),
                  m(""),
                  (0, eA.H)("url_enter_succ"),
                  window.sendLog("ana_begin", {
                    search_type: "url",
                    key_words: i,
                    referer: e,
                  }));
                try {
                  let t = performance.now(),
                    o = (t, r, d) => {
                      (a(s.Failed),
                        l(null),
                        m(""),
                        (0, eA.H)(
                          d ? "ana_result_fail_other" : "ana_result_fail_parse",
                        ),
                        window.sendLog("ana_fail", {
                          search_type: "url",
                          key_words: i,
                          error_msg: t,
                          error_detail: r || "",
                          referer: e,
                        }));
                    };
                  if (r === d.PROFILE) {
                    var p, A, h, g;
                    let r = await G(n);
                    if (1 !== r.status || !r.data) {
                      o("blogger_api_error", r.msg || "");
                      return;
                    }
                    let {
                      uid: d,
                      site_name: m,
                      nickname: c,
                      username: u,
                      avatar: x,
                    } = r.data;
                    if (!d || !m) {
                      o("blogger_missing_info", "missing uid or site_name");
                      return;
                    }
                    let f = await O({ site_name: m, uid: d, type: "posts" });
                    if (1 !== f.status) {
                      o("posts_api_error", f.msg || "");
                      return;
                    }
                    let w = {
                      title: c || u || "Instagram User",
                      thumbnail: x || "",
                      duration: 0,
                      resources: [],
                      media: [],
                      post_media: [],
                      blogger: r.data,
                      next_cursor:
                        (null === (p = f.data) || void 0 === p
                          ? void 0
                          : p.curosr) ||
                        (null === (A = f.data) || void 0 === A
                          ? void 0
                          : A.cursor),
                    };
                    ((null === (g = f.data) || void 0 === g
                      ? void 0
                      : null === (h = g.items) || void 0 === h
                        ? void 0
                        : h.length) &&
                      ((w.post_media = f.data.items.flatMap(
                        (e) =>
                          e.media.map((t) => ({
                            ...t,
                            post_id: e.post_id || "",
                            post_link: e.post_link || "",
                            title: e.title || "",
                            thumbnail: e.thumbnail || "",
                          })) || [],
                      )),
                      (w.media = w.post_media)),
                      l(w),
                      a(s.Success),
                      (0, eA.H)("ana_result_succ"),
                      window.sendLog("ana_succ", {
                        search_type: "url",
                        key_words: i,
                        duration: ((performance.now() - t) / 1e3).toFixed(0),
                        referer: e,
                      }));
                    return;
                  }
                  let c = await P(n);
                  1 === c.status
                    ? (l(c.data),
                      a(s.Success),
                      (0, eA.H)("ana_result_succ"),
                      window.sendLog("ana_succ", {
                        search_type: "url",
                        key_words: i,
                        duration: ((performance.now() - t) / 1e3).toFixed(0),
                        referer: e,
                      }))
                    : o("ins_media_api_error", c.msg || "");
                } catch (t) {
                  (console.error(t),
                    a(s.Failed),
                    l(null),
                    m(""),
                    (0, eA.H)("ana_result_fail_other"),
                    window.sendLog("ana_fail", {
                      search_type: "url",
                      key_words: i,
                      error_msg: "exception",
                      error_detail: (null == t ? void 0 : t.message) || "",
                      referer: e,
                    }));
                }
              }
            },
            reset: x,
            inputValue: i,
            setInputValue: o,
            errorMsg: n,
          };
        };
      var ew = a(6377),
        eb = {
          src: "/_next/static/media/card-image-anonymous.0c8edfab.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoIAAUAAkA4JYgCdLoAA5gA/veRvkxaLxYa/ik2owlXXoAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        ev = {
          src: "/_next/static/media/card-image-download.0f43c810.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAkA4JYgCdAEO/gPIAAD++s/rIx5LX31sY1oqDRdW2lDhBfVn6AAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        e_ = {
          src: "/_next/static/media/card-image-free.da4ff302.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JYgCdLoABGaAAP73dw1yZaqfMr83UFuNtFC/QIXrQtCSy6GDbkqX3AAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        ey = {
          src: "/_next/static/media/card-image-offline.2c38cf02.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZgCdAD0mLRyuAD++EBWWFYVsFj7kLQ8uka0+Fz07/4atS966LY6HfNGztFQGAAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        ej = {
          src: "/_next/static/media/card-image-online.ee52af92.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAkA4JYgCdAEf9nSzAAD++ayEsPYZHKch3fh0WWBfLr8N7ohe90jtFpq2q0qm7VguCAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        ek = {
          src: "/_next/static/media/card-image-original.caab73c8.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACQAQCdASoIAAUAAkA4JYgCdLoAA5gA/veRqBiRrXB4tikLV7XAiyCmgAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        eN = {
          src: "/_next/static/media/card-image-photo-save.fc833048.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JYgCdAEf/kgD8AD++QLxwgkcQtUoJ6wMb7CvvVLJ0Iuv94Q3YcuBM/ZRnoAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        eS = {
          src: "/_next/static/media/card-image-profile-pic.aa891fb7.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAUAAkA4JZACdAEXeufsoAD+9BYj9QA+maIm+7Cn7fsKSSTyXA/FdQO2/cRdQoW0fxntGt4/Hg4ztOywAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        eC = {
          src: "/_next/static/media/card-image-profile.2b79fd73.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JZACdAEf/wN1/AD++9MeV/9SJHyyNyAi7Pgzd2lbuDn86Zo2lDhBLpMAAAAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        eD = {
          src: "/_next/static/media/card-image-reel-download.f006b011.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAUAAkA4JZgCdAERH1qU1AAA/vj66RIHLTukxKfvEJZFzKRZMTpp0P8fa4CRv78PO34+0Jprq1otNdIAAAAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        eR = {
          src: "/_next/static/media/card-image-save-stories.8f6f6b51.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JZACdAEf/FZ3MYAA/vj3UGuD9LOeW1cmt9zlBZQgs7qceu1TyHVPfqM616epoAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        eL = {
          src: "/_next/static/media/card-image-save.752b4959.webp",
          height: 900,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAABwAQCdASoIAAUAAkA4JZACdAGIQAD+91OLAlpO52WFZGvEMm6SY5yjuR2/XRSLMsb490jtFQGAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        eE = {
          src: "/_next/static/media/icon-faq-closed.3fb565ca.webp",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABD/Dt/4iIIBBIVs99iIj+hwZWUDggPAAAAHABAJ0BKggACAACQDglqAJ0AUAAAP7s1o3P+XqTKuaiUahkAUiCTS5OR/64D//oO//9B3+qY2a+wuQAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        eI = {
          src: "/_next/static/media/icon-faq-opened.21c55551.webp",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABD/Dt/4iIIBBIVs99iIj+hwZWUDggQgAAAPABAJ0BKggACAACQDglqAJ0AN1l+RbwAAD+0NYsdPQ0XYhEAAcjOXKySntUP/64HMgFHf/2Dv//Qd/qmNmvsLkAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        eU = {
          src: "/_next/static/media/ins_step1@2x.f7911fde.webp",
          height: 884,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSA0AAAABD/D+/4iIMIER/Y8AAFZQOCAuAAAA0AEAnQEqCAAFAAJAOCWMAuwBDmfyo4AA/vyI4+fqxUI54D1EgZZffcN5PDSAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        eQ = {
          src: "/_next/static/media/ins_step2@2x.3d22c366.webp",
          height: 884,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRmAAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSA0AAAABD/D+/4iIMIER/Y8AAFZQOCAsAAAA8AEAnQEqCAAFAAJAOCWUAuwBERzdUAgAAP783zQKaYn/FFHFtA//UC/8IAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        eF = {
          src: "/_next/static/media/ins_step3@2x.b973d178.webp",
          height: 884,
          width: 1400,
          blurDataURL:
            "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSA0AAAABD/D+/4iIMIER/Y8AAFZQOCBAAAAAsAEAnQEqCAAFAAJAOCUAToAhx2+QwAD++uGuBgp4bejgWwjWiVBrtUFq6P9fsgoDbnwFvG9gaNujE/DBkkAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        };
      let eT = (0, b.createContext)(null);
      function eB(e) {
        let { status: t, parseData: a, activeTab: r } = e;
        return t === s.Success && a
          ? (0, n.jsx)(ep, { data: a, activeTab: r })
          : null;
      }
      function eH(e) {
        let { initialActiveTab: t = d.DEFAULT } = e;
        (0, p.useTranslations)();
        let {
            status: a,
            parseData: r,
            handleSearch: l,
            inputValue: i,
            setInputValue: s,
            errorMsg: o,
            reset: m,
          } = ef("ins_page"),
          [c, u] = (0, b.useState)(t),
          [x, A] = (0, b.useState)(""),
          [h] = (0, b.useState)("url");
        return (
          (0, b.useEffect)(() => {
            window.sendLog("page_show", { pageType: "ins" });
          }, []),
          (0, b.useEffect)(() => {
            u(t);
          }, [t]),
          (0, n.jsxs)(eT.Provider, {
            value: { keyWords: x, searchType: h },
            children: [
              (0, n.jsx)(D, {
                inputValue: i,
                setInputValue: s,
                onSearch: (e, t) => {
                  (A(e),
                    l(e, t),
                    u(t),
                    window.sendLog("search", {
                      search_type: e ? h : "empty_search",
                      parse_url: e,
                      referer: e ? "search" : "empty_search",
                    }));
                },
                status: a,
                errorMsg: o,
                activeTab: t,
                onReset: m,
                style: {
                  background:
                    "radial-gradient(52% 66% at 35% 112%, #FFC82F 0%, rgba(238,194,67,0) 100%), linear-gradient( 179deg, #6619ED 0%, #E129A7 42.63%, #FC0A59 100%)",
                },
              }),
              (0, n.jsx)(eB, { status: a, parseData: r, activeTab: c || t }),
              (0, n.jsx)(eP, { activeTab: t }),
              (0, n.jsx)(eZ, { activeTab: t }),
              (0, n.jsx)(eG, { activeTab: t }),
              (0, n.jsx)("div", {
                className:
                  "flex w-full flex-col items-center bg-gradient-to-r from-[#A42BF4] to-[#FF2992] py-[0.4rem] md:mt-[60px] md:min-h-[500px] md:from-[#A42BF4] md:to-[#FF2992] md:pb-[60px]",
                children: (0, n.jsx)(ew.default, {
                  className: "[&>h2]:text-white [&>p]:text-white",
                  showX: !1,
                }),
              }),
            ],
          })
        );
      }
      function eP(e) {
        let { activeTab: t } = e,
          a = (0, p.useTranslations)("Product.ins.".concat(t || "default")),
          r = [
            {
              img: eU,
              title: a("howToDownloadSteps.0.title"),
              description: a("howToDownloadSteps.0.description"),
            },
            {
              img: eQ,
              title: a("howToDownloadSteps.1.title"),
              description: a("howToDownloadSteps.1.description"),
            },
            {
              img: eF,
              title: a("howToDownloadSteps.2.title"),
              description: a("howToDownloadSteps.2.description"),
            },
          ];
        return (0, n.jsxs)("section", {
          className:
            "mx-auto mb-[1rem] mt-[0.6rem] flex max-w-[1310px] flex-col items-center px-[0.25rem] md:mt-[60px] md:px-0",
          children: [
            (0, n.jsx)("h2", {
              className:
                "mb-[0.16rem] text-center text-[0.44rem] font-bold text-[#2D3436] md:mb-[20px] md:text-[40px]",
              children: a("howToDownloadTitle"),
            }),
            (0, n.jsx)("p", {
              className:
                "mb-[0.6rem] max-w-[6.4rem] text-center text-[0.24rem] text-[#6F7779] md:mb-[60px] md:max-w-none md:text-[18px]",
              children: a("howToDownloadSubtitle"),
            }),
            (0, n.jsx)("div", {
              className:
                "grid w-full grid-cols-1 justify-items-center gap-[0.4rem] md:grid-cols-3 md:gap-[30px]",
              children: r.map((e, t) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className:
                      "flex w-[7rem] flex-col overflow-hidden rounded-[0.2rem] bg-white shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:w-full md:rounded-[20px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
                    children: [
                      (0, n.jsx)(w.default, {
                        className: "aspect-[416/263] w-full object-cover",
                        src: e.img,
                        alt: "",
                        unoptimized: !0,
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-1 flex-col items-center p-[0.32rem] md:items-start md:p-[24px] md:text-start",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "mb-[0.2rem] flex items-center gap-[0.24rem] md:mb-[16px] md:gap-[8px]",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "flex h-[0.48rem] w-[0.48rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#DDCDFF] to-[#F8C7FF] text-[0.28rem] font-bold md:h-[36px] md:w-[36px] md:text-[20px]",
                                children: t + 1,
                              }),
                              (0, n.jsx)("h3", {
                                className:
                                  "text-[0.32rem] font-bold text-[#EC1187] md:text-[24px]",
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, n.jsx)("p", {
                            className:
                              "text-[0.24rem] leading-[1.5] text-[#6F7779] md:text-[16px]",
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      }
      function eZ(e) {
        let { activeTab: t } = e,
          a = t || "default",
          r = (0, p.useTranslations)("Product.ins.".concat(a)),
          l = {
            default: { primary: ev, secondary: e_ },
            video: { primary: eL, secondary: ej },
            photo: { primary: eN, secondary: ek },
            reels: { primary: eD, secondary: ey },
            story: { primary: eR, secondary: eb },
            carousel: { primary: eC, secondary: eS },
            profile: { primary: eC, secondary: eS },
          },
          i = l[a] || l.default;
        return (0, n.jsxs)("section", {
          className:
            "mx-auto mt-[0.6rem] flex max-w-[1310px] flex-col gap-[0.4rem] px-[0.25rem] md:mt-[60px] md:gap-[24px] md:px-0",
          children: [
            (0, n.jsx)("h2", {
              className:
                "mb-[0.16rem] text-center text-[0.44rem] font-bold text-[#2D3436] md:mb-[20px] md:text-[40px]",
              children: r("feature.sectionTitle"),
            }),
            (0, n.jsxs)("div", {
              className:
                "flex flex-col overflow-hidden rounded-[0.2rem] bg-white shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:flex-row md:items-center md:rounded-[20px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
              children: [
                (0, n.jsx)("div", {
                  className: "md:w-[43%]",
                  children: (0, n.jsx)(w.default, {
                    src: i.primary,
                    alt: r("feature.primaryTitle"),
                    className: "aspect-[560/360] h-full w-full object-cover",
                    unoptimized: !0,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-1 flex-col justify-center p-[0.32rem] md:w-1/2 md:p-[40px]",
                  children: [
                    (0, n.jsx)("h3", {
                      className:
                        "mb-[0.16rem] text-[0.32rem] font-bold text-[#2D3436] md:mb-[12px] md:text-[28px]",
                      children: (0, n.jsxs)("span", {
                        className: "relative inline-block",
                        children: [
                          (0, n.jsx)("span", {
                            className: "relative z-10",
                            children: r("feature.primaryTitle"),
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "absolute bottom-[0.04rem] left-0 h-[0.16rem] w-full rounded-full bg-[#EADDFF] md:bottom-[4px] md:h-[14px]",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "text-[0.24rem] leading-[1.6] text-[#6F7779] md:text-[16px]",
                      children: r("feature.primaryDesc"),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "flex flex-col overflow-hidden rounded-[0.2rem] bg-white shadow-[0px_0.03rem_0.04rem_0.02rem_rgba(201,201,201,0.51)] md:flex-row-reverse md:items-center md:rounded-[20px] md:shadow-[0px_3px_4px_2px_rgba(201,201,201,0.51)]",
              children: [
                (0, n.jsx)("div", {
                  className: "md:w-[43%]",
                  children: (0, n.jsx)(w.default, {
                    src: i.secondary,
                    alt: r("feature.secondaryTitle"),
                    className: "aspect-[560/360] h-full w-full object-cover",
                    unoptimized: !0,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-1 flex-col justify-center p-[0.32rem] md:w-1/2 md:p-[40px]",
                  children: [
                    (0, n.jsx)("h3", {
                      className:
                        "mb-[0.16rem] text-[0.32rem] font-bold text-[#2D3436] md:mb-[12px] md:text-[28px]",
                      children: (0, n.jsxs)("span", {
                        className: "relative inline-block",
                        children: [
                          (0, n.jsx)("span", {
                            className: "relative z-10",
                            children: r("feature.secondaryTitle"),
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "absolute bottom-[0.04rem] left-0 h-[0.16rem] w-full rounded-full bg-[#EADDFF] md:bottom-[4px] md:h-[14px]",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "text-[0.24rem] leading-[1.6] text-[#6F7779] md:text-[16px]",
                      children: r("feature.secondaryDesc"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function eG(e) {
        let { activeTab: t } = e,
          a = (0, p.useTranslations)("Product.ins"),
          r = (0, p.useTranslations)("Product.ins.".concat(t || "default")),
          l = t === d.DEFAULT,
          i = [0, 1, 2, 3, 4].map((e) => ({
            q: r("faq.".concat(e, ".title")),
            a: r("faq.".concat(e, ".description")),
          }));
        return (0, n.jsxs)("section", {
          className:
            "mx-auto mb-[1.2rem] mt-[0.6rem] max-w-[1310px] px-[0.25rem] md:mb-[120px] md:mt-[80px] md:px-0",
          children: [
            (0, n.jsx)(m.default, {
              title: a("faq.sectionTitle"),
              desc: a("faq.sectionDesc"),
              qaList: i,
              openIcon: eI,
              closeIcon: eE,
            }),
            l && (0, n.jsx)(h, { className: "pt-[0.14rem] md:pt-[12px]" }),
          ],
        });
      }
    },
    6146: function (e, t, a) {
      a.d(t, {
        default: function () {
          return o;
        },
      });
      var r = a(4336),
        l = {
          src: "/_next/static/media/faq.3f4fb039.png",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAwkYAwkUUxU9H0XRD0na77s5+4KGq5W1zAAAAAXRSTlPaJuDjrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJxjYGAEAwYozcgIYjAxQxhMbKwsqAy4FKo2BgANMgBd8qTSZAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        i = {
          src: "/_next/static/media/faq_moin.a67e1a20.png",
          height: 60,
          width: 60,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAwkYAw0YAvjpk2o4AwUJJ03sayFlAXHhzAAAAAXRSTlPaJuDjrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGAEAwYozcjIwMjIwsTEBGKwsDEzs6Iw4FIwxTDtAA8AAGnjN86zAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        s = a(3179),
        d = a(7797);
      function o(e) {
        let {
            qaList: t,
            className: a = "",
            itemClassName: o = "",
            questionClassName: n = "",
            answerClassName: m = "",
            title: c = "FAQ",
            desc: u,
            openIcon: x,
            closeIcon: p,
            iconClassName: A = "",
          } = e,
          h = null != x ? x : l,
          g = null != p ? p : i;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("h2", {
              className: (0, s.W)(
                "my-[0.4rem] text-center text-[0.4rem] font-extrabold text-[#2D3436FF] md:mb-[40px] md:mt-[60px] md:text-[50px]",
                a,
              ),
              children: c,
            }),
            u &&
              (0, r.jsx)("p", {
                className:
                  "mx-auto mb-[0.4rem] mt-[-0.2rem] text-center text-[0.24rem] text-[#2D3436FF] md:mb-[40px] md:mt-[-20px] md:w-[983px] md:text-[14px]",
                children: u,
              }),
            t.map((e, t) =>
              (0, r.jsx)(
                "div",
                {
                  className: (0, s.W)(
                    "mx-auto mb-[0.4rem] w-[6.7rem] border-b-[1px] border-b-[#D0D0D0FF] md:mb-[30px] md:w-[983px] md:pb-[30px]",
                    o,
                  ),
                  children: (0, r.jsxs)("details", {
                    className: "group",
                    children: [
                      (0, r.jsxs)("summary", {
                        className:
                          "mb-[0.3rem] flex w-full cursor-pointer list-none items-center justify-between",
                        children: [
                          (0, r.jsx)("div", {
                            className: (0, s.W)(
                              "w-[6.34rem] text-[0.3rem] font-bold text-[#2D3436FF] md:w-fit md:text-[24px]",
                              n,
                            ),
                            children: e.q,
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, r.jsx)(d.default, {
                                src: h,
                                alt: "open",
                                className: (0, s.W)(
                                  "h-[0.4rem] w-[0.4rem] group-open:hidden md:h-[30px] md:w-[30px]",
                                  A,
                                ),
                                width: 30,
                                height: 30,
                                unoptimized: !0,
                              }),
                              (0, r.jsx)(d.default, {
                                src: g,
                                alt: "close",
                                className: (0, s.W)(
                                  "hidden h-[0.4rem] w-[0.4rem] group-open:block md:h-[30px] md:w-[30px]",
                                  A,
                                ),
                                width: 30,
                                height: 30,
                                unoptimized: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: (0, s.W)(
                          "mb-[0.3rem] w-[6.34rem] text-[0.24rem] font-bold leading-[0.4rem] text-[#1C4B70FF] md:w-fit md:pt-[30px] md:text-[18px] md:leading-[30px]",
                          m,
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
    2664: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = a(4336),
        l = a(6964),
        i = a(3539),
        s = a(7797);
      function d(e) {
        let {
          name: t,
          description: a,
          icon: d,
          href: o,
          gradient: n,
          className: m,
        } = e;
        return (0, r.jsxs)(l.rU, {
          href: o,
          prefetch: !1,
          title: t,
          className:
            "group relative overflow-hidden rounded-[0.2rem] bg-white p-[0.3rem] shadow-[0px_0.04rem_0.16rem_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_0.08rem_0.24rem_rgba(0,0,0,0.12)] md:rounded-[20px] md:p-[30px] ".concat(
              m,
            ),
          children: [
            (0, r.jsx)("div", {
              className:
                "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 ".concat(
                  n,
                ),
            }),
            (0, r.jsxs)("div", {
              className:
                "relative flex items-center gap-[0.2rem] md:gap-[20px]",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex h-[0.8rem] w-[0.8rem] shrink-0 items-center justify-center rounded-[0.12rem] bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] md:h-[80px] md:w-[80px] md:rounded-[12px]",
                  children: (0, r.jsx)(s.default, {
                    src: d,
                    alt: t,
                    width: 48,
                    height: 48,
                    unoptimized: !0,
                    className:
                      "h-[0.48rem] w-[0.48rem] object-contain md:h-[48px] md:w-[48px]",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex-1",
                  children: [
                    (0, r.jsx)("h3", {
                      className:
                        "mb-[0.08rem] text-[0.28rem] font-bold text-[var(--text-primary)] md:mb-[8px] md:text-[20px]",
                      children: t,
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-[0.22rem] text-[var(--text-secondary)] md:text-[14px]",
                      children: a,
                    }),
                  ],
                }),
                (0, r.jsx)(i.Z, {
                  className:
                    "h-[0.32rem] w-[0.32rem] shrink-0 text-[var(--brand-primary)] opacity-0 transition-all duration-300 group-hover:translate-x-[0.08rem] group-hover:opacity-100 md:h-[24px] md:w-[24px] md:group-hover:translate-x-[8px]",
                }),
              ],
            }),
          ],
        });
      }
    },
    6377: function (e, t, a) {
      a.d(t, {
        default: function () {
          return n;
        },
      });
      var r = a(4336),
        l = a(7414),
        i = a(2664),
        s = a(2990),
        d = a(6777);
      let o = {
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
        let { showX: t = !0, className: a, kind: n = "" } = e,
          m = (0, d.useTranslations)("VideoDownloaderHub"),
          c = (0, d.useLocale)(),
          u = (t ? s.CZ : s.CZ.filter((e) => "x" !== e.key)).map((e) => {
            let t = o[e.key] || {
              localeKey: e.key,
              gradient: "bg-gradient-to-br from-gray-500 to-gray-600",
            };
            return {
              name: m("platforms.".concat(t.localeKey, ".name")),
              description: m("platforms.".concat(t.localeKey, ".description")),
              icon: e.icon,
              href: (0, l.D_)(c, e.link),
              gradient: t.gradient,
            };
          });
        return (0, r.jsxs)("div", {
          className:
            "my-[0.4rem] flex w-full flex-col items-center md:my-[60px] ".concat(
              a,
            ),
          children: [
            (0, r.jsx)("h2", {
              className:
                "mb-[0.4rem] text-center text-[0.4rem] font-extrabold leading-[0.45rem] md:mb-[40px] md:text-[50px] md:leading-[58px] ".concat(
                  "tiktok" === n ? "text-[#ffffff]" : "",
                ),
              children: m("platforms.title"),
            }),
            (0, r.jsx)("p", {
              className:
                "mb-[0.4rem] max-w-[90%] text-center text-[0.24rem] ".concat(
                  "tiktok" === n
                    ? "text-[#ffffff]"
                    : "text-[var(--text-secondary)]",
                  " md:mb-[40px] md:text-[18px]",
                ),
              children: m("platforms.subtitle"),
            }),
            (0, r.jsx)("div", {
              className:
                "grid w-full max-w-[7rem] grid-cols-1 gap-[0.24rem] px-[0.3rem] md:max-w-[1310px] md:grid-cols-2 md:gap-[24px] md:px-0 lg:grid-cols-3",
              children: u.map((e, t) => (0, r.jsx)(i.Z, { ...e }, t)),
            }),
          ],
        });
      }
    },
    3710: function (e, t, a) {
      a.d(t, {
        $F: function () {
          return c;
        },
        AW: function () {
          return u;
        },
        Xi: function () {
          return x;
        },
        h_: function () {
          return m;
        },
      });
      var r = a(4336),
        l = a(9712),
        i = a(7106),
        s = a(125),
        d = a(2101),
        o = a(4271),
        n = a(8559);
      let m = l.fC,
        c = l.xz;
      (l.ZA,
        l.Uv,
        l.Tr,
        l.Ee,
        (o.forwardRef((e, t) => {
          let { className: a, inset: s, children: d, ...o } = e;
          return (0, r.jsxs)(l.fF, {
            ref: t,
            className: (0, n.cn)(
              "flex cursor-default select-none items-center md:gap-2 gap-[0.1rem] rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
              s && "pl-8",
              a,
            ),
            ...o,
            children: [d, (0, r.jsx)(i.Z, { className: "ml-auto" })],
          });
        }).displayName = l.fF.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, r.jsx)(l.tu, {
            ref: t,
            className: (0, n.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
              a,
            ),
            ...i,
          });
        }).displayName = l.tu.displayName));
      let u = o.forwardRef((e, t) => {
        let { className: a, sideOffset: i = 4, ...s } = e;
        return (0, r.jsx)(l.Uv, {
          children: (0, r.jsx)(l.VY, {
            ref: t,
            sideOffset: i,
            className: (0, n.cn)(
              "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
              a,
            ),
            ...s,
          }),
        });
      });
      u.displayName = l.VY.displayName;
      let x = o.forwardRef((e, t) => {
        let { className: a, inset: i, ...s } = e;
        return (0, r.jsx)(l.ck, {
          ref: t,
          className: (0, n.cn)(
            "relative flex cursor-pointer select-none items-center md:gap-2 gap-[0.1rem] rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:md:size-4 [&_svg]:shrink-0",
            i && "pl-8",
            a,
          ),
          ...s,
        });
      });
      ((x.displayName = l.ck.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, children: i, checked: d, ...o } = e;
          return (0, r.jsx)(l.oC, {
            ref: t,
            className: (0, n.cn)(
              "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              a,
            ),
            checked: d,
            ...o,
            children: (0, r.jsxs)("span", {
              className: "absolute left-2 flex h-3.5 w-3.5 items-center",
              children: [
                i,
                (0, r.jsx)(l.wU, {
                  children: (0, r.jsx)(s.Z, {
                    className: "h-[0.4rem] w-[0.4rem] md:h-4 md:w-4",
                  }),
                }),
              ],
            }),
          });
        }).displayName = l.oC.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, children: i, ...s } = e;
          return (0, r.jsxs)(l.Rk, {
            ref: t,
            className: (0, n.cn)(
              "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              a,
            ),
            ...s,
            children: [
              (0, r.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, r.jsx)(l.wU, {
                  children: (0, r.jsx)(d.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              i,
            ],
          });
        }).displayName = l.Rk.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, inset: i, ...s } = e;
          return (0, r.jsx)(l.__, {
            ref: t,
            className: (0, n.cn)(
              "md:px-2 md:py-1.5 px-[0.1rem] py-[0.06rem] md:text-sm text-[0.16rem] font-semibold",
              i && "pl-8",
              a,
            ),
            ...s,
          });
        }).displayName = l.__.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, r.jsx)(l.Z0, {
            ref: t,
            className: (0, n.cn)("-mx-1 my-1 h-px bg-muted", a),
            ...i,
          });
        }).displayName = l.Z0.displayName));
    },
    7444: function (e, t, a) {
      a.d(t, {
        Do: function () {
          return i;
        },
        dV: function () {
          return r;
        },
        zq: function () {
          return l;
        },
      });
      let r = [
        {
          id: "howToDownloadInstagramPhotosInHd",
          slug: "how-to-download-instagram-photos-in-hd",
          path: "/ins/how-to-download-instagram-photos-in-hd",
          imageSrc: "/images/guides/instagram-photo-download-hd-hero.png",
          videoSrc: "/videos/guides/instagram-photo-download-hd-v2.mp4",
        },
      ];
      function l(e, t) {
        var a, r, l, i, s, d;
        return null !==
          (r =
            null ===
              ((l = t.id),
              (a =
                null !==
                  (d =
                    null !==
                      (s =
                        null == e
                          ? void 0
                          : null === (i = e.InstagramGuides) || void 0 === i
                            ? void 0
                            : i[l]) && void 0 !== s
                      ? s
                      : void 0) && void 0 !== d
                  ? d
                  : null)) || void 0 === a
              ? void 0
              : a.shortTitle) && void 0 !== r
          ? r
          : t.slug.replace(/-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
      }
      function i(e, t) {
        let a = r.find((e) => e.path === t);
        return a ? l(e, a) : null;
      }
    },
  },
]);
