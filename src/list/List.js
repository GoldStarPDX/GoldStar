import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {

    static propTypes = {
      flashcards: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor(props) {
      super(props);
    }

    render () {
      return (
        <ul className="list">
          {this.props.flashcards.map(( flashcard, index ) => {
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