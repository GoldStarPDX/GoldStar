import React, { Component } from 'react';
import Header from '../app/Header';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';

export default class Student extends Component {
    
  render () {
// TODO: DO WE NEED TO ADD HISTORY???
    const { status } =this.props;
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/Student" render={() => <ProfileContainer status={status} /> } />
        </Switch>
      </div>
                
    );
  }
}