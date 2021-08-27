import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent implements OnInit {

// private interval: number;
//     private timer: number;

//     constructor(interval = 3000) {
//         this.interval = interval;
//     }

//     start(): void {
//         this.tick();
//     }

//     stop() {
//         clearTimeout(this.timer);
//     }

//     setInterval(interval: number) {
//         this.interval = interval;
//     }

//     private tick() {
//         // do something here
//         this.timer = setTimeout(this.tick.bind(this), this.interval);
//     }
constructor() { }

  ngOnInit(): void {
  }

}
