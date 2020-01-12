import React, { Component } from 'react'
import { Menu, Segment, Header, Button } from 'semantic-ui-react'

class NavBar extends Component {
    state = { activeItem: 'About' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Menu borderless>
                <Menu.Item header>ESTHER YEJU AHN</Menu.Item>
                 <Menu.Menu position='right'>
                    <Menu.Item
                      name='About'
                      active={activeItem === 'About'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Portfolio'
                      active={activeItem === 'Portfolio'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Writing'
                      active={activeItem === 'Writing'}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Contact'
                      active={activeItem === 'Contact'}
                      onClick={this.handleItemClick}
                    />
                </Menu.Menu>             
            </Menu> 
        )
    }
}

export default NavBar;