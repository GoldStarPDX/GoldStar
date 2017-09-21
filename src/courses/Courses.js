import React, { Component } from 'react';
import AddCourse from './AddCourse';
import { Link } from 'react-router-dom';

export default class Courses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    const { courses } = this.props;
    const { removeCourses, addCourse } = this.props;

    return(
      <div>
        <h2>Current Courses</h2>
        <ul>
          {courses.map(({_id, name}) => (
            <li key={_id}>
              <Link to={`/courses/${_id}`}>
                {name}
              </Link>
              <button className="action" onClick={() => removeCourse(_id)}> Remove </button>
            </li>
          ))}
        </ul>
        <AddCourse addCourse={addCourse}/>
      </div>
    );
  }
}