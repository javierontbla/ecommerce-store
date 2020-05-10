import React from 'react'

import './MenuItem.scss'

const MenuItem = ({ title, image, size }) => (
    <div className={ `menu-item ${ size }` }> 
        <div className='background-image' style={{ backgroundImage: `url(${image})` }}/>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span  className='subtitle'>BUY NOW</span>
        </div>
    </div>
)

export default MenuItem