import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Wine } from './wine';
import { WineService } from './wine.service';

@Component({
	moduleId: module.id,
	selector: 'wine-summary',
	templateUrl: 'wine-summary.component.html',
	styleUrls: ['wine-summary.component.css']
})

export class WineSummaryComponent implements OnInit {
	@Input()
	wine: Wine;

	@Input()
	wineImage: string;

	constructor(
		private wineService: WineService,
		private router: Router) {
		}

		ngOnInit(): void {
		}

		ngOnChanges(changes: SimpleChanges): void {
			 if(changes['wine']) {
				 if(this.wine && this.wine.fileName != null) {
					this.wineImage = this.wineService.wineImagesUrl + "/" + this.wine.fileName;
				}
			 }
	 	}

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
