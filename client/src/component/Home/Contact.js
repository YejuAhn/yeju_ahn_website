import React, {Component} from "react";
import gmailImage from "../../asset/iconfinder_gmail_132837.png";
import {Image, Popup, Icon} from "semantic-ui-react";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className = 'contact'>
                <div className = 'block'>
                    <a>
                    <Popup
                        on ='click'
                        pinned
                        trigger={ <Icon name = 'phone volume' size='huge'/>}
                        content={<p>🇺🇸 Currently unavailable<br/>🇰🇷 +82-10-7431-9557</p>}
                        inverted
                    />
                    </a>
                </div>
                <div className = 'block'>
                    <a href="https://www.linkedin.com/in/estheryeju/">
                        <Icon name = 'linkedin alternate' size='huge'/>
                    </a>
                </div>
                <div className = 'block'>
                    <a href="https://github.com/YejuAhn">
                        <Icon name = 'github alternate' size='huge'/>
                    </a>
                </div>
                <div className = 'block'>
                    <a>
                        <Popup
                        on='click'
                        pinned
                        trigger=
                            {<Icon name = 'mail' size='huge'/>}
                        content={<p>yejua@andrew.cmu.edu</p>}
                        inverted
                        />
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;
