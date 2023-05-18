export { fetchCountries };

function fetchCountries(name) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
      {
        method: 'GET',
      }
    )
      .then(response => {
        if (!response.ok) {
          reject(`Error ${response.status}`);
        } else {
          console.log(response.json());
          return response.json();
        }
      })
      .then(data => {
        resolve(data);
      });
  });
}
