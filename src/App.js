import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;
