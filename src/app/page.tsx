
// This is the home page
import './page.css';
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className='homePage'>
      <h1>UMLA</h1>
      <h3>Ensemble, nourrissons l&apos;espoir, un repas à la fois</h3>
      <div className='blank'></div>
      <div className='boxesContainer'>
        <div className='box'>
          <h2>Donations</h2>
          <p>
            Faites un don aujourd&apos;hui<br></br>
            Votre don aidera plein denfants
          </p>
          <button className="homeButton don"><Link href='/don'>Faites un don</Link></button>
        </div>
        <div className='box'>
          <h2>Benevolat</h2>
          <p>
            Impliquez-vous facilement<br></br>
            On a besoin de vous!
          </p>
          <button className="homeButton don"><Link href='/impliquer'>Devenez bénévole</Link></button>
        </div>
      </div>
    </div>
  );
}
