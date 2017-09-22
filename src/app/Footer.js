import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
  render() {
    const { status } = this.props;
    return (
      <footer>
        ©2017 <a href="https://github.com/anwarmontasir" rel="noopener noreferrer" target="_blank">Anwar Montasir</a>, <a href="https://github.com/tinytort" rel="noopener noreferrer" target="_blank">Haley Tortorella</a>, <a href="https://github.com/merylturner" rel="noopener noreferrer" target="_blank">Meryl Turner</a>
      </footer>
    );
  }
}