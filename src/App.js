import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.repetidor = this.repetidor.bind(this);
    this.state ={ text: ''};
  }

  repetidor(e){
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange={this.repetidor} type="text" placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
