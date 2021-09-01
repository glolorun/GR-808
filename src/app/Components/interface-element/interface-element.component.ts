import { Component, EventEmitter, Output, Input } from '@angular/core';
import { InstrumentService } from '../Instruments/instrument.service';
import { LogService } from 'src/app/Utility/log.service';
import { ViewEncapsulation } from '@angular/core';

export interface Step {
  id: number;
  value: string;
}

export interface Lighter {
  id: number;
  value: string;
}

export interface Position {
  id: number;
  value: string;
}

export interface InstrumentButton {
  id: number;
  value: string;
}

export const STEPS: Step[] = [
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
  { id: 6, value: '' },
  { id: 7, value: '' },
  { id: 8, value: '' },
  { id: 9, value: '' },
  { id: 10, value: '' },
  { id: 11, value: '' },
  { id: 12, value: '' },
  { id: 13, value: '' },
  { id: 14, value: '' },
  { id: 15, value: '' },
  { id: 16, value: '' },
];

export const LIGHTERS: Lighter[] = [
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
  { id: 6, value: '' },
  { id: 7, value: '' },
  { id: 8, value: '' },
  { id: 9, value: '' },
  { id: 10, value: '' },
  { id: 11, value: '' },
  { id: 12, value: '' },
  { id: 13, value: '' },
  { id: 14, value: '' },
  { id: 15, value: '' },
  { id: 16, value: '' },
];

export const POSITIONS: Position[] = [
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
  { id: 4, value: '4' },
  { id: 5, value: '5' },
  { id: 6, value: '6' },
  { id: 7, value: '7' },
  { id: 8, value: '8' },
  { id: 9, value: '9' },
  { id: 10, value: '10' },
  { id: 11, value: '11' },
  { id: 12, value: '12' },
  { id: 13, value: '13' },
  { id: 14, value: '14' },
  { id: 15, value: '15' },
  { id: 16, value: '16' },
];

@Component({
  selector: 'app-interface-element',
  styleUrls: ['./interface-element.component.scss'],
  encapsulation: ViewEncapsulation.None,

  template: `'
    <mat-list-item
      class="interface-element__step-list"
      *ngFor="let x of step; let i = index"
      [ngClass]="{
        'background-color:green': isActive,
        'background-color:black': !isActive
      }"
      (click)="elementIsPressed()"
      (click)="getInstrument()"
      (keypress)="getInstrument()"
    >
      <input
        [attr.id]="i"
        [(ngModel)]="x.id"
        class="interface__step-list-steps"
        type="button"
      />
    </mat-list-item> `,
})
export class InterfaceElementComponent {
  constructor(
    private instrumentService: InstrumentService,
    private logger: LogService
  ) {}
  handleInstrument: void;

  @Input() childMessage = STEPS;

  @Input() isActive: boolean = false;
  @Input() clickButton = new EventEmitter();
  @Output()
  public instrumentEvent = new EventEmitter<MouseEvent>();
  @Output()
  public loopEvent = new EventEmitter<MouseEvent>();
  public enabled = this.clickButton;

  elementIsPressed(): boolean {
    return (this.isActive = !this.isActive);
  }


  getInstrument(): void {
    this.instrumentEvent.emit, this.actionLog();
    this.handleInstrument = this.instrumentService.triggerInstruments();
  }
  public step = this.childMessage;

  actionLog(): void {
    this.logger.log('Trigging');
  }
}
