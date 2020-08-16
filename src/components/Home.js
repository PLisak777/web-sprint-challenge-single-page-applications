import React from 'react';
import { Link, Router, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import img from '../Assets/Pizza.jpg';

const Home = (props) => {
    const history = useHistory();

    const Banner = styled.div`
        border: 1px solid red;
        background: url(${img});
        background-size: cover no-repeat;
        height: 450px;
        display: grid;
        place-items: center;
    `

    const Button = styled.button`
        background: white;
        color: black;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid black;
        border-radius: 3px;
    `

return (

<Banner className='banner-top'>
    <h1>Your favorite food, delivered while coding</h1>
    <Button 
    className='pizzabtn' 
    onClick={() => history.push('/pizza')}>
        Pizza Time!
    </Button>
</Banner>







)







}

export default Home;