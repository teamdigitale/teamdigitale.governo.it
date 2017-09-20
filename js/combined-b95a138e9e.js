/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if (! function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = oe.type(e);
            return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
}

        function i(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
});
            if (t.nodeType) return oe.grep(e, function (e) {
                return e === t !== n
});
            if ("string" == typeof t) {
                if (pe.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
}
            return oe.grep(e, function (e) {
                return oe.inArray(e, t) >= 0 !== n
})
}

        function o(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
}

        function r(e) {
            var t = xe[e] = {};
            return oe.each(e.match(be) || [], function (e, n) {
                t[n] = !0
}), t
}

        function a() {
            he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
}

        function s() {
            (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), oe.ready())
}

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n
} catch (o) { }
                    oe.data(e, t, n)
} else n = void 0
}
            return n
}

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
}

        function u(e, t, n, i) {
            if (oe.acceptData(e)) {
                var o, r, a = oe.expando,
                    s = e.nodeType,
                    l = s ? oe.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = Q.pop() || oe.guid++ : a), l[c] || (l[c] = s ? {} : {
    toJSON: oe.noop
}), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = oe.extend(l[c], t) : l[c].data = oe.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[oe.camelCase(t)])) : o = r, o
}
}

        function d(e, t, n) {
            if (oe.acceptData(e)) {
                var i, o, r = e.nodeType,
                    a = r ? oe.cache : e,
                    s = r ? e[oe.expando] : oe.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !c(i) : !oe.isEmptyObject(i)) return
} (n || (delete a[s].data, c(a[s]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
}
}
}

        function p() {
            return !0
}

        function f() {
            return !1
}

        function h() {
            try {
                return he.activeElement
} catch (e) { }
}

        function g(e) {
            var t = He.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
}

        function m(e, t) {
            var n, i, o = 0,
                r = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]) ; o++) !t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, m(i, t));
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
}

        function v(e) {
            De.test(e.type) && (e.defaultChecked = e.checked)
}

        function y(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
}

        function b(e) {
            return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
}

        function x(e) {
            var t = Ve.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
}

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]) ; i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
}

        function T(e, t) {
            if (1 === t.nodeType && oe.hasData(e)) {
                var n, i, o, r = oe._data(e),
                    a = oe._data(t, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) oe.event.add(t, n, s[n][i])
}
                a.data && (a.data = oe.extend({}, a.data))
}
}

        function C(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                    o = oe._data(t);
                    for (i in o.events) oe.removeEvent(t, i, o.handle);
                    t.removeAttribute(oe.expando)
}
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
}
}

        function k(t, n) {
            var i, o = oe(n.createElement(t)).appendTo(n.body),
                r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
            return o.detach(), r
}

        function E(e) {
            var t = he,
                n = Ze[e];
            return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ke.detach()), Ze[e] = n), n
}

        function N(e, t) {
            return {
    get: function () {
                    var n = e();
                    return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
}
}
}

        function S(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pt.length; o--;)
                if (t = pt[o] + n, t in e) return t;
            return i
}

        function $(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = oe._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (r[a] = oe._data(i, "olddisplay", E(i.nodeName)))) : (o = $e(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
}

        function A(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
}

        function D(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += oe.css(e, n + Se[r], !0, o)), i ? ("content" === n && (a -= oe.css(e, "padding" + Se[r], !0, o)), "margin" !== n && (a -= oe.css(e, "border" + Se[r] + "Width", !0, o))) : (a += oe.css(e, "padding" + Se[r], !0, o), "padding" !== n && (a += oe.css(e, "border" + Se[r] + "Width", !0, o)));
            return a
}

        function j(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = et(e),
                a = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
                i = a && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
}
            return o + D(e, t, n || (a ? "border" : "content"), i, r) + "px"
}

        function O(e, t, n, i, o) {
            return new O.prototype.init(e, t, n, i, o)
}

        function L() {
            return setTimeout(function () {
                ft = void 0
}), ft = oe.now()
}

        function P(e, t) {
            var n, i = {
    height: e
},
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Se[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
}

        function I(e, t, n) {
            for (var i, o = (bt[t] || []).concat(bt["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, t, e)) return i
}

        function H(e, t, n) {
            var i, o, r, a, s, l, c, u, d = this,
                p = {},
                f = e.style,
                h = e.nodeType && $e(e),
                g = oe._data(e, "fxshow");
            n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
}), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
})
})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), u = "none" === c ? oe._data(e, "olddisplay") || E(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
}));
            for (i in t)
                if (o = t[i], gt.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        h = !0
}
                    p[i] = g && g[i] || oe.style(e, i)
} else c = void 0;
            if (oe.isEmptyObject(p)) "inline" === ("none" === c ? E(e.nodeName) : c) && (f.display = c);
else {
                g ? "hidden" in g && (h = g.hidden) : g = oe._data(e, "fxshow", {}), r && (g.hidden = !h), h ? oe(e).show() : d.done(function () {
                    oe(e).hide()
}), d.done(function () {
                    var t;
                    oe._removeData(e, "fxshow");
                    for (t in p) oe.style(e, t, p[t])
});
                for (i in p) a = I(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
}
}

        function _(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = oe.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
} else t[i] = o
}

        function F(e, t, n) {
            var i, o, r = 0,
                a = yt.length,
                s = oe.Deferred().always(function () {
                    delete l.elem
}),
                l = function () {
                    if (o) return !1;
                    for (var t = ft || L(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
},
                c = s.promise({
    elem: e,
    props: oe.extend({}, t),
    opts: oe.extend(!0, {
    specialEasing: {}
}, n),
    originalProperties: t,
    originalOptions: n,
    startTime: ft || L(),
    duration: n.duration,
    tweens: [],
    createTween: function (t, n) {
                        var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
},
    stop: function (t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
}
}),
                u = c.props;
            for (_(u, c.opts.specialEasing) ; a > r; r++)
                if (i = yt[r].call(c, e, u, c.opts)) return i;
            return oe.map(u, I, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
    elem: e,
    anim: c,
    queue: c.opts.queue
})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
}

        function R(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(be) || [];
                if (oe.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
}
}

        function q(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, oe.each(e[s] || [], function (e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
}), l
}
            var r = {},
                a = e === Mt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
}

        function B(e, t) {
            var n, i, o = oe.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && oe.extend(!0, e, n), e
}

        function W(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
                for (a in s)
                    if (s[a] && s[a].test(o)) {
                        l.unshift(a);
                        break
}
            if (l[0] in n) r = l[0];
else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        r = a;
                        break
}
                    i || (i = a)
}
                r = r || i
}
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
}

        function M(e, t, n, i) {
            var o, r, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (r = u.shift() ; r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
else if ("*" !== l && l !== r) {
                if (a = c[l + " " + r] || c["* " + r], !a)
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
                            break
}
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
else try {
                        t = a(t)
} catch (d) {
                        return {
    state: "parsererror",
    error: a ? d : "No conversion from " + l + " to " + r
}
}
}
            return {
    state: "success",
    data: t
}
}

        function z(e, t, n, i) {
            var o;
            if (oe.isArray(t)) oe.each(t, function (t, o) {
                n || Vt.test(e) ? i(e, o) : z(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
});
else if (n || "object" !== oe.type(t)) i(e, t);
else
                for (o in t) z(e + "[" + o + "]", t[o], n, i)
}

        function U() {
            try {
                return new e.XMLHttpRequest
} catch (t) { }
}

        function X() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
} catch (t) { }
}

        function V(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
}
        var Q = [],
            J = Q.slice,
            G = Q.concat,
            Y = Q.push,
            K = Q.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = {},
            ie = "1.11.3",
            oe = function (e, t) {
                return new oe.fn.init(e, t)
},
            re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            se = /-([\da-z])/gi,
            le = function (e, t) {
                return t.toUpperCase()
};
        oe.fn = oe.prototype = {
    jquery: ie,
    constructor: oe,
    selector: "",
    length: 0,
    toArray: function () {
                return J.call(this)
},
    get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
},
    pushStack: function (e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
},
    each: function (e, t) {
                return oe.each(this, e, t)
},
    map: function (e) {
                return this.pushStack(oe.map(this, function (t, n) {
                    return e.call(t, n, t)
}))
},
    slice: function () {
                return this.pushStack(J.apply(this, arguments))
},
    first: function () {
                return this.eq(0)
},
    last: function () {
                return this.eq(-1)
},
    eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
},
    end: function () {
                return this.prevObject || this.constructor(null)
},
    push: Y,
    sort: Q.sort,
    splice: Q.splice
}, oe.extend = oe.fn.extend = function () {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--) ; l > s; s++)
                if (null != (o = arguments[s]))
                    for (i in o) e = a[i], n = o[i], a !== n && (c && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, r = e && oe.isArray(e) ? e : []) : r = e && oe.isPlainObject(e) ? e : {}, a[i] = oe.extend(c, r, n)) : void 0 !== n && (a[i] = n));
            return a
}, oe.extend({
    expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
                throw new Error(e)
},
    noop: function () { },
    isFunction: function (e) {
                return "function" === oe.type(e)
},
    isArray: Array.isArray || function (e) {
                return "array" === oe.type(e)
},
    isWindow: function (e) {
                return null != e && e == e.window
},
    isNumeric: function (e) {
                return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
},
    isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
},
    isPlainObject: function (e) {
                var t;
                if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
} catch (n) {
                    return !1
}
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
},
    type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
},
    globalEval: function (t) {
                t && oe.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
})(t)
},
    camelCase: function (e) {
                return e.replace(ae, "ms-").replace(se, le)
},
    nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
},
    each: function (e, t, i) {
                var o, r = 0,
                    a = e.length,
                    s = n(e);
                if (i) {
                    if (s)
                        for (; a > r && (o = t.apply(e[r], i), o !== !1) ; r++);
else
                        for (r in e)
                            if (o = t.apply(e[r], i), o === !1) break
} else if (s)
                    for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1) ; r++);
else
                    for (r in e)
                        if (o = t.call(e[r], r, e[r]), o === !1) break; return e
},
    trim: function (e) {
                return null == e ? "" : (e + "").replace(re, "")
},
    makeArray: function (e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
},
    inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (K) return K.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
}
                return -1
},
    merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[o++] = t[i++];
                return e.length = o, e
},
    grep: function (e, t, n) {
                for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
                return o
},
    map: function (e, t, i) {
                var o, r = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > r; r++) o = t(e[r], r, i), null != o && l.push(o);
else
                    for (r in e) o = t(e[r], r, i), null != o && l.push(o);
                return G.apply([], l)
},
    guid: 1,
    proxy: function (e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = J.call(arguments, 2), i = function () {
                    return e.apply(t || this, n.concat(J.call(arguments)))
}, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
},
    now: function () {
                return +new Date
},
    support: ne
}), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
});
        var ce = function (e) {
            function t(e, t, n, i) {
                var o, r, a, s, l, c, d, f, h, g;
                if ((t ? t.ownerDocument || t : q) !== O && j(t), t = t || O, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && P) {
                    if (11 !== s && (o = ye.exec(e)))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
} else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && F(t, r) && r.id === a) return n.push(r), n
} else {
                            if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
}
                    if (w.qsa && (!I || !I.test(e))) {
                        if (f = d = R, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = E(e), (d = t.getAttribute("id")) ? f = d.replace(xe, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                            h = be.test(e) && u(t.parentNode) || t, g = c.join(",")
}
                        if (g) try {
                            return K.apply(n, h.querySelectorAll(g)), n
} catch (m) { } finally {
                            d || t.removeAttribute("id")
}
}
}
                return S(e.replace(le, "$1"), t, n, i)
}

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
}
                var t = [];
                return e
}

            function i(e) {
                return e[R] = !0, e
}

            function o(e) {
                var t = O.createElement("div");
                try {
                    return !!e(t)
} catch (n) {
                    return !1
} finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
}
}

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
}

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
}

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
}
}

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
}
}

            function c(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
})
})
}

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
}

            function d() { }

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
}

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = W++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
} : function (t, n, a) {
                    var s, l, c = [B, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
} else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (l = t[R] || (t[R] = {}), (s = l[i]) && s[0] === B && s[1] === r) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, a)) return !0
}
}
}

            function h(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
} : e[0]
}

            function g(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
}

            function m(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
                return a
}

            function v(e, t, n, o, r, a) {
                return o && !o[R] && (o = v(o)), r && !r[R] && (r = v(r, a)), i(function (i, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        v = i || g(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : m(v, p, e, s, l),
                        b = n ? r || (i ? e : h || o) ? [] : a : y;
                    if (n && n(y, b, s, l), o)
                        for (c = m(b, f), o(c, [], s, l), u = c.length; u--;) (d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = b.length; u--;) (d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
}
                            for (u = b.length; u--;) (d = b[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
}
} else b = m(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : K.apply(a, b)
})
}

            function y(e) {
                for (var t, n, i, o = e.length, r = T.relative[e[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = f(function (e) {
                        return e === t
}, a, !0), c = f(function (e) {
                        return ee(t, e) > -1
}, a, !0), u = [function (e, n, i) {
                        var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, o
}]; o > s; s++)
                    if (n = T.relative[e[s].type]) u = [f(h(u), n)];
else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (i = ++s; o > i && !T.relative[e[i].type]; i++);
                            return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
    value: " " === e[s - 2].type ? "*" : ""
})).replace(le, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && p(e))
}
                        u.push(n)
}
                return h(u)
}

            function b(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function (i, a, s, l, c) {
                        var u, d, p, f = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = $,
                            b = i || r && T.find.TAG("*", c),
                            x = B += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && ($ = a !== O && a) ; h !== w && null != (u = b[h]) ; h++) {
                            if (r && u) {
                                for (d = 0; p = e[d++];)
                                    if (p(u, a, s)) {
                                        l.push(u);
                                        break
}
                                c && (B = x)
}
                            o && ((u = !p && u) && f--, i && g.push(u))
}
                        if (f += h, o && h !== f) {
                            for (d = 0; p = n[d++];) p(g, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = G.call(l));
                                v = m(v)
}
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
}
                        return c && (B = x, $ = y), g
};
                return o ? i(a) : a
}
            var x, w, T, C, k, E, N, S, $, A, D, j, O, L, P, I, H, _, F, R = "sizzle" + 1 * new Date,
                q = e.document,
                B = 0,
                W = 0,
                M = n(),
                z = n(),
                U = n(),
                X = function (e, t) {
                    return e === t && (D = !0), 0
},
                V = 1 << 31,
                Q = {}.hasOwnProperty,
                J = [],
                G = J.pop,
                Y = J.push,
                K = J.push,
                Z = J.slice,
                ee = function (e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
},
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = ie.replace("w", "w#"),
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ce = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(ae),
                fe = new RegExp("^" + oe + "$"),
                he = {
    ID: new RegExp("^#(" + ie + ")"),
    CLASS: new RegExp("^\\.(" + ie + ")"),
    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
    ATTR: new RegExp("^" + re),
    PSEUDO: new RegExp("^" + ae),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + te + ")$", "i"),
    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
},
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Te = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
},
                Ce = function () {
                    j()
};
            try {
                K.apply(J = Z.call(q.childNodes), q.childNodes), J[q.childNodes.length].nodeType
} catch (ke) {
                K = {
    apply: J.length ? function (e, t) {
                        Y.apply(e, Z.call(t))
} : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
}
}
}
            w = t.support = {}, k = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
}, j = t.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : q;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, L = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), P = !k(i), w.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
}), w.getElementsByTagName = o(function (e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
}), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = o(function (e) {
                    return L.appendChild(e).id = R, !i.getElementsByName || !i.getElementsByName(R).length
}), w.getById ? (T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
}
}, T.filter.ID = function (e) {
                    var t = e.replace(we, Te);
                    return function (e) {
                        return e.getAttribute("id") === t
}
}) : (delete T.find.ID, T.filter.ID = function (e) {
                    var t = e.replace(we, Te);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
}
}), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
} : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
}
                    return r
}, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                    return P ? t.getElementsByClassName(e) : void 0
}, H = [], I = [], (w.qsa = ve.test(i.querySelectorAll)) && (o(function (e) {
                    L.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || I.push(".#.+[+~]")
}), o(function (e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
})), (w.matchesSelector = ve.test(_ = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (e) {
                    w.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), H.push("!=", ae)
}), I = I.length && new RegExp(I.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(L.compareDocumentPosition), F = t || ve.test(L.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
} : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
}, X = t ? function (e, t) {
                    if (e === t) return D = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === q && F(q, e) ? -1 : t === i || t.ownerDocument === q && F(q, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
} : function (e, t) {
                    if (e === t) return D = !0, 0;
                    var n, o = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        c = [t];
                    if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (r === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? a(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
}, i) : O
}, t.matches = function (e, n) {
                return t(e, null, null, n)
}, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== O && j(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !P || H && H.test(n) || I && I.test(n))) try {
                    var i = _.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
} catch (o) { }
                return t(n, O, null, [e]).length > 0
}, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== O && j(e), F(e, t)
}, t.attr = function (e, t) {
                (e.ownerDocument || e) !== O && j(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
}, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
}, t.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (D = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(X), D) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
}
                return A = null, e
}, C = t.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
} else if (3 === o || 4 === o) return e.nodeValue
} else
                    for (; t = e[i++];) n += C(t);
                return n
}, T = t.selectors = {
    cacheLength: 50,
    createPseudo: i,
    match: he,
    attrHandle: {},
    find: {},
    relative: {
                    ">": {
    dir: "parentNode",
    first: !0
},
                    " ": {
    dir: "parentNode"
},
                    "+": {
    dir: "previousSibling",
    first: !0
},
                    "~": {
    dir: "previousSibling"
}
},
    preFilter: {
    ATTR: function (e) {
                        return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
},
    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
},
    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
}
},
    filter: {
    TAG: function (e) {
                        var t = e.replace(we, Te).toLowerCase();
                        return "*" === e ? function () {
                            return !0
} : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
}
},
    CLASS: function (e) {
                        var t = M[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && M(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
})
},
    ATTR: function (e, n, i) {
                        return function (o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
}
},
    CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
} : function (t, n, l) {
                            var c, u, d, p, f, h, g = r !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
}
                                    return !0
}
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (u = m[R] || (m[R] = {}), c = u[e] || [], f = c[0] === B && c[1], p = c[0] === B && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop() ;)
                                        if (1 === d.nodeType && ++p && d === t) {
                                            u[e] = [B, f, p];
                                            break
}
} else if (y && (c = (t[R] || (t[R] = {}))[e]) && c[0] === B) p = c[1];
else
                                    for (;
                                        (d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[R] || (d[R] = {}))[e] = [B, p]), d !== t)) ;);
                                return p -= o, p === i || p % i === 0 && p / i >= 0
}
}
},
    PSEUDO: function (e, n) {
                        var o, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[R] ? r(n) : r.length > 1 ? (o = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
}) : function (e) {
                            return r(e, 0, o)
}) : r
}
},
    pseudos: {
    not: i(function (e) {
                        var t = [],
                            n = [],
                            o = N(e.replace(le, "$1"));
                        return o[R] ? i(function (e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;) (r = a[s]) && (e[s] = !(t[s] = r))
}) : function (e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
}
}),
    has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
}
}),
    contains: i(function (e) {
                        return e = e.replace(we, Te),
                            function (t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
}
}),
    lang: i(function (e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
}
}),
    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
},
    root: function (e) {
                        return e === L
},
    focus: function (e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
},
    enabled: function (e) {
                        return e.disabled === !1
},
    disabled: function (e) {
                        return e.disabled === !0
},
    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
},
    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
},
    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
},
    parent: function (e) {
                        return !T.pseudos.empty(e)
},
    header: function (e) {
                        return me.test(e.nodeName)
},
    input: function (e) {
                        return ge.test(e.nodeName)
},
    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
},
    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
},
    first: c(function () {
                        return [0]
}),
    last: c(function (e, t) {
                        return [t - 1]
}),
    eq: c(function (e, t, n) {
                        return [0 > n ? n + t : n]
}),
    even: c(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
}),
    odd: c(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
}),
    lt: c(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
}),
    gt: c(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
})
}
}, T.pseudos.nth = T.pseudos.eq;
            for (x in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
}) T.pseudos[x] = s(x);
            for (x in {
    submit: !0,
    reset: !0
}) T.pseudos[x] = l(x);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function (e, n) {
                var i, o, r, a, s, l, c, u = z[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = T.preFilter; s;) {
                    (!i || (o = ce.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ue.exec(s)) && (i = o.shift(), r.push({
    value: i,
    type: o[0].replace(le, " ")
}), s = s.slice(i.length));
                    for (a in T.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(),
                        r.push({
    value: i,
    type: a,
    matches: o
}), s = s.slice(i.length));
                    if (!i) break
}
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
}, N = t.compile = function (e, t) {
                var n, i = [],
                    o = [],
                    r = U[e + " "];
                if (!r) {
                    for (t || (t = E(e)), n = t.length; n--;) r = y(t[n]), r[R] ? i.push(r) : o.push(r);
                    r = U(e, b(o, i)), r.selector = e
}
                return r
}, S = t.select = function (e, t, n, i) {
                var o, r, a, s, l, c = "function" == typeof e && e,
                    d = !i && E(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && P && T.relative[r[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length)
}
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !T.relative[s = a.type]) ;)
                        if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, Te), be.test(r[0].type) && u(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && p(r), !e) return K.apply(n, i), n;
                            break
}
}
                return (c || N(e, d))(i, t, !P, n, be.test(e) && u(t.parentNode) || t), n
}, w.sortStable = R.split("").sort(X).join("") === R, w.detectDuplicates = !!D, j(), w.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(O.createElement("div"))
}), o(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
}) || r("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
}), w.attributes && o(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
}) || r("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
}), o(function (e) {
                return null == e.getAttribute("disabled")
}) || r(te, function (e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
}), t
}(e);
        oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
        var ue = oe.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pe = /^.[^:#\[\.,]*$/;
        oe.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
                return 1 === e.nodeType
}))
}, oe.fn.extend({
    find: function (e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                    for (t = 0; o > t; t++)
                        if (oe.contains(i[t], this)) return !0
}));
                for (t = 0; o > t; t++) oe.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
},
    filter: function (e) {
                return this.pushStack(i(this, e || [], !1))
},
    not: function (e) {
                return this.pushStack(i(this, e || [], !0))
},
    is: function (e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? oe(e) : e || [], !1).length
}
});
        var fe, he = e.document,
            ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            me = oe.fn.init = function (e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && oe.isPlainObject(t))
                            for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
}
                    if (i = he.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return fe.find(e);
                        this.length = 1, this[0] = i
}
                    return this.context = he, this.selector = e, this
}
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
};
        me.prototype = oe.fn, fe = oe(he);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
};
        oe.extend({
    dir: function (e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n)) ;) 1 === o.nodeType && i.push(o), o = o[t];
                return i
},
    sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
}
}), oe.fn.extend({
    has: function (e) {
                var t, n = oe(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)
                        if (oe.contains(this, n[t])) return !0
})
},
    closest: function (e, t) {
                for (var n, i = 0, o = this.length, r = [], a = ue.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
}
                return this.pushStack(r.length > 1 ? oe.unique(r) : r)
},
    index: function (e) {
                return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
},
    add: function (e, t) {
                return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
},
    addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
}
}), oe.each({
    parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
},
    parents: function (e) {
                return oe.dir(e, "parentNode")
},
    parentsUntil: function (e, t, n) {
                return oe.dir(e, "parentNode", n)
},
    next: function (e) {
                return o(e, "nextSibling")
},
    prev: function (e) {
                return o(e, "previousSibling")
},
    nextAll: function (e) {
                return oe.dir(e, "nextSibling")
},
    prevAll: function (e) {
                return oe.dir(e, "previousSibling")
},
    nextUntil: function (e, t, n) {
                return oe.dir(e, "nextSibling", n)
},
    prevUntil: function (e, t, n) {
                return oe.dir(e, "previousSibling", n)
},
    siblings: function (e) {
                return oe.sibling((e.parentNode || {}).firstChild, e)
},
    children: function (e) {
                return oe.sibling(e.firstChild)
},
    contents: function (e) {
                return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
}
}, function (e, t) {
            oe.fn[e] = function (n, i) {
                var o = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
}
});
        var be = /\S+/g,
            xe = {};
        oe.Callbacks = function (e) {
            e = "string" == typeof e ? xe[e] || r(e) : oe.extend({}, e);
            var t, n, i, o, a, s, l = [],
                c = !e.once && [],
                u = function (r) {
                    for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
                        if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
}
                    t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
},
                d = {
    add: function () {
                        if (l) {
                            var i = l.length;
                            ! function r(t) {
                                oe.each(t, function (t, n) {
                                    var i = oe.type(n);
                                    "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
})
}(arguments), t ? o = l.length : n && (s = i, u(n))
}
                        return this
},
    remove: function () {
                        return l && oe.each(arguments, function (e, n) {
                            for (var i;
                                (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
}), this
},
    has: function (e) {
                        return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
},
    empty: function () {
                        return l = [], o = 0, this
},
    disable: function () {
                        return l = c = n = void 0, this
},
    disabled: function () {
                        return !l
},
    lock: function () {
                        return c = void 0, n || d.disable(), this
},
    locked: function () {
                        return !c
},
    fireWith: function (e, n) {
                        return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
},
    fire: function () {
                        return d.fireWith(this, arguments), this
},
    fired: function () {
                        return !!i
}
};
            return d
}, oe.extend({
    Deferred: function (e) {
                var t = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
],
                    n = "pending",
                    i = {
    state: function () {
                            return n
},
    always: function () {
                            return o.done(arguments).fail(arguments), this
},
    then: function () {
                            var e = arguments;
                            return oe.Deferred(function (n) {
                                oe.each(t, function (t, r) {
                                    var a = oe.isFunction(e[t]) && e[t];
                                    o[r[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
})
}), e = null
}).promise()
},
    promise: function (e) {
                            return null != e ? oe.extend(e, i) : i
}
},
                    o = {};
                return i.pipe = i.then, oe.each(t, function (e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function () {
                        n = s
}, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
}, o[r[0] + "With"] = a.fireWith
}), i.promise(o), e && e.call(o, o), o
},
    when: function (e) {
                var t, n, i, o = 0,
                    r = J.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : oe.Deferred(),
                    c = function (e, n, i) {
                        return function (o) {
                            n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
}
};
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a) ; a > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
                return s || l.resolveWith(i, r), l.promise()
}
});
        var we;
        oe.fn.ready = function (e) {
            return oe.ready.promise().done(e), this
}, oe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
                e ? oe.readyWait++ : oe.ready(!0)
},
    ready: function (e) {
                if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                    if (!he.body) return setTimeout(oe.ready);
                    oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
}
}
}), oe.ready.promise = function (t) {
            if (!we)
                if (we = oe.Deferred(), "complete" === he.readyState) setTimeout(oe.ready);
else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
else {
                he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && he.documentElement
} catch (i) { }
                n && n.doScroll && ! function o() {
                    if (!oe.isReady) {
                        try {
                            n.doScroll("left")
} catch (e) {
                            return setTimeout(o, 50)
}
                        a(), oe.ready()
}
}()
}
            return we.promise(t)
};
        var Te, Ce = "undefined";
        for (Te in oe(ne)) break;
        ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, oe(function () {
                var e, t, n, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
}),
            function () {
                var e = he.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test
} catch (t) {
                        ne.deleteExpando = !1
}
}
                e = null
}(), oe.acceptData = function (e) {
                var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
};
        var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /([A-Z])/g;
        oe.extend({
    cache: {},
    noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
    hasData: function (e) {
                return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !c(e)
},
    data: function (e, t, n) {
                return u(e, t, n)
},
    removeData: function (e, t) {
                return d(e, t)
},
    _data: function (e, t, n) {
                return u(e, t, n, !0)
},
    _removeData: function (e, t) {
                return d(e, t, !0)
}
}), oe.fn.extend({
    data: function (e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                        oe._data(r, "parsedAttrs", !0)
}
                    return o
}
                return "object" == typeof e ? this.each(function () {
                    oe.data(this, e)
}) : arguments.length > 1 ? this.each(function () {
                    oe.data(this, e, t)
}) : r ? l(r, e, oe.data(r, e)) : void 0
},
    removeData: function (e) {
                return this.each(function () {
                    oe.removeData(this, e)
})
}
}), oe.extend({
    queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
},
    dequeue: function (e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = oe._queueHooks(e, t),
                    a = function () {
                        oe.dequeue(e, t)
};
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
},
    _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return oe._data(e, n) || oe._data(e, n, {
    empty: oe.Callbacks("once memory").add(function () {
                        oe._removeData(e, t + "queue"), oe._removeData(e, n)
})
})
}
}), oe.fn.extend({
    queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
})
},
    dequeue: function (e) {
                return this.each(function () {
                    oe.dequeue(this, e)
})
},
    clearQueue: function (e) {
                return this.queue(e || "fx", [])
},
    promise: function (e, t) {
                var n, i = 1,
                    o = oe.Deferred(),
                    r = this,
                    a = this.length,
                    s = function () {
                        --i || o.resolveWith(r, [r])
};
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = oe._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
}
});
        var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            $e = function (e, t) {
                return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
},
            Ae = oe.access = function (e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === oe.type(n)) {
                    o = !0;
                    for (s in n) oe.access(e, t, s, n[s], !0, r, a)
} else if (void 0 !== i && (o = !0, oe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(oe(e), n)
})), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
},
            De = /^(?:checkbox|radio)$/i;
        ! function () {
            var e = he.createElement("input"),
                t = he.createElement("div"),
                n = he.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    ne.noCloneEvent = !1
}), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
} catch (i) {
                    ne.deleteExpando = !1
}
}
}(),
        function () {
            var t, n, i = he.createElement("div");
            for (t in {
    submit: !0,
    change: !0,
    focusin: !0
}) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
}();
        var je = /^(?:input|select|textarea)$/i,
            Oe = /^key/,
            Le = /^(?:mouse|pointer|contextmenu)|click/,
            Pe = /^(?:focusinfocus|focusoutblur)$/,
            Ie = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
    global: {},
    add: function (e, t, n, i, o) {
                var r, a, s, l, c, u, d, p, f, h, g, m = oe._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || (u = m.handle = function (e) {
                            return typeof oe === Ce || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(u.elem, arguments)
}, u.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) r = Ie.exec(t[s]) || [], f = g = r[1], h = (r[2] || "").split(".").sort(), f && (c = oe.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = oe.event.special[f] || {}, d = oe.extend({
    type: f,
    origType: g,
    data: i,
    handler: n,
    guid: n.guid,
    selector: o,
    needsContext: o && oe.expr.match.needsContext.test(o),
    namespace: h.join(".")
}, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), oe.event.global[f] = !0);
                    e = null
}
},
    remove: function (e, t, n, i, o) {
                var r, a, s, l, c, u, d, p, f, h, g, m = oe.hasData(e) && oe._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(be) || [""], c = t.length; c--;)
                        if (s = Ie.exec(t[c]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, f, m.handle), delete u[f])
} else
                            for (f in u) oe.event.remove(e, f + t[c], n, i, !0);
                    oe.isEmptyObject(u) && (delete m.handle, oe._removeData(e, "events"))
}
},
    trigger: function (t, n, i, o) {
                var r, a, s, l, c, u, d, p = [i || he],
                    f = te.call(t, "type") ? t.type : t,
                    h = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), c = oe.event.special[f] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !oe.isWindow(i)) {
                        for (l = c.delegateType || f, Pe.test(l + f) || (s = s.parentNode) ; s; s = s.parentNode) p.push(s), u = s;
                        u === (i.ownerDocument || he) && p.push(u.defaultView || u.parentWindow || e)
}
                    for (d = 0;
                        (s = p[d++]) && !t.isPropagationStopped() ;) t.type = d > 1 ? l : c.bindType || f, r = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && oe.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && oe.acceptData(i) && a && i[f] && !oe.isWindow(i)) {
                        u = i[a], u && (i[a] = null), oe.event.triggered = f;
                        try {
                            i[f]()
} catch (g) { }
                        oe.event.triggered = void 0, u && (i[a] = u)
}
                    return t.result
}
},
    dispatch: function (e) {
                e = oe.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = J.call(arguments),
                    l = (oe._data(this, "events") || {})[e.type] || [],
                    c = oe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = oe.event.handlers.call(this, e, l), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped() ;)
                        for (e.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !e.isImmediatePropagationStopped() ;) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
}
},
    handlers: function (e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && a.push({
    elem: l,
    handlers: o
})
}
                return s < t.length && a.push({
    elem: this,
    handlers: t.slice(s)
}), a
},
    fix: function (e) {
                if (e[oe.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Le.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
},
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
}
},
    mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function (e, t) {
                    var n, i, o, r = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
}
},
    special: {
    load: {
    noBubble: !0
},
    focus: {
    trigger: function () {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
} catch (e) { }
},
    delegateType: "focusin"
},
    blur: {
    trigger: function () {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
},
    delegateType: "focusout"
},
    click: {
    trigger: function () {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
},
    _default: function (e) {
                        return oe.nodeName(e.target, "a")
}
},
    beforeunload: {
    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
}
}
},
    simulate: function (e, t, n, i) {
                var o = oe.extend(new oe.Event, n, {
    type: e,
    isSimulated: !0,
    originalEvent: {}
});
                i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
}
}, oe.removeEvent = he.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
} : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Ce && (e[i] = null), e.detachEvent(i, n))
}, oe.Event = function (e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void (this[oe.expando] = !0)) : new oe.Event(e, t)
}, oe.Event.prototype = {
    isDefaultPrevented: f,
    isPropagationStopped: f,
    isImmediatePropagationStopped: f,
    preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
},
    stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
},
    stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
}
}, oe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function (e, t) {
            oe.event.special[e] = {
    delegateType: t,
    bindType: t,
    handle: function (e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return (!o || o !== i && !oe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
}
}
}), ne.submitBubbles || (oe.event.special.submit = {
    setup: function () {
                return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target,
                        n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                    n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
}), oe._data(n, "submitBubbles", !0))
})
},
    postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
},
    teardown: function () {
                return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
}
}), ne.changeBubbles || (oe.event.special.change = {
    setup: function () {
                return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
}), oe.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
})), !1) : void oe.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    je.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
}), oe._data(t, "changeBubbles", !0))
})
},
    handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
},
    teardown: function () {
                return oe.event.remove(this, "._change"), !je.test(this.nodeName)
}
}), ne.focusinBubbles || oe.each({
    focus: "focusin",
    blur: "focusout"
}, function (e, t) {
            var n = function (e) {
                oe.event.simulate(t, e.target, oe.event.fix(e), !0)
};
            oe.event.special[t] = {
    setup: function () {
                    var i = this.ownerDocument || this,
                        o = oe._data(i, t);
                    o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
},
    teardown: function () {
                    var i = this.ownerDocument || this,
                        o = oe._data(i, t) - 1;
                    o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
}
}
}), oe.fn.extend({
    on: function (e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (r in e) this.on(r, t, n, e[r], o);
                    return this
}
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
else if (!i) return this;
                return 1 === o && (a = i, i = function (e) {
                    return oe().off(e), a.apply(this, arguments)
}, i.guid = a.guid || (a.guid = oe.guid++)), this.each(function () {
                    oe.event.add(this, e, i, n, t)
})
},
    one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
},
    off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
}
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function () {
                    oe.event.remove(this, e, n, t)
})
},
    trigger: function (e, t) {
                return this.each(function () {
                    oe.event.trigger(e, t, this)
})
},
    triggerHandler: function (e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
}
});
        var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            _e = / jQuery\d+="(?:null|\d+)"/g,
            Fe = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
            Re = /^\s+/,
            qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Be = /<([\w:]+)/,
            We = /<tbody/i,
            Me = /<|&#?\w+;/,
            ze = /<(?:script|style|link)/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Xe = /^$|\/(?:java|ecma)script/i,
            Ve = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Je = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
},
            Ge = g(he),
            Ye = Ge.appendChild(he.createElement("div"));
        Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, oe.extend({
    clone: function (e, t, n) {
                var i, o, r, a, s, l = oe.contains(e.ownerDocument, e);
                if (ne.html5Clone || oe.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ye.innerHTML = e.outerHTML, Ye.removeChild(r = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (i = m(r), s = m(e), a = 0; null != (o = s[a]) ; ++a) i[a] && C(o, i[a]);
                if (t)
                    if (n)
                        for (s = s || m(e), i = i || m(r), a = 0; null != (o = s[a]) ; a++) T(o, i[a]);
else T(e, r);
                return i = m(r, "script"), i.length > 0 && w(i, !l && m(e, "script")), i = s = o = null, r
},
    buildFragment: function (e, t, n, i) {
                for (var o, r, a, s, l, c, u, d = e.length, p = g(t), f = [], h = 0; d > h; h++)
                    if (r = e[h], r || 0 === r)
                        if ("object" === oe.type(r)) oe.merge(f, r.nodeType ? [r] : r);
else if (Me.test(r)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Be.exec(r) || ["", ""])[1].toLowerCase(), u = Je[l] || Je._default, s.innerHTML = u[1] + r.replace(qe, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!ne.leadingWhitespace && Re.test(r) && f.push(t.createTextNode(Re.exec(r)[0])), !ne.tbody)
                        for (r = "table" !== l || We.test(r) ? "<table>" !== u[1] || We.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (oe.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
} else f.push(t.createTextNode(r));
                for (s && p.removeChild(s), ne.appendChecked || oe.grep(m(f, "input"), v), h = 0; r = f[h++];)
                    if ((!i || -1 === oe.inArray(r, i)) && (a = oe.contains(r.ownerDocument, r), s = m(p.appendChild(r), "script"), a && w(s), n))
                        for (o = 0; r = s[o++];) Xe.test(r.type || "") && n.push(r);
                return s = null, p
},
    cleanData: function (e, t) {
                for (var n, i, o, r, a = 0, s = oe.expando, l = oe.cache, c = ne.deleteExpando, u = oe.event.special; null != (n = e[a]) ; a++)
                    if ((t || oe.acceptData(n)) && (o = n[s], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, Q.push(o))
}
}
}), oe.fn.extend({
    text: function (e) {
                return Ae(this, function (e) {
                    return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
}, null, e, arguments.length)
},
    append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
}
})
},
    prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
}
})
},
    before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
})
},
    after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
})
},
    remove: function (e, t) {
                for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]) ; o++) t || 1 !== n.nodeType || oe.cleanData(m(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
                return this
},
    empty: function () {
                for (var e, t = 0; null != (e = this[t]) ; t++) {
                    for (1 === e.nodeType && oe.cleanData(m(e, !1)) ; e.firstChild;) e.removeChild(e.firstChild);
                    e.options && oe.nodeName(e, "select") && (e.options.length = 0)
}
                return this
},
    clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return oe.clone(this, e, t)
})
},
    html: function (e) {
                return Ae(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(_e, "") : void 0;
                    if (!("string" != typeof e || ze.test(e) || !ne.htmlSerialize && Fe.test(e) || !ne.leadingWhitespace && Re.test(e) || Je[(Be.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(qe, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
} catch (o) { }
}
                    t && this.empty().append(e)
}, null, e, arguments.length)
},
    replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, oe.cleanData(m(this)), e && e.replaceChild(t, this)
}), e && (e.length || e.nodeType) ? this : this.remove()
},
    detach: function (e) {
                return this.remove(e, !0)
},
    domManip: function (e, t) {
                e = G.apply([], e);
                var n, i, o, r, a, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    p = e[0],
                    f = oe.isFunction(p);
                if (f || c > 1 && "string" == typeof p && !ne.checkClone && Ue.test(p)) return this.each(function (n) {
                    var i = u.eq(n);
                    f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
});
                if (c && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = oe.map(m(s, "script"), b), o = r.length; c > l; l++) i = s, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, m(i, "script"))), t.call(this[l], i, l);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, oe.map(r, x), l = 0; o > l; l++) i = r[l], Xe.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(a, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                    s = n = null
}
                return this
}
}), oe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function (e, t) {
            oe.fn[e] = function (e) {
                for (var n, i = 0, o = [], r = oe(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), oe(r[i])[t](n), Y.apply(o, n.get());
                return this.pushStack(o)
}
});
        var Ke, Ze = {};
        ! function () {
            var e;
            ne.shrinkWrapBlocks = function () {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
}
}();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
            ot = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
}, tt = function (e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, o = s.minWidth,
                r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
}) : he.documentElement.currentStyle && (et = function (e) {
            return e.currentStyle
}, tt = function (e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !ot.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
}), ! function () {
            function t() {
                var t, n, i, o;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
    width: "4px"
}).width, o = t.appendChild(he.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
}
            var n, i, o, r, a, s, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
    reliableHiddenOffsets: function () {
                    return null == s && t(), s
},
    boxSizingReliable: function () {
                    return null == a && t(), a
},
    pixelPosition: function () {
                    return null == r && t(), r
},
    reliableMarginRight: function () {
                    return null == l && t(), l
}
}))
}(), oe.swap = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
};
        var rt = /alpha\([^)]*\)/i,
            at = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Ne + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Ne + ")", "i"),
            ut = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
},
            dt = {
    letterSpacing: "0",
    fontWeight: "400"
},
            pt = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
    cssHooks: {
    opacity: {
    get: function (e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
}
}
}
},
    cssNumber: {
    columnCount: !0,
    fillOpacity: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0
},
    cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
},
    style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = oe.camelCase(t),
                        l = e.style;
                    if (t = oe.cssProps[s] || (oe.cssProps[s] = S(l, s)), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                    if (r = typeof n, "string" === r && (o = ct.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
} catch (c) { }
}
},
    css: function (e, t, n, i) {
                var o, r, a, s = oe.camelCase(t);
                return t = oe.cssProps[s] || (oe.cssProps[s] = S(e.style, s)), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
}
}), oe.each(["height", "width"], function (e, t) {
            oe.cssHooks[t] = {
    get: function (e, n, i) {
                    return n ? st.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ut, function () {
                        return j(e, t, i)
}) : j(e, t, i) : void 0
},
    set: function (e, n, i) {
                    var o = i && et(e);
                    return A(e, n, i ? D(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
}
}
}), ne.opacity || (oe.cssHooks.opacity = {
    get: function (e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
},
    set: function (e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
}
}), oe.cssHooks.marginRight = N(ne.reliableMarginRight, function (e, t) {
            return t ? oe.swap(e, {
    display: "inline-block"
}, tt, [e, "marginRight"]) : void 0
}), oe.each({
    margin: "",
    padding: "",
    border: "Width"
}, function (e, t) {
            oe.cssHooks[e + t] = {
    expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Se[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
}
}, nt.test(e) || (oe.cssHooks[e + t].set = A)
}), oe.fn.extend({
    css: function (e, t) {
                return Ae(this, function (e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (oe.isArray(t)) {
                        for (i = et(e), o = t.length; o > a; a++) r[t[a]] = oe.css(e, t[a], !1, i);
                        return r
}
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
}, e, t, arguments.length > 1)
},
    show: function () {
                return $(this, !0)
},
    hide: function () {
                return $(this)
},
    toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    $e(this) ? oe(this).show() : oe(this).hide()
})
}
}), oe.Tween = O, O.prototype = {
    constructor: O,
    init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
},
    cur: function () {
                var e = O.propHooks[this.prop];
                return e && e.get ? e.get(this) : O.propHooks._default.get(this)
},
    run: function (e) {
                var t, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
}
}, O.prototype.init.prototype = O.prototype, O.propHooks = {
    _default: {
    get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
},
    set: function (e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
}
}
}, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
}
}, oe.easing = {
    linear: function (e) {
                return e
},
    swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
}
}, oe.fx = O.prototype.init, oe.fx.step = {};
        var ft, ht, gt = /^(?:toggle|show|hide)$/,
            mt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [H],
            bt = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = mt.exec(t),
                        r = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                        a = (oe.cssNumber[e] || "px" !== r && +i) && mt.exec(oe.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do s = s || ".5", a /= s, oe.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
}
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
}]
};
        oe.Animation = oe.extend(F, {
    tweener: function (e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
},
    prefilter: function (e, t) {
                    t ? yt.unshift(e) : yt.push(e)
}
}), oe.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
    complete: n || !n && t || oe.isFunction(e) && e,
    duration: e,
    easing: n && t || t && !oe.isFunction(t) && t
};
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
}, i
}, oe.fn.extend({
    fadeTo: function (e, t, n, i) {
                    return this.filter($e).css("opacity", 0).show().end().animate({
    opacity: t
}, e, n, i)
},
    animate: function (e, t, n, i) {
                    var o = oe.isEmptyObject(e),
                        r = oe.speed(t, n, i),
                        a = function () {
                            var t = F(this, oe.extend({}, e), r);
                            (o || oe._data(this, "finish")) && t.stop(!0)
};
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
},
    stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
};
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = oe.timers,
                            a = oe._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
else
                            for (o in a) a[o] && a[o].stop && vt.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        (t || !n) && oe.dequeue(this, e)
})
},
    finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = oe._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = oe.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
})
}
}), oe.each(["toggle", "show", "hide"], function (e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function (e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
}
}), oe.each({
    slideDown: P("show"),
    slideUp: P("hide"),
    slideToggle: P("toggle"),
    fadeIn: {
    opacity: "show"
},
    fadeOut: {
    opacity: "hide"
},
    fadeToggle: {
    opacity: "toggle"
}
}, function (e, t) {
                oe.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
}
}), oe.timers = [], oe.fx.tick = function () {
                var e, t = oe.timers,
                    n = 0;
                for (ft = oe.now() ; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || oe.fx.stop(), ft = void 0
}, oe.fx.timer = function (e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
}, oe.fx.interval = 13, oe.fx.start = function () {
                ht || (ht = setInterval(oe.fx.tick, oe.fx.interval))
}, oe.fx.stop = function () {
                clearInterval(ht), ht = null
}, oe.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
}, oe.fn.delay = function (e, t) {
                return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(i)
}
})
},
            function () {
                var e, t, n, i, o;
                t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
}();
        var xt = /\r/g;
        oe.fn.extend({
    val: function (e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = oe.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
                        return null == e ? "" : e + ""
})), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
})) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
}
}), oe.extend({
    valHooks: {
    option: {
    get: function (e) {
                        var t = oe.find.attr(e, "value");
                        return null != t ? t : oe.trim(oe.text(e))
}
},
    select: {
    get: function (e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), r) return t;
                                a.push(t)
}
                        return a
},
    set: function (e, t) {
                        for (var n, i, o = e.options, r = oe.makeArray(t), a = o.length; a--;)
                            if (i = o[a], oe.inArray(oe.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
} catch (s) {
                                i.scrollHeight
} else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
}
}
}
}), oe.each(["radio", "checkbox"], function () {
            oe.valHooks[this] = {
    set: function (e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
}
}, ne.checkOn || (oe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
})
});
        var wt, Tt, Ct = oe.expr.attrHandle,
            kt = /^(?:checked|selected)$/i,
            Et = ne.getSetAttribute,
            Nt = ne.input;
        oe.fn.extend({
    attr: function (e, t) {
                return Ae(this, oe.attr, e, t, arguments.length > 1)
},
    removeAttr: function (e) {
                return this.each(function () {
                    oe.removeAttr(this, e)
})
}
}), oe.extend({
    attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Ce ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t)) : void 0
},
    removeAttr: function (e, t) {
                var n, i, o = 0,
                    r = t && t.match(be);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Nt && Et || !kt.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(Et ? n : i)
},
    attrHooks: {
    type: {
    set: function (e, t) {
                        if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
}
}
}
}
}), Tt = {
    set: function (e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : Nt && Et || !kt.test(n) ? e.setAttribute(!Et && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
}
}, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ct[t] || oe.find.attr;
            Ct[t] = Nt && Et || !kt.test(t) ? function (e, t, i) {
                var o, r;
                return i || (r = Ct[t], Ct[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Ct[t] = r), o
} : function (e, t, n) {
                return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
}
}), Nt && Et || (oe.attrHooks.value = {
    set: function (e, t, n) {
                return oe.nodeName(e, "input") ? void (e.defaultValue = t) : wt && wt.set(e, t, n)
}
}), Et || (wt = {
    set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
}
}, Ct.id = Ct.name = Ct.coords = function (e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
}, oe.valHooks.button = {
    get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
},
    set: wt.set
}, oe.attrHooks.contenteditable = {
    set: function (e, t, n) {
                wt.set(e, "" === t ? !1 : t, n)
}
}, oe.each(["width", "height"], function (e, t) {
            oe.attrHooks[t] = {
    set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
}
}
})), ne.style || (oe.attrHooks.style = {
    get: function (e) {
                return e.style.cssText || void 0
},
    set: function (e, t) {
                return e.style.cssText = t + ""
}
});
        var St = /^(?:input|select|textarea|button|object)$/i,
            $t = /^(?:a|area)$/i;
        oe.fn.extend({
    prop: function (e, t) {
                return Ae(this, oe.prop, e, t, arguments.length > 1)
},
    removeProp: function (e) {
                return e = oe.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
} catch (t) { }
})
}
}), oe.extend({
    propFix: {
                "for": "htmlFor",
                "class": "className"
},
    prop: function (e, t, n) {
                var i, o, r, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !oe.isXMLDoc(e), r && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
},
    propHooks: {
    tabIndex: {
    get: function (e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : St.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
}
}
}
}), ne.hrefNormalized || oe.each(["href", "src"], function (e, t) {
            oe.propHooks[t] = {
    get: function (e) {
                    return e.getAttribute(t, 4)
}
}
}), ne.optSelected || (oe.propHooks.selected = {
    get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
}
}), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            oe.propFix[this.toLowerCase()] = this
}), ne.enctype || (oe.propFix.enctype = "encoding");
        var At = /[\t\r\n\f]/g;
        oe.fn.extend({
    addClass: function (e) {
                var t, n, i, o, r, a, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function (t) {
                    oe(this).addClass(e.call(this, t, this.className))
});
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                            for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = oe.trim(i), n.className !== a && (n.className = a)
}
                return this
},
    removeClass: function (e) {
                var t, n, i, o, r, a, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function (t) {
                    oe(this).removeClass(e.call(this, t, this.className))
});
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                            for (r = 0; o = t[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            a = e ? oe.trim(i) : "", n.className !== a && (n.className = a)
}
                return this
},
    toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function (n) {
                    oe(this).toggleClass(e.call(this, n, this.className, t), t)
} : function () {
                    if ("string" === n)
                        for (var t, i = 0, o = oe(this), r = e.match(be) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
else (n === Ce || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
})
},
    hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
                return !1
}
}), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            oe.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
}
}), oe.fn.extend({
    hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
},
    bind: function (e, t, n) {
                return this.on(e, null, t, n)
},
    unbind: function (e, t) {
                return this.off(e, null, t)
},
    delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
},
    undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
}
});
        var Dt = oe.now(),
            jt = /\?/,
            Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                o = oe.trim(t + "");
            return o && !oe.trim(o.replace(Ot, function (e, t, o, r) {
                return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
})) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
}, oe.parseXML = function (t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
} catch (o) {
                n = void 0
}
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
};
        var Lt, Pt, It = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Rt = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Wt = {},
            Mt = {},
            zt = "*/".concat("*");
        try {
            Pt = location.href
} catch (Ut) {
            Pt = he.createElement("a"), Pt.href = "", Pt = Pt.href
}
        Lt = Bt.exec(Pt.toLowerCase()) || [], oe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
    url: Pt,
    type: "GET",
    isLocal: Ft.test(Lt[1]),
    global: !0,
    processData: !0,
    async: !0,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    accepts: {
                    "*": zt,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
},
    contents: {
    xml: /xml/,
    html: /html/,
    json: /json/
},
    responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
},
    converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
},
    flatOptions: {
    url: !0,
    context: !0
}
},
    ajaxSetup: function (e, t) {
                return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
},
    ajaxPrefilter: R(Wt),
    ajaxTransport: R(Mt),
    ajax: function (e, t) {
                function n(e, t, n, i) {
                    var o, u, v, y, x, T = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = W(d, w, n)), y = M(d, y, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (oe.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (oe.etag[r] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, o = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", o ? h.resolveWith(p, [u, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? u : v]), g.fireWith(p, [w, T]), l && (f.trigger("ajaxComplete", [w, d]), --oe.active || oe.event.trigger("ajaxStop")))
}
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, a, s, l, c, u, d = oe.ajaxSetup({}, t),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                    h = oe.Deferred(),
                    g = oe.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
    readyState: 0,
    getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; t = _t.exec(a) ;) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
}
                            return null == t ? null : t
},
    getAllResponseHeaders: function () {
                            return 2 === b ? a : null
},
    setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
},
    overrideMimeType: function (e) {
                            return b || (d.mimeType = e), this
},
    statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
