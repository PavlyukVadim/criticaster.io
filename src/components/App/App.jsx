import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx';
import Skill from '../Skill/Skill.jsx';
import Experience from '../Experience/Experience.jsx';
import Education from '../Education/Education.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Skill />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
