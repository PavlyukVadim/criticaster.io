import React, { Component } from 'react';
import myPhoto from '../../../static/img/pavlyuk-vadim.jpg';
import myPdf from '../../../static/PavlyukVadim.pdf';
import SocialLink from './../SocialLink';
import config from './../../appConfig';
import './Home.scss';

class Home extends Component {

  render() {
    const socialLinks = config.socialLinks.map((item) => {
      return (
        <SocialLink
          item={item}
          key={item.link}
        />
      );
    });

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
                    <h2 className="profile-position">Full-stack Developer</h2>
                  </div>
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
                {socialLinks}
                <li>
                  <a
                    className="ripple-centered waves-effect waves-circle waves-light btn-floating secondary-content blue pulse"
                    href={myPdf}
                    download
                  >
                    <i className="material-icons">get_app</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
