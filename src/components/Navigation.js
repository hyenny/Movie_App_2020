import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Segment } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import About from "../routes/About";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const Navigation = () => {
    const [ activeItem, setActiveItem ] = useState('home');
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    }

    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link} to="/"
                />
                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={handleItemClick}
                    as={Link} to="/about"
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <Segment>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie/:id" component={Detail} />
            </Segment>

        </div>
    );
};

export default Navigation;