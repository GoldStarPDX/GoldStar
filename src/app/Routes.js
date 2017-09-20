import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../auth/Auth';
import Home from '../home/Home';
import Teacher from '../users/Teacher';
// import Student from '../users/Student';

import PrivateRoute from './PrivateRoutes';

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />;
    <Route path="/authTeacher" render={() => <Auth status="Teacher" />} />;
    <Route path="/authStudent" render={() => <Auth status="Student" />} />;
    <PrivateRoute path="/Teacher" render={() => <Teacher status="Teacher" />}/>
    {/* <PrivateRoute path="/Student" render={() => <Student status="Student" />}/> */}
    
    <Redirect to="/" />
  </Switch>
);