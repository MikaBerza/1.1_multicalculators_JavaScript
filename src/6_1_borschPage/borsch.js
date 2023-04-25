/*активация строго режима*/
'use strict';
// импортируем стили css
import '../6_13_globalFiles/headerAndFooterCustomStyle.css';
import '../6_13_globalFiles/borschPancakesPilafStyle.css';
import './borsch.css';
// импортируем фоновое изображение
import logoCalculator from './imgBorsch/1.32fonBorsch.jpg';
//импортирую функцию
import calculateNumberOfProducts from '../6_13_globalFiles/borschPancakesPilafScript';

// Считываем инпут
const input = document.getElementById('idProductInput');
// Считываем кнопку Расчитать
const btn = document.getElementById('btnProduct');

// Считываем ячейки с именем продукта (получается массив)
const productsArr = document.querySelectorAll('.table-products');
// Считываем ячейки с колличеством данного продукта (получается массив)
const quantityArr = document.querySelectorAll('.table-quantity');
// Считываем ячейку справа от ячейки соль в столбце количество
const cellSalt = document.getElementById('salt');

// Объект содержит продукты для одной порции блюда (вес продукта в граммах)
const productPerServing = {
  Говядина: 62.5,
  Картофель: 62.5,
  'Капуста белокочанная': 62.5,
  Свекла: 37.5,
  Морковь: 37.5,
  'Лук репчатый': 0.25,
  'Томат паста': 0.25,
  Чернослив: 0.625,
  'Зелень петрушки': 0.125,
  'Масло растительное': 0.25,
  Вода: 0.25,
};

// По нажатию на кнопку 'РАССЧИТАТЬ', ячейки столбца 'Количество' заполняются требуемым грамможем(граммами) продуктов
btn.addEventListener('click', function () {
  calculateNumberOfProducts(
    input,
    productsArr,
    quantityArr,
    cellSalt,
    productPerServing
  );
});
