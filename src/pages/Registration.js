//Import database
import { updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { app } from '../firebase/firebase';

//CSS
import "../css/Registration.css";

import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if(name === 'name'){
      setName(value);
    } else {
      setRepassword(value);
      setPasswordsMatch(password === value) // sets the passwordMatch to true or false depending on if both are the same
    }
  };

  const isEmailValid = (email) => {
    const allowedDomainsRegex = /@(gmail\.com|email\.com|dal\.ca)$/; // checks domain

    if (!allowedDomainsRegex.test(email)) {
      alert("Please enter a valid email address with allowed domains (gmail.com or dal.ca).");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // checks format of email
    return emailRegex.test(email);
  };

  const register = async () => {  
      if (!isEmailValid(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!passwordsMatch) {
        alert("Passwords do not match. Please re-enter your password.");
        return;
      }
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password); //create a user and add to firebase
      //Once user is created, add their role into list
      let user = getAuth().currentUser 
      if (user) {
        let reviewers = doc(db, "Roles", "Reviewer")
        await updateDoc(reviewers, {
          [user.uid]: user.email
        });
      } else {
        // No user is signed in?
      }

      navigate('/');
  };

  return (
    <div className="container">
    <div className="header">
      <div className="text">
        Create Account
      </div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="inputss">
        <label className="input-label"  for="name-input"> Full Name </label>
        <input type="text" placeholder="First and last name" className="reg-input" id="name-input" onChange={handleChange} value={name} name="name" required></input>
      </div>
      <div className="inputss">
        <label className="input-label"  for="email-input"> Email </label>
        <input type="email" placeholder="Email" className="reg-input" id="email-input" onChange={handleChange} value={email} name="email" required></input>
      </div>
      <div className="inputss">
        <label className="input-label"  for="password-input"> Password </label>
        <input type="password" placeholder="Password" className="reg-input" id="password-input" onChange={handleChange} value={password} name="password" required></input>
      </div>
      <div className="inputss">
        <label className="input-label"  for="re-password-input"> Re-enter password </label>
        <input type="password" placeholder="Password" className="reg-input" id="re-password-input" onChange={handleChange} value={repassword} name="repassword" required></input>
      </div>
    </div>
    <div className="submit-container">
      <button className="button" onClick={register}> Create account </button>
    </div>
  </div>
  );
};
