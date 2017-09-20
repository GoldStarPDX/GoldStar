import React, { Component } from 'react';
import Header from '../app/Header';
import { Link, Switch, Route } from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';
import { connect } from 'react-redux';
import { Search } from './Search';
import searchApi from '../services/searchApi';
import Results from './Results';

export default function Teacher({ history, status }) {
  return (
    <div>
      <Header />
      <Search onSearch={(search) => history.push(`/Teacher/search/${search}`)} />
      <Switch>
        <Route exact path="/Teacher" render={() => <ProfileContainer status={status} />} />
        <Route path="/Teacher/search/:search" render={({ match }) => <Results search={match.params.search} />} />
        {/* <Link to="/Teacher/search"></Link> */}
      </Switch>

    </div>
  );
}


