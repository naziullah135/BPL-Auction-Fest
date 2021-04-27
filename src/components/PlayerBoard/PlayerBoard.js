import React, { useState } from 'react';
import fakeData from '../../fakeData/PlayerData.json';
import Player from '../Player/Player';
import Hired from '../Hired/Hired';
import './PlayerBoard.css';

const PlayerBoard = () => {
    const playerData = fakeData;
    const [playerInfo,setPlayerInfo] = useState(playerData);
    const [hired, setHired] = useState([]);
    const handleHiredPlayer = (player) => {
        const newPlayer = [...hired,player];
        setHired(newPlayer);
    }
    return (
        <div className="main-board">
            <div className="player-container">
                    {
                        playerInfo.map(player => <Player player={player} handleHiredPlayer={handleHiredPlayer} key={player.id}></Player> )
                    }
            </div>
            <div className="hired-container">
                    <Hired hired={hired}></Hired>
                    

            </div>
        </div>
    );
};

export default PlayerBoard;