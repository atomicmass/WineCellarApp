import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { WineDetailComponent } from './wine-detail.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule ],
  declarations: [ 
  	AppComponent,
  	WineDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
