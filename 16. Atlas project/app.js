const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

let debounceTimeout;

searchInput.addEventListener('input', function () {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      fetchCountryData(searchTerm);
    } else {
      resultsContainer.innerHTML = '';
    }
  }, 300);
});

async function fetchCountryData(countryName) {
  try {
    const response = await fetch(`https://restcountries.com/v3/name/${countryName}`);
    const data = await response.json();
    displayResults(data);
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayResults(countries) {
  resultsContainer.innerHTML = '';

  countries.forEach(country => {
    const { name, area, continents, flags, currencies, languages } = country;
    console.log(flags[0])

    const card = document.createElement('div');
    card.classList.add('card');

    const flagImg = document.createElement('img');
    flagImg.classList.add('flag');
    flagImg.src = flags[0];
    flagImg.alt = `${name.common} Flag`;

    const details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = `
      <h2>${name.common}</h2>
      <p>Area: ${area} km²</p>
      <p>Continent: ${continents}</p>
      <p>Currencies: ${Object.keys(currencies).join(', ')}</p>
      <p>Languages: ${Object.keys(languages).join(', ')}</p>
    `;

    card.appendChild(flagImg);
    card.appendChild(details);

    resultsContainer.appendChild(card);
  });
}


