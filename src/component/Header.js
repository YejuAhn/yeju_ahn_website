import React, {Component} from "react";
import { Menu } from 'semantic-ui-react';

class Header extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Portfolio'
                    active={activeItem === 'Portfolio'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Resume'
                    active={activeItem === 'Resume'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Blog'
                    active={activeItem === 'Blog'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default Header;
