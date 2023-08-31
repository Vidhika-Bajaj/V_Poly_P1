# ERC1155

This project maps an NFT collection to Polygon, installs it on the Ethereum blockchain, and transfers assets using the Polygon Bridge. Use of an image generating programme, such as DALLE 2 or Midjourney, to create the images for your NFTs has been done to add a twist to the project.


## Overview
The SpaceNFT project serves as an example of the development, deployment, and management of an NFT collection. The NFTs are developed using cutting-edge techniques, saved on IPFS for efficient distribution, and then mapped to the Polygon network for enhanced visualisation and scalability. They are launched on the Goerli Ethereum Testnet.

## Getting Started

### Installation
1. Clone the repository using git by typing "git clone https://github.com/Vidhika-Bajaj/V_Poly_P1".
2. Use 'cd Vidhikanft-main' to access the project directory.
3. Use 'npm install' to install dependencies.

## Deployment
### Generate NFTs
1. Using DALLE 2 or Midjourney, make a five-item collection of images with a space theme.
2. Place the generated images in a local directory.

### Deploying ERC1155
1. Update the 'VidhikaNFT.sol' contract with the newly established IPFS URIs and prompt descriptions.
2. Post the modified contract to the Ethereum Goerli test network.

## Scripts
### Batch Minting
1. Update the `batch-mint.js` script with the contract address and your Ethereum wallet details.
2. Run the script: `npx hardhat run scripts/batch-mint.js --network goerli`

### Batch Transfer
1. Update the `batch-transfer.js` script with the contract addresses on Ethereum and Polygon, along with wallet details.
2. Run the script: `npx hardhat run scripts/batch-transfer.js --network goerli`

## Testing
1. Ensure you have testnet Ether as well as MATIC tokens for Polygon Mumbai and Goerli.
2. Add the contract addresses and information about your wallet to the 'test.js' script.
3. Run the script in the following way: For balanceOf on Mumbai, type "npx hardhat run scripts/test.js --network mumbai."

## Authors
Vidhika Bajaj

## License
This project is licensed under the MIT License
