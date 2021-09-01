import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="app">
      <counter [init]="initialCount"></counter>
    </div>
    "`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'gr808';

  initialCount: number = 10;

}
