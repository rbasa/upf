const { ethers, upgrades } = require('hardhat');

async function main() {
    const Upf = await ethers.getContractFactory('UpfCoin');
    console.log('Deploying upfCoin...');
    const upf = await upgrades.deployProxy(Upf, [12153], { kind: 'uups' })
    await upf.deployed;
    console.log('Upf Deployed to: ', upf.address);


}
main();
