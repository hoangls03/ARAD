// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import '../css/Header.css'
import { NavBar } from './NavBar';

const HeadSection = styled.div `
color: black;
background-color: #e0e0e0;
margin-top: 0px;
`;


const aElement = styled.a`
text-decoration: none;
color: inherit;
`

function Header() {
  return (
    <HeadSection>
       
      <a href='../Homepage' style={{textDecoration: "none", color: "inherit"}}>
      </a>
      <NavBar/>
      <div className='introduction'>
          <img src='new-logo.png' alt='logo image' className='image-introduction'></img>
          <span className='text-introduction'>
            <p>Accessible</p>
            <p>Research</p>
            <p>Article</p>
            <p>Database</p>
          </span>
        </div>
    </HeadSection>
  );
}

export default Header;
