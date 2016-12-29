import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Wine, Estate, WineType, Style } from './wine';
import { WineService } from './wine.service';

@Component({
	moduleId: module.id,
  	selector: 'wine-detail',
  	templateUrl: 'wine-detail.component.html',
  	styleUrls: ['wine-detail.component.css']
})

export class WineDetailComponent implements OnInit {
	@Input()
	wine: Wine;

	@Input()
	estates: Estate[];

	@Input()
	types: WineType[];

	@Input()
	styles: Style[];

	constructor(
		private wineService: WineService,
		private route: ActivatedRoute,
		private location: Location,
    	private router: Router) {}

	ngOnInit(): void {
  		this.route.params
    		.switchMap((params: Params) => this.wineService.getWine(params['id']))
    		.subscribe(wine => this.wine = wine);

    	this.wineService.getEstates()
    		.then(estates => this.estates = estates);

    	this.wineService.getTypes()
    		.then(types => this.types = types);

    	this.wineService.getStyles()
    		.then(styles => this.styles = styles);
	}

	goBack(): void {
  		this.location.back();
	}

	save(): void {
  		this.wineService.saveWine(this.wine);
  		this.router.navigate(['/wines']);
	}

	
}