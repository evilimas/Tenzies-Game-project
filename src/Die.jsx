import React from 'react';
import './index.css';

const diceChars = '⚀⚁⚂⚃⚄⚅';

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{diceChars[props.value - 1]}</h2>
    </div>
  );
}
