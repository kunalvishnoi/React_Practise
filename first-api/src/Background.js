import React, { Component } from 'react';
class Background extends Component {
  constructor(){
    super();
    this.state = {
      picture: [] ,
      name: ''
    };
  }
   componentWillMount() {
    fetch('https://randomuser.me/api/?result=500')
    .then(results => {
      return results.json();
    }).then(data => {
      const pictures = data.results.map((data) => {
        return(
          <div>
          <div key={data.results}>
           <h4 style={{textTransform: 'upperCase'}}>{data.name.first} {data.name.last}</h4>
          <img src={data.picture.large}/>
          </div>
          </div>
          )
      })
      this.setState({pictures: pictures});
      console.log("state", this.state.picture);
    })
   }
   render() {
    return (
    <div>
    <p>
    {this.state.pictures}
    </p>

    </div>
    );
   }
}
export default Background;
