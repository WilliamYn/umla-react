import Link from 'next/link';

export default function Contact() {
    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Nous Contacter</h2>
                <p>Vous avez des questions ou souhaitez proposer un partenariat ? Contactez-nous par email ou via le formulaire ci-dessous.</p>
                <p className="mt-2 font-semibold">Email : <a href="mailto:contact@umla.org" className="text-blue-600 underline">contact@umla.org</a></p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Formulaire de Contact</h2>
                <form className="max-w-lg mx-auto text-left">
                    <label className="block mb-2">Nom :</label>
                    <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Votre nom" />
                    
                    <label className="block mb-2">Email :</label>
                    <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Votre email" />
                    
                    <label className="block mb-2">Message :</label>
                    <textarea className="w-full p-2 border rounded mb-4" placeholder="Votre message"></textarea>
                    
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">Envoyer</button>
                </form>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Suivez-nous sur les réseaux</h2>
                <div className="flex justify-center gap-4">
                    <Link href="https://www.instagram.com/umla_mtl/" target="_blank" className="text-blue-600 underline">Instagram</Link>
                    <Link href="https://www.facebook.com/people/Une-Main-Lave-Lautre-UMLA/61561551389034/?_rdr" target="_blank" className="text-blue-600 underline">Facebook</Link>
                </div>
            </section>
        </div>
    );
}
