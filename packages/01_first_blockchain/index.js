const Block = require("./src/Block");
const blockchain = require("./src/Blockchain");
const Transaction = require("./src/Transaction");

/**
 * @info Third Step
 */
blockchain.addTransaction(new Transaction("address1", "address2", 10));
blockchain.addTransaction(new Transaction("address2", "address3", 30));

console.log("\n Starting the miner....");
blockchain.minePendingTransactions("dudek-address");

console.log(
  "\n Balance of dudek-address is ",
  blockchain.getBalanceViaAddress("dudek-address")
);

console.log("\n Starting the miner again...");
blockchain.minePendingTransactions("address2");

console.log(
  "\n Balance of dudek-address is ",
  blockchain.getBalanceViaAddress("dudek-address")
);

/**
 * @info Second Step
 *
 * console.log("Mining Block 1....");
 * blockchain.addBlock(new Block(1, Date.now(), { amount: 10 }));
 * console.log("Mining Block 2....");
 * blockchain.addBlock(new Block(2, Date.now(), { amount: 23 }));
 */

/**
 * @info First Step
 *
 * console.log(JSON.stringify(blockchain, null, 4));
 *
 * console.log(`Is blockchain valid? ${blockchain.isChainValid()}`);
 *
 * Mute Block
 * blockchain.chain[1].data = { amount: 100 };
 * blockchain.chain[1].hash = blockchain.chain[1].calculateHash();
 *
 * console.log(`Is blockchain valid? ${blockchain.isChainValid()}`);
 */
