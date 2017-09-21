import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Profile from './Profile';


function mapStateToProps(state) {
  return {
    profileName: state.auth.user.name,
    profileImg: state.auth.user.photo,
    error: state.auth.error
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

