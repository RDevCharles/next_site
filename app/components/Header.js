"use client"
import React from 'react';
import { Link } from 'react-scroll'
import { slide as Menu } from 'react-burger-menu'


export default function Header() {
    
  return (
    <header >
      <div className="logo">Your Logo</div>
      <Menu styles={styles} right={true} width={ 280 }>
        <nav >
        <ul style={{display:"flex", flexDirection:"column"}}>
          <li style={{cursor:"pointer"}}><Link style={{color:"black"}} to="services" smooth={true}>Services</Link></li>
          <li style={{cursor:"pointer"}}><Link style={{color:"black"}} to="team" smooth={true}>Team</Link></li>
          <li style={{cursor:"pointer"}}><Link style={{color:"black"}} to="contact" smooth={true}>Contact</Link></li>
        </ul>
      </nav>


      </Menu>
      
    </header>
  );
}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: 'white'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'black'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    position: 'relative',
    bottom:'2rem',
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
