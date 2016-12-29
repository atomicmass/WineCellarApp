import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Wine } from './wine';
import { WineService } from './wine.service';

@Component({
	moduleId: module.id,
  	selector: 'wine-summary',
  	templateUrl: 'wine-summary.component.html'
})

export class WineSummaryComponent implements OnInit {
	@Input()
	wine: Wine;

	constructor(
		private wineService: WineService,
	    private router: Router) { 
  	}

	ngOnInit(): void {}
	
	gotoDetail() : void {
    	this.router.navigate(['/detail', this.wine._id]);
  	}

  	drink() : void {
    	this.wine = this.wineService.drink(this.wine);
  	}

  	buy() : void {
    	this.wine = this.wineService.buy(this.wine);
  	}

  	delete() : void {
    	this.wineService.delete(this.wine);
    	this.wine = null;
  	}
}