import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSets, addSet, updateSet, deleteSet } from './actions';
import AddSet from './AddSet';

export class Sets extends Component {
  componentWillMount() {
    this.getUserSets();
  }

  getUserSets() {
    this.props.getAllSets();
  }

  render() {
    const { userSets } = this.props;
    const setsLength = userSets.length;
    let setMessage = '';
    if (setsLength === 0) {
      setMessage = 'You don\'t have any sets.';
    }
    return (
      <div>
        <h2>Your Flashcard Sets</h2>
        {setMessage}
        {userSets.map(userSet => {
          return <div key={userSet.id}>
            <h3>{userSet.name}</h3>
            <p>Number of Cards: {userSet.cards.length}</p>
          </div>;
        })}
        <AddSet onAdd={({set}) => addSet(set)}/>
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