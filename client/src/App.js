import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from "./templates/card"

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      response: {},
      isLoading: true
    };
  }
  /*state = {
    response: {}
  }*/
  /*componentDidMount() {
    axios.get("/api/v1/dashboard").then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  componentDidMount () {
    fetch("/api/v1/dashboard").then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }*/

  componentDidMount() {
    
    /*fetch("api/v1/dashboard")
    .then(res => res.json())
    .then((res) => {
      this.setState({response: res.data, isLoading: false});
    })
    .catch(error => {
      console.log("error = " + error);
    });*/
    axios.get("/api/v1/dashboard")
    .then((res) => {
      //const response = res.data;
      this.setState({
        response: res.data,
        isLoading: false
      });
      console.log("response.data lin 35 = " + JSON.stringify(res.data));
    })
    .catch(error => {
      console.log("error = " + error);
    });
  }

  render() {
    console.log("App.js" + JSON.stringify(this.state.response));
    return (
     
      <div className="App">
        {!this.state.isLoading ? <Card dataObject={this.state.response} /> : console.log("loading") }
      </div>

      
    );
  }
}

export default App;