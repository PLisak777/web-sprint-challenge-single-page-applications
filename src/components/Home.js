import React from 'react';
import { Link, Router, Switch, useHistory } from 'react-router-dom';

const Home = (props) => {
    const history = useHistory();

return (

<div className='banner-top'>
    <img src='Assets\Pizza.jpg' />
    <p>Your favorite food, delivered while coding</p>
    <button 
    className='pizzabtn' 
    onClick={() => history.push('/pizza')}>
        Pizza Time!
    </button>
</div>







)







}

export default Home;