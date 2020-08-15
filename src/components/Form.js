import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = props => {
// Setup state for Form elements (sauce, toppings, instructions)



    return (
        <div>
            <form /* onSubmit={submitForm} */>
                <select id='sizes' name='sizes' data-cy='sizes' /* onChange={inputChange} */>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </form>

        </div>
    )
}

export default Form;