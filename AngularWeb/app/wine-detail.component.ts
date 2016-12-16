import { Component, Input } from '@angular/core';
import { Wine } from './wine';

@Component({
  selector: 'wine-detail',
  template: `
  <div *ngIf="wine">
		<h2>{{wine.estate.estateName}} {{wine.wineName}} {{wine.vintage}}</h2>
		<div>
			<label>Name:</label>
			<input [(ngModel)]="wine.wineName" placeholder="wine name"/>
		</div>
		<div>
			<label>Estate: </label>
			<input [(ngModel)]="wine.estate.estateName" placeholder="estate name"/>
		</div>
		<div>
			<label>Type: </label>
			<input [(ngModel)]="wine.wineType.wineTypeName" placeholder="type"/>
		</div>
		<div>
			<label>Vintage: </label>
			<input [(ngModel)]="vintage" placeholder="vintage"/>
		</div>
		<div>
			<label>Description: </label>
			<input [(ngModel)]="wine.description" placeholder="description"/>
		</div>
		<div>
			<label>Rating: </label>
			<input [(ngModel)]="wine.rating" placeholder="rating"/>
		</div>
	</div>
  `
})
export class WineDetailComponent {
	@Input()
	wine: Wine;
}