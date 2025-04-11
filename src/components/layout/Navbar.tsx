"use client";

import Link from 'next/link';
import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const showSidebar = () => {
        setSidebarVisible(true);
      };
    
      const hideSidebar = () => {
        setSidebarVisible(false);
      };

        // Optional: Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarVisible(false);
      }
    };

    window.addEventListener('keydown', hideSidebar);
    return () => {
      window.removeEventListener('keydown', hideSidebar);
    };
  }, []);


  return (
    <>
    <div className='sidebar' style={{ display: sidebarVisible ? 'flex' : 'none' }}>
        <div className='sidebar-container'>
            <Link href="/">Accueil</Link>
            <Link href="/about">Événements</Link>
            <Link href="/contact">Bénévolat</Link>
        </div>
    </div>

    <div className='topbar'>
      <div className='navbar-home-icon'>
        <Link href="/">
          <img src="/umla-logo-round.JPG" alt="Logo"/>
        </Link>
      </div>
      <div className='navbar-container'>
        <Link href="/" className='hideOnMobile'>Accueil</Link>
        <Link href="/about" className='hideOnMobile'>Événements</Link>
        <Link href="/contact" className='hideOnMobile'>Bénévolat</Link>
        <button className='button-donate'>
          Faire un don
        </button>
        <div className='hamburger-container'>
          <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link>        </div>
      </div>
    </div>
    </>
  );
} 
