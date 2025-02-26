/* Задания на урок:

*1) Удалить все рекламные блоки со страницы (правая часть сайта)

*2) Изменить жанр фильма, поменять "комедия" на "драма"

*3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
*Реализовать только при помощи JS

*4) Список фильмов на странице сформировать на основании данных из этого JS файла.
*Отсортировать их по алфавиту 

*5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};
movieDB["movies"].sort();

document.querySelectorAll(".promo__adv img").forEach(ad => ad.remove());
document.querySelector(".promo__genre").innerText = "ДРАМА";
document.querySelector(".promo__bg").style.background = `url("../img/bg.jpg") center center/cover no-repeat`;

const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";
// for (let i = 0; i < movieDB["movies"].length; i++) {
//     movieList.insertAdjacentHTML("beforeend", `
//         <li class="promo__interactive-item">${i + 1} ${movieDB["movies"][i]}
//             <div class="delete"></div>
//         </li>
//     `);
// }
movieDB.movies.forEach((m, i) => {
    movieList.insertAdjacentHTML("beforeend", `
        <li class="promo__interactive-item">${i + 1} ${m}
            <div class="delete"></div>
        </li>
    `);
});