import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';
import headBeerImg from '../assets/head-beer.png';
import { Card } from 'react-bootstrap';

const home = {
  textDecoration: 'none',
};

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          WELCOME TO THE IRONPUB{' '}
          <img src={headBeerImg} alt="beer-header" width="30" height="30" />
        </h1>
        <Card border="light">
          <Card.Body>
            <Link to="/beers" style={home}>
              <Card.Img variant="top" src={beersImg} alt="beers" />
              <Card.Text>
                <h2>Beers!</h2>
                <p>See all of our beers and pick your favorite!</p>
              </Card.Text>
            </Link>
          </Card.Body>
        </Card>

        {/* -- */}

        <Card border="light">
          <Card.Body>
            <Link to="/random-beer" style={home}>
              <Card.Img variant="top" src={randomImg} alt="random-beer" />
              <Card.Text>
                <h2>Random Beer</h2>
                <p>
                  Hard to decide which you want to drink? Just try out a random
                  one!
                </p>
              </Card.Text>
            </Link>
          </Card.Body>
        </Card>

        {/* {--} */}

        <Card border="light">
          <Card.Body>
            <Link to="/new-beer" style={home}>
              <Card.Img variant="top" src={newBeerImg} alt="new-beer" />
              <Card.Text>
                <h2>Add new Beer!</h2>
                <p>You can't find your favorite on our list? Just add it!</p>
              </Card.Text>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;

// class component because of changing states

// look for assets folder when its about img
// import the elements as src files (all for better performance)
// see the spinning logo from react

// ------

// maybe a button instead of the <p>

// ------

{
  /* <Link to="/beers" style={home}>
          <img src={beersImg} alt="beers" />
          <h2 className="home">Beers!</h2>
          <p>See all of our beers and pick your favorite!</p>
        </Link>
        <hr />
        <Link to="/random-beer" style={home}>
          <img src={randomImg} alt="random-beer" />
          <h1>Random Beer</h1>
          <p>
            Hard to decide which you want to drink? Just try out a random one!
          </p>
        </Link>
        <Link to="/new-beer" style={home}>
          <img src={newBeerImg} alt="new-beer" />
          <h2>Add new Beer!</h2>
          <p>You can't find your favorite on our list? Just add it!</p>
        </Link> */
}
