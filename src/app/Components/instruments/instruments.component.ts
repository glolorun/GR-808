import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kick } from 'src/app/Engines/kick';
import { Instrument } from "tone/build/esm/instrument/Instrument";

export const InstrumentSelect = {
  Kick: 'Kick',
  Snare: 'Snare',
  Hat: 'Hat',
};

export interface InstrumentSend {
  // engine: Instruments;
  //// replaced engine with Instrument Select//////////
  // steps?: boolean[];
  // selected?: boolean;
  // handleClick?: (engine: string, steps: boolean[]) => void;
}

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
})
export class InstrumentsComponent implements OnInit {
  // private sound: any;
  private ctx: AudioContext;
  // private loopId: number;
  //////////////For Testing /////////////////////
  @Output()
  // public sampleTrig = new EventEmitter<MouseEvent>();
  private kick: Kick;

  constructor() {
    this.ctx = new AudioContext();
    this.kick = new Kick(this.ctx);
  }
  public triggerInstruments(){
    this.kick.trigger(this.ctx.currentTime);
  };
  ///////////////////////////////////////////
  // constructor() {
  //   this.ctx = new AudioContext();
  //   switch (+InstrumentSelect as any) {
  //     case InstrumentSelect.Kick:
  //       this.sound = new Kick(this.ctx);
  //       break;
  //     case 'Snare':
  //       this.sound = new Kick(this.ctx);
  //       break;
  //     case 'HiHat':
  //       this.sound = new Kick(this.ctx);
  //       break;
  //   }

  //   this.state = {
  //     steps: [
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //       false,
  //     ],
  //     volume: 1,
  //     tone: 130,
  //     /* enable fxAmount to allow native fx code */
  //     // fxAmount: 0,
  //   };

  //   this.loopId = 0;
  //   Transport.bpm.value = 120;
  // }

  ngOnInit(): void {}
}
