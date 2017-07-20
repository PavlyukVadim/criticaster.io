import React, { Component } from 'react';
import NavItem from './../NavItem';
import config from './../../appConfig';
import './Header.scss';

class Header extends Component {
  render() {
    const navItems = config.navMenu.map((item) => {
      return <NavItem item={item} />
    });

    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a className="brand-logo">Pavlyuk Vadim</a>
            <a data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="side-nav" id="mobile-demo">
              {navItems}
            </ul>
          </div>
          <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {navItems}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
