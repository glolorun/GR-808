import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { BUTTONS, LIGHTERS, POSITIONS } from '../button/button.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  @Input() buttonArmed: boolean = false;
  @Input() currentNote: boolean = false;

  @Input() clickButton = new EventEmitter();
  // @Input() bpm: number = 120

  public enabled = this.clickButton;

  public itsLit = (this.currentNote = true);

  buttons = BUTTONS;
  lighters = LIGHTERS;
  positions = POSITIONS;

  // listClick(event, newValue) {
  //   console.log(newValue);
  //   this.selectedItem = newValue;  // don't forget to update the model here
  //   // ... do other stuff here ...
  // }

  ngOnInit(): void {}
}
