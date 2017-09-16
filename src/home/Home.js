import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GetStarted = () => (
  <div>
    <p>Click to get started as a</p>
    <p>
      <Link to="/authTeacher/signin">Teacher</Link>
      {' or '} 
      <Link to="/authStudent/signin">Student</Link>
    </p>
  </div>
);

function Home() {
  return(
    <div>
      <GetStarted />
    </div>
  );
}

export default connect(
  state => ({ user: state.auth.user })
)(Home);