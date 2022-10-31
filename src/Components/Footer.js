import React from 'react'
import { 
    GAME_STATE_PLAYING,
} from "../constants";

const Footer = ({gameState, onClickEvent}) => {
  return (
    <div className='footer'>
        {
            gameState !== GAME_STATE_PLAYING &&
            <button className='footer-text' onClick={onClickEvent}>
            New Game
            </button>
        }
        
    </div>
  )
}

export default Footer