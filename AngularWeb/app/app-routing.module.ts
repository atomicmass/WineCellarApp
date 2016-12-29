import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { WinesComponent }       from './wines.component';
import { WineDetailComponent }  from './wine-detail.component';
import { EstatesComponent }  	from './estates.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  	{ path: 'dashboard', component: DashboardComponent },
  	{ path: 'detail/:id', component: WineDetailComponent },
  	{ path: 'detail', component: WineDetailComponent },
  	{ path: 'wines', component: WinesComponent },
  	{ path: 'estates', component: EstatesComponent }
];

@NgModule({
  	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})

export class AppRoutingModule {}