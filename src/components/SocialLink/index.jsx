import React, { Component } from 'react';
import { Link } from 'react-router';
import './SocialLink.scss';

class SocialLink extends Component {
  render() {
    const { item } = this.props;

    return (
      <li>
        <a
          className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content"
          href={item.link}
          target="_blank"
        >
          <i className={`fa ${item.icon}`} aria-hidden="true" />
        </a>
      </li>
    );
  }
}

export default SocialLink;
