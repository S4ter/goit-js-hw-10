import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;
const inputBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputBox.addEventListener('input', () => {
  fetchCountries(inputBox.value);
  console.log(inputBox.value);
});
