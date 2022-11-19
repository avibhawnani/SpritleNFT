// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SpritleNFT is ERC721URIStorage,Ownable {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIDs;

    constructor() ERC721("DRIP","DRP"){}

    function mintNFT(address recipient,string memory tokenURI)public onlyOwner returns(uint256){
        _tokenIDs.increment();
        uint256 newItemId = _tokenIDs.current();
        _mint(recipient,newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}
