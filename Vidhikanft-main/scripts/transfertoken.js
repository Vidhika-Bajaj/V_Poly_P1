const hre = require("hardhat");
const VidhikaNFTJSON = require("../artifacts/contracts/VidhikaNFT.sol/VidhikaNFT.json");

const contract_address = "0x616E9ed7E928fc95E68555bB94809e178D6C3AA9"; // Replace with the actual contract address
const VidhikaNFTABI = VidhikaNFTJSON.abi;
const walletAddress = "0x77E930D39F67A75E5054bF73a92ffC02c98d9cf2"; // Replace with your wallet address

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC1155RootAddress = "0x883805323E06f7BFf1C8Df676acD592493820059"; // Replace with actual address

async function main() {
    const VidhikaNFTContract = await hre.ethers.getContractAt(VidhikaNFTABI, contract_address);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC1155RootAddress);

    const approveTx = await VidhikaNFTContract.setApprovalForAll(fxERC1155RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");

    const tokenIds = await VidhikaNFTContract.getAllNFTs();
     
    for (const tokenId of tokenIds) {
        const depositTx = await fxContract.deposit(
            contract_address,     // ERC1155 contract address
            walletAddress,        // Receiver address on Fantom
            tokenId,              // Token ID from VidhikaNFT
            1,                    // Amount of tokens to deposit
            '0x6566'              // Data
        );
        await depositTx.wait();
        console.log(`Token ${tokenId} deposited`);
    }

    console.log("Your 5 tokens deposited successfully");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
