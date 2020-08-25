async function win() {
  const address = ""; // TODO: get the address from the deployment!
  const Game = await ethers.getContractFactory("Game");
  const contract = Game.attach(address);

  await contract.win();
}

win()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
