import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = props => {
// Setup state for Form elements (sauce, toppings, instructions)



    return (
        <div>
            <form /* onSubmit={submitForm} */>
                <label htmlFor='sizes'>Choose Your Size: </label><br /><br />
                <select id='sizes' name='sizes' data-cy='sizes' /* onChange={inputChange} */><br />
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
                <input id='toppings' type='checkbox' name='pepperoni' data-cy='toppings' />Pepperoni<br />
                <input id='toppings' type='checkbox' name='sausage' data-cy='toppings' />Sausage<br />
                <input id='toppings' type='checkbox' name='bacon' data-cy='toppings' />Canadian Bacon<br />
                <input id='toppings' type='checkbox' name='spicysausage' data-cy='toppings' />Spicy Italian Sausage<br />
                <input id='toppings' type='checkbox' name='chicken' data-cy='toppings' />Grilled Chicken<br />
                <input id='toppings' type='checkbox' name='onion' data-cy='toppings' />Onions<br />
                <input id='toppings' type='checkbox' name='greenpepper' data-cy='toppings' />Green Pepper<br />
                <input id='toppings' type='checkbox' name='dicedtoms' data-cy='toppings' />Diced Tomatoes<br />
                <input id='toppings' type='checkbox' name='olives' data-cy='toppings' />Black Olives<br />
                <input id='toppings' type='checkbox' name='roastgarlic' data-cy='toppings' />Roasted Garlic<br />
                <input id='toppings' type='checkbox' name='artichoke' data-cy='toppings' />Artichoke Hearts<br />
                <input id='toppings' type='checkbox' name='threecheese' data-cy='toppings' />Three Cheese Blend<br />
                <input id='toppings' type='checkbox' name='pineapple' data-cy='toppings' />Pineapple<br />
                <input id='toppings' type='checkbox' name='xtracheese' data-cy='toppings' />XTra Cheese
            </form>

        </div>
    )
}

export default Form;