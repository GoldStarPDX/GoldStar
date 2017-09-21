import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSetResults } from './actions';


export class ReturnedSet extends Component {
  componentWillMount(){
    this.getSet(this.props.id);
  }

  getSet(id){
    this.props.getSetResults(id);
  }

  render() {

    return (
      <form>
        {this.props.returnedSet.map(card => {
          return <div key={card.id}>
            <input type="checkbox" id={card.term} name={card.term} value={card.term} /> 
            <label for={card.term}>
              <h3>{card.term}</h3>
              <p>{card.definition}</p>
            </label>
          </div>;
        })}
      </form>
    );
  }
}

export default connect(
  state => {
    return { returnedSet: state.returnedSet };
  },
  { getSetResults }
)(ReturnedSet);