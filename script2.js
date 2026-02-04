const apiKey = "84d49cbb561da8ed937fe5c67327701b";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showWeather, showError);
} else {
  alert("Geolocation not supported by this browser.");
}

function showWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("location").innerText =
        data.name + ", " + data.sys.country;

      document.getElementById("temperature").innerText =
        Math.round(data.main.temp) + "°C";

      document.getElementById("condition").innerText =
        data.weather[0].description;

      document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";

      document.getElementById("wind").innerText =
        "Wind Speed: " + data.wind.speed + " km/h";
    });
}

function showError(error) {
  alert("Unable to retrieve your location");
}