import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import TextEffect from "./Banner.TextEffect";

const Banner = () => {
  const texts = ["web Developer", "web Designer", "UI/UX Designer"];
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm `} <TextEffect content={texts} />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias maiores explicabo blanditiis maxime dignissimos.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={24} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
