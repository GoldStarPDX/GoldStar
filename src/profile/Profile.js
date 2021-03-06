import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {

  componentDidMount() {
    this.props.getProfile(this.props.status);
  }

  render() {
    let profileImg = '';
    if (this.props.profileImg) profileImg = this.props.profileImg;
    else profileImg = '../../default-user-img.png';

    return (
      <div>
        <div id="profileDiv">
          <p>{this.props.status} name</p>
          <h2 className="profile">{this.props.profileName}</h2>
          <img src={profileImg} alt="Profile" id="profile-img" />
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.updateImage(this.props.status, { photo: e.target.elements.photo.value });
          }}>
            <input type="text" name="photo" placeholder="enter URL of new photo" />
            <input type="submit" className="submitButton" value="update" />
          </form>
        </div>
      </div>
    );
  }
}