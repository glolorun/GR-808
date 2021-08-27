import { Component, OnInit } from '@angular/core';
import { MetronomeComponent } from "../metronome/metronome.component";

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
