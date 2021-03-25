import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/signin/signin.component';

import './sign-in-and-sign-up.style.scss';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
