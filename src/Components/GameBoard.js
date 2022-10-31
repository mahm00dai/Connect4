import React, { useEffect, useState } from "react";
import '../css/Game.css'
import Header from "./Header";
import Footer from "./Footer";
import GameCircle from "./GameCircle";
import { isDraw, isWinner } from "./helper";
import { 
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    GAME_STATE_DRAW
} from "../constants";

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(64).fill(NO_PLAYER));
    const [curruntPlayer, setCurruntPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

    console.log(gameBoard);

    useEffect(() => {
        initGame();
    }, [])
    

    const initGame = () => {
        setGameBoard(Array(64).fill(NO_PLAYER));
        setGameState(GAME_STATE_PLAYING);
        setCurruntPlayer(PLAYER_1)
    }
    
    const circleClicked = (id) => {
        console.log('Circle Clicked: ' + id);

        if(gameBoard[id] !== NO_PLAYER) return;
        if(gameState !== GAME_STATE_PLAYING) return;
        
        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if(pos === id) return curruntPlayer;
                return circle;
            })
        });

        if (isWinner(gameBoard, id, curruntPlayer)){
            setGameState(GAME_STATE_WIN);
            setWinPlayer(curruntPlayer);
        }

        if (isDraw(gameBoard, id, curruntPlayer)){
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }

        setCurruntPlayer(curruntPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard);
    }

    

    const renderCircle = () => {
        const Circles = [];
        for(let i = 0; i < 64; i++) {
            Circles.push(
                <GameCircle key={i} id={i} className={`player_${gameBoard[i]}`} onCircleClick={circleClicked}>
                </GameCircle>
            );
        }
        return Circles;
    }

    return (
        <>
            <Header gameState={gameState} curruntPlayer={curruntPlayer} winPlayer={winPlayer} />
            <div className= "gameBoard">
                {renderCircle()}
            </div>
            <Footer gameState={gameState} onClickEvent={initGame} />
        </>
    )
}

export default GameBoard;












// {/* <GameCircle id={1} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={2} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={3} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={4} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={5} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={6} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={7} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={8} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={9} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={10} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={11} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={12} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={13} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={14} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={15} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={16} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={17} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={18} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={19} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={20} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={21} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={22} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={23} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={24} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={25} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={26} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={27} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={28} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={29} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={30} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={31} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={32} onCircleClick={circleClicked}>
//             </GameCircle>

//             <GameCircle id={33} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={34} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={35} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={36} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={37} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={38} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={39} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={40} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={41} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={42} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={43} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={44} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={45} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={46} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={47} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={48} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={49} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={50} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={51} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={52} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={53} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={54} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={55} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={56} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={57} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={58} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={59} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={60} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={61} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={62} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={63} onCircleClick={circleClicked}>
//             </GameCircle>
//             <GameCircle id={64} onCircleClick={circleClicked}>
//             </GameCircle> */}