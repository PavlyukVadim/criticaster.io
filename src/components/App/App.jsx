import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx';
import Skill from '../Skill/Skill.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Skill />
        <Footer />
      </div>
    );
  }
}

export default App;
