import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  STEPS,
  LIGHTERS,
  POSITIONS,
  INSTRUMENTBUTTONS,
} from '../interface-element/interface-element.component';
import { ViewEncapsulation } from '@angular/core';
import { InstrumentService } from '../instruments/instrument.service';
import { Instrument } from "tone/build/esm/instrument/Instrument";

@Component({
  selector: 'app-interface',
  templateUrl: './Interface.component.html',
  styleUrls: ['./Interface.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InterfaceComponent implements OnInit {
  @Input() stepArmed: boolean = false;
  @Input() currentNote: boolean = false;

  @Input() clickButton = new EventEmitter();

  @Output()
  public instrumentEvent = new EventEmitter<MouseEvent>();

  // @Input() bpm: number = 120

  public enabled = this.clickButton;

  public itsLit = (this.currentNote = true);

  steps = STEPS;
  lighters = LIGHTERS;
  positions = POSITIONS;
  instrumentButtons = INSTRUMENTBUTTONS;
  handleInstrument: void;

  constructor(private instrumentService: InstrumentService) {}

  getInstrument(trig: boolean): void {
    this.instrumentEvent.emit,
    this.handleInstrument = this.instrumentService.triggerInstruments();
  }

  public instrumentTrig = this.getInstrument()

  // listClick(event, newValue) {
  //   console.log(newValue);
  //   this.selectedItem = newValue;  // don't forget to update the model here
  //   // ... do other stuff here ...
  // }

  ngOnInit() {
  }
}
