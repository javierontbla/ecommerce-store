import React from 'react'

import './CustomBtn.scss'

const CustomBtn = ({ value, type }) => (
    <button className='btn' type={type}>
        { value }
    </button>
)

export default CustomBtn