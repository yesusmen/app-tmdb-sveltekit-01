var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var about_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".title.svelte-bufidj{margin-top:3rem}.text-product.svelte-bufidj{margin-top:2rem;margin-bottom:1rem}")();
const css = {
  code: ".title.svelte-bufidj{margin-top:3rem}.text-product.svelte-bufidj{margin-top:2rem;margin-bottom:1rem}",
  map: null
};
const About = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"title svelte-bufidj"}">Acerca de...</h1>

<h2 class="${"text-product svelte-bufidj"}">!Hablemos de TMDB\xA1</h2>

<p>La base de datos de pel\xEDculas <strong>(TMDB)</strong> es una base de datos de pel\xEDculas y TV creada por la comunidad. 
    Cada dato ha sido agregado por nuestra incre\xEDble comunidad desde 2008. El s\xF3lido enfoque internacional 
    de TMDb y la amplitud de los datos son en gran medida incomparables y es algo de lo que estamos 
    incre\xEDblemente orgullosos. En pocas palabras, vivimos y respiramos en comunidad y eso es precisamente 
    lo que nos hace diferentes.
</p>

<h2 class="${"text-product svelte-bufidj"}">\xBFQui\xE9n soy yo?</h2>

<p>Soy ingeniero en inform\xE1tico, especializado en el desarrollo de aplicaciones m\xF3viles, de escritorio y web. 
    Aplicando las buenas pr\xE1cticas de codificaci\xF3n y un entusiasta de las nuevas tecnolog\xEDas. 
    Desde el 2020 he venido trabajando con diferentes framework, inclin\xE1ndome a <strong>VUE, REACT. SVELTE, LARAVEL, ASP.NET, BLAZOR y TAILWINDCSS.</strong> 
    La tecnolog\xEDa utilizada para el desarrollo de esta app, son las siguientes: <strong>SVELTE, CSS, FETCH, y API REST.</strong> Creando el proyecto con <strong>VITE.JS</strong> 
</p>`;
});
