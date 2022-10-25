let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
let cityEnter = document.querySelector("#city-enter");
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

function display(temperature) {
  let changeCity = document.querySelector("#name");
  changeCity.innerHTML = `${temperature.data.name}`;
  let temp = temperature.data.main.temp;
  temp = Math.round(temp);
  let showTemp = document.querySelector("#temperature");
  showTemp.innerHTML = `${temp}°C`;
}

function cityChange(event) {
  event.preventDefault();
  axios
    .get(`${apiUrl}q=${cityEnter.value}&appid=${apiKey}&units=metric`)
    .then(display);
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("click", cityChange);

function position(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${url}`).then(display);
}

function change(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(position);
}

let currentCity = document.querySelector("#current-location");
currentCity.addEventListener("click", change);

let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];
let setDate = document.querySelector("#date");
let hours = date.getHours();
let minutes = date.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
setDate.innerHTML = `${day} ${hours}:${minutes}`;

let changeToF = document.querySelector("#conv-to-f");
changeToF.addEventListener("click", function convToFar(event) {
  event.preventDefault();
  let Temp = document.getElementById("temperature");
  let tem = parseInt(Temp.innerText, 10);
  let res = Math.round(tem * 1.8 + 32);
  Temp.innerHTML = `${res}°F`;
});
let changeToC = document.querySelector("#conv-to-c");
changeToC.addEventListener("click", function convToCel(event) {
  event.preventDefault();
  let Temp = document.getElementById("temperature");
  let tem = parseInt(Temp.innerText, 10);
  let res = Math.round((5 / 9) * (tem - 32));
  Temp.innerHTML = `${res}°C`;
});
