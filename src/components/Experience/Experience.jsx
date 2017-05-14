import React, { Component } from 'react';
import './Experience.scss';

let arrayOfExperience = [{
  period: '2016 - Current',
  company: 'SQDev',
  position: 'Full-stack Developer',
  desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
},
{
  period: '2016 - 2017',
  company: 'WeblancerNet',
  position: 'Web Developer',
  desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitus sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
}];

class Experience extends Component {
  
  constructor(props) {
    super(props);
    this.getExperience = this.getExperience.bind(this);
  }
  
  getExperience() {
    return arrayOfExperience.map((item, itemIndex, arr) => {
      return (<div className="experience-block clearfix" key={itemIndex}>
                <div className="meta">
                  <span className="year">{item.period}</span>
                  <span className="company">{item.company}</span>
                </div>
                <div className="content">
                  <h5>{item.position}</h5>
                  <p>{item.desc}</p>
                </div>
                <div className="icon">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <div className={itemIndex !== arr.length - 1 && "line"}></div>
              </div>); 
    })
  }

  render() {
    return (
      <section id="experience">
        <div className="container">
          <h2>2 Years Experience</h2>
          <div className="experience-timeline">
            {this.getExperience()}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
