const Block = require("./Block");
const blockchain = require("./Blockchain");

console.log("Mining Block 1....");
blockchain.addBlock(new Block(1, Date.now(), { amount: 10 }));
console.log("Mining Block 2....");
blockchain.addBlock(new Block(2, Date.now(), { amount: 23 }));

// console.log(JSON.stringify(blockchain, null, 4));

// console.log(`Is blockchain valid? ${blockchain.isChainValid()}`);

// // Mute Block
// blockchain.chain[1].data = { amount: 100 };
// blockchain.chain[1].hash = blockchain.chain[1].calculateHash();

// console.log(`Is blockchain valid? ${blockchain.isChainValid()}`);
