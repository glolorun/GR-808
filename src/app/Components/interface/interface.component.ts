import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  STEPS,
  LIGHTERS,
  POSITIONS,
  INSTRUMENTBUTTONS,
} from '../interface-element/interface-element.component';
import { ViewEncapsulation } from '@angular/core';
import { InstrumentService, instName } from '../instruments/instrument.service';
import { LogService } from 'src/app/Utility/log.service';
import { OuterSubscriber } from "rxjs/internal/OuterSubscriber";

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InterfaceComponent implements OnInit {
  @Input() stepArmed: boolean = false;
  @Input() currentNote: boolean = false;

  @Input() clickButton = new EventEmitter();

  @Output()
  public instrumentEvent = new EventEmitter<MouseEvent>();

  @Output()
  public loopEvent = new EventEmitter<MouseEvent>();
  // @Input() bpm: number = 120

  public enabled = this.clickButton;

  public itsLit = (this.currentNote = true);

  steps = STEPS;
  lighters = LIGHTERS;
  positions = POSITIONS;
  instrumentButtons = INSTRUMENTBUTTONS;
  handleInstrument: void;
  instrumentName = instName
  runLoop: void;


// return
  constructor(
    private instrumentService: InstrumentService,
  ) {}

  getInstrument(): void {
    this.instrumentEvent.emit,
      (this.handleInstrument = this.instrumentService.triggerInstruments());
  }

startloop(): void {
  this.loopEvent.emit,
  (this.runLoop = this.instrumentService.handleStart());
}

  // listClick(event, newValue) {
  //   console.log(newValue);
  //   this.selectedItem = newValue;  // don't forget to update the model here
  //   // ... do other stuff here ...
  // }

  ngOnInit() {}
}
