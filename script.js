async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '19bd18d599f0ddef05dcdc03145d8edb'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=bg`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById('weatherInfo').innerHTML = `<p>Градът не беше намерен. Моля, опитай отново.</p>`;
        } else {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            document.getElementById('weatherInfo').innerHTML = `
                <h2>Времето в ${city}</h2>
                <img src="${icon}" alt="Weather icon">
                <p>Температура: ${temperature}°C</p>
                <p>Описание: ${description}</p>
            `;
        }
    } catch (error) {
        console.error('Грешка при извличането на данни:', error);
        document.getElementById('weatherInfo').innerHTML = `<p>Възникна грешка при зареждането на данни.</p>`;
    }
}
