// DonsPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DonsPage = () => {
    return (
      <section className="causes-details dons-page">
        <Container>
          <Row>
            <Col xl={12} lg={12}>
              <div className="causes-details__text-box">
                <h3>Où vont mes dons ?</h3>
                <p>À UMLA, 100 % de nos membres sont bénévoles : aucun salaire, aucun avantage personnel. Chaque dollar reçu est utilisé sur le terrain, sans intermédiaire, pour venir en aide aux plus démunis. Nous refusons les frais administratifs inutiles ou les dépenses cachées. Votre argent ne finance pas des bureaux, mais des repas chauds, des vêtements, du transport et des actions concrètes.</p>
                <p className="highlight-phrase">Voici comment vos dons sont utilisés :</p>

                <div className="causes-details__summary-list">
                    <ul className="causes-details__summary-list-box list-unstyled">
                        <li>
                            <div className="icon">
                                <i className="fas fa-arrow-circle-right"></i>
                            </div>
                            <div className="text">
                                <p>Maraudes humanitaires : repas, vêtements, produits d&apos;hygiène pour les sans-abris.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fas fa-arrow-circle-right"></i>
                            </div>
                            <div className="text">
                                <p>Paniers alimentaires : soutien aux familles vulnérables à travers la ville.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fas fa-arrow-circle-right"></i>
                            </div>
                            <div className="text">
                                <p>Événements caritatifs : iftars, soupers solidaires, collectes de fonds pour des causes urgentes.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fas fa-arrow-circle-right"></i>
                            </div>
                            <div className="text">
                                <p>Logistique sur le terrain : achat de matériel de distribution, sécurité des bénévoles, transport.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <p>Chaque geste compte. Grâce à votre générosité, nous construisons une chaîne humaine forte, où l&apos;entraide
                et la dignité sont au cur de nos actions.</p>

                <h3>Aspect retour fiscal</h3>
                <div className="paragraphs">
                    <p>Faire un don à UMLA, c&apos;est bien plus qu&apos;un simple geste de générosité : c&apos;est un acte concret de solidarité... et un avantage fiscal. En tant qu&apos;organisme enregistré, UMLA remet des reçus officiels pour que vos dons soient déductibles d&apos;impôt. Autrement dit, une partie de votre don vous revient lors de votre déclaration annuelle - vous contribuez à un impact réel tout en bénéficiant d&apos;un retour fiscal avantageux.</p>
                    <p>C&apos;est une façon intelligente de contribuer à un changement positif, tout en allégeant votre fardeau fiscal. Que vous donniez 20$, 100$ ou plus, chaque contribution peut être déclarée et soutient une cause locale, humaine et transparente. Donner fait du bien, et fait aussi du sens.</p>
                            </div>
                            <div className="buttons_don_section">
                                <a href="https://www.zeffy.com/fr-CA/donation-form/08a0cabd-d6a7-4624-8f7f-be381829084b" className="causes-details__share-btn thm-btn donate-btn-donate-page" rel="noreferrer" target="_blank">Donner</a>
                            </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default DonsPage;

