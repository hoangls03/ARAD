import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import '../css/NavBar.css'

import { getRole, ADMIN, REVIEWER, adminsSnap, reviewersSnap } from '../scripts/userRoles.js'

//Import database
import { getAuth } from "firebase/auth";

const LoginButton = styled.button`
  background-color: #0073e6; // Customize the button's background color
  color: white;
  float: right;
  cursor: pointer;
  margin-top: 4%;
  margin-right: 3%;
`;

export function NavBar() {
  
  //Get user from auth
  let user = getAuth().currentUser
  //Get user role
  let role = getRole(user, adminsSnap, reviewersSnap)


  //If user is logged in remove login and register button
  if(role === REVIEWER){
    return (
      <div class = "btn-group">
        <a href='/Profile' className='second_btn'>Profile</a>
        <a href='/UploadArticle' className='third_btn'>Upload</a>
      </div>
    )
  }
  //If user is admin remove login and register button. Show admin options
  else if(role === ADMIN){
    return (
      <div class = "btn-group">
        <a href='/Profile' className='second_btn'>Profile</a>
          <a href='/UploadArticle' className='third_btn'>Upload</a>
      </div>
    )
  }
  //If user is not logged in show login and register buttons
  else{
    return (
      <div className="btn-group">
        <a href='/Login' className='first_btn'>Login</a>
        <a href='/Profile' className='second_btn'>Profile</a>
        <a href='/UploadArticle' className='third_btn'>Upload</a>
        <a href='/Registration' className='fourth_btn'>Registration</a>
      </div>
    )
  }
  
}