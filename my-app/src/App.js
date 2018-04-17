import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardContainer from './BoardContainer.js';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDegrees: 0,
    }
  }
  render() {
    let currentDegrees = this.state.currentDegrees;
    const rotate90 = keyframes`
      from {
        transform: rotate(${currentDegrees}deg);
      }

      to {
        transform: rotate(${currentDegrees + 90}deg);
      }
    `;
    const Rotate = styled.div`
      display: inline-block;
      animation: ${rotate90} 6s linear;
      -webkit-animation-fill-mode: forwards; 
      padding: 2rem 1rem;
      font-size: 1.2rem;
    `;
    const rotateComponent =  
      <Rotate>   
        <table>
          <tbody className="Board">
            <BoardContainer />
          </tbody>
        </table>
      </Rotate>
    let start = -90;
    setInterval(() => {
      this.setState({
        currentDegrees: this.state.currentDegrees + 90,
      })
    }, 12000);


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MineSweeper</h1>
        </header>
      <div className="App-intro">
        {rotateComponent}
      </div>
      </div>
    );
  }
}

export default App;
