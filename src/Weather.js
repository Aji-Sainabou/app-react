import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {}

  let apiKey = "a89397bbee39ef0cd278072307619f0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="container">
      <div className="card1">
        <form className="searchBar" id="searchForm">
          <input
            type="text"
            placeholder="Enter city"
            className="city-input"
            id="search-city"
            autofocus="on"
            autocomplete="off"
          />
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm"
            id="search-button"
          />
        </form>
      </div>

      <div className="card2" Name="temperature">
        <div className="" Name="weatherToday">
          <h2 id="city" className="" Name="city">
            London
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
            ☀️ 20
          </h1>

          <h3 id="description">#</h3>
          <div className="" Name="row Others" id="others">
            <div className="" Name="col-5 humidity">
              Humidity
              <br />
              <strong>
                <span className="" Name="humidity-value" id="humidity">
                  48
                </span>{" "}
                %
              </strong>
            </div>
            <div className="" Name="col-5 wind">
              Wind
              <br />
              <strong>
                <span className="" Name="wind-value" id="wind">
                  3
                </span>
                <span className="" Name="windUnits" id="windUnits">
                  m/s
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <small className="card3" Name="footer">
        <a
          href="https://github.com/Aji-Sainabou/vanilla"
          target="_blank"
          rel="noreferrer"
        >
          Open source coded
        </a>
        by Aji sainabou Njie
      </small>
    </div>
  );
}
