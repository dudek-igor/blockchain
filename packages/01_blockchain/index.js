/**
 * @info Export blockchain ingredientes
 */
module.exports = {
  Blockchain: require("./src/Blockchain"),
  Block: require("./src/Block"),
  KeyGenerator: require("./src/KeyGenerator"),
  Transaction: require("./src/Transaction"),
};
/**
 * @info Start sample implementation
 */
// const Blockchain = require("./src/Blockchain");
// const Transaction = require("./src/Transaction");
/**
 * @info Fourth step
 * 
 * 1. Create my public key/wallet address
 * const EC = require("elliptic").ec;
 * const ec = new EC("secp256k1");
 * 
 * const myKey = ec.keyFromPrivate(
"56e3f66095a59ac694ca6f97b73e67571a7636e9f2b4dade4a746c2fc4163302");
 * 
 * const myWalletAddress = myKey.getPublic("hex");
 * 
 * 2. Create and sign transaction
 * const tx1 = new Transaction(myWalletAddress, "public_key_to_address", 10);
 * tx1.signTransaction(myKey);
 * 
 * 3. Add transaction to pending transaction
 * blockchain.addTransaction(tx1);
 * 4. Mine
 * blockchain.minePendingTransactions(myWalletAddress);
 * 5. Check balance
 * console.log("Balance of my wallet is " + blockchain.getBalanceViaAddres(myWalletAddress));
 * 6. Check valid
 * // blockchain.chain[1].transactions[0].amount = 1;
 * console.log("Is chain valid?", blockchain.isChainValid());
 */

/**
 * @info Third Step
 *
 * blockchain.addTransaction(new Transaction("address1", "address2", 10));
 * blockchain.addTransaction(new Transaction("address2", "address3", 30));
 *
 *
 * console.log("\n Starting the miner....");
 * blockchain.minePendingTransactions("dudek-address");
 * console.log("\n Balance of dudek-address is ",blockchain.getBalanceViaAddress("dudek-address"));
 *
 * console.log("\n Starting the miner again...");
 * blockchain.minePendingTransactions("address2");
 *
 * console.log("\n Balance of dudek-address is ", blockchain.getBalanceViaAddress("dudek-address"));
 */

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
