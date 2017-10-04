import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/skills' component={Skill}/>
    <Route path='/portfolio' component={Portfolio}/>
    <Route path='/experience' component={Experience}/>
    <Route path='/education' component={Education}/>
    <Route path='/contact' component={Contact}/>
  </Route> 
);

export default routes;
