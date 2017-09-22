import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSet, addCards, deleteCards } from './actions';
import Header from '../app/Header';
import { Search } from '../search/Search';
// import AddCard from './AddCard';

export class Set extends Component {
  componentWillMount() {
    this.getUserSet(this.props.id);
  }

  getUserSet(id) {
    this.props.getSet(id);
  }

  render() {
    const { history, userSet, deleteCards, id } = this.props;
    const setsLength = userSet.length;
    let setMessage = '';
    if (setsLength === 0) {
      setMessage = 'You don\'t have any cards.';
    }
    return (
      <div>
        <Header />
        <Search onSearch={(search) => {
          history.push(`/Teacher/search/${search}`);
        }} />
        <h2>SET NAME IS ? {userSet.name}</h2>
        {setMessage}
        
        {userSet.map(card => {
          return <div key={card._id}>
            <p> {card.term} </p>
            <p> {card.definition} </p>
            <button onClick={() => deleteCards(id, card._id)}>delete</button>
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
