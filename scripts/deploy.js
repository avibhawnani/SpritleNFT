const { ethers } = require("hardhat");

async function main(){
    const SpritleNFT = await ethers.getContractFactory("SpritleNFT");
    const spritleNFT = await SpritleNFT.deploy();
    console.log("Contract Address: ",spritleNFT.address);
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
});