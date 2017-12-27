import React, { Component } from 'react';
import './App.css';

let defaultTextColor="#fff";
let defaultStyle={
  color: defaultTextColor
};

class Aggregate extends Component {
  render(){
    return(
      <div style={{...defaultStyle, width:"40%", display:"inline-block"}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return(
      <div style={defaultStyle}>
        <img src="" alt=""/>
        <input type="text" name="" id=""/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return(
      <div style={{...defaultStyle, width:"20%", display: "inline-block", backgroundColor: "blue",
                border: "0.5px solid black",padding:"0", margin:"2 ,2, 2, 2"}}>
        <img src="" alt=""/>
        <h3>Playlist Name</h3>
        <ul style={{listStyleType:"none", padding:"0"}}>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div  className="App" >
        <h1 style={{...defaultStyle, "font-size":"54px"}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
