import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent }  from './app.component';
import { WineDetailComponent } from './wine-detail.component';
import { WineSummaryComponent } from './wine-summary.component';
import { WinesComponent } from './wines.component';
import { EstatesComponent } from './estates.component';
import { DashboardComponent } from './dashboard.component';
import { WineService } from './wine.service';

import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	AppRoutingModule,
    HttpModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ 
  	AppComponent,
  	WineDetailComponent,
    WineSummaryComponent,
  	WinesComponent,
  	DashboardComponent,
    EstatesComponent ],
  bootstrap: [ AppComponent ],
  providers: [ WineService ]

})

export class AppModule { 

}
