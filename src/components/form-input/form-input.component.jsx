import React from "react";

import './form-input.styles.scss';

const FormInput = ({name, value, type, label, handleChange})=>(
    <div className='group'>
        <input onChange={handleChange} type={type} name={name}  className='form-input' />
        {
            label?
            <label className={`${value.length?'shrink':''}form-input-label`}>
                {label}
            </label>:
                null
        }
    </div>
);

export default FormInput;

