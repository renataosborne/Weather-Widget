const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationnElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "34185e6ff4b348eef1ddae652cec17ce";


var cityName = prompt('city')

function getWeather(cityName){
    
    let api = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN)
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });    
}
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png/>`;
    iconElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationnElement.innerHTML = `${weather.city}, ${weather.country}`;

}
