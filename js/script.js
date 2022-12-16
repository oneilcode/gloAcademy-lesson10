'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const title = document.querySelectorAll('h2 > a');
const adv = document.querySelector('.adv');

const list = document.querySelectorAll('ul');
const listItems = document.querySelectorAll('ul > li');

//Восстановить порядок книг

book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);

//Заменить картинку заднего фона на другую из папки image

document.body.style.backgroundImage = 'url(/image/adv.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

title[4].innerHTML = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы

adv.remove();

//Восстановить порядок глав во второй книге 

listItems[2].before(listItems[7]);
listItems[2].before(listItems[9]);
listItems[4].before(listItems[6]);
listItems[4].before(listItems[8]);
listItems[3].before(listItems[10]);

// и пятой книге 

listItems[48].before(listItems[51]);
listItems[48].before(listItems[54]);
listItems[48].before(listItems[56]);
listItems[48].before(listItems[55]);
listItems[48].before(listItems[49]);
listItems[48].before(listItems[50]);


//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

list[2].insertAdjacentHTML('afterend', '<ul><li>Глава 8: За пределами ES6</li></ul>');