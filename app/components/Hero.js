"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import "aos/dist/aos.css";
import AOS from 'aos';

export default function Hero() {
//initialize animate on scroll
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="hero">
          
          <h1 data-aos="fade-down" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Welcome to AI Analytics</h1>

        <p data-aos="fade-down">Your AI-Powered Insights Partner</p>
        <Link data-aos="fade-down" href="#contact" scroll={true} className="cta-button bg-black text-white">Contact Us</Link>

      </section>
    );
  }
  