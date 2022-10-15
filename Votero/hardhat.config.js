require("@nomicfoundation/hardhat-toolbox");
const { config } = require("chai");
const dotenv = require("dotenv");

dotenv.config();

const POLYGON_MUMBAI = process.env.POLYGON_MUMBAI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI,
      accounts: [PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainID: 31337,
    },
    etherscan: {
      url: {
        poligonMumbai: API_KEY,
      },
    },
  },
};
