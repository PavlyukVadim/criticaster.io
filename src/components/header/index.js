import React, { Component } from 'react'
import Link from 'gatsby-link'
import config from '../../config'

import './index.scss'

class Header extends Component {
  render() {
    const navLinks = config.navLinks
      .map((item) => {
        const { link, title } = item
        return (
          <span key={item.link} className="link">
            <Link
              to={link}
              activeStyle={{
                color: "#663399",
                borderBottomColor: "#663399",
              }}
            >
              {title}
            </Link>
          </span>
        )
      })

    const socialLinks = config.socialLinks
      .map((item) => {
        const Icon = item.icon
        return (
          <li key={item.link}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <Icon className="icon" />
            </a>
          </li>
        )
      })

    return (
      <header>
        <div className="container">
          <div className="left">
            <span className="logo">
              <Link to="/">Criticaster</Link>
            </span>
            <nav>
              {navLinks}
            </nav>
          </div>
          <div className="right">
            <ul className="social-links">
              {socialLinks}
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
