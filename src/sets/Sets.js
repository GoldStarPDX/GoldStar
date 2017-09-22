import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllSets, addSet, updateSet, deleteSet } from './actions';
import AddSet from './AddSet';
import './Sets.css';

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
      <div className="setsDiv">
        <h2 className="setsHeader">Your Flashcard Sets</h2>
        {setMessage}
        {userSets.map(userSet => {
          return (

            <div className="sets">
              <div key={userSet._id}>
                <h3><Link to={`/flashcardSets/${userSet._id}`}>{userSet.name}</Link></h3>
                <p>Number of Cards: {userSet.cards.length}</p>
                <button onClick={() => deleteSet(userSet._id)}>X</button>
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