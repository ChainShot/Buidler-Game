const { utils: { parseEther }} = ethers;

async function deploy() {
  const Game = await ethers.getContractFactory("Game");
  const contract = await Game.deploy({ value: parseEther(".1") });

  await contract.deployed();

  console.log("Game deployed to: ", contract.address);
}

deploy()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
