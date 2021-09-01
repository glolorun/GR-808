import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  STEPS,
  LIGHTERS,
  POSITIONS,
} from '../interface-element/interface-element.component';
import { ViewEncapsulation } from '@angular/core';
import { InstrumentService, instName } from '../Instruments/instrument.service';
import { LogService } from 'src/app/Utility/log.service';
import { ClockComponent } from '../clock/clock.component';
import { Transport } from 'tone';

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

  @Input() isActive: boolean = false;

  @Input() clickButton = new EventEmitter();

  @Output()
  public instrumentEvent = new EventEmitter<MouseEvent>();

  @Output()
  public loopEvent = new EventEmitter<MouseEvent>();

  public enabled = this.clickButton;

  public steps = STEPS;
  parentMessage = this.steps;
  lighters = LIGHTERS;
  positions = POSITIONS;
  handleInstrument: void;
  instrumentName = instName;
  runLoop: void;

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

  public handleStop() {
    this.loopEvent.emit,
    Transport.stop();
  }
  ngOnInit() {}
}
