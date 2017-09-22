import React, { Component } from 'react';

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { cards, onDelete, setId } = this.props;
    console.log('onDelete', onDelete);
    console.log('CARDS', cards);
    return (
      <ul className="list">
        <p>MY LIST IS </p>
        {cards.map(card => {
          return <div key={card._id}>
            <p> {card.term} </p>
            <p> {card.definition} </p>
            <button onClick={() => onDelete(card._id)}>delete</button>
          </div>;
        })}
      </ul>
    );
  }
}