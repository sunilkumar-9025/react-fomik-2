import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorComponent from './ErrorComponent'

function Input(props) {
    const {label , name, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={ErrorComponent}/>
    </div>
  )
}

export default Input