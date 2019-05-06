"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var o = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      r.d(n, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 1);
}([function (t, e, r) {
  /*! lozad.js - v1.9.0 - 2019-02-09
  * https://github.com/ApoorvSaxena/lozad.js
  * Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
  t.exports = function () {
    "use strict";

    var t = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
      }

      return t;
    },
        e = "undefined" != typeof document && document.documentMode,
        r = {
      rootMargin: "0px",
      threshold: 0,
      load: function load(t) {
        if ("picture" === t.nodeName.toLowerCase()) {
          var r = document.createElement("img");
          e && t.getAttribute("data-iesrc") && (r.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (r.alt = t.getAttribute("data-alt")), t.appendChild(r);
        }

        if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
          for (var n = t.children, o = void 0, a = 0; a <= n.length - 1; a++) {
            (o = n[a].getAttribute("data-src")) && (n[a].src = o);
          }

          t.load();
        }

        t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
      },
      loaded: function loaded() {}
    };

    function n(t) {
      t.setAttribute("data-loaded", !0);
    }

    var o = function o(t) {
      return "true" === t.getAttribute("data-loaded");
    };

    return function () {
      var e,
          a,
          i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
          d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          c = t({}, r, d),
          u = c.root,
          s = c.rootMargin,
          l = c.threshold,
          g = c.load,
          f = c.loaded,
          b = void 0;
      return window.IntersectionObserver && (b = new IntersectionObserver((e = g, a = f, function (t, r) {
        t.forEach(function (t) {
          (0 < t.intersectionRatio || t.isIntersecting) && (r.unobserve(t.target), o(t.target) || (e(t.target), n(t.target), a(t.target)));
        });
      }), {
        root: u,
        rootMargin: s,
        threshold: l
      })), {
        observe: function observe() {
          for (var t = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
            return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
          }(i, u), e = 0; e < t.length; e++) {
            o(t[e]) || (b ? b.observe(t[e]) : (g(t[e]), n(t[e]), f(t[e])));
          }
        },
        triggerLoad: function triggerLoad(t) {
          o(t) || (g(t), n(t), f(t));
        },
        observer: b
      };
    };
  }();
}, function (t, e, r) {
  "use strict";

  r.r(e);
  var n = r(0);

  function o(t, e) {
    t.classList.toggle(e);
  }

  r.n(n)()(".lozad", {
    load: function load(t) {
      t.src = t.dataset.src, t.onload = function () {
        t.classList.add("opacity-100"), t.nextElementSibling.classList.add("opacity-0");
      };
    },
    rootMargin: "10px 0px",
    threshold: .1
  }).observe(), window.onload = function () {
    var t = document.getElementsByTagName("body")[0],
        e = document.getElementById("menu-toggle"),
        r = document.getElementById("menu");
    e.addEventListener("click", function (t) {
      o(r, "hidden"), o(e, "opened"), t.stopPropagation();
    }), t.addEventListener("click", function (t) {
      e.classList.contains("opened") && (r.classList.add("hidden"), e.classList.remove("opened"));
    });
  };
}]);