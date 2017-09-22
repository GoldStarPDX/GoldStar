import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourse, addStudent, removeStudent, addSet, removeSet } from './actions';
import Header from '../app/Header';
import { Search } from '../search/Search';
import AddSetToCourse from './AddSetToCourse';
import AddStudent from './AddStudent';
import Set from '../set/Set';

export class Course extends Component {

  componentDidMount() {
    this.getUserClass(this.props.id);
  }

  getUserClass(id) {
    this.props.getCourse(id);
  }

  render() {
    const { history, course } = this.props;
    const { addStudent, addSet } = this.props;
    console.log('COURSESET', course.flashcardSets);
    let sets = course.flashcardSets;
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
          {/* {sets.map(set => {
            return (
              <div>
                <h3><Link to={`/flashcardSets/${set._id}`}>{set.name}</Link></h3>
              </div>
            );
          })
          } */}
          <AddSetToCourse onAdd={(set) => addSet(course._id, set)} />
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