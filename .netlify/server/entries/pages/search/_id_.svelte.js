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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_MovieCard_8be229d5 = require("../../../chunks/MovieCard-8be229d5.js");
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".searched-movies.svelte-13v5m0s{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));column-gap:1rem;row-gap:2rem;height:20vh}")();
const css = {
  code: ".searched-movies.svelte-13v5m0s{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));column-gap:1rem;row-gap:2rem;height:20vh}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${"e734b244aa67352c462d040d5fa65015"}&language=en-US&query=${params.id}&page=1&include_adult=false`);
  const data = await res.json();
  console.log(res);
  if (res.status === 200) {
    return { props: { searchMovie: data.results } };
  }
}
const U5Bidu5D = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { searchMovie } = $$props;
  if ($$props.searchMovie === void 0 && $$bindings.searchMovie && searchMovie !== void 0)
    $$bindings.searchMovie(searchMovie);
  $$result.css.add(css);
  return `<div class="${"searched-movies svelte-13v5m0s"}">${(0, import_index_6b489d84.b)(searchMovie, (movie) => {
    return `${(0, import_index_6b489d84.v)(import_MovieCard_8be229d5.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
