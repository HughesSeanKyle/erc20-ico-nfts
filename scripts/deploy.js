const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require('../constants');

async function main() {
	// Address of the Crypto Devs NFT contract that you deployed in the previous module
	const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

	/*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.

    Calls contact defined in contracts folder 
    1. Create Instance 
    */
	const cryptoDevsTokenContract = await ethers.getContractFactory(
		'CryptoDevToken'
	);

	// deploy the contract (Add arg for constructor and deploy)
	// 2. Init instance with required constructor args
	const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(
		cryptoDevsNFTContract
	);

	// 3. Confirm deployment of instance. Pointer of instance === contract address
	await deployedCryptoDevsTokenContract.deployed();
	// print the address of the deployed contract
	console.log(
		'Crypto Devs Token Contract Address:',
		deployedCryptoDevsTokenContract.address
	);
}

// Call the main function and catch if there is any error
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
