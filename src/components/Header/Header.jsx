import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
  	    <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-demo">
              <li><a className="active" href="#test1">Home</a></li>
              <li><a href="#test2">Skill</a></li>
              <li><a href="#test2">Rortfolio</a></li>
              <li><a href="#test2">Experience</a></li>
              <li><a href="#test2">Education</a></li>
              <li><a href="#test2">Contact</a></li>
            </ul>
          </div>
          <div className="right nav-content hide-on-med-and-down">
            <ul className="tabs tabs-transparent">
              <li className="tab"><a className="active" href="#test1">Home</a></li>
              <li className="tab"><a href="#test2">Skill</a></li>
              <li className="tab"><a href="#test2">Rortfolio</a></li>
              <li className="tab"><a href="#test2">Experience</a></li>
              <li className="tab"><a href="#test2">Education</a></li>
              <li className="tab"><a href="#test2">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
