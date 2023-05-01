// 'use strict';  отключил строгий режим по требованию eslint
// импортируем картинки (3_section)
// eslint-disable-next-line quotes, no-unused-vars
import iconsStart1 from "./imgMain/3_section/button_animation/1.27iconsStart.png";
// eslint-disable-next-line quotes, no-unused-vars
import iconsStop1 from "./imgMain/3_section/button_animation/1.28iconsStop.png";

/* <!-----SectionThree------------------------------------------------------------> */
/* ---------Анимация из картинок----------------------------------------------------*/
// Получаем доступ к нужному нам элементу
const elemImg = document.getElementById('imgSectionThree');
const elemBtnStart = document.getElementById('btnSectionThreeStart');
const elemBtnStop = document.getElementById('btnSectionThreeStop');

// Формируем массив ссылок на картинки (для анимации)
const imgArr = [];

function importAll(r) {
  r.keys().forEach((key) => imgArr.push(r(key)));
}
importAll(
  require.context(
    '../6_0_mainPage/imgMain/3_section/viking_animation',
    true,
    /\.png$/i,
  ),
);

/* Инициализируем переменную (timer) как глобальную
чтобы в ней между запусками функции (start, stop)
хранилось значение */
let timer;
// инициализируем счетчик который будет отвечать за картинки
let counterImg = 0;

// Функция для запуска анимации
function startAnimation() {
  timer = setInterval(() => {
    // Прибавляем к счетчику +1
    ++counterImg;
    // по очереди из массива добавляем картинки
    elemImg.setAttribute('src', imgArr[counterImg]);
    if (counterImg > 0 && counterImg < 10) {
      // Ставим блок формы (кнопки)
      elemBtnStart.disabled = true;
    } else if (counterImg === 10) {
      // Проверяю что counterImg === 10
      // console.log('Десять');
      // Выстовляю стартовую картинку
      elemImg.setAttribute('src', imgArr[0]);
      // Останавливаю таймер
      clearInterval(timer);
      // Сбрасываю счетчик на 0
      counterImg = 0;
      // Удаляю блок формы (кнопки)
      elemBtnStart.removeAttribute('disabled');
    }
  }, 300);
}

// Функция для остановки анимации
function stopAnimation() {
  // clearInterval останавливаем таймер
  clearInterval(timer);
  // Удаляю блок формы (кнопки)
  elemBtnStart.removeAttribute('disabled');
}

/*
Метод addEventListener - добавляет обработчик события к указанному элементу и
запустить выполнение программы при совершении заданного действия
*/
elemBtnStart.addEventListener('dblclick', startAnimation);
elemBtnStop.addEventListener('click', stopAnimation);
