import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;
const inputBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function inputHandler(e) {
  e.preventDefault();
  const userInput = inputBox.value.trim();
  fetchCountries(userInput).then(data => {
    if (data.length === 1) {
      const langAll = Object.values(data[0].languages).join(', ');
      const createListForOneCountry = `<h3>${data[0].name.official}</h3>
      <img src='${data[0].flags.svg}'>
      <p>${data[0].capital}</p>
      <p>${data[0].population}</p>
      <p>${langAll}</p>`;
      countryInfo.innerHTML = createListForOneCountry;
      countryList.innerHTML = '';
      console.log(data);
    }
    if (data.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    }
    if (data.length <= 10 && data.length > 1) {
      for (let i = 0; i < data.length; i += 1) {
        const createList = document.createElement('li');
        createList.textContent = data[i].name.official;
        createList.classList.add('list-element');

        const createFlag = document.createElement('img');
        createFlag.src = data[i].flags.svg;
        createFlag.classList.add('flag-image');
        createList.appendChild(createFlag);
        countryList.append(createList);
      }
    }
  });
}

inputBox.addEventListener('input', inputHandler);
