import { C as s, p as o, w as t, a, d as r, N as n } from "./p-6f4eae92.js";
const e = () =>
		s && s.supports && s.supports("color", "var(--c)")
			? a()
			: __sc_import_ionicons("./p-a32ddb35.js").then(() =>
					(o.s = t.__cssshim) ? (!1).i() : 0
			  ),
	c = () => {
		o.s = t.__cssshim;
		const s = Array.from(r.querySelectorAll("script")).find(
				(s) =>
					RegExp(`/${n}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
					s.getAttribute("data-stencil-namespace") === n
			),
			e = s["data-opts"] || {};
		return "onbeforeload" in s && !history.scrollRestoration
			? { then() {} }
			: ((e.resourcesUrl = new URL(
					".",
					new URL(
						s.getAttribute("data-resources-url") || s.src,
						t.location.href
					)
			  ).href),
			  i(e.resourcesUrl, s),
			  t.customElements
					? a(e)
					: __sc_import_ionicons("./p-bea43937.js").then(() => e));
	},
	i = (s, o) => {
		const a = "__sc_import_" + n.replace(/\s|-/g, "_");
		try {
			t[a] = Function("w", "return import(w);//" + Math.random());
		} catch (e) {
			const n = new Map();
			t[a] = (e) => {
				const c = new URL(e, s).href;
				let i = n.get(c);
				if (!i) {
					const s = r.createElement("script");
					(s.type = "module"),
						(s.crossOrigin = o.crossOrigin),
						(s.src = URL.createObjectURL(
							new Blob([`import * as m from '${c}'; window.${a}.m = m;`], {
								type: "application/javascript",
							})
						)),
						(i = new Promise((o) => {
							s.onload = () => {
								o(t[a].m), s.remove();
							};
						})),
						n.set(c, i),
						r.head.appendChild(s);
				}
				return i;
			};
		}
	};
export { e as a, c as p };
