import React, { Component } from 'react';

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { cards, onDelete } = this.props;
    return (
      <ul className="list">
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