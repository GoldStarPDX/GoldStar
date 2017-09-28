import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';
import Welcome from '../home/Welcome';
import Intro from '../home/Intro';

function Auth({ user, signin, signup, error, location, status }) {
  const redirect = location.state ? location.state.from : `/${status}`;

  if (user) return <Redirect to={redirect} />;

  return (
    <div>
      <div id="homeWrapper">
        <Welcome />
        <div id="credentials">
          <Switch>
            <Route path={`/auth${status}/signin`} render={() => (
              <div>
                <h2>{status} Sign In</h2>
                <Credentials submit={(credentials) => signin(credentials, status)} />
                <p className="home-small">Not yet registered? <Link to={`/auth${status}/signup`}>Sign Up</Link></p>
              </div>
            )} />
            <Route path={`/auth${status}/signup`} render={() => (
              <div>
                <h2>Sign Up For A {status} Account</h2>
                <Credentials submit={(credentials) => signup(credentials, status)} allowName={true} />
                <p className="home-small">Already have an account? <Link to={`/auth${status}/signin`}>Sign In</Link></p>
              </div>
            )} />
          </Switch>
          {error && <div>{error}</div>}
        </div>
      </div>
      <div id="introWrapper">
        <Intro />
      </div>
    </div>
  );
}

export default withRouter(connect(
  ({ auth }) => ({
    error: auth.error,
    user: auth.user
  }),
  { signup, signin }
)(Auth));