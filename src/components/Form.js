import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

// Create schema for validation
const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, 'Name must contain at least 2 characters')
    .required('Name is a required field'),
    sizes: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'], 'Please choose a size')
    .required('Size is a required field'),
    toppings: yup
    .string()
    .max(10, "Choose up to 10 toppings"),
    special: yup
    .string()
    .max(255, 'Only 255 characters allowed')
})

const Form = () => {
// Setup state for Form elements (sauce, toppings, instructions)
const [order, setOrder] = useState({
    name: '',
    size: '',
    sauce: '',
    toppings: '',
    special: ''
})

const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    special: ""
})

const [post, setPost] = useState();

const [toppings, setToppings] = useState([]);

// Handle checkboxes and use them to add to array
const handleCheckbox = e => {
    const newTopping = {
        ...toppings,
        [e.target.checked]: e.target.value}
        setToppings(newTopping)
}

const validateChange = ((e) => {
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then((valid) => {})
    .catch((err) => {})
    console.log(err)
    setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
    })
})

const submitForm = (e) => {
    e.preventDefault();
    console.log('submitted')
    axios.post('http://reqres.in/', order)
    .then ((res) => {
        setOrder({
            name: "",
            size: "",
            sauce: "",
            toppings: "",
            special: ""
        })
        console.log(res.data)

    })
    .catch('Error', errors)
}

const inputChange = (e) => {
    e.persist();
    console.log('Change logged');
    const newData = {
        ...order, 
        [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value && 
        e.target.type === 'radio' ? e.target.touched : e.target.value
    }
    validateChange(e)
    setOrder(newData)
}

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name' />Enter Your Name: <br />
                <input 
                id='name' 
                type='text' 
                name='name' 
                data-cy='name'
                value={order.name}
                onChange={inputChange}/>
                {errors.name.length > 2 ? <p className='error'>{errors.name}</p> : null}
                <br />
                <br />
                <label htmlFor='sizes'>Choose Your Size: </label><br />
                <br />
                <select 
                id='sizes' 
                name='sizes' 
                data-cy='sizes' 
                value={order.size}
                onChange={inputChange}>
                    <option value='small' data-cy='sizes'>Small</option>
                    <option value='medium' data-cy='sizes'>Medium</option>
                    <option value='large' data-cy='sizes'>Large</option>
                </select>
                <br />
                <br />
                <label htmlFor='sauces'>Choose Your Sauce: </label><br />
                <br />
                <input id='sauces' type='radio' name='marinara' data-cy='sauces' />Classic Marinara<br />
                <input id='sauces' type='radio' name='bolognese' data-cy='sauces' />Hearty Bolognese<br />
                <input id='sauces' type='radio' name='bbq' data-cy='sauces' />BBQ Sauce<br />
                <input id='sauces' type='radio' name='garlic' data-cy='sauces' />Garlic Parmesan
                <br />
                <br />
                <label htmlFor='toppings' />Choose Your Toppings (up to 10): <br /><br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='pepperoni' value={order.toppings} onChange={inputChange} data-cy='toppings' />Pepperoni<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='sausage' value={order.toppings} onChange={inputChange} data-cy='toppings' />Sausage<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='bacon' value={order.toppings} onChange={inputChange} data-cy='toppings' />Canadian Bacon<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='spicysausage' value={order.toppings} onChange={inputChange} data-cy='toppings' />Spicy Italian Sausage<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='chicken' value={order.toppings} onChange={inputChange} data-cy='toppings' />Grilled Chicken<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='onion' value={order.toppings} onChange={inputChange} data-cy='toppings' />Onions<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='greenpepper' value={order.toppings} onChange={inputChange} data-cy='toppings' />Green Pepper<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='dicedtoms' value={order.toppings} onChange={inputChange} data-cy='toppings' />Diced Tomatoes<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='olives' value={order.toppings} onChange={inputChange} data-cy='toppings' />Black Olives<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='roastgarlic' value={order.toppings} onChange={inputChange} data-cy='toppings' />Roasted Garlic<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='artichoke' value={order.toppings} onChange={inputChange} data-cy='toppings' />Artichoke Hearts<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='threecheese' value={order.toppings} onChange={inputChange} data-cy='toppings' />Three Cheese Blend<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='pineapple' value={order.toppings} onChange={inputChange} data-cy='toppings' />Pineapple<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='xtracheese' value={order.toppings} onChange={inputChange} data-cy='toppings' />XTra Cheese
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