import { d as createAstro, c as createComponent, r as renderComponent, h as renderHead, i as renderSlot, a as renderTemplate } from './astro/server_DiWc8GIQ.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_5Ar50U2Y.mjs';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/emiliocoronel/Documents/Documents - Emilio\u2019s Mac mini/Caskabel/web/caskabellblog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
