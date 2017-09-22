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
      style={{ width: '100%', maxWidth: 500, height: 400, color: 'black', backgroundColor: 'white', margin: '0 auto', display: 'table', textAlign: 'center', fontSize: 30 }}
      onClick={() => this.handleShowChange('definition')}><div style={{verticalAlign: 'middle', display: 'table-cell' }}> {currentCard.term}<span className="galleryClick">click to view definition</span></div> </div>;
    else side = <div
      style={{ width: '100%', maxWidth: 500, height: 400, color: 'black', backgroundColor: 'white', margin: '0 auto', display: 'table', textAlign: 'center', fontSize: 18 }}
      onClick={() => this.handleShowChange('term')}> <div style={{verticalAlign: 'middle', display: 'table-cell' }}>{currentCard.definition}<span className="galleryClick">click to view term</span></div></div>;

    return (
      <div>
        <button className="galleryX" onClick={() => onDelete(currentCard._id)}>X</button>
        <ul className="list">
          {side}
          <div id="galleryBtns">
            <button disabled={this.state.index === 0} onClick={() => this.setState({ index: this.state.index - 1 })}>Previous</button>
            <button disabled={this.state.index === cards.length - 1} onClick={() => this.setState({ index: this.state.index + 1 })}>Next</button>
          </div>
        </ul>
      </div>
    );
  }
}