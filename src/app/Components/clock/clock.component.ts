import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Injectable,
  Inject,
} from '@angular/core';
import { Transport } from 'tone';
import { LogService } from 'src/app/Utility/log.service';
import { InstrumentService, instName } from "../instruments/instrument.service";
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
//   export function scheduleNote(beatNumber, time) {
//     if (beatNumber === 'track-1') {
//     playKick(time}
//     }

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  time: number;
  public loopId: number;
  
  // ticks: number;

  currentBpm = Transport.bpm.value;
  constructor(
    public logger: LogService, public instrumentService: InstrumentService,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {
    Transport.bpm.value = 120;
     Transport.scheduleRepeat(function (time) {
      console.log(Transport.getTicksAtTime(time) / 48);
    }, '16n'),

    Transport.loop = true;
    Transport.loopEnd = '1m';
  }

  /* 1 measure */

  @Output() outputBpm = new EventEmitter<number>();



loopLog(): void {
  this.logger.log(
    'Trigging Loop, id:' +
    this.loopId
  );
}
ticks(): void {
  this.logger.log('Quarter Notes:' + this.ticks);
}

arrayLog(beatNumber): void {
  this.logger.log('Trigging ' + beatNumber);
}


public defaultLoop = () => {
  Transport.clear(this.loopId);
  const loop = (time: number) => {
    //4 to the floor
    this.instrumentService.kick.trigger(time);
    this.instrumentService.kick.trigger(time + 0.5);
    this.instrumentService.kick.trigger(time + 1);
    this.instrumentService.kick.trigger(time + 1.5);
          this.loopLog();
  };
  this.loopId = Transport.schedule(loop, '0');
};

public playLoop() {
  this.defaultLoop();
  Transport.start();
}



  public nodes = Array.prototype.slice.call(
    document.getElementsByClassName('step-list')
  );
  public ref = document.getElementsByClassName('button.step-list__steps')[0];
  public indexNum = this.nodes.indexOf(this.ref);









  //   bpmSchedule = {
  //     lookahead: 25.0, // How frequently to call scheduling function (in milliseconds)
  //     scheduleAheadTime: 0.1, // How far ahead to schedule audio (sec)
  //   };
  // //   logger.log('Quarter Notes:' + Transport.getTicksAtTime(time) / 192);
  // // }, '4n'
  //   currentNote = this.indexNum;
  //   nextNoteTime = 0.0; // when the next note is due.
  //   noteDue = {
  //     currentNote: 0,
  //     nextNoteTime: 0.0,
  //   };
  //   nextNote() {
  //     const secondsPerBeat = 60.0 / Transport.bpm.value;
  //     this.noteDue.nextNoteTime += secondsPerBeat; // Add beat length to last beat time
  //     // Advance the beat number, wrap to zero
  //     this.noteDue.currentNote++;
  //     if (this.noteDue.currentNote === 15) {
  //       this.noteDue.currentNote = 0;
  //     }
  //   }

  ngOnInit(): void {}
}
