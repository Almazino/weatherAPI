import React from 'react';
import "./WeatherDisplay.css"

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return ;
  }

  const { location, current, forecast } = weatherData;
  console.log(weatherData)
  return (
    <div className="weather-display">
      <h2>{location.name}, {location.region}, {location.country}</h2>
      <div className="forecast">    
          <div className='card'>
            <p className='topick'>{forecast.forecastday[0].date}</p>
            <img src={current.condition.icon} alt={current.condition.text} />
            <p>{forecast.forecastday[0].day.maxtemp_c}°C</p>
          </div>
          <div className='card'>
            <p className='topick'>{forecast.forecastday[1].date}</p>
            <img src={current.condition.icon} alt={current.condition.text} />
            <p>{forecast.forecastday[1].day.maxtemp_c}°C</p>
          </div>
          <div className='card'>
            <p className='topick'>{forecast.forecastday[2].date}</p>
            <img src={current.condition.icon} alt={current.condition.text} />
            <p>{forecast.forecastday[2].day.maxtemp_c}°C</p>
          </div>
          <div className='card'>
            <p className='topick'>{forecast.forecastday[3].date}</p>
            <img src={current.condition.icon} alt={current.condition.text} />
            <p>{forecast.forecastday[3].day.maxtemp_c}°C</p>
          </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;