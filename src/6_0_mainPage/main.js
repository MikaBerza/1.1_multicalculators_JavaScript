/*активация строго режима*/
'use strict';
//___импортируем собственные стили
import './main.css';
import '../6_13_globalFiles/headerAndFooterCustomStyle.css';

//___импортируем изображения (header)
import iconsBurgerMenu from '../6_0_mainPage/imgMain/header/icons-burger-menu-30.png';

// импортируем изображения (1_section)
import fon01 from '../6_0_mainPage/imgMain/1_section/1.01fon.jpg';
import fon02 from '../6_0_mainPage/imgMain/1_section/1.02fon.jpg';
import fon03 from '../6_0_mainPage/imgMain/1_section/1.03fon.jpg';
import fon04 from '../6_0_mainPage/imgMain/1_section/1.04fon.jpg';

//___импортируем изображения (2_section)
// Формируем массив ссылок на изображения (для 2_section)
const imgArr2 = [];
function importAll(r) {
  r.keys().forEach((key) => imgArr2.push(r(key)));
}
importAll(
  require.context(
    '../6_0_mainPage/imgMain/2_section',
    true,
    /\.(png|svg|jpg|jpeg|gif)$/i
  )
);

// импортируем изображения (3_section) см.файл mainAnimationSection.js
// импортируем изображения (4_section) cм.файл mainSpeedClickSection.js

//___импортируем изображения (footer)
import iconInstagram from '../6_0_mainPage/imgMain/footer/iconInstagram.png';
import iconsGithub from '../6_0_mainPage/imgMain/footer/iconsGithub.png';
import iconsTikTok from '../6_0_mainPage/imgMain/footer/iconsTikTok.png';
import iconTelegram from '../6_0_mainPage/imgMain/footer/iconTelegram.png';
import iconWhatsapp from '../6_0_mainPage/imgMain/footer/iconWhatsapp.png';
