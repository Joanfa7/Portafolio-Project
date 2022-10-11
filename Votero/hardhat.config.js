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
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI,
      accounts: [PRIVATE_KEY],
    },
    etherscan: {
      url: API_KEY,
    },
  },
};
