import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourse, addStudent, removeStudent, addSet, removeSet } from './actions';
import Header from '../app/Header';
import { Search } from '../search/Search';
import AddSet from '../sets/AddSet';
import AddStudent from './AddStudent';

export class Course extends Component {

  componentDidMount() {
    this.getUserClass(this.props.id);
  }

  getUserClass(id) {
    this.props.getCourse(id);
  }

  render() {
    const { history, course } = this.props;
    const { addStudent, removeStudent, addSet, removeSet} = this.props;
    const coursesLength = course.length;
    let courseMessage = '';
    if (coursesLength === 0) {
      courseMessage = 'Your class is currently empty.';
    }
    return (
      <div>
        <Header />
        <Search onSearch={(search) => {
          history.push(`/Teacher/search/${search}`);
        }} />
        {courseMessage}
        <AddStudent addStudent={addStudent} course={course._id} />
        <AddSet onAdd={addSet} />
        <p>Roster:{course.roster}</p>
      </div>
    );
  }
}

export default connect(
  state => {
    return { course: state.course };
  },
  {
    getCourse,
    addStudent,
    removeStudent,
    addSet,
    removeSet
  }
)(Course);