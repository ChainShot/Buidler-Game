const { assert } = require("chai");
const { utils: { parseEther }} = ethers;

describe("Game", function() {
  let contract;
  beforeEach(async () => {
    const Game = await ethers.getContractFactory("Game");
    contract = await Game.deploy({ value: parseEther("1") });
    await contract.deployed();
  });

  it("should have a balance", async () => {
    const balance = await ethers.provider.getBalance(contract.address);
    assert.equal(balance.toString(), parseEther("1").toString());
  });

  it("should allow us to retrieve the balance", async () => {
    await contract.win();
    const balance = await ethers.provider.getBalance(contract.address);
    assert.equal(balance.toString(), "0");
  });
});
