document.querySelector("#topAsideButton").addEventListener("click", (e) => {
  let attr = document.getElementById("topAsideButton");
  if (attr.getAttribute("aria-expanded") == "false") {
    attr.setAttribute("aria-expanded", "true");
  } else {
    attr.setAttribute("aria-expanded", "false");
  }
});
