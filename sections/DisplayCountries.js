function displayCountries() {
  fetch("https://restcountries.com/v3.1/region/europe")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const container = document.querySelector(".container");

      data.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital;
        const population = country.population;
        const currency = getCurrency(country.currencies);
        const flag = getFlagIcon(country.altSpellings[0]);

        container.innerHTML += `
        <div class="container-country">
        <div class="country">
        <h2>Country name:${name}</h2>    
        <img src="${flag}" alt="icon"/> 
        <h3>Capital:${capital}</h3> 
        <p>Population:${population}</p>
        <p>Currency:${currency}</p> 
        </div>
        </div>
      `;
      });
    });
}
