import React, { Fragment } from 'react'

import Directory from '../../components/directory/Directory'
import './HomePage.scss'

const HomePage = () => (
    <Fragment>
        <div className='home-img'>
            SUMMER COLLECTION
        </div>
        <div className='home-page'>
            <Directory />
        </div>
    </Fragment>
)

export default HomePage