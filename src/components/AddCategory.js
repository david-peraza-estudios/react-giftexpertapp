import React from 'react'
import { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) { // que el string sea mayor que 2 caracteres
            
             
            //setCategories(categos => [...categos, inputValue]);
            
            setCategories(categos => [inputValue, ...categos]); 
            // con esto colocalmos la última string recibida como la 1ra

            setInputValue(''); // cambiamos a setValue como vacío para vaciar el input al submit
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

