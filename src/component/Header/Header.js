import React, {Component} from "react";
import {StyledMenu, StyledMenuItem} from "./StyledHeader";
import { Menu } from 'semantic-ui-react';
import './Header.css';

class Header extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <StyledMenu>
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
            </StyledMenu>
        )
    }
}

export default Header;