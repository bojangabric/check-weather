import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SearchBar />
          <WeatherInfo />
        </div>
      </Provider>
    );
  }
}

export default App;
