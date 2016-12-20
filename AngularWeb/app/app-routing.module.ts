import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { WinesComponent }       from './wines.component';
import { WineDetailComponent }  from './wine-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  	{ path: 'dashboard',  component: DashboardComponent },
  	{ path: 'detail/:id', component: WineDetailComponent },
  	{ path: 'wines',      component: WinesComponent }
];

@NgModule({
  	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})

export class AppRoutingModule {}