import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSetResults } from './actions';
import { addCards } from '../set/actions';
import './Results.css';

export class ReturnedSet extends Component {
  componentWillMount(){
    this.getSet(this.props.id);
  }

  getSet(id){
    this.props.getSetResults(id);
  }

  render() {
    const { id, addCards } = this.props;
    return (
      <form ref={(form) => this.form = form} onSubmit={(e) => e.preventDefault()}>
        {this.props.returnedSet.map(card => {
          return <div key={card.id} className="cardTerms">
            <input type="checkbox" id={card.id} name={card.term} value={card.definition} /> 
            <label htmlFor={card.term}>
              <h3>{card.term}</h3>
              <p>{card.definition}</p>
            </label>
          </div>;
        })}
        {this.props.sets.map(set => {
          return <button onClick={() => {
            let checked = [...this.form.elements].filter(element => element.checked).map(element => {
              return {
                term: element.name,
                definition: element.value,
                quizletId: element.id
              };
            });
            addCards(set._id, checked);
          }}>
            <Link to={`/flashcardSets/${set._id}`}>Add to {set.name}</Link></button>;
        }
        )}
      </form>
    );
  }
}

export default connect(
  state => {
    return { returnedSet: state.returnedSet, set: state.set, sets: state.sets };
  },
  { getSetResults, addCards }
)(ReturnedSet);