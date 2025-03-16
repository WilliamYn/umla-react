import Image from 'next/image';

export default function NotreHistoire() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Notre Histoire</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Origine et Fondation</h2>
                <p>UMLA a été créé avec la mission d’aider les personnes dans le besoin en fournissant des repas, des kits d’hygiène et du soutien moral. Fondé en [année], l’organisme a grandi grâce à l’engagement des bénévoles et au soutien de la communauté.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Frise Chronologique</h2>
                <ul className="timeline list-disc list-inside text-left mx-auto max-w-lg">
                    <li><strong>[Année 1]</strong> - Création de UMLA et premières actions</li>
                    <li><strong>[Année 2]</strong> - Première levée de fonds réussie</li>
                    <li><strong>[Année 3]</strong> - Expansion des projets d’aide</li>
                    <li><strong>[Année X]</strong> - Développement de nouveaux programmes</li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Galerie Photo Interactive</h2>
                <div className="grid grid-cols-3 gap-4">
                    <Image src="/bg-hands.jpg" width={200} height={150} alt="Début de UMLA" />
                    <Image src="/bg-hands.jpg" width={200} height={150} alt="Premier événement" />
                    <Image src="/bg-hands.jpg" width={200} height={150} alt="Bénévoles en action" />
                </div>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Mots des Fondateurs et Bénévoles</h2>
                <blockquote className="italic border-l-4 pl-4 border-gray-400">“Nous avons commencé avec une idée simple : aider notre communauté. Aujourd’hui, UMLA est une famille unie par la solidarité.” - Un fondateur</blockquote>
                <blockquote className="italic border-l-4 pl-4 border-gray-400 mt-4">“Être bénévole ici m’a changé la vie. J’ai rencontré des personnes incroyables et appris l’importance du don de soi.” - Un bénévole</blockquote>
            </section>
        </div>
    );
}
