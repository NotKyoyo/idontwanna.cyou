! function(e) {
    function t(t) { for (var n, a, l = t[0], s = t[1], c = t[2], u = 0, f = []; u < l.length; u++) a = l[u], Object.prototype.hasOwnProperty.call(i, a) && i[a] && f.push(i[a][0]), i[a] = 0; for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]); for (d && d(t); f.length;) f.shift()(); return r.push.apply(r, c || []), o() }

    function o() {
        for (var e, t = 0; t < r.length; t++) {
            for (var o = r[t], n = !0, l = 1; l < o.length; l++) {
                var s = o[l];
                0 !== i[s] && (n = !1)
            }
            n && (r.splice(t--, 1), e = a(a.s = o[0]))
        }
        return e
    }
    var n = {},
        i = { 0: 0 },
        r = [];

    function a(t) { if (n[t]) return n[t].exports; var o = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(o.exports, o, o.exports, a), o.l = !0, o.exports }
    a.m = e, a.c = n, a.d = function(e, t, o) { a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, a.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(o, n, function(t) { return e[t] }.bind(null, n));
        return o
    }, a.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return a.d(t, "a", t), t }, a.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var d = s;
    r.push([1, 1]), o()
}([, function(e, t, o) {
    "use strict";

    function n(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function i(e) { return function(e) { if (Array.isArray(e)) return r(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function(e, t) { if (!e) return; if ("string" == typeof e) return r(e, t); var o = Object.prototype.toString.call(e).slice(8, -1); "Object" === o && e.constructor && (o = e.constructor.name); if ("Map" === o || "Set" === o) return Array.from(o); if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return r(e, t) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n
    }
    o.r(t);
    var a, l, s, c, d, u = (a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], l = function() {
        function e(t) {
            var o = t.targetModal,
                n = t.triggers,
                r = void 0 === n ? [] : n,
                a = t.onShow,
                l = void 0 === a ? function() {} : a,
                s = t.onClose,
                c = void 0 === s ? function() {} : s,
                d = t.openTrigger,
                u = void 0 === d ? "data-micromodal-trigger" : d,
                f = t.closeTrigger,
                h = void 0 === f ? "data-micromodal-close" : f,
                v = t.openClass,
                g = void 0 === v ? "is-open" : v,
                m = t.disableScroll,
                b = void 0 !== m && m,
                p = t.disableFocus,
                y = void 0 !== p && p,
                w = t.awaitCloseAnimation,
                k = void 0 !== w && w,
                E = t.awaitOpenAnimation,
                M = void 0 !== E && E,
                C = t.debugMode,
                A = void 0 !== C && C;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.modal = document.getElementById(o), this.config = { debugMode: A, disableScroll: b, openTrigger: u, closeTrigger: h, openClass: g, onShow: l, onClose: c, awaitCloseAnimation: k, awaitOpenAnimation: M, disableFocus: y }, r.length > 0 && this.registerTriggers.apply(this, i(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
        }
        var t, o, r;
        return t = e, (o = [{
            key: "registerTriggers",
            value: function() {
                for (var e = this, t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
                o.filter(Boolean).forEach((function(t) { t.addEventListener("click", (function(t) { return e.showModal(t) })) }))
            }
        }, {
            key: "showModal",
            value: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                    var o = function t() { e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode() };
                    this.modal.addEventListener("animationend", o, !1)
                } else this.setFocusToFirstNode();
                this.config.onShow(this.modal, this.activeElement, t)
            }
        }, {
            key: "closeModal",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this.modal;
                if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
                    var o = this.config.openClass;
                    this.modal.addEventListener("animationend", (function e() { t.classList.remove(o), t.removeEventListener("animationend", e, !1) }), !1)
                } else t.classList.remove(this.config.openClass)
            }
        }, { key: "closeModalById", value: function(e) { this.modal = document.getElementById(e), this.modal && this.closeModal() } }, {
            key: "scrollBehaviour",
            value: function(e) {
                if (this.config.disableScroll) {
                    var t = document.querySelector("body");
                    switch (e) {
                        case "enable":
                            Object.assign(t.style, { overflow: "" });
                            break;
                        case "disable":
                            Object.assign(t.style, { overflow: "hidden" })
                    }
                }
            }
        }, { key: "addEventListeners", value: function() { this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown) } }, { key: "removeEventListeners", value: function() { this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown) } }, { key: "onClick", value: function(e) { e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e) } }, { key: "onKeydown", value: function(e) { 27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e) } }, { key: "getFocusableNodes", value: function() { var e = this.modal.querySelectorAll(a); return Array.apply(void 0, i(e)) } }, {
            key: "setFocusToFirstNode",
            value: function() {
                var e = this;
                if (!this.config.disableFocus) {
                    var t = this.getFocusableNodes();
                    if (0 !== t.length) {
                        var o = t.filter((function(t) { return !t.hasAttribute(e.config.closeTrigger) }));
                        o.length > 0 && o[0].focus(), 0 === o.length && t[0].focus()
                    }
                }
            }
        }, {
            key: "retainFocus",
            value: function(e) {
                var t = this.getFocusableNodes();
                if (0 !== t.length)
                    if (t = t.filter((function(e) { return null !== e.offsetParent })), this.modal.contains(document.activeElement)) {
                        var o = t.indexOf(document.activeElement);
                        e.shiftKey && 0 === o && (t[t.length - 1].focus(), e.preventDefault()), !e.shiftKey && t.length > 0 && o === t.length - 1 && (t[0].focus(), e.preventDefault())
                    } else t[0].focus()
            }
        }]) && n(t.prototype, o), r && n(t, r), e
    }(), s = null, c = function(e) { if (!document.getElementById(e)) return console.warn("MicroModal: â—Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1 }, d = function(e, t) { if (function(e) { e.length <= 0 && (console.warn("MicroModal: â—Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>')) }(e), !t) return !0; for (var o in t) c(o); return !0 }, {
        init: function(e) {
            var t = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e),
                o = i(document.querySelectorAll("[".concat(t.openTrigger, "]"))),
                n = function(e, t) {
                    var o = [];
                    return e.forEach((function(e) {
                        var n = e.attributes[t].value;
                        void 0 === o[n] && (o[n] = []), o[n].push(e)
                    })), o
                }(o, t.openTrigger);
            if (!0 !== t.debugMode || !1 !== d(o, n))
                for (var r in n) {
                    var a = n[r];
                    t.targetModal = r, t.triggers = i(a), s = new l(t)
                }
        },
        show: function(e, t) {
            var o = t || {};
            o.targetModal = e, !0 === o.debugMode && !1 === c(e) || (s && s.removeEventListeners(), (s = new l(o)).showModal())
        },
        close: function(e) { e ? s.closeModalById(e) : s.closeModal() }
    });
    window.MicroModal = u;
    var f = u;
    o(0), f.init({ onShow: e => { fbq("trackCustom", "WhatIsIt"), gtag("event", "WhatIsIt") }, openTrigger: "data-micromodal-trigger", closeTrigger: "data-custom-close", disableScroll: !0, disableFocus: !0, awaitOpenAnimation: !1, awaitCloseAnimation: !1, debugMode: !1 }), document.querySelector("#copy-link").addEventListener("click", (function(e) { console.log(window.location.href), fbq("trackCustom", "URICopied"), gtag("event", "URICopied"), e.preventDefault(), navigator.clipboard.writeText(window.location.href.replace(/^http.?:\/\/(.*)\/$/, "$1")) }))
}]);
//# sourceMappingURL=index.868c13d7d774c8635cce.js.map