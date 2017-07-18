import React, { Component } from 'react';
import './Footer.scss';

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
                      <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://www.linkedin.com/in/pavlyuk-vadim-934329131/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://github.com/PavlyukVadim" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                      <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://plus.google.com/u/0/115972493185809573726" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                      <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://www.youtube.com/channel/UCCJrX72dtaiFq1Dh3tjfE2g" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
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
    );
  }
}

export default Footer;
