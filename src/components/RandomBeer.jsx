import axios from 'axios';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  
    state = {
        randomBeer: null,
        isLoading: true
    }
  
    componentDidMount() {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
            console.log(response.data)
            this.setState({ randomBeer: response.data, isLoading: false })
        })
        .catch((err) => (err));
    }

    render() {
    return (
      <div>
        <Link to="/">
          <h1>PUB</h1>
        </Link>
        <h2>Try your random beer!</h2>

        {this.state.isLoading && <h3>...Loading</h3>}

        {!this.state.isLoading && (

        <Card border="succes 2px" style={{ width: '18rem' }}>
        <Card.Img
              variant="top"
              img
              src={this.state.randomBeer.image_url}
              alt={`Beer: ${this.state.randomBeer.name}`}
              width="300"
              height="500px"
            />
            <Card.Title>
            {this.state.randomBeer.name}
            </Card.Title>
            <Card.Body>
              <Card.Title>{this.state.randomBeer.name}</Card.Title>
              <Card.Text>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.attenuation_level}</p>
                <p> {this.state.randomBeer.description}</p>
                <p> contributed by: {this.state.randomBeer.contributed_by}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        )
        }

      </div>
    );
  }
}

// first things first

// -> adding the header link

// -> state randomBeer + isLoading, method: componentDidMount

// -> axios for the api; endpoint = /random
// => when receiving data from an api (.get) with axios = promise (then, catch)
// (console.log the response to see the incoming data in chrome)
// => that is when the setState method is needed
// => meaning getting the response from api and setting isLoading to false 

// render everything:

// -> <h2>isLoading</h2> later to be replaced through spinning wheel
// -> set


// putting the result in a nice looking card, maybe different from SingleBeer when time