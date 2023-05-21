// 'use strict';  отключил строгий режим по требованию eslint
/*
Данные для входа на сайт
  Почта:
  Address@mail.ru
  Пароль:
  Adr78*#
  Чекбокас "Я не робот":
  true
*/
// импортируем стили css
import './index.css';
// импортируем пользовательские данные для аутентификации
import userData from './userData.json';
// импортируем логотип
// eslint-disable-next-line import/no-useless-path-segments, no-unused-vars
import logoCalculator from '../6_0_0_authentication/imgAuthentication/logo-calculator.png';

// Электронная почта
const inpAddress = document.getElementById('inputEmail1');
// Пароль
const inpPassword = document.getElementById('inputPassword1');
// Чекбокас "Я не робот"
const inpCheckbox = document.getElementById('inputCheck1');
// Кнопка войти
const entButton = document.getElementById('entryButton');

entButton.addEventListener('click', () => {
  userData.map((note) => {
    if (
      inpAddress.value === note.email
      && inpPassword.value === note.password
      && inpCheckbox.checked === note.check
    ) {
      inpAddress.classList.remove('bordTwo');
      inpPassword.classList.remove('bordTwo');
      inpCheckbox.classList.remove('bordTwo');
      // console.log('Данные правильные');
      // console.log('Происходит переход!');
      // Переход на главную страницу (Домашнего калькулятора)
      // eslint-disable-next-line no-multi-assign
      onclick = document.location.href = './main.html';
    } else if (
      inpAddress.value !== note.email
      && inpPassword.value !== note.password
      && inpCheckbox.checked !== note.check
    ) {
      inpAddress.classList.add('bordTwo');
      inpPassword.classList.add('bordTwo');
      inpCheckbox.classList.add('bordTwo');
    } else if (
      inpAddress.value !== note.email
      && inpPassword.value !== note.password
      && inpCheckbox.checked === note.check
    ) {
      inpAddress.classList.add('bordTwo');
      inpPassword.classList.add('bordTwo');
      inpCheckbox.classList.remove('bordTwo');
    } else if (
      inpAddress.value === note.email
      && inpPassword.value === note.password
      && inpCheckbox.checked !== note.check
    ) {
      inpAddress.classList.remove('bordTwo');
      inpPassword.classList.remove('bordTwo');
      inpCheckbox.classList.add('bordTwo');
    } else if (
      inpAddress.value === note.email
      && inpPassword.value !== note.password
      && inpCheckbox.checked === note.check
    ) {
      inpAddress.classList.remove('bordTwo');
      inpPassword.classList.add('bordTwo');
      inpCheckbox.classList.remove('bordTwo');
    } else if (
      inpAddress.value !== note.email
      && inpPassword.value === note.password
      && inpCheckbox.checked === note.check
    ) {
      inpAddress.classList.add('bordTwo');
      inpPassword.classList.remove('bordTwo');
      inpCheckbox.classList.remove('bordTwo');
    } else if (
      inpAddress.value === note.email
      && inpPassword.value !== note.password
      && inpCheckbox.checked !== note.check
    ) {
      inpAddress.classList.remove('bordTwo');
      inpPassword.classList.add('bordTwo');
      inpCheckbox.classList.add('bordTwo');
    } else if (
      inpAddress.value !== note.email
      && inpPassword.value === note.password
      && inpCheckbox.checked !== note.check
    ) {
      inpAddress.classList.add('bordTwo');
      inpPassword.classList.remove('bordTwo');
      inpCheckbox.classList.add('bordTwo');
    }
    return null;
  });
});
