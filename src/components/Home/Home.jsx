import React, { Component } from 'react';
import myPhoto from '../../../static/img/pavlyuk-vadim.jpg';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <section id="home" className="col s12">
        <div className="section-box">
          <div className="container">
            <div className="profile">
              <div className="row">
                <div className="col s12 m5">
                  <div className="profile-photo">
                    <img src={myPhoto} alt="Vadim Pavlyuk"/>
                  </div>
                </div>
                <div className="col s12 m7">
                  <div className="profile-info">
                    <div className="profile-preword"><span>Hello</span></div>
                    <h1 className="profile-title"><span>Im</span> Vadim Pavlyuk</h1>
                    <h2 className="profile-position">Full-stack Developer</h2></div>
                      <ul className="profile-list">
                        <li className="clearfix">
                          <strong className="title">Age</strong>
                          <span className="cont">19</span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Address</strong>
                          <span className="cont">Ukraine, Kyiv</span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">E-mail</strong>
                          <span className="cont"><a href="pavlyuk.dev@gmail.com">pavlyuk.dev@gmail.com</a></span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Phone</strong>
                          <span className="cont"><a href="tel:+380986536130">+3 098 65 36 130</a></span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Freelance</strong>
                          <span className="cont">since January 2016</span>
                        </li>
                        <li className="clearfix">
                          <strong className="title"><span className="button">SQDEV</span></strong>
                          <span className="cont"><i className="rsicon rsicon-calendar"></i>since October 2016</span>
                        </li>
                      </ul>
                </div>
              </div>
            </div>
            <div className="profile-social">
              <ul className="social">
                <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://www.linkedin.com/in/pavlyuk-vadim-934329131/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://github.com/PavlyukVadim" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://vk.com/v_a_d_i_m_n" target="_blank"><i className="fa fa-vk" aria-hidden="true"></i></a></li>
                <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://plus.google.com/u/0/115972493185809573726" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content" href="https://www.youtube.com/channel/UCCJrX72dtaiFq1Dh3tjfE2g" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
