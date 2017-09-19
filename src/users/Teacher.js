import React from 'react';
import Header from '../app/Header';
import ProfileContainer from '../profile/ProfileContainer';
import { connect } from 'react-redux';

export default function Teacher({ status }) {
  return (
    <div>
      <Header />
      <ProfileContainer status={ status } />
    </div>
  );
}

