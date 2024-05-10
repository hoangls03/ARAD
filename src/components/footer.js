// Footer.js
import React from 'react';
import styled from 'styled-components'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

const FooterSection = styled.div `
background-color: #e0e0e0;
color: black;
padding: 1rem;

margin-top: auto;
`;
const aElement = styled.a`
text-decoration: none;
color: inherit;
`

function Footer() {
  return (
    <FooterSection>
      <ul>
    
            <a href='/' style={{textDecoration: "none", color: "inherit"}}>
                <li>About Us </li>
            </a>
      </ul>
      <p>&copy; 2023 ARAD</p>
    </FooterSection>
  );
}

export default Footer;
