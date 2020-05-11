import React from 'react'

import './CollectionItem.scss'

const CollectionItems = ({ imageUrl, name, price }) => (
    <div className='collection-item'> 
        <div className='img' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='footer'>
            <span className='name'>{ name }</span>
            <span className='price'>${ price }</span>
        </div>
    </div>
)

export default CollectionItems