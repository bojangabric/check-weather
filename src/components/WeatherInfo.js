import React, { Component } from 'react';
import './WeatherInfo.css';
import { connect } from 'react-redux';

class WeatherInfo extends Component {
  render() {

    if (!this.props.city || Object.keys(this.props.city).length === 0 || !this.props.city.main) {
      return (
        <div className='no-info-wrapper'>
          <div>There is no information for that city.</div>
        </div>
      );
    }

    return (
      <div className='info-wrapper'>
        <div><span className='info-name'>Temp:</span><span className='info-value'>{this.props.city.main.temp}&#8451;</span></div>
        <div><span className='info-name'>Temp-max:</span><span className='info-value'>{this.props.city.main.temp_max}&#8451;</span></div>
        <div><span className='info-name'>Temp-min:</span><span className='info-value'>{this.props.city.main.temp_min}&#8451;</span></div>
        <div><span className='info-name'>Pressure:</span><span className='info-value'>{this.props.city.main.pressure}</span></div>
        <div><span className='info-name'>Humidity:</span><span className='info-value'>{this.props.city.main.humidity}</span></div>
        <div><span className='info-name'>Weather:</span><span className='info-value'>{this.props.city.weather[0].description}</span></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.cityInfo.city
});

export default connect(mapStateToProps, {})(WeatherInfo);
