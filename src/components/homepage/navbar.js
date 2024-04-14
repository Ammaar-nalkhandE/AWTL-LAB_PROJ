
import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Weather from "../API";

function Navbar(props) {
    const [city, setCity] = useState('');

    // Function to handle input change
    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    AccuWeather
                </a>
                <label>
                    <input
                        name="cityname"
                        type="text"
                        id="cityInput"
                        value={city}
                        onChange={handleInputChange} // Add onChange event handler
                        placeholder="City Name"
                    />
                </label>
                {/* Pass city name to Weather component */}

            </div>
        </nav>
    <Weather city={city} />
    </>
    );
}

export default Navbar;


