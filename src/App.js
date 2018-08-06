import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import MainContainer from "./containers/MainContainer";

class App extends Component {

  componentDidMount(){
  const key = "88c0871b1c32feaf2082dc168d45b14e";
  const request = new XMLHttpRequest();
  request.open("GET", "http://data.fixer.io/api/latest?access_key=" + key);
  request.onload = function () {
    if (request.status === 200) {
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(data.rates)
      ReactDOM.render(
        <MainContainer rates={data.rates} />,
        document.getElementById('root')
      );
    }
  };
  request.send();
}

  render() {
    return null;
  }
}

export default App;
