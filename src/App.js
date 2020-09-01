import React, { Component } from 'react';
import './App.css';
import About from './component/About';
import Header from './component/Header';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
        <div>
            <Header> </Header>
            <About> </About>
        </div>
        );
    }
}

export default App;
