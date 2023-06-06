// 'use strict';  отключил строгий режим по требованию eslint

/*
Данные для входа на сайт
  Почта:
  Address@mail.ru
  Пароль:
  Adr78*#
  Чекбокас "Я не робот":
  on

  Почта:
  postalAddress@mail.ru
  Пароль:
  pty89*#
  Чекбокас "Я не робот":
  on
*/

// импортируем стили css
import './index.css';
// импортируем логотип
// eslint-disable-next-line import/no-useless-path-segments, no-unused-vars
import logoCalculator from '../6_0_0_authentication/imgAuthentication/logo-calculator.png';

// получаем элемент формы
const formElement = document.querySelector('.authentication__wrapper');
// получим элемент для ввода email
const formEmail = formElement.querySelector('.email');
// получим элемент для ввода password
const formPassword = formElement.querySelector('.password');
// получим элемент для ввода checkbox
const formCheckbox = formElement.querySelector('.checkbox');
// получим элемент label
const formLabel = formElement.querySelector('.form-check-label');
// объект с введенными пользовательскими данными из формы
let userDataEntered = {};

// создадим элемент для вывода подсказки при неправильном вводе Email
const textErrorEmail = document.createElement('p');
// создадим элемент для вывода подсказки при неправильном вводе Password
const textErrorPassword = document.createElement('p');
// создадим элемент для вывода подсказки при неправильном вводе Checkbox
const textErrorCheckbox = document.createElement('p');

// функция для получения пользовательских данных из базы данных
async function getDataFromTheDatabase() {
  try {
    const response = await fetch(
      'https://authorization-6a5b3-default-rtdb.firebaseio.com/userData.json',
    );
    // получим данные пользователей
    const data = await response.json();
    return data;
  } catch (errors) {
    return errors;
  }
}

// добавить подсказку
function addHint(hintText, pageElementText, supportElement, pageElementInput) {
  pageElementText.textContent = hintText;
  pageElementText.classList.add('authentication__style-text-error');
  // Метод insertAdjacentElement позволяет вставить элемент в любое место страницы
  supportElement.insertAdjacentElement('afterEnd', pageElementText);
  pageElementInput.classList.add('authentication__style-error');
}

// удалить подсказку
function removeHint(pageElementInput, pageElementText) {
  pageElementInput.classList.remove('authentication__style-error');
  pageElementText.remove();
}

// функция добавляет или удаляет подсказку для поля Password в зависимости от веденных данных
function addOrRemoveHintPassword(userDataFromTheDatabase) {
  let flag = null;
  if (userDataEntered.password === userDataFromTheDatabase.password) {
    removeHint(formPassword, textErrorPassword);
    flag = true;
  }
  if (userDataEntered.password !== userDataFromTheDatabase.password) {
    const hintText = 'Неверный пароль, попробуйте еще раз';
    addHint(hintText, textErrorPassword, formPassword, formPassword);
    flag = false;
  }
  return flag;
}

// функция очищает поле Password
function clearThePasswordField() {
  formPassword.value = '';
  removeHint(formPassword, textErrorPassword);
}

// функция добавляет или удаляет подсказку в зависимости от установки флажка Checkbox
function addOrRemoveHintCheckbox(userDataFromTheDatabase) {
  let flag = null;
  if (userDataEntered.checkbox === userDataFromTheDatabase.checkbox) {
    removeHint(formCheckbox, textErrorCheckbox);
    flag = true;
  }
  if (userDataEntered.checkbox !== userDataFromTheDatabase.checkbox) {
    const hintText = 'Докажите, что вы не робот';
    addHint(hintText, textErrorCheckbox, formLabel, formCheckbox);
    flag = false;
  }
  return flag;
}

// функция для снятия флажка
function uncheckTheCheckbox() {
  formCheckbox.checked = false;
  removeHint(formCheckbox, textErrorCheckbox);
}

// функция проверяет введенные пользовательские данные с данными из БД на соответствие
function checkTheEnteredData(dataFromDatabase) {
  let flag = null;
  // получим массив с пользовательскими индикаторами из БД
  const userIndicators = Object.keys(dataFromDatabase);
  const arrLength = userIndicators.length;
  // счетчик
  let counter = 0;

  for (let i = 0; i < arrLength; i++) {
    counter += 1;
    const itemDataFromDatabase = dataFromDatabase[userIndicators[i]];

    if (userDataEntered.email === itemDataFromDatabase.email) {
      removeHint(formEmail, textErrorEmail);
      addOrRemoveHintPassword(itemDataFromDatabase);
      addOrRemoveHintCheckbox(itemDataFromDatabase);
      if (
        addOrRemoveHintPassword(itemDataFromDatabase)
        && addOrRemoveHintCheckbox(itemDataFromDatabase)
      ) {
        flag = true;
      }
      break;
    }

    /* если counter === arrLength,
     значит цыкал пробежался по всем элементам и не нашел совпадения */
    if (counter === arrLength) {
      const hintText = 'Неверный пароль, попробуйте еще раз';
      addHint(hintText, textErrorEmail, formEmail, formEmail);
      clearThePasswordField();
      uncheckTheCheckbox();
      flag = false;
    }
  }
  return flag;
}

// получаем данные формы из полей ввода
function getFormData(event) {
  // отменяет действие по умолчанию для события.
  event.preventDefault();
  /* Для получения данных из формы, воспользуемся объектом FormData.
    Этот объект содержит метод get(), с помощью которого извлекаем данные по имени */
  const formData = new FormData(formElement);
  // теперь можно извлечь данные
  const enteredEmail = formData.get('email');
  const enteredPassword = formData.get('password');
  const enteredCheckbox = formData.get('checkbox');

  // соберем введенные пользовательские данные из формы в объект
  userDataEntered = {
    email: enteredEmail,
    password: enteredPassword,
    checkbox: enteredCheckbox,
  };
  // обработаем полученный промис
  getDataFromTheDatabase().then((data) => {
    // проверяем введенные пользовательские данные с данными из БД на соответствие
    // если данные соответствуют, то переходим на другую страницу
    if (checkTheEnteredData(data)) {
      // переходим на другую страницу
      document.location.href = './main.html';
      onclick = document.location.href;
    }
  });
}
/* Для получения данных, навешивается обработчик отправки формы */
formElement.addEventListener('submit', getFormData);
