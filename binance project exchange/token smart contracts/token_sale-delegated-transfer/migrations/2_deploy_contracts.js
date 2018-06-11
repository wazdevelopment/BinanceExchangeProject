var BinanceToken = artifacts.require("./BinaceToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000);
};
