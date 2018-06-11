var BinanceToken = artifacts.require("./BinanceToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BinanceToken);
};
