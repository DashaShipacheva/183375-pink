(function() {
  var storyForm = document.forms[0];
  var popupSuccess = document.querySelector(".modal-content--success");
  var popupFail = document.querySelector(".modal-content--fail");
  var submitButton = storyForm.querySelector(".order-form__btn");
  var popups = document.querySelectorAll(".modal-content");

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    var requiredFields = storyForm.querySelectorAll("[required]");

    var isFormValid = Array.prototype.every.call(requiredFields, function(field) {
      return field.checkValidity();
    });

    if(isFormValid) {
      popupSuccess.classList.add("modal-content__show");
      storyForm.submit();
    } else {
      popupFail.classList.add("modal-content__show");
    }
  });

  popups.forEach(function(popup) {
    var closeBtn = popup.querySelector(".modal-content__btn-close");
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      popup.classList.remove("modal-content__show");
    });
  });

  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
      if (popupFail.classList.contains("modal-content__show")) {
        popupFail.classList.remove("modal-content__show");
      } else {
        popupSuccess.classList.remove("modal-content__show");
      }
    }
  });
})();
