import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSetResults } from './actions';
// import AddCards from '../set/AddCards';
import { addCards } from '../set/actions';


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
          return <div key={card.id}>
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
            console.log('CHECKED IS',checked);
            addCards(set._id, checked);
          }}>
            Add to {set.name}</button>;
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