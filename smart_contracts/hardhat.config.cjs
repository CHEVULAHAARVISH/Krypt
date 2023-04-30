require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/tBVixopjNoyZGPbbVVIp-GjnDMfgacos",
      accounts: ['8fbf38cdeadec099bee49a0b767fa8d888494523d6b3ca11d782c541f9349e9f']
    }
  }
}
