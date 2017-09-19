import React from 'react';
import { signout } from '../auth/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ signout }) {
  return (
    <header>
      <Link to="/" onClick={signout}> Log Out </Link>
    </header>
  );
}

export default connect(
  dispatch => ({
    signout() { dispatch(signout());}
  })
)(Header);