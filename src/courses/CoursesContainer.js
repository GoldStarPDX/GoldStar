import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Courses from './Courses';

function mapStateToProps(state) {
  return {
    courses: state.courses,
    error: state.coursesError
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const CoursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);

export default CoursesContainer;