import React from 'react';
import Header from '../app/Header';
import ProfileContainer from '../profile/ProfileContainer';
import { connect } from 'react-redux';
import Search from './Search';

export default function Teacher({ status }) {
  return (
    <div>
      <Header />
      <ProfileContainer status={ status } />
      <Search />
    </div>
  );
}

