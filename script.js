const btn = document.querySelector("button");
const search = document.querySelector(".search");
const inp = document.querySelector("input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  inp.focus();
});
