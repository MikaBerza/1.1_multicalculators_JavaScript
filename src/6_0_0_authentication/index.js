/*
Данные для входа на сайт
  Почта:
  Address@mail.ru
  Пароль:
  Adr78*#
  Чекбокас "Я не робот":
  true
*/
/*активация строго режима*/
'use strict';
// импортируем стили css
import './index.css';
// импортируем логотип
import logoCalculator from '../6_0_0_authentication/imgAuthentication/logo-calculator.png';

// Электронная почта
const inpAddress = document.getElementById('inputEmail1');
// Пароль
const inpPassword = document.getElementById('inputPassword1');
// Чекбокас "Я не робот"
const inpCheckbox = document.getElementById('inputCheck1');
// Кнопка войти
const entButton = document.getElementById('entryButton');
// Вот такое длинное условие перехода на главную страницу
// попробовать оптимизировать это условие!!!
entButton.addEventListener('click', function () {
  if (
    inpAddress.value === 'Address@mail.ru' &&
    inpPassword.value === 'Adr78*#' &&
    inpCheckbox.checked === true
  ) {
    inpAddress.classList.remove('bordTwo');
    inpPassword.classList.remove('bordTwo');
    inpCheckbox.classList.remove('bordTwo');
    // console.log('Данные правильные');
    // console.log('Происходит переход!');
    // Переход на главную страницу (Домашнего калькулятора)
    onclick = document.location.href = './main.html';
  } else if (
    inpAddress.value !== 'Address@mail.ru' &&
    inpPassword.value !== 'Adr78*#' &&
    inpCheckbox.checked !== true
  ) {
    inpAddress.classList.add('bordTwo');
    inpPassword.classList.add('bordTwo');
    inpCheckbox.classList.add('bordTwo');
  } else if (
    inpAddress.value !== 'Address@mail.ru' &&
    inpPassword.value !== 'Adr78*#' &&
    inpCheckbox.checked === true
  ) {
    inpAddress.classList.add('bordTwo');
    inpPassword.classList.add('bordTwo');
    inpCheckbox.classList.remove('bordTwo');
  } else if (
    inpAddress.value === 'Address@mail.ru' &&
    inpPassword.value === 'Adr78*#' &&
    inpCheckbox.checked !== true
  ) {
    inpAddress.classList.remove('bordTwo');
    inpPassword.classList.remove('bordTwo');
    inpCheckbox.classList.add('bordTwo');
  } else if (
    inpAddress.value === 'Address@mail.ru' &&
    inpPassword.value !== 'Adr78*#' &&
    inpCheckbox.checked === true
  ) {
    inpAddress.classList.remove('bordTwo');
    inpPassword.classList.add('bordTwo');
    inpCheckbox.classList.remove('bordTwo');
  } else if (
    inpAddress.value !== 'Address@mail.ru' &&
    inpPassword.value === 'Adr78*#' &&
    inpCheckbox.checked === true
  ) {
    inpAddress.classList.add('bordTwo');
    inpPassword.classList.remove('bordTwo');
    inpCheckbox.classList.remove('bordTwo');
  } else if (
    inpAddress.value === 'Address@mail.ru' &&
    inpPassword.value !== 'Adr78*#' &&
    inpCheckbox.checked !== true
  ) {
    inpAddress.classList.remove('bordTwo');
    inpPassword.classList.add('bordTwo');
    inpCheckbox.classList.add('bordTwo');
  } else if (
    inpAddress.value !== 'Address@mail.ru' &&
    inpPassword.value === 'Adr78*#' &&
    inpCheckbox.checked !== true
  ) {
    inpAddress.classList.add('bordTwo');
    inpPassword.classList.remove('bordTwo');
    inpCheckbox.classList.add('bordTwo');
  }
});
