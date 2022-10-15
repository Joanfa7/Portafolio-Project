import React, { useState } from "react";
import logo from "./images/logo.png";
import "./App.css";
import { NeftifyConnectWallet } from "@neftify/connect-react";
import { Coin } from "./components/Coin";

function App() {
  const [btc, setBtc] = useState(50);
  return (
    <>
      <div className="header">
        <div className="logo">
          <image src={logo} alt="logo" height="50px" />
          <h3>Votero</h3>
        </div>
        <div className="App">
          <NeftifyConnectWallet />
        </div>
      </div>
      <div className="instructions">
        {" "}
        <p>Aqui se escribte una instruccion </p>
      </div>
      <Coin perc={btc} setPerc={setBtc} token={"BTC"} />
    </>
  );
}

export default App;
