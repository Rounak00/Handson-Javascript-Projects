var modalBtn = document.querySelector("#modal-btn");

var modalContainer = document.querySelector(".container");

var modalContent = document.querySelector(".content");

const showModal = function () {
  modalContainer.classList.add("modal-visible");
};

const hideModal = function () {
  modalContainer.classList.remove("modal-visible");
};

modalBtn.addEventListener("click", function () {
  showModal();
});

// Modal Container
modalContainer.addEventListener("click", function () {
  hideModal();
});

// Modal Content
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Check for ESC Key Press
document.addEventListener("keydown", function (event) {
  if (
    event.keyCode === 27 &&
    modalContainer.classList.contains("modal-visible")
  ) {
    // Modal Hide
    hideModal();
  }
});

// Modal Close Button
var closeBtn = modalContainer.querySelector(".close");
closeBtn.addEventListener("click", function () {
  hideModal();
});
