import React, {Component} from "react";
import {Image, Grid, Label, Modal, Button, Icon} from "semantic-ui-react";
import './Portfolio.css';


class PortfolioFromBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            showModal: false,
            modalId: null,
            data:{}
        }
    }
    showModal = (e, index) => {
        this.setState({ showModal: true, modalId: index });
        console.log("Index: " + index);
    };

    hideModal = (e, index) => {
        this.setState({ showModal: false, modalId: index });
        console.log("Index: " + index);
    };

    disp(e) {
        console.log("function: " + e._id);
    }

    showArticle(e) {}

    modalClose = () => this.setState({ showModal: false }); //change
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
                                    <Modal.Content image scrolling
                                       show={this.state.showModal}
                                       onHide={this.modalClose}
                                       trigger = {<Image key = {item.id} src = {item.image} size='large'/>}>
                                        <Modal.Description key = {item.id} >
                                            <Image src = {item.image} size='large' />
                                            <p>
                                                This is an example of expanded content that will cause the modal's
                                                dimmer to scroll.
                                            </p>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button onClick={this.hideModal} primary>
                                            <Icon name='chevron right' />
                                        </Button>
                                    </Modal.Actions>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default PortfolioFromBack;
