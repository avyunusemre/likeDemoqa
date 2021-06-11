const elementsBtn = document.querySelector(".btn-elements");
const spanSvg = document.querySelector(".elements-svg");
const list = document.querySelector(".menu_list");

eventListeners();

function eventListeners() {
  elementsBtn.addEventListener("click", acKapa);
  spanSvg.addEventListener("click", acKapa);
}

function acKapa() {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
