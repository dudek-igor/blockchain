import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import { Block } from '@packages/01_blockchain';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss'],
})
export class BlockViewComponent implements OnInit {
  @Input() public block: Block;

  constructor() {}

  ngOnInit(): void {}
}
