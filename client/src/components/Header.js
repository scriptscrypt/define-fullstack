import React from "react";
import Eth from "../eth.svg";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../styles/DefineDEX.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header(props) {
  const { address, isConnected } = props;
  const location = useLocation();

  console.log(location);

  return (
    <header
      className={
        location.pathname === "/auth/" || location.pathname === "/auth"
          ? "headerNone"
          : "header"
      }
    >
      <div className="leftH">
        {/* <img src={Logo} alt="logo" className="logo" /> */}
        <Link to="/" className="link">
          {/* <div className="logoDefine">DeFinE</div> */}
          <img className="logo" src={logoImg} />
        </Link>
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        {/* <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link> */}
        <Link to="/ekyc" className="link">
          <div className="headerItem">E-KYC</div>
        </Link>
        <Link to="/exchanges" className="link">
          <div className="headerItem">Other Bridges</div>
        </Link>
      </div>
      <div className="rightH">
        {/* <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div> */}
        {/* <div className="connectButton" onClick={connect}>
          {isConnected
            ? address.slice(0, 4) + "..." + address.slice(38)
            : "Connect"}
        </div> */}
        <ConnectButton />
      </div>
    </header>
  );
}

export default Header;
