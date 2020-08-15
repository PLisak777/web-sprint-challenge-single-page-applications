import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = props => {
// Setup state for Form elements (sauce, toppings, instructions)



    return (
        <div>
            <form /* onSubmit={submitForm} */>
                <label htmlFor='sizes'>Choose Your Size: </label>
                <select id='sizes' name='sizes' data-cy='sizes' /* onChange={inputChange} */>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <br />
                <label htmlFor='sauces'></label>
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />Classic Marinara<br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />Hearty Bolognese<br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />BBQ Sauce<br />
                <input id='sauces' type='radio' name='sauces' data-cy='sauces' />Garlic Parmesan
            </form>

        </div>
    )
}

export default Form;