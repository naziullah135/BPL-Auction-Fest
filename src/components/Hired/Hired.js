import React from "react";
import './Hired.css';

const Hired = (props) => {
  const hired = props.hired;
  const totalBudget = hired.reduce(
    (total, player) => total + parseInt(player.salary),
    0
  );
  return (
    <div className="hire-board">
      <h2>Hired Player Summary</h2>
      <p>{hired.length} players hired.</p>
      <ol id="hire-info">
        {
        hired.map(player =><li>{player.name}, Hired Fee: ${player.salary}</li>)
        }
      </ol>
      <h4>Total Budget: ${totalBudget}</h4>
    </div>
  );
};

export default Hired;
