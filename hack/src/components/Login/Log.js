import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import emaili from '../../Assets/email.png';
import passworde from '../../Assets/password.png';
import person from '../../Assets/person.png';
import google from '../../Assets/google.png';
import microsoft from '../../Assets/microsoft.jpg';
import '../../index.css';
import { Link } from 'react-router-dom';
// import validLog from './validlog.js';

function Log() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });


  const [action, setAction] = useState('Signup');

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => {
      if (response.ok) {
        // Redirect to the next page on successful login
        window.location.href = '/bill';
      } else {
        // Handle login failure
       console.log("error");
      }
    })
    .catch(console.log("error"));
  };
  return (
    <div className='LoginPage'>
      <div className='container h-100'>
        <div className='Header'>
          <h4>{action}</h4>
          <div className='Underline'></div>
        </div>
        <form action="http://localhost:3000/login" method="POST" onSubmit={handleSubmit}>
          <div className='inputs'>
            {action === "Signup" && (
              <div className='Name input'>
                <div>
                  <img src={person} alt='person' />
                  <input type='text' placeholder='Name'  required />
                </div>
              </div>
            )}
            <div className='Email input'>
              <div>
                <img src={emaili} alt='email' />
                <input type='email' placeholder='Email@gmail.com' onChange={handleInput} name='email' required />
               
              </div>
            </div>
            <div className='Password input'>
              <div>
                <img src={passworde} alt='password' />
                <input type='password' placeholder='Password' onChange={handleInput} name='password' required />
          
              </div>
            </div>
          </div>

          <div className='forgot' onClick={() => { setAction(action === 'Signup' ? 'Login' : 'Signup') }}>
            <p>{action === 'Login' ? 'Don\'t have an account? ' : 'Already have an account? '}
              <span>{action === 'Login' ? 'Create Account' : 'Login'}</span>
            </p>
          </div>
          <Link to='/input' className='custom-Link'>
            <button type="submit" className={action === 'Signup' ? 'Signup btn btn-dark bu' : 'Signup gray btn btn-dark bu'} >
              {action === 'Signup' ? 'Sign up' : 'Login'}
            </button>
          </Link>
        </form>
      </div>

      <hr className='Line'></hr>
      <div className='row otherLogin'>
        <p>Login with</p>
        <div className='col-6 '><img src={google} width="50px" alt='logingoogle' /></div>
        <div className='col-6 '><img src={microsoft} width="50px" alt='loginmicrosoft' /></div>
      </div>
    </div>
  );
}

export default Log;
