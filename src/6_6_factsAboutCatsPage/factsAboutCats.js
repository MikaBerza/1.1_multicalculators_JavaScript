// 'use strict';  отключил строгий режим по требованию eslint
// импортируем стили css
import '../6_13_globalFiles/headerAndFooterCustomStyle.css';
import './factsAboutCats.css';
// импортируем изображения
// eslint-disable-next-line no-unused-vars
import defaultCat from './imgFactsAboutCats/1.41defaultCat.jpg';
// eslint-disable-next-line no-unused-vars
import loadingError from './imgFactsAboutCats/1.42loadingError.jpg';
//
//
//
const fact = document.querySelector('.card__fact');
// console.log(fact);
const img = document.querySelector('.card__img');
// console.log(img);

// Cat Facts API
const urlCatFact = 'https://catfact.ninja/fact';
// console.log(urlCatFact);

/* Глобальный fetch()метод запускает процесс извлечения ресурса из сети,
возвращая обещание (promise), которое выполняется, как только ответ
становится доступным. */

/* async - У этого слова один простой смысл: эта функция всегда возвращает промис.
Значения других типов оборачиваются в завершившийся успешно
промис автоматически. */

/* await - ключевое слово  заставит интерпретатор JavaScript ждать до тех пор, пока
промис справа от await не выполнится. После чего оно вернёт его результат,
и выполнение кода продолжится. */

// async await - асинхронное ожидание
async function fetchHandler() {
  try {
    /* здесь храниться ответ от сервера */
    const responseFact = await fetch(urlCatFact);
    // поучаем тело ответа
    const dataFact = await responseFact.json();
    fact.textContent = dataFact.fact;
  } catch (error) {
    // если возникнет ошибка, то мы выведем текст (Ошибка загрузки !!!)
    fact.textContent = 'Ошибка загрузки !!!';
    // console.log(error);
  }
}
img.addEventListener('click', fetchHandler);
