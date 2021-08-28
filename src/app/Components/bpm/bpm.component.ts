import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export const bpmSchedule = {
  lookahead: 25.0, // How frequently to call scheduling function (in milliseconds)
  scheduleAheadTime: 0.1, // How far ahead to schedule audio (sec)
};

// export let noteDue = {
//   currentNote: 0,
//   nextNoteTime: 0.0,
// };

// export interface NotesInQueue {
//     beatNumber: number;
//     time: number;
//   }


export interface BpmType {
   isCurrentBpm: number
}


//   const notesInQueue = [];

//   export function scheduleNote(beatNumber, time) {
//     if (beatNumber === 'track-1') {
//     playKick(time}
//     }


@Component({
  selector: 'app-bpm',
  templateUrl: './bpm.component.html',
  styleUrls: ['./bpm.component.scss']
})
export class BpmComponent implements OnInit {

  constructor() { }

  @Input() currentBpm: number = 120;
  public isCurrentBpm = this.currentBpm
  
    @Output() outputBpm = new EventEmitter<number>();
  
    public get bpmControl(): number {
      if (!this.isCurrentBpm) {
        return 120;
      }
      return this.isCurrentBpm;
    }
  
  //   public nextNote() {
  //     const secondsPerBeat = 60.0 / this.isCurrentBpm;
  
  //     noteDue.nextNoteTime += secondsPerBeat; // Add beat length to last beat time
  
  //     // Advance the beat number, wrap to zero
  //     noteDue.currentNote++;
  //     if (noteDue.currentNote === 16) {
  //       noteDue.currentNote = 0;
  //     }
  //   }
  

  ngOnInit(): void {
  }

}
