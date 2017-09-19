import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../auth/Auth';
import Home from '../home/Home';
import Teacher from '../users/Teacher';
// import Student from '../users/Student';

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />;
    <Route path="/authTeacher" render={() => <Auth status="Teacher" />} />;
    <Route path="/authStudent" render={() => <Auth status="Student" />} />;
    <Route path="/Teacher" render={() => <Teacher />}/>
    {/* <Route path="/Student" render={() => <Student />}/> */}
    <Redirect to="/" />
  </Switch>
);