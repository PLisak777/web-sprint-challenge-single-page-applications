import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// Create schema for validation
const formSchema = yup.object().shape({
    sizes: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'], 'Please choose a size')
    .required('Size is a required field'),
    sauces: yup
    .string()
    .required('An option is required'),
    toppings: yup
    .string()
})

const Form = props => {
// Setup state for Form elements (sauce, toppings, instructions)
const [order, setOrder] = useState([{
    size: '',
    sauce: '',
    toppings: [{}]
}])

const [size, setSize] = useState();
const [sauce, setSauce] = useState();
const [toppings, setToppings] = useState([{}]);

// Create function to set size


// Handle checkboxes and use them to add to array
const handleCheckbox = e => {
    const newTopping = {
        ...toppings,
        [e.target.checked]: e.target.value}
        setToppings(newTopping)
}

// Create function to handle toppings checkboxes
// const handleCheckbox = ((e) => {
//     const fixins = document.querySelectorAll('#toppings')
//     const isChecked = fixins.checked;
//     console.log(isChecked)
//     if (isChecked < 10) {
//         if (e.target.checked) {
//             setToppings([e.target.value])
//         }
//     } else {
//         const arr = toppings;
//         arr.filter(item => item !== e.target.value);
//         setToppings({
//             toppings: arr
//         })
//     }
//     const checks = document.querySelectorAll('input[type="checkbox"]');
//     const max = 10;
//     for (var i=0; i < checks.length; i++)
//     checks[i].onClick = selectiveCheck;
//     const selectiveCheck = (event) => {
//         console.log(event.target);
//         let checkedChecks = document.querySelectorAll('input[type="checkbox"]: checked');
//         if (checkedChecks.length >= max + 1)
//         return false;
//     }
// }) 




    return (
        <div>
            <form /* onSubmit={submitForm} */>
                <label htmlFor='sizes'>Choose Your Size: </label><br /><br />
                <select id='sizes' name='sizes' data-cy='sizes' /* onChange={inputChange} */>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <br />
                <br />
                <label htmlFor='sauces'>Choose Your Sauce: </label><br /><br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />Classic Marinara<br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />Hearty Bolognese<br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />BBQ Sauce<br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />Garlic Parmesan
                <br />
                <br />
                <label htmlFor='toppings' />Choose Your Toppings (up to 10): <br /><br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='pepperoni' value='pepperoni' data-cy='toppings' />Pepperoni<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='sausage' value='sausage' data-cy='toppings' />Sausage<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='bacon' value='bacon' data-cy='toppings' />Canadian Bacon<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='spicysausage' value='spicysausage' data-cy='toppings' />Spicy Italian Sausage<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='chicken' value='chicken' data-cy='toppings' />Grilled Chicken<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='onion' value='onion' data-cy='toppings' />Onions<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='greenpepper' value='greenpepper' data-cy='toppings' />Green Pepper<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='dicedtoms' value='dicedtoms' data-cy='toppings' />Diced Tomatoes<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='olives' value='olives' data-cy='toppings' />Black Olives<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='roastgarlic' value='roastgarlic' data-cy='toppings' />Roasted Garlic<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='artichoke' value='artichoke' data-cy='toppings' />Artichoke Hearts<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='threecheese' value='threecheese' data-cy='toppings' />Three Cheese Blend<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='pineapple' value='pineapple' data-cy='toppings' />Pineapple<br />
                <input id='toppings' type='checkbox' onClick={handleCheckbox} name='xtracheese' value='xtracheese' data-cy='toppings' />XTra Cheese
                <br /><br />
                <label htmlFor='special' />Special Instructions: 
                <br /><br />
                <textarea id='special' name='special' placeholder='Anything else we can help with?' data-cy='special' />
                <br />
                <br />
                <button /* onSubmit={submitForm} */ id='submit' type='submit' name='submit' data-cy='submit'>Add to Order</button>
            </form>

        </div>
    )
}

export default Form;