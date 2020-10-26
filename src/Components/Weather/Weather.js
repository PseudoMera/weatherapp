import React, { useState, useEffect } from "react";
import "./Weather.css";


function Weather(props) {
  const [weatherStatus, setWeatherStatus] = useState(null);
  useEffect(() => {
    setWeatherStatus(props.apiResult);
    console.log(weatherStatus);
  }, [props.apiResult, weatherStatus]);
  
  //Giving format to the data given by the API
  
  const statusTemp = weatherStatus?.main.temp;
  const temperature = statusTemp?.toString()[0] + statusTemp?.toString()[1];
  const place = weatherStatus?.name;
  const windSpeed = weatherStatus?.wind.speed;

  const sunrise = weatherStatus?.sys.sunrise * 1000;
  const sunriseHour = new Date(sunrise);

  const sunset = weatherStatus?.sys.sunset * 1000;
  const sunsetHour = new Date(sunset);


  const date = new Date();



  const currentDate = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const sunsetTime = sunsetHour.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  //change
  return (
    <div>
    <img className= "background-img" src={require(`../../Pictures&Videos/${props.bgPhoto}`)} alt="no"/>
      <div className="weather-content-box">
        <div className={ currentDate >= sunsetTime ? "weather-information-dark": "weather-information"}>
          <h1 className="content-box-clouds">{temperature}°C</h1>
          <div className="border-nmb1-weather"></div>
          <div className="location">{place}</div>
          <div className="wind-speed">
            {windSpeed} m/s
            <img
              className="wind-icon"
              src={require("../../Pictures&Videos/wind-speed-icon.png")}
              alt=""
            />
            <div className="sunrise-time">
              {sunriseHour.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
            <img
              className={ currentDate >= sunsetTime ? "sunrise-icon-dark": "sunrise-icon"}
              src={require("../../Pictures&Videos/sunrise-icon.png")}
              alt=""
            />
            <div className="sunset-time">
              {sunsetHour.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
            <img
              className={ currentDate >= sunsetTime ? "sunset-icon-dark": "sunset-icon"}
              src={require("../../Pictures&Videos/sunset-icon.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
