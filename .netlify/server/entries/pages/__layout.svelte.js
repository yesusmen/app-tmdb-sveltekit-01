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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var global = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n    margin: 0 10%;\r\n}\r\n\r\n")();
var Navbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-ukrizw.svelte-ukrizw{display:flex;min-height:10vh;align-items:center;justify-content:space-between}a.svelte-ukrizw.svelte-ukrizw{font-size:1rem;font-weight:bold;font-family:'Poppins';color:black;text-decoration:none}.img.svelte-ukrizw.svelte-ukrizw{width:40px}.brand.svelte-ukrizw.svelte-ukrizw{display:flex;align-items:center}.text-brand.svelte-ukrizw.svelte-ukrizw{margin-left:1rem;padding:0}.nav-item.svelte-ukrizw.svelte-ukrizw{display:flex;align-items:center;margin-right:1rem}.nav-item.svelte-ukrizw p.svelte-ukrizw:hover{color:rgb(96,100,201)}.text-link.svelte-ukrizw.svelte-ukrizw{margin-left:0.7rem}")();
const css$1 = {
  code: ".container.svelte-ukrizw.svelte-ukrizw{display:flex;min-height:10vh;align-items:center;justify-content:space-between}a.svelte-ukrizw.svelte-ukrizw{font-size:1rem;font-weight:bold;font-family:'Poppins';color:black;text-decoration:none}.img.svelte-ukrizw.svelte-ukrizw{width:40px}.brand.svelte-ukrizw.svelte-ukrizw{display:flex;align-items:center}.text-brand.svelte-ukrizw.svelte-ukrizw{margin-left:1rem;padding:0}.nav-item.svelte-ukrizw.svelte-ukrizw{display:flex;align-items:center;margin-right:1rem}.nav-item.svelte-ukrizw p.svelte-ukrizw:hover{color:rgb(96,100,201)}.text-link.svelte-ukrizw.svelte-ukrizw{margin-left:0.7rem}",
  map: null
};
let logo = "yesus_perfil.png";
const Navbar = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav><div class="${"container svelte-ukrizw"}"><div class="${"brand svelte-ukrizw"}"><a href="${"/"}" class="${"svelte-ukrizw"}"><img${(0, import_index_6b489d84.a)("src", logo, 0)} alt="${"Logo Jes\xFAs Araujo"}" class="${"img svelte-ukrizw"}"></a>
            <a href="${"/"}" class="${"svelte-ukrizw"}"><p class="${"text-brand svelte-ukrizw"}">Movie Database Svelte</p></a></div>
        <div class="${"nav-item svelte-ukrizw"}"><a href="${"/"}" class="${"svelte-ukrizw"}"><p class="${"svelte-ukrizw"}">Home</p></a>
            <a href="${"/about"}" class="${"svelte-ukrizw"}"><p class="${"text-link svelte-ukrizw"}">About</p></a></div></div>
</nav>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".red-social.svelte-gbjkp5.svelte-gbjkp5{margin-top:3rem;margin-bottom:3rem}.icon-social.svelte-gbjkp5.svelte-gbjkp5{display:flex;align-items:center;justify-content:center}.icon-social.svelte-gbjkp5 img.svelte-gbjkp5{width:2.2rem;margin:0.5rem}.provider.svelte-gbjkp5.svelte-gbjkp5{display:flex;align-items:center;justify-content:center}.provider.svelte-gbjkp5 img.svelte-gbjkp5{width:2.5rem;margin-right:0.5rem}.web-master.svelte-gbjkp5.svelte-gbjkp5{display:flex;align-items:center;justify-content:center}.web-master.svelte-gbjkp5 img.svelte-gbjkp5{width:2.5rem;margin-right:0.5rem}.web-master.svelte-gbjkp5 p strong.svelte-gbjkp5{margin:0 0.5rem 0 0.5rem;color:#FE5D15}.web-master.svelte-gbjkp5 p strong a.svelte-gbjkp5{text-decoration:none;color:#FE5D15}")();
const css = {
  code: ".red-social.svelte-gbjkp5.svelte-gbjkp5{margin-top:3rem;margin-bottom:3rem}.icon-social.svelte-gbjkp5.svelte-gbjkp5{display:flex;align-items:center;justify-content:center}.icon-social.svelte-gbjkp5 img.svelte-gbjkp5{width:2.2rem;margin:0.5rem}.provider.svelte-gbjkp5.svelte-gbjkp5{display:flex;align-items:center;justify-content:center}.provider.svelte-gbjkp5 img.svelte-gbjkp5{width:2.5rem;margin-right:0.5rem}.web-master.svelte-gbjkp5.svelte-gbjkp5{display:flex;align-items:center;justify-content:center}.web-master.svelte-gbjkp5 img.svelte-gbjkp5{width:2.5rem;margin-right:0.5rem}.web-master.svelte-gbjkp5 p strong.svelte-gbjkp5{margin:0 0.5rem 0 0.5rem;color:#FE5D15}.web-master.svelte-gbjkp5 p strong a.svelte-gbjkp5{text-decoration:none;color:#FE5D15}",
  map: null
};
let github = "icon_github.svg";
let twitter = "icon_twitter.svg";
let linkedin = "icon_linkedin.svg";
let netlify = "netlify.svg";
let intelectual = "icon_developer.svg";
const Footer = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"red-social svelte-gbjkp5"}"><div class="${"icon-social svelte-gbjkp5"}"><a href="${"https://github.com/yesusmen"}"><img${(0, import_index_6b489d84.a)("src", github, 0)} alt="${"Github Yesusmen"}" class="${"svelte-gbjkp5"}"></a>
        <a href="${"https://twitter.com/AraujoYesusmen"}"><img${(0, import_index_6b489d84.a)("src", twitter, 0)} alt="${"Twitter @AraujoYesusmen"}" class="${"svelte-gbjkp5"}"></a>
        <a href="${"https://www.linkedin.com/in/yesusmen/"}"><img${(0, import_index_6b489d84.a)("src", linkedin, 0)} alt="${"LinkedIn Jes\xFAs Araujo"}" class="${"svelte-gbjkp5"}"></a></div>
    <div class="${"provider svelte-gbjkp5"}"><a href="${"https://www.netlify.com/"}"><img${(0, import_index_6b489d84.a)("src", netlify, 0)} alt="${"Logo Netlify"}" class="${"svelte-gbjkp5"}"></a>
        <a href="${"https://www.netlify.com/"}"><p>Deploy by Netlify</p></a></div>
    <div class="${"web-master svelte-gbjkp5"}"><img${(0, import_index_6b489d84.a)("src", intelectual, 0)} alt="${"intelectual"}" class="${"svelte-gbjkp5"}">
        <p>by <strong class="${"svelte-gbjkp5"}"><a href="${"https://portafolio-yesus.netlify.app/"}" class="${"svelte-gbjkp5"}">Ing. Jes\xFAs E. Araujo G.
                </a></strong> 2022
        </p></div>
</div>`;
});
const _layout = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Movie DB Svelte</title>`, ""}`, ""}

${(0, import_index_6b489d84.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${(0, import_index_6b489d84.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
