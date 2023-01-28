'use strict';

let search = document.getElementById('search');
let countryInp = document.getElementById('country-inp');
const result = document.getElementById('result');

search.addEventListener('click', (e) => {
    e.preventDefault();
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((data) => {
        
        result.innerHTML = `<div class='text-center'><img src='${data[0].flags.png}' class='pt-3' width='50%'/></div>
        <p class='pt-3'>Country: ${data[0].name.common}</p>
        <p>Continent: ${data[0].continents[0]}</p>
        <p>Capital: ${data[0].capital[0]}</p>
        <p>Languages: ${Object.values(data[0].languages).toString().split(',').join(', ')}</p>
        <p>Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
        <p>Area: ${data[0].area} km²</p>
        <p>Population: ${data[0].population}</p>
        <p>Map: <a href='${data[0].maps.googleMaps}'>${data[0].maps.googleMaps}</a></p>
        `
    }).catch(() => {
        if (countryName.length == 0) {
            result.innerHTML = `<h3>The input field cannot be empty!</h3>`;
        }
        else {
            result.innerHTML = `<h3>Please enter a valid country name!</h3>`;
        }
    })
})