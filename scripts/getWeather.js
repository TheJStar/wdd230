https://openweathermap.org/img/wn/10d@2x.png

const curretTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDescription = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=40.19&lon=44.51&units=imperial&appid=4a974b3f0729cb02d19957576cc5d21c"