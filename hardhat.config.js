require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const PK = process.env.DEPLOYER_SIGNER_PRIVATE_KEY
const PROJECT_ID = process.env.INFURA_PROJECT_ID


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: PROJECT_ID,
      accounts: [
        PK
      ]
    }
  }
};
