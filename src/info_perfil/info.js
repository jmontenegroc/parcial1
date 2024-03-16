import { Col, Container, Row } from "react-bootstrap";
import "./info.css";

const Info = (props) => {
  return (
    <div>
      <Container>
        <Row id="general">
          <Col xs={5}>
            <img src={props.perfil.pfp} alt="pfp"></img>
          </Col>
          <Col xs={5} id="text">
            <h4>{props.perfil.usuario}</h4>
            <p>{props.perfil.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;