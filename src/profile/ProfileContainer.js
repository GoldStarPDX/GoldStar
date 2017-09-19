import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Profile from './Profile';


function mapStateToProps(state) {
  return {
    profile: state.profile,
    error: state.profileError,
    loading: state.profileLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;

