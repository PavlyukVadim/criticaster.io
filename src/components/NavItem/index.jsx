import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavItem.scss';

class NavItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li>
        <Link to={item.link}>
          {item.title}
        </Link>
      </li>
    );
  }
}

export default NavItem;
