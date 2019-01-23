import React, { Component } from 'react'
import config from '../../config'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="top">
            <div className="container">
              <div className="row">
                <div className="col s12 m4">
                  <h4>Address</h4>
                  <p>academ. Yangel Street,<br/> Ukraine, Kyiv.</p>
                </div>
                <div className="col s12 m4">
                  <h4>Connect</h4>
                  <div className="social-icons">
                    <ul className="social">
                      socialLinks
                    </ul>
                  </div>
                </div>
                <div className="col s12 m4">
                  <h4>Contact</h4>
                  <p>Tel: +3 098 65 36 130<br/>Mail: pavlyuk.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">Copyright © Pavlyuk Vadim. All Rights Reserved.</div>
        </footer>
      </div>
    )
  }
}

export default Footer
