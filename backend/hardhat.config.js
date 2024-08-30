require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: process.env.ETH_SCAN_API_KEY,
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,  
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  }
};
