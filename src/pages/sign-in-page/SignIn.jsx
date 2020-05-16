import React, { Component } from 'react'

import './SignIn.scss'
import FormInput from './FormInput'
import CustomBtn from '../../components/button-component/CustomBtn'
import { signInWithGoogle } from '../../Firebase/Firebase'

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I'm a member</h2>
                <span>{'Sign in with email & password'}</span>

                <form className='sign-in-form' onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={ this.state.email } 
                        label='Email'
                        handleInput={ this.handleInput }
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={ this.state.password } 
                        handleInput={ this.handleInput }
                    />
                    <CustomBtn type='submit' value='Sign In'/>
                    <CustomBtn onClick={ signInWithGoogle() } value='Sign In with Google'/>
                </form>
            </div>
        )
    }
}

export default SignIn