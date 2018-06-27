import React, { Component } from 'react';
import superagent from 'superagent'; 
class Protected extends Component {
  constructor() {
    super();
    this.state = {
      todo: []
    }
  }

  getAuthenticationToken() {
    return localStorage.getItem('token');
  }
  componentDidMount() {
    const new_token = localStorage.getItem('token');
    superagent
      .get('http://54.157.21.6:8080/todos')
      .set("Content-Type", "application/json")
      .set('x-auth' , this.getAuthenticationToken())
      .then(res => {
        const todo = res.body.todos;
         this.setState({ todo: todo });
          // console.log(this.state.todo);       
      })
      .catch(err => {
        console.log("error", err);
      });
  }
render() {
  // const mytodos = this.state.todo.map((my) => {
  //   return(
  //     <div>
  //     <h4>{my.text}</h4>
  //     </div>
  //     );
  // });
  return (
    <div className="App"> 
    <h1 style={{textAlign: 'center'}}>TODOS</h1>
    <br/>
      {this.state.todo.map(data => {
          return (
              <div key="data._id">
              <h3 style={{display: 'inline-block'}}>
              {this.state.todo.indexOf(data)+1} )
              </h3>
                <h3 style={{ textTransform: "upperCase" , display: 'inline-block' }}>
                  {data.text}
                </h3>
                </div>
              
          );
        })}
    </div>
    );
  }
}
export default Protected;
