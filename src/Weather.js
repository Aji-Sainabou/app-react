import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("city ");
  let [weather, setWeather] = useState("weather");

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a89397bbee39ef0cd278072307619f0b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <div className="card1">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="search" />
        </form>
      </div>

      <div className="card2" Name="temperature">
        <div className="" Name="weatherToday">
          <h2 id="city" className="" Name="city">
            {(city = "Banjul")}
          </h2>

          <h5>
            last updated at <span id="date">Tuesday 10:00</span>
          </h5>

          <ul id="units">
            <strong>
              <button href="#" id="celsius-temp" className="unit" Name="active">
                {" "}
                ºC{" "}
              </button>
              |
              <button href="#" id="fahr-temp" className="unit" Name="">
                {" "}
                ºF{" "}
              </button>
            </strong>
          </ul>

          <h1 className="" Name="currentTemp" id="temp">
            <img src={weather.icon} alt={weather.description} />
            {Math.round(weather.temperature)}°C
          </h1>

          <h3 id="description"> {weather.description}</h3>
          <div className="" Name="row Others" id="others">
            <div className="" Name="col-5 humidity">
              Humidity
              <br />
              <strong>
                <span className="" Name="humidity-value" id="humidity">
                  {weather.humidity}
                </span>{" "}
                %
              </strong>
            </div>
            <div className="" Name="col-5 wind">
              Wind
              <br />
              <strong>
                <span className="" Name="wind-value" id="wind">
                  {weather.wind}
                </span>
                <span className="" Name="windUnits" id="windUnits">
                  m/s
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
