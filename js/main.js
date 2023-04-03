// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all

//!================================================
// let api = fetch("https://restcountries.com/v3.1/all");
// api
//   .then((res) => {
//     return res.json();
//   })
//   .then((info) => {
//     info.forEach((elem) => {
//       console.log(elem.name.common);
//     });
//   });

// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.

// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания

let ul = document.querySelector("ul");
let api2 = fetch("https://rickandmortyapi.com/api/character");
api2
  .then((r) => {
    return r.json();
  })
  .then((i) => {
    i.results.forEach((elem) => {
      ul.innerHTML += `<li>${elem.name}<img src="${elem.image}"></li>`;
    });
  });
