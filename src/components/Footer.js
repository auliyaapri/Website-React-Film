import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <div className="footer bg-dark text-white pt-5">
      <Container>
        <Row>
          <Col className="col-12 col-md-3">
            <h3 className="judul-footer">Santuy Movie</h3>
            <p>
              Santuy movie merupakan website penyedia layanan streaming gratis
              yang cocok banget dikunjungi kalau gabut cuy. 👍
            </p>
          </Col>
          <Col className="col-12 col-md-3">
            <h3 className="judul-footer">Alamat</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              ex nostrum optio? Voluptatum debitis cumque ullam expedita,
              pariatur commodi perspiciatis.
            </p>
          </Col>
          <Col className="col-12 col-md-3">
            <h3 className="judul-footer">Kontak</h3>
            <div className="contact">
              <i className="fa fa-phone"></i>
              <p>+ 89677058544</p>
            </div>
            <div className="contact">
              <i className="fa fa-envelope"></i>
              <p>santuymovie@gmail.com</p>
            </div>
          </Col>
          <Col className="col-12 col-md-3">
            <h3 className="judul-footer">Social Media</h3>
            <div className="social-media mt-3">
              <i className="fa fa-whatsapp"></i>
              <i className="fa fa-instagram ms-3"></i>
              <i className="fa fa-youtube ms-3"></i>
              <i className="fa fa-twitter ms-3"></i>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <hr className="text-white">
          </hr>
          <h6 className="text-center pb-4">Copyright Created By: Apri Wiguna</h6>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
