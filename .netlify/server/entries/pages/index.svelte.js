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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var import_MovieCard_8be229d5 = require("../../chunks/MovieCard-8be229d5.js");
var PopularMovies_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h3.svelte-1ws5wba{padding:0 1rem}.popular-movies.svelte-1ws5wba{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem}")();
const css$1 = {
  code: "h3.svelte-1ws5wba{padding:0 1rem}.popular-movies.svelte-1ws5wba{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const PopularMovies = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css$1);
  return `<h3 class="${"svelte-1ws5wba"}">Popular Movies</h3>
<div class="${"popular-movies svelte-1ws5wba"}">${(0, import_index_6b489d84.b)(popular, (movie) => {
    return `${(0, import_index_6b489d84.v)(import_MovieCard_8be229d5.M, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
var SearchMovies_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".search.svelte-vi2x5h{position:relative;width:30%;margin:1rem}button.svelte-vi2x5h{font-size:0.7rem;padding:0rem 1rem;background:rgb(96,100,201);color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-vi2x5h{width:100%;border:none;font-size:1rem;font-family:'Poppins', sans-serif;outline:none;padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:rgb(63,63,63);border-radius:10px;padding:1rem;color:white}label.svelte-vi2x5h{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-vi2x5h{background:rgb(50,50,50)}")();
const css = {
  code: ".search.svelte-vi2x5h{position:relative;width:30%;margin:1rem}button.svelte-vi2x5h{font-size:0.7rem;padding:0rem 1rem;background:rgb(96,100,201);color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer}input.svelte-vi2x5h{width:100%;border:none;font-size:1rem;font-family:'Poppins', sans-serif;outline:none;padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:rgb(63,63,63);border-radius:10px;padding:1rem;color:white}label.svelte-vi2x5h{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-vi2x5h{background:rgb(50,50,50)}",
  map: null
};
const SearchMovies = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form class="${"search svelte-vi2x5h"}">${`<label for="${"search"}" class="${"svelte-vi2x5h"}">Search Movie</label>`}
    <input type="${"text"}" id="${"search"}" class="${(0, import_index_6b489d84.e)((0, import_index_6b489d84.n)("")) + " svelte-vi2x5h"}"${(0, import_index_6b489d84.a)("value", inputValue, 0)}>
    ${``}
</form>`;
});
async function load({ fetch }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${"e734b244aa67352c462d040d5fa65015"}&language=en-US&page=1`);
  const data = await res.json();
  if (res.status === 200) {
    return { props: { popular: data.results } };
  }
}
const Routes = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${(0, import_index_6b489d84.v)(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
  ${(0, import_index_6b489d84.v)(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
