import React, { Component } from 'react'

import './SignIn.scss'

class SignIn extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render() {
        return(
            <div className='sign-in'>
                <h2>I'm a member</h2>
                <span>{'Sign in with email & password'}</span>
                <form className='sign-in-form'></form>
            </div>
        )
    }
}

export default SignIn