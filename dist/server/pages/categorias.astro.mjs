import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_DiWc8GIQ.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_Br5uVHmA.mjs';
import { b as getAllPosts } from '../chunks/wordpress_D5YRezDF.mjs';
export { renderers } from '../renderers.mjs';

const $$Categorias = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getAllPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Contacto", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Últimos Artículos</h1> <ul> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}`, "href")}>${post.title}</a> <p>${unescapeHTML(post.excerpt)}</p> <small>Publicado el: ${new Date(post.date).toLocaleDateString()}</small> </li>`)} </ul> ` })}`;
}, "/Users/emiliocoronel/Documents/Documents - Emilio\u2019s Mac mini/Caskabel/web/caskabellblog/src/pages/categorias.astro", void 0);

const $$file = "/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/categorias.astro";
const $$url = "/categorias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Categorias,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
