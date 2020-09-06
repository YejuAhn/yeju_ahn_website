import React, {Component} from "react";
import {Image, Grid, Label, Modal} from "semantic-ui-react";
import './Portfolio.css';

class PortfolioFromBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            modalOpen: false,
        };
    }

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
                                <Label className = 'projectTitle' attached='bottom left'>{item.project_title}</Label>
                                <Modal
                                    open = {this.state.open}
                                    onClose = {() => this.setState({modalOpen : false})}
                                    onOpen =  {() => this.setState({modalOpen : true})}
                                    trigger = {<Image src = {item.image} size='large' rounded/>}
                                >
                                    <Modal.Content image scrolling>
                                        <Image src = {item.image} size='large' rounded/>
                                        <Modal.Description>
                                            <p>
                                            This is an example of expanded content that will cause the modal's
                                            dimmer to scroll.
                                            </p>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default PortfolioFromBack;
