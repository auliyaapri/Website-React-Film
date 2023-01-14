import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import batman from "../assets/superhero/batman.jpg";
import blackpanther from"../assets/superhero/blackpanther.jpg";
import spiderman from"../assets/superhero/spiderman.jpg";
import ironman from"../assets/superhero/ironman.jpg";
import aquaman from"../assets/superhero/aquaman.jpg";


const Superhero = () => {
  return (
    <div>
     <Container>
        <br></br>
        <h1 className="text-white text-center mt-5">SUPERHERO MOVIES</h1>
        <Row className="gx-0 d-flex justify-content-center">
          <Col md={4}className="movieWrapper mt-5 d-flex justify-content-center" id="superhero">
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
            <Image src={blackpanther} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Black Panther</Card.Title>
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
                <Card.Title className="text-center mt-3">Spiderman 2</Card.Title>
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
            <Image src={ironman} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Iron Man 3</Card.Title>
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
            <Image src={aquaman} alt="Dune Movies" className="images" />
            <div className="bg-dark">
                <Card.Title className="text-center mt-3">Aquaman</Card.Title>
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

export default Superhero;
