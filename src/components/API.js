import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = 'be293fffdf7bb779bcc739c141d58503';
    // Use the city prop in the API URL
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(API_URL);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, [API_URL, city]); // Include city in the dependencies array

    return (
        <div>
            <h1>Weather Information</h1>
            {weatherData && (
                <div>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    {/* Add more weather data as needed */}
                </div>
            )}
        </div>
    );
};

export default Weather;

