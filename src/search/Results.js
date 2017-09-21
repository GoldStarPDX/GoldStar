import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchResults }from './actions';
import { Link } from 'react-router-dom';

export class Results extends Component {
  componentWillMount(){
    this.getResults(this.props.search);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.search !== this.props.search) this.getResults(nextProps.search);
    
  }
  
  getResults(search) {
    this.props.getSearchResults(search);

  }
  
  render() {
    return (
      <div>
        <Link to="/Teacher">Back to Profile</Link>
        <h2>Search results for {this.props.search}</h2>
        <ul>{ this.props.results.map(results => {
          return <li key={results.id}>
            <Link to={`/Teacher/set/${results.id}`}>{results.title}</Link>
          </li>;
        })}</ul>
      </div>
    );
  }}

export default connect(
  state => {
    return { results: state.results };
  },

  { getSearchResults }
)(Results);