"use strict";

//creo el array donde voy a guardar las búsquedas en mi api
let savedData = [];
let favData = [];
let imageDefault = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";

//Voy a buscar el ul del listado de pelis
const movieList = document.querySelector(".movie__list");
const favList = document.querySelector(".aside__list");
//voy a por el input
const input = document.querySelector(".container__form__input");
//voy a por el img
const img = document.querySelector(".movie__list__item__img");

getFavsFromLocalStorage();

//fetch

function getDataFromServer() {
  fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      paintAllCards(data);
      savedData = data;
    });
}
