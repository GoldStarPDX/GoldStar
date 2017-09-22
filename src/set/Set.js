import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSet, addCards, deleteCards } from './actions';
import Header from '../app/Header';
import { Search } from '../search/Search';
import ViewSelector from '../view/ViewSelector';

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

        <div className="userContent">
          <p className="fcsLabel">Flash Card Set | {setsLength} cards</p>
          <h2>{userSet.name}</h2>
          {setMessage}
          <ViewSelector cards={userSet} deleteCards={(cardId) => deleteCards(id,cardId)} setId={id} />
        </div>
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
