import React, { useState } from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'
import Document from './Document'

const Register = () => {
  const [userType, setUserType] = useState(false)
  return (
    <div className='login register'>
      <div className='login-container'>
        <div className='form-header'>
          <h3>Create an Account</h3>
          <h5>Already have an Account? <span className='link'>Login here</span></h5>
        </div>
        <div className='usertype'>
          <button 
            onClick={() => {
              setUserType((prev) => !prev)
            }} 
            className={!userType? "active": undefined}
          >Giver</button>
          <button 
            onClick={() => {
              setUserType((prev) => !prev)
            }} 
            className={userType? "active": undefined}
          >Needer</button>
        </div>
        <form>
        <form-group>
          <label htmlFor='name'>Name</label>
          <input id='name' className='name' type='name' name='name' placeholder='Enter Your Name' />
        </form-group>
        <form-group>
          <label htmlFor='location'>Place</label>
          <input id='location' className='location' type='location' name='location' placeholder='Enter Your Location' />
        </form-group>
        <form-group>
          <label htmlFor='email'>Email</label>
          <input id='email' className='email' type='email' name='email' placeholder='Enter Email Address' />
        </form-group>
        <form-group>
          <label htmlFor='password'>Password</label>
          <input id='password' className='password' type='password' name='password' placeholder='Enter Password' />
        </form-group>
          {userType && <Document />}
          <div className='t-and-c'>
            <form-group>
              <input id='agree' type='checkbox' className='agree' name='agree' />
              <label htmlFor='agree'>By creating account, you agree to our <span className='link'>Terms of Service</span></label>
            </form-group>
          </div>
          <button type='submit' className='submit'>Create Account</button>
        </form>
      </div> 
    </div>
  )
}

export default Register