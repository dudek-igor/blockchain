const SHA256 = require("crypto-js/sha256");

class Block {
  /**
   * @param {} index optionals / tell us where the block sits on
   * @param {number} timestamp tell us when block is created
   * @param {Object} data any type of data that we want to associate
   * @param {string} previousHash hash of block before
   */
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }
  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

module.exports = Block;
