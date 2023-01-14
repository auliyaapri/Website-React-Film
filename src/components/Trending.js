import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import batman from "../assets/trending/batman.jpg";
import whoami from"../assets/trending/whoami.jpg";
import spiderman from"../assets/trending/spiderman.jpg";
import toystory4 from"../assets/trending/toystory4.jpg";
import raya from"../assets/trending/raya.jpg";
import kimi_no_nawa from"../assets/trending/kimi_no_nawa.jpg";

const Trending = () => {
  return (
    <div>
      <Container className="pb-5">
        <br></br>
        <h1 className="text-white text-center mt-5">TRENDING MOVIES</h1>
        <Row className="gx-0 d-flex justify-content-center">
          <Col md={4}className="movieWrapper mt-5 d-flex justify-content-center" id="trending">
            <Card className="bg-white text-white movieImage"style={{width: "85%"}}>
            <Image src={batman} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Batman</Card.Title>
                <Card.Text className="text-left p-2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                </div>
              
            </Card>
          </Col>

          <Col md={4} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="bg-white text-white movieImage"style={{width: "85%"}}>
            <Image src={whoami} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Who AM I</Card.Title>
                <Card.Text className="text-left p-2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="bg-white text-white movieImage"style={{width: "85%"}}>
            <Image src={spiderman} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Spiderman</Card.Title>
                <Card.Text className="text-left p-2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="bg-white text-white movieImage"style={{width: "85%"}}>
            <Image src={toystory4} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Toy Story 4</Card.Title>
                <Card.Text className="text-left p-2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="bg-white text-white movieImage"style={{width: "85%"}}>
            <Image src={raya} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Raya</Card.Title>
                <Card.Text className="text-left p-2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="bg-white text-white movieImage"style={{width: "85%"}}>
            <Image src={kimi_no_nawa} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Your Name</Card.Title>
                <Card.Text className="text-left p-2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                </div>
              
            </Card>
          </Col>


    
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
