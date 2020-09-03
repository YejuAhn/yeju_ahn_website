import React, {Component} from "react";
import ProgressExampleIndicating from "./ProgressExampleIndicating";
import {Label, Card, Placeholder, Icon, Image, Container} from 'semantic-ui-react'
import algocareImg from '../../asset/algocare.png';

class Portfolio extends Component {
    render() {
        return (
            <Card.Group itemsPerRow={3}
            style = {{padding: '10px', marginTop : '5px'}}>
                <Card>
                    <Card.Content>
                        <Image src = {algocareImg}/>
                        <Label.Group color='blue'>
                            <Label as='a' content='AlgoCare' style = {{marginTop : '10px'}}/>
                            <Label as='a' content='Django' style = {{marginTop : '10px'}}/>
                            <Label as='a' content='Graphql' style = {{marginTop : '10px'}}/>
                            <Label as='a' content='Uwsgi' style = {{marginTop : '10px'}}/>
                            <Label as='a' content='Nginx' style = {{marginTop : '10px'}}/>
                        </Label.Group>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Placeholder>
                            <Placeholder.Image rectangular />
                        </Placeholder>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Placeholder>
                            <Placeholder.Image rectangular />
                        </Placeholder>
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

export default Portfolio;
