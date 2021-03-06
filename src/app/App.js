import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { checkForToken } from '../auth/actions';
import Footer from './Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }
  render() {
    return (
      <div>
        <Router>
          <Routes />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { checkForToken }
)(App);
