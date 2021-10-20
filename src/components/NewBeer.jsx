import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewersTips: "",
        attenuationLevel: "",
        contributedBy: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // we are gonna send the info on the state to the POST endpoint
    
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.firstBrewed,
            brewers_tips: this.state.brewersTips,
            attenuation_level: this.state.attenuationLevel,
            contributed_by: this.state.contributedBy
        })
        .then( () => {
            // simple way to redirect with "history"
            this.props.history.push("/beers")
        })
        .catch((err) => console.log(err))
    }
// disbaling the button "create" is done similar to the "loading"
    render() {
        return (
            <div>
            <Link to="/"> <h1>PUB</h1> </Link>
                <h1>Add Beer Form</h1>

                <form onSubmit = {this.handleSubmit}>

                <label htmlFor="name">name</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="name of beer"/>
                <br />
                <label htmlFor="tagline">tagline</label>
                <input onChange={this.handleChange} type="text" name="tagline" value={this.state.tagline}/>
                <br />
                <label htmlFor="description">description</label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
                <br />

                <label htmlFor="firstBrewed">firstBrewed</label>
                <input onChange={this.handleChange} type="text" name="firstBrewed" value={this.state.firstBrewed}/>
                <br />

                <label htmlFor="brewersTips">brewersTips</label>
                <input onChange={this.handleChange} type="text" name="brewersTips" value={this.state.brewersTips}/>
                <br />

                <label htmlFor="attenuationLevel">attenuationLevel</label>
                <input onChange={this.handleChange} type="number" name="attenuationLevel" value={this.state.attenuationLevel}/>
                <br />

                <label htmlFor="contributedBy">contributedBy</label>
                <input onChange={this.handleChange} type="text" name="contributedBy" value={this.state.contributedBy}/>
                <br />

                <button type="submit">Cheers! </button>

                </form>

            </div>
        )
    }
}

// creating a ctrl component => form, input fields managed through the state
