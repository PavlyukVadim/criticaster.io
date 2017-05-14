import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';
import Skill from './components/Skill/Skill.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';

import './index.scss';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
      <Route path='/skills' component={Skill} />
    	<Route path='/experience' component={Experience} />
      <Route path='/education' component={Education}/>
      <Route path='/contact' component={Contact}/>
  	</Route> 
  </Router>,
  document.getElementById('root')
);
