// const fs = require("fs");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

class KeyGenerator {
  constructor() {
    this.#generateKeyPair();
  }
  /**
   * @description Generates key pair - public and private key
   */
  #generateKeyPair() {
    this.keyObj = ec.genKeyPair();
    this.publicKey = this.keyObj.getPublic("hex");
    this.privateKey = this.keyObj.getPrivate("hex");
  }
  /**
   * @description Save keys to txt file
   */
  saveKeysToTxt() {
    // fs.writeFileSync(
    //   "keyPair.txt",
    //   `\t Private key ${this.privateKey} \n \n \t Public key ${this.publicKey}`
    // );
  }
}

// const keyGenerator = new KeyGenerator();
// keyGenerator.saveKeysToTxt();

module.exports = KeyGenerator;
