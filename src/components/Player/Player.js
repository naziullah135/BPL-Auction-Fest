import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
const {img,name,catagory,country,salary} = props.player;
    // const playerStyle={
    //     "border-radius:1px solid red"
    // }
    return (
           <div className="player-des">
           <img src={img} alt=""/>
           <div className="player-info">
            <h2 id="player-name">{name}</h2>
            <h5>{catagory}</h5>
            <h4>{country}</h4>
            <p>Salary: ${salary}</p>
            <button onClick={()=>props.handleHiredPlayer(props.player)} className="btn btn-success"><FontAwesomeIcon icon={faCheckCircle}/> Hire Me</button>
           </div>
           </div>
    );
};

export default Player;