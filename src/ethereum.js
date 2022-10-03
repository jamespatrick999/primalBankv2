import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers'; 

// const tokenAddress = "0xB5E4E7A17e862309D2E492B12419c767b5D9f805"; 
// const contractAddress = "0x45771E6b17b98C5269a3A47b381522bd117299FF";

const tokenAddress = "0x2668babeab11780c516b1d3ad02011668aff8aa0"; 
const contractAddress = "0x3357af4613E6478d70074C8a6D4DFd572d955712";

const tokenABI = require('./contracts/primal.json');
 
const contractABI =  require('./contracts/primalBank.json');

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const currentAcc = accounts[0] ;
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const tokenInstance = new Contract(
       tokenAddress,
       tokenABI,
       signer
      );
	  
	   const contractInstance = new Contract(
		contractAddress,
		contractABI,
		signer
	   );
     console.log(contractInstance.filters.NewStake( contractAddress))
    //  console.log(contractInstance.on("NewStake" , ()))
     resolve({tokenInstance, currentAcc, contractInstance, tokenAddress, contractAddress});



      return;
    }
    reject('Install/Use Web3 provider like Metamask or Trust Wallet ');
  });

export default getBlockchain;
