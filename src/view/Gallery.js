import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list">
        {this.props.flashcards.map((flashcard, index) => {
          return (
            <li key={index}>
              <a href={flashcard.url}>{flashcard.name}</a>
              <p>{flashcard.definition}</p>
            </li>);
        })}
      </ul>
    );
  }
}