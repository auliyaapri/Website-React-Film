import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";

function Intro() {
  return (
    <div>
      <div className="intro mt-5">
        <Container className="text-white text-center d-flex justify-content-center align-align-items-end mt-5">
          <Row>
            <Col>
              <div className="title">Sambil rebahan, sambil</div>
              <div className="title">nonton movie pastinya</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Intro;
