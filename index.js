
const searchbtnEl = document.getElementById("search-btn");
const inputEl = document.getElementById("input");


const cityEl = document.getElementById("city");
const temEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const weatherIconEl = document.getElementById("weather-icon");
const weatherEl = document.getElementById("weather");
const errorEl = document.getElementById("error");
const descriptionEl = document.getElementById("description");




const apiKey = "YOUR_API_KEY";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;




async function checkWeather(city) {
    const response = await fetch( apiUrl + city + `&appid=${apiKey}` );
    if(response.status === 404) {
        errorEl.style.display = "block";
        weatherEl.style.display = "none";
    } else {
    let data = await response.json();

    // if(data.weather[0].main === "Clear") {
    //     weatherIconEl.src = "images/007-sun.png";
    // } else if(data.weather[0].main === "cloudy"){
    //     weatherIconEl.src = "images/002-cloudy.png"
    // }  else if(data.weather[0].main === "Rain"){
    //     weatherIconEl.src = "images/006-rainy-day.png"
    // } else if(data.weather[0].main === "Drizzle"){
    //     weatherIconEl.src = "images/005-raining.png"
    // } 
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIconEl.setAttribute('src', iconURL);
    
    cityEl.innerHTML = data.name;
    temEl.innerHTML = `${Math.round(data.main.temp)}°C`;
    humidityEl.innerHTML = `${Math.round(data.main.humidity)} %`;
    windEl.innerHTML = `${Math.round(data.wind.speed)} km/hr`;
    descriptionEl.innerHTML = data.weather[0].description;

    weatherEl.style.display = "block";
    errorEl.style.display = "none";
    }

    
}


searchbtnEl.addEventListener("click", function() {
    checkWeather(inputEl.value);
})