'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };
    
    const adverts = document.querySelectorAll(".promo__adv img"),
          movieList = document.querySelector(".promo__interactive-list"),
          input = document.querySelector(".adding__input"),
          checkbox = document.querySelector("[type='checkbox']"),
          addMovieBtn = document.querySelector("button");
    
    const deleteAdv = (adv) => adv.forEach(ad => ad.remove());

    const sortArray = (arr) => arr.sort();

    const makeChanges = () => {
        document.querySelector(".promo__genre").innerText = "ДРАМА";
        document.querySelector(".promo__bg").style.background = `url("../img/bg.jpg") center center/cover no-repeat`;
    }

    const modifyDeleteBtns = (render) => {
        document.querySelectorAll(".delete").forEach((button, i) => {
            button.addEventListener("click", () => {
                movieDB.movies.splice(i, 1);
                render();
            });
        });
    }

    const renderMovieList = () => {
        movieList.innerHTML = "";
        sortArray(movieDB.movies);
        movieDB.movies.forEach((movieName, i) => {
            movieList.insertAdjacentHTML("beforeend", `
                <li class="promo__interactive-item">${i + 1} ${movieName}
                    <div class="delete"></div>
                </li>
            `);
        });
        modifyDeleteBtns(renderMovieList);
    };
    
    addMovieBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let movieName = (input.value.length > 21) ? `${input.value.slice(0, 21)}...` : input.value;
        if (input.value) {
            if (checkbox.checked) console.log("Добавляем любимый фильм");
            movieDB.movies.push(movieName);
            renderMovieList();
            input.value = "";
        }
    });

    deleteAdv(adverts);
    makeChanges();
    renderMovieList();
});