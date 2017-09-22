import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { addSet, deleteSet } = this.props;
    const setsLength = userSets.length;
    let setMessage = '';
    if (setsLength === 0) {
      setMessage = 'You don\'t have any sets.';
    }
    return (
      <div className="userContent">
        <h2>Your Flashcard Sets</h2>
        {setMessage}
        {userSets.map(userSet => {
          return (

            <div className="sets" key={userSet._id}>
              <div key={userSet._id} className="contentWrapper">
                <button onClick={() => deleteSet(userSet._id)}>X</button>
                <div className="contentContent">
                  <h3><Link to={`/flashcardSets/${userSet._id}`}>{userSet.name}</Link></h3>
                  <p>number of cards: {userSet.cards.length}</p>
                </div>
              </div>
            </div>
          );
        })}
        <AddSet onAdd={addSet} />
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