const hre = require("hardhat");
const VidhikaNFTContractJSON = require("../artifacts/contracts/VidhikaNFT.sol/VidhikaNFT.json");

const contract_address = "0x6592866282bd17c1dA1a2365B2B1c03afB05Ac83"; // Replace with the actual contract address
const VidhikaNFTABI = VidhikaNFTContractJSON.abi;
const walletAddress = "0x77E930D39F67A75E5054bF73a92ffC02c98d9cf2"; // Replace with your wallet address

async function main() {
    const VidhikaNFTContract = await hre.ethers.getContractAt(VidhikaNFTABI, contract_address);
    
    let tokenmint = 0;

    for (let i = 0; i < 5; i++) {
        try {
            const tx = await VidhikaNFTContract.mintVidhikaNFT(walletAddress, 1); // Mint 1 token
            await tx.wait();

            tokenmint++;
            
        } catch (error) {
            console.error("Error minting token:", error.message);
        }
    }

    console.log("You have minted:"+ tokenmint + "tokens");

    const tokenIds = await VidhikaNFTContract.getAllNFTs();
	let Balance = 0;

    for (const tokenId of tokenIds) {
         await VidhikaNFTContract.balanceOf(walletAddress, tokenId);
        Balance++;
    }
	console.log("You have  :" +  Balance  + "tokens");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
