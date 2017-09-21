import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import Intro from './Intro';

const GetStarted = () => (
  <div id="getStarted">
    <p className="getStarted-small">Click to get started as a</p>
    <Link to="/authTeacher/signin">
      <div className="getStartedBtn">
        <span className="getStarted-large">Teacher</span>
      </div>
    </Link>
    <Link to="/authStudent/signin">
      <div className="getStartedBtn">
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