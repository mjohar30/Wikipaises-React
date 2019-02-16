import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

//Components
import Header from './Header';
import ListaPaises from './ListaPaises';
import Pais from './Pais'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <div>
            <Route exact path ="/"
            component={ListaPaises} />
            <Route exact path="/:pais"
            component={Pais} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
