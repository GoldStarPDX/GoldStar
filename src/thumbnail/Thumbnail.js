import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Thumbnail extends Component {

    static propTypes = {
      flashcards: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
      return (
        <div className="tumbnails">
          {this.props.bunnies.map((flashcard, index) => {
            return (
              <div key={index}>
                <img src ={flashcard.url} alt={flashcard.title}/>
                <h6>{flashcard.definition}</h6>
              </div>
            );
          })}
        </div>
      );
    }
}