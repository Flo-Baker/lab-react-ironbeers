import axios from 'axios';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Header from './Header';
import { Spinner } from 'react-bootstrap';

const singleBeer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const singleBeerInfo = {
  display: 'flex',
  justifyContent: 'center',
};

export default class SingleBeer extends Component {
  state = {
    singleBeer: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ singleBeer: response.data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div style={singleBeer}>
          {this.state.isLoading && <Spinner animation="grow" />}

          {!this.state.isLoading && (
            <Card border="dark" style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                img
                src={this.state.singleBeer.image_url}
                alt={`Beer: ${this.state.singleBeer.name}`}
                height="400px"
              />
              <Card.Body>
                <h3>{this.state.singleBeer.name}</h3>
                <Card.Text>
                  <h4>{this.state.singleBeer.tagline}</h4>
                  <div style={singleBeerInfo}>
                    <p>
                      {this.state.singleBeer.first_brewed} |{' '}
                      <b> {this.state.singleBeer.attenuation_level}</b>
                    </p>
                  </div>
                  <p>{this.state.singleBeer.description}</p>
                  <p><b>contributed by:</b> {this.state.singleBeer.contributed_by}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

// see AllBeers Component => calling the API via axios, updating the state, displaying information

// params when accessing info from the URL
