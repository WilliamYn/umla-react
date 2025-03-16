import Link from 'next/link';

export default function Impliquer() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">S&rsquo;impliquer</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Pourquoi devenir bénévole ?</h2>
                <p>Rejoindre UMLA, c&rsquo;est avoir un impact direct sur la vie des personnes dans le besoin. Vous ferez partie d&rsquo;une communauté solidaire et engagée.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Rôles disponibles</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg">
                    <li><strong>Maraudeur :</strong> Distribution de repas et soutien aux sans-abris.</li>
                    <li><strong>Organisateur d&rsquo;événements :</strong> Planification et gestion des actions de UMLA.</li>
                    <li><strong>Communication :</strong> Sensibilisation et gestion des réseaux sociaux.</li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Rejoindre l&rsquo;équipe</h2>
                <p>Remplissez notre formulaire pour devenir bénévole :</p>
                <Link href="https://example.com/inscription" target="_blank" className="text-blue-600 underline">S&apos;inscrire ici</Link>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
                <details className="mb-2">
                    <summary className="font-semibold cursor-pointer">Quel est l&rsquo;engagement minimum requis ?</summary>
                    <p className="mt-2">Il n&rsquo;y a pas d&rsquo;engagement minimum, vous pouvez participer selon vos disponibilités.</p>
                </details>
                <details className="mb-2">
                    <summary className="font-semibold cursor-pointer">Faut-il une expérience préalable ?</summary>
                    <p className="mt-2">Non, toute personne motivée est la bienvenue !</p>
                </details>
            </section>
        </div>
    );
}
