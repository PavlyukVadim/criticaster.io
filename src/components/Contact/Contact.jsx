import React, { Component } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap.jsx';
import './Contact.scss';

class Contact extends Component {
  
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="row">
            <div className="col m6">
              <div className="row">
                <form className="col s12">
                  <h3>Feel free to contact me</h3>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="last_name" type="text" className="validate"/>
                      <label htmlFor="last_name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate"/>
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="message" className="materialize-textarea"></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col m6">
              <div className="section-box contact-info has-map">
                <ul className="contact-list">
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
                </ul>
                <div id="map">
                  <GoogleMap/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
