const fs = require("fs");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

class KeyGenerator {
  /**
   * @description Generates key pair - public and private key
   */
  generateKeyPair() {
    const key = this.ec.genKeyPair();
    const publicKey = key.getPublic("hex");
    const privateKey = key.getPrivate("hex");
    fs.writeFileSync(
      "keyPair.txt",
      `\t Private key ${privateKey} \n \n \t Public key ${publicKey}`
    );
  }
}

const keyGenerator = new KeyGenerator();
keyGenerator.generateKeyPair();
