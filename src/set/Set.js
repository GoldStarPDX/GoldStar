import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSet, addCards, deleteCards } from './actions';
// import AddCard from './AddCard';

export class Set extends Component {
  componentWillMount() {
    this.getUserSet(this.props.id);
  }

  getUserSet(id) {
    this.props.getSet(id);
  }

  render() {
    const { userSet } = this.props;
    return (
      <div>
        {userSet.map(card => {
          return <div key={card._id}>
            <p> {card.term} </p>
            <p> {card.definition} </p>
          </div>;
        })}
      </div>
    );
  }

}

export default connect(
  state => {
    return { userSet: state.set };
  },
  { getSet, addCards, deleteCards }
)(Set);
