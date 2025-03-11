const apiKey = "de525605f2da4bd8b65183349251103";  // Tumhari WeatherAPI.com ki API key

function getWeather() {
    const city = document.getElementById("city-input").value || "Karachi";  // Default city
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.location) {  // Agar city valid ho
                document.getElementById("location").textContent = data.location.name + ", " + data.location.country;
                document.getElementById("temperature").textContent = data.current.temp_c + "°C";
                document.getElementById("description").textContent = data.current.condition.text;
                document.getElementById("wind").textContent = data.current.wind_kph + " km/h";
                document.getElementById("humidity").textContent = data.current.humidity + "%";

                // Weather icon update karna
                document.getElementById("weather-icon").src = `https:${data.current.condition.icon}`;
            } else {
                document.getElementById("location").textContent = "City not found!";
            }
        })
        .catch(error => {
            console.log("Error fetching weather data:", error);
        });
}

// Default city ke liye function call karega
getWeather();