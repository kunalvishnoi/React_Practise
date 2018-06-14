import React, { Component } from 'react';
import logo from './logo.svg';
import list from './list';
import {Grid,Row,FormGroup} from 'react-bootstrap';
import './App.css';

function isSearched(searchTerm){
  return function(item){
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: list,
      searchTerm:''
    }
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }
  removeItem(id){
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList});
  }
  searchValue(event){
  // console.log(event)
  this.setState({ searchTerm: event.target.value });
 }
  render() {
    return (
      <div className="App">
        <Grid fluid>
        <Row>
          <div className="jumbotron">
            <form>
          <input type="text" onChange={ this.searchValue } />
        </form>
          </div>
        </Row>
        </Grid>

      {
        this.state.list.filter( isSearched(this.state.searchTerm) ).map(item =>
          <div key={ item.objectID }>
            <h1> <a href={item.url} target="_blank"> {item.title}</a> </h1>
            <hr style={{border:'2px solid black',width:'100px'}}/>
            <p> by {item.author} </p>
            <h4> {item.point} ||  {item.objectID} </h4>
            <button className="btn btn-danger" type="button" onClick={  () => this.removeItem(item.objectID) } >Remove</button>
          </div>
          )
      }
      </div>
      );
  }
}

export default App;
