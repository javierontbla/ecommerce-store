import React, { Component, Fragment } from 'react'

import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'

class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                  title: 'new zeland',
                  imageUrl: 'https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  id: 1,
                  size: 'large',
                  link: 'newzeland'
                },
                {
                  title: 'finland',
                  imageUrl: 'https://images.pexels.com/photos/3594963/pexels-photo-3594963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 2,
                  size: 'large',
                  link: 'finland'
                },
                {
                  title: 'iceland',
                  imageUrl: 'https://images.pexels.com/photos/346972/pexels-photo-346972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 3,
                  size: 'large',
                  link: 'iceland'
                },
                {
                  title: 'switzerland',
                  imageUrl: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 4,
                  size: 'large',
                  link: 'switzerland'
                },
                {
                  title: 'norway',
                  imageUrl: 'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  id: 5,
                  size: 'large',
                  link: 'norway'
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