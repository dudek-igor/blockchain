const SHA256 = require("crypto-js/sha256");
const EC = require("elliptic").ec;

/**
 * @class       Transaction
 * @description
 * @info        Address could be someone public key wallet
 */
class Transaction {
  #ec;
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.#ec = new EC("secp256k1");
  }
  /**
   * @description Create hash based on `fromAddress`, `toAddress` and `amount`
   */
  calculateHash() {
    return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
  }
  /**
   * @description Sign the transaction
   */
  signTransaction(signingKey) {
    // 1. Check if public key from signingKey and fromAddress is equal
    if (signingKey.getPublic("hex") !== this.fromAddress) {
      throw new Error("You cannot sign transaction for other wallets");
    }
    // 2. Create hash and sign transaction
    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, "base64");
    this.signature = sig.toDER("hex");
  }
  /**
   * @description Check if Transaction is valid
   */
  isValid() {
    // 1. Prevent when create reward for mining
    if (this.fromAddress === null) return true;
    // 2. Check if transaction has a signature
    if (!this.signature || this.signature.length === 0) {
      throw new Error("Invalid signature in this transaction");
    }
    // 3. Check if fromAddress (publicKey) and hash, created a signature
    const publicKey = this.#ec.keyFromPublic(this.fromAddress, "hex");
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}
module.exports = Transaction;
