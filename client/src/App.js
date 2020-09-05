import React, {Component, createRef} from 'react';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Portfolio from './component/Home/Portfolio';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Container} from "semantic-ui-react";

class App extends Component {
    contextRef = createRef();
    render() {
    return (
        <Router>
            <div className="container" ref={this.contextRef}>
                <Header> </Header>
                <Container className = 'yejuAhnWeb'>
                    <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/portfolio' component={Portfolio} />
                    </Switch>
                </Container>
            </div>
        </Router>
        );
    }
}

export default App;
