import { TextField } from '@mui/material';
import axios from 'axios';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from './Header';
import Box from '@mui/material/Box';

// https://mui.com/components/text-fields
// https://mui.com/components/buttons

const form ={
  margin:"30px 0 20px 0"
}

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: '',
    contributedBy: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // we are gonna send the info on the state to the POST endpoint

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.firstBrewed,
        brewers_tips: this.state.brewersTips,
        attenuation_level: this.state.attenuationLevel,
        contributed_by: this.state.contributedBy,
      })
      .then(() => {
        // simple way to redirect with "history"
        this.props.history.push('/beers');
      })
      .catch((err) => console.log(err));
  };
  // disbaling the button "create" is done similar to the "loading"
  render() {
    return (
      <div>
        <Header />
        <h2 className="h2centered">Add Your Favorite Beer!</h2>

        <form onSubmit={this.handleSubmit} style={form}>
          <Box
            // component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
          >
            <TextField
              onChange={this.handleChange}
              id="outlined-textarea"
              label="name"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name of beer"
              variant="outlined"
              autoComplete="off"
            />
            <br />
            <TextField
              onChange={this.handleChange}
              id="outlined-textarea"
              label="Tagline"
              type="text"
              name="tagline"
              placeholder="Your statement!"
              value={this.state.tagline}
              autoComplete="off"
            />
            <br />
            <TextField
              onChange={this.handleChange}
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              maxRows={3}
              type="text"
              name="description"
              placeholder="Describe the unique taste!"
              value={this.state.description}
              autoComplete="off"
            />
            <br />
            <TextField
              onChange={this.handleChange}
              id="outlined-textarea"
              label="First Brewed"
              type="text"
              name="firstBrewed"
              placeholder="When was it first brewed?"
              value={this.state.firstBrewed}
              autoComplete="off"
            />
            <br />
            <TextField
              onChange={this.handleChange}
              id="outlined-textarea"
              label="Brewers Tips"
              type="text"
              name="brewersTips"
              placeholder="Brewers Tips!"
              value={this.state.brewersTips}
              autoComplete="off"
            />
            <br />
            <TextField
              onChange={this.handleChange}
              id="outlined-textarea"
              label="Attenuation Level"
              type="number"
              name="attenuationLevel"
              placeholder="Attenuation Level"
              value={this.state.attenuationLevel}
              autoComplete="off"
            />
            <br />
            <TextField
              onChange={this.handleChange}
              id="outlined-textarea"
              label="Contributed by"
              type="text"
              name="contributedBy"
              placeholder="Tell us your brewer name!"
              value={this.state.contributedBy}
              autoComplete="off"
            />
            <br />
          </Box>
          <Button type="submit" variant="contained">
            Cheers!{' '}
          </Button>
        </form>
      </div>
    );
  }
}

// creating a ctrl component => form, input fields managed through the state

{
  /* <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name of beer"
          />
          <br />
          <label htmlFor="tagline">tagline</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="tagline"
            value={this.state.tagline}
          />
          <br />
          <label htmlFor="description">description</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
          />
          <br />

          <label htmlFor="firstBrewed">firstBrewed</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="firstBrewed"
            value={this.state.firstBrewed}
          />
          <br />

          <label htmlFor="brewersTips">brewersTips</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="brewersTips"
            value={this.state.brewersTips}
          />
          <br />

          <label htmlFor="attenuationLevel">attenuationLevel</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="attenuationLevel"
            value={this.state.attenuationLevel}
          />
          <br />

          <label htmlFor="contributedBy">contributedBy</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="contributedBy"
            value={this.state.contributedBy}
          />
          <br /> */
}

{
  /* <button type="submit">Cheers! </button> */
}
{
  /* </form> */
}
