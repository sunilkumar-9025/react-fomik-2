import { ErrorMessage, Field } from 'formik';
import React from 'react'

function Select(props) {
    const {name, label, options, ...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='select' id={name} name={name} {...rest}>
            {options.map(option =>{
                return(
                    <option key={option.value} value={option.value}>{option.key}</option>  
                )
            })}
        </Field>
        <ErrorMessage name={name} component={ErrorMessage} />
    </div>
  )
}

export default Select