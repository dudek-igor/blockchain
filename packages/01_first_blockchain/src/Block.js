const SHA256 = require("crypto-js/sha256");

class Block {
  /**
   * @param {} index optionals / tell us where the block sits on
   * @param {number} timestamp tell us when block is created
   * @param {Object} transactions any type of transactions that we want to associate
   * @param {string} previousHash hash of block before
   */
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }
  /**
   * @info Create new hash
   */
  calculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nonce
    ).toString();
  }
  /**
   * @info Proof-of-Work, also call mining
   */
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: " + this.hash);
  }
}

module.exports = Block;
