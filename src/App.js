import React, { Component } from 'react';
import './App.css';
import Portfolio from './component/Home/Portfolio';
import Contact from './component/Home/Contact';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header> </Header>
            <Home> </Home>
            <Contact> </Contact>
        </div>
        );
    }
}

export default App;
