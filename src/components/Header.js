import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`


    return (
    <Container className='container'>
        <div className='header'>
            Lambda Eats
            <NavBar className='nav-container'>
                <ul>
                    <Link to='/'>Home</Link>
                    <li>Contact</li>
                </ul>
            </NavBar>
        </div>
    </Container>
    )
}

export default Header;