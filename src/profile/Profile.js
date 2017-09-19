import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProfile(this.props.status);
  }

  render() {
    let profileImg = '';
    if(this.props.img) profileImg = this.props.img;
    else profileImg = '../../default-user-img.png';

    const { profile, error } = this.props;

    return (
      <div>
        <img src={ profileImg } alt="Profile" />        
      </div>
    );
  }
}