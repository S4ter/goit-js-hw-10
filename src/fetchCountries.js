export { fetchCountries };

function fetchCountries(name) {
  return new Promise((resolve, reject) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          reject(`Error ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        resolve(data);
      });
  });
}
