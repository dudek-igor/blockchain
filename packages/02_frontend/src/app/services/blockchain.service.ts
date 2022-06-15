import { Injectable } from '@angular/core';
import {
  Blockchain,
  KeyGenerator,
  // @ts-ignore
} from 'blockchain';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();
  public walletKeys: KeyGenerator[] = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
  }
  /**
   * @description Generate public and private key
   */
  private generateWalletKeys() {
    const keys: KeyGenerator = new KeyGenerator();
    this.walletKeys.push(keys);
  }
  /**
   * @description Get chain of blocks
   */
  public getBlocks() {
    return this.blockchainInstance.chain;
  }
}
