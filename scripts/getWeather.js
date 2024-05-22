// 40.19218660447296, 44.51122431620101 : of Yerevan
// https://api.openweathermap.org/data/2.5/weather?lat={40.19}&lon={44.51}&appid={4a974b3f0729cb02d19957576cc5d21c}
// activate your api key

https://openweathermap.org/img/wn/10d@2x.png

const curretTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDescription = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=40.19&lon=44.51&units=imperial&appid=4a974b3f0729cb02d19957576cc5d21c"