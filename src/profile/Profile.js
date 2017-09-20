import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProfile(this.props.status);
    console.log('this.props', this.props);
  }

  render() {
    let profileImg = '';
    if(this.props.profileImg) profileImg = this.props.profileImg;
    else profileImg = '../../default-user-img.png';

    const { profile, error } = this.props;

    return (
      <div>
        <h2>{this.props.profileName}</h2>
        <img src={ profileImg } alt="Profile" />
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.updateImage(this.props.status,{photo: e.target.elements.photo.value});
            }}>
          <input type="text" name="photo" />
          <input type="submit" />        
        </form>
      </div>
    );
  }
}