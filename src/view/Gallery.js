import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'term',
      index: 0
    };
    this.handleShowChange.bind(this);
  }

  handleShowChange = (side, view) => {
    this.setState({ show: side, view: view });
  }


  render() {
    const { cards, onDelete } = this.props;
    const currentCard = cards[this.state.index];
    let side = null;
    if (this.state.show === 'term') side = <div onClick={() => this.handleShowChange('definition')}> {currentCard.term} </div>;
    else side = <div onClick={() => this.handleShowChange('term')}> {currentCard.definition} </div>;

    return (
      <ul className="list">
        <p>MY GALLERY</p>
        <button disabled={this.state.index === 0} onClick={() => this.setState({ index: this.state.index - 1 })}>Previous</button>
        {/* {currentCard.term}
        {currentCard.definition} */}
        {/* {cards.map(card => {
          if(this.state.show === 'term') side = <div onClick={() => this.handleShowChange('definition')}> {card.term} </div>;
          else side = <div onClick={() => this.handleShowChange('term')}> {card.definition} </div>;
          return <div key={card._id}>
          </div>;
        })} */}
        {side}
        <button onClick={() => onDelete(currentCard._id)}>delete</button>
        <button disabled={this.state.index === cards.length - 1} onClick={() => this.setState({ index: this.state.index + 1 })}>Next</button>
      </ul>
    );
  }
}