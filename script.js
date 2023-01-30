"use strict";

let search = document.getElementById("search");
let countryInp = document.getElementById("country-inp");

search.addEventListener("click", (e) => {
  e.preventDefault();
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      const result = document.getElementById("result");
      result.innerHTML = `<div class='text-center'><img src='${
        data[0].flags.png
      }' class='pt-3' width='50%'/></div>
        <p class='pt-3'><strong>Country:</strong> ${data[0].name.common}</p>
        <p><strong>Continent:</strong> ${data[0].continents[0]}</p>
        <p><strong>Capital:</strong> ${data[0].capital[0]}</p>
        <p><strong>Languages:</strong> ${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(", ")}</p>
        <p><strong>Currency:</strong> ${
          data[0].currencies[Object.keys(data[0].currencies)].name
        }</p>
        <p><strong>Area:</strong> ${data[0].area} km²</p>
        <p><strong>Population:</strong> ${data[0].population}</p>
        <p><strong>Map:</strong> <a href='${
          data[0].maps.googleMaps
        }'>Google Map</a></p>
        `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty!</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name!</h3>`;
      }
    });
});
