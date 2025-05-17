// DonsPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DonsPage = () => {
    return (
      <section className="causes-details">
        <Container>
          <Row>
            <Col xl={12} lg={12}>
              <div className="content-wrapper">
              <h2 className="section-subtitle">Où vont mes dons ?</h2>
                <p>À UMLA, 100 % de nos membres sont bénévoles : aucun salaire, aucun avantage personnel. Chaque dollar
reçu est utilisé sur le terrain, sans intermédiaire, pour venir en aide aux plus démunis. Nous refusons les frais
administratifs inutiles ou les dépenses cachées. Votre argent ne finance pas des bureaux, mais des repas
chauds, des vêtements, du transport et des actions concrètes.</p>                
                <p className="highlight-phrase">Voici comment vos dons sont utilisés :</p>

                <ul className="bullet-points">
                <li>Maraudes humanitaires : repas, vêtements, produits d'hygiène pour les sans-abris.</li>
                <li>Paniers alimentaires : soutien aux familles vulnérables à travers la ville.</li>
                <li>Événements caritatifs : iftars, soupers solidaires, collectes de fonds pour des causes urgentes.</li>
                <li>Logistique sur le terrain : achat de matériel de distribution, sécurité des bénévoles, transport.</li>
                </ul>

                <p>Chaque geste compte. Grâce à votre générosité, nous construisons une chaîne humaine forte, où l'entraide
                et la dignité sont au cur de nos actions.</p>
                
                <h2 className="section-subtitle">Aspect retour fiscal</h2>
                <div className="paragraphs">
                  <p>Faire un don à UMLA, c'est bien plus qu'un simple geste de générosité : c'est un acte concret de solidarité...
et un avantage fiscal. En tant qu'organisme enregistré, UMLA remet des reçus officiels pour que vos dons
soient déductibles d'impôt. Autrement dit, une partie de votre don vous revient lors de votre déclaration
annuelle - vous contribuez à un impact réel tout en bénéficiant d'un retour fiscal avantageux.</p>
                <p>C'est une façon intelligente de contribuer à un changement positif, tout en allégeant votre fardeau fiscal. Que
vous donniez 20$, 100$ ou plus, chaque contribution peut être déclarée et soutient une cause locale,
humaine et transparente. Donner fait du bien, et fait aussi du sens.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default DonsPage;

