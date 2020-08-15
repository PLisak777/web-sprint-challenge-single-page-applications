import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;   
    align-items: center;
    font-size: 1.5rem;
`

const Container = styled.div`
    background: lightgrey;
`

const List = styled.li`
    display: flex;
    padding: 0 10px 0 10px;
    justify-content: space-evenly;
    text-decoration: none;
`

    return (
    <Container className='container'>
        <div className='header'>
            <NavBar className='nav-container'>
                Lambda Eats
                <ul>
                    <List>
                        <Link to='/'>Home</Link>
                        <List>Contact</List>
                    </List>
                </ul>
            </NavBar>
        </div>
    </Container>
    )
}

export default Header;