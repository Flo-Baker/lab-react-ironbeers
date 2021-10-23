import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headBeerImg from "../assets/head-beer.png"

const headStyle = {
    display: "block",
}

export default function Header() {
  return (
    <div>
      <Navbar bg="dark">
      <Container style={headStyle}>
          <Link to="/">
            <img
              src={headBeerImg} alt="beer-header"
              width="30"
              height="30"
              className="d-inline-block align-top"              
            />
          </Link>
          </Container>
      </Navbar>
    </div>
  );
}
