# mintpatti

- Ethereum blockchain research project

- Utilizing:
  - React
  - Solidity
  - Hardhat
  - ethers.js
  - Metamask
  - The Graph

Test Credentials:

- Greeter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
- Account #15: 0xcd3b766ccdd6ae721141f452c550ca635964ce71 (10000 ETH)
- Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Example transaction history:

- eth_sendTransaction
  Contract deployment: Greeter
  Contract address: 0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction: 0xcbefaaca420df787cab2971d35d609178cd13b4b84a08eeb92ae1315aad6dcd3
  From: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value: 0 ETH
  Gas used: 497026 of 497026
  Block #1: 0x1e90304c2622ccd198b30d95dd69c756f4f7dbee56c52896df8e572496c47795

  console.log:
  Deploying a Greeter with greeting: Hello, Hardhat!

Building:

- A contract for creating and updating a message on the Ethereum blockchain

- A contract for minting tokens, then allowing the owner of the contract to send tokens to others and to read the token balances, and for owners of the new tokens to also send them to others.

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
