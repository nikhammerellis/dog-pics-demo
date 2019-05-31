import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import AllBreeds from './components/AllBreeds';
import SingleBreed from './components/SingleBreed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={AllBreeds} />
        <Route exact path="/:dogbreed" component={SingleBreed} />
      </div>
    );
  }
}

export default App;
