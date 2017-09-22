import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourses, addCourse, removeCourse } from './actions';
import AddCourse from './AddCourse';
import { Link } from 'react-router-dom';

export class Courses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    const { courses, teacher } = this.props;
    const { removeCourse, addCourse } = this.props;

    return(
      <div>
        <h2>Current Courses</h2>
        <ul>
          {courses.map(({_id, title}) => (
            <li key={_id}>
              <Link to={`/courses/${_id}`}>
                {title}
              </Link>
              <button className="action" onClick={() => removeCourse(_id)}> Remove </button>
            </li>
          ))}
        </ul>
        <AddCourse addCourse={addCourse} teacher={teacher} />
      </div>
    );
  }
}

export default connect(
  state => {
    return { courses: state.courses, teacher: state.auth.user.name };
  },
  { addCourse, getCourses, removeCourse}
)(Courses);