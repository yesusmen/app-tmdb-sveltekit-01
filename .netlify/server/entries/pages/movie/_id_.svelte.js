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
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-5xftk{padding:1rem 0rem 2rem}p.svelte-5xftk{padding:1rem 0rem}.img-container.svelte-5xftk{width:100%}img.svelte-5xftk{width:100%;border-radius:1rem}.movie-details.svelte-5xftk{margin:2rem 20%}span.svelte-5xftk{font-weight:bold}")();
const css = {
  code: "h1.svelte-5xftk{padding:1rem 0rem 2rem}p.svelte-5xftk{padding:1rem 0rem}.img-container.svelte-5xftk{width:100%}img.svelte-5xftk{width:100%;border-radius:1rem}.movie-details.svelte-5xftk{margin:2rem 20%}span.svelte-5xftk{font-weight:bold}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${"e734b244aa67352c462d040d5fa65015"}&language=en-US`);
  const movieDetail = await res.json();
  if (res.status === 200) {
    return { props: { movieDetail } };
  }
}
const U5Bidu5D = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-5xftk"}"><div class="${"img-container svelte-5xftk"}">${movieDetail.backdrop_path != null ? `<img${(0, import_index_6b489d84.a)("src", `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`, 0)}${(0, import_index_6b489d84.a)("alt", movieDetail.title, 0)} class="${"svelte-5xftk"}">` : ``}</div>
    <div class="${"text-container"}"><h1 class="${"svelte-5xftk"}">${(0, import_index_6b489d84.e)(movieDetail.title)}</h1>
        <p class="${"overview svelte-5xftk"}">${(0, import_index_6b489d84.e)(movieDetail.overview)}</p>
        <p class="${"svelte-5xftk"}"><span class="${"svelte-5xftk"}">Release date:</span>
            ${(0, import_index_6b489d84.e)(movieDetail.release_date)} <br>
            <span class="${"svelte-5xftk"}">Budget:</span> ${(0, import_index_6b489d84.e)(movieDetail.budget)} <br>
            <span class="${"svelte-5xftk"}">Rating:</span> ${(0, import_index_6b489d84.e)(movieDetail.vote_average)} <br>
            <span class="${"svelte-5xftk"}">Runtime: </span> ${(0, import_index_6b489d84.e)(movieDetail.runtime)}mins

        </p></div>
</div>`;
});
