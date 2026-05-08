async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '8b682624fbbb45ec1a849708b8ee57f3';

  if(city === '') {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === '404') {
      document.getElementById('weatherResult').innerHTML = 'City not found';
      return;
    }

    document.getElementById('weatherResult').innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Condition: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;

  } catch(error) {
    document.getElementById('weatherResult').innerHTML = 'Error fetching weather data';
  }
}
