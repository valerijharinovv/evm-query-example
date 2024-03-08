// 引用 ethers 模块
const { ethers } = require('ethers');

// 初始化一个 provider (连接到以太坊的 RPC 节点)
const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");

// 读取最新的区块高度
provider.getBlockNumber().then((blockNumber) => {
    console.log("Block number", blockNumber);
});

console.log("紧随其后的代码");

