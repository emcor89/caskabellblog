import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_DiWc8GIQ.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Br5uVHmA.mjs';
import { a as getPostInfo } from '../../chunks/wordpress_D5YRezDF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const post = await getPostInfo(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Noticia", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>${post.title}</h1> <p>By ${post.author.node.name} on ${new Date(post.date).toLocaleDateString()}</p> ${post.featuredImage && renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")} alt="Featured Image">`} <p>${unescapeHTML(post.content)}</p> </article> <a href="/">← Back to blog</a> ` })}`;
}, "/Users/emiliocoronel/Documents/Documents - Emilio\u2019s Mac mini/Caskabel/web/caskabellblog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
