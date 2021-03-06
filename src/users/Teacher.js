import React, { Component } from 'react';
import Header from '../app/Header';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';
import Sets from '../sets/Sets';
import Courses from '../courses/Courses';
import { Search } from '../search/Search';
import searchApi from '../services/searchApi';
import Results from '../search/Results';
import ReturnedSet from '../search/ReturnedSet';

export default class Teacher extends Component {

  render() {
    const { history, status } = this.props;
    
    return (
      <div>
        <Header />
        <Search onSearch={(search) => {
          history.push(`/Teacher/search/${search}`);
        }} />
        <Switch>
          <Route exact path="/Teacher" render={() => (
            <div>
              <ProfileContainer status={status} />
              <Sets />
              <Courses />
            </div>
          )} />
          <Route path="/Teacher/search/:search" render={({ match }) => <Results search={match.params.search} />} />
          <Route path="/Teacher/set/:id" render={({ match, location }) => <ReturnedSet id={match.params.id} results={location.state} />} />
        </Switch>

      </div>
    );
  }
}


