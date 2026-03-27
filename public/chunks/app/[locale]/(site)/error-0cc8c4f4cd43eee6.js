(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [172],
  {
    5301: function (e, n, r) {
      Promise.resolve().then(r.bind(r, 7686));
    },
    7686: function (e, n, r) {
      "use strict";
      r.r(n);
      var t = r(4336);
      function o(e) {
        let { statusCode: n } = e;
        return (0, t.jsx)("p", {
          children: n
            ? "An error ".concat(n, " occurred on server")
            : "An error occurred on client",
        });
      }
      ((o.getInitialProps = (e) => {
        let { res: n, err: r } = e;
        return { statusCode: n ? n.statusCode : r ? r.statusCode : 404 };
      }),
        (n.default = o));
    },
  },
  function (e) {
    (e.O(0, [2800, 4722, 1744], function () {
      return e((e.s = 5301));
    }),
      (_N_E = e.O()));
  },
]);
