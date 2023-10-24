// import ethers from "@nomiclabs/hardhat-ethers";
// import upgrades from "@openzeppelin/hardhat-upgrades";
import { ethers, upgrades } from "hardhat";

async function main() {
  const dougie = await ethers.getContractFactory("dougie");
  console.log("Deploying Dougie Version 1");
  const douGie = await upgrades.deployProxy(dougie, [10], {
    initializer: "update",
  });
  await douGie.deployed();
  console.log("douGie deployed");
}
