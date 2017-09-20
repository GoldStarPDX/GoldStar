import React from 'react';
import Header from '../app/Header';
import ProfileContainer from '../profile/ProfileContainer';
import { connect } from 'react-redux';
import { Search } from './Search';
import searchApi from '../services/searchApi';

export default function Teacher({ status }) {
  return (
    <div>
      <Header />
      <ProfileContainer status={status} />
      <Search onSearch={searchFor} />
    </div>
  );
}

function searchFor(search) {

  return searchApi.getSearch({ search });
}

