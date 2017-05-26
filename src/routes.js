import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';
import Skill from './components/Skill/Skill.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';

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
