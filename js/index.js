// Находим форму в DOM
const formElement = document.querySelector(".popup");
// Находим поля формы в DOM
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#password");
const popupCloseButtonElement = formElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".header__enter");
const popupSaveButtonElement = formElement.querySelector(".popup__btn-save");
console.log(formElement);


const popupForm = formElement.querySelector(".popup__form");
function addPopupVisibility () {
  formElement.classList.toggle('popup_open');
}
function closePopupVisibility () {
  formElement.classList.toggle('popup_open');
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
closePopupVisibility();
  }
// // Прикрепляем обработчик к форме:

// // он будет следить за событием “submit” - «отправка»

 popupForm.addEventListener('submit', handleFormSubmit);

 popupOpenButtonElement.addEventListener('click', addPopupVisibility);

 popupCloseButtonElement.addEventListener('click', closePopupVisibility);
