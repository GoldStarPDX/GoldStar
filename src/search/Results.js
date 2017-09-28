import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchResults }from './actions';
import { Link } from 'react-router-dom';
import './Results.css';

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
    // more whitespace, help the reader see the sections of code
    return (
      <div id="results">
        <div className="userContent">

          <Link to="/Teacher" id="back">&laquo; Back to Profile</Link>
          <h2>Search results for “{this.props.search}”</h2>
          
          { this.props.results.map(results => (
            <div key={results.id} className="contentWrapper searchResult">
              <h3><Link to={{
                pathname: `/Teacher/set/${results.id}`,
                state: results
              }}>{results.title}</Link></h3>
              <p>{results.term_count} cards</p>
              <p>created by {results.created_by}</p>
            </div>
          ))}

        </div>
      </div>
    );
  }}

export default connect(
  state => {
    return { results: state.results };
  },
  { getSearchResults }
)(Results);