import { Step } from './../Components/interface-element/interface-element.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transport } from 'tone';
import * as Tone from 'tone'
import { ClockComponent } from '../Components/clock/clock.component';
import { InstrumentService } from '../Components/Instruments/instrument.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public loopEvent = new EventEmitter<MouseEvent>();
  runLoop: void;

  constructor(
    public clockComponent: ClockComponent,
    public instrumentService: InstrumentService
  ) 
  { 
//     const player = {
//     steps: [false, false, false, false, false, false, false, false,
//         false, false, false, false, false, false, false, false],
//     selected: null,
//     bpm: 120,

//      handlePlayerChange: (id: number) => {
//       const s = player.steps;
//       s[id] = !s[id];
//       ({
//           player.steps = s,
//       })
//     }
// }
// Transport.loop = true;
// Transport.loopEnd = '1m'
}

  stop = () => {
    this.loopEvent.emit, this.clockComponent.stopLoop;
    Transport.clear(this.clockComponent.loopId);
  };

  pause = () => {
    this.loopEvent.emit, Tone.Transport.stop();
  };

  startLoop(): void {
    this.loopEvent.emit, (this.runLoop = this.clockComponent.playLoop());
  }



  ngOnInit(): void {}
}
