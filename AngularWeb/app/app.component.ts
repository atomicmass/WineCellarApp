import { Component } from '@angular/core';
import { Wine } from './wine';
import { WineService } from './wine.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
	<h1>Angular</h1>

	<ul class="heroes">
  		<li *ngFor="let wine of wines"
  			[class.selected]="wine === selectedWine"
        	(click)="onSelect(wine)">
  			<span class="badge">{{wine._id}}</span> {{wine.wineName}}
  		</li>
	</ul>

	<wine-detail [wine]="selectedWine"></wine-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 30em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [WineService]
})



export class AppComponent implements OnInit { 
	wines: Wine[];
	wine: Wine;
	selectedWine: Wine;

	constructor(private wineService: WineService) { }

	ngOnInit(): void {
		this.getWines();
  	}

  	onSelect(wine: Wine): void {
    	this.selectedWine = wine;
  	}

  	getWines() : void {
  		this.wineService.getWines()
  			.then(wines => this.wines = wines);
  	}
}
