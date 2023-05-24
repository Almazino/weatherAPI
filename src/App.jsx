import React, { useState } from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherDisplay from './WeatherDIsplay.jsx';
import "./App.css"

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLocationSubmit = async (location) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f0e5f06bbb4d4e4db4773103232405&q=${location}&days=4 `);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <WeatherForm onSubmit={handleLocationSubmit} />
      {loading ? <p>Loading...</p> : <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;