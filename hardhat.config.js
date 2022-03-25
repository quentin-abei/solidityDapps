require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      chainId: 80001,
       url: process.env.API_URL,
       accounts: [process.env.PRIVATE_KEY]
    },
  },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY
    }
 
};
