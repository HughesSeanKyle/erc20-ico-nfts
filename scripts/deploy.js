const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require('../constants');

/*
    Contract address 0x6da7c14b57f6f1F43Bbef6Cf98A9EEAC0c093f5f
*/

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

/*
    Observations
    -OBS #1
      - Balance before faucet 0.0325 GoerliEth
      - Balance after faucet 0.1325 GoerliEth
      - Balance after contract deploy 0.0257 GoerliEth
        - To deploy contract 
          - Price = 0.1 GoerliETH
          - Fees/GAS = 0.00399968 GoerliETH
          - Total = 0.10399968 GoerliETH ((Gas Limit (Units)[42000] * Gas price[95.230497078]) / 1000000000)
        - See this trx id to track 
          - 0x6fc72ce2c10c06de9306cec243cee6dbcb08eb70a776888ccba4268473414736

        - Extra - {
          one billion gwei
          There are one billion gwei in one unit of Ether (ETH).
        } 

  */
