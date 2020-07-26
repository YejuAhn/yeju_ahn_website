import React, { Component } from 'react'
import { Header, Icon, Image, Segment} from 'semantic-ui-react'
import image from "../assets/images/yeju_illustration.jpg"

class HomePage extends Component {
  render() {
    return (
        <div>
            <Header as='h1' icon textAlign='center'>
                <Image src={image} size='massive' centered />
                <Header.Content>Esther Yeju Ahn</Header.Content>
            </Header>
        </div>
    )
  }
}

export default HomePage;
