import {
  Injectable,
  Output,
  EventEmitter,
  Inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Transport } from 'tone';
import { LogService } from 'src/app/Utility/log.service';
import { Instrument } from "./kick";
import { STEPS } from '../interface-element/interface-element.component';
import { ClockComponent } from '../clock/clock.component';
import { DOCUMENT } from '@angular/common';

export const InstrumentSelect = {
  Kick: 'Kick',
  Instrument2: 'Instrument2',
  Instrument3: 'Instrument3',
};

export interface TemplateLiteral {
  name: string;
}



export const instName = InstrumentSelect.Kick;

/* To implement Instrument Selector. All instances of "Kick" to be replaced with "Instrument" */
// export function instName(params:string) {
//   const name = this.selectedInstrument
//   switch (name) {
//     case InstrumentSelect.Kick:
//       return 'Kick';
//     case InstrumentSelect.Instrument2:
//       return 'Instrument 2';
//       case InstrumentSelect.Instrument3;
//       return 'Instrument 3';
//     default:
//       return '--';
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  public ctx: AudioContext;
  public kick: Instrument;

  // private isActive?: boolean

  @Output() public sampleTrig = new EventEmitter<MouseEvent>();

  public importName = instName;
  public steps = STEPS;

  constructor(
    private logger: LogService,
    // private clockComponent: ClockComponent,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {
    this.ctx = new AudioContext();
    this.kick = new Instrument(this.ctx);
    // Transport.bpm.value = 120;
    // Transport.loop = true;
    // Transport.loopEnd = '1m';

    // function queModel(model: { beatNumber: number; time: number }) {
    //   model.beatNumber++;
    //   model.time++;

    //   return model;
    // }
    // const notesInQueue = {
    //   beatNumber: this.indexNum,
    //   time: this.ctx.currentTime,
    // };
    // queModel(notesInQueue);
  }

  public triggerInstruments() {
    this.kick.trigger(this.ctx.currentTime),
      this.logger.log('Trigging '),
      this.instrumentLog()
  }

  // public giveInstruments() {
  //   this.kick.trigger(this.ctx.currentTime)
  // }


  public stepsArray =
    this._document.getElementsByClassName('.step-list__steps');

  public nodes = Array.prototype.slice.call(
    document.getElementsByClassName('step-list')
  );
  public ref = document.getElementsByClassName('button.step-list__steps')[0];
  public indexNum = this.nodes.indexOf(this.ref);

  instrumentLog(): void {
    this.logger.log('Trigging ' + this.importName);
  }

  // loopLog(): void {
  //   this.logger.log(
  //     'Trigging Loop, id:' +
  //       this.loopId +
  //       '. Current Time: ' +
  //       this.ctx.currentTime
  //   );
  // }
  // ticks(): void {
  //   this.logger.log('Quarter Notes:' + this.clockService.ticks);
  // }

  // arrayLog(beatNumber): void {
  //   this.logger.log('Trigging ' + beatNumber);
  // }

  ///rebuild in interface/////
  // public defaultLoop = () => {
  //   Transport.clear(this.loopId);
  //   const loop = (time: number) => {
  //     //4 to the floor
  //     this.kick.trigger(time);
  //     this.kick.trigger(time + 0.5);
  //     this.kick.trigger(time + 1);
  //     this.kick.trigger(time + 1.5);
  //     this.loopLog();
  //   };
  //   this.loopId = Transport.schedule(loop, '0');
  // };

  // public handleStart() {
  //   this.defaultLoop();
  //   Transport.start();
  // }
}
