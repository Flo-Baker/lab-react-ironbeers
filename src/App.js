import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';

function App() {

// const isBgGrey = true;

  return (
    // <div className={isBgGrey ? "bg-grey" : "bg-blue"}>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" exact component={AllBeers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/beers/:id" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
