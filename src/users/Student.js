import React, { Component } from 'react';
import Header from '../app/Header';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';
import StudentCourses from '../studentCourses/StudentCourses';


export default class Student extends Component {

  render() {
    const { status } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/Student" render={() => (
            <div>
              <ProfileContainer status={status} />
              <StudentCourses />  
            </div>
          )} />
        </Switch>
      </div>

    );
  }
}