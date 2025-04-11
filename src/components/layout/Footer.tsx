// create a footer component

import React from 'react';
import './Footer.css';
import Link from 'next/link';

/*
<a target="_blank" href="https://icons8.com/icon/32292/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
*/

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <Link href="/"><img src="/umla-logo-round.JPG" alt="UMLA" /></Link>
            <h1>UMLA</h1>
        </div>  
        <div className='footer-content-middle'>
            <h2>Contactez-nous</h2>
            <a href="mailto:contact@umla.com" className="text-white hover:underline">Email: contact@umla.com</a>
        </div>
        <div className='footer-content-right'>
            <h2>Suivez-nous sur les réseaux sociaux</h2>
            <div className='footer-content-right-social-media'> 
                <a href="https://www.instagram.com/umla_mtl/" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61561551389034" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.tiktok.com/@umla.mtl" target="_blank" rel="noopener noreferrer">
                    <img src="/tiktok.png" alt="TikTok" />
                </a>
                <a href="https://www.linkedin.com/company/une-main-lave-l%E2%80%99autre/" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;