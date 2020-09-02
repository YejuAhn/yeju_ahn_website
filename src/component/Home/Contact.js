import React, {Component} from "react";
import githubImage from "../../asset/github-logo.png";
import linkedInImage from "../../asset/linked_in.png";
import phoneImage from "../../asset/phone-symbol.png";
import gmailImage from "../../asset/iconfinder_gmail_132837.png";
import {Container, Image, Popup} from "semantic-ui-react";

class Contact extends Component {
    render() {
        return (
            <Container style={{
                width : '500px',
                height : '100px',
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingTop: '100px',
                paddingBottom: '100px'
            }}>
            <Popup
            on='click'
            pinned
            trigger={ <Image src = {phoneImage} size='tiny' style = {{ width : '43px', height : '43px'}}/>}
            content={<p>🇺🇸 Currently unavailable<br/>🇰🇷 +82-10-7431-9557</p>}
            inverted />
            <a href="https://www.linkedin.com/in/estheryeju/">
                <Image src = {linkedInImage} size='tiny' style = {{ width : '80px', height : '80px'}}/>
            </a>
            <a href="https://github.com/YejuAhn">
                <Image src = {githubImage} size='tiny' style = {{ width : '40px', height : '40px'}}/>
            </a>
            <Popup
            on='click'
            pinned
            trigger=
                {<Image src = {gmailImage} size='tiny' style = {{width : '50px', height : '50px'}}/>}
            content={<p>yejua@andrew.cmu.edu</p>}
            inverted />
            </Container>
        )
    }
}

export default Contact;
