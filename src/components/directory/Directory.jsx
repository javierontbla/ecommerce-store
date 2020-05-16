import React, { Component, Fragment } from 'react'

import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'

class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                  title: 'bondi beach collection',
                  imageUrl: 'https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                  id: 1,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'kalahari collection',
                  imageUrl: 'https://images.unsplash.com/photo-1542059765-24f1c00c1349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
                  id: 2,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'denali collection',
                  imageUrl: 'https://images.unsplash.com/photo-1484328861630-cf73b7d34ea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
                  id: 3,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'stroomi rand collection',
                  imageUrl: 'https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  id: 4,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'beale collection',
                  imageUrl: 'https://images.unsplash.com/photo-1549288311-88389ee53b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80',
                  id: 5,
                  size: 'large',
                  link: 'explore'
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <div className='directory-menu'>
                    {this.state.sections.map(({ title, imageUrl, id, size, link }) =>
                        <MenuItem
                          key={ id } 
                          title={ title } 
                          image={ imageUrl } 
                          size={ size }
                          link={ link }
                        />
                    )}
                </div>
            </Fragment>
        )
    }
}

export default Directory