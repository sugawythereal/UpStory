var jn = Object.defineProperty;
var Bn = (n, e, l) =>
  e in n
    ? jn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (n[e] = l);
var Pt = (n, e, l) => (Bn(n, typeof e != "symbol" ? e + "" : e, l), l);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) t(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && t(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = l(r);
    fetch(r.href, o);
  }
})();
function T() {}
const Vn = (n) => n;
function Hn(n, e) {
  for (const l in e) n[l] = e[l];
  return n;
}
function wn(n) {
  return n();
}
function sl() {
  return Object.create(null);
}
function ce(n) {
  n.forEach(wn);
}
function Et(n) {
  return typeof n == "function";
}
function W(n, e) {
  return n != n
    ? e == e
    : n !== e || (n && typeof n == "object") || typeof n == "function";
}
function Fn(n) {
  return Object.keys(n).length === 0;
}
function Yn(n, ...e) {
  if (n == null) {
    for (const t of e) t(void 0);
    return T;
  }
  const l = n.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function N(n, e, l) {
  n.$$.on_destroy.push(Yn(e, l));
}
function yn(n, e, l, t) {
  if (n) {
    const r = kn(n, e, l, t);
    return n[0](r);
  }
}
function kn(n, e, l, t) {
  return n[1] && t ? Hn(l.ctx.slice(), n[1](t(e))) : l.ctx;
}
function $n(n, e, l, t) {
  if (n[2] && t) {
    const r = n[2](t(l));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const o = [],
        a = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < a; s += 1) o[s] = e.dirty[s] | r[s];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function En(n, e, l, t, r, o) {
  if (r) {
    const a = kn(e, l, t, o);
    n.p(a, r);
  }
}
function Dn(n) {
  if (n.ctx.length > 32) {
    const e = [],
      l = n.ctx.length / 32;
    for (let t = 0; t < l; t++) e[t] = -1;
    return e;
  }
  return -1;
}
function se(n, e, l) {
  return n.set(l), e;
}
function fl(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [n, "px"];
}
const Cn = typeof window < "u";
let zn = Cn ? () => window.performance.now() : () => Date.now(),
  qt = Cn ? (n) => requestAnimationFrame(n) : T;
const We = new Set();
function Ln(n) {
  We.forEach((e) => {
    e.c(n) || (We.delete(e), e.f());
  }),
    We.size !== 0 && qt(Ln);
}
function Un(n) {
  let e;
  return (
    We.size === 0 && qt(Ln),
    {
      promise: new Promise((l) => {
        We.add((e = { c: n, f: l }));
      }),
      abort() {
        We.delete(e);
      },
    }
  );
}
function u(n, e) {
  n.appendChild(e);
}
function Sn(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && e.host ? e : n.ownerDocument;
}
function Gn(n) {
  const e = h("style");
  return (e.textContent = "/* empty */"), Wn(Sn(n), e), e.sheet;
}
function Wn(n, e) {
  return u(n.head || n, e), e.sheet;
}
function D(n, e, l) {
  n.insertBefore(e, l || null);
}
function E(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ae(n, e) {
  for (let l = 0; l < n.length; l += 1) n[l] && n[l].d(e);
}
function h(n) {
  return document.createElement(n);
}
function L(n) {
  return document.createTextNode(n);
}
function $() {
  return L(" ");
}
function ee() {
  return L("");
}
function R(n, e, l, t) {
  return n.addEventListener(e, l, t), () => n.removeEventListener(e, l, t);
}
function b(n, e, l) {
  l == null
    ? n.removeAttribute(e)
    : n.getAttribute(e) !== l && n.setAttribute(e, l);
}
function Jn(n) {
  return Array.from(n.childNodes);
}
function P(n, e) {
  (e = "" + e), n.data !== e && (n.data = e);
}
function Se(n, e) {
  n.value = e ?? "";
}
function pt(n, e, l) {
  n.classList.toggle(e, !!l);
}
function Kn(n, e, { bubbles: l = !1, cancelable: t = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: l, cancelable: t });
}
const vt = new Map();
let gt = 0;
function qn(n) {
  let e = 5381,
    l = n.length;
  for (; l--; ) e = ((e << 5) - e) ^ n.charCodeAt(l);
  return e >>> 0;
}
function Qn(n, e) {
  const l = { stylesheet: Gn(e), rules: {} };
  return vt.set(n, l), l;
}
function cl(n, e, l, t, r, o, a, s = 0) {
  const i = 16.666 / t;
  let f = `{
`;
  for (let g = 0; g <= 1; g += i) {
    const _ = e + (l - e) * o(g);
    f +=
      g * 100 +
      `%{${a(_, 1 - _)}}
`;
  }
  const c =
      f +
      `100% {${a(l, 1 - l)}}
}`,
    d = `__svelte_${qn(c)}_${s}`,
    v = Sn(n),
    { stylesheet: y, rules: m } = vt.get(v) || Qn(v, n);
  m[d] ||
    ((m[d] = !0), y.insertRule(`@keyframes ${d} ${c}`, y.cssRules.length));
  const w = n.style.animation || "";
  return (
    (n.style.animation = `${
      w ? `${w}, ` : ""
    }${d} ${t}ms linear ${r}ms 1 both`),
    (gt += 1),
    d
  );
}
function Xn(n, e) {
  const l = (n.style.animation || "").split(", "),
    t = l.filter(
      e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    ),
    r = l.length - t.length;
  r && ((n.style.animation = t.join(", ")), (gt -= r), gt || Zn());
}
function Zn() {
  qt(() => {
    gt ||
      (vt.forEach((n) => {
        const { ownerNode: e } = n.stylesheet;
        e && E(e);
      }),
      vt.clear());
  });
}
let nt;
function tt(n) {
  nt = n;
}
function An() {
  if (!nt) throw new Error("Function called outside component initialization");
  return nt;
}
function Oe(n) {
  An().$$.on_mount.push(n);
}
function xn(n) {
  An().$$.on_destroy.push(n);
}
const Ue = [],
  ul = [];
let Je = [];
const dl = [],
  er = Promise.resolve();
let Tt = !1;
function tr() {
  Tt || ((Tt = !0), er.then(Pn));
}
function ke(n) {
  Je.push(n);
}
const Nt = new Set();
let Ye = 0;
function Pn() {
  if (Ye !== 0) return;
  const n = nt;
  do {
    try {
      for (; Ye < Ue.length; ) {
        const e = Ue[Ye];
        Ye++, tt(e), lr(e.$$);
      }
    } catch (e) {
      throw ((Ue.length = 0), (Ye = 0), e);
    }
    for (tt(null), Ue.length = 0, Ye = 0; ul.length; ) ul.pop()();
    for (let e = 0; e < Je.length; e += 1) {
      const l = Je[e];
      Nt.has(l) || (Nt.add(l), l());
    }
    Je.length = 0;
  } while (Ue.length);
  for (; dl.length; ) dl.pop()();
  (Tt = !1), Nt.clear(), tt(n);
}
function lr(n) {
  if (n.fragment !== null) {
    n.update(), ce(n.before_update);
    const e = n.dirty;
    (n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(ke);
  }
}
function nr(n) {
  const e = [],
    l = [];
  Je.forEach((t) => (n.indexOf(t) === -1 ? e.push(t) : l.push(t))),
    l.forEach((t) => t()),
    (Je = e);
}
let et;
function rr() {
  return (
    et ||
      ((et = Promise.resolve()),
      et.then(() => {
        et = null;
      })),
    et
  );
}
function It(n, e, l) {
  n.dispatchEvent(Kn(`${e ? "intro" : "outro"}${l}`));
}
const bt = new Set();
let Ce;
function K() {
  Ce = { r: 0, c: [], p: Ce };
}
function q() {
  Ce.r || ce(Ce.c), (Ce = Ce.p);
}
function k(n, e) {
  n && n.i && (bt.delete(n), n.i(e));
}
function C(n, e, l, t) {
  if (n && n.o) {
    if (bt.has(n)) return;
    bt.add(n),
      Ce.c.push(() => {
        bt.delete(n), t && (l && n.d(1), t());
      }),
      n.o(e);
  } else t && t();
}
const ar = { duration: 0 };
function be(n, e, l, t) {
  let o = e(n, l, { direction: "both" }),
    a = t ? 0 : 1,
    s = null,
    i = null,
    f = null,
    c;
  function d() {
    f && Xn(n, f);
  }
  function v(m, w) {
    const g = m.b - a;
    return (
      (w *= Math.abs(g)),
      {
        a,
        b: m.b,
        d: g,
        duration: w,
        start: m.start,
        end: m.start + w,
        group: m.group,
      }
    );
  }
  function y(m) {
    const {
        delay: w = 0,
        duration: g = 300,
        easing: _ = Vn,
        tick: p = T,
        css: A,
      } = o || ar,
      z = { start: zn() + w, b: m };
    m || ((z.group = Ce), (Ce.r += 1)),
      "inert" in n &&
        (m ? c !== void 0 && (n.inert = c) : ((c = n.inert), (n.inert = !0))),
      s || i
        ? (i = z)
        : (A && (d(), (f = cl(n, a, m, g, w, _, A))),
          m && p(0, 1),
          (s = v(z, g)),
          ke(() => It(n, m, "start")),
          Un((H) => {
            if (
              (i &&
                H > i.start &&
                ((s = v(i, g)),
                (i = null),
                It(n, s.b, "start"),
                A && (d(), (f = cl(n, a, s.b, s.duration, 0, _, o.css)))),
              s)
            ) {
              if (H >= s.end)
                p((a = s.b), 1 - a),
                  It(n, s.b, "end"),
                  i || (s.b ? d() : --s.group.r || ce(s.group.c)),
                  (s = null);
              else if (H >= s.start) {
                const V = H - s.start;
                (a = s.a + s.d * _(V / s.duration)), p(a, 1 - a);
              }
            }
            return !!(s || i);
          }));
  }
  return {
    run(m) {
      Et(o)
        ? rr().then(() => {
            (o = o({ direction: m ? "in" : "out" })), y(m);
          })
        : y(m);
    },
    end() {
      d(), (s = i = null);
    },
  };
}
function Y(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function B(n) {
  n && n.c();
}
function O(n, e, l) {
  const { fragment: t, after_update: r } = n.$$;
  t && t.m(e, l),
    ke(() => {
      const o = n.$$.on_mount.map(wn).filter(Et);
      n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ce(o),
        (n.$$.on_mount = []);
    }),
    r.forEach(ke);
}
function j(n, e) {
  const l = n.$$;
  l.fragment !== null &&
    (nr(l.after_update),
    ce(l.on_destroy),
    l.fragment && l.fragment.d(e),
    (l.on_destroy = l.fragment = null),
    (l.ctx = []));
}
function or(n, e) {
  n.$$.dirty[0] === -1 && (Ue.push(n), tr(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Q(n, e, l, t, r, o, a, s = [-1]) {
  const i = nt;
  tt(n);
  const f = (n.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: T,
    not_equal: r,
    bound: sl(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: sl(),
    dirty: s,
    skip_bound: !1,
    root: e.target || i.$$.root,
  });
  a && a(f.root);
  let c = !1;
  if (
    ((f.ctx = l
      ? l(n, e.props || {}, (d, v, ...y) => {
          const m = y.length ? y[0] : v;
          return (
            f.ctx &&
              r(f.ctx[d], (f.ctx[d] = m)) &&
              (!f.skip_bound && f.bound[d] && f.bound[d](m), c && or(n, d)),
            v
          );
        })
      : []),
    f.update(),
    (c = !0),
    ce(f.before_update),
    (f.fragment = t ? t(f.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = Jn(e.target);
      f.fragment && f.fragment.l(d), d.forEach(E);
    } else f.fragment && f.fragment.c();
    e.intro && k(n.$$.fragment), O(n, e.target, e.anchor), Pn();
  }
  tt(i);
}
class X {
  constructor() {
    Pt(this, "$$");
    Pt(this, "$$set");
  }
  $destroy() {
    j(this, 1), (this.$destroy = T);
  }
  $on(e, l) {
    if (!Et(l)) return T;
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      t.push(l),
      () => {
        const r = t.indexOf(l);
        r !== -1 && t.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Fn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const ir = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ir);
function $e(n, e) {
  const l = (t) => {
    const { action: r, data: o } = t.data;
    r === n && e(o);
  };
  Oe(() => window.addEventListener("message", l)),
    xn(() => window.removeEventListener("message", l));
}
const ze = [];
function x(n, e = T) {
  let l;
  const t = new Set();
  function r(s) {
    if (W(n, s) && ((n = s), l)) {
      const i = !ze.length;
      for (const f of t) f[1](), ze.push(f, n);
      if (i) {
        for (let f = 0; f < ze.length; f += 2) ze[f][0](ze[f + 1]);
        ze.length = 0;
      }
    }
  }
  function o(s) {
    r(s(n));
  }
  function a(s, i = T) {
    const f = [s, i];
    return (
      t.add(f),
      t.size === 1 && (l = e(r, o) || T),
      s(n),
      () => {
        t.delete(f), t.size === 0 && l && (l(), (l = null));
      }
    );
  }
  return { set: r, update: o, subscribe: a };
}
const ht = x(!1),
  wt = x(!1),
  Mt = x(""),
  pl = x(!1),
  Ee = x(!1),
  Rt = x("Actions"),
  hl = x("");
let Ot = !1;
wt.subscribe((n) => {
  Ot = n;
});
let Nn = "";
Mt.subscribe((n) => {
  Nn = n;
});
async function fe(n, e = {}, l) {
  if ((Ot == !0 && l) || Ot == !0) return Promise.resolve(l || {});
  const t = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(e),
    },
    r = window.GetParentResourceName ? window.GetParentResourceName() : Nn;
  return await (await fetch(`https://${r}/${n}`, t)).json();
}
function _l(n) {
  let e, l, t;
  const r = n[3].default,
    o = yn(r, n, n[2], null);
  return {
    c() {
      (e = h("main")),
        o && o.c(),
        b(
          e,
          "class",
          (l =
            "w-screen h-screen flex justify-end items-center " +
            (n[1] ? "justify-center" : " ") +
            " svelte-1afztrv")
        );
    },
    m(a, s) {
      D(a, e, s), o && o.m(e, null), (t = !0);
    },
    p(a, s) {
      o &&
        o.p &&
        (!t || s & 4) &&
        En(o, r, a, a[2], t ? $n(r, a[2], s, null) : Dn(a[2]), null),
        (!t ||
          (s & 2 &&
            l !==
              (l =
                "w-screen h-screen flex justify-end items-center " +
                (a[1] ? "justify-center" : " ") +
                " svelte-1afztrv"))) &&
          b(e, "class", l);
    },
    i(a) {
      t || (k(o, a), (t = !0));
    },
    o(a) {
      C(o, a), (t = !1);
    },
    d(a) {
      a && E(e), o && o.d(a);
    },
  };
}
function sr(n) {
  let e,
    l,
    t = n[0] && _l(n);
  return {
    c() {
      t && t.c(), (e = ee());
    },
    m(r, o) {
      t && t.m(r, o), D(r, e, o), (l = !0);
    },
    p(r, [o]) {
      r[0]
        ? t
          ? (t.p(r, o), o & 1 && k(t, 1))
          : ((t = _l(r)), t.c(), k(t, 1), t.m(e.parentNode, e))
        : t &&
          (K(),
          C(t, 1, 1, () => {
            t = null;
          }),
          q());
    },
    i(r) {
      l || (k(t), (l = !0));
    },
    o(r) {
      C(t), (l = !1);
    },
    d(r) {
      r && E(e), t && t.d(r);
    },
  };
}
function fr(n, e, l) {
  let t;
  N(n, Ee, (i) => l(1, (t = i)));
  let { $$slots: r = {}, $$scope: o } = e,
    a,
    s;
  return (
    wt.subscribe((i) => {
      s = i;
    }),
    ht.subscribe((i) => {
      l(0, (a = i));
    }),
    $e("setVisible", (i) => {
      ht.set(i);
    }),
    $e("setBrowserMode", (i) => {
      wt.set(i);
    }),
    Oe(() => {
      const i = (f) => {
        a && ["Escape"].includes(f.code) && (fe("hideUI"), ht.set(!1)),
          !a && ["Escape"].includes(f.code) && s === !0 && ht.set(!0);
      };
      return (
        window.addEventListener("keydown", i),
        () => window.removeEventListener("keydown", i)
      );
    }),
    (n.$$set = (i) => {
      "$$scope" in i && l(2, (o = i.$$scope));
    }),
    [a, t, o, r]
  );
}
class cr extends X {
  constructor(e) {
    super(), Q(this, e, fr, sr, W, {});
  }
}
const ur = () => !window.invokeNative,
  Ge = (n, e = 0) => {
    if (ur())
      for (const l of n)
        setTimeout(() => {
          window.dispatchEvent(
            new MessageEvent("message", {
              data: { action: l.action, data: l.data },
            })
          );
        }, e);
  };
function bl(n, e, l) {
  const t = n.slice();
  return (t[7] = e[l]), t;
}
function ml(n, e, l) {
  const t = n.slice();
  return (t[10] = e[l]), t;
}
function vl(n) {
  let e,
    l = Y(n[1]),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = wl(bl(n, l, r));
  return {
    c() {
      e = h("div");
      for (let r = 0; r < t.length; r += 1) t[r].c();
      b(e, "class", "w-fit h-fit bg-neutral-800 p-2 ");
    },
    m(r, o) {
      D(r, e, o);
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(e, null);
    },
    p(r, o) {
      if (o & 2) {
        l = Y(r[1]);
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = bl(r, l, a);
          t[a] ? t[a].p(s, o) : ((t[a] = wl(s)), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function gl(n) {
  let e, l, t;
  function r() {
    return n[3](n[10]);
  }
  return {
    c() {
      (e = h("button")),
        (e.textContent = `${n[10].name}`),
        b(e, "class", "bg-neutral-600 p-2");
    },
    m(o, a) {
      D(o, e, a), l || ((t = R(e, "click", r)), (l = !0));
    },
    p(o, a) {
      n = o;
    },
    d(o) {
      o && E(e), (l = !1), t();
    },
  };
}
function wl(n) {
  let e,
    l,
    t,
    r,
    o = Y(n[7].actions),
    a = [];
  for (let s = 0; s < o.length; s += 1) a[s] = gl(ml(n, o, s));
  return {
    c() {
      (e = h("div")),
        (l = h("p")),
        (l.textContent = `${n[7].component}`),
        (t = $());
      for (let s = 0; s < a.length; s += 1) a[s].c();
      (r = $()),
        b(l, "class", "h-full w-full mr-2"),
        b(e, "class", "flex flex-row gap-2 items-center m-1");
    },
    m(s, i) {
      D(s, e, i), u(e, l), u(e, t);
      for (let f = 0; f < a.length; f += 1) a[f] && a[f].m(e, null);
      u(e, r);
    },
    p(s, i) {
      if (i & 2) {
        o = Y(s[7].actions);
        let f;
        for (f = 0; f < o.length; f += 1) {
          const c = ml(s, o, f);
          a[f] ? a[f].p(c, i) : ((a[f] = gl(c)), a[f].c(), a[f].m(e, r));
        }
        for (; f < a.length; f += 1) a[f].d(1);
        a.length = o.length;
      }
    },
    d(s) {
      s && E(e), ae(a, s);
    },
  };
}
function dr(n) {
  let e,
    l,
    t,
    r,
    o,
    a = n[0] && vl(n);
  return {
    c() {
      (e = h("div")),
        (l = h("button")),
        (l.textContent = "Show"),
        (t = $()),
        a && a.c(),
        b(l, "class", "bg-neutral-800 p-3 3 font-medium uppercase"),
        b(e, "class", "absolute top-0 z-[1000] font-medium uppercase m-4");
    },
    m(s, i) {
      D(s, e, i),
        u(e, l),
        u(e, t),
        a && a.m(e, null),
        r || ((o = R(l, "click", n[2])), (r = !0));
    },
    p(s, [i]) {
      s[0]
        ? a
          ? a.p(s, i)
          : ((a = vl(s)), a.c(), a.m(e, null))
        : a && (a.d(1), (a = null));
    },
    i: T,
    o: T,
    d(s) {
      s && E(e), a && a.d(), (r = !1), o();
    },
  };
}
function pr(n, e, l) {
  let t = !1;
  const r = [
      {
        id: "admin_car",
        label: "Admin Car",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:admincar",
      },
      {
        id: "ban_player",
        label: "Ban Player",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "noclip",
        label: "Noclip",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:noclip",
      },
      {
        id: "invisible",
        label: "Invisible",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:invisible",
      },
      {
        id: "kick_player",
        label: "Kick Player",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:kickplayer",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
    ],
    o = [
      { name: "ps-adminmenu", resourceState: "started" },
      {
        name: "ps-mdt",
        version: "1.0.0",
        description: "A cool mdt",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-dispatch",
        version: "1.0.0",
        description: "A cool dispatch",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-hosuing",
        version: "1.0.0",
        description: "A cool house",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-camera",
        version: "1.0.0",
        description: "A cool camera",
        author: "Project Sloth and ok1ez ok1ez",
        resourceState: "started",
      },
      {
        name: "ps-hud",
        version: "1.0.0",
        description: "A cool hud",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-fuel",
        version: "1.0.0",
        description: "A cool gas pump",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-liveries",
        version: "1.0.0",
        description: "A cool liverie",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-ui",
        version: "1.0.0",
        description: "A cool ui",
        author: "Project Sloth",
        resourceState: "stopped",
      },
    ],
    a = [
      {
        id: "1",
        citizenid: "ERP95808",
        name: "John Doe",
        job: "Police Officer",
        phone: "555-555-5555",
        discord: "discord:917110675220865025",
        dateofbirth: "01/12/2001",
        bank: "10022",
        cash: "2022",
        license: "license:9e9df5e3b52641da00f5b2aba25edc45317689b2",
      },
      {
        id: "2",
        citizenid: "ERP87521",
        name: "Jane Smith",
        job: "Paramedic",
        phone: "555-555-1234",
        discord: "discord:732198415678290144",
        dateofbirth: "05/18/1990",
        bank: "8000",
        cash: "150",
        license: "license:5a0f4e86c7d283b3cde6acba9821d4a5913076d8",
      },
      {
        id: "3",
        citizenid: "ERP35267",
        name: "Michael Johnson",
        job: "Mechanic",
        phone: "555-555-9876",
        discord: "discord:609827518329704632",
        dateofbirth: "11/03/1985",
        bank: "500",
        cash: "3500",
        license: "license:c5f2b76a8e1e0d4c7892a3d1b74cf561b89e25e7",
      },
      {
        id: "4",
        citizenid: "ERP70125",
        name: "Emily Davis",
        job: "Lawyer",
        phone: "555-555-2222",
        discord: "discord:815369027403189267",
        dateofbirth: "09/21/1988",
        bank: "22000",
        cash: "500",
        license: "license:3d4e6f7aa1b9e8c5d2fbc0439e1a865b470192f4",
      },
      {
        id: "5",
        citizenid: "ERP48039",
        name: "Robert Wilson",
        job: "Taxi Driver",
        phone: "555-555-7777",
        discord: "discord:518942015678302479",
        dateofbirth: "07/08/1977",
        bank: "1200",
        cash: "780",
        license: "license:98e7c6d5a2b3f1e4d0c9876a5432109bfedc8a76",
      },
      {
        id: "6",
        citizenid: "ERP91726",
        name: "Amanda Lee",
        job: "Chef",
        phone: "555-555-3333",
        discord: "discord:725048390162871590",
        dateofbirth: "03/15/1995",
        bank: "4000",
        cash: "200",
        license: "license:4a5b6c7d8e9f01234567890abcdef1234567890",
      },
      {
        id: "7",
        citizenid: "ERP24680",
        name: "Christopher Martinez",
        job: "Firefighter",
        phone: "555-555-8888",
        discord: "discord:926371058274690831",
        dateofbirth: "12/30/1982",
        bank: "7500",
        cash: "1000",
        license: "license:7890123456abcdef0123456789a5b4c3d2e1f0",
      },
    ];
  return (
    Ge([{ action: "setActionData", data: r }]),
    Ge([{ action: "setResourceData", data: o }]),
    Ge([{ action: "setPlayersData", data: a }]),
    [
      t,
      [
        {
          component: "Show",
          actions: [
            { name: "show", action: "setVisible", data: !0 },
            { name: "hide", action: "setVisible", data: !1 },
          ],
        },
        {
          component: "Actions Data",
          actions: [{ name: "Set Data", action: "setActionData", data: r }],
        },
        {
          component: "Resource Data",
          actions: [{ name: "Set Data", action: "setResourceData", data: o }],
        },
        {
          component: "Player Data",
          actions: [{ name: "Set Data", action: "setPlayersData", data: a }],
        },
      ],
      () => {
        l(0, (t = !t));
      },
      (c) => {
        if (c.custom == !0) {
          c.customFunction();
          return;
        }
        Ge([{ action: c.action, data: c.data }]);
      },
    ]
  );
}
class hr extends X {
  constructor(e) {
    super(), Q(this, e, pr, dr, W, {});
  }
}
const mt = x(!0),
  jt = x(null),
  Bt = x(null),
  Vt = x(null),
  Ht = x(null),
  Ft = x(null),
  Yt = x(null),
  zt = x(null),
  Ut = x(null),
  Gt = x(null),
  Re = x(null),
  _r = x(null),
  lt = x(null),
  Wt = x(null),
  yt = x(null),
  kt = x(null),
  Jt = x(null),
  In = x(null),
  $t = x(null);
function br(n, e, l) {
  let t, r, o, a, s, i, f, c, d, v, y, m, w, g, _;
  return (
    N(n, Jt, (p) => l(0, (t = p))),
    N(n, $t, (p) => l(1, (r = p))),
    N(n, kt, (p) => l(2, (o = p))),
    N(n, yt, (p) => l(3, (a = p))),
    N(n, zt, (p) => l(4, (s = p))),
    N(n, Yt, (p) => l(5, (i = p))),
    N(n, Ft, (p) => l(6, (f = p))),
    N(n, Ht, (p) => l(7, (c = p))),
    N(n, Vt, (p) => l(8, (d = p))),
    N(n, Bt, (p) => l(9, (v = p))),
    N(n, Re, (p) => l(10, (y = p))),
    N(n, lt, (p) => l(11, (m = p))),
    N(n, Wt, (p) => l(12, (w = p))),
    N(n, Ut, (p) => l(13, (g = p))),
    N(n, jt, (p) => l(14, (_ = p))),
    Ge([{ action: "setVisible", data: !0 }]),
    Ge([{ action: "setBrowserMode", data: !0 }]),
    $e("setupUI", (p) => {
      se(jt, (_ = p.actions), _),
        se(lt, (m = p.resources), m),
        se(Ut, (g = p.playerData), g),
        se(Wt, (w = p.commands), w);
    }),
    $e("setResourceData", (p) => {
      se(lt, (m = p), m);
    }),
    $e("setPlayersData", (p) => {
      se(Re, (y = p), y);
    }),
    $e("data", (p) => {
      se(Bt, (v = p.vehicles), v),
        se(Vt, (d = p.items), d),
        se(Ht, (c = p.jobs), c),
        se(Ft, (f = p.gangs), f),
        se(Yt, (i = p.locations), i),
        se(zt, (s = p.pedlist), s);
    }),
    $e("showVehicleMenu", (p) => {
      se(yt, (a = p), a);
    }),
    $e("showCoordsMenu", (p) => {
      se(kt, (o = p), o);
    }),
    $e("showEntityInfo", (p) => {
      se($t, (r = p), r);
    }),
    $e("setMessages", (p) => {
      Jt.set(p), In.set(t[0]);
    }),
    []
  );
}
class mr extends X {
  constructor(e) {
    super(), Q(this, e, br, null, W, {});
  }
}
function Tn(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ae(
  n,
  {
    delay: e = 0,
    duration: l = 400,
    easing: t = Tn,
    x: r = 0,
    y: o = 0,
    opacity: a = 0,
  } = {}
) {
  const s = getComputedStyle(n),
    i = +s.opacity,
    f = s.transform === "none" ? "" : s.transform,
    c = i * (1 - a),
    [d, v] = fl(r),
    [y, m] = fl(o);
  return {
    delay: e,
    duration: l,
    easing: t,
    css: (w, g) => `
			transform: ${f} translate(${(1 - w) * d}${v}, ${(1 - w) * y}${m});
			opacity: ${i - c * g}`,
  };
}
function Ke(
  n,
  { delay: e = 0, duration: l = 400, easing: t = Tn, axis: r = "y" } = {}
) {
  const o = getComputedStyle(n),
    a = +o.opacity,
    s = r === "y" ? "height" : "width",
    i = parseFloat(o[s]),
    f = r === "y" ? ["top", "bottom"] : ["left", "right"],
    c = f.map((_) => `${_[0].toUpperCase()}${_.slice(1)}`),
    d = parseFloat(o[`padding${c[0]}`]),
    v = parseFloat(o[`padding${c[1]}`]),
    y = parseFloat(o[`margin${c[0]}`]),
    m = parseFloat(o[`margin${c[1]}`]),
    w = parseFloat(o[`border${c[0]}Width`]),
    g = parseFloat(o[`border${c[1]}Width`]);
  return {
    delay: e,
    duration: l,
    easing: t,
    css: (_) =>
      `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * a};${s}: ${
        _ * i
      }px;padding-${f[0]}: ${_ * d}px;padding-${f[1]}: ${_ * v}px;margin-${
        f[0]
      }: ${_ * y}px;margin-${f[1]}: ${_ * m}px;border-${f[0]}-width: ${
        _ * w
      }px;border-${f[1]}-width: ${_ * g}px;`,
  };
}
function vr(n) {
  let e, l, t, r, o;
  return {
    c() {
      (e = h("button")),
        (l = h("i")),
        b(l, "class", n[0]),
        b(e, "title", n[2]),
        b(
          e,
          "class",
          (t =
            "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
            (n[3] == n[1] ? "bg-tertiary" : "") +
            " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100")
        ),
        b(e, "data-tip", n[2]);
    },
    m(a, s) {
      D(a, e, s), u(e, l), r || ((o = R(e, "click", n[4])), (r = !0));
    },
    p(a, [s]) {
      s & 1 && b(l, "class", a[0]),
        s & 4 && b(e, "title", a[2]),
        s & 10 &&
          t !==
            (t =
              "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
              (a[3] == a[1] ? "bg-tertiary" : "") +
              " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100") &&
          b(e, "class", t),
        s & 4 && b(e, "data-tip", a[2]);
    },
    i: T,
    o: T,
    d(a) {
      a && E(e), (r = !1), o();
    },
  };
}
function gr(n, e, l) {
  let t;
  N(n, Rt, (i) => l(3, (t = i)));
  let { icon: r } = e,
    { value: o } = e,
    { tooltiptext: a } = e;
  const s = () => {
    Rt.set(o);
  };
  return (
    (n.$$set = (i) => {
      "icon" in i && l(0, (r = i.icon)),
        "value" in i && l(1, (o = i.value)),
        "tooltiptext" in i && l(2, (a = i.tooltiptext));
    }),
    [r, o, a, t, s]
  );
}
let wr = class extends X {
  constructor(e) {
    super(), Q(this, e, gr, vr, W, { icon: 0, value: 1, tooltiptext: 2 });
  }
};
function yl(n, e, l) {
  const t = n.slice();
  return (t[5] = e[l]), t;
}
function kl(n) {
  let e, l;
  return (
    (e = new wr({
      props: { tooltiptext: n[5].value, icon: n[5].icon, value: n[5].value },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p: T,
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function yr(n) {
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i,
    f,
    c,
    d,
    v,
    y = Y(n[2]),
    m = [];
  for (let g = 0; g < y.length; g += 1) m[g] = kl(yl(n, y, g));
  const w = (g) =>
    C(m[g], 1, 1, () => {
      m[g] = null;
    });
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("button")),
        (r = h("i")),
        (o = $());
      for (let g = 0; g < m.length; g += 1) m[g].c();
      (a = $()),
        (s = h("button")),
        (i = h("i")),
        b(r, "class", "fas"),
        pt(r, "fa-angle-right", n[0]),
        pt(r, "fa-angle-left", !n[0]),
        b(t, "class", "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary"),
        b(l, "class", "mb-auto"),
        b(i, "class", "fas fa-code"),
        b(
          s,
          "class",
          (f =
            "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
            (n[1] ? "text-accent" : "") +
            " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100")
        ),
        b(s, "data-tip", "Dev Mode"),
        b(
          e,
          "class",
          "w-[7vh] h-full flex flex-col gap-y-[1vh] items-center py-[1.4vh] border-r-[0.2vh] border-tertiary"
        );
    },
    m(g, _) {
      D(g, e, _), u(e, l), u(l, t), u(t, r), u(e, o);
      for (let p = 0; p < m.length; p += 1) m[p] && m[p].m(e, null);
      u(e, a),
        u(e, s),
        u(s, i),
        (c = !0),
        d || ((v = [R(t, "click", n[3]), R(s, "click", n[4])]), (d = !0));
    },
    p(g, [_]) {
      if (
        ((!c || _ & 1) && pt(r, "fa-angle-right", g[0]),
        (!c || _ & 1) && pt(r, "fa-angle-left", !g[0]),
        _ & 4)
      ) {
        y = Y(g[2]);
        let p;
        for (p = 0; p < y.length; p += 1) {
          const A = yl(g, y, p);
          m[p]
            ? (m[p].p(A, _), k(m[p], 1))
            : ((m[p] = kl(A)), m[p].c(), k(m[p], 1), m[p].m(e, a));
        }
        for (K(), p = y.length; p < m.length; p += 1) w(p);
        q();
      }
      (!c ||
        (_ & 2 &&
          f !==
            (f =
              "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
              (g[1] ? "text-accent" : "") +
              " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"))) &&
        b(s, "class", f);
    },
    i(g) {
      if (!c) {
        for (let _ = 0; _ < y.length; _ += 1) k(m[_]);
        c = !0;
      }
    },
    o(g) {
      m = m.filter(Boolean);
      for (let _ = 0; _ < m.length; _ += 1) C(m[_]);
      c = !1;
    },
    d(g) {
      g && E(e), ae(m, g), (d = !1), ce(v);
    },
  };
}
function kr(n, e, l) {
  let t, r;
  return (
    N(n, Ee, (i) => l(0, (t = i))),
    N(n, pl, (i) => l(1, (r = i))),
    [
      t,
      r,
      [
        { value: "Staffchat", icon: "fas fa-message" },
        { value: "Players", icon: "fas fa-users" },
        { value: "Server", icon: "fas fa-server" },
        { value: "Commands", icon: "fas fa-slash" },
        { value: "Actions", icon: "fas fa-wand-magic-sparkles" },
      ],
      () => Ee.update((i) => !i),
      () => {
        pl.update((i) => !i), fe("clickButton", { data: "toggleDevmode" });
      },
    ]
  );
}
class $r extends X {
  constructor(e) {
    super(), Q(this, e, kr, yr, W, {});
  }
}
function $l(n) {
  let e, l, t, r, o, a, s;
  return {
    c() {
      (e = h("div")),
        (l = h("i")),
        (t = $()),
        (r = h("input")),
        b(l, "class", "fas fa-magnifying-glass text-[1.5vh]"),
        b(r, "type", "text"),
        b(r, "placeholder", "Search"),
        b(
          r,
          "class",
          (o =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (n[3] && n[5] ? "w-[94%]" : "w-[80%]"))
        ),
        b(
          e,
          "class",
          "w-full h-[4.5vh] rounded-[0.5vh] flex items-center justify-center gap-[1vh] bg-tertiary"
        );
    },
    m(i, f) {
      D(i, e, f),
        u(e, l),
        u(e, t),
        u(e, r),
        Se(r, n[0]),
        a ||
          ((s = [
            R(r, "input", function () {
              Et(n[4]) && n[4].apply(this, arguments);
            }),
            R(r, "input", n[6]),
          ]),
          (a = !0));
    },
    p(i, f) {
      (n = i),
        f & 40 &&
          o !==
            (o =
              "h-full px-[1vh] bg-transparent text-[1.7vh] " +
              (n[3] && n[5] ? "w-[94%]" : "w-[80%]")) &&
          b(r, "class", o),
        f & 1 && r.value !== n[0] && Se(r, n[0]);
    },
    d(i) {
      i && E(e), (a = !1), ce(s);
    },
  };
}
function Er(n) {
  let e,
    l,
    t,
    r,
    o = n[2] && $l(n);
  return {
    c() {
      (e = h("p")),
        (l = L(n[1])),
        (t = $()),
        o && o.c(),
        (r = ee()),
        b(e, "class", "my-[2vh] font-medium text-[2vh]");
    },
    m(a, s) {
      D(a, e, s), u(e, l), D(a, t, s), o && o.m(a, s), D(a, r, s);
    },
    p(a, [s]) {
      s & 2 && P(l, a[1]),
        a[2]
          ? o
            ? o.p(a, s)
            : ((o = $l(a)), o.c(), o.m(r.parentNode, r))
          : o && (o.d(1), (o = null));
    },
    i: T,
    o: T,
    d(a) {
      a && (E(e), E(t), E(r)), o && o.d(a);
    },
  };
}
function Dr(n, e, l) {
  let t;
  N(n, Ee, (c) => l(5, (t = c)));
  let { title: r } = e,
    { hasSearch: o = !1 } = e,
    { hasLargeMenu: a = !1 } = e,
    { onSearchInput: s = null } = e,
    { search: i = null } = e;
  function f() {
    (i = this.value), l(0, i);
  }
  return (
    (n.$$set = (c) => {
      "title" in c && l(1, (r = c.title)),
        "hasSearch" in c && l(2, (o = c.hasSearch)),
        "hasLargeMenu" in c && l(3, (a = c.hasLargeMenu)),
        "onSearchInput" in c && l(4, (s = c.onSearchInput)),
        "search" in c && l(0, (i = c.search));
    }),
    [i, r, o, a, s, t, f]
  );
}
class je extends X {
  constructor(e) {
    super(),
      Q(this, e, Dr, Er, W, {
        title: 1,
        hasSearch: 2,
        hasLargeMenu: 3,
        onSearchInput: 4,
        search: 0,
      });
  }
}
function Cr(n) {
  let e, l, t, r, o, a, s, i, f, c;
  return {
    c() {
      (e = h("div")),
        (l = h("button")),
        (t = L("All Actions")),
        (o = $()),
        (a = h("button")),
        (s = L("Favorites")),
        b(
          l,
          "class",
          (r =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (n[0] ? "bg-tertiary" : " "))
        ),
        b(
          a,
          "class",
          (i =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (n[0] ? " " : "bg-tertiary"))
        ),
        b(e, "class", "mt-[1vh] w-full h-[4.5vh] flex gap-[1vh] font-medium");
    },
    m(d, v) {
      D(d, e, v),
        u(e, l),
        u(l, t),
        u(e, o),
        u(e, a),
        u(a, s),
        f || ((c = [R(l, "click", n[1]), R(a, "click", n[2])]), (f = !0));
    },
    p(d, [v]) {
      v & 1 &&
        r !==
          (r =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (d[0] ? "bg-tertiary" : " ")) &&
        b(l, "class", r),
        v & 1 &&
          i !==
            (i =
              "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
              (d[0] ? " " : "bg-tertiary")) &&
          b(a, "class", i);
    },
    i: T,
    o: T,
    d(d) {
      d && E(e), (f = !1), ce(c);
    },
  };
}
function Lr(n, e, l) {
  let t;
  return (
    N(n, mt, (a) => l(0, (t = a))),
    [
      t,
      () => {
        mt.set(!0);
      },
      () => {
        mt.set(!1);
      },
    ]
  );
}
class Sr extends X {
  constructor(e) {
    super(), Q(this, e, Lr, Cr, W, {});
  }
}
function Ar(n) {
  let e, l, t, r;
  return {
    c() {
      (e = h("button")),
        b(e, "class", (l = (n[0] ? "fas" : "far") + " fa-star"));
    },
    m(o, a) {
      D(o, e, a), t || ((r = R(e, "click", n[1])), (t = !0));
    },
    p(o, [a]) {
      a & 1 &&
        l !== (l = (o[0] ? "fas" : "far") + " fa-star") &&
        b(e, "class", l);
    },
    i: T,
    o: T,
    d(o) {
      o && E(e), (t = !1), r();
    },
  };
}
function Pr(n, e, l) {
  let { data: t } = e,
    r = localStorage.getItem(`favorite-${t}`) === "true";
  const o = () => {
    event.stopPropagation(),
      l(0, (r = !r)),
      localStorage.setItem(`favorite-${t}`, r);
  };
  return (
    Oe(() => {}),
    (n.$$set = (a) => {
      "data" in a && l(2, (t = a.data));
    }),
    [r, o, t]
  );
}
class Mn extends X {
  constructor(e) {
    super(), Q(this, e, Pr, Ar, W, { data: 2 });
  }
}
function Nr(n) {
  let e,
    l,
    t,
    r,
    o,
    a = n[0].label + "",
    s,
    i,
    f,
    c;
  return (
    (t = new Mn({ props: { data: n[1] } })),
    {
      c() {
        (e = h("button")),
          (l = h("div")),
          B(t.$$.fragment),
          (r = $()),
          (o = h("p")),
          (s = L(a)),
          b(l, "class", "flex items-center gap-[1vh]"),
          b(
            e,
            "class",
            "min-h-[4.5vh] w-full flex items-center px-[1.5vh] rounded-[0.5vh] bg-tertiary hover:bg-opacity-90"
          );
      },
      m(d, v) {
        D(d, e, v),
          u(e, l),
          O(t, l, null),
          u(l, r),
          u(l, o),
          u(o, s),
          (i = !0),
          f || ((c = R(e, "click", n[2])), (f = !0));
      },
      p(d, [v]) {
        const y = {};
        v & 2 && (y.data = d[1]),
          t.$set(y),
          (!i || v & 1) && a !== (a = d[0].label + "") && P(s, a);
      },
      i(d) {
        i || (k(t.$$.fragment, d), (i = !0));
      },
      o(d) {
        C(t.$$.fragment, d), (i = !1);
      },
      d(d) {
        d && E(e), j(t), (f = !1), c();
      },
    }
  );
}
function Ir(n, e, l) {
  let { data: t } = e,
    { id: r } = e;
  Oe(() => {});
  const o = () => {
    fe("clickButton", { data: r });
  };
  return (
    (n.$$set = (a) => {
      "data" in a && l(0, (t = a.data)), "id" in a && l(1, (r = a.id));
    }),
    [t, r, o]
  );
}
let Tr = class extends X {
  constructor(e) {
    super(), Q(this, e, Ir, Nr, W, { data: 0, id: 1 });
  }
};
function El(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Dl(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Cl(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Ll(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Sl(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Al(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Pl(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Nl(n, e, l) {
  const t = n.slice();
  return (t[37] = e[l]), t;
}
function Il(n) {
  let e, l, t, r, o;
  function a(f, c) {
    return f[1] === "players"
      ? Fr
      : f[1] === "vehicles"
      ? Hr
      : f[1] === "items"
      ? Vr
      : f[1] === "jobs"
      ? Br
      : f[1] === "gangs"
      ? jr
      : f[1] === "locations"
      ? Or
      : f[1] === "pedlist"
      ? Rr
      : Mr;
  }
  let s = a(n),
    i = s(n);
  return {
    c() {
      (e = h("button")),
        i.c(),
        b(
          e,
          "class",
          "w-full rounded-b-[0.5vh] flex flex-col max-h-[15vh] overflow-y-auto border-t border-primary scroll-visible"
        );
    },
    m(f, c) {
      D(f, e, c),
        i.m(e, null),
        (t = !0),
        r || ((o = [R(e, "mouseenter", n[34]), R(e, "blur", n[35])]), (r = !0));
    },
    p(f, c) {
      s === (s = a(f)) && i
        ? i.p(f, c)
        : (i.d(1), (i = s(f)), i && (i.c(), i.m(e, null)));
    },
    i(f) {
      t ||
        (f &&
          ke(() => {
            t && (l || (l = be(e, Ke, { duration: 150 }, !0)), l.run(1));
          }),
        (t = !0));
    },
    o(f) {
      f && (l || (l = be(e, Ke, { duration: 150 }, !1)), l.run(0)), (t = !1);
    },
    d(f) {
      f && E(e), i.d(), f && l && l.end(), (r = !1), ce(o);
    },
  };
}
function Mr(n) {
  let e,
    l = Y(n[1].filter(n[32])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Tl(El(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 4102) {
        l = Y(r[1].filter(r[32]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = El(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Tl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Rr(n) {
  let e,
    l = Y(n[11].filter(n[30])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Ml(Dl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 6148) {
        l = Y(r[11].filter(r[30]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Dl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Ml(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Or(n) {
  let e,
    l = Y(n[10].filter(n[28])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Rl(Cl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 5124) {
        l = Y(r[10].filter(r[28]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Cl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Rl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function jr(n) {
  let e,
    l = Y(n[9].filter(n[26])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Ol(Ll(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 4612) {
        l = Y(r[9].filter(r[26]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Ll(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Ol(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Br(n) {
  let e,
    l = Y(n[8].filter(n[24])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = jl(Sl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 4356) {
        l = Y(r[8].filter(r[24]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Sl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = jl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Vr(n) {
  let e,
    l = Y(n[7].filter(n[22])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Bl(Al(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 4228) {
        l = Y(r[7].filter(r[22]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Al(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Bl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Hr(n) {
  let e,
    l = Y(n[6].filter(n[20])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Vl(Pl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 4164) {
        l = Y(r[6].filter(r[20]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Pl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Vl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Fr(n) {
  let e,
    l = Y(n[5].filter(n[18])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Hl(Nl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o[0] & 4132) {
        l = Y(r[5].filter(r[18]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Nl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Hl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function Tl(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s;
  function i() {
    return n[33](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(f, c) {
      D(f, e, c),
        u(e, l),
        u(l, r),
        u(e, o),
        a || ((s = R(e, "click", i)), (a = !0));
    },
    p(f, c) {
      (n = f), c[0] & 6 && t !== (t = n[37].label + "") && P(r, t);
    },
    d(f) {
      f && E(e), (a = !1), s();
    },
  };
}
function Ml(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s,
    i = n[37].value + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[31](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 2052 && t !== (t = n[37].label + "") && P(r, t),
        g[0] & 2052 && i !== (i = n[37].value + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function Rl(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s,
    i = n[37].value + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[29](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 1028 && t !== (t = n[37].label + "") && P(r, t),
        g[0] & 1028 && i !== (i = n[37].value + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function Ol(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s,
    i = n[37].value + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[27](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 516 && t !== (t = n[37].label + "") && P(r, t),
        g[0] & 516 && i !== (i = n[37].value + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function jl(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s,
    i = n[37].value + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[25](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 260 && t !== (t = n[37].label + "") && P(r, t),
        g[0] & 260 && i !== (i = n[37].value + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function Bl(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s,
    i = n[37].value + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[23](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 132 && t !== (t = n[37].label + "") && P(r, t),
        g[0] & 132 && i !== (i = n[37].value + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function Vl(n) {
  let e,
    l,
    t = n[37].label + "",
    r,
    o,
    a,
    s,
    i = n[37].value + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[21](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 68 && t !== (t = n[37].label + "") && P(r, t),
        g[0] & 68 && i !== (i = n[37].value + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function Hl(n) {
  let e,
    l,
    t = n[37].name + "",
    r,
    o,
    a,
    s,
    i = n[37].id + "",
    f,
    c,
    d,
    v,
    y;
  function m() {
    return n[19](n[37]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        (a = h("p")),
        (s = L("(")),
        (f = L(i)),
        (c = L(")")),
        (d = $()),
        b(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(w, g) {
      D(w, e, g),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        v || ((y = R(e, "click", m)), (v = !0));
    },
    p(w, g) {
      (n = w),
        g[0] & 36 && t !== (t = n[37].name + "") && P(r, t),
        g[0] & 36 && i !== (i = n[37].id + "") && P(f, i);
    },
    d(w) {
      w && E(e), (v = !1), y();
    },
  };
}
function Yr(n) {
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i,
    f,
    c = n[4] && Il(n);
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("input")),
        (r = $()),
        (o = h("i")),
        (s = $()),
        c && c.c(),
        b(t, "type", "text"),
        b(t, "placeholder", n[0]),
        b(t, "class", "h-full w-[90%] bg-transparent"),
        b(
          o,
          "class",
          (a = "fas fa-angle-" + (n[4] ? "down" : "right") + " text-[1.2vh]")
        ),
        b(
          l,
          "class",
          "w-full h-[3.8vh] px-[1vh] flex justify-between items-center"
        ),
        b(
          e,
          "class",
          "w-[22vh] flex flex-col bg-secondary rounded-[0.5vh] border-[0.1vh] border-primary"
        );
    },
    m(d, v) {
      D(d, e, v),
        u(e, l),
        u(l, t),
        Se(t, n[2]),
        u(l, r),
        u(l, o),
        u(e, s),
        c && c.m(e, null),
        i ||
          ((f = [
            R(t, "focus", n[13]),
            R(t, "blur", n[14]),
            R(t, "input", n[17]),
          ]),
          (i = !0));
    },
    p(d, v) {
      v[0] & 1 && b(t, "placeholder", d[0]),
        v[0] & 4 && t.value !== d[2] && Se(t, d[2]),
        v[0] & 16 &&
          a !==
            (a =
              "fas fa-angle-" + (d[4] ? "down" : "right") + " text-[1.2vh]") &&
          b(o, "class", a),
        d[4]
          ? c
            ? (c.p(d, v), v[0] & 16 && k(c, 1))
            : ((c = Il(d)), c.c(), k(c, 1), c.m(e, null))
          : c &&
            (K(),
            C(c, 1, 1, () => {
              c = null;
            }),
            q());
    },
    i(d) {
      k(c);
    },
    o(d) {
      C(c);
    },
    d(d) {
      d && E(e), c && c.d(), (i = !1), ce(f);
    },
  };
}
function zr(n, e, l) {
  let t, r, o, a, s, i, f;
  N(n, Re, (S) => l(5, (t = S))),
    N(n, Bt, (S) => l(6, (r = S))),
    N(n, Vt, (S) => l(7, (o = S))),
    N(n, Ht, (S) => l(8, (a = S))),
    N(n, Ft, (S) => l(9, (s = S))),
    N(n, Yt, (S) => l(10, (i = S))),
    N(n, zt, (S) => l(11, (f = S)));
  let { action: c } = e,
    { label_title: d } = e,
    { data: v } = e,
    { selectedData: y } = e,
    m = "",
    w = !1,
    g = !1;
  function _(S, ne) {
    l(2, (m = S)), l(4, (g = !1)), y({ label: S, value: ne, id: d });
  }
  function p() {
    l(3, (w = !0)), l(4, (g = !0)), l(2, (m = ""));
  }
  function A() {
    w || l(4, (g = !1)), l(3, (w = !1));
  }
  async function z() {
    const S = await fe("getPlayers");
    Re.set(S);
  }
  Oe(() => {
    v === "players" && z();
  });
  function H() {
    (m = this.value), l(2, m);
  }
  const V = (S) => S.name.toLowerCase().includes(m.toLowerCase()),
    U = (S) => _(S.name, S.id),
    J = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    F = (S) => _(S.label, S.value),
    M = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    I = (S) => _(S.label, S.value),
    Z = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    ue = (S) => _(S.label, S.value),
    de = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    te = (S) => _(S.label, S.value),
    he = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    me = (S) => _(S.label, S.value),
    ve = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    we = (S) => _(S.label, S.value),
    ge = (S) =>
      S.label.toLowerCase().includes(m.toLowerCase()) ||
      S.value.toLowerCase().includes(m.toLowerCase()),
    Le = (S) => _(S.label, S.value),
    ye = () => {
      l(3, (w = !0));
    },
    De = () => {
      l(3, (w = !1));
    };
  return (
    (n.$$set = (S) => {
      "action" in S && l(15, (c = S.action)),
        "label_title" in S && l(0, (d = S.label_title)),
        "data" in S && l(1, (v = S.data)),
        "selectedData" in S && l(16, (y = S.selectedData));
    }),
    [
      d,
      v,
      m,
      w,
      g,
      t,
      r,
      o,
      a,
      s,
      i,
      f,
      _,
      p,
      A,
      c,
      y,
      H,
      V,
      U,
      J,
      F,
      M,
      I,
      Z,
      ue,
      de,
      te,
      he,
      me,
      ve,
      we,
      ge,
      Le,
      ye,
      De,
    ]
  );
}
class Rn extends X {
  constructor(e) {
    super(),
      Q(
        this,
        e,
        zr,
        Yr,
        W,
        { action: 15, label_title: 0, data: 1, selectedData: 16 },
        null,
        [-1, -1]
      );
  }
}
function Ur(n) {
  let e, l, t, r, o, a;
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("input")),
        b(t, "type", "text"),
        b(t, "placeholder", (r = n[0].label)),
        b(t, "class", "h-full w-[90%] bg-transparent"),
        b(l, "class", "w-full h-[3.8vh] pl-[1vh] flex justify-between"),
        b(
          e,
          "class",
          "w-[22vh] flex flex-col bg-secondary rounded-[0.5vh] border-[0.1vh] border-primary"
        );
    },
    m(s, i) {
      D(s, e, i),
        u(e, l),
        u(l, t),
        Se(t, n[1]),
        o ||
          ((a = [
            R(t, "input", n[4]),
            R(t, "input", n[5]),
            R(t, "blur", n[6]),
            R(t, "click", n[7]),
          ]),
          (o = !0));
    },
    p(s, [i]) {
      i & 1 && r !== (r = s[0].label) && b(t, "placeholder", r),
        i & 2 && t.value !== s[1] && Se(t, s[1]);
    },
    i: T,
    o: T,
    d(s) {
      s && E(e), (o = !1), ce(a);
    },
  };
}
function Gr(n, e, l) {
  let { data: t } = e,
    { selectedData: r } = e;
  function o(d, v) {
    r({ label: d, value: v, id: d });
  }
  let a = "";
  function s() {
    (a = this.value), l(1, a);
  }
  const i = (d) => l(1, (a = d.target.value)),
    f = () => o(t.label, a),
    c = () => o(t.label, a);
  return (
    (n.$$set = (d) => {
      "data" in d && l(0, (t = d.data)),
        "selectedData" in d && l(3, (r = d.selectedData));
    }),
    [t, a, o, r, s, i, f, c]
  );
}
class Qt extends X {
  constructor(e) {
    super(), Q(this, e, Gr, Ur, W, { data: 0, selectedData: 3 });
  }
}
function Fl(n, e, l) {
  const t = n.slice();
  return (t[8] = e[l]), t;
}
function Yl(n) {
  let e,
    l,
    t,
    r = n[0].dropdown && zl(n);
  return {
    c() {
      (e = h("div")),
        r && r.c(),
        b(
          e,
          "class",
          "w-full rounded-b-[1vh] p-[1.5vh] flex flex-col gap-[1vh] justify-start items-start"
        );
    },
    m(o, a) {
      D(o, e, a), r && r.m(e, null), (t = !0);
    },
    p(o, a) {
      o[0].dropdown
        ? r
          ? (r.p(o, a), a & 1 && k(r, 1))
          : ((r = zl(o)), r.c(), k(r, 1), r.m(e, null))
        : r &&
          (K(),
          C(r, 1, 1, () => {
            r = null;
          }),
          q());
    },
    i(o) {
      t ||
        (k(r),
        o &&
          ke(() => {
            t && (l || (l = be(e, Ke, { duration: 150 }, !0)), l.run(1));
          }),
        (t = !0));
    },
    o(o) {
      C(r),
        o && (l || (l = be(e, Ke, { duration: 150 }, !1)), l.run(0)),
        (t = !1);
    },
    d(o) {
      o && E(e), r && r.d(), o && l && l.end();
    },
  };
}
function zl(n) {
  let e,
    l,
    t = Y(n[0].dropdown),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Ul(Fl(n, t, a));
  const o = (a) =>
    C(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = ee();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      D(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 25) {
        t = Y(a[0].dropdown);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = Fl(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = Ul(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (K(), i = t.length; i < r.length; i += 1) o(i);
        q();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) C(r[s]);
      l = !1;
    },
    d(a) {
      a && E(e), ae(r, a);
    },
  };
}
function Wr(n) {
  let e,
    l,
    t = n[8].label + "",
    r,
    o,
    a,
    s;
  function i() {
    return n[6](n[8]);
  }
  return {
    c() {
      (e = h("button")),
        (l = h("p")),
        (r = L(t)),
        (o = $()),
        b(
          e,
          "class",
          "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
        );
    },
    m(f, c) {
      D(f, e, c),
        u(e, l),
        u(l, r),
        u(e, o),
        a || ((s = R(e, "click", i)), (a = !0));
    },
    p(f, c) {
      (n = f), c & 1 && t !== (t = n[8].label + "") && P(r, t);
    },
    i: T,
    o: T,
    d(f) {
      f && E(e), (a = !1), s();
    },
  };
}
function Jr(n) {
  let e, l;
  return (
    (e = new Rn({
      props: {
        action: n[8],
        label_title: n[8].label,
        data: n[8].data,
        selectedData: n[3],
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.action = t[8]),
          r & 1 && (o.label_title = t[8].label),
          r & 1 && (o.data = t[8].data),
          e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Kr(n) {
  let e, l;
  return (
    (e = new Qt({ props: { data: n[8], selectedData: n[3] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.data = t[8]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Ul(n) {
  let e, l, t, r;
  const o = [Kr, Jr, Wr],
    a = [];
  function s(i, f) {
    return i[8].option === "text"
      ? 0
      : i[8].option === "dropdown"
      ? 1
      : i[8].option === "button"
      ? 2
      : -1;
  }
  return (
    ~(e = s(n)) && (l = a[e] = o[e](n)),
    {
      c() {
        l && l.c(), (t = ee());
      },
      m(i, f) {
        ~e && a[e].m(i, f), D(i, t, f), (r = !0);
      },
      p(i, f) {
        let c = e;
        (e = s(i)),
          e === c
            ? ~e && a[e].p(i, f)
            : (l &&
                (K(),
                C(a[c], 1, 1, () => {
                  a[c] = null;
                }),
                q()),
              ~e
                ? ((l = a[e]),
                  l ? l.p(i, f) : ((l = a[e] = o[e](i)), l.c()),
                  k(l, 1),
                  l.m(t.parentNode, t))
                : (l = null));
      },
      i(i) {
        r || (k(l), (r = !0));
      },
      o(i) {
        C(l), (r = !1);
      },
      d(i) {
        i && E(t), ~e && a[e].d(i);
      },
    }
  );
}
function qr(n) {
  let e,
    l,
    t,
    r,
    o,
    a,
    s = n[0].label + "",
    i,
    f,
    c,
    d,
    v,
    y,
    m,
    w,
    g;
  r = new Mn({ props: { data: n[1] } });
  let _ = n[2] && Yl(n);
  return {
    c() {
      (e = h("div")),
        (l = h("button")),
        (t = h("div")),
        B(r.$$.fragment),
        (o = $()),
        (a = h("p")),
        (i = L(s)),
        (f = $()),
        (c = h("i")),
        (v = $()),
        _ && _.c(),
        b(t, "class", "flex items-center gap-[1vh]"),
        b(c, "class", (d = "fas fa-angle-" + (n[2] ? "down" : "right"))),
        b(
          l,
          "class",
          "w-full h-[4.5vh] flex items-center justify-between px-[1.5vh]"
        ),
        b(
          e,
          "class",
          (y =
            "bg-tertiary rounded-[0.5vh] " +
            (n[2] ? "" : "hover:bg-opacity-90"))
        );
    },
    m(p, A) {
      D(p, e, A),
        u(e, l),
        u(l, t),
        O(r, t, null),
        u(t, o),
        u(t, a),
        u(a, i),
        u(l, f),
        u(l, c),
        u(e, v),
        _ && _.m(e, null),
        (m = !0),
        w || ((g = R(l, "click", n[5])), (w = !0));
    },
    p(p, [A]) {
      const z = {};
      A & 2 && (z.data = p[1]),
        r.$set(z),
        (!m || A & 1) && s !== (s = p[0].label + "") && P(i, s),
        (!m ||
          (A & 4 && d !== (d = "fas fa-angle-" + (p[2] ? "down" : "right")))) &&
          b(c, "class", d),
        p[2]
          ? _
            ? (_.p(p, A), A & 4 && k(_, 1))
            : ((_ = Yl(p)), _.c(), k(_, 1), _.m(e, null))
          : _ &&
            (K(),
            C(_, 1, 1, () => {
              _ = null;
            }),
            q()),
        (!m ||
          (A & 4 &&
            y !==
              (y =
                "bg-tertiary rounded-[0.5vh] " +
                (p[2] ? "" : "hover:bg-opacity-90")))) &&
          b(e, "class", y);
    },
    i(p) {
      m || (k(r.$$.fragment, p), k(_), (m = !0));
    },
    o(p) {
      C(r.$$.fragment, p), C(_), (m = !1);
    },
    d(p) {
      p && E(e), j(r), _ && _.d(), (w = !1), g();
    },
  };
}
function Qr(n, e, l) {
  let { data: t } = e,
    { id: r } = e,
    o,
    a = {};
  function s(d) {
    a[d.id] = d;
  }
  function i(d, v) {
    d && (l(0, (t.event = d), t), l(0, (t.type = v), t)),
      fe("clickButton", { data: r, selectedData: a });
  }
  const f = () => l(2, (o = !o)),
    c = (d) => {
      i(d.event, d.type);
    };
  return (
    (n.$$set = (d) => {
      "data" in d && l(0, (t = d.data)), "id" in d && l(1, (r = d.id));
    }),
    [t, r, o, s, i, f, c]
  );
}
class Xr extends X {
  constructor(e) {
    super(), Q(this, e, Qr, qr, W, { data: 0, id: 1 });
  }
}
function Zr(n) {
  let e, l, t, r;
  return {
    c() {
      (e = h("button")),
        (l = h("i")),
        b(l, "class", n[0]),
        b(
          e,
          "class",
          "w-[3vh] h-[3vh] rounded-[0.5vh] bg-secondary hover:bg-primary"
        );
    },
    m(o, a) {
      D(o, e, a), u(e, l), t || ((r = R(e, "click", n[1])), (t = !0));
    },
    p(o, [a]) {
      a & 1 && b(l, "class", o[0]);
    },
    i: T,
    o: T,
    d(o) {
      o && E(e), (t = !1), r();
    },
  };
}
function xr(n, e, l) {
  let { resource: t } = e,
    { icon: r } = e,
    { state: o } = e;
  async function a() {
    event.stopPropagation();
    const s = await fe("setResourceState", { name: t, state: o });
    lt.set(s);
  }
  return (
    (n.$$set = (s) => {
      "resource" in s && l(2, (t = s.resource)),
        "icon" in s && l(0, (r = s.icon)),
        "state" in s && l(3, (o = s.state));
    }),
    [r, a, t, o]
  );
}
class Kt extends X {
  constructor(e) {
    super(), Q(this, e, xr, Zr, W, { resource: 2, icon: 0, state: 3 });
  }
}
function Gl(n, e, l) {
  const t = n.slice();
  return (t[5] = e[l][0]), (t[6] = e[l][1]), t;
}
function Wl(n) {
  let e,
    l,
    t = Y(Object.entries(n[1]).filter(n[4]).sort(Kl)),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Jl(Gl(n, t, a));
  const o = (a) =>
    C(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = ee();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      D(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 7) {
        t = Y(Object.entries(a[1]).filter(a[4]).sort(Kl));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = Gl(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = Jl(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (K(), i = t.length; i < r.length; i += 1) o(i);
        q();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) C(r[s]);
      l = !1;
    },
    d(a) {
      a && E(e), ae(r, a);
    },
  };
}
function ea(n) {
  let e, l;
  return (
    (e = new Tr({ props: { data: n[6], id: n[5] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 7 && (o.data = t[6]), r & 7 && (o.id = t[5]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ta(n) {
  let e, l;
  return (
    (e = new Xr({ props: { data: n[6], id: n[5] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 7 && (o.data = t[6]), r & 7 && (o.id = t[5]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Jl(n) {
  let e, l, t, r;
  const o = [ta, ea],
    a = [];
  function s(i, f) {
    return i[6].dropdown ? 0 : 1;
  }
  return (
    (e = s(n)),
    (l = a[e] = o[e](n)),
    {
      c() {
        l.c(), (t = ee());
      },
      m(i, f) {
        a[e].m(i, f), D(i, t, f), (r = !0);
      },
      p(i, f) {
        let c = e;
        (e = s(i)),
          e === c
            ? a[e].p(i, f)
            : (K(),
              C(a[c], 1, 1, () => {
                a[c] = null;
              }),
              q(),
              (l = a[e]),
              l ? l.p(i, f) : ((l = a[e] = o[e](i)), l.c()),
              k(l, 1),
              l.m(t.parentNode, t));
      },
      i(i) {
        r || (k(l), (r = !0));
      },
      o(i) {
        C(l), (r = !1);
      },
      d(i) {
        i && E(t), a[e].d(i);
      },
    }
  );
}
function la(n) {
  let e, l, t, r, o, a, s;
  (l = new je({
    props: {
      title: "Actions",
      hasSearch: !0,
      hasLargeMenu: !0,
      onSearchInput: n[3],
      search: n[0],
    },
  })),
    (r = new Sr({}));
  let i = n[1] && Wl(n);
  return {
    c() {
      (e = h("div")),
        B(l.$$.fragment),
        (t = $()),
        B(r.$$.fragment),
        (o = $()),
        (a = h("div")),
        i && i.c(),
        b(
          a,
          "class",
          "w-full h-[77%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto scroll-visble"
        ),
        b(e, "class", "h-full w-[99vh] px-[2vh]");
    },
    m(f, c) {
      D(f, e, c),
        O(l, e, null),
        u(e, t),
        O(r, e, null),
        u(e, o),
        u(e, a),
        i && i.m(a, null),
        (s = !0);
    },
    p(f, [c]) {
      const d = {};
      c & 1 && (d.onSearchInput = f[3]),
        c & 1 && (d.search = f[0]),
        l.$set(d),
        f[1]
          ? i
            ? (i.p(f, c), c & 2 && k(i, 1))
            : ((i = Wl(f)), i.c(), k(i, 1), i.m(a, null))
          : i &&
            (K(),
            C(i, 1, 1, () => {
              i = null;
            }),
            q());
    },
    i(f) {
      s || (k(l.$$.fragment, f), k(r.$$.fragment, f), k(i), (s = !0));
    },
    o(f) {
      C(l.$$.fragment, f), C(r.$$.fragment, f), C(i), (s = !1);
    },
    d(f) {
      f && E(e), j(l), j(r), i && i.d();
    },
  };
}
const Kl = ([n, e], [l, t]) => e.label.localeCompare(t.label);
function na(n, e, l) {
  let t, r, o;
  return (
    N(n, hl, (i) => l(0, (t = i))),
    N(n, jt, (i) => l(1, (r = i))),
    N(n, mt, (i) => l(2, (o = i))),
    [
      t,
      r,
      o,
      (i) => se(hl, (t = i.target.value), t),
      ([i, f]) =>
        o
          ? f.label.toLowerCase().includes(t.toLowerCase())
          : localStorage.getItem(`favorite-${i}`) === "true",
    ]
  );
}
class ra extends X {
  constructor(e) {
    super(), Q(this, e, na, la, W, {});
  }
}
function ql(n) {
  let e,
    l,
    t = (n[3] ? n[3] : "") + "",
    r,
    o,
    a;
  return {
    c() {
      (e = h("div")), (l = h("p")), (r = L(t)), b(l, "class", "text-gray-400");
    },
    m(s, i) {
      D(s, e, i), u(e, l), u(l, r), (a = !0);
    },
    p(s, i) {
      (!a || i & 8) && t !== (t = (s[3] ? s[3] : "") + "") && P(r, t);
    },
    i(s) {
      a ||
        (s &&
          ke(() => {
            a && (o || (o = be(e, Ke, { duration: 150 }, !0)), o.run(1));
          }),
        (a = !0));
    },
    o(s) {
      s && (o || (o = be(e, Ke, { duration: 150 }, !1)), o.run(0)), (a = !1);
    },
    d(s) {
      s && E(e), s && o && o.end();
    },
  };
}
function aa(n) {
  let e, l;
  return (
    (e = new Kt({
      props: { icon: "fas fa-play", resource: n[0], state: "start" },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.resource = t[0]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function oa(n) {
  let e, l, t, r;
  return (
    (e = new Kt({
      props: { icon: "fas fa-stop", resource: n[0], state: "stop" },
    })),
    (t = new Kt({
      props: { icon: "fas fa-arrows-rotate", resource: n[0], state: "restart" },
    })),
    {
      c() {
        B(e.$$.fragment), (l = $()), B(t.$$.fragment);
      },
      m(o, a) {
        O(e, o, a), D(o, l, a), O(t, o, a), (r = !0);
      },
      p(o, a) {
        const s = {};
        a & 1 && (s.resource = o[0]), e.$set(s);
        const i = {};
        a & 1 && (i.resource = o[0]), t.$set(i);
      },
      i(o) {
        r || (k(e.$$.fragment, o), k(t.$$.fragment, o), (r = !0));
      },
      o(o) {
        C(e.$$.fragment, o), C(t.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && E(l), j(e, o), j(t, o);
      },
    }
  );
}
function ia(n) {
  let e,
    l,
    t,
    r = (n[0] ? n[0] : "") + "",
    o,
    a,
    s,
    i = n[1] ? "Version: " + n[1] : "",
    f,
    c,
    d,
    v = n[2] ? "Author: " + n[2] : "",
    y,
    m,
    w,
    g,
    _,
    p,
    A,
    z,
    H,
    V = n[5] && ql(n);
  const U = [oa, aa],
    J = [];
  function F(M, I) {
    return M[4] == "started" ? 0 : 1;
  }
  return (
    (_ = F(n)),
    (p = J[_] = U[_](n)),
    {
      c() {
        (e = h("button")),
          (l = h("div")),
          (t = h("p")),
          (o = L(r)),
          (a = $()),
          (s = h("p")),
          (f = L(i)),
          (c = $()),
          (d = h("p")),
          (y = L(v)),
          (m = $()),
          V && V.c(),
          (w = $()),
          (g = h("div")),
          p.c(),
          b(t, "class", "text-[1.8vh] font-medium"),
          b(s, "class", "text-gray-400"),
          b(d, "class", "text-gray-400"),
          b(
            l,
            "class",
            "h-full p-[2vh] -mr-[8vh] flex flex-col items-start text-start"
          ),
          b(g, "class", "flex gap-[1vh] h-full py-[1.8vh] pr-[1.8vh]"),
          b(
            e,
            "class",
            "w-full flex justify-between rounded-[0.5vh] bg-tertiary items-center"
          );
      },
      m(M, I) {
        D(M, e, I),
          u(e, l),
          u(l, t),
          u(t, o),
          u(l, a),
          u(l, s),
          u(s, f),
          u(l, c),
          u(l, d),
          u(d, y),
          u(l, m),
          V && V.m(l, null),
          u(e, w),
          u(e, g),
          J[_].m(g, null),
          (A = !0),
          z || ((H = R(e, "click", n[6])), (z = !0));
      },
      p(M, [I]) {
        (!A || I & 1) && r !== (r = (M[0] ? M[0] : "") + "") && P(o, r),
          (!A || I & 2) &&
            i !== (i = M[1] ? "Version: " + M[1] : "") &&
            P(f, i),
          (!A || I & 4) && v !== (v = M[2] ? "Author: " + M[2] : "") && P(y, v),
          M[5]
            ? V
              ? (V.p(M, I), I & 32 && k(V, 1))
              : ((V = ql(M)), V.c(), k(V, 1), V.m(l, null))
            : V &&
              (K(),
              C(V, 1, 1, () => {
                V = null;
              }),
              q());
        let Z = _;
        (_ = F(M)),
          _ === Z
            ? J[_].p(M, I)
            : (K(),
              C(J[Z], 1, 1, () => {
                J[Z] = null;
              }),
              q(),
              (p = J[_]),
              p ? p.p(M, I) : ((p = J[_] = U[_](M)), p.c()),
              k(p, 1),
              p.m(g, null));
      },
      i(M) {
        A || (k(V), k(p), (A = !0));
      },
      o(M) {
        C(V), C(p), (A = !1);
      },
      d(M) {
        M && E(e), V && V.d(), J[_].d(), (z = !1), H();
      },
    }
  );
}
function sa(n, e, l) {
  let { label: t } = e,
    { version: r } = e,
    { author: o } = e,
    { description: a } = e,
    { state: s } = e,
    i;
  const f = () => l(5, (i = !i));
  return (
    (n.$$set = (c) => {
      "label" in c && l(0, (t = c.label)),
        "version" in c && l(1, (r = c.version)),
        "author" in c && l(2, (o = c.author)),
        "description" in c && l(3, (a = c.description)),
        "state" in c && l(4, (s = c.state));
    }),
    [t, r, o, a, s, i, f]
  );
}
class fa extends X {
  constructor(e) {
    super(),
      Q(this, e, sa, ia, W, {
        label: 0,
        version: 1,
        author: 2,
        description: 3,
        state: 4,
      });
  }
}
function Ql(n, e, l) {
  const t = n.slice();
  return (t[7] = e[l]), t;
}
function Xl(n) {
  let e, l, t, r, o;
  const a = [ua, ca],
    s = [];
  function i(f, c) {
    return (
      c & 3 && (e = null),
      e == null && (e = !!(f[1] && f[1].filter(f[4]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(n, -1)),
    (t = s[l] = a[l](n)),
    {
      c() {
        t.c(), (r = ee());
      },
      m(f, c) {
        s[l].m(f, c), D(f, r, c), (o = !0);
      },
      p(f, c) {
        let d = l;
        (l = i(f, c)),
          l === d
            ? s[l].p(f, c)
            : (K(),
              C(s[d], 1, 1, () => {
                s[d] = null;
              }),
              q(),
              (t = s[l]),
              t ? t.p(f, c) : ((t = s[l] = a[l](f)), t.c()),
              k(t, 1),
              t.m(r.parentNode, r));
      },
      i(f) {
        o || (k(t), (o = !0));
      },
      o(f) {
        C(t), (o = !1);
      },
      d(f) {
        f && E(r), s[l].d(f);
      },
    }
  );
}
function ca(n) {
  let e,
    l,
    t = Y(n[3].filter(n[6])),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Zl(Ql(n, t, a));
  const o = (a) =>
    C(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = ee();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      D(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 9) {
        t = Y(a[3].filter(a[6]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = Ql(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = Zl(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (K(), i = t.length; i < r.length; i += 1) o(i);
        q();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) C(r[s]);
      l = !1;
    },
    d(a) {
      a && E(e), ae(r, a);
    },
  };
}
function ua(n) {
  let e;
  return {
    c() {
      (e = h("div")),
        (e.textContent = "No Resource Found."),
        b(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      D(l, e, t);
    },
    p: T,
    i: T,
    o: T,
    d(l) {
      l && E(e);
    },
  };
}
function Zl(n) {
  let e, l;
  return (
    (e = new fa({
      props: {
        label: n[7].name,
        version: n[7].version,
        author: n[7].author,
        description: n[7].description,
        state: n[7].resourceState,
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.label = t[7].name),
          r & 1 && (o.version = t[7].version),
          r & 1 && (o.author = t[7].author),
          r & 1 && (o.description = t[7].description),
          r & 1 && (o.state = t[7].resourceState),
          e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function xl(n) {
  let e, l, t;
  return (
    (l = new je({ props: { title: "Dashboard" } })),
    {
      c() {
        (e = h("div")),
          B(l.$$.fragment),
          b(
            e,
            "class",
            "h-full w-[66vh] border-l-[0.2vh] border-tertiary px-[2vh]"
          );
      },
      m(r, o) {
        D(r, e, o), O(l, e, null), (t = !0);
      },
      i(r) {
        t || (k(l.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(l.$$.fragment, r), (t = !1);
      },
      d(r) {
        r && E(e), j(l);
      },
    }
  );
}
function da(n) {
  let e, l, t, r, o, a, s;
  l = new je({
    props: { title: "Server", hasSearch: !0, onSearchInput: n[5] },
  });
  let i = n[1] && Xl(n),
    f = n[2] && xl();
  return {
    c() {
      (e = h("div")),
        B(l.$$.fragment),
        (t = $()),
        (r = h("div")),
        i && i.c(),
        (o = $()),
        f && f.c(),
        (a = ee()),
        b(
          r,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        b(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(c, d) {
      D(c, e, d),
        O(l, e, null),
        u(e, t),
        u(e, r),
        i && i.m(r, null),
        D(c, o, d),
        f && f.m(c, d),
        D(c, a, d),
        (s = !0);
    },
    p(c, [d]) {
      const v = {};
      d & 1 && (v.onSearchInput = c[5]),
        l.$set(v),
        c[1]
          ? i
            ? (i.p(c, d), d & 2 && k(i, 1))
            : ((i = Xl(c)), i.c(), k(i, 1), i.m(r, null))
          : i &&
            (K(),
            C(i, 1, 1, () => {
              i = null;
            }),
            q()),
        c[2]
          ? f
            ? d & 4 && k(f, 1)
            : ((f = xl()), f.c(), k(f, 1), f.m(a.parentNode, a))
          : f &&
            (K(),
            C(f, 1, 1, () => {
              f = null;
            }),
            q());
    },
    i(c) {
      s || (k(l.$$.fragment, c), k(i), k(f), (s = !0));
    },
    o(c) {
      C(l.$$.fragment, c), C(i), C(f), (s = !1);
    },
    d(c) {
      c && (E(e), E(o), E(a)), j(l), i && i.d(), f && f.d(c);
    },
  };
}
function pa(n, e, l) {
  let t, r;
  N(n, lt, (c) => l(1, (t = c))), N(n, Ee, (c) => l(2, (r = c)));
  let o = "",
    a = t ? t.slice().sort((c, d) => c.name.localeCompare(d.name)) : [];
  return [
    o,
    t,
    r,
    a,
    (c) => c.name.toLowerCase().includes(o.toLowerCase()),
    (c) => l(0, (o = c.target.value)),
    (c) => c.name.toLowerCase().includes(o.toLowerCase()),
  ];
}
class ha extends X {
  constructor(e) {
    super(), Q(this, e, pa, da, W, {});
  }
}
function _a(n) {
  let e, l, t, r, o, a, s;
  return {
    c() {
      (e = h("div")),
        (l = h("input")),
        (r = $()),
        (o = h("button")),
        (o.innerHTML = '<i class="fas fa-paper-plane text-[1.5vh]"></i>'),
        b(l, "type", "text"),
        b(l, "placeholder", "Your message here"),
        b(
          l,
          "class",
          (t =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (n[1] ? "w-[94%]" : "w-[80%]"))
        ),
        b(o, "class", "h-full w-[5vh] rounded-r-[0.5vh] hover:bg-secondary"),
        b(
          e,
          "class",
          "mt-auto w-full h-[4.5vh] rounded-[0.5vh] flex items-center justify-center gap-[1vh] bg-tertiary"
        );
    },
    m(i, f) {
      D(i, e, f),
        u(e, l),
        Se(l, n[0]),
        u(e, r),
        u(e, o),
        a ||
          ((s = [
            R(l, "keydown", n[3]),
            R(l, "input", n[4]),
            R(o, "click", n[2]),
          ]),
          (a = !0));
    },
    p(i, [f]) {
      f & 2 &&
        t !==
          (t =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (i[1] ? "w-[94%]" : "w-[80%]")) &&
        b(l, "class", t),
        f & 1 && l.value !== i[0] && Se(l, i[0]);
    },
    i: T,
    o: T,
    d(i) {
      i && E(e), (a = !1), ce(s);
    },
  };
}
function ba() {
  let n = document.getElementById("chatList");
  n.scroll({ top: n.scrollHeight, behavior: "auto" });
}
function ma(n, e, l) {
  let t;
  N(n, Ee, (i) => l(1, (t = i)));
  let r = "";
  function o() {
    r.trim() &&
      (fe("SendMessage", { message: r }),
      l(0, (r = "")),
      setTimeout(() => {
        ba();
      }, 100));
  }
  const a = (i) => {
    i.key === "Enter" && o();
  };
  function s() {
    (r = this.value), l(0, r);
  }
  return [r, t, o, a, s];
}
class va extends X {
  constructor(e) {
    super(), Q(this, e, ma, _a, W, {});
  }
}
const ga = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function _t(n, e = !1, l = !1) {
  const t = n.getDate(),
    r = ga[n.getMonth()],
    o = n.getFullYear(),
    a = n.getHours();
  let s = n.getMinutes();
  return (
    s < 10 && (s = `0${s}`),
    e
      ? `${e} at ${a}:${s}`
      : l
      ? `${t}. ${r} at ${a}:${s}`
      : `${t}. ${r} ${o}. at ${a}:${s}`
  );
}
function en(n) {
  if (!n) return "Unknown";
  let e;
  try {
    e = typeof n == "object" ? n : new Date(n);
  } catch {
    return "Invalid date";
  }
  if (isNaN(e)) return "Invalid date";
  const l = 864e5,
    t = new Date(),
    r = new Date(t - l),
    o = Math.round((t - e) / 1e3),
    a = Math.round(o / 60),
    s = t.toDateString() === e.toDateString(),
    i = r.toDateString() === e.toDateString(),
    f = t.getFullYear() === e.getFullYear();
  return o < 5
    ? "Just Now"
    : o < 60
    ? `${o} Seconds ago`
    : o < 90
    ? "A minute ago"
    : a < 60
    ? `${a} Minutes ago`
    : s
    ? _t(e, "Today")
    : i
    ? _t(e, "Yesterday")
    : f
    ? _t(e, !1, !0)
    : _t(e);
}
function tn(n, e, l) {
  const t = n.slice();
  return (t[5] = e[l]), t;
}
function ln(n) {
  let e,
    l = Y(n[0]),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = nn(tn(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = ee();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      D(r, e, o);
    },
    p(r, o) {
      if (o & 13) {
        l = Y(r[0]);
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = tn(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = nn(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && E(e), ae(t, r);
    },
  };
}
function nn(n) {
  let e,
    l,
    t,
    r = n[5].fullname + "",
    o,
    a,
    s,
    i,
    f = n[5].message + "",
    c,
    d,
    v,
    y,
    m = en(Number(n[5].time)) + "",
    w,
    g,
    _;
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("p")),
        (o = L(r)),
        (a = $()),
        (s = h("div")),
        (i = h("p")),
        (c = L(f)),
        (v = $()),
        (y = h("p")),
        (w = L(m)),
        (g = $()),
        b(t, "class", "text-[1.2vh]"),
        b(
          l,
          "class",
          "w-fit flex justify-between items-center text-gray-400 font-medium -mb-[0.5vh]"
        ),
        b(
          s,
          "class",
          (d =
            "w-fit max-w-[85%] mt-[0.5vh] p-[1vh] break-words text-start rounded-lg " +
            (n[2] && n[3].cid === n[5].citizenid ? "bg-accent" : "bg-tertiary"))
        ),
        b(y, "class", "text-[1vh] ml-[0.5vh]"),
        b(
          e,
          "class",
          (_ =
            "w-full flex flex-col text-[1.3vh] text-gray-400 " +
            (n[2] && n[3].cid === n[5].citizenid ? "items-end" : "items-start"))
        );
    },
    m(p, A) {
      D(p, e, A),
        u(e, l),
        u(l, t),
        u(t, o),
        u(e, a),
        u(e, s),
        u(s, i),
        u(i, c),
        u(e, v),
        u(e, y),
        u(y, w),
        u(e, g);
    },
    p(p, A) {
      A & 1 && r !== (r = p[5].fullname + "") && P(o, r),
        A & 1 && f !== (f = p[5].message + "") && P(c, f),
        A & 13 &&
          d !==
            (d =
              "w-fit max-w-[85%] mt-[0.5vh] p-[1vh] break-words text-start rounded-lg " +
              (p[2] && p[3].cid === p[5].citizenid
                ? "bg-accent"
                : "bg-tertiary")) &&
          b(s, "class", d),
        A & 1 && m !== (m = en(Number(p[5].time)) + "") && P(w, m),
        A & 13 &&
          _ !==
            (_ =
              "w-full flex flex-col text-[1.3vh] text-gray-400 " +
              (p[2] && p[3].cid === p[5].citizenid
                ? "items-end"
                : "items-start")) &&
          b(e, "class", _);
    },
    d(p) {
      p && E(e);
    },
  };
}
function wa(n) {
  let e,
    l,
    t = n[0] && n[1] && ln(n);
  return {
    c() {
      (e = h("div")), (l = h("div")), t && t.c();
    },
    m(r, o) {
      D(r, e, o), u(e, l), t && t.m(l, null);
    },
    p(r, [o]) {
      r[0] && r[1]
        ? t
          ? t.p(r, o)
          : ((t = ln(r)), t.c(), t.m(l, null))
        : t && (t.d(1), (t = null));
    },
    i: T,
    o: T,
    d(r) {
      r && E(e), t && t.d();
    },
  };
}
function ya(n, e, l) {
  let t, r, o, a;
  N(n, Jt, (i) => l(0, (t = i))),
    N(n, In, (i) => l(1, (r = i))),
    N(n, Re, (i) => l(2, (o = i))),
    N(n, Ut, (i) => l(3, (a = i)));
  function s() {
    fe("GetMessages");
  }
  return (
    Oe(() => {
      const i = setInterval(() => {
        s();
      }, 1e3);
      return () => clearInterval(i);
    }),
    [t, r, o, a]
  );
}
class ka extends X {
  constructor(e) {
    super(), Q(this, e, ya, wa, W, {});
  }
}
function $a(n) {
  let e, l, t, r, o, a, s, i;
  return (
    (l = new je({ props: { title: "Staff Chat" } })),
    (o = new ka({})),
    (s = new va({})),
    {
      c() {
        (e = h("div")),
          B(l.$$.fragment),
          (t = $()),
          (r = h("div")),
          B(o.$$.fragment),
          (a = $()),
          B(s.$$.fragment),
          b(r, "id", "chatList"),
          b(r, "class", "w-full h-[84%] overflow-auto"),
          b(e, "class", "h-full w-full px-[2vh] pb-[2vh] flex flex-col ");
      },
      m(f, c) {
        D(f, e, c),
          O(l, e, null),
          u(e, t),
          u(e, r),
          O(o, r, null),
          u(e, a),
          O(s, e, null),
          (i = !0);
      },
      p: T,
      i(f) {
        i ||
          (k(l.$$.fragment, f),
          k(o.$$.fragment, f),
          k(s.$$.fragment, f),
          (i = !0));
      },
      o(f) {
        C(l.$$.fragment, f), C(o.$$.fragment, f), C(s.$$.fragment, f), (i = !1);
      },
      d(f) {
        f && E(e), j(l), j(o), j(s);
      },
    }
  );
}
class Ea extends X {
  constructor(e) {
    super(), Q(this, e, null, $a, W, {});
  }
}
function Da(n) {
  let e,
    l,
    t,
    r = n[0].id + "",
    o,
    a,
    s = n[0].name + "",
    i,
    f,
    c,
    d,
    v;
  return {
    c() {
      (e = h("button")),
        (l = h("div")),
        (t = h("p")),
        (o = L(r)),
        (a = L(" - ")),
        (i = L(s)),
        (f = $()),
        (c = h("i")),
        b(c, "class", "fas fa-angle-right"),
        b(l, "class", "w-full flex items-center justify-between gap-[1vh]"),
        b(
          e,
          "class",
          "h-[4.5vh] w-full flex items-center px-[1.5vh] rounded-[0.5vh] bg-tertiary hover:bg-opacity-90"
        );
    },
    m(y, m) {
      D(y, e, m),
        u(e, l),
        u(l, t),
        u(t, o),
        u(t, a),
        u(t, i),
        u(l, f),
        u(l, c),
        d || ((v = R(e, "click", n[2])), (d = !0));
    },
    p(y, [m]) {
      m & 1 && r !== (r = y[0].id + "") && P(o, r),
        m & 1 && s !== (s = y[0].name + "") && P(i, s);
    },
    i: T,
    o: T,
    d(y) {
      y && E(e), (d = !1), v();
    },
  };
}
function Ca(n, e, l) {
  let t;
  N(n, Gt, (s) => l(3, (t = s)));
  let { player: r } = e;
  async function o(s) {
    Gt.set(s), Ee.set(!0);
    const i = await fe("getVehicle", { cid: t.cid });
    _r.set(i);
  }
  const a = () => {
    o(r);
  };
  return (
    (n.$$set = (s) => {
      "player" in s && l(0, (r = s.player));
    }),
    [r, o, a]
  );
}
class La extends X {
  constructor(e) {
    super(), Q(this, e, Ca, Da, W, { player: 0 });
  }
}
function Sa(n) {
  let e;
  return {
    c() {
      (e = h("div")),
        (e.innerHTML =
          '<div class="inline-block h-[10rem] w-[10rem] animate-spin rounded-full border-8 border-solid border-secondary border-r-tertiary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>'),
        b(
          e,
          "class",
          "w-full h-full flex justify-center items-center opacity-50"
        );
    },
    m(l, t) {
      D(l, e, t);
    },
    p: T,
    i: T,
    o: T,
    d(l) {
      l && E(e);
    },
  };
}
class Aa extends X {
  constructor(e) {
    super(), Q(this, e, null, Sa, W, {});
  }
}
function Pa(n) {
  let e, l, t;
  const r = n[1].default,
    o = yn(r, n, n[0], null);
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        o && o.c(),
        b(
          l,
          "class",
          "bg-tertiary rounded-[0.5vh] flex flex-col px-[2vh] py-[1.5vh] gap-[0.8vh]"
        ),
        b(
          e,
          "class",
          "fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-75"
        );
    },
    m(a, s) {
      D(a, e, s), u(e, l), o && o.m(l, null), (t = !0);
    },
    p(a, [s]) {
      o &&
        o.p &&
        (!t || s & 1) &&
        En(o, r, a, a[0], t ? $n(r, a[0], s, null) : Dn(a[0]), null);
    },
    i(a) {
      t || (k(o, a), (t = !0));
    },
    o(a) {
      C(o, a), (t = !1);
    },
    d(a) {
      a && E(e), o && o.d(a);
    },
  };
}
function Na(n, e, l) {
  let { $$slots: t = {}, $$scope: r } = e;
  return (
    (n.$$set = (o) => {
      "$$scope" in o && l(0, (r = o.$$scope));
    }),
    [r, t]
  );
}
class On extends X {
  constructor(e) {
    super(), Q(this, e, Na, Pa, W, {});
  }
}
function rn(n, e, l) {
  const t = n.slice();
  return (t[24] = e[l]), t;
}
function an(n, e, l) {
  const t = n.slice();
  return (t[27] = e[l]), t;
}
function Ia(n) {
  let e, l, t, r, o;
  const a = [Ra, Ma],
    s = [];
  function i(f, c) {
    return (
      c & 33 && (e = null),
      e == null && (e = !!(f[5] && f[5].filter(f[10]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(n, -1)),
    (t = s[l] = a[l](n)),
    {
      c() {
        t.c(), (r = ee());
      },
      m(f, c) {
        s[l].m(f, c), D(f, r, c), (o = !0);
      },
      p(f, c) {
        let d = l;
        (l = i(f, c)),
          l === d
            ? s[l].p(f, c)
            : (K(),
              C(s[d], 1, 1, () => {
                s[d] = null;
              }),
              q(),
              (t = s[l]),
              t ? t.p(f, c) : ((t = s[l] = a[l](f)), t.c()),
              k(t, 1),
              t.m(r.parentNode, r));
      },
      i(f) {
        o || (k(t), (o = !0));
      },
      o(f) {
        C(t), (o = !1);
      },
      d(f) {
        f && E(r), s[l].d(f);
      },
    }
  );
}
function Ta(n) {
  let e, l;
  return (
    (e = new Aa({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p: T,
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Ma(n) {
  let e,
    l,
    t = Y(n[5].filter(n[12])),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = on(an(n, t, a));
  const o = (a) =>
    C(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = ee();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      D(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 33) {
        t = Y(a[5].filter(a[12]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = an(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = on(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (K(), i = t.length; i < r.length; i += 1) o(i);
        q();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) C(r[s]);
      l = !1;
    },
    d(a) {
      a && E(e), ae(r, a);
    },
  };
}
function Ra(n) {
  let e;
  return {
    c() {
      (e = h("div")),
        (e.textContent = "No Player Found."),
        b(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      D(l, e, t);
    },
    p: T,
    i: T,
    o: T,
    d(l) {
      l && E(e);
    },
  };
}
function on(n) {
  let e, l;
  return (
    (e = new La({ props: { player: n[27] } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 33 && (o.player = t[27]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function sn(n) {
  let e;
  function l(o, a) {
    return o[7] ? Oa : ja;
  }
  let t = l(n),
    r = t(n);
  return {
    c() {
      (e = h("div")),
        r.c(),
        b(
          e,
          "class",
          "h-full w-[66vh] border-l-[0.2vh] border-tertiary p-[2vh]"
        );
    },
    m(o, a) {
      D(o, e, a), r.m(e, null);
    },
    p(o, a) {
      t === (t = l(o)) && r
        ? r.p(o, a)
        : (r.d(1), (r = t(o)), r && (r.c(), r.m(e, null)));
    },
    d(o) {
      o && E(e), r.d();
    },
  };
}
function Oa(n) {
  let e,
    l,
    t = n[7].id + "",
    r,
    o,
    a = n[7].name + "",
    s,
    i,
    f,
    c,
    d,
    v,
    y,
    m,
    w,
    g,
    _,
    p,
    A,
    z,
    H,
    V,
    U,
    J,
    F,
    M,
    I,
    Z,
    ue,
    de = n[7].discord.replace("discord:", "Discord: ") + "",
    te,
    he,
    me,
    ve = n[7].license.replace("license:", "License: ") + "",
    we,
    ge,
    Le,
    ye = (n[7].fivem ? n[7].fivem : "") + "",
    De,
    S,
    ne,
    Pe = (n[7].steam ? n[7].steam : "") + "",
    Be,
    qe,
    Ne,
    Qe,
    oe,
    Ie,
    le,
    _e = n[7].cid + "",
    Ve,
    Xe,
    Te,
    Ze,
    Me = n[7].name + "",
    He,
    xe,
    rt,
    Xt,
    at = n[7].job + "",
    Dt,
    Zt,
    ot,
    xt,
    it = n[7].cash + "",
    Ct,
    el,
    st,
    tl,
    ft = n[7].bank + "",
    Lt,
    ll,
    ct,
    nl,
    ut = n[7].phone + "",
    St,
    rl,
    dt,
    al,
    At,
    ol,
    Fe = Y(n[7].vehicles),
    pe = [];
  for (let G = 0; G < Fe.length; G += 1) pe[G] = fn(rn(n, Fe, G));
  return {
    c() {
      (e = h("p")),
        (l = L("ID: ")),
        (r = L(t)),
        (o = L(" - ")),
        (s = L(a)),
        (i = $()),
        (f = h("div")),
        (c = h("p")),
        (c.textContent = "Quick Actions"),
        (d = $()),
        (v = h("div")),
        (y = h("button")),
        (y.innerHTML = '<i class="fas fa-user-minus"></i>'),
        (m = $()),
        (w = h("button")),
        (w.innerHTML = '<i class="fas fa-ban"></i>'),
        (g = $()),
        (_ = h("button")),
        (_.innerHTML = '<i class="fas fa-person-walking-arrow-right"></i>'),
        (p = $()),
        (A = h("button")),
        (A.innerHTML = '<i class="fas fa-person-walking-arrow-loop-left"></i>'),
        (z = $()),
        (H = h("button")),
        (H.innerHTML = '<i class="fas fa-heart-pulse"></i>'),
        (V = $()),
        (U = h("button")),
        (U.innerHTML = '<i class="fas fa-eye"></i>'),
        (J = $()),
        (F = h("div")),
        (M = h("p")),
        (M.textContent = "Licenses"),
        (I = $()),
        (Z = h("div")),
        (ue = h("p")),
        (te = L(de)),
        (he = $()),
        (me = h("p")),
        (we = L(ve)),
        (ge = $()),
        (Le = h("p")),
        (De = L(ye)),
        (S = $()),
        (ne = h("p")),
        (Be = L(Pe)),
        (qe = $()),
        (Ne = h("p")),
        (Ne.textContent = "Information"),
        (Qe = $()),
        (oe = h("div")),
        (Ie = h("p")),
        (le = L("CID: ")),
        (Ve = L(_e)),
        (Xe = $()),
        (Te = h("p")),
        (Ze = L("Name: ")),
        (He = L(Me)),
        (xe = $()),
        (rt = h("p")),
        (Xt = L("Job: ")),
        (Dt = L(at)),
        (Zt = $()),
        (ot = h("p")),
        (xt = L("Cash: $")),
        (Ct = L(it)),
        (el = $()),
        (st = h("p")),
        (tl = L("Bank: $")),
        (Lt = L(ft)),
        (ll = $()),
        (ct = h("p")),
        (nl = L("Phone: ")),
        (St = L(ut)),
        (rl = $()),
        (dt = h("p")),
        (dt.textContent = "Vehicles"),
        (al = $());
      for (let G = 0; G < pe.length; G += 1) pe[G].c();
      b(e, "class", "text-[2vh] font-medium"),
        b(c, "class", "font-medium text-[1.7vh]"),
        b(y, "title", "Kick Player"),
        b(
          y,
          "class",
          "h-[4.5vh] w-full rounded-l-[0.5vh] hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        b(y, "data-tip", "Kick Player"),
        b(w, "title", "Ban Player"),
        b(
          w,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        b(w, "data-tip", "Ban Player"),
        b(_, "title", "Teleport To Player"),
        b(
          _,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        b(_, "data-tip", "Teleport To Player"),
        b(A, "title", "Bring Player"),
        b(
          A,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        b(A, "data-tip", "Bring Player"),
        b(H, "title", "Revive Player"),
        b(
          H,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        b(H, "data-tip", "Revive Player"),
        b(U, "title", "Spectate Player"),
        b(
          U,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        b(U, "data-tip", "Spectate Player"),
        b(v, "class", "w-full bg-tertiary flex rounded-[0.5vh]"),
        b(M, "class", "font-medium text-[1.7vh]"),
        b(
          Z,
          "class",
          "w-full bg-tertiary rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        ),
        b(Ne, "class", "font-medium text-[1.7vh]"),
        b(
          oe,
          "class",
          "w-full bg-tertiary rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        ),
        b(dt, "class", "font-medium text-[1.7vh]"),
        b(
          F,
          "class",
          "h-[90%] overflow-auto flex flex-col gap-[1vh] select-text"
        ),
        b(f, "class", "w-full h-[96.5%] pt-[2vh] flex flex-col gap-[1vh]");
    },
    m(G, re) {
      D(G, e, re),
        u(e, l),
        u(e, r),
        u(e, o),
        u(e, s),
        D(G, i, re),
        D(G, f, re),
        u(f, c),
        u(f, d),
        u(f, v),
        u(v, y),
        u(v, m),
        u(v, w),
        u(v, g),
        u(v, _),
        u(v, p),
        u(v, A),
        u(v, z),
        u(v, H),
        u(v, V),
        u(v, U),
        u(f, J),
        u(f, F),
        u(F, M),
        u(F, I),
        u(F, Z),
        u(Z, ue),
        u(ue, te),
        u(Z, he),
        u(Z, me),
        u(me, we),
        u(Z, ge),
        u(Z, Le),
        u(Le, De),
        u(Z, S),
        u(Z, ne),
        u(ne, Be),
        u(F, qe),
        u(F, Ne),
        u(F, Qe),
        u(F, oe),
        u(oe, Ie),
        u(Ie, le),
        u(Ie, Ve),
        u(oe, Xe),
        u(oe, Te),
        u(Te, Ze),
        u(Te, He),
        u(oe, xe),
        u(oe, rt),
        u(rt, Xt),
        u(rt, Dt),
        u(oe, Zt),
        u(oe, ot),
        u(ot, xt),
        u(ot, Ct),
        u(oe, el),
        u(oe, st),
        u(st, tl),
        u(st, Lt),
        u(oe, ll),
        u(oe, ct),
        u(ct, nl),
        u(ct, St),
        u(F, rl),
        u(F, dt),
        u(F, al);
      for (let ie = 0; ie < pe.length; ie += 1) pe[ie] && pe[ie].m(F, null);
      At ||
        ((ol = [
          R(y, "click", n[13]),
          R(w, "click", n[14]),
          R(_, "click", n[15]),
          R(A, "click", n[16]),
          R(H, "click", n[17]),
          R(U, "click", n[18]),
        ]),
        (At = !0));
    },
    p(G, re) {
      if (
        (re & 128 && t !== (t = G[7].id + "") && P(r, t),
        re & 128 && a !== (a = G[7].name + "") && P(s, a),
        re & 128 &&
          de !== (de = G[7].discord.replace("discord:", "Discord: ") + "") &&
          P(te, de),
        re & 128 &&
          ve !== (ve = G[7].license.replace("license:", "License: ") + "") &&
          P(we, ve),
        re & 128 &&
          ye !== (ye = (G[7].fivem ? G[7].fivem : "") + "") &&
          P(De, ye),
        re & 128 &&
          Pe !== (Pe = (G[7].steam ? G[7].steam : "") + "") &&
          P(Be, Pe),
        re & 128 && _e !== (_e = G[7].cid + "") && P(Ve, _e),
        re & 128 && Me !== (Me = G[7].name + "") && P(He, Me),
        re & 128 && at !== (at = G[7].job + "") && P(Dt, at),
        re & 128 && it !== (it = G[7].cash + "") && P(Ct, it),
        re & 128 && ft !== (ft = G[7].bank + "") && P(Lt, ft),
        re & 128 && ut !== (ut = G[7].phone + "") && P(St, ut),
        re & 128)
      ) {
        Fe = Y(G[7].vehicles);
        let ie;
        for (ie = 0; ie < Fe.length; ie += 1) {
          const il = rn(G, Fe, ie);
          pe[ie]
            ? pe[ie].p(il, re)
            : ((pe[ie] = fn(il)), pe[ie].c(), pe[ie].m(F, null));
        }
        for (; ie < pe.length; ie += 1) pe[ie].d(1);
        pe.length = Fe.length;
      }
    },
    d(G) {
      G && (E(e), E(i), E(f)), ae(pe, G), (At = !1), ce(ol);
    },
  };
}
function ja(n) {
  let e;
  return {
    c() {
      (e = h("div")),
        (e.innerHTML =
          '<div class="text-4xl text-tertiary">No Player Selected.</div>'),
        b(
          e,
          "class",
          "h-full w-full flex flex-col items-center justify-center"
        );
    },
    m(l, t) {
      D(l, e, t);
    },
    p: T,
    d(l) {
      l && E(e);
    },
  };
}
function fn(n) {
  let e,
    l,
    t,
    r = n[24].label + "",
    o,
    a,
    s,
    i,
    f = n[24].plate + "",
    c,
    d,
    v,
    y,
    m,
    w,
    g;
  function _() {
    return n[19](n[24]);
  }
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("p")),
        (o = L(r)),
        (a = $()),
        (s = h("p")),
        (i = L("Plate: ")),
        (c = L(f)),
        (d = $()),
        (v = h("div")),
        (y = h("button")),
        (y.textContent = "Spawn"),
        (m = $()),
        b(t, "class", "font-medium text-[1.7vh]"),
        b(
          y,
          "class",
          "bg-secondary px-[1vh] py-[0.5vh] rounded-[0.5vh] border border-primary"
        ),
        b(v, "class", "ml-auto h-full flex items-center"),
        b(
          e,
          "class",
          "w-full bg-tertiary flex flex-row rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        );
    },
    m(p, A) {
      D(p, e, A),
        u(e, l),
        u(l, t),
        u(t, o),
        u(l, a),
        u(l, s),
        u(s, i),
        u(s, c),
        u(e, d),
        u(e, v),
        u(v, y),
        u(e, m),
        w || ((g = R(y, "click", _)), (w = !0));
    },
    p(p, A) {
      (n = p),
        A & 128 && r !== (r = n[24].label + "") && P(o, r),
        A & 128 && f !== (f = n[24].plate + "") && P(c, f);
    },
    d(p) {
      p && E(e), (w = !1), g();
    },
  };
}
function cn(n) {
  let e, l;
  return (
    (e = new On({
      props: { $$slots: { default: [Ba] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1073741972 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Ba(n) {
  let e,
    l,
    t,
    r = n[7].name + "",
    o,
    a,
    s,
    i,
    f,
    c,
    d,
    v,
    y,
    m,
    w,
    g;
  return (
    (f = new Qt({
      props: {
        data: { label: "Reason", value: "reason", id: "reason" },
        selectedData: n[8],
      },
    })),
    (d = new Rn({
      props: {
        action: { label: "Duration", value: "duration", id: "duration" },
        label_title: "Duration",
        data: n[9],
        selectedData: n[8],
      },
    })),
    {
      c() {
        (e = h("div")),
          (l = h("p")),
          (t = L("Ban ")),
          (o = L(r)),
          (a = $()),
          (s = h("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = $()),
          B(f.$$.fragment),
          (c = $()),
          B(d.$$.fragment),
          (v = $()),
          (y = h("button")),
          (y.innerHTML = "<p>Ban</p>"),
          b(l, "class", "font-medium text-[1.8vh]"),
          b(s, "class", "hover:text-accent"),
          b(e, "class", "flex justify-between"),
          b(
            y,
            "class",
            "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(_, p) {
        D(_, e, p),
          u(e, l),
          u(l, t),
          u(l, o),
          u(e, a),
          u(e, s),
          D(_, i, p),
          O(f, _, p),
          D(_, c, p),
          O(d, _, p),
          D(_, v, p),
          D(_, y, p),
          (m = !0),
          w || ((g = [R(s, "click", n[20]), R(y, "click", n[21])]), (w = !0));
      },
      p(_, p) {
        (!m || p & 128) && r !== (r = _[7].name + "") && P(o, r);
      },
      i(_) {
        m || (k(f.$$.fragment, _), k(d.$$.fragment, _), (m = !0));
      },
      o(_) {
        C(f.$$.fragment, _), C(d.$$.fragment, _), (m = !1);
      },
      d(_) {
        _ && (E(e), E(i), E(c), E(v), E(y)), j(f, _), j(d, _), (w = !1), ce(g);
      },
    }
  );
}
function un(n) {
  let e, l;
  return (
    (e = new On({
      props: { $$slots: { default: [Va] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1073741960 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Va(n) {
  let e,
    l,
    t,
    r = n[7].name + "",
    o,
    a,
    s,
    i,
    f,
    c,
    d,
    v,
    y,
    m;
  return (
    (f = new Qt({
      props: {
        data: { label: "Reason", value: "reason", id: "reason" },
        selectedData: n[8],
      },
    })),
    {
      c() {
        (e = h("div")),
          (l = h("p")),
          (t = L("Kick ")),
          (o = L(r)),
          (a = $()),
          (s = h("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = $()),
          B(f.$$.fragment),
          (c = $()),
          (d = h("button")),
          (d.innerHTML = "<p>Kick</p>"),
          b(l, "class", "font-medium text-[1.8vh]"),
          b(s, "class", "hover:text-accent"),
          b(e, "class", "flex justify-between"),
          b(
            d,
            "class",
            "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(w, g) {
        D(w, e, g),
          u(e, l),
          u(l, t),
          u(l, o),
          u(e, a),
          u(e, s),
          D(w, i, g),
          O(f, w, g),
          D(w, c, g),
          D(w, d, g),
          (v = !0),
          y || ((m = [R(s, "click", n[22]), R(d, "click", n[23])]), (y = !0));
      },
      p(w, g) {
        (!v || g & 128) && r !== (r = w[7].name + "") && P(o, r);
      },
      i(w) {
        v || (k(f.$$.fragment, w), (v = !0));
      },
      o(w) {
        C(f.$$.fragment, w), (v = !1);
      },
      d(w) {
        w && (E(e), E(i), E(c), E(d)), j(f, w), (y = !1), ce(m);
      },
    }
  );
}
function Ha(n) {
  let e, l, t, r, o, a, s, i, f, c, d;
  l = new je({
    props: { title: "Players", hasSearch: !0, onSearchInput: n[11] },
  });
  const v = [Ta, Ia],
    y = [];
  function m(p, A) {
    return p[1] ? 0 : p[5] ? 1 : -1;
  }
  ~(o = m(n)) && (a = y[o] = v[o](n));
  let w = n[6] && sn(n),
    g = n[2] && cn(n),
    _ = n[3] && un(n);
  return {
    c() {
      (e = h("div")),
        B(l.$$.fragment),
        (t = $()),
        (r = h("div")),
        a && a.c(),
        (s = $()),
        w && w.c(),
        (i = $()),
        g && g.c(),
        (f = $()),
        _ && _.c(),
        (c = ee()),
        b(
          r,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        b(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(p, A) {
      D(p, e, A),
        O(l, e, null),
        u(e, t),
        u(e, r),
        ~o && y[o].m(r, null),
        D(p, s, A),
        w && w.m(p, A),
        D(p, i, A),
        g && g.m(p, A),
        D(p, f, A),
        _ && _.m(p, A),
        D(p, c, A),
        (d = !0);
    },
    p(p, [A]) {
      const z = {};
      A & 1 && (z.onSearchInput = p[11]), l.$set(z);
      let H = o;
      (o = m(p)),
        o === H
          ? ~o && y[o].p(p, A)
          : (a &&
              (K(),
              C(y[H], 1, 1, () => {
                y[H] = null;
              }),
              q()),
            ~o
              ? ((a = y[o]),
                a ? a.p(p, A) : ((a = y[o] = v[o](p)), a.c()),
                k(a, 1),
                a.m(r, null))
              : (a = null)),
        p[6]
          ? w
            ? w.p(p, A)
            : ((w = sn(p)), w.c(), w.m(i.parentNode, i))
          : w && (w.d(1), (w = null)),
        p[2]
          ? g
            ? (g.p(p, A), A & 4 && k(g, 1))
            : ((g = cn(p)), g.c(), k(g, 1), g.m(f.parentNode, f))
          : g &&
            (K(),
            C(g, 1, 1, () => {
              g = null;
            }),
            q()),
        p[3]
          ? _
            ? (_.p(p, A), A & 8 && k(_, 1))
            : ((_ = un(p)), _.c(), k(_, 1), _.m(c.parentNode, c))
          : _ &&
            (K(),
            C(_, 1, 1, () => {
              _ = null;
            }),
            q());
    },
    i(p) {
      d || (k(l.$$.fragment, p), k(a), k(g), k(_), (d = !0));
    },
    o(p) {
      C(l.$$.fragment, p), C(a), C(g), C(_), (d = !1);
    },
    d(p) {
      p && (E(e), E(s), E(i), E(f), E(c)),
        j(l),
        ~o && y[o].d(),
        w && w.d(p),
        g && g.d(p),
        _ && _.d(p);
    },
  };
}
function Fa(n, e, l) {
  let t, r, o;
  N(n, Re, (I) => l(5, (t = I))),
    N(n, Ee, (I) => l(6, (r = I))),
    N(n, Gt, (I) => l(7, (o = I)));
  let a = "",
    s = !1,
    i = !1,
    f = !1;
  Oe(async () => {
    l(1, (s = !0));
    const I = await fe("getPlayers");
    Re.set(I), l(1, (s = !1));
  });
  let c = {};
  function d(I) {
    l(4, (c[I.id] = I), c);
  }
  return [
    a,
    s,
    i,
    f,
    c,
    t,
    r,
    o,
    d,
    [
      { label: "Permanent", value: "2147483647" },
      { label: "10 Minutes", value: "600" },
      { label: "30 Minutes", value: "1800" },
      { label: "1 Hour", value: "3600" },
      { label: "6 Hours", value: "21600" },
      { label: "12 Hours", value: "43200" },
      { label: "1 Day", value: "86400" },
      { label: "3 Days", value: "259200" },
      { label: "1 Week", value: "604800" },
      { label: "3 Weeks", value: "1814400" },
    ],
    (I) => I.name.toLowerCase().includes(a.toLowerCase()),
    (I) => l(0, (a = I.target.value)),
    (I) => I.name.toLowerCase().includes(a.toLowerCase()),
    () => l(3, (f = !0)),
    () => l(2, (i = !0)),
    () =>
      fe("clickButton", {
        data: "teleportToPlayer",
        selectedData: { Player: { value: o.id } },
      }),
    () =>
      fe("clickButton", {
        data: "bringPlayer",
        selectedData: { Player: { value: o.id } },
      }),
    () =>
      fe("clickButton", {
        data: "revivePlayer",
        selectedData: { Player: { value: o.id } },
      }),
    () =>
      fe("clickButton", {
        data: "spectate_player",
        selectedData: { Player: { value: o.id } },
      }),
    (I) =>
      fe("clickButton", {
        data: "spawnPersonalVehicle",
        selectedData: { VehiclePlate: { value: I.plate } },
      }),
    () => l(2, (i = !1)),
    () => {
      fe("clickButton", {
        data: "banPlayer",
        selectedData: {
          Player: { value: o.id },
          Duration: { value: c.Duration.value },
          Reason: { value: c.Reason.value },
        },
      });
    },
    () => l(3, (f = !1)),
    () => {
      fe("clickButton", {
        data: "kickPlayer",
        selectedData: { Player: { value: o.id }, Reason: { value: o.id } },
      });
    },
  ];
}
class Ya extends X {
  constructor(e) {
    super(), Q(this, e, Fa, Ha, W, {});
  }
}
function za(n) {
  let e,
    l,
    t,
    r,
    o,
    a = (n[0] ? n[0] : "") + "",
    s;
  return {
    c() {
      (e = h("button")),
        (l = h("div")),
        (t = h("i")),
        (r = $()),
        (o = h("p")),
        (s = L(a)),
        b(t, "class", "fas fa-angle-right mr-[1vh]"),
        b(o, "class", "text-[1.5vh]"),
        b(l, "class", "flex items-center p-[2vh]"),
        b(
          e,
          "class",
          "w-full flex justify-between rounded-[0.5vh] bg-tertiary items-center"
        );
    },
    m(i, f) {
      D(i, e, f), u(e, l), u(l, t), u(l, r), u(l, o), u(o, s);
    },
    p(i, [f]) {
      f & 1 && a !== (a = (i[0] ? i[0] : "") + "") && P(s, a);
    },
    i: T,
    o: T,
    d(i) {
      i && E(e);
    },
  };
}
function Ua(n, e, l) {
  let { label: t } = e;
  return (
    (n.$$set = (r) => {
      "label" in r && l(0, (t = r.label));
    }),
    [t]
  );
}
class Ga extends X {
  constructor(e) {
    super(), Q(this, e, Ua, za, W, { label: 0 });
  }
}
function dn(n, e, l) {
  const t = n.slice();
  return (t[7] = e[l]), t;
}
function pn(n) {
  let e, l, t, r, o;
  const a = [Ja, Wa],
    s = [];
  function i(f, c) {
    return (
      c & 3 && (e = null),
      e == null && (e = !!(f[1] && f[1].filter(f[4]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(n, -1)),
    (t = s[l] = a[l](n)),
    {
      c() {
        t.c(), (r = ee());
      },
      m(f, c) {
        s[l].m(f, c), D(f, r, c), (o = !0);
      },
      p(f, c) {
        let d = l;
        (l = i(f, c)),
          l === d
            ? s[l].p(f, c)
            : (K(),
              C(s[d], 1, 1, () => {
                s[d] = null;
              }),
              q(),
              (t = s[l]),
              t ? t.p(f, c) : ((t = s[l] = a[l](f)), t.c()),
              k(t, 1),
              t.m(r.parentNode, r));
      },
      i(f) {
        o || (k(t), (o = !0));
      },
      o(f) {
        C(t), (o = !1);
      },
      d(f) {
        f && E(r), s[l].d(f);
      },
    }
  );
}
function Wa(n) {
  let e,
    l,
    t,
    r,
    o = Y(n[3].filter(n[6])),
    a = [];
  for (let i = 0; i < o.length; i += 1) a[i] = hn(dn(n, o, i));
  const s = (i) =>
    C(a[i], 1, 1, () => {
      a[i] = null;
    });
  return {
    c() {
      (e = h("small")),
        (e.textContent = `Total Commands: ${n[3].length}`),
        (l = $());
      for (let i = 0; i < a.length; i += 1) a[i].c();
      (t = ee()), b(e, "class", "font-medium");
    },
    m(i, f) {
      D(i, e, f), D(i, l, f);
      for (let c = 0; c < a.length; c += 1) a[c] && a[c].m(i, f);
      D(i, t, f), (r = !0);
    },
    p(i, f) {
      if (f & 9) {
        o = Y(i[3].filter(i[6]));
        let c;
        for (c = 0; c < o.length; c += 1) {
          const d = dn(i, o, c);
          a[c]
            ? (a[c].p(d, f), k(a[c], 1))
            : ((a[c] = hn(d)), a[c].c(), k(a[c], 1), a[c].m(t.parentNode, t));
        }
        for (K(), c = o.length; c < a.length; c += 1) s(c);
        q();
      }
    },
    i(i) {
      if (!r) {
        for (let f = 0; f < o.length; f += 1) k(a[f]);
        r = !0;
      }
    },
    o(i) {
      a = a.filter(Boolean);
      for (let f = 0; f < a.length; f += 1) C(a[f]);
      r = !1;
    },
    d(i) {
      i && (E(e), E(l), E(t)), ae(a, i);
    },
  };
}
function Ja(n) {
  let e;
  return {
    c() {
      (e = h("div")),
        (e.textContent = "No Commands Found."),
        b(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      D(l, e, t);
    },
    p: T,
    i: T,
    o: T,
    d(l) {
      l && E(e);
    },
  };
}
function hn(n) {
  let e, l;
  return (
    (e = new Ga({ props: { label: n[7].name } })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.label = t[7].name), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function _n(n) {
  let e, l, t;
  return (
    (l = new je({ props: { title: "Dashboard" } })),
    {
      c() {
        (e = h("div")),
          B(l.$$.fragment),
          b(
            e,
            "class",
            "h-full w-[66vh] border-l-[0.2vh] border-tertiary px-[2vh]"
          );
      },
      m(r, o) {
        D(r, e, o), O(l, e, null), (t = !0);
      },
      i(r) {
        t || (k(l.$$.fragment, r), (t = !0));
      },
      o(r) {
        C(l.$$.fragment, r), (t = !1);
      },
      d(r) {
        r && E(e), j(l);
      },
    }
  );
}
function Ka(n) {
  let e, l, t, r, o, a, s;
  l = new je({
    props: { title: "Commands", hasSearch: !0, onSearchInput: n[5] },
  });
  let i = n[1] && pn(n),
    f = n[2] && _n();
  return {
    c() {
      (e = h("div")),
        B(l.$$.fragment),
        (t = $()),
        (r = h("div")),
        i && i.c(),
        (o = $()),
        f && f.c(),
        (a = ee()),
        b(
          r,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        b(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(c, d) {
      D(c, e, d),
        O(l, e, null),
        u(e, t),
        u(e, r),
        i && i.m(r, null),
        D(c, o, d),
        f && f.m(c, d),
        D(c, a, d),
        (s = !0);
    },
    p(c, [d]) {
      const v = {};
      d & 1 && (v.onSearchInput = c[5]),
        l.$set(v),
        c[1]
          ? i
            ? (i.p(c, d), d & 2 && k(i, 1))
            : ((i = pn(c)), i.c(), k(i, 1), i.m(r, null))
          : i &&
            (K(),
            C(i, 1, 1, () => {
              i = null;
            }),
            q()),
        c[2]
          ? f
            ? d & 4 && k(f, 1)
            : ((f = _n()), f.c(), k(f, 1), f.m(a.parentNode, a))
          : f &&
            (K(),
            C(f, 1, 1, () => {
              f = null;
            }),
            q());
    },
    i(c) {
      s || (k(l.$$.fragment, c), k(i), k(f), (s = !0));
    },
    o(c) {
      C(l.$$.fragment, c), C(i), C(f), (s = !1);
    },
    d(c) {
      c && (E(e), E(o), E(a)), j(l), i && i.d(), f && f.d(c);
    },
  };
}
function qa(n, e, l) {
  let t, r;
  N(n, Wt, (c) => l(1, (t = c))), N(n, Ee, (c) => l(2, (r = c)));
  let o = "",
    a = t ? t.slice().sort((c, d) => c.name.localeCompare(d.name)) : [];
  return [
    o,
    t,
    r,
    a,
    (c) => c.name.toLowerCase().includes(o.toLowerCase()),
    (c) => l(0, (o = c.target.value)),
    (c) => c.name.toLowerCase().includes(o.toLowerCase()),
  ];
}
class Qa extends X {
  constructor(e) {
    super(), Q(this, e, qa, Ka, W, {});
  }
}
function Xa(n) {
  let e, l;
  return (
    (e = new Qa({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Za(n) {
  let e, l;
  return (
    (e = new Ya({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function xa(n) {
  let e, l;
  return (
    (e = new Ea({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function eo(n) {
  let e, l;
  return (
    (e = new ha({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function to(n) {
  let e, l;
  return (
    (e = new ra({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function lo(n) {
  let e, l, t, r, o, a, s, i, f, c;
  l = new $r({});
  const d = [to, eo, xa, Za, Xa],
    v = [];
  function y(m, w) {
    return m[1] == "Actions"
      ? 0
      : m[1] == "Server"
      ? 1
      : m[1] == "Staffchat"
      ? 2
      : m[1] == "Players"
      ? 3
      : m[1] == "Commands"
      ? 4
      : -1;
  }
  return (
    ~(o = y(n)) && (a = v[o] = d[o](n)),
    {
      c() {
        (e = h("div")),
          B(l.$$.fragment),
          (t = $()),
          (r = h("div")),
          a && a.c(),
          b(
            r,
            "class",
            (s = "h-full flex " + (n[0] ? "w-[99vh]" : "w-[33vh]"))
          ),
          b(
            e,
            "class",
            (i =
              "h-[85vh] flex rounded-[0.5vh] bg-primary " +
              (n[0] ? "w-[106vh]" : "w-[40vh] mr-[5vh] "))
          );
      },
      m(m, w) {
        D(m, e, w),
          O(l, e, null),
          u(e, t),
          u(e, r),
          ~o && v[o].m(r, null),
          (c = !0);
      },
      p(m, [w]) {
        let g = o;
        (o = y(m)),
          o !== g &&
            (a &&
              (K(),
              C(v[g], 1, 1, () => {
                v[g] = null;
              }),
              q()),
            ~o
              ? ((a = v[o]),
                a || ((a = v[o] = d[o](m)), a.c()),
                k(a, 1),
                a.m(r, null))
              : (a = null)),
          (!c ||
            (w & 1 &&
              s !== (s = "h-full flex " + (m[0] ? "w-[99vh]" : "w-[33vh]")))) &&
            b(r, "class", s),
          (!c ||
            (w & 1 &&
              i !==
                (i =
                  "h-[85vh] flex rounded-[0.5vh] bg-primary " +
                  (m[0] ? "w-[106vh]" : "w-[40vh] mr-[5vh] ")))) &&
            b(e, "class", i);
      },
      i(m) {
        c ||
          (k(l.$$.fragment, m),
          k(a),
          m &&
            ke(() => {
              c && (f || (f = be(e, Ae, { x: 100 }, !0)), f.run(1));
            }),
          (c = !0));
      },
      o(m) {
        C(l.$$.fragment, m),
          C(a),
          m && (f || (f = be(e, Ae, { x: 100 }, !1)), f.run(0)),
          (c = !1);
      },
      d(m) {
        m && E(e), j(l), ~o && v[o].d(), m && f && f.end();
      },
    }
  );
}
function no(n, e, l) {
  let t, r;
  return N(n, Ee, (o) => l(0, (t = o))), N(n, Rt, (o) => l(1, (r = o))), [t, r];
}
class ro extends X {
  constructor(e) {
    super(), Q(this, e, no, lo, W, {});
  }
}
function ao(n) {
  var Pe, Be, qe, Ne, Qe, oe, Ie;
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i = ((Pe = n[0]) == null ? void 0 : Pe.name) + "",
    f,
    c,
    d,
    v,
    y = ((Be = n[0]) == null ? void 0 : Be.model) + "",
    m,
    w,
    g,
    _,
    p = ((qe = n[0]) == null ? void 0 : qe.netID) + "",
    A,
    z,
    H,
    V,
    U = ((Ne = n[0]) == null ? void 0 : Ne.plate) + "",
    J,
    F,
    M,
    I,
    Z = ((Qe = n[0]) == null ? void 0 : Qe.fuel) + "",
    ue,
    de,
    te,
    he,
    me = ((oe = n[0]) == null ? void 0 : oe.engine_health) + "",
    ve,
    we,
    ge,
    Le,
    ye = ((Ie = n[0]) == null ? void 0 : Ie.body_health) + "",
    De,
    S,
    ne;
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("div")),
        (t.innerHTML =
          '<i class="fas fa-code"></i> <p>Vehicle Information</p>'),
        (r = $()),
        (o = h("div")),
        (a = h("p")),
        (s = L("Model: ")),
        (f = L(i)),
        (c = $()),
        (d = h("p")),
        (v = L("Hash: ")),
        (m = L(y)),
        (w = $()),
        (g = h("p")),
        (_ = L("NetID: ")),
        (A = L(p)),
        (z = $()),
        (H = h("p")),
        (V = L("Plate: ")),
        (J = L(U)),
        (F = $()),
        (M = h("p")),
        (I = L("Fuel: ")),
        (ue = L(Z)),
        (de = $()),
        (te = h("p")),
        (he = L("Engine: ")),
        (ve = L(me)),
        (we = $()),
        (ge = h("p")),
        (Le = L("Body: ")),
        (De = L(ye)),
        b(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        b(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        b(e, "class", "w-screen h-screen flex items-center");
    },
    m(le, _e) {
      D(le, e, _e),
        u(e, l),
        u(l, t),
        u(l, r),
        u(l, o),
        u(o, a),
        u(a, s),
        u(a, f),
        u(o, c),
        u(o, d),
        u(d, v),
        u(d, m),
        u(o, w),
        u(o, g),
        u(g, _),
        u(g, A),
        u(o, z),
        u(o, H),
        u(H, V),
        u(H, J),
        u(o, F),
        u(o, M),
        u(M, I),
        u(M, ue),
        u(o, de),
        u(o, te),
        u(te, he),
        u(te, ve),
        u(o, we),
        u(o, ge),
        u(ge, Le),
        u(ge, De),
        (ne = !0);
    },
    p(le, [_e]) {
      var Ve, Xe, Te, Ze, Me, He, xe;
      (!ne || _e & 1) &&
        i !== (i = ((Ve = le[0]) == null ? void 0 : Ve.name) + "") &&
        P(f, i),
        (!ne || _e & 1) &&
          y !== (y = ((Xe = le[0]) == null ? void 0 : Xe.model) + "") &&
          P(m, y),
        (!ne || _e & 1) &&
          p !== (p = ((Te = le[0]) == null ? void 0 : Te.netID) + "") &&
          P(A, p),
        (!ne || _e & 1) &&
          U !== (U = ((Ze = le[0]) == null ? void 0 : Ze.plate) + "") &&
          P(J, U),
        (!ne || _e & 1) &&
          Z !== (Z = ((Me = le[0]) == null ? void 0 : Me.fuel) + "") &&
          P(ue, Z),
        (!ne || _e & 1) &&
          me !==
            (me = ((He = le[0]) == null ? void 0 : He.engine_health) + "") &&
          P(ve, me),
        (!ne || _e & 1) &&
          ye !== (ye = ((xe = le[0]) == null ? void 0 : xe.body_health) + "") &&
          P(De, ye);
    },
    i(le) {
      ne ||
        (le &&
          ke(() => {
            ne && (S || (S = be(l, Ae, { x: -100 }, !0)), S.run(1));
          }),
        (ne = !0));
    },
    o(le) {
      le && (S || (S = be(l, Ae, { x: -100 }, !1)), S.run(0)), (ne = !1);
    },
    d(le) {
      le && E(e), le && S && S.end();
    },
  };
}
function oo(n, e, l) {
  let t;
  return N(n, yt, (r) => l(0, (t = r))), [t];
}
class io extends X {
  constructor(e) {
    super(), Q(this, e, oo, ao, W, {});
  }
}
function so(n) {
  var I, Z, ue, de;
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i = ((I = n[0]) == null ? void 0 : I.x) + "",
    f,
    c,
    d,
    v,
    y = ((Z = n[0]) == null ? void 0 : Z.y) + "",
    m,
    w,
    g,
    _,
    p = ((ue = n[0]) == null ? void 0 : ue.z) + "",
    A,
    z,
    H,
    V,
    U = ((de = n[0]) == null ? void 0 : de.heading) + "",
    J,
    F,
    M;
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("div")),
        (t.innerHTML = '<i class="fas fa-code"></i> <p>Coords Information</p>'),
        (r = $()),
        (o = h("div")),
        (a = h("p")),
        (s = L("X: ")),
        (f = L(i)),
        (c = $()),
        (d = h("p")),
        (v = L("Y: ")),
        (m = L(y)),
        (w = $()),
        (g = h("p")),
        (_ = L("Z: ")),
        (A = L(p)),
        (z = $()),
        (H = h("p")),
        (V = L("Heading: ")),
        (J = L(U)),
        b(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        b(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        b(e, "class", "w-screen h-screen flex items-center");
    },
    m(te, he) {
      D(te, e, he),
        u(e, l),
        u(l, t),
        u(l, r),
        u(l, o),
        u(o, a),
        u(a, s),
        u(a, f),
        u(o, c),
        u(o, d),
        u(d, v),
        u(d, m),
        u(o, w),
        u(o, g),
        u(g, _),
        u(g, A),
        u(o, z),
        u(o, H),
        u(H, V),
        u(H, J),
        (M = !0);
    },
    p(te, [he]) {
      var me, ve, we, ge;
      (!M || he & 1) &&
        i !== (i = ((me = te[0]) == null ? void 0 : me.x) + "") &&
        P(f, i),
        (!M || he & 1) &&
          y !== (y = ((ve = te[0]) == null ? void 0 : ve.y) + "") &&
          P(m, y),
        (!M || he & 1) &&
          p !== (p = ((we = te[0]) == null ? void 0 : we.z) + "") &&
          P(A, p),
        (!M || he & 1) &&
          U !== (U = ((ge = te[0]) == null ? void 0 : ge.heading) + "") &&
          P(J, U);
    },
    i(te) {
      M ||
        (te &&
          ke(() => {
            M && (F || (F = be(l, Ae, { x: -100 }, !0)), F.run(1));
          }),
        (M = !0));
    },
    o(te) {
      te && (F || (F = be(l, Ae, { x: -100 }, !1)), F.run(0)), (M = !1);
    },
    d(te) {
      te && E(e), te && F && F.end();
    },
  };
}
function fo(n, e, l) {
  let t;
  return N(n, kt, (r) => l(0, (t = r))), [t];
}
class co extends X {
  constructor(e) {
    super(), Q(this, e, fo, so, W, {});
  }
}
function uo(n) {
  var F, M;
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i = ((F = n[0]) == null ? void 0 : F.name) + "",
    f,
    c,
    d,
    v,
    y = ((M = n[0]) == null ? void 0 : M.hash) + "",
    m,
    w,
    g,
    _,
    p,
    A,
    z,
    H,
    V,
    U,
    J;
  return {
    c() {
      (e = h("div")),
        (l = h("div")),
        (t = h("div")),
        (t.innerHTML = '<i class="fas fa-code"></i> <p>Entity Information</p>'),
        (r = $()),
        (o = h("div")),
        (a = h("p")),
        (s = L("Model: ")),
        (f = L(i)),
        (c = $()),
        (d = h("p")),
        (v = L("Hash: ")),
        (m = L(y)),
        (w = $()),
        (g = h("br")),
        (_ = $()),
        (p = h("p")),
        (p.textContent = "C - Copy Information"),
        (A = $()),
        (z = h("p")),
        (z.textContent = "E - Delete Entity"),
        (H = $()),
        (V = h("p")),
        (V.textContent = "ESC - Close"),
        b(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        b(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        b(e, "class", "w-screen h-screen flex items-center");
    },
    m(I, Z) {
      D(I, e, Z),
        u(e, l),
        u(l, t),
        u(l, r),
        u(l, o),
        u(o, a),
        u(a, s),
        u(a, f),
        u(o, c),
        u(o, d),
        u(d, v),
        u(d, m),
        u(o, w),
        u(o, g),
        u(o, _),
        u(o, p),
        u(o, A),
        u(o, z),
        u(o, H),
        u(o, V),
        (J = !0);
    },
    p(I, [Z]) {
      var ue, de;
      (!J || Z & 1) &&
        i !== (i = ((ue = I[0]) == null ? void 0 : ue.name) + "") &&
        P(f, i),
        (!J || Z & 1) &&
          y !== (y = ((de = I[0]) == null ? void 0 : de.hash) + "") &&
          P(m, y);
    },
    i(I) {
      J ||
        (I &&
          ke(() => {
            J && (U || (U = be(l, Ae, { x: -100 }, !0)), U.run(1));
          }),
        (J = !0));
    },
    o(I) {
      I && (U || (U = be(l, Ae, { x: -100 }, !1)), U.run(0)), (J = !1);
    },
    d(I) {
      I && E(e), I && U && U.end();
    },
  };
}
function po(n, e, l) {
  let t;
  return N(n, $t, (r) => l(0, (t = r))), [t];
}
class ho extends X {
  constructor(e) {
    super(), Q(this, e, po, uo, W, {});
  }
}
function _o(n) {
  let e, l;
  return (
    (e = new ro({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function bn(n) {
  let e, l;
  return (
    (e = new io({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function mn(n) {
  let e, l;
  return (
    (e = new co({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function vn(n) {
  let e, l;
  return (
    (e = new ho({})),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, r) {
        O(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        C(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function gn(n) {
  let e, l, t, r;
  return (
    (e = new hr({})),
    {
      c() {
        B(e.$$.fragment),
          (l = $()),
          (t = h("div")),
          b(t, "class", "absolute w-screen h-screen bg-neutral-800");
      },
      m(o, a) {
        O(e, o, a), D(o, l, a), D(o, t, a), (r = !0);
      },
      i(o) {
        r || (k(e.$$.fragment, o), (r = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && (E(l), E(t)), j(e, o);
      },
    }
  );
}
function bo(n) {
  var m, w, g;
  let e, l, t, r, o, a, s, i, f;
  e = new cr({ props: { $$slots: { default: [_o] }, $$scope: { ctx: n } } });
  let c = ((m = n[0]) == null ? void 0 : m.show) && bn(),
    d = ((w = n[1]) == null ? void 0 : w.show) && mn(),
    v = ((g = n[2]) == null ? void 0 : g.show) && vn();
  a = new mr({});
  let y = n[3] && gn();
  return {
    c() {
      B(e.$$.fragment),
        (l = $()),
        c && c.c(),
        (t = $()),
        d && d.c(),
        (r = $()),
        v && v.c(),
        (o = $()),
        B(a.$$.fragment),
        (s = $()),
        y && y.c(),
        (i = ee());
    },
    m(_, p) {
      O(e, _, p),
        D(_, l, p),
        c && c.m(_, p),
        D(_, t, p),
        d && d.m(_, p),
        D(_, r, p),
        v && v.m(_, p),
        D(_, o, p),
        O(a, _, p),
        D(_, s, p),
        y && y.m(_, p),
        D(_, i, p),
        (f = !0);
    },
    p(_, [p]) {
      var z, H, V;
      const A = {};
      p & 32 && (A.$$scope = { dirty: p, ctx: _ }),
        e.$set(A),
        (z = _[0]) != null && z.show
          ? c
            ? p & 1 && k(c, 1)
            : ((c = bn()), c.c(), k(c, 1), c.m(t.parentNode, t))
          : c &&
            (K(),
            C(c, 1, 1, () => {
              c = null;
            }),
            q()),
        (H = _[1]) != null && H.show
          ? d
            ? p & 2 && k(d, 1)
            : ((d = mn()), d.c(), k(d, 1), d.m(r.parentNode, r))
          : d &&
            (K(),
            C(d, 1, 1, () => {
              d = null;
            }),
            q()),
        (V = _[2]) != null && V.show
          ? v
            ? p & 4 && k(v, 1)
            : ((v = vn()), v.c(), k(v, 1), v.m(o.parentNode, o))
          : v &&
            (K(),
            C(v, 1, 1, () => {
              v = null;
            }),
            q()),
        _[3]
          ? y
            ? p & 8 && k(y, 1)
            : ((y = gn()), y.c(), k(y, 1), y.m(i.parentNode, i))
          : y &&
            (K(),
            C(y, 1, 1, () => {
              y = null;
            }),
            q());
    },
    i(_) {
      f ||
        (k(e.$$.fragment, _),
        k(c),
        k(d),
        k(v),
        k(a.$$.fragment, _),
        k(y),
        (f = !0));
    },
    o(_) {
      C(e.$$.fragment, _),
        C(c),
        C(d),
        C(v),
        C(a.$$.fragment, _),
        C(y),
        (f = !1);
    },
    d(_) {
      _ && (E(l), E(t), E(r), E(o), E(s), E(i)),
        j(e, _),
        c && c.d(_),
        d && d.d(_),
        v && v.d(_),
        j(a, _),
        y && y.d(_);
    },
  };
}
function mo(n, e, l) {
  let t, r, o, a, s;
  return (
    N(n, Mt, (i) => l(4, (t = i))),
    N(n, yt, (i) => l(0, (r = i))),
    N(n, kt, (i) => l(1, (o = i))),
    N(n, $t, (i) => l(2, (a = i))),
    N(n, wt, (i) => l(3, (s = i))),
    se(Mt, (t = "ps-adminmenu"), t),
    [r, o, a, s]
  );
}
class vo extends X {
  constructor(e) {
    super(), Q(this, e, mo, bo, W, {});
  }
}
new vo({ target: document.getElementById("app") });