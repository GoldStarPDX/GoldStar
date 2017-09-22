import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourse, addStudent, removeStudent, addSet, removeSet } from './actions';
import Header from '../app/Header';
import { Search } from '../search/Search';
import AddSet from '../sets/AddSet';
import AddStudent from './AddStudent';

export class Course extends Component {

  componentDidMount() {
    console.log('this.props', this.props);
    this.getUserClass(this.props.id);
  }

  getUserClass(id) {
    this.props.getCourse(id);
  }

  render() {
    const { history, course } = this.props;
    console.log('COURSE IS', course);
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
        
        <div className="userContent">
          <h2>{course.title}</h2>
          {courseMessage}

          <h3>Course Roster</h3>
          <p>Roster:{course.roster}</p>
          
          <AddStudent onAdd={addStudent} />
          
          
        </div>

        <div className="userContent">
          <h2>Course Flash Card Sets</h2>
          <AddSet onAdd={addSet} />
        </div>
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