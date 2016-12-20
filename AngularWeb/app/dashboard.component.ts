import { Component, OnInit } from '@angular/core';

import { Wine } from './wine';
import { WineService } from './wine.service';

@Component({
	moduleId: module.id,
 	selector: 'my-dashboard',
 	templateUrl: 'dashboard.component.html',
 	styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	wines: Wine[] = [];

	constructor(private wineService: WineService) {}

	ngOnInit(): void {
		this.wineService.getWines()
      		.then(wines => this.wines = wines.slice(0, 5));
	}
}