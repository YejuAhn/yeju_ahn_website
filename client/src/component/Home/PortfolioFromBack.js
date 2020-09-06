import React, {Component} from "react";
import {Image, Grid, Label, Pagination} from "semantic-ui-react";
import './Portfolio.css';

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
            <div className = 'projectList'>
                <Grid relaxed columns = {3}>
                    {this.state.projects.map(item => (
                        <Grid.Column>
                            <div key = {item.id} className = 'projectItem'>
                                <Image src = {item.image} size='large' rounded/>
                                <Label className = 'projectTitle' attached='bottom left'>{item.project_title}</Label>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default PortfolioFromBack;
