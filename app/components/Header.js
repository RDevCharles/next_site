"use client"
import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Header() {
    
  return (
    <header >
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><Link to="services" smooth={true}>Services</Link></li>
          <li><Link to="team" smooth={true}>Team</Link></li>
          <li><Link to="contact" smooth={true}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}