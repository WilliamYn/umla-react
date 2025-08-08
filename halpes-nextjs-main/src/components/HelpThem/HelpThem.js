import helpThemJson from "@/data/helpThem.json";
import VideoData from "@/data/videoData.json";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import Video from "./Video";
import VideoModal from "./VideoModal";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const HelpThem = () => {
  const [isOpen, setOpen] = useState(false);
  const { id } = VideoData;
  const items = helpThemJson.items || [];

  return (
    <>
      <section className="help-them">
        <Jarallax className="help-them-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src="/images/backgrounds/umla-bg-1.jpg" />
          <Container>
            <div className="help-them__top">
              <Row>
                <Col xl={6} lg={6}>
                  <div className="help-them__top-content">
                    <h2 className="help-them__top-content-title">
                      {helpThemJson.topTitle}
                    </h2>
                  </div>
                </Col>
                <Col xl={6} lg={6}>
                  <Video setOpen={setOpen} />
                </Col>
              </Row>
            </div>
            <div className="help-them__bottom" style={{ display: "none" }}>
              <Row>
                {items.map(({ id, title, subTitle, icon }) => (
                  <Col xl={6} lg={6} key={id}>
                    <div className="help-them__single">
                      <div className="help-them__icon">
                        <span className={icon}></span>
                      </div>
                      <div className="help-them__text">
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </Jarallax>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={id} />
    </>
  );
};

export default HelpThem;
