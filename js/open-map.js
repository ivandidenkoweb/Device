var openMap = document.querySelector(".open-map");
var popup = document.querySelector(".modal-content-map");
var closeMap = popup.querySelector(".modal-content-close");

opnMap.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.add("modal-content-show");
});

closeMap.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
 if (popup.classList.contains("modal-content-show")) {
 popup.classList.remove("modal-content-show");
 }
 }
});
