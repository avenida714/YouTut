import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Footer from '../Footer';
import UploadTut from '../Tuts/UploadTut';
// import UploadTut from '../Uploadtut';
// import UploadPicture from '../UploadPicture';

//heroku push

import "./LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      // console.log(data, "******* this was the data from the errors LOGIN")
      setErrors(['Your credentials were invalid.']);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='outer-wrapper-splash'>
    <form className='login-form' onSubmit={onLogin}>
      <div className='login-errors'>
        {errors.map((error, ind) => (
          <div className="login-errors" key={ind}>{error}</div>
        ))}
      </div>
      <div className='login-password-line'>
        <label className="login-label" htmlFor='email'>Email</label>
        <input className='login-input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='login-password-line'>
        <label className="login-label" htmlFor='password'>Password</label>
        <input className='login-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        </div>
        <div className='login-password-line'>
        <button className="login-button" type='submit'>Login</button>
        {/* <div>
          <UploadTut />
        </div> */}
      </div>
      <div className="register login-text">
                New to YouTut? Register
                <NavLink className="login_navlink" to="/sign-up">
                  {" "}
                  Here{" "}
                </NavLink>

              </div>
              <button
                  className="demo-button"
                  type="submit"
                  onClick={() => {
                    setEmail("demo@aa.io");
                    setPassword("password");
                  }}
                >
                  {" "}
                  Demo{" "}
                </button>
                <Footer />
    </form>

    </div>
  );
};

export default LoginForm;
