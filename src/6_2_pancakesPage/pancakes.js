/*активация строго режима*/
'use strict';
// импортируем стили css
import '../6_13_globalFiles/headerAndFooterCustomStyle.css';
import '../6_13_globalFiles/borschPancakesPilafStyle.css';
import './pancakes.css';
// импортируем изображения
import fonPancakes from './imgPancakes/1.33fonPancakes.jpg';
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
  Молоко: 0.12,
  Яйца: 1,
  Мука: 35,
  'Масло сливочное, растопленное': 5,
  Соль: 0.5,
  Сахар: 5,
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
