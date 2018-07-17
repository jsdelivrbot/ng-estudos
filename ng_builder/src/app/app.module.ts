import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrettyPrintPipe } from './pretty-print.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrettyPrintPipe
  ],
  imports: [
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
