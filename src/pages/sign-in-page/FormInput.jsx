import React from 'react'

import './FormInput.scss'

const FormInput = ({ handleInput, label, ...props}) => (
    <div className='group'>
        <input className='form-input' onChange={ handleInput } { ...props }/>
        { label ? (<label className={ `${ props.value.length ? 'shrink' : '' } form-input-label` }>{label}</label>) : null}
    </div>
)

export default FormInput