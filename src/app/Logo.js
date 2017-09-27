import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    const { status } = this.props;
    return (
      <div id="main-logo">
        <Link to={`/${status}`}>
          <div id="logo" className="text-stroke"><i className="fa fa-star fa-2x"></i></div>
        </Link>
        <h1>GoldStar</h1>
      </div>
    );
  }
}