import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';

function Auth({ user, signin, signup, error, location, role }) {
    const redirect = location.state ? location.state.from : '/';

    if(user) return <Redirect to={redirect}/>;

    return (
        <div>
            <Switch>
                <Route path="`/auth${role}/signin`" component={() => (
                    <div>
                        <p>Not yet registered?<Link to="`/auth${role}/signup`">Sign Up</Link></p>
                        <Credentials submit={signin}/>
                    </div>
                )}/>
                <Route path="`/auth${role}/signup`" render={() =>(
                    <div>
                        <p>Already have an account?<Link to="`/auth${role}/signin`">Sign In</Link></p>
                        <Credentials submit={signup} allowName={true}/>
                    </div>
                )}/>
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
    dispatch => ({
        signup(user){ dispatch(signup(user)); },
        signin(credentials){ dispatch(signin(credentials)); }
    })
)(Auth));