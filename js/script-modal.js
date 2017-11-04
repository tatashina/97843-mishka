var cartLink = document.querySelectorAll(".catalog__list__img-svg-cart");
var modalBackground = document.querySelector(".modal-background");
var modalContent = document.querySelector(".modal-content");
var btnLink = document.querySelectorAll(".week-good__btn");

if (btnLink) {
  for (var i = 0; i < btnLink.length; i++) {
    btnLink[i].addEventListener("click", function (event) {
      event.preventDefault();
      modalBackground.classList.add("modal-show");
      modalContent.classList.add("modal-show");
    })
  };
}

if (cartLink) {
  for (var i = 0; i < cartLink.length; i++) {
    cartLink[i].addEventListener("click", function (event) {
      event.preventDefault();
      modalBackground.classList.add("modal-show");
      modalContent.classList.add("modal-show");
    })
  };
}

if (modalBackground) {
  modalBackground.addEventListener("click", function (event) {
    event.preventDefault();
    modalBackground.classList.remove("modal-show");
    modalContent.classList.remove("modal-show");
  });
}
