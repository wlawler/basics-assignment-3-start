import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ddbuttComponent} from './app-ddbutt/ddbutt.component';
import { PpcomponentComponent } from './pp/ppcomponent/ppcomponent.component';

@NgModule({
  declarations: [
    AppComponent, 
    ddbuttComponent, PpcomponentComponent 
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
