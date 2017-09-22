import React, { Component } from 'react';

export default class List extends Component {
  
  render() {
    const { cards, onDelete } = this.props;
    return (
      <div>
        {cards.map(card => {
          return (
      
            <div key={card._id} className="contentWrapper">
              <button onClick={() => onDelete(card._id)}>X</button>
              <div className="contentContent">
                <h3> {card.term} </h3>
                <p> {card.definition} </p>
              </div>
            </div>
          );
        })}
      </div>
    );
    
  }
}