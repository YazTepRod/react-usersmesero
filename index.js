import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Name extends Component{
  constructor(props){
    super(props);
    this.state = {
 name:''
    };
  }


syncNameChange(name){
  this.setState({
    name: name
  })
}

submitChange= ()=>{
  console.log(this.state);
}

  render(){
    return(
  <div>
   <input 
    onChange ={(ev)=>{ this.syncNameChange(ev.target.value) }}
    type="name"
    value={ this.state.name }
    placeholder ="name"/>
  <input 
   onClick={ this.submitChange }
   type="submit" 
   placeholder = "Ingresar"/>
</div>
    )
 }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
      <Name/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
