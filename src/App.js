import React, {Component, createRef} from 'react';
import './App.css';
import Portfolio from './component/Home/Portfolio';
import Contact from './component/Home/Contact';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import 'semantic-ui-css/semantic.min.css';
import background from "./asset/background.jpg";


class App extends Component {
    contextRef = createRef();
    render() {
    return (
        <div className="container">
            <Header> </Header>
            <Home> </Home>
            <Contact> </Contact>
        </div>
        );
    }
}

export default App;
