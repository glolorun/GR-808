import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterfaceComponent } from './Components/interface/interface.component';
import { RowComponent } from './Components/row/row.component';
import { ButtonComponent } from './Components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    RowComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
