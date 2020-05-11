import React from 'react'
import { withRouter } from 'react-router-dom'

import './MenuItem.scss'

const MenuItem = ({ title, image, size, history, match, link }) => {
    console.log(match)
    return (
        <div className={ `menu-item ${ size }` } onClick={() => history.push(`${match.url}${link}`)}> 
            <div className='background-image' style={{ backgroundImage: `url(${image})` }} />
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)