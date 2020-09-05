import React, {Component} from "react";
import {StyledMenu} from "./StyledHeader";
import {Icon, Sticky, Menu, Dropdown} from 'semantic-ui-react';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        return (
            <Sticky context = {this.contextRef}>
                <StyledMenu
                    size = "massive"
                    style = {{
                    backgroundColor: '#FFFFFF'}}
                    attached='top'
                    color = {'purple'}
                    pointing secondary>
                    <Menu.Item>
                        <Icon name='paw'
                          size='large'
                          style = {{paddingLeft: '10px'}}/>
                    </Menu.Item>
                    <Menu.Item
                        name = "home"
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as = {Link} to = '/'
                    />
                    <Menu.Item
                        name='Portfolio'
                        active={activeItem === 'Portfolio'}
                        onClick={this.handleItemClick}
                        as = {Link} to = '/portfolio'
                    />
                    <Menu.Item
                        name='Resume'
                        active={activeItem === 'Resume'}
                        onClick={this.handleItemClick}
                        href="https://drive.google.com/file/d/1sJbbFdiYQMNAPwLloYyEJL0v-bL-cOhE/view?usp=sharing"
                        />
                    <Menu.Item
                        name='Blog'
                        active={activeItem === 'Blog'}
                        onClick={this.handleItemClick}
                        href="https://medium.com/@yeju12331"
                    />
                    <Menu.Item
                        name = "Contact"
                        active={activeItem === 'Contact'}
                        onClick={this.handleItemClick}
                        as = {Link} to = '/'
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
        </Sticky>
        )
    }
}

export default Header;
