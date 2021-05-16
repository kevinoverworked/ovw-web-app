import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from "./templates/card"

class App extends Component {
  /*constructor (props) {
    super(props);
    this.state = {
      response: {}
    };
  }*/
  state = {
    response: {}
  }
  componentDidMount() {
    axios.get("/api/v1/dashboard", { responseType: "json"}).then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    console.log(JSON.stringify(this.state.response.card));
    return (
     
      <div className="App">
        <Card dataObject={this.state.response} />
      </div>

      
    );
  }
}

export default App;