

import Link from 'next/link';

export default function Fonds() {
    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Utilisation des Fonds</h1>
            
            <p className="text-lg mb-6">Avec 10$, vous offrez un repas à une personne démunie.</p>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">À quoi servent vos dons ?</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg">
                    <li>Repas pour les sans-abris</li>
                    <li>Kits d’hygiène</li>
                    <li>Aides spécifiques selon les besoins</li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Faites un don</h2>
                <div className="flex flex-col items-center gap-4">
                    <Link href="https://www.zeffy.com" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                        Faire un don via Zeffy
                    </Link>
                    <div className="flex gap-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700">Don ponctuel</button>
                        <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-700">Don mensuel</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700">Don par projet</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
