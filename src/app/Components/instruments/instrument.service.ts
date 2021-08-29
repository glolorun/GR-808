import { Injectable, Output, EventEmitter } from '@angular/core';
import { Transport } from 'tone';
import { Kick } from 'src/app/Engines/kick';
import { LogService } from 'src/app/Utility/log.service';

export const InstrumentSelect = {
  Kick: 'Kick',
  Snare: 'Snare',
  Hat: 'Hat',
};

export interface TemplateLiteral {
  name: string;
}

export const instName = InstrumentSelect.Kick;

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  private ctx: AudioContext;
  private kick: Kick;
private loopId: number;
  @Output() public sampleTrig = new EventEmitter<MouseEvent>();

  public importName = instName;

  constructor(private logger: LogService) {
    this.ctx = new AudioContext();
    this.kick = new Kick(this.ctx);
    Transport.bpm.value = 120;
    // Transport.schedule(this.createLoop, '0');
    Transport.loop = true;
    Transport.loopEnd = '1m';
  }
  public triggerInstruments() {
    this.kick.trigger(this.ctx.currentTime), this.instrumentLog();
  }

  instrumentLog(): void {
    this.logger.log('Trigging ' + this.importName);
  }
  loopLog(): void {
    this.logger.log('Trigging Loop');
  }

  public createLoop = () => {
    Transport.clear(this.loopId);
    const loop = (time: number) => {
    //120 bpm
    this.loopLog();
    this.kick.trigger(time);
    this.kick.trigger(time + 0.5);
    this.kick.trigger(time + 1);
    this.kick.trigger(time + 1.5);
  }
this.loopId = Transport.schedule(loop, "0")
}

  public handleStart() {
    this.createLoop();
    Transport.start();
  }

}
