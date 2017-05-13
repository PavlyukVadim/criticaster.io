import React, { Component } from 'react';
import './Education.scss';

let arrayOfHobbies = [{title: 'Cycling', className: 'fa fa-bicycle'},
                      {title: 'Sleeping', className: 'fa fa-bed'},
                      {title: 'Travelling', className: 'fa fa-train'},
                      {title: 'Book Reading', className: 'fa fa-book'}];

let arrayOfEducations = [{
  title: 'Regional Mathematical High School', 
  period: '2013 - 2015'
},
{
  title: 'National Technocal University of Ukraine \'Igor Sikorsky Kyiv Polytechnic Institute\'',
  period: '2013 - 2015'
},
{
  title: 'Native English School', 
  period: '2017 - CURRENT'
},
{
  title: 'Native English School', 
  period: '2017 - CURRENT'
}];

class Education extends Component {
  
  constructor(props) {
    super(props);
    this.getHobbies = this.getHobbies.bind(this);
    this.getEducations = this.getEducations.bind(this);
  }

  getHobbies() {
    return arrayOfHobbies.map((item, itemIndex) => {
      return (<div className="col s6 offset-m1 m2" key={itemIndex}>
                <div className="icon-box">
                  <div className="icon"><i className={item.className} aria-hidden="true"></i></div>
                  <h6>{item.title}</h6>
                </div>
              </div>);
    });
  }

  getEducations() {

    return arrayOfEducations.map((item, itemIndex, arr) => {
      return (<div className="item" key={itemIndex} style={{width: 100 / arr.length + '%'}}>
                <div className="marker"></div>
                <div className="content">
                  <h4>{item.title}</h4>
                </div>
                <div className="year">{item.period}</div>
              </div>);
    })
  }

  render() {
    return (
      <section id="education">
        <div className="container">
          <h2>Educational Value</h2>
          <div className="education clearfix">
            {this.getEducations()}
            <div className="line"></div>
          </div>
          <h2>Hobbies &amp; Interest</h2>
          <div className="row">
            {this.getHobbies()}
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
