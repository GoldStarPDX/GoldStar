import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards, onDelete, setId } = this.props;
    return (
      <ul className="list">
        <p>MY GALLERY</p>
        {cards.map(card => {
          return <div key={card._id}>
            <div> {card.term} </div>
            <div> {card.definition} </div>
            <button onClick={() => onDelete(card._id)}>delete</button>
          </div>;
        })}
      </ul>
    );
  }
}