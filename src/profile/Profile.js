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
        <div className="profileDiv">
          <h2 className="profile">{this.props.profileName}</h2>
          <img src={profileImg} alt="Profile" />
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.updateImage(this.props.status, { photo: e.target.elements.photo.value });
          }}>
            <input type="text" name="photo" />
            <input type="submit" className="submitButton" />
          </form>
        </div>
      </div>
    );
  }
}