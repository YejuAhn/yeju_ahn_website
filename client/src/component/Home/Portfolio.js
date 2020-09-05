import React, {Component} from "react";
import {Label, Card, Image} from 'semantic-ui-react'
import algocareImg from '../../asset/algocare.png';
import dataVisImg from '../../asset/datavis.png';
import hciiResearchImg from '../../asset/HFC corr.png'
import superdogImg from '../../asset/superdog.png'
import eegImg from '../../asset/EEG.png'
import carcasonneImg from '../../asset/Carcasonne.png'

class Portfolio extends Component {
    render() {
        return (
            <div>
            <Card.Group itemsPerRow={3}
                style = {{padding: '10px', marginTop : '5px'}}>
                    <Card>
                        <Card.Content>
                            <Image src = {algocareImg}/>
                            <Label.Group color='blue' style = {{marginTop : '20px'}}>
                                <Label as='a' content='AlgoCare'/>
                                <Label as='a' content='Django'/>
                                <Label as='a' content='Database Design'/>
                                <Label as='a' content='Graphql'/>
                                <Label as='a' content='Uwsgi'/>
                                <Label as='a' content='Nginx'/>
                            </Label.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src = {hciiResearchImg}/>
                            <Label.Group color='blue'  style = {{marginTop : '20px'}}>
                                <Label as='a' content='HCII Research'/>
                                <Label as='a' content='Conversation Data Visualization'/>
                                <Label as='a' content='NLP'/>
                                <Label as='a' content='Linguistic Coordination'/>
                                <Label as='a' content='Probability'/>
                            </Label.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src = {dataVisImg}/>
                            <Label.Group color='blue'  style = {{marginTop : '20px'}}>
                                <Label as='a' content='Data visualization'/>
                                <Label as='a' content='ShinyApp.io'/>
                                <Label as='a' content='Statistics'/>
                                <Label as='a' content='Chloropleth'/>
                                <Label as='a' content='Density Heat Map'/>
                                <Label as='a' content='Word Cloud'/>
                                <Label as='a' content='Correlation'/>
                            </Label.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src = {superdogImg}/>
                            <Label.Group color='blue'  style = {{marginTop : '20px'}}>
                                <Label as='a' content='PyGame'/>
                                <Label as='a' content='OOP'/>
                                <Label as='a' content='AI'/>
                            </Label.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src = {carcasonneImg}/>
                            <Label.Group color='blue'  style = {{marginTop : '20px'}}>
                                <Label as='a' content='Observer Pattern'/>
                                <Label as='a' content='Representational Gap'/>
                                <Label as='a' content='OOP'/>
                            </Label.Group>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image src = {eegImg}/>
                            <Label.Group color='blue'  style = {{marginTop : '20px'}}>
                                <Label as='a' content='EEG'/>
                                <Label as='a' content='Speech Adaptation'/>
                                <Label as='a' content='Convolutional Neural Network'/>
                                <Label as='a' content='Data Visualization'/>
                            </Label.Group>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}

export default Portfolio;
