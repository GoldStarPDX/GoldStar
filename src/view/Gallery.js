import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'term'

    };
    this.handleShowChange.bind(this);
  }

  handleShowChange = (side, view) => {
    this.setState({ show: side, view: view });
  }
  

  render() {
    const { cards, onDelete } = this.props;
    console.log(cards);
    let side = null;

    {if(this.state.show === 'term') side = <div onClick={() => this.handleShowChange('definition')}> {cards[0].term} </div>;
      else side = <div onClick={() => this.handleShowChange('term')}> {cards[0].definition} </div>;} 
    return (
      <ul className="list">
        <p>MY GALLERY</p>
        {cards.map(card => {
          return <div key={card._id}>
            {/* {side} */}
            <div onClick={() => this.handleShowChange(this.state.show)}> TERM:{card.term} </div>;
            <div onClick={() => this.handleShowChange(this.state.show)}> DEFINITION: {card.definition} </div>;
            }
            <button onClick={() => onDelete(card._id)}>delete</button>
          </div>;
        })}
      </ul>
    );
  }
}