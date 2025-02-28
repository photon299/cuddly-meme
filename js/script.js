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

document.querySelectorAll(".promo__adv img").forEach(ad => ad.remove());
document.querySelector(".promo__genre").innerText = "ДРАМА";
document.querySelector(".promo__bg").style.background = `url("../img/bg.jpg") center center/cover no-repeat`;

const movieList = document.querySelector(".promo__interactive-list"),
      input = document.querySelector(".adding__input"),
      checkbox = document.querySelector("[type='checkbox']"),
      btn = document.querySelector("button");
let deleteBtns;
const collectDeleteBtns = () => {
    deleteBtns = document.querySelectorAll(".delete");
}

const renderMovieList = () => {
    movieList.innerHTML = "";
    movieDB["movies"].sort();
    movieDB.movies.forEach((m, i) => {
        movieList.insertAdjacentHTML("beforeend", `
            <li class="promo__interactive-item">${i + 1} ${m}
                <div class="delete"></div>
            </li>
        `);
    });
    collectDeleteBtns();
};
renderMovieList();

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let movieName = (input.value.length > 21) ? input.value.slice(0, 21) + "..." : input.value;
    if (checkbox.checked && input.value) console.log("Добавляем любимый фильм");
    movieDB.movies.push(movieName);
    renderMovieList();
    input.value = "";
});
