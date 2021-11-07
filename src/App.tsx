import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
import './App.css';
import { isTypeAliasDeclaration } from 'typescript';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>('');
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=9c2b0c23ad074227a1000947210711&q=${city}&aqi=no`
    )
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
        setCity('');
        setLoading(false);
      })
      .catch(err => alert("Error: Please reload the page."))
  }
  return (
    <div className='wrapper'>
      <div className='container'>
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}
export default App;