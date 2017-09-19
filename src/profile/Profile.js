import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
//   componentDidMount() {
//     this.props.getProfile(status);
//   }

  render() {
    let profileImg = '';

    if(this.props.img) profileImg = this.props.img;
    else profileImg = '../../default-user-img.png';

    const { profile, loading, error } = this.props;

    if (loading) return <div> Loading... </div>;
    
    return (
      <div>
        <img src={ profileImg } alt="Profile" />        
      </div>
    );
  }
}