const Gu_Gara = artifacts.require("Gu_Gara");
const FirstPresale = artifacts.require("FirstPresale");
const SecondPresale = artifacts.require("SecondPresale");
const TeamVesting = artifacts.require("TeamVesting");

module.exports = async function (deployer) {
  await deployer.deploy(FirstPresale, "0x85732427df4874db73600685072D54b99e72C9cA");
  const firstPresale = await FirstPresale.deployed();

  await deployer.deploy(SecondPresale, "0x85732427df4874db73600685072D54b99e72C9cA");
  const secondPresale = await SecondPresale.deployed();

  await deployer.deploy(TeamVesting, "0x85732427df4874db73600685072D54b99e72C9cA");
  const teamVesting = await TeamVesting.deployed();

  await deployer.deploy(Gu_Gara, "0x85732427df4874db73600685072D54b99e72C9cA", "", firstPresale.address, secondPresale.address, teamVesting.address);
  const gu_Gara = await Gu_Gara.deployed();

  await firstPresale.setToken(gu_Gara.address);
  await secondPresale.setToken(gu_Gara.address);
  await teamVesting.setToken(gu_Gara.address);
};