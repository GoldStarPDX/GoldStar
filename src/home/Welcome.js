import React from 'react';
import {Link} from 'react-router-dom';

export default function Welcome() {
  return (
    <div id="welcome">
      <Link to='/'>
        <div id="logo"><i className="fa fa-star fa-5x"></i></div>
        <h1>GoldStar</h1>
        <p>An Educational Flash Card App</p>
      </Link>
    </div>
  );
}