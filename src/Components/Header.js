import React from 'react'
import { 
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    GAME_STATE_DRAW
} from "../constants";



const Header = ({gameState, curruntPlayer, winPlayer}) => {
    const renderLabel = () => {
        switch(gameState) {
            case GAME_STATE_PLAYING:
                return  <div>Player {curruntPlayer} Turn</div>
            case GAME_STATE_WIN:
                return  <div>Player {winPlayer} Wins!</div>;
            case GAME_STATE_DRAW:
                return  <div>!! Draw !!</div>;
            default:
        }
    }

  return (
    <div className='panel header'>
        <span className='header-text'>
            {renderLabel()}
        </span>
    </div>
  )
}

export default Header