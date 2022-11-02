import { useEffect, useState } from "react";
import { NeftifyConnectWallet } from "@neftify/connect-react";
import { Coin } from "./components/Coin";
import Web3 from "web3";
import "./App.css";
//import { ethers } from "ethers";
import logo from "./images/logo.png";
//import { Information } from "web3uikit";
//require('dotenv').config();
//const ethers = require("ethers");

const web3 = new Web3("wss://eth-goerli.g.alchemy.com/v2/mnzePPXW9r_IAXnx5yrGCpjkUlkPlFKW");

// Metamask Account
const metamaskAccount = '0xF51029dd6C2Ce80EBf00D44Ae5894f8e1d44d0a8';
//const PRIVATE_KEY = process.env.PRIVATE_KEY;
//const API_KEY = process.env.API_KEY;

// Getting contract path
const address = "0xEaB5e8FCd263A873725c9a1955fb476ecDd7F86F";
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"votedEvent","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"addCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"candidatesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_candidateId","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

const contract = new web3.eth.Contract(abi, address);

//const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);
//const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
//const contract = new ethers.Contract(address, abi, signer);

/*const send = async() => {
  //console.log("Receipt: ", contract);
  //console.log("Updating the vote count...");
  //const tx = await contract.vote(1);
  //await tx.wait();
  /*const tx = {
    data: contract.methods.vote(1).encodeABI(),
    gas: 63204,
    chainId: 420,
    gasPrice: web3.utils.toWei("1.00000002", "ether"),
    nonce: 4,
    value: web3.utils.toWei("1.000001", "ether"),
  }*/
  //await web3.eth.sign("1", address).then(console.log);

  //Gettting ethereum account
  //const acc = web3.eth.accounts.create();
  //web3.eth.accounts.privateKeyToAccount(acc.privateKey);
  //console.log("acc: ", acc);
  //console.log("acc.privateKey: ", acc.privateKey);

  // Sign transaction
  //const signature = await web3.eth.accounts.signTransaction(tx, acc.privateKey);
  //console.log("signature: ", signature);
  //const serializeSig = signature.serialize();
  //console.log("serializeSig", serializeSig);

  //console.log("raw: ", signature.rawTransaction);

  //const sign = web3

  // The transaction
  //const createReceipt = await web3.eth.sendSignedTransaction(signature.rawTransaction);
  //console.log("createReceipt: ", createReceipt.transactionHash);

  /*signature.then((signedTx) => {
    const sentTx = web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    sentTx("receipt", receipt => {
      console.log("ReceiptTx: ", receipt);
    });
    sentTx.on("error", err => {
      console.log("ErrorTx: ", err);
    });
  }).catch((err) => {
    console.log("Catching err: ", err);
  })
  //web3.eth.sendSignedTransaction(signature.rawTransaction)
}*/

function App() {
  const [btc, set1] = useState(0);
  const [eth, set2] = useState(0);
  const [link, set3] = useState(0);
  //var total = 1;
  //const [currentAccount, SetCurrentAccount] = useState(null);

  const getRatio = async (id, setPerc) => {
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
    getRatio(1, set1);
    getRatio(2, set2);
    getRatio(3, set3);
  })

  /*const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      //console.log("Make sure you have Metamask installed!");
      return;
    } else {
      //console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    //console.log(accounts);
    if (accounts.length !== 0) {
      const account = accounts[0];
      //console.log("Found an authorized account: ", account);

      //var candidates = await contract.methods.candidatesCount().call({ from: metamaskAccount });
      //console.log("Candidates Count: ", candidates);
      SetCurrentAccount(account);
    } else {
      //console.log("No authorized account found");
    }
  };*/

  /*const connectWalletHandeler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install Metamask!");
    }
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      //console.log("Found an acount Adress:", accounts[0]);
      SetCurrentAccount(accounts[0]);
      //currentAccount = accounts[0];
    
      //console.log("currentAccount:", currentAccount);
      //var receipt = await contract.methods.vote(1).send({from: metamaskAccount});
      //console.log("Receipt: ", receipt);
      //var trans = await contract.methods.candidatesCount().call({from: metamaskAccount});
      //console.log("Transaction: ", trans);
      //var vote = await contract.methods.vote(1).encodeABI();
      //var vote = await contract.methods.vote(1).send({ from: metamaskAccount, });
      //console.log("Vote: ", vote);
      //await send();
    } catch (err) {
      console.log("Error: ", err);
    }
  };/*

  /*const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandeler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };*/

  /*useEffect(() => {
    checkWalletIsConnected();
  }, []);*/

  /*return (
    <>
      <div className="header">
        <div className="logo">
          <h2>Votero</h2>
        </div>
        <div>{connectWalletButton()}</div>
      </div>
    </>
  );*/

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
