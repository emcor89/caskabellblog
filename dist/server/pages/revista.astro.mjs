import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DiWc8GIQ.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_Br5uVHmA.mjs';
export { renderers } from '../renderers.mjs';

const $$Revista = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Revista", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center bg-yellow-50 py-24" role="main" aria-label="Digital Magazine Section"> <div class="flex flex-row justify-between gap-6 max-md:flex-col max-sm:gap-6 w-full max-md:max-w-full max-w-7xl"> <article class="flex flex-col gap-8 px-0 py-7 max-w-[492px] max-md:px-0 max-md:py-5 max-sm:px-0 max-sm:py-4 max-sm:max-w-full"> <h2 class="flex gap-1.5 items-center text-3xl font-bold leading-9 max-md:text-2xl max-sm:text-xl"> <span class="text-white bg-yellow-400 p-1">Revista</span> <span class="text-neutral-800">Digital</span> </h2> <p class="text-base leading-6 text-neutral-600 max-sm:text-sm">
En Caskabel digital, nos dedicamos a brindarles la cobertura
					más completa y actualizada sobre noticias, política y
					deportes. Nuestro equipo de periodistas y colaboradores
					trabaja incansablemente para ofrecerles artículos profundos,
					análisis detallados y reportajes exclusivos que les
					mantendrán informados y comprometidos con los eventos más
					importantes del mundo.
</p> </article> <figure class="flex flex-1 justify-center items-center p-2.5 max-sm:p-1.5 max-sm:w-full"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a81d4344cd5273cf263d8e758003f335a55d376" alt="Magazine cover showing New Scientist with climate change headline" class="object-contain max-w-full h-auto max-h-[332px]"> </figure> </div> </section>  <section class="flex justify-center items-center flex-col mb-8" role="region" aria-label="Image Gallery"> <div class="flex flex-row justify-center flex-wrap gap-6 max-md:flex-col max-sm:gap-6 max-w-5xl m-8"> <figure class="flex flex-col items-center p-2.5"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7cfe847df25151eb07bf7dbd7c4e8c80327db" alt="Ecuador: ¿Transita por un nuevo camino?" class="w-[251px] h-[358px] object-cover rounded-[8px]"> <h3 class="mt-4">Edicion numero #109</h3> <p>Descagarla</p> </figure> <figure class="flex flex-col items-center p-2.5"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7cfe847df25151eb07bf7dbd7c4e8c80327db" alt="Ecuador: ¿Transita por un nuevo camino?" class="w-[251px] h-[358px] object-cover rounded-[8px]"> <h3 class="mt-4">Edicion numero #109</h3> <p>Descagarla</p> </figure> <figure class="flex flex-col items-center p-2.5"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7cfe847df25151eb07bf7dbd7c4e8c80327db" alt="Ecuador: ¿Transita por un nuevo camino?" class="w-[251px] h-[358px] object-cover rounded-[8px]"> <h3 class="mt-4">Edicion numero #109</h3> <p>Descagarla</p> </figure> <figure class="flex flex-col items-center p-2.5"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7cfe847df25151eb07bf7dbd7c4e8c80327db" alt="Ecuador: ¿Transita por un nuevo camino?" class="w-[251px] h-[358px] object-cover rounded-[8px]"> <h3 class="mt-4">Edicion numero #109</h3> <p>Descagarla</p> </figure> <figure class="flex flex-col items-center p-2.5"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7cfe847df25151eb07bf7dbd7c4e8c80327db" alt="Ecuador: ¿Transita por un nuevo camino?" class="w-[251px] h-[358px] object-cover rounded-[8px]"> <h3 class="mt-4">Edicion numero #109</h3> <p>Descagarla</p> </figure> <figure class="flex flex-col items-center p-2.5"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c7cfe847df25151eb07bf7dbd7c4e8c80327db" alt="Ecuador: ¿Transita por un nuevo camino?" class="w-[251px] h-[358px] object-cover rounded-[8px]"> <h3 class="mt-4">Edicion numero #109</h3> <p>Descagarla</p> </figure> </div> <!-- fin revista section --> <!-- block contact --> <section class="flex flex-col px-40 py-14 mt-16 rounded-xl bg-stone-100 items-center"> <h3 class="text-xl font-semibold leading-snug text-center text-neutral-800 max-md:max-w-full">
Comparte tus opiniones con nuestros redactores
</h3> <button class="mt-6 max-w-full text-lg leading-none text-yellow-400 rounded-none w-[237px]"> <span class="block px-6 py-4 rounded-md border border-yellow-400 border-solid max-md:px-5">
Contactanos
</span> </button> </section> </section>  ` })}`;
}, "/Users/emiliocoronel/Documents/Documents - Emilio\u2019s Mac mini/Caskabel/web/caskabellblog/src/pages/revista.astro", void 0);

const $$file = "/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/revista.astro";
const $$url = "/revista";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Revista,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
