import React, {Component, createRef} from 'react';
import './App.css';
import Portfolio from './component/Home/Portfolio';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
    contextRef = createRef();
    render() {
    return (
        <Router>
            <div className="container" ref={this.contextRef}>
                <Header> </Header>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/portfolio' component={Portfolio} />
                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;
