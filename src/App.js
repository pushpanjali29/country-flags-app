import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch(' https://xcountries-backend.azurewebsites.net/all');
      console.log('API request made');  // Log when the request is made
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchCountries();
}, []);
  return (
    <div className="App">
      <h1>Country Flags</h1>
      {error && <p>Error fetching countries: {error}</p>}
      <div className="country-list">
        {countries.map((country) => (
          <div key={country.alpha3Code} className="country">
           {countries.map((country) => (
  <div key={country.alpha3Code} className="country">
    <img 
      src={country.flag} 
      alt={`Flag of ${country.name}`}  // Good alt attribute describing the flag
      className="flag" 
    />
    <p>{country.name}</p>
  </div>
))}
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
