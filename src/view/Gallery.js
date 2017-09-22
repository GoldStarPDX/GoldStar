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
    if (this.state.show === 'term') side = <div
      style={{ width: 460, height: 460, color: 'black', backgroundColor: 'white', margin: '0 auto', display: 'table', textAlign: 'center', padding: 20, fontSize: 30 }}
      onClick={() => this.handleShowChange('definition')}><p style={{verticalAlign: 'middle', display: 'table-cell' }}> {currentCard.term}</p> </div>;
    else side = <div
      style={{ width: 460, height: 460, color: 'black', backgroundColor: 'white', margin: '0 auto', display: 'table', textAlign: 'center', padding: 20, fontSize: 18 }}
      onClick={() => this.handleShowChange('term')}> <p style={{verticalAlign: 'middle', display: 'table-cell' }}>{currentCard.definition}</p> </div>;

    return (
      <ul className="list">
        {side}
        <button disabled={this.state.index === 0} onClick={() => this.setState({ index: this.state.index - 1 })}>Previous</button>
        <button onClick={() => onDelete(currentCard._id)}>delete</button>
        <button disabled={this.state.index === cards.length - 1} onClick={() => this.setState({ index: this.state.index + 1 })}>Next</button>
      </ul>
    );
  }
}