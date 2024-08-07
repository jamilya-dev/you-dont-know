'use script'

const books = document.querySelectorAll('.book');
const container = document.querySelector('.books');
const marketing = document.querySelector('.adv');
const list2 = books[0].querySelectorAll('li');
const list5 = books[5].querySelectorAll('li');
const list6 = books[2].querySelectorAll('li');
const item8 = document.createElement('li');
const book4Title = books[4].querySelector('a');

container.prepend(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[5].before(books[2]);
container.append(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book4Title.innerHTML = "Книга 3. this и <b>Прототипы</b> Объектов"

marketing.remove();

list2[6].after(list2[4], list2[5]);
list2[4].before(list2[8]);
list2[10].before(list2[2]);

list5[2].replaceWith(list5[9]);
list5[4].after(list5[2]);
list5[8].before(list5[5]);

item8.textContent = "Глава 8: За пределами ES6";
list6[8].after(item8);
