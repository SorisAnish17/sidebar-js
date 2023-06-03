let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let mark = document.querySelector("#mark");
btn.addEventListener("click", () => {
  list.className = "anime";
});
btn.removeEventListener("click", () => {
  list.className = "error";
});
mark.addEventListener("click", () => {
  list.className = "error";
});
