import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityInfo } from '../actions/cityActions';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <p>Enter city name</p>
        <div>
          <input type='text' className='city' placeholder='London' onChange={(e) => this.props.getCityInfo(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default connect(null, { getCityInfo })(SearchBar);
