import React, { Component } from 'react';
import './InfoRow.css';
import { CSSTransition } from "react-transition-group";

class InfoRow extends Component {
  render() {
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={600}
        classNames='fade'
      >
        <div>
          <span className='info-name'>{this.props.name}:</span>
          <span className='info-value'>{this.props.value}{this.props.symbol}</span>
        </div>
      </CSSTransition>
    );
  }
}

export default InfoRow;
