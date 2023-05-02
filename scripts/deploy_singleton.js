// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const ParcelPayroll = await hre.ethers.getContractFactory("ParcelPayroll");
    const payroll = await ParcelPayroll.deploy();

    await payroll.deployed();

    console.log(`ParcelPayrollFactory is Deployed to ${payroll.address}`);

    // Latest Deployed Implementation is at : 0x3B09Dbc8CA1eBac0CDe743C3A68c2b2d376Df0fa
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
