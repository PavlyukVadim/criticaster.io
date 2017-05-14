import React, { Component } from 'react';
import angularLogo from '../../../static/img/angular-logo.png';
import bootstrapLogo from '../../../static/img/bootstrap-logo.png';
import expressLogo from '../../../static/img/expressjs-logo.png';
import jqueryLogo from '../../../static/img/jquery-logo.png';
import javaScriptLogo from '../../../static/img/js-logo.png';
import materializeLogo from '../../../static/img/materialize-logo.png';
import mongodbLogo from '../../../static/img/mongodb-logo.png';
import nodeLogo from '../../../static/img/nodejs-logo.png';
import reactLogo from '../../../static/img/react-logo.png';
import reduxLogo from '../../../static/img/redux-logo.png';
import sassLogo from '../../../static/img/sass-logo.png';
import tsLogo from '../../../static/img/ts-logo.png';
import webpackLogo from '../../../static/img/webpack-logo.png';
import wordpressLogo from '../../../static/img/wordpress-logo.png';

import './Portfolio.scss';

let projects = [{
  title: 'News blog',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['Express', 'React', 'Redux', 'Webpack', 'Materialize'],
  link: '',
  desc: (
         <div><span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'Snakes',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['Angular 2', 'TypeScript', 'Node.js', 'Mongodb'],
  link: '',
  desc: (
         <div><span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'Clean Star',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['jQuery', 'Bootstrap'],
  link: '',
  desc: (<div>
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'Settory',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['React', 'Webpack'],
  link: '',
  desc: (<div>
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'SMAK',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['JavaScript', 'SASS'],
  link: '',
  desc: (<div>
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'Royal optica',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['WordPress', 'jQuery'],
  link: '',
  desc: (<div>
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'Visio Lux',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['WordPress', 'jQuery'],
  link: '',
  desc: (<div>
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
},
{
  title: 'KET',
  img: 'http://materializecss.com/images/office.jpg',
  technologies: ['Angular', 'SASS'],
  link: '',
  desc: (<div>
         <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
         <p>Here is some more inhtmlFormation about this product that is only revealed once clicked on.</p></div>)
}];

let technologiesIcons = new Map();
technologiesIcons.set('Angular', angularLogo);
technologiesIcons.set('Angular 2', angularLogo);
technologiesIcons.set('Bootstrap', bootstrapLogo);
technologiesIcons.set('Express', expressLogo);
technologiesIcons.set('jQuery', jqueryLogo);
technologiesIcons.set('JavaScript', javaScriptLogo);
technologiesIcons.set('Materialize', materializeLogo);
technologiesIcons.set('Mongodb', mongodbLogo);
technologiesIcons.set('Node.js', nodeLogo);
technologiesIcons.set('React', reactLogo);
technologiesIcons.set('Redux', reduxLogo);
technologiesIcons.set('SASS', sassLogo);
technologiesIcons.set('TypeScript', tsLogo);
technologiesIcons.set('Webpack', webpackLogo);
technologiesIcons.set('WordPress', wordpressLogo);

let arrayOfTechnologies = [{
  title: 'JavaScript libraries',
  technologies: ['jQuery', 'React', 'Redux']
},
{
  title: 'JavaScript frameworks',
  technologies: ['Angular', 'Angular 2']
},
{
  title: 'Programming languages',
  technologies: ['JavaScript', 'TypeScript']
},
{
  title: 'CSS frameworks',
  technologies: ['Bootstrap', 'Materialize']
},
{
  title: 'Module bundlers',
  technologies: ['Webpack']
},
{
  title: 'CMS',
  technologies: ['WordPress']
},
{
  title: 'Other',
  technologies: ['Express', 'Mongodb', 'Node.js', 'SASS']
}];

class Portfolio extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      technologies: this.getArrayOfTechnologiesWithoutGroups()
    };
    this.getProjects = this.getProjects.bind(this);
    this.getCheckboxes = this.getCheckboxes.bind(this);
    this.changeTechnologies = this.changeTechnologies.bind(this);
    this.resetCheckboxes = this.resetCheckboxes.bind(this);
  }

  getArrayOfTechnologiesWithoutGroups() {
    let arr = arrayOfTechnologies.map((group) => group.technologies);
    let i, arrLength = arr.length; 
    for (i = 0; i < arrLength; i++) {
      arr = arr.concat(arr.shift());
    }
    return arr;
  }

  getProjects() {
    let technologies = this.state.technologies;
    let arrayOfProjects = projects.filter((project) => {
      return project.technologies.some((technology) => {
        return ~technologies.indexOf(technology);
      })
    });

    let cards = arrayOfProjects.map((project) => {
      let technologies = project.technologies.map((technology) => {
        return (<div className="chip">
                  <img src={technologiesIcons.get(technology)} alt={technology}/>
                    {technology}
                </div>)
      })

      return (<div className="col m6 l4">
                <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={project.img}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{project.title}<i className="material-icons right">more_vert</i></span>
                      <div className="technologies">
                        {technologies}
                      </div>
                    <p><a href="#">This is a link</a></p>
                  </div>
                  <div className="card-reveal">
                    {project.desc}
                  </div>
                </div>
              </div>)
    });
    let result = [];

    while(cards.length > 0) {
      result.push(
        <div className="row">
          {cards.slice(0, 3)}
        </div>
      )
      cards = cards.slice(3);
    }
    return result;
  }

  getCheckboxes() {    
    this.checkboxes = [];
    return arrayOfTechnologies.map((group) => {
      let checkboxes = group.technologies.map((technology) => {
        let checkbox;
        if (this.state.reset === 'every') {
          checkbox = (<input type="checkbox" 
                        className="filled-in" 
                        onChange={(e) => {this.changeTechnologies(e)}}
                        id={`${technology}-checkbox`}
                        checked={true}
                        defaultChecked/>);
        } else if (this.state.reset === 'none') {
          checkbox = (<input type="checkbox" 
                        className="filled-in" 
                        onChange={(e) => {this.changeTechnologies(e)}}
                        id={`${technology}-checkbox`}
                        checked={false}
                        defaultChecked/>);
        } else {
          checkbox = (<input type="checkbox" 
                        className="filled-in" 
                        onChange={(e) => {this.changeTechnologies(e)}}
                        id={`${technology}-checkbox`}
                        defaultChecked/>);
        }
        return (<p>
                  {checkbox}
                  <label htmlFor={`${technology}-checkbox`}>{technology}</label>
                </p>);  
      });
      return (<div>
                <h4>{group.title}</h4>
                {checkboxes}
              </div>);
    });
  }

  resetCheckboxes(e) {
    this.setState({
      technologies: e.target.checked ? [] : this.getArrayOfTechnologiesWithoutGroups(),
      reset: e.target.checked ? 'none' : 'every'
    });
  }

  changeTechnologies(e) {
    let technology = e.target.id.match(/.*-/)[0].slice(0, -1);
    let technologies = [].concat(this.state.technologies);
    if (~technologies.indexOf(technology)) {
      technologies.splice(technologies.indexOf(technology), 1);
    } else {
      technologies.push(technology);
    }
    this.setState({
      technologies: technologies,
      reset: undefined
    });
  }

  render() {
    return (
      <div id="portfolio" className="row">
        <div className="col m3 sidebar">
          <form action="#">
            <div className="switch">
              <label>
                Every
                <input type="checkbox"
                       onChange={(e) => this.resetCheckboxes(e)}
                       defaultValue={undefined}/>
                <span className="lever"></span>
                None
              </label>
            </div>
            {this.getCheckboxes()}
          </form>
        </div>
        <div className="col m9 projects">
          {this.getProjects()}
        </div>
      </div>
    );
  }
}

export default Portfolio;
