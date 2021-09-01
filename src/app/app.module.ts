import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './Components/interface/interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ClockComponent } from './Components/clock/clock.component';
import { InstrumentService } from './Components/Instruments/instrument.service';
import { LogService } from './Utility/log.service';
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { InterfaceElementComponent } from "./Components/interface-element/interface-element.component";
import * as Tone from 'tone'


export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    ClockComponent,
    HeaderComponent,
    InterfaceElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [InstrumentService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
