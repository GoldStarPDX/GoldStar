import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Auth from '../auth/Auth';
import Home from '../home/Home';
import Teacher from '../users/Teacher';
// import Student from '../users/Student';

import PrivateRoute from './PrivateRoutes';

export const Routes = ({ user }) => {
  if (user) return (
    <Switch>
      <PrivateRoute path="/Teacher" render={({history}) => <Teacher status="Teacher" history={history} />} />
      {/* <PrivateRoute path="/Student" render={() => <Student status="Student" />}/> */}
      {/* <PrivateRoute path="/Teacher/search" render={() => <Search />} */}
      <Redirect to={`/${user.status}`} />
    </Switch>
  );
  else return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />;
      <Route path="/authTeacher" render={() => <Auth status="Teacher" />} />;
      <Route path="/authStudent" render={() => <Auth status="Student" />} />;
      <Redirect to="/" />
    </Switch>
  );
};

export default withRouter(connect(
  state => ({ user: state.auth.user }),
  null
)(Routes));