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

# UPF Coin

A standard for Upf tokens. 



## Features

- {{ERC20 token that can `mint` new supply for verified plastic tons offseted.}}
- Implements `ERC20Upgradeable, Pausable, Burnable and Ownable` contracts with [OpenZeppelin](https://github.com/openzeppelin) proxy libraries.
- Implement 'Pausabl2' contracts

Built with [Hardhat](https://github.com/nomiclabs/hardhat). 


## Setup

1. Clone Repository

    ```sh
    $ git clone https://github.com/rbasa/upf.git
    $ cd upf
    ```

2. Install Dependencies

    ```sh
    $ npm install
    ```

3. Run Tests

    ```sh
    $ npx hardhat test
    ```

    To compute their code coverage run `npx hardhat coverage`.

## Deploy

1. On `hardhat.config.js` configure the following constants for the `kovan` testnet:

    ```
    INFURA_API_KEY
    KOVAN_PRIVATE_KEY
    ```

2. Deploy on Ethereum `kovan` testnet: 

    ```sh
    $ npx hardhat run scripts/deploy.js --network kovan
    ```
3. Interact with the console:

    ```sh
    $ npx hardhat console --network kovan
    ```

    Initalize the token with:

    ```js
    const Upf = await ethers.getContractFactory("UpfCoin"); // Get contract deployed
    (await ethers.provider.listAccounts()).toString(); // List accounts on the provider

    const address = '0x6c797e6629FA9496e3C3A3309709b9D381fDAFD1' // Replace with your token address
    const upf = await UpfCoin.attach(address) // Get a contract instance
    (await upf._totalSupply()).toString(); // Display total supply from account attached
    ```

### Upgrade

1. Deploy new contract in a fresh address:

    ```sh
    $ npx hardhat run scripts/prepare.js --network kovan
    ```

2. Upgrade the proxy contract with the freshly deployed address: 

    ```sh
    $ npx hardhat run scripts/upgrade.js --network kovan
    ```

### Verify

TBD

## Contribute

These contracts are free, open source and censorship resistant. Support us via TBD.

## License

This software is under an [MIT License](LICENSE.md). This is a free software built by TBD.

<p align="center">
<img src="docs/democracy-earth.png" width="400" title="{{Arvol Foundation}}">
</p>
