import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;
console.log(fetchCountries('poland'));
const inputBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
let test = [];
let inputValue = () => {
  test.push(inputBox.value);
  console.log(test);
};
inputBox.addEventListener('input', inputValue);
console.log(inputValue);
