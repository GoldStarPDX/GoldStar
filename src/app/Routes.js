import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../auth/Auth';
import Home from '../home/Home';

export default () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />;
    <Route path="/authTeacher" render={() => <Auth status="Teacher" />} />;
    <Route path="/authStudent" render={() => <Auth status="Student" />} />;
    <Route path="/Teacher" render={() => <div>Hello Teacher</div>}/>
    <Route path="/Student" render={() => <div>Hello Student</div>}/>
    <Redirect to="/" />
  </Switch>
);