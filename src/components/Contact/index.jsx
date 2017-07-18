import React, { Component } from 'react';
import GoogleMap from '../GoogleMap';
import './Contact.scss';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let hostname = window.location.origin;
    let name = this.nameInput.value;
    let mail = this.mailInput.value;
    let text = this.textInput.value;
    fetch(`${hostname}/mail`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        name,
        mail,
        text
      })
    }).then(() => {
      alert('Message sent successfully');
    });
  }
  
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="row">
            <div className="col m6">
              <div className="row">
                <form className="col s12" onSubmit={(e) => {this.submitForm(e)}}>
                  <h3>Feel free to contact me</h3>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="last_name"
                             type="text"
                             className="validate"
                             ref={(input) => {this.nameInput = input;}}
                      />
                      <label htmlFor="last_name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email"
                             type="email"
                             className="validate"
                             ref={(input) => {this.mailInput = input;}}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="message"
                                className="materialize-textarea"
                                ref={(input) => {this.textInput = input;}}
                      >
                      </textarea>
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
                  <GoogleMap />
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
