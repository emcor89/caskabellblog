import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_DiWc8GIQ.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B7S1LVjv.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/","cacheDir":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/node_modules/.astro/","outDir":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/dist/","srcDir":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/src/","publicDir":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/public/","buildClientDir":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/dist/client/","buildServerDir":"file:///Users/emiliocoronel/Documents/Documents%20-%20Emilio%E2%80%99s%20Mac%20mini/Caskabel/web/caskabellblog/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/categorias","isIndex":false,"type":"page","pattern":"^\\/categorias\\/?$","segments":[[{"content":"categorias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categorias.astro","pathname":"/categorias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/revista","isIndex":false,"type":"page","pattern":"^\\/revista\\/?$","segments":[[{"content":"revista","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/revista.astro","pathname":"/revista","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/vivo","isIndex":false,"type":"page","pattern":"^\\/vivo\\/?$","segments":[[{"content":"vivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vivo.astro","pathname":"/vivo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DoaJuRAs.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/categorias.astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/revista.astro",{"propagation":"none","containsHead":true}],["/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/pages/vivo.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/categorias@_@astro":"pages/categorias.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/revista@_@astro":"pages/revista.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/vivo@_@astro":"pages/vivo.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_nzqN5ZP1.mjs","/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_QlNV06ao.mjs","/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/.astro/content-modules.mjs":"chunks/content-modules_D-lYCJEu.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_2VE_WOev.mjs","/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_S2nEL2t8.mjs","/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/src/content/blog/using-mdx.mdx":"chunks/using-mdx_BQQ0xb4s.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.DoaJuRAs.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"7V2GdRMWPQgMu1ifCTMKdsMj2IkFaHXUN8rjOjOoB1w=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/emiliocoronel/Documents/Documents - Emilio’s Mac mini/Caskabel/web/caskabellblog/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
