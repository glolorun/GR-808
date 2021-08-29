import { Injectable, Output, EventEmitter } from '@angular/core';
import { Transport } from "tone";
import { Kick } from "src/app/Engines/kick";
import { LogService } from "src/app/Utility/log.service";



export const InstrumentSelect = {
  Kick: 'Kick',
  Snare: 'Snare',
  Hat: 'Hat',
};

export interface TemplateLiteral {
   name: string;
}

const name = InstrumentSelect.Kick

@Injectable({
  providedIn: 'root'
})

export class InstrumentService {

    private ctx: AudioContext;
    @Output() public sampleTrig = new EventEmitter<MouseEvent>();
    private kick: Kick;

    public importName = name

    constructor(private logger: LogService) {
      this.ctx = new AudioContext();
      this.kick = new Kick(this.ctx);

    }
    public triggerInstruments()  {
      this.kick.trigger(this.ctx.currentTime), this.testLog();

    };
    testLog(): void {
      this.logger.log('Trigging ' + this.importName);
    }
}