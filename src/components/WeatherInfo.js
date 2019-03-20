import React, { Component } from 'react';
import InfoRow from './InfoRow';
import './WeatherInfo.css';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";

class WeatherInfo extends Component {
  render() {
    if (!this.props.city || Object.keys(this.props.city).length === 0 || !this.props.city.main) {
      return (
        <CSSTransition
          in={true}
          appear={true}
          timeout={600}
          classNames='fade'
        >
          <div className='no-info-wrapper'>
            <div>There is no information for that city.</div>
          </div>
        </CSSTransition>
      );
    }

    return (
      <div className='info-wrapper'>
        <InfoRow name='Temp' value={this.props.city.main.temp} symbol='&#8451;' />
        <InfoRow name='Temp-max' value={this.props.city.main.temp_max} symbol='&#8451;' />
        <InfoRow name='Temp-min' value={this.props.city.main.temp_min} symbol='&#8451;' />
        <InfoRow name='Pressure' value={this.props.city.main.pressure} symbol=' hPa' />
        <InfoRow name='Humidity' value={this.props.city.main.humidity} symbol='%' />
        <InfoRow name='Wind' value={this.props.city.wind.speed} symbol='m/s' />
        <InfoRow name='Weather' value={this.props.city.weather[0].description} symbol='' />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.cityInfo.city
});

export default connect(mapStateToProps, {})(WeatherInfo);
