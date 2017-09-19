import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';

function Auth({ user, signin, signup, error, location, status }) {
  const redirect = location.state ? location.state.from : `/${status}`;

  if (user) return <Redirect to={redirect} />;

  return (
    <div>
      <Switch>
        <Route path={`/auth${status}/signin`} component={() => (
          <div>
            <p>Not yet registered?<Link to={`/auth${status}/signup`}>Sign Up</Link></p>
            <Credentials submit={(credentials) => signin(credentials, status)} />
          </div>
        )} />
        <Route path={`/auth${status}/signup`} render={() => (
          <div>
            <p>Already have an account?<Link to={`/auth${status}/signin`}>Sign In</Link></p>
            <Credentials submit={(credentials) => signup(credentials, status)} allowName={true} />
          </div>
        )} />
      </Switch>
      {error && <div>{error}</div>}
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