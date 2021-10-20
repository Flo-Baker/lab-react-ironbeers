import React, { Component } from 'react'
import { Link } from "react-router-dom"
import beersImg from "../assets/beers.png"
import randomImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

class Home extends Component {
    render() {
        return (
            <div>
                <h1>PUB</h1>
                <Link to="/beers">
                    <img src={beersImg} alt="beers"/>
                    <h1>Beers!</h1>
                    <p>About Beers</p>
                </Link>
                <Link to="/random-beer">
                    <img src={randomImg} alt="random-beer"/>
                    <h1>Random Beer</h1>
                    <p>Random Beers</p>
                </Link>
                <Link to="/new-beer">
                    <img src={newBeerImg} alt="new-beer"/>
                    <h1>Add new Beer!</h1>
                    <p>Create Beer</p>
                </Link>
            </div>
        )
    }
}

export default Home
// class component because of changing states

// look for assets folder when its about img
// import the elements as src files (all for better performance)
// see the spinning logo from react