import React, { Component } from 'react';
import AddClass from './AddClass';
import { Link } from 'react-router-dom';

export default class Classes extends Component {

  componentDidMount() {
    this.props.getClasses();
  }

  render() {
    const { classes } = this.props;
    const { removeClass, addClass } = this.props;

    return(
      <div>
        <h2>Current Classes</h2>
        <ul>
          {classes.map(({_id, name}) => (
            <li key={_id}>
              <Link to={`/classes/${_id}`}>
                {name}
              </Link>
              <button className="action" onClick={() => removeClass(_id)}> Remove </button>
            </li>
          ))}
        </ul>
        <AddClass addclass={addClass}/>
      </div>
    );
  }
}