import { useState } from 'react';
import React from 'react';
import './App.css';

const mockWeatherData = {
  'New York': {
    temperature: '22°C',
    humidity: '56%',
    windSpeed: '15 km/h'
  },
  'Los Angeles': {
    temperature: '27°C',
    humidity: '45%',
    windSpeed: '10 km/h',
  },
  'London': {
    temperature: '15°C',
    humidity: '70%',
    windSpeed: '20 km/h'
  },
};

function HistoryButton({ city, onClick }) {
  return (
    <button onClick={() => onClick(city)} id="cityButton">
      {city}
    </button>
  );
}

function WeatherDashboard() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState({ temperature: '', humidity: '', windSpeed: '' });
  const [history, setHistory] = useState([]);

  const search = () => {
    const cityData = mockWeatherData[inputValue];
    if (cityData) {
      setResult(cityData);
      if (!history.includes(inputValue)) {
        setHistory([...history, inputValue]);
      }
    } else {
      setResult({
        temperature: 'not found',
        humidity: 'not found',
        windSpeed: 'not found'
      });
      console.log('City not found');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleHistoryClick = (city) => {
    const cityData = mockWeatherData[city];
    if (cityData) {
      setResult(cityData);
    } else {
      setResult({
        temperature: 'not found',
        humidity: 'not found',
        windSpeed: 'not found'
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for a city..."
      />
      <button id="searchButton" onClick={search}>Search</button>
      <div id="previousSearches">
        {history.map((city, index) => (
          <HistoryButton key={index} city={city} onClick={handleHistoryClick} />
        ))}
      </div>
      <div id="weatherData">
        {result.temperature && <div>Temperature: {result.temperature}</div>}
        {result.humidity && <div>Humidity: {result.humidity}</div>}
        {result.windSpeed && <div>Wind Speed: {result.windSpeed}</div>}
      </div>
    </div>
  );
}

export default WeatherDashboard;
