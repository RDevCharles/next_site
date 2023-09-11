"use client"
import React from 'react';
import Link from 'next/link';


export default function Header() {
    
  return (
    <header >
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#team">Team</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}