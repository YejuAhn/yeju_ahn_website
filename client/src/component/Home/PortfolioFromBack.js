import React, {Component} from "react";

class PortfolioFromBack extends Component {
    state = {
        projects: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
            const projects = await res.json();
            this.setState({
                projects
            });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div>
                {this.state.projects.map(item => (
                    <div key={item.id}>
                        <h1>{item.project_title}</h1>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default PortfolioFromBack;
