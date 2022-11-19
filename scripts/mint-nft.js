require("dotenv").config();
const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const PUBLIC_KEY = process.env.GOERLI_PUBLIC_KEY;
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(ALCHEMY_API_URL);

const contract = require("../artifacts/contracts/SpritleNFT.sol/SpritleNFT.json");
// console.log(JSON.stringify(contracts.abi));
const contractAddress = "0xBA909DB4d823AD071e2dE2b1b47B59386f7F0935";
const nftContract = new web3.eth.Contract(contract.abi,contractAddress);
async function mintNFT(tokenURI){
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,"latest"); //get latest nonce

    const txn = {
        'from':PUBLIC_KEY,
        'to':contractAddress,
        'nonce':nonce,
        'gas':500000,
        'data':nftContract.methods.mintNFT(PUBLIC_KEY,tokenURI).encodeABI(),
    };

    const signPromise = web3.eth.accounts.signTransaction(txn, PRIVATE_KEY);
    signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}
mintNFT("https://ipfs.filebase.io/ipfs/Qmce7ketDSqJvvXReqiTrccQnkMahvE7BdLu5TuDYUy6kC");
// 0x7abd3af5a6e05fba8f0c1bca8968bdb5ebc03bdd