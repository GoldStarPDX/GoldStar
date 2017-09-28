import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {

  componentDidMount() {
    this.props.getProfile(this.props.status);
  }

  render() {
    const { status, profileName, profileImg = '../../default-user-img.png'} = this.props;
    // To keep line from getting too long, you can split state and dispatch:
    const { updateImage } = this.props;

    return (
      <div>
        <div id="profileDiv">
          <p>{status} name</p>
          <h2 className="profile">{profileName}</h2>
          <img src={profileImg} alt="Profile" id="profile-img" />
          <form onSubmit={(e) => {
            e.preventDefault();
            updateImage(status, { photo: e.target.elements.photo.value });
          }}>
            <input type="text" name="photo" placeholder="enter URL of new photo" />
            <input type="submit" className="submitButton" value="update" />
          </form>
        </div>
      </div>
    );
  }
}