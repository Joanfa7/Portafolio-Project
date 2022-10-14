import logo from "./images/logo.png";
import "./App.css";
import { NeftifyConnectWallet } from "@neftify/connect-react";

function App() {
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
    </>
  );
}

export default App;
