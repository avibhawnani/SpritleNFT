/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const { ALCHEMY_API_URL ,GOERLI_PRIVATE_KEY } = process.env;
// const ALCHEMY_API_URL = "https://eth-goerli.g.alchemy.com/v2/sW44TkS70q-tbOJS1DTFPJsU6UFNY_XI";
// const GOERLI_PRIVATE_KEY = "6a224259bf124375a3ca1f2a8964bee80b69356eb463c234240da8724be21a42";
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:ALCHEMY_API_URL,
      accounts:[`${GOERLI_PRIVATE_KEY}`],
    }
  }
};

// 0xBA909DB4d823AD071e2dE2b1b47B59386f7F0935 - contract address