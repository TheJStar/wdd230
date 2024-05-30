const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&units=imperial&lon=6.64&appid=4a974b3f0729cb02d19957576cc5d21c";

async function getWeatherData(url) {
    try {
        const respons = await fetch(url);
        if (respons.ok) {

        } else {
            throw Error(await respons.text());
        }
        
        const data = await respons.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.log(error);
    }    
}

function displayResults(data) {
    currentTemp.textContent = data.main.temp + currentTemp.textContent;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = "Weather event";
    captionDesc.textContent = data.weather[0].description;
}

getWeatherData(url);