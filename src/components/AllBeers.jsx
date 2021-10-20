import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class AllBeers extends Component {
  state = {
    listOfBeers: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data);
        this.setState({ listOfBeers: response.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <h1>All Beers!</h1>

        {this.state.isLoading && <h1>...Loading</h1>}

        {!this.state.isLoading &&
          this.state.listOfBeers.map((oneBeer) => {
            return (
              <div>
                <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                <Link to={`beers/${oneBeer._id}`}>
                  <Card.Img variant="top" src={oneBeer.image_url} height="500px"/>
                  
                    <Card.Title>{oneBeer.name}</Card.Title>
                    </Link>
                    <Card.Text>
                    {oneBeer.tagline}
                    <br />
                    Created by: {oneBeer.contributed_by}
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* <Link to={`beers/${oneBeer._id}`}>
                  <img src={oneBeer.image_url} alt="" height="200px" />
                  <h3>{oneBeer.name}</h3>
                </Link>
                <h3>{oneBeer.tagline}</h3>
                <p>Created by: {oneBeer.contributed_by}</p> */}
                {/* <hr/> */}
              </div>
            );
          })}
      </div>
    );
  }
}

export default AllBeers;

// Question: how to remove the <...> in contributed_by?!

// listOfBeers null => empty array at the beginning

// lifecycle methods always ES5

// asynchronous behaviour => promise => then catch

// always possible to check

// map => for rendering data from API

// isLoading in the state is fixing the error before executing the map
