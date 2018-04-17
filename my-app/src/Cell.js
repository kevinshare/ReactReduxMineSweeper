import React from 'react';
import ToggleDisplay from 'react-toggle-display';

const Cell = (props) => {
  let style;
  let textStyle;
  let pic;
  let pictures = [
  'https://png.pngtree.com/element_pic/17/03/25/ae2be2779e4fd29c304f669046763d4a.jpg',
  'https://vignette.wikia.nocookie.net/fallout/images/0/01/PulseMine.png/revision/latest?cb=20110209085130'
  ]
  if (props.hasFlag && !props.isOpened) {
    pic = pictures[0];
  } else {
    pic= pictures[1];
  }

  let picture = 
  <img 
    alt="pictureFlag"
    width="20px" 
    height="20px" 
    src={pic}
  />
  if(props.isOpened === true) {
    style = {
      backgroundColor: 'white',
      border: '1px solid white',
    }
    if (props.count === 0) {
      textStyle = {
        color: 'white',
      }
    } else {
      textStyle = {
        color: 'red',
      }
    }
  } else {
    style = {
      backgroundColor: 'black',
    }
  }
  return (
    <div style={style} className="Cell" onClick={(e) => props.handleClick(e, props.index, props.y)}>
      <ToggleDisplay show={props.isOpened}>
        <h3 style={textStyle}>{props.hasMine ? picture : props.count}</h3>
      </ToggleDisplay>
    </div>
  );
}

export default Cell;
