import React, { Component } from 'react';
import './App.css';
import About from './component/Home/About';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header> </Header>
            <Home> </Home>
        </div>
        );
    }
}

export default App;
