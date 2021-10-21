import axios from 'axios';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Header from './Header';
import { Spinner } from 'react-bootstrap';

export default class SingleBeer extends Component {
  state = {
    singleBeer: null,
    isLoading: true
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
      <Header/>

        {this.state.isLoading && <Spinner animation="grow" />}

        {!this.state.isLoading && (
          <Card border="dark" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              img
              src={this.state.singleBeer.image_url}
              alt={`Beer: ${this.state.singleBeer.name}`}
              width="300"
              height="500px"
            />
            <Card.Body>
              <Card.Title>{this.state.singleBeer.name}</Card.Title>
              <Card.Text>
                <p>{this.state.singleBeer.tagline}</p>
                <p>{this.state.singleBeer.first_brewed}</p>
                <p>{this.state.singleBeer.attenuation_level}</p>
                <p>{this.state.singleBeer.description}</p>
                <p>contributed by: {this.state.singleBeer.contributed_by}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

// see AllBeers Component => calling the API via axios, updating the state, displaying information

// params when accessing info from the URL
