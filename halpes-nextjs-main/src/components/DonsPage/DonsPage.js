// DonsPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dons from '@/data/donsPage.json';

const DonsPage = () => {
    return (
      <section className="causes-details dons-page">
        <Container>
          <Row>
            <Col xl={12} lg={12}>
              <div className="causes-details__text-box">
                <h3>{dons.titleA}</h3>
                <p>{dons.paragraphsA[0]}</p>
                <p className="highlight-phrase">{dons.paragraphsA[1]}</p>

                <div className="causes-details__summary-list">
                    <ul className="causes-details__summary-list-box list-unstyled">
                        {dons.list.map((item, idx) => (
                          <li key={idx}>
                            <div className="icon">
                                <i className="fas fa-arrow-circle-right"></i>
                            </div>
                            <div className="text">
                                <p>{item}</p>
                            </div>
                          </li>
                        ))}
                    </ul>
                </div>

                <h3>{dons.titleB}</h3>
                <div className="paragraphs">
                    <p>{dons.paragraphsB[0]}</p>
                    <p>{dons.paragraphsB[1]}</p>
                </div>
                <div className="buttons_don_section">
                    <a href={dons.donateLink} className="causes-details__share-btn thm-btn donate-btn-donate-page" rel="noreferrer" target="_blank">{dons.donateButtonLabel}</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default DonsPage;

