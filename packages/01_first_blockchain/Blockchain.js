const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [this.createGensisBlock()];
  }
  /**
   * @description   Create First Block
   * @return        {Block}
   */
  createGensisBlock() {
    return new Block(0, Date.now(), "Gensis block");
  }
  /**
   * @description   Get the latest block
   * @return        {number}
   */
  getLatestBlock() {
    // return this.chain.at(-1);
    return this.chain[this.chain.length - 1];
  }
  /**
   * @description   Add Block to chain
   * @param         {Block}
   * @return        {void}
   */
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  /**
   * @description   Vaidate blockchain
   * @param         {Block}
   * @return        {void}
   */
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) return false;
      if (currentBlock.previousHash !== previousBlock.hash) return false;
    }
    return true;
  }
}

module.exports = new Blockchain();
