import React, {Component} from "react";
import {StyledMenu} from "./StyledHeader";
import {Container, Icon, Image, Menu, Dropdown} from 'semantic-ui-react';
import './Header.css';
import HeaderContact from './HeaderContact';

class Header extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <StyledMenu size = "large">
                <Icon name='paw' size='huge' style = {{paddingRight: '10px'}}/>
                <br/>
                <Menu.Item
                    name = "home"
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
                <StyledMenu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Korean</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </StyledMenu.Menu>
            </StyledMenu>
        )
    }
}

export default Header;
