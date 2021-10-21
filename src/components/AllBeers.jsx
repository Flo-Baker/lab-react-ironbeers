import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner'

const allBeersCard ={
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
  textDecoration: "none"
}

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
      <Header/>    
        <h1>See all of our IronBeers</h1>
        <Link to="/new-beer">
        <p>Add Your Favorite!</p>
        </Link>
        {this.state.isLoading && <Spinner animation="grow" />}

        {!this.state.isLoading &&
          this.state.listOfBeers.map((oneBeer) => {
            return (
              <div style={allBeersCard}>                                   
                <Card border="dark" style={{ width: '20rem' }}>
                    <Card.Body>
                <div>
                <Link to={`beers/${oneBeer._id}`}>
                  <Card.Img variant="bottom" src={oneBeer.image_url} height="500px"/>
                  
                    <Card.Title>{oneBeer.name}</Card.Title>
                    </Link>
                    </div>
                    <div>
                    <Card.Text>
                    {oneBeer.tagline}
                    <br />
                    <b>Created by:</b> {oneBeer.contributed_by}
                    </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
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


// -------

// to be added: search fct to look for the favorite beer

// maybe a Link to Add Beer if favorite is not available

// -------

                {/* <Link to={`beers/${oneBeer._id}`}>
                  <img src={oneBeer.image_url} alt="" height="200px" />
                  <h3>{oneBeer.name}</h3>
                </Link>
                <h3>{oneBeer.tagline}</h3>
                <p>Created by: {oneBeer.contributed_by}</p> */}
                {/* <hr/> */}