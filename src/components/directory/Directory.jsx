import React, { Component, Fragment } from 'react'

import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'

class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                  title: 'beale collection',
                  imageUrl: 'https://pixabay.com/get/57e2d54a4e5ba514f6da8c7dda35367b1d36dae752507849_1280.jpg',
                  id: 1,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'kalahari collection',
                  imageUrl: 'https://pixabay.com/get/54e5d2404855ab14f6da8c7dda35367b1d36dae752517740_1280.jpg',
                  id: 2,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'denali collection',
                  imageUrl: 'https://pixabay.com/get/54e5d3434a50aa14f6da8c7dda35367b1d36dae75359744f_1280.jpg',
                  id: 3,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'stroomi rand collection',
                  imageUrl: 'https://pixabay.com/get/54e7d4454d55ae14f6da8c7dda35367b1d36dae753577949_1280.jpg',
                  id: 4,
                  size: 'large',
                  link: 'explore'
                },
                {
                  title: 'bondi beach collection',
                  imageUrl: 'https://pixabay.com/get/57e7d2464a51a914f6da8c7dda35367b1d36dae75350784e_1280.jpg',
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