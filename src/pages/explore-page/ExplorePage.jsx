import React, { Component, Fragment } from 'react'

import Data from './Data'
import './ExplorePage.scss'
import PreviewExplore from '../../components/preview-explore/PreviewExplore'

class ExplorePage extends Component {
    constructor() {
        super()
        this.state = {
            collections: Data
        }
    }

    render () {
        const { collections } = this.state
        return (
            <Fragment>
                <div>
                    { 
                        collections.map(({ id, ...allData }) => (
                            <PreviewExplore key={ id } { ...allData } />
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default ExplorePage