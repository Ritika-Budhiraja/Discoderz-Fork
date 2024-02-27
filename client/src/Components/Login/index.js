import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <div className='form-header'>
          <h3>Login</h3>
          <h5>New to Heal Health Hub? <span className='link'>Create an Account</span></h5>
        </div>
        <form>
          <form-group>
            <label htmlFor='email'>Email</label>
            <input id='email' className='email' type='email' name='email' placeholder='Enter Email Address' />
          </form-group>
          <form-group>
            <label htmlFor='password'>Password</label>
            <input id='password' className='password' type='password' name='password' placeholder='Enter Password' />
          </form-group>
          <div className='t-and-c'>
            <form-group>
              <input id='signed-in' type='checkbox' className='signed-in' name='signed-in' />
              <label htmlFor='signed-in'>Keep me Signed in</label>
            </form-group>
            <NavLink className='link' to='\'>Forgot your Password?</NavLink>
          </div>
          <NavLink to='/dashboard'><button type='submit' className='submit'>Login</button></NavLink>
        </form>
      </div> 
    </div>
  )
}

export default Login