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
        <nav className='navbar-buttons'>
            <ul>
                <li className="hideOnWeb" onClick={hideSidebar}><Link href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></Link></li>
                <li onClick={hideSidebar}><Link href="/">Accueil</Link></li>
                <li onClick={hideSidebar}><Link href="/projets">Projets</Link></li>
                <li onClick={hideSidebar}><Link href="/don">Faire un don</Link></li>
                <li onClick={hideSidebar}><Link href="/histoire">Histoire</Link></li>
                <li onClick={hideSidebar}><Link href="/impliquer">S&apos;impliquer</Link></li>
                <li onClick={hideSidebar}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
    <div className='navbar-container'>
        <div className="navbar-home-icon">
            <Link href="/">
                <img src="/umla-logo-round.JPG" alt="Logo"/>
            </Link>
        </div>
      <nav className='navbar-buttons'>
        <ul>
          <li className="hideOnMobile"><Link href="/">Accueil</Link></li>
          <li className="hideOnMobile"><Link href="/projets">Projets</Link></li>
          <li className="hideOnMobile"><Link href="/don">Faire un don</Link></li>
          <li className="hideOnMobile"><Link href="/histoire">Histoire</Link></li>
          <li className="hideOnMobile"><Link href="/impliquer">S&apos;impliquer</Link></li>
          <li className="hideOnMobile"><Link href="/contact">Contact</Link></li>
          <li onClick={showSidebar} className='hamburger'><Link href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
        </ul>
      </nav>
    </div>
    </>
  );
} 
