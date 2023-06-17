const key = "fd8b01891b6e25bc59db1374dbc6d5cd";

const result = document.getElementById("result");
const button = document.getElementById("searchBtn");
const city = document.getElementById("city");

const getWeatherData = () => {
  if (!city.value.length) {
    result.innerHTML = `<h3 class='msg'>Please Enter City Name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // console.log(data.weather[0].main);
        // console.log(data.weather[0].description);
        // console.log(data.main.temp_max);
        // console.log(data.main.temp_min);
        // console.log(data.weather[0].icon)
        result.innerHTML = `
        <h2>${data.name}</h2>
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class="desc">${data.weather[0].description}</h4>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.name}" />
          <h1>${data.main.temp}</h1>
        <div class="temp-container">
          <div>
            <div class="title">min</div>
            <div class="temp">${data.main.temp_min}</div>
          </div>
          <div>
            <div class="title">max</div>
            <div class="temp">${data.main.temp_max}</div>
          </div>
        <div\>`;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">city name not found...!!!<h3\>`;
      });
  }
  city.value='';
};

button.addEventListener("click", getWeatherData);
window.addEventListener('DOMContentLoaded',getWeatherData);
