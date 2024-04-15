//
//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./API.css"
// const Weather = ({ city }) => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [previousWeatherData, setPreviousWeatherData] = useState(null); // State to store previous weather data
//     const [error, setError] = useState(null); // State to store error message
//     const API_KEY = 'be293fffdf7bb779bcc739c141d58503';
//     const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
//
//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(API_URL);
//                 setWeatherData(response.data);
//                 setError(null); // Reset error state if successful response
//             } catch (error) {
//                 if (error.response) {
//                     // The request was made and the server responded with a status code
//                     // that falls out of the range of 2xx
//                     setError(`${error.response.status}: ${error.response.data.message}`);
//                 } else if (error.request) {
//                     // The request was made but no response was received
//                     setError('No response received from server');
//                 } else {
//                     // Something happened in setting up the request that triggered an Error
//                     setError('Error in request setup: ' + error.message);
//                 }
//             }
//         };
//
//         if (city) { // Only fetch weather if city is provided
//             fetchWeather();
//         }
//     }, [API_URL, city]); // Include city in the dependencies array
//
//     // Update previous weather data when new weather data is fetched
//     useEffect(() => {
//         if (weatherData) {
//             setPreviousWeatherData(weatherData);
//         }
//     }, [weatherData]);
//
//     return (
//         <div>
//             {error && <h1>Error: {error}</h1>}
//             {/* Render previous weather data if available */}
//             {previousWeatherData && (
//                 <div>
//                     <h2>Weather Information for {city}</h2>
//                     <p>Temperature: {previousWeatherData.main.temp}°C</p>
//                     <p>Description: {previousWeatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Weather;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./API.css"; // Import CSS file for styling

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null); // State to store error message
    const API_KEY = 'be293fffdf7bb779bcc739c141d58503';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(API_URL);
                setWeatherData(response.data);
                setError(null); // Reset error state if successful response
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setError(`${error.response.status}: ${error.response.data.message}`);
                } else if (error.request) {
                    // The request was made but no response was received
                    setError('No response received from server');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setError('Error in request setup: ' + error.message);
                }
            }
        };

        if (city) { // Only fetch weather if city is provided
            fetchWeather();
        }
    }, [API_URL, city]); // Include city in the dependencies array

    return (
        <div className="weather-container">
            {error && <h1 className="error-message">{error}</h1>}
            {/* Render weather data if available */}
            {weatherData && (
                <div className="weather-info">
                    <h2>Weather Information for {weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