else w.always(e[w.status]);
                            return this
},
    abort: function (e) {
                            var t = e || x;
                            return c && c.abort(t), n(0, t), this
}
};
                if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Pt) + "").replace(It, "").replace(qt, Lt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Bt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Lt[1] && i[2] === Lt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), q(Wt, d, t, w), 2 === b) return w;
                l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (jt.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ht.test(r) ? r.replace(Ht, "$1_=" + Dt++) : r + (jt.test(r) ? "&" : "?") + "_=" + Dt++)), d.ifModified && (oe.lastModified[r] && w.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && w.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (o in {
    success: 1,
    error: 1,
    complete: 1
}) w[o](d[o]);
                if (c = q(Mt, d, t, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                        w.abort("timeout")
}, d.timeout));
                    try {
                        b = 1, c.send(v, n)
} catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
}
} else n(-1, "No Transport");
                return w
},
    getJSON: function (e, t, n) {
                return oe.get(e, t, n, "json")
},
    getScript: function (e, t) {
                return oe.get(e, void 0, t, "script")
}
}), oe.each(["get", "post"], function (e, t) {
            oe[t] = function (e, n, i, o) {
                return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
    url: e,
    type: t,
    dataType: o,
    data: n,
    success: i
})
}
}), oe._evalUrl = function (e) {
            return oe.ajax({
    url: e,
    type: "GET",
    dataType: "script",
    async: !1,
    global: !1,
                "throws": !0
})
}, oe.fn.extend({
    wrapAll: function (e) {
                if (oe.isFunction(e)) return this.each(function (t) {
                    oe(this).wrapAll(e.call(this, t))
});
                if (this[0]) {
                    var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
}).append(this)
}
                return this
},
    wrapInner: function (e) {
                return this.each(oe.isFunction(e) ? function (t) {
                    oe(this).wrapInner(e.call(this, t))
} : function () {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
})
},
    wrap: function (e) {
                var t = oe.isFunction(e);
                return this.each(function (n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
})
},
    unwrap: function () {
                return this.parent().each(function () {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
}).end()
}
}), oe.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
}, oe.expr.filters.visible = function (e) {
            return !oe.expr.filters.hidden(e)
};
        var Xt = /%20/g,
            Vt = /\[\]$/,
            Qt = /\r?\n/g,
            Jt = /^(?:submit|button|image|reset|file)$/i,
            Gt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function (e, t) {
            var n, i = [],
                o = function (e, t) {
                    t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
};
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
                o(this.name, this.value)
});
else
                for (n in e) z(n, e[n], t, o);
            return i.join("&").replace(Xt, "+")
}, oe.fn.extend({
    serialize: function () {
                return oe.param(this.serializeArray())
},
    serializeArray: function () {
                return this.map(function () {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
}).filter(function () {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && Gt.test(this.nodeName) && !Jt.test(e) && (this.checked || !De.test(e))
}).map(function (e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                        return {
    name: t.name,
    value: e.replace(Qt, "\r\n")
}
}) : {
    name: t.name,
    value: n.replace(Qt, "\r\n")
}
}).get()
}
}), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
} : U;
        var Yt = 0,
            Kt = {},
            Zt = oe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function () {
            for (var e in Kt) Kt[e](void 0, !0)
}), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && oe.ajaxTransport(function (e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
    send: function (n, i) {
                        var o, r = e.xhr(),
                            a = ++Yt;
                        if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(e.hasContent && e.data || null), t = function (n, o) {
                            var s, l, c;
                            if (t && (o || 4 === r.readyState))
                                if (delete Kt[a], t = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
else {
                                    c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                    try {
                                        l = r.statusText
} catch (u) {
                                        l = ""
}
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
}
                            c && i(s, l, c, r.getAllResponseHeaders())
}, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Kt[a] = t : t()
},
    abort: function () {
                        t && t(void 0, !0)
}
}
}
}), oe.ajaxSetup({
    accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
    contents: {
    script: /(?:java|ecma)script/
},
    converters: {
                "text script": function (e) {
                    return oe.globalEval(e), e
}
}
}), oe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
}), oe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = he.head || oe("head")[0] || he.documentElement;
                return {
    send: function (i, o) {
                        t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
}, n.insertBefore(t, n.firstChild)
},
    abort: function () {
                        t && t.onload(void 0, !0)
}
}
}
});
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
                var e = en.pop() || oe.expando + "_" + Dt++;
                return this[e] = !0, e
}
}), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
            var o, r, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                return a || oe.error(o + " was not called"), a[0]
}, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
                a = arguments
}, i.always(function () {
                e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), a && oe.isFunction(r) && r(a[0]), a = r = void 0
}), "script") : void 0
}), oe.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || he;
            var i = de.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
};
        var nn = oe.fn.load;
        oe.fn.load = function (e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = oe.trim(e.slice(s, e.length)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && oe.ajax({
    url: e,
    type: r,
    dataType: "html",
    data: t
}).done(function (e) {
                o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
}).complete(n && function (e, t) {
                a.each(n, o || [e.responseText, t, e])
}), this
}, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            oe.fn[t] = function (e) {
                return this.on(t, e)
}
}), oe.expr.filters.animated = function (e) {
            return oe.grep(oe.timers, function (t) {
                return e === t.elem
}).length
};
        var on = e.document.documentElement;
        oe.offset = {
    setOffset: function (e, t, n) {
                var i, o, r, a, s, l, c, u = oe.css(e, "position"),
                    d = oe(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [r, l]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
}
}, oe.fn.extend({
    offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    oe.offset.setOffset(this, e, t)
});
                var t, n, i = {
    top: 0,
    left: 0
},
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (t = r.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Ce && (i = o.getBoundingClientRect()), n = V(r), {
    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
}) : i) : void 0
},
    position: function () {
                if (this[0]) {
                    var e, t, n = {
    top: 0,
    left: 0
},
                        i = this[0];
                    return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
    top: t.top - n.top - oe.css(i, "marginTop", !0),
    left: t.left - n.left - oe.css(i, "marginLeft", !0)
}
}
},
    offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position") ;) e = e.offsetParent;
                    return e || on
})
}
}), oe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function (e, t) {
            var n = /Y/.test(t);
            oe.fn[e] = function (i) {
                return Ae(this, function (e, i, o) {
                    var r = V(e);
                    return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void (r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : e[i] = o)
}, e, i, arguments.length, null)
}
}), oe.each(["top", "left"], function (e, t) {
            oe.cssHooks[t] = N(ne.pixelPosition, function (e, n) {
                return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
})
}), oe.each({
    Height: "height",
    Width: "width"
}, function (e, t) {
            oe.each({
    padding: "inner" + e,
    content: t,
                "": "outer" + e
}, function (n, i) {
                oe.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ae(this, function (t, n, i) {
                        var o;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
}, t, r ? i : void 0, r, null)
}
})
}), oe.fn.size = function () {
            return this.length
}, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return oe
});
        var rn = e.jQuery,
            an = e.$;
        return oe.noConflict = function (t) {
            return e.$ === oe && (e.$ = an), t && e.jQuery === oe && (e.jQuery = rn), oe
}, typeof t === Ce && (e.jQuery = e.$ = oe), oe
}),
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e)
}

        function n(e) {
            return s.raw ? e : decodeURIComponent(e)
}

        function i(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
}

        function o(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e
} catch (t) { }
}

        function r(t, n) {
            var i = s.raw ? t : o(t);
            return e.isFunction(n) ? n(i) : i
}
        var a = /\+/g,
            s = e.cookie = function (o, a, l) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
}
                    return document.cookie = [t(o), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
}
                for (var d = o ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], f = 0, h = p.length; h > f; f++) {
                    var g = p[f].split("="),
                        m = n(g.shift()),
                        v = g.join("=");
                    if (o && o === m) {
                        d = r(v, a);
                        break
}
                    o || void 0 === (v = r(v)) || (d[m] = v)
}
                return d
};
        s.defaults = {}, e.removeCookie = function (t, n) {
            return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
    expires: -1
})), !e.cookie(t))
}
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function (t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var n = e(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e(r);
        t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function () {
        return e.fn.alert = o, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.button"),
                r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function (t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function () {
            i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    var n = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var o = "prev" == e ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function (e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (t, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, o),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function () {
                r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = e(this),
            r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = e.extend({}, r.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function () {
            var n = e(this),
                o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
        })
    }
    var i = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o),
            a = r.data("bs.collapse"),
            s = a ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(o).remove(), e(r).each(function () {
            var i = e(this),
                o = t(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r))))
        }))
    }

    function i(t) {
        return this.each(function () {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function (t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.5", a.prototype.toggle = function (i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = t(o),
                a = r.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = t(i),
                    a = o.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + s);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function (e) {
    "use strict";

    function t(t, i) {
        return this.each(function () {
            var o = e(this),
                r = o.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
        })
    }
    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, a, this)
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function () {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function (e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (c) {
                var f = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + p > h.bottom ? "top" : "top" == s && u.top - p < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s, r.removeClass(f).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, d, p);
            this.applyPlacement(g, s);
            var m = function () {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function (e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * u.left - o + l : 2 * u.top - r + c,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (t) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }
        var o = this,
            r = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = i ? {
            top: 0,
            left: 0
        } : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, a, s, r)
    }, n.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - r - a.scroll,
                l = t.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var c = t.left - r,
                u = t.left + r + n;
            c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.popover"),
                r = "object" == typeof t && t;
            (o || !/destroy|hide/.test(t)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function () {
        return e.fn.popover = i, this
    }
}(jQuery), + function (e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.5", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, t.prototype.refresh = function () {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = e(this),
                o = t.data("target") || t.attr("href"),
                r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
        if (a && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function (t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (t, i, o) {
        function r() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var a = i.find("> .active"),
            s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }
    var n = function (t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (e, t, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : e - i >= o + a ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            c = s ? a : t;
        return null != n && n >= o ? "top" : null != i && l + c >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, t, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
        return e.fn.affix = i, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
        var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
            t = _self.Prism = {
                util: {
                    encode: function (e) {
                        return e instanceof n ? new n(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    clone: function (e) {
                        var n = t.util.type(e);
                        switch (n) {
                            case "Object":
                                var i = {};
                                for (var o in e) e.hasOwnProperty(o) && (i[o] = t.util.clone(e[o]));
                                return i;
                            case "Array":
                                return e.map && e.map(function (e) {
                                    return t.util.clone(e)
                                })
                        }
                        return e
                    }
                },
                languages: {
                    extend: function (e, n) {
                        var i = t.util.clone(t.languages[e]);
                        for (var o in n) i[o] = n[o];
                        return i
                    },
                    insertBefore: function (e, n, i, o) {
                        o = o || t.languages;
                        var r = o[e];
                        if (2 == arguments.length) {
                            i = arguments[1];
                            for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
                            return r
                        }
                        var s = {};
                        for (var l in r)
                            if (r.hasOwnProperty(l)) {
                                if (l == n)
                                    for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                s[l] = r[l]
                            }
                        return t.languages.DFS(t.languages, function (t, n) {
                            n === o[e] && t != e && (this[t] = s)
                        }), o[e] = s
                    },
                    DFS: function (e, n, i) {
                        for (var o in e) e.hasOwnProperty(o) && (n.call(e, o, e[o], i || o), "Object" === t.util.type(e[o]) ? t.languages.DFS(e[o], n) : "Array" === t.util.type(e[o]) && t.languages.DFS(e[o], n, o))
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    for (var i, o = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), r = 0; i = o[r++];) t.highlightElement(i, e === !0, n)
                },
                highlightElement: function (n, i, o) {
                    for (var r, a, s = n; s && !e.test(s.className) ;) s = s.parentNode;
                    s && (r = (s.className.match(e) || [, ""])[1], a = t.languages[r]), n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r, s = n.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r);
                    var l = n.textContent,
                        c = {
                            element: n,
                            language: r,
                            grammar: a,
                            code: l
                        };
                    if (!l || !a) return void t.hooks.run("complete", c);
                    if (t.hooks.run("before-highlight", c), i && _self.Worker) {
                        var u = new Worker(t.filename);
                        u.onmessage = function (e) {
                            c.highlightedCode = e.data, t.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(c.element), t.hooks.run("after-highlight", c), t.hooks.run("complete", c)
                        }, u.postMessage(JSON.stringify({
                            language: c.language,
                            code: c.code,
                            immediateClose: !0
                        }))
                    } else c.highlightedCode = t.highlight(c.code, c.grammar, c.language), t.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(n), t.hooks.run("after-highlight", c), t.hooks.run("complete", c)
                },
                highlight: function (e, i, o) {
                    var r = t.tokenize(e, i);
                    return n.stringify(t.util.encode(r), o)
                },
                tokenize: function (e, n, i) {
                    var o = t.Token,
                        r = [e],
                        a = n.rest;
                    if (a) {
                        for (var s in a) n[s] = a[s];
                        delete n.rest
                    }
                    e: for (var s in n)
                        if (n.hasOwnProperty(s) && n[s]) {
                            var l = n[s];
                            l = "Array" === t.util.type(l) ? l : [l];
                            for (var c = 0; c < l.length; ++c) {
                                var u = l[c],
                                    d = u.inside,
                                    p = !!u.lookbehind,
                                    f = 0,
                                    h = u.alias;
                                u = u.pattern || u;
                                for (var g = 0; g < r.length; g++) {
                                    var m = r[g];
                                    if (r.length > e.length) break e;
                                    if (!(m instanceof o)) {
                                        u.lastIndex = 0;
                                        var v = u.exec(m);
                                        if (v) {
                                            p && (f = v[1].length);
                                            var y = v.index - 1 + f,
                                                v = v[0].slice(f),
                                                b = v.length,
                                                x = y + b,
                                                w = m.slice(0, y + 1),
                                                T = m.slice(x + 1),
                                                C = [g, 1];
                                            w && C.push(w);
                                            var k = new o(s, d ? t.tokenize(v, d) : v, h);
                                            C.push(k), T && C.push(T), Array.prototype.splice.apply(r, C)
                                        }
                                    }
                                }
                            }
                        }
                    return r
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var i = t.hooks.all;
                        i[e] = i[e] || [], i[e].push(n)
                    },
                    run: function (e, n) {
                        var i = t.hooks.all[e];
                        if (i && i.length)
                            for (var o, r = 0; o = i[r++];) o(n)
                    }
                }
            },
            n = t.Token = function (e, t, n) {
                this.type = e, this.content = t, this.alias = n
            };
        if (n.stringify = function (e, i, o) {
                if ("string" == typeof e) return e;
                if ("Array" === t.util.type(e)) return e.map(function (t) {
                    return n.stringify(t, i, e)
        }).join("");
                var r = {
            type: e.type,
            content: n.stringify(e.content, i, o),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: i,
            parent: o
        };
                if ("comment" == r.type && (r.attributes.spellcheck = "true"), e.alias) {
                    var a = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(r.classes, a)
        }
                t.hooks.run("wrap", r);
                var s = "";
                for (var l in r.attributes) s += (s ? " " : "") + l + '="' + (r.attributes[l] || "") + '"';
                return "<" + r.tag + ' class="' + r.classes.join(" ") + '" ' + s + ">" + r.content + "</" + r.tag + ">"
        }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
            var n = JSON.parse(e.data),
                i = n.language,
                o = n.code,
                r = n.immediateClose;
            _self.postMessage(t.highlight(o, t.languages[i], i)), r && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var i = document.getElementsByTagName("script");
        return i = i[i.length - 1], i && (t.filename = i.src, document.addEventListener && !i.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /[=>"']/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
        pattern: /`(?:\\`|\\?[^`])*`/,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript,
    function () {
        "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function () {
            var e = {
                js: "javascript",
                html: "markup",
                svg: "markup",
                xml: "markup",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell"
            };
            Array.prototype.forEach && Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function (t) {
                for (var n, i = t.getAttribute("data-src"), o = t, r = /\blang(?:uage)?-(?!\*)(\w+)\b/i; o && !r.test(o.className) ;) o = o.parentNode;
                if (o && (n = (t.className.match(r) || [, ""])[1]), !n) {
                    var a = (i.match(/\.(\w+)$/) || [, ""])[1];
                    n = e[a] || a
                }
                var s = document.createElement("code");
                s.className = "language-" + n, t.textContent = "", s.textContent = "Loading…", t.appendChild(s);
                var l = new XMLHttpRequest;
                l.open("GET", i, !0), l.onreadystatechange = function () {
                    4 == l.readyState && (l.status < 400 && l.responseText ? (s.textContent = l.responseText, Prism.highlightElement(s)) : l.status >= 400 ? s.textContent = "✖ Error " + l.status + " while fetching file: " + l.statusText : s.textContent = "✖ Error: File does not exist or is empty")
                }, l.send(null)
            })
        }, self.Prism.fileHighlight())
    }(), ! function (e) {
        e.cookieBar = function (t, n) {
            if ("cookies" == t) var i = "cookies";
            else if ("set" == t) var i = "set";
            else var i = !1;
            var o = {
                message: "We use cookies to track usage and preferences.",
                acceptButton: !0,
                acceptText: "I Understand",
                acceptFunction: !1,
                declineButton: !1,
                declineText: "Disable Cookies",
                declineFunction: !1,
                policyButton: !1,
                policyText: "Privacy Policy",
                policyFunction: !1,
                policyURL: "/privacy-policy/",
                autoEnable: !0,
                acceptOnContinue: !1,
                expireDays: 365,
                forceShow: !1,
                effect: "slide",
                element: "body",
                append: !1,
                fixed: !1,
                bottom: !1,
                customClass: "",
                zindex: "",
                redirect: String(window.location.href),
                domain: String(window.location.hostname),
                referrer: String(document.referrer)
            },
                t = e.extend(o, t),
                r = new Date;
            r.setTime(r.getTime() + 24 * t.expireDays * 60 * 60 * 1e3), r = r.toGMTString();
            var a, s, l = "cb-enabled={value}; expires=" + r + "; path=/",
                c = "",
                u = document.cookie.split("; ");
            for (a = 0; a < u.length; a++) s = u[a].split("="), "cb-enabled" == s[0] && (c = s[1]);
            if ("" == c && "cookies" != i && t.autoEnable && (c = "enabled", document.cookie = l.replace("{value}", "enabled")), t.acceptOnContinue && t.referrer.indexOf(t.domain) >= 0 && -1 == String(window.location.href).indexOf(t.policyURL) && "cookies" != i && "set" != i && "accepted" != c && "declined" != c && (i = "set", n = "accepted"), "cookies" == i) return "enabled" == c || "accepted" == c ? !0 : !1;
            if ("set" == i && ("accepted" == n || "declined" == n)) return document.cookie = l.replace("{value}", n), "accepted" == n ? !0 : !1;
            var d = t.message.replace("{policy_url}", t.policyURL);
            if (t.acceptButton) var p = '<a href="" class="cb-enable">' + t.acceptText + "</a>";
            else var p = "";
            if (t.declineButton) var f = '<a href="" class="cb-disable">' + t.declineText + "</a>";
            else var f = "";
            if (t.policyButton) var h = '<a href="' + t.policyURL + '" class="cb-policy">' + t.policyText + "</a>";
            else var h = "";
            if (t.fixed)
                if (t.bottom) var g = ' class="fixed bottom ' + t.customClass + '"';
                else var g = ' class="fixed ' + t.customClass + '"';
            else var g = ' class="' + t.customClass + '"';
            if ("" != t.zindex) var m = ' style="z-index:' + t.zindex + ';"';
            else var m = "";
            (t.forceShow || "enabled" == c || "" == c) && (t.append ? e(t.element).append('<div id="cookie-bar"' + g + m + "><p>" + d + p + f + h + "</p></div>") : e(t.element).prepend('<div id="cookie-bar"' + g + m + "><p>" + d + p + f + h + "</p></div>")), e("#cookie-bar .cb-enable").click(function () {
                return document.cookie = l.replace("{value}", "accepted"), t.acceptFunction && "function" == typeof t.acceptFunction && t.acceptFunction(), "enabled" == c || "accepted" == c || t.redirect === !1 ? ("slide" == t.effect ? e("#cookie-bar").slideUp(300, function () {
                    e("#cookie-bar").remove()
                }) : "fade" == t.effect ? e("#cookie-bar").fadeOut(300, function () {
                    e("#cookie-bar").remove()
                }) : e("#cookie-bar").hide(0, function () {
                    e("#cookie-bar").remove()
                }), !1) : void (window.location = t.redirect)
            }), e("#cookie-bar .cb-disable").click(function () {
                var n = new Date;
                for (n.setTime(n.getTime() - 864e6), n = n.toGMTString(), u = document.cookie.split("; "), a = 0; a < u.length; a++) s = u[a].split("="), s[0].indexOf("_") >= 0 ? document.cookie = s[0] + "=0; expires=" + n + "; domain=" + t.domain.replace("www", "") + "; path=/" : document.cookie = s[0] + "=0; expires=" + n + "; path=/";
                return document.cookie = l.replace("{value}", "declined"), t.declineFunction && "function" == typeof t.declineFunction && t.declineFunction(), "enabled" != c || "accepted" == c || t.redirect === !1 ? ("slide" == t.effect ? e("#cookie-bar").slideUp(300, function () {
                    e("#cookie-bar").remove()
                }) : "fade" == t.effect ? e("#cookie-bar").fadeOut(300, function () {
                    e("#cookie-bar").remove()
                }) : e("#cookie-bar").hide(0, function () {
                    e("#cookie-bar").remove()
                }), !1) : void (window.location = t.redirect)
            }), e("#cookie-bar .cb-policy").click(function () {
                t.policyFunction && "function" == typeof t.policyFunction && t.policyFunction()
            })
        }
    }(jQuery),
    function (e, t) {
        e(document).ready(function () {
            e("html").removeClass("no-js")
        }), e(document).ready(function () {
            e('[data-toggle="offcanvas"]').click(function (t) {
                t.preventDefault(), e(".row-offcanvas").toggleClass("active"), e(this).toggleClass("active")
            })
        }), e(document).ready(function () {
            e(".row-offcanvas").click(function (t) {
                if(e(this).is(".active")) {
                    e('[data-toggle="offcanvas"]').click().focus()
                }
            })
        }), e(document).keyup(function (t) {
            27 === t.which && e('[data-toggle="offcanvas"]').click().focus()
        }), jQuery(document).ready(function (e) {
            e(".skiplink a").on({
                focus: function () {
                    e(".skiplink").removeClass("sr-only").addClass("skiplink--focused")
                },
                blur: function () {
                    e(".skiplink").addClass("sr-only").removeClass("skiplink--focused")
                }
            })
        }), e(document).ready(function () {
            var t = function (e) {
                return ("0" + parseInt(e).toString(16)).slice(-2)
            },
                n = function (e) {
                    return /^#/.test(e) ? e : (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), "#" + t(e[1]) + t(e[2]) + t(e[3]))
                };
            e(".palette-example > *").each(function () {
                var t = n(e(this).css("color"));
                e(this).wrapInner('<span class="lg-color-example-text"></span>').append(' <span class="lg-color-example-text">' + t + "</span>").prepend('<span class="lg-color-example" style="background:' + t + '"></span>')
            })
        }), e("article > p > img").on("click", function () {
            e('<img class="lg-modal modal fade" src="' + e(this).attr("src") + '">').modal("show")
        }), e(document).ready(function () {
            e.cookieBar({
                fixed: !0,
                bottom: !0,
                message: e(".cookie-message").text(),
                acceptButton: !0,
                acceptText: "Ok",
                policyButton: !0,
                policyText: "Privacy Policy",
                policyURL: "http://www.governo.it/privacy-policy",
                acceptOnContinue: !0,
                acceptOnScroll: 200,
                acceptFunction: location.reload
            })
        }),
            function () {
                for (var e, t = function () { }, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console || {}; i--;) e = n[i], o[e] || (o[e] = t)
            }(), document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || e('img[src*="svg"]').attr("src", function () {
                return e(this).attr("src").replace(".svg", ".png")
            }), e(function () {
                e(".scrollto_top").bind("click", function (t) {
                    e("html, body").animate({
                        scrollTop: e(e.attr(this, "href")).offset().top - e(".navbar").height() - 200
                    }, 500), t.preventDefault()
                })
            }), e(window).scroll(function () {
                var t = e(window).scrollTop();
                t > 80 ? (e(".scrollto_top").removeClass("sr-only"), e(".navbar").addClass("navbar--small"), e(".nav-banner").addClass("nav-banner--small")) : (e(".nav-banner").removeClass("nav-banner--small"), e(".navbar").removeClass("navbar--small"), e(".scrollto_top").addClass("sr-only"))
            }), e(function () {
                e(".navmenu ul").each(function () {
                    var t = e(this).closest("li"),
                        n = t.find("> a"),
                        i = e("<span></span>").attr({
                            tabindex: 0,
                            title: "Espandi il menu " + e.trim(n.text())
                        }).on("click", function (t) {
                            t.preventDefault();
                            var n = e(this).closest("a");
                            e(this).closest("li.open").length || (e(".navmenu ul").slideUp(300), e(".navmenu li").removeClass("open")), n.siblings("ul").is(":visible") ? (n.siblings("ul").slideUp(300), n.parent().removeClass("open")) : (n.siblings("ul").slideDown(300), n.parent().addClass("open"))
                        }).on("keydown", function (t) {
                            return 13 === t.which || 32 === t.which ? (e(this).click(), !1) : void 0
                        });
                    n.append(i)
                }), e(".navmenu a[href='" + window.location.pathname + "'], .navmenu a[href='" + window.location.pathname.slice(0, -1) + "']").addClass("current"), e(".navmenu .current").parents().filter(function (e) {
                    return "LI" === this.nodeName
                }).addClass("active open")
            })
    }(jQuery);


$(document).ready(function () {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    // jobs accordion
    $('#jobaccordion_list a[data-target]').click(function(event){
        event.preventDefault();
        var $li = $(this).parent();
        var divTargetData = $(this).data('target');
        var $divTarget = $(divTargetData);
        $li.toggleClass('selected');
        $li.siblings().removeClass('selected');
        $divTarget.removeClass('hidden');
        $divTarget.siblings().addClass('hidden');
        
    });
});
