
function weatherData() {
  // Get the value of the input field
  let cityName = document.getElementsByClassName("cityName")[0].value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=06bd08a1aa86f00fa1c64f54c914c56f`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Process the weather data here
      let weatherCard = document.getElementsByClassName("weatherCard")[0];
      weatherCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://img.freepik.com/free-vector/weather-emoticon-flat-icon-set_74855-6711.jpg?size=626&ext=jpg&ga=GA1.1.1270437882.1699697691&semt=sph" class="card-img-top" alt="weather image">
        <div class="card-body">
          <h5 class="card-title">WEATHER DATA</h5>
          <p class="card-text">TEMPERATURE: ${data.main.temp} </p>
          <p class="card-text">WINDSPEED: ${data.wind.speed} </p>
          <p class="card-text">SIGHT: ${data.weather[0].description} </p>
        </div>
      </div>`;
    })
    .catch(error => {
      console.error('error:', error);
    });
}


// function weatherData(){

// let city_name = document.getElementsByClassName("city_name").value

// const res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=06bd08a1aa86f00fa1c64f54c914c56f`);

// res.then((res)=>{console.log(res.json())}).then((result)=>{console.log(result)})
// }

