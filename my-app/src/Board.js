import React from 'react';
import CellContainer from './CellContainer.js';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import './App.css';

const Board = (props) => {
  let initialComponent;
  const boardToRender = [];
  console.log(props.board.board)
  if (props.board.board.lose) {
    initialComponent = 
    <div className="LOSS">
      <h1>MINE</h1>
      <h1>MINE</h1>
      <h1>MINE</h1>
      <h1>MINE</h1>
      <h1>MINE</h1>
      <h1>MINE</h1>
      <h1>MINE</h1>
      <h1>MINE</h1>
    </div>
  } else {
    props.board.board.forEach(part => {
      boardToRender.push(
        <tr> 
          {
            part.map((item) => {
              const cell = 
              <td>
                <CellContainer 
                  isOpened={item.isOpened} 
                  count={item.count} 
                  index={item.x} 
                  y={item.y}
                  hasMine={item.hasMine}
                />
              </td>
              return cell;
            })
          }
        </tr>
      )
    });
  initialComponent =     
    <table>
      <tbody>
        {boardToRender}
      </tbody>
    </table>;
  }
  return (
    initialComponent
  );
}

export default Board;
