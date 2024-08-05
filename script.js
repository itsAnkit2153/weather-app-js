const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
const locationInput = document.getElementById('locationInput');
const locationDisplay = document.getElementById('location');
const temperatureDisplay = document.getElementById('temperature');
const descriptionDisplay = document.getElementById('description');
const humidityDisplay = document.getElementById('humidity');
const windDisplay = document.getElementById('wind');

fetchWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value;
    fetchWeather(location);
});

async function fetchWeather(location) {
    try {
        const response = await fetch(`https://www.accuweather.com/en/in/national/satellite`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    locationDisplay.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperatureDisplay.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionDisplay.textContent = `Weather: ${data.weather[0].description}`;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    windDisplay.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
