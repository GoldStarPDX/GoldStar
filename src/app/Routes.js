import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Auth from '../auth/Auth';
import Home from '../home/Home';
import Teacher from '../users/Teacher';
import Student from '../users/Student';
import Set from '../set/Set';
import Course from '../course/Course';

import PrivateRoute from './PrivateRoutes';

export const Routes = ({ user }) => {
  if (user) return (
    <Switch>
      <PrivateRoute path="/Teacher" render={({history}) => <Teacher status="Teacher" history={history} />} />
      <PrivateRoute path="/Student" render={() => <Student status="Student" />}/> 
      <PrivateRoute path="/flashcardSets/:id" render={({ match, history }) => <Set id={match.params.id}  history={history}/>} /> />
      <PrivateRoute path="/courses/:id" render={({ match, history }) => <Course id={match.params.id} history={history}/>} /> />
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