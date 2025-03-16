import Image from 'next/image';
import Link from 'next/link';
import './projets.css'

export default function Projets() {
    return (
        <div className='main'>
            <h1>Nos projets</h1>
            <h2>Nous organisons divers projets pour aider les personnes dans le besoin. En voici quelques uns que nous avons réalisés dans le passé.</h2>
            <div className='projets-container'>
                <div className='projets-item'>
                    <h2>Maraude de la semaine</h2>
                    <p>Nous avons organisé une maraude de la semaine pour collecter des fonds pour l&apos;association. Nous avons collecté 1000€ et distribué des vêtements et des aliments aux personnes dans le besoin. Nous avons nourri 100 personnes, distribué 100 sacs de lessive et 100 sacs de blé.</p>
                    <Image src="/food_1.jpg" width={300} height={200} alt="Événement 1" />
                </div>
                <div className='projets-item'>
                    <h2>Vetir des pauvres</h2>
                    <p>Nous avons organisé un événement pour collecter des fonds pour l&apos;association. Nous avons distribué des vêtements aux personnes dans le besoin. Nous avons distribué 100 sacs de vêtements, 100 bottes, 100 paires de gants. </p>
                    <Image src="/thrift_1.jpeg" width={300} height={200} alt="Événement 1" />
                </div>
                <div className='projets-item'>
                    <h2>Vetir des pauvres</h2>
                    <p>Nous avons organisé un événement pour collecter des fonds pour l&apos;association. Nous avons distribué des vêtements aux personnes dans le besoin. Nous avons distribué 100 sacs de vêtements, 100 bottes, 100 paires de gants. </p>
                    <Image src="/food_2.jpg" width={300} height={200} alt="Événement 1" />
                </div>  
                <div className='projets-item'>
                    <h2>Vetir des pauvres</h2>
                    <p>Nous avons organisé un événement pour collecter des fonds pour l&apos;association. Nous avons distribué des vêtements aux personnes dans le besoin. Nous avons distribué 100 sacs de vêtements, 100 bottes, 100 paires de gants. </p>
                    <Image src="/food_3.jpg" width={300} height={200} alt="Événement 1" />
                </div>
            </div>
            <hr />
            <div className='temoignages-section'>
                <h2>Témoignages</h2>
                <div className='temoignages-container'>
                    <div className='temoignage-item'>
                        <Image src="/will.jpeg" width={100} height={100} alt="Témoignage 1" />
                        <blockquote>“Grâce à ces projets, j&apos;ai pu aider des personnes dans le besoin et rencontrer des gens formidables !” - Un bénévole</blockquote>
                    </div>
                    <div className='temoignage-item'>
                        <Image src="/ivana.jpeg" width={100} height={200} alt="Témoignage 2" />
                        <blockquote>“Grâce à ces projets, j&apos;ai pu aider des personnes dans le besoin et rencontrer des gens formidables !” - Un bénévole</blockquote>
                    </div>
                    <div className='temoignage-item'>
                        <Image src="/mateo.jpeg" width={150} height={200} alt="Témoignage 2" />
                        <blockquote>“Grâce à ces projets, j&apos;ai pu aider des personnes dans le besoin et rencontrer des gens formidables !” - Un bénévole</blockquote>
                    </div>
                </div>
            </div>
        </div>
        /*
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Présentation des projets</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Projets en cours et passés</h2>
                <p>Découvrez nos différentes initiatives : maraudes, levées de fonds, conférences et bien plus.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Inscription</h2>
                <p>Rejoignez-nous en tant que bénévole ou participant :</p>
                <Link href="https://example.com/inscription" target="_blank" className="text-blue-600 underline">S&apos;inscrire ici</Link>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Témoignages</h2>
                <blockquote className="italic border-l-4 pl-4 border-gray-400">“Grâce à ces projets, j&apos;ai pu aider des personnes dans le besoin et rencontrer des gens formidables !” - Un bénévole</blockquote>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Galerie photos & vidéos</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Image src="/bg-hands.jpg" width={300} height={200} alt="Événement 1" />
                    <Image src="/bg-hands.jpg" width={300} height={200} alt="Événement 2" />
                </div>
            </section>
        </div>
        */
    );
}
