import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './Components/interface/interface.component';
import { RowComponent } from './Components/row/row.component';
import { ButtonComponent } from './Components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MetronomeComponent } from './Components/metronome/metronome.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    RowComponent,
    ButtonComponent,
    MetronomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
