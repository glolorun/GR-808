import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transport } from "tone";
import { ClockComponent } from "../Components/clock/clock.component";
import { InstrumentService } from "../Components/instruments/instrument.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  public loopEvent = new EventEmitter<MouseEvent>();
  runLoop: void;


  constructor(public clockComponent: ClockComponent, public instrumentService: InstrumentService) { }
  startLoop(): void {
    this.loopEvent.emit, (this.runLoop = this.clockComponent.playLoop());
  }

  stop = () => {
    Transport.stop();
    Transport.clear(this.clockComponent.loopId);
  };

  pause = () => {
    Transport.stop();
  };


  
 play(): void {
  this.loopEvent.emit,
  this.clockComponent.defaultLoop();
    Transport.start();
  };

  ngOnInit(): void {
  }

}
