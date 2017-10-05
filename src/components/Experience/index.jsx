import React, { Component } from 'react';
import './Experience.scss';

let arrayOfExperience = [{
  period: 'Jun 2017 - Current',
  company: 'BSG',
  position: 'Frontend Developer',
  desc: 'Now I\'m working as a frontend developer in BSG. I work on insurance project. Our technology stack consist of: HTML/SCSS, js/jQuery, Webix.js, React.js, Webpack, Gulp.'
},
{
  period: 'Oct 2016 - Jun 2017',
  company: 'SQDev',
  position: 'Full-stack Developer',
  desc: 'I was working as a full-stack developer in sqDev, we were creating sites, e-shops, apps. Our technology stack consisted of: HTML/SCSS, js/jQuery, React.js, Webpack, Gulp, Node.js, Express.js, WordPress.'
},
{
  period: 'Jan 2016 - Oct 2016',
  company: 'WeblancerNet',
  position: 'Web Developer',
  desc: 'I was working as a freelance web developer. I had projects with HTML/CSS (landing pages, sites), JS/jQuery (projects like constructor of products for e-shop)'
}];

class Experience extends Component {
  
  constructor(props) {
    super(props);
    this.getExperience = this.getExperience.bind(this);
  }
  
  getExperience() {
    return arrayOfExperience.map((item, itemIndex, arr) => {
      return (
        <div className="experience-block clearfix" key={itemIndex}>
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
        </div>
      ); 
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
