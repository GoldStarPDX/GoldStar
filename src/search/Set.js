import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSetResults } from './actions';


export class Set extends Component {
  componentWillMount(){
    this.getSet(this.props.id);
  }

  getSet(id){
    this.props.getSetResults(id);
  }

  render() {

    return (
      <div>
        {this.props.set.map(card => {
          return <li key={card.id}>{card.term}{card.definition}</li>
        })}
      </div>
    );
  }
}

export default connect(
  state => {
    return { set: state.set };
  },
  { getSetResults }
)(Set);