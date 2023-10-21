let divhidden = document.querySelectorAll(".layer_box");

document.querySelector("#topAsideButton").addEventListener("click", (e) => {
  let attr = document.getElementById("topAsideButton");

  if (attr.getAttribute("aria-expanded") == "false") {
    attr.setAttribute("aria-expanded", "true");
    divhidden[0].style.visibility = "visible";
  } else {
    attr.setAttribute("aria-expanded", "false");
    divhidden[0].style.visibility = "hidden";
  }
});

document.querySelector(".btn_talk").addEventListener("click", () => {
  let talk = document.querySelector(".btn_talk");
  if (talk.getAttribute("aria-expanded") == "false") {
    talk.setAttribute("aria-expanded", "true");
    divhidden[1].style.visibility = "visible";
  } else {
    talk.setAttribute("aria-expanded", "false");
    divhidden[1].style.visibility = "hidden";
  }
});

document.querySelector(".btn_notify").addEventListener("click", () => {
  let notify = document.querySelector(".btn_notify");
  if (notify.getAttribute("aria-expanded") == "false") {
    notify.setAttribute("aria-expanded", "true");
    divhidden[2].style.visibility = "visible";
  } else {
    notify.setAttribute("aria-expanded", "false");
    divhidden[2].style.visibility = "hidden";
  }
});
