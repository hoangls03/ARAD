import '../css/Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 
 export const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  /**
   * Function to handle input changes (email and password).
   * @param {Object} e - The event object.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  /**
   * Function to handle user login.
   * @param {string} userEmail - User's email address.
   * @param {string} userPassword - User's password.
   */
  const login = async () => {
    try {
      setError(null);
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      // Login successful, you can redirect or perform other actions here
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Invalid email or password');
      // Handle login error, e.g., display an error message to the user
    }
  };
  return (
    <div className="App">
      <div className='container_login'>
        <label className='first_line'><b>Sign in</b></label>
        <br/>
        <br/>
        

        {error && <p className="error-message">{error}</p>}
        <label for="email"><b>E-mail</b></label>
        <input  className='login-input'
                value={email} 
                onChange={handleChange}
                type="text" 
                placeholder="E-mail" 
                name="email" required />
        <br/>
        <br/>

        <label for="password"><b>Password</b></label>
        <input  className='login-input' 
                value={password} 
                onChange={handleChange} 
                type="password" 
                placeholder="Password" 
                name="password" required />
        <br/>
        <br/>
          
        <button type="submit" className='Login_btn' onClick={login}>Login</button> <br/>
        <span class="register">Don't have an account? <a href="/Registration" class = "register_link">Create</a></span>
      </div>
    </div>
  );
}