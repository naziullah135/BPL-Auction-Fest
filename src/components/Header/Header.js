import React from "react";
import logo from "../../images/BPLOfficialLogo.png";
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      {/* <h1>This is Header</h1> */}
      <img src={logo}/>
      <h2>BPL Auction Fest 2021</h2>
    </div>
  );
};

export default Header;
