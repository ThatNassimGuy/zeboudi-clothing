import React from 'react'
import './sign-in-and-sign-out.styles.scss'
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

const SignInAndSignOut = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>

)

export default SignInAndSignOut;