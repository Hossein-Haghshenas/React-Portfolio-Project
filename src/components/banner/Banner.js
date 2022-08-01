import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import TextEffect from "./Banner.TextEffect";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const texts = ["web Developer", "web Designer", "UI/UX Designer"];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <section
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm `} <TextEffect content={texts} />
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis alias maiores explicabo blanditiis maxime
                    dignissimos.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={24} />
                  </button>
                </section>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <section
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="header banner" />
                </section>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
