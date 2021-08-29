import { Injectable, Output, EventEmitter } from '@angular/core';
import { Kick } from "src/app/Engines/kick";
@Injectable({
  providedIn: 'root'
})


export class InstrumentService {

    // private sound: any;
    private ctx: AudioContext;
    // private loopId: number;
    //////////////For Testing /////////////////////
    @Output()
    public sampleTrig = new EventEmitter<MouseEvent>();
    private kick: Kick;
  
    constructor() {
      this.ctx = new AudioContext();
      this.kick = new Kick(this.ctx);
    }
    public triggerInstruments()  {
      this.kick.trigger(this.ctx.currentTime);
    };
}