"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(r, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 1);
}([function (t, e, n) {
  /*! lozad.js - v1.9.0 - 2019-02-09
  * https://github.com/ApoorvSaxena/lozad.js
  * Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
  t.exports = function () {
    "use strict";

    var t = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        e = "undefined" != typeof document && document.documentMode,
        n = {
      rootMargin: "0px",
      threshold: 0,
      load: function load(t) {
        if ("picture" === t.nodeName.toLowerCase()) {
          var n = document.createElement("img");
          e && t.getAttribute("data-iesrc") && (n.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (n.alt = t.getAttribute("data-alt")), t.appendChild(n);
        }

        if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
          for (var r = t.children, o = void 0, a = 0; a <= r.length - 1; a++) {
            (o = r[a].getAttribute("data-src")) && (r[a].src = o);
          }

          t.load();
        }

        t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"), t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
      },
      loaded: function loaded() {}
    };

    function r(t) {
      t.setAttribute("data-loaded", !0);
    }

    var o = function o(t) {
      return "true" === t.getAttribute("data-loaded");
    };

    return function () {
      var e,
          a,
          i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
          c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          d = t({}, n, c),
          u = d.root,
          s = d.rootMargin,
          l = d.threshold,
          g = d.load,
          f = d.loaded,
          b = void 0;
      return window.IntersectionObserver && (b = new IntersectionObserver((e = g, a = f, function (t, n) {
        t.forEach(function (t) {
          (0 < t.intersectionRatio || t.isIntersecting) && (n.unobserve(t.target), o(t.target) || (e(t.target), r(t.target), a(t.target)));
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
            o(t[e]) || (b ? b.observe(t[e]) : (g(t[e]), r(t[e]), f(t[e])));
          }
        },
        triggerLoad: function triggerLoad(t) {
          o(t) || (g(t), r(t), f(t));
        },
        observer: b
      };
    };
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(0),
      o = n.n(r);

  function a(t, e) {
    t.classList.toggle(e);
  }

  !function () {
    var t = o()(".lozad", {
      load: function load(t) {
        t.src = t.dataset.src, t.onload = function () {
          t.classList.add("opacity-100"), t.nextElementSibling.classList.add("opacity-0");
        };
      },
      rootMargin: "10px 0px",
      threshold: .1
    });
    t.observe();
    var e = document.querySelector(".lozad");
    t.triggerLoad(e);
  }(), window.onload = function () {
    var t = document.getElementsByTagName("body")[0],
        e = document.getElementById("menu-toggle"),
        n = document.getElementById("menu");
    e.addEventListener("click", function (t) {
      a(n, "hidden"), a(e, "opened"), t.stopPropagation();
    }), t.addEventListener("click", function (t) {
      e.classList.contains("opened") && (n.classList.add("hidden"), e.classList.remove("opened"));
    });
    var r = document.querySelectorAll("[data-hp-image]").complete;
    console.log(r), r.onload = function () {
      alert("test");
    };
  };
}]);