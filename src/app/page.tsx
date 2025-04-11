// This is the home page
import './page.css';


export default function Home() {
  return (
    <>
    <div className='homePage'>
      <div className='hero-section-web'>
        <div className='hero-section-left'>
          <h1>Nourrissons le monde une main à la fois</h1>
          <div className='hero-section-left-text'>
            <h2>UMLA, C&apos;EST UNE HISTOIRE DE COEUR</h2>
            <p>Une phrase qui raconte l&apos;histoire de l&apos;UMLA et ce qui encourage a impliquer</p>
          </div>
          <div className='hero-section-left-buttons'>
            <button className='button-donate'>Faire un don</button>
            <button className='button-volunteer'>S&apos;impliquer</button>
          </div>
        </div>
        <div className='hero-section-right'>
          <img src="/kid.JPG" alt="jouer"/>
        </div>
      </div>

      
      <div className='hero-section-mobile'>
        <h1>Nourrissons le monde une main à la fois</h1>
        <img src="/kid.JPG" alt="jouer"/>
        <div className='hero-section-mobile-text'>  
          <h2>UMLA, C&apos;EST UNE HISTOIRE DE COEUR</h2>
          <p>Une phrase qui raconte l&apos;histoire de l&apos;UMLA et ce qui encourage a impliquer</p>
        </div>
        <div className='hero-section-mobile-buttons'>
          <button className='button-donate'>Faire un don</button>
          <button className='button-volunteer'>S&apos;impliquer</button>
        </div>
      </div>


      <div className='accomplissements-section'>
        <h2>Nos accomplissements</h2>
        <div className='accomplissements-container'>
        {/*<a target="_blank" href="https://icons8.com/icon/WpQIVxfhhzqt/calendar">Calendar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
          {/*<a target="_blank" href="https://icons8.com/icon/BewN23wCh-il/bowl-with-spoon">Soup</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
          {/*<a target="_blank" href="https://icons8.com/icon/21148/people">People</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
          {/*<a target="_blank" href="https://icons8.com/icon/64459/volunteering">Volunteering</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
          <div className='accomplissements-item'>
            <img src="/calendar.png" alt="calendar"/>
            <p> 2 maraudes organisées chaque mois, hiver comme été </p>
          </div>
          <div className='accomplissements-item'>
            <img src="/soup.png" alt="soup"/>
            <p>100 repas préparés et distribués à chaque maraude, avec soin et dignité </p>
          </div>
          <div className='accomplissements-item'>
            <img src="/people.png" alt="people"/>
            <p>30 bénévoles mobilisés par maraude</p>
          </div>
          <div className='accomplissements-item'>
            <img src="/volunteering.png" alt="volunteering"/>
            <p>Plus de 2 400 personnes aidées par année, grâce à votre soutien</p>
          </div>
        </div>
      </div>


      <div className='mission-section-bg'>
        <div className='mission-section-web'>
          <div className='mission-images-container'>
            <img src="/food-1.jpg" alt="mission-image-1"/>
            <img src="/food-2.jpg" alt="mission-image-2"/> 
            <img src="/food-3.jpg" alt="mission-image-3"/>
          </div>
          <div className='mission-right'>
            <div className='mission-text-container'>
              <h2>Notre mission</h2>
            <p className='mission-text-p1'>Apporter de l&apos;aide concrète, humaine et digne aux personnes en situation de vulnérabilité. Qu&apos;il s&apos;agisse de personnes sans-abris, de familles marginalisées ou d&apos;individus isolés, nous tendons la main, toujours avec <strong>respect, bienveillance et constance.</strong></p>
            <p className='mission-text-p2'>UMLA, c&apos;est une communauté vivante, unie par les <strong>valeurs d&apos;entraide, de justice sociale et de fraternité.</strong> Ensemble, on nourrit les corps et on réchauffe les coeurs.</p>
              <button className='button-help-us'>Comment nous aider ?</button>
            </div>
          </div>
        </div>
      
        <div className='mission-section-mobile'>
          <h2>Notre mission</h2>
          <p>Apporter de l&apos;aide concrète, humaine et digne aux personnes en situation de vulnérabilité. Qu&apos;il s&apos;agisse de personnes sans-abris, de familles marginalisées ou d&apos;individus isolés, nous tendons la main, toujours avec <strong>respect, bienveillance et constance.</strong></p>
          <div className='mission-images-container'>
            <img src="/food-1.jpg" alt="mission-image-1"/>
            <img src="/food-2.jpg" alt="mission-image-2"/> 
            <img src="/food-3.jpg" alt="mission-image-3"/>
          </div>
          <p>UMLA, c&apos;est une communauté vivante, unie par les <strong>valeurs d&apos;entraide, de justice sociale et de fraternité.</strong> Ensemble, on nourrit les corps et on réchauffe les coeurs.</p>
          <button className='button-help-us'>Comment nous aider ?</button>
        </div>
      </div>




      <div className='rechauffer-section'>
        <div className='rechauffer-section-left'>
          <div className='rechauffer-section-left-text'>
            <h2>Réchauffant des coeurs <span style={{color: 'var(--highlight-blue-color)'}}>depuis 2021</span></h2>
            <p>Une Main Lave l&apos;Autre (UMLA) agit au plus près de la rue et des réalités humaines. Ce qui n&apos;était qu&apos;un petit groupe d&apos;amis engagés est devenu un organisme solide, structuré et profondément enraciné dans la communauté. </p>
          </div>
        </div>
        <div className='rechauffer-section-right'>
          <img src="/food-5.jpg" alt="rechauffer-image-1"/>
        </div>
      </div>
    </div>
    </>
  );
}
