import React, { Component } from 'react';
import logo from './logo.svg';
import Background from './Background';
import {Grid,Row} from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First API</h1>
        <hr style={{borderBottom: '2px solid black' , width:'5%'}}/>
        <Grid fluid>
        <Row>
          <div className="jumbotron">
          <Background/>
          </div>
        </Row>
        </Grid>
      </div>
      );
  }
}

export default App;
