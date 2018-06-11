var BinanceToken = artifacts.require("./BinanceToken.sol");
var BinanceTokenSale = artifacts.require("./BinanceTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(BinanceToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BinanceTokenSale, BinanceToken.address, tokenPrice);
  });
};
