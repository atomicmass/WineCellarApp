import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Wine } from './wine';
import { WineService } from './wine.service';

@Component({
	moduleId: module.id,
  	selector: 'wine-detail',
  	templateUrl: 'wine-detail.component.html',
  	styleUrls: ['wine-detail.component.css']
})

export class WineDetailComponent implements OnInit {
	constructor(
		private wineService: WineService,
		private route: ActivatedRoute,
		private location: Location) {}

	ngOnInit(): void {
  		this.route.params
    		.switchMap((params: Params) => this.wineService.getWine(params['id']))
    		.subscribe(wine => this.wine = wine);
	}

	goBack(): void {
  		this.location.back();
	}

	@Input()
	wine: Wine;
}