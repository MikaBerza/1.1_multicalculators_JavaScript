!function(){"use strict";const t=document.getElementById("inputYear"),e=document.getElementById("btnСalculationYear"),n=document.getElementById("formOutputYear"),u="form-control__requirementOne",l="outputActiveOne";e.addEventListener("click",(function(){let e=Number(t.value),r=new Date(e,2,0);29===r.getDate()&&t.value.length<=4&&0!==t.value.length?(n.setAttribute("class","outputActiveYearYes"),n.innerHTML="Високосный"):29!==r.getDate()&&t.value.length<=4&&0!==t.value.length?(n.setAttribute("class","outputActiveYearNo"),n.innerHTML="НЕвисокосный"):t.value.length>4?(n.setAttribute("class",l),t.setAttribute("class",u),n.innerHTML="↑ Число года введено некорректно ↑"):(n.setAttribute("class",l),t.setAttribute("class",u),n.innerHTML="↑ Заполните поле ввода ↑")})),e.addEventListener("blur",(function(){n.setAttribute("class","outputInactiveYear"),t.setAttribute("class","form-control"),t.placeholder="гггг"}))}();