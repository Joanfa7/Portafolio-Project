const hre = require("hardhat");

async function main() {
  const Election = await hre.ethers.getContractFactory("Election");
  const election = await Election.deploy();
  console.log("Deploying contract...");
  await election.deployed();

  console.log(`Election contract address: ${election.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
