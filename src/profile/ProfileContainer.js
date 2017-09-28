import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Profile from './Profile';


function mapStateToProps({ auth }) {
  return {
    profileName: auth.user.name,
    profileImg: auth.user.photo,
    error: auth.error
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

