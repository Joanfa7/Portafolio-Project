import { useEffect, useState } from "react";
import { NeftifyConnectWallet } from "@neftify/connect-react";
import { Coin } from "./components/Coin";
import Web3 from "web3";
import "./App.css";
import logo from "./images/logo.png";

const web3 = new Web3("wss://eth-goerli.g.alchemy.com/v2/mnzePPXW9r_IAXnx5yrGCpjkUlkPlFKW");

// Metamask Account
const metamaskAccount = '0xF51029dd6C2Ce80EBf00D44Ae5894f8e1d44d0a8';

// Getting contract path
const address = "0xEaB5e8FCd263A873725c9a1955fb476ecDd7F86F";
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"votedEvent","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"addCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"candidatesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

const contract = new web3.eth.Contract(abi, address);


function App() {
  const [btc, set1] = useState(0);
  const [eth, set2] = useState(0);
  const [link, set3] = useState(0);

  const getRatio = async (id, setPerc) => {
    //Get the ratio of the given candidate

    //Get the total votes of all candidates
    const info1 = await contract.methods.candidates(1).call({metamaskAccount});
    const info2 = await contract.methods.candidates(2).call({metamaskAccount}); 
    const info3 = await contract.methods.candidates(3).call({metamaskAccount});
    var totalVotes = parseInt(info1.voteCount) + parseInt(info2.voteCount) + parseInt(info3.voteCount);

    //Get the number of votes given to the current candidate (id)
    const info = await contract.methods.candidates(id).call({metamaskAccount});
    let votes = info.voteCount;

    //Get the ratio
    var ratio = Math.round(votes/(totalVotes/100)*100);

    if (ratio > 100) {
      ratio = ratio / 100;
    }

    setPerc(ratio);
  };

  useEffect(() => {
    //Update candidates count
    getRatio(1, set1);
    getRatio(2, set2);
    getRatio(3, set3);
  })

  return (
    <>
      <div className="header">
        <div className="logo">
          <image src={logo} alt="logo" height="50px" />
          <h3>Votero</h3>
        </div>
        <div className="App"><NeftifyConnectWallet /></div>
      </div>
      <div className="instructions">
      </div>
      <div className="list">
        <Coin perc={btc} setPerc={set1} token={"Carlos"} />
        <Coin perc={eth} setPerc={set2} token={"Manuel"} />
        <Coin perc={link} setPerc={set3} token={"Luis"} />
      </div>
    </>
  );
}

export default App;
