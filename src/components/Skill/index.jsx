import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Skill.scss';

let arrayOfTechnicalSkills = [
  { title: 'HTML/CSS', progress: '75%'},
  { title: 'JavaScript', progress: '92%'},
  { title: 'React.JS', progress: '85%'},
  { title: 'Node.JS', progress: '80%'},
  { title: 'Angular/Angular 2', progress: '73%'}
];

let arrayOfKnowledge = [
  ['Network', 'HTTP', 'REST', 'SPA', 'OOP', 'Functional programming', 'Algorithms', 'Frameworks', 'CMS'],
  ['Data structures', 'Linux', 'DATABASES', 'JSON', 'VCS', 'Cross-browser layout', 'Material design', 'Module bundlers', 'Seo optimization']];

class Skill extends Component {
  
  constructor(props) {
    super(props);
    this.getListOfTechnicalSkills = this.getListOfTechnicalSkills.bind(this);
    this.getKnowledge = this.getKnowledge.bind(this);
  }

  getListOfTechnicalSkills() {
    return arrayOfTechnicalSkills.map((item, itemIndex) => {
      return (
        <div key={itemIndex}>
          <label className="progress-bar-label">{item.title}</label>
            <div className="progress">
              <ReactCSSTransitionGroup
                transitionName="progress-animation"
                transitionAppear={true}
                transitionAppearTimeout={500 * itemIndex + 1500}
                transitionEnter={false}
                transitionLeave={false}
              >
                <div
                  key={itemIndex} 
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: item.progress,
                          animationDelay: `${itemIndex * 0.5}s`,}}
                >
                  <span>{item.progress}</span>
                </div>
              </ReactCSSTransitionGroup>
            </div>
        </div>
      );
    })
  }

  getKnowledge() {
    return arrayOfKnowledge.map((array, arrayIndex) => {
      let list = array.map((item, itemIndex, array) => {
        return (
          <li key={arrayIndex * array.length + itemIndex}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            {item}
          </li>
        );
      });
      return (
        <div className="col m6" key={arrayIndex}>
          <ul className="knowledge-list">
            {list}
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="skill">
        <div className="container">
          <div className="row">
            <h2>My Skills Values</h2>
            <div className="col s12 m6">
              <h4>Technical Skills</h4>
              <div>
                {this.getListOfTechnicalSkills()}
              </div>
            </div>
            <div className="col s12 m6">
              <h4>Knowledge</h4>
              <div className="row">
                {this.getKnowledge()}
              </div>
            </div>
          </div>
          <div className="row achievements">
            <h2>Achievements</h2>
            <div className="col m4">
              <h4>Ranks and awards</h4>
              <p><i className="fa fa-trophy" aria-hidden="true"></i> 3rd place on state stage of Ukrainian Minor Academy of Science</p>
              <p><i className="fa fa-trophy" aria-hidden="true"></i> 2nd place on region stage of Programming Olympiad.</p>
            </div>
            <div className="col m4">
              <h4>Certifications</h4>
              <a href="https://geekbrains.ru/certificates/184696.en" target="_blank"><i className="fa fa-file-text-o" aria-hidden="true"></i> JavaScript Advanced</a>
              <p>License:  0184696</p>
              <a href="https://www.sololearn.com/Certificate/1024-727318/pdf" target="_blank"><i className="fa fa-file-text-o" aria-hidden="true"></i> Certificate of Completion: JavaScript course</a>
              <p>License: 1024-727318</p>
            </div>
            <div className="col m4">
              <h4>Testing result</h4>
              <a href="https://www.upwork.com/exams/Exam_15872493"><i className="fa fa-check-square-o" aria-hidden="true"></i> Javascript Test - Upwork tests</a>
              <p>Test Result: 4.80 / 5</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
