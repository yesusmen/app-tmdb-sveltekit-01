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
  M: () => MovieCard
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("./index-6b489d84.js");
var MovieCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "img.svelte-6q8ag4{width:100%;height:45vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-6q8ag4{font-size:0.9rem}.description.svelte-6q8ag4{height:5vh}p.svelte-6q8ag4{font-size:0.7rem}.movie-card.svelte-6q8ag4{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}")();
const css = {
  code: "img.svelte-6q8ag4{width:100%;height:45vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h2.svelte-6q8ag4{font-size:0.9rem}.description.svelte-6q8ag4{height:5vh}p.svelte-6q8ag4{font-size:0.7rem}.movie-card.svelte-6q8ag4{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card svelte-6q8ag4"}"><a${(0, import_index_6b489d84.a)("href", `/movie/${movie.id}`, 0)} sveltekit:prefetch sveltekit:noscroll>${movie.poster_path != null ? `<img${(0, import_index_6b489d84.a)("src", `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 0)}${(0, import_index_6b489d84.a)("alt", movie.title, 0)} class="${"svelte-6q8ag4"}">` : ``}</a>
    <div class="${"description svelte-6q8ag4"}"><h2 class="${"svelte-6q8ag4"}">${(0, import_index_6b489d84.e)(movie.title)}</h2>
        <p class="${"svelte-6q8ag4"}">${(0, import_index_6b489d84.e)(movie.release_date)}</p></div>
</div>`;
});
