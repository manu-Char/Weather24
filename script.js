async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "748699d13e9e7e19f331eef2a1d7fbea"; // Replace this
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    const result = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
      `;
    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML = "<p>❌City not found</p>";
  }
  

}
