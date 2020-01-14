import React, { Component } from 'react'
import { Header, Icon, Image, Segment} from 'semantic-ui-react'
import Logo from "./IMG_8752.JPG"

class HomePage extends Component {
  render() {
    return (
        <div>
            <Header as='h1' icon textAlign='center'>
                <Image src={Logo} size='massive' centered />
                <Header.Content>Esther Yeju Ahn</Header.Content>
            </Header>
        </div>
    )
  }
}

export default HomePage;