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
   * @description   Create First/Genesis Block of Blockchain
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
   * @deprecated    Use
   * @description   Simply mine and add block to chain
   * @param         {Block}
   * @return        {void}
   */
  addBlock(newBlock) {
    // 1. Get previous Hash
    newBlock.previousHash = this.getLatestBlock().hash;
    // 2. Mine new block
    newBlock.mineBlock(this.difficulty);
    // 3.  Add block to chain
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
   * @description Mine new block and add to chain. Add reward and clean pending transactions
   */
  minePendingTransactions(miningRewardAddress) {
    // 1. Create new transaction with reward
    this.pendingTransactions.push(
      new Transaction(null, miningRewardAddress, this.miningReward)
    );
    // 2. Create new block and mine
    let block = new Block(
      Date.now(),
      this.pendingTransactions,
      this.getLatestBlock().hash
    );
    block.mineBlock(this.difficulty);
    console.log("Block successfully mined!");
    // 3. Add block to chain
    this.chain.push(block);
    // 4. Clean pending transactions
    this.pendingTransactions = [];
  }
  /**
   * @description  Add transactions to array of pending transactions
   * @param        {Transaction} transaction
   */
  addTransaction(transaction) {
    // 1. Check addresses
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error("Transaction must include from and to address");
    }
    // 2. Check if transaction is valid
    if (!transaction.isValid()) {
      throw new Error("Cannot add invalid transaction");
    }
    // 3. if everything went well, add transaction to pending transactions
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

module.exports = Blockchain;
