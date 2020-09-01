import React, {Component} from "react";
import styled from "styled-components";
import githubImage from "../../asset/github-logo.png";
import linkedInImage from "../../asset/linked_in.png";
import phoneImage from "../../asset/phone-symbol.png";
import gmailImage from "../../asset/iconfinder_gmail_132837.png";
import {Container, Image} from "semantic-ui-react";
const padding = '3em';

const Section = styled.section`
  color: white;

  /* Pass variables as inputs */
  padding: ${padding};
`

class Contact extends Component {
    render() {
        return (
            <Container style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '40px'
            }}>
            <Image src = {phoneImage} size='tiny' style = {{ alignSelf: 'center', width : '43px', height : '43px'}}/>
            <Image src = {linkedInImage} size='tiny' style = {{ alignSelf: 'center', width : '80px', height : '80px'}}/>
            <Image src = {githubImage} size='tiny' style = {{ alignSelf: 'center', width : '40px', height : '40px'}}/>
            <Image src = {gmailImage} size='tiny' style = {{ alignSelf: 'center', width : '50px', height : '50px'}}/>
            </Container>
        )
    }
}

export default Contact;
