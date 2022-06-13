const Block = require("./Block");
const Transaction = require("./Transaction");

class Blockchain {
  constructor() {
    this.chain = [this.createGensisBlock()];
    this.difficulty = 5;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }
  /**
   * @description   Create First Block
   * @return        {Block}
   */
  createGensisBlock() {
    return new Block(Date.now(), "Gensis block", "0");
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
    // newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
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
  /**
   *
   */
  minePendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);
    console.log("Block successfully mined!");
    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ];
  }
  /**
   * @description  Add transactions to array of pending transactions
   * @param        {Transaction}
   */
  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }
  /**
   * @description Get you wallet balance via address
   * @param       {} address
   */
  getBalanceViaAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
  }
}

module.exports = new Blockchain();
