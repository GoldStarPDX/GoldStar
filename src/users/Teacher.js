import React from 'react';
import Header from '../app/Header';
import Profile from '../profile/Profile';
import { connect } from 'react-redux';

export default function Teacher({ status }) {
  return (
    <div>
      <Header />
      <Profile />
    </div>
  );
}

