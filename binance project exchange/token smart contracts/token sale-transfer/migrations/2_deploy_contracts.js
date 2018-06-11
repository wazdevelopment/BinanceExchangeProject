var BinanceTokenToken = artifacts.require("./BinanceToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000);
};
