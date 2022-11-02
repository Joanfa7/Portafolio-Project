require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

const { config } = require("chai");
const dotenv = require("dotenv");

dotenv.config();

const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainID: 31337,
    },
    etherscan: {
      apiKey: {
        polygonMumbai: API_KEY,
      },
      url: API_KEY,
    },
  },
};
