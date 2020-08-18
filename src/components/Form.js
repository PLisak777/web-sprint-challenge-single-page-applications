import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Form = () => {
// Setup state for Form elements (sauce, toppings, instructions)
const [order, setOrder] = useState({
    name: '',
    sizes: '',
    sauces: '',
    pepperoni: false,
    sausage: false,
    bacon: false,
    spicysausage: false,
    chicken: false,
    onion: false,
    greenpepper: false, 
    dicedtoms: false,
    olives: false,
    roastgarlic: false,
    artichoke: false,
    threecheese: false,
    pineapple: false,
    xtracheese: false,
    special: ''
})


// Setup state for error handling
const [errors, setErrors] = useState({
    name: '',
    sizes: '',
    sauces: '',
    pepperoni: false,
    sausage: false,
    bacon: false,
    spicysausage: false,
    chicken: false,
    onion: false,
    greenpepper: false, 
    dicedtoms: false,
    olives: false,
    roastgarlic: false,
    artichoke: false,
    threecheese: false,
    pineapple: false,
    xtracheese: false,
    special: ''
});

// Setup state for post request
const [post, setPost] = useState();

// Create schema for validation
const formSchema = yup.object().shape({
    name: yup
    .string()
    .required('Name is a required field')
    .min(2, 'Name must have at least 2 characters'),
    // sizes: yup
    // .string()
    // .max(1, 'Please choose your size')
    // .required('Please choose your size'),
    // sauces: yup
    // .string()
    // .max(1, 'Only 1 sauce at a time, please')
    // .required('Please choose your sauce')
})

// Validation
const validateChange = ((e) => {
    yup
    .reach(formSchema, null)
    .validate(e.target.name === 'name')
    .then((valid) => {})
    .catch((err) => {
        console.log(err)
        setErrors({
            ...errors, 
            [e.target.name]: err.errors[0]
        })
    })
})

// onChange handler
const inputChange = (e) => { // put all onChange stuff 
    e.persist();
    console.log('Change logged');
    const newData = {
        ...order, 
        [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value /* || 
        e.target.type === 'radio' ? e.target.touched : e.target.value ||
        e.target.type === 'text' ? e.target.name : e.target.value */
    }
        validateChange(e)
        setOrder(newData)
    }

// Form submission handler onSubmit
const submitForm = (e) => {
    e.preventDefault();
    console.log('submitted')
    axios.post('https://reqres.in/api/users', order)
    .then ((res) => {
        console.log('success', res.data)
        setPost(res.data)
    })
    .catch('Error', errors)
    setOrder({
        name: "",
        size: "",
        sauce: "",
        pepperoni: false,
        sausage: false,
        bacon: false,
        spicysausage: false,
        chicken: false,
        onion: false,
        greenpepper: false, 
        dicedtoms: false,
        olives: false,
        roastgarlic: false,
        artichoke: false,
        threecheese: false,
        pineapple: false,
        xtracheese: false,
        special: ""
    })
}

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name' />Enter Your Name: <br />
                <input id='name' type='text' name='name' data-cy='name' value={order.name} onChange={inputChange}/>
                {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
                <br />
                <label htmlFor='sizes'>Choose Your Size: </label><br />
                <br />
                <select id='sizes' name='sizes' data-cy='sizes' value={order.size} onChange={inputChange}>
                    <option value='small' data-cy='sizes'>Small</option>
                    <option value='medium' data-cy='sizes'>Medium</option>
                    <option value='large' data-cy='sizes'>Large</option>
                </select>
                <br />
                <br />
                <label htmlFor='sauces'>Choose Your Sauce: </label><br />
                <br />
                <input id='sauces' type='radio' name='sauces' onChange={inputChange} value={order.sauces} data-cy='sauces' />Classic Marinara<br />
                <input id='sauces' type='radio' name='sauces' onChange={inputChange} value={order.sauces} data-cy='sauces' />Hearty Bolognese<br />
                <input id='sauces' type='radio' name='sauces' onChange={inputChange} value={order.sauces} data-cy='sauces' />BBQ Sauce<br />
                <input id='sauces' type='radio' name='sauces' onChange={inputChange} value={order.sauces} data-cy='sauces' />Garlic Parmesan
                <br />
                <br />
                <label htmlFor='toppings' />Choose Your Toppings (up to 10): <br /><br />
                <input id='toppings' type='checkbox' value={order.toppings} name='pepperoni' onChange={inputChange} data-cy='toppings' />Pepperoni<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='sausage' onChange={inputChange} data-cy='toppings' />Sausage<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='bacon' onChange={inputChange} data-cy='toppings' />Canadian Bacon<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='spicysausage' onChange={inputChange} data-cy='toppings' />Spicy Italian Sausage<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='chicken' onChange={inputChange} data-cy='toppings' />Grilled Chicken<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='onion' onChange={inputChange} data-cy='toppings' />Onions<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='greenpepper' onChange={inputChange} data-cy='toppings' />Green Pepper<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='dicedtoms' onChange={inputChange} data-cy='toppings' />Diced Tomatoes<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='olives' onChange={inputChange} data-cy='toppings' />Black Olives<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='roastgarlic' onChange={inputChange} data-cy='toppings' />Roasted Garlic<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='artichoke' onChange={inputChange} data-cy='toppings' />Artichoke Hearts<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='threecheese' onChange={inputChange} data-cy='toppings' />Three Cheese Blend<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='pineapple' onChange={inputChange} data-cy='toppings' />Pineapple<br />
                <input id='toppings' type='checkbox' value={order.toppings} name='xtracheese' onChange={inputChange} data-cy='toppings' />XTra Cheese
                <br /><br />
                <label htmlFor='special' />Special Instructions: 
                <br /><br />
                <textarea id='special' name='special' placeholder='Anything else we can help with?' data-cy='special' value={order.special} onChange={inputChange} />
                <br />
                <br />
                <button id='submit' type='submit' name='submit' data-cy='submit'>Add to Order</button>
            </form>
    <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
    )
}

export default Form;