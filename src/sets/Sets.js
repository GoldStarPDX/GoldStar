import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSets, addSet, updateSet, deleteSet } from './actions';

export class Sets extends Component {
  componentWillMount() {
    this.getUserSets();
  }

  getUserSets() {
    this.props.getAllSets();
  }

  render() {
    return (
      <div>
        <h2>Your Flashcard Sets</h2>
        {this.props.userSets.map(userSet => {
          return <div key={userSet.id}>
            <h3>{userSet.name}</h3>
            <p>Number of Cards: {userSet.cards.length}</p>
          </div>;
        })}
      </div>
    );
  }
}

export default connect(
  state => {
    return { userSets: state.sets };
  },
  { getAllSets, addSet, updateSet, deleteSet }
)(Sets);