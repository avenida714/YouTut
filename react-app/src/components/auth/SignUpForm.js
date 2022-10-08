import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import "./SignupForm.css"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='outer-wrapper-signup'>

    <div className='signup-form'>
    <form className='invisible-me' onSubmit={onSignUp}>
      <div className='invisible-me'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='invisible-me'>
        <label className='signup-label'>User Name</label>
        <input className='signup-input'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='invisible-me'>
        <label className='signup-label'>Email</label>
        <input className='signup-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='invisible-me'>
        <label className='signup-label'>Password</label>
        <input className='signup-input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='invisible-me'>
        <label className='signup-label'>Repeat Password</label>
        <input className='signup-input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className='center-me'>
      <button className='tut-button' type='submit'>Tut!</button>
      </div>
    </form>
       <div className="register-signup">
        Already have an account? Log in {" "}
        <NavLink className="login_navlink" to="/login">
          Here
        </NavLink>
      </div>
    </div>
    </div>


  );
};

export default SignUpForm;
