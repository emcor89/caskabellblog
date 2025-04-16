import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BxrJI5VG.mjs';
import { manifest } from './manifest_nzqN5ZP1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/categorias.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/nosotros.astro.mjs');
const _page6 = () => import('./pages/revista.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/vivo.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/categorias.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/nosotros.astro", _page5],
    ["src/pages/revista.astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/vivo.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/dist/client/",
    "server": "file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
