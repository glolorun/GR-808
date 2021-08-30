import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  STEPS,
  LIGHTERS,
  POSITIONS,
  // INSTRUMENTBUTTONS,
} from '../interface-element/interface-element.component';
import { ViewEncapsulation } from '@angular/core';
import { InstrumentService, instName } from '../Instruments/instrument.service';
import { LogService } from 'src/app/Utility/log.service';
import { FormControl } from '@angular/forms';
import { ClockComponent } from '../clock/clock.component';
import { DOCUMENT } from '@angular/common';
import { Transport, TransportTime } from 'tone';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InterfaceComponent implements OnInit {
  constructor(
    private instrumentService: InstrumentService,
    private logger: LogService,
    private clockComponent: ClockComponent
  ) {}
@Input() isActive: boolean = false
@Input() pressed: boolean = false



elementIsPressed(): boolean {
  return this.isActive
}

 elementIsActive(): boolean {
  return this.isActive
}

  // get stepIsPressed(): boolean {
  //   return this.stepPress;
  // }

  @Input() clickButton = new EventEmitter();

  @Output()
  public instrumentEvent = new EventEmitter<MouseEvent>();

  @Output()
  public loopEvent = new EventEmitter<MouseEvent>();

  public enabled = this.clickButton;

  // public itsLit = (this.currentNote = true);

  public steps = STEPS;
  lighters = LIGHTERS;
  positions = POSITIONS;
  // instrumentButtons = INSTRUMENTBUTTONS;
  handleInstrument: void;
  instrumentName = instName;
  runLoop: void;

  // Activator.handleId(Activator.id);

  currentTimeLog(): void {
    this.logger.log(Transport.position);
  }

 
   


  getInstrument(): void {
    this.instrumentEvent.emit, this.actionLog();
    this.handleInstrument = this.instrumentService.triggerInstruments();
  }

  actionLog(): void {
    this.logger.log('Trigging');
  }

  startLoop(): void {
    this.loopEvent.emit, (this.runLoop = this.clockComponent.playLoop());
  }


  // stopLoop(): void {
  //   this.loopEvent.emit,
  //   (this.stopLoop = this.instrumentService.handleStart());
  // }

  // id: number;
  // onClick: (id: number) => void;
  // on: boolean

  ngOnInit() {}
}
