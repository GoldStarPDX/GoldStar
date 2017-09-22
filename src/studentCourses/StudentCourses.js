import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourses } from './actions';
import { Link } from 'react-router-dom';

export class StudentCourses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    const { studentCourses } = this.props;

    return(
      <div>
        <div className="studentCourses">
          <h2>Your Courses</h2>
          {studentCourses.map(({_id, title}) => (
            <div key={_id} className="contentWrapper">
              <div className="contentContent">
                <h3><Link to={'/studentCourses/$_id}'}>{title}</Link></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {studentCourses: state.studentCourses};
  },
  {getCourses}
)(StudentCourses);