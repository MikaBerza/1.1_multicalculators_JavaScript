/* eslint-disable no-unused-vars */
// 'use strict';  отключил строгий режим по требованию eslint
// ___импортируем собственные стили
import './main.css';
import '../6_13_globalFiles/headerAndFooterCustomStyle.css';

// импортируем изображения (header)
import iconsBurgerMenu from './imgMain/header/icons-burger-menu-30.png';
// импортируем изображения (1_section)
import fon01 from './imgMain/1_section/1.01fon.jpg';
import fon02 from './imgMain/1_section/1.02fon.jpg';
import fon03 from './imgMain/1_section/1.03fon.jpg';
import fon04 from './imgMain/1_section/1.04fon.jpg';
// импортируем изображения (footer)
import iconInstagram from './imgMain/footer/iconInstagram.png';
import iconsGithub from './imgMain/footer/iconsGithub.png';
import iconsTikTok from './imgMain/footer/iconsTikTok.png';
import iconTelegram from './imgMain/footer/iconTelegram.png';
import iconWhatsapp from './imgMain/footer/iconWhatsapp.png';
// ___импортируем изображения (2_section)
// Формируем массив ссылок на изображения (для 2_section)
const imgArr2 = [];
function importAll(r) {
  r.keys().forEach((key) => imgArr2.push(r(key)));
}
importAll(
  require.context(
    '../6_0_mainPage/imgMain/2_section',
    true,
    /\.(png|svg|jpg|jpeg|gif)$/i,
  ),
);

// импортируем изображения (3_section) см.файл mainAnimationSection.js
// импортируем изображения (4_section) cм.файл mainSpeedClickSection.js
