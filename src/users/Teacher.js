import React, { Component } from 'react';
import Header from '../app/Header';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';
import { Search } from './Search';
import searchApi from '../services/searchApi';
import Results from './Results';

export default class Teacher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.handleSearchResults.bind(this);
  }

  handleSearchResults(search) {
    searchApi.getSearch({ search })
      .then(results => {
        this.setState({
          searchResults: results
        });
      });
  }

  render() {
    const { history, status } = this.props;
    return (
      <div>
        <Header />
        <Search onSearch={(search) => {
          this.handleSearchResults(search);
          history.push(`/Teacher/search/${search}`);
        }} />
        <Switch>
          <Route exact path="/Teacher" render={() => <ProfileContainer status={status} />} />
          <Route path="/Teacher/search/:search" render={({ match }) => <Results search={match.params.search} searchResults={this.state.searchResults} />} />
        </Switch>

      </div>
    );
  }
}


