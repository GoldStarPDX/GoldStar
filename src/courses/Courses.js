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
        <div className="userContent">
          <h2>Your Courses</h2>
          {courses.map(({_id, title}) => (
            <div key={_id} className="contentWrapper">
              <button onClick={() => removeCourse(_id)}>X</button>
              <div className="contentContent">
                <h3><Link to={`/courses/${_id}`}>{title}</Link></h3>
                <p>number of students: ?</p>
              </div>
            </div>
          ))}
          <AddCourse addCourse={addCourse} teacher={teacher} />
        </div>
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