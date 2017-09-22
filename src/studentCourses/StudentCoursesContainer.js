import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Courses from './Courses';

function mapStateToProps(state) {
  return {
    studentCourses: state.studentCourses,
    error: state.studentCoursesError
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const StudentCoursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);

export default StudentCoursesContainer;