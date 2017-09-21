import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Intro from './Intro';

const Welcome = () => (
  <div id="welcome">
    <div id="logo"><i className="fa fa-star fa-5x"></i></div>
    <h1>GoldStar</h1>
    <p>An Educational Flash Card App</p>
  </div>
);

const GetStarted = () => (
  <div id="getStarted">
    <Link to="/authTeacher/signin">
      <div className="getStartedBtn">
        <span className="getStarted-small">get started as a</span>
        <span className="getStarted-large">Teacher</span>
      </div>
    </Link>
    <Link to="/authStudent/signin">
      <div className="getStartedBtn">
        <span className="getStarted-small">get started as a</span>
        <span className="getStarted-large">Student</span>
      </div>
    </Link>
  </div>
);

function Home() {
  return(
    <div>
      <div id="homeWrapper">
        <Welcome />
        <GetStarted />
      </div>
      <div id="introWrapper">
        <Intro />
      </div>
    </div>
  );
}

export default connect(
  state => ({ user: state.auth.user })
)(Home);