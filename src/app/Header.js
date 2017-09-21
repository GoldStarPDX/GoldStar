import React from 'react';
import { signout } from '../auth/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './Logo';

function Header({ signout }) {
  return (
    <header className="clearfix">
      <Logo />
      <div id="signout">
        <Link to="/" onClick={signout}> Log Out </Link>
      </div>
    </header>
  );
}

export default connect(
  null,
  dispatch => ({
    signout() { dispatch(signout());}
  })
)(Header);