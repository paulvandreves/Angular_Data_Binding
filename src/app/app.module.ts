import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { cockpitComponent } from './cockpit/cockpit.component';
import { serverElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent, 
    cockpitComponent,
    serverElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
