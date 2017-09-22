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
    const { id, addCards, results } = this.props;
    console.log('results', results);
    return (
      <div className="userContent">
        <h2>{results.title} Flash Cards</h2>
        <p>{results.term_count} cards</p>
        <p>created by {results.created_by}</p>
        <form className="flashCardForm" ref={(form) => this.form = form} onSubmit={(e) => e.preventDefault()}>
          {this.props.returnedSet.map(card => {
            return <div key={card.id} className="contentWrapper">
              <input type="checkbox" className="returnedSetCheck" id={card.id} name={card.term} value={card.definition} /> 
              <label className="contentContent returnedSetContent" htmlFor={card.term}>
                <h3>{card.term}</h3>
                <p>{card.definition}</p>
              </label>
            </div>;
          })}
          {this.props.sets.map(set => {
            return <button className="addReturned" onClick={() => {
              let checked = [...this.form.elements].filter(element => element.checked).map(element => {
                return {
                  term: element.name,
                  definition: element.value,
                  quizletId: element.id
                };
              });
              addCards(set._id, checked);
            }}>
              <Link to={`/flashcardSets/${set._id}`}>Add selected to <strong>{set.name}</strong></Link>
            </button>;
          }
          )}
        </form>
      </div>
    );
  }
}

export default connect(
  state => {
    return { returnedSet: state.returnedSet, set: state.set, sets: state.sets };
  },
  { getSetResults, addCards }
)(ReturnedSet);