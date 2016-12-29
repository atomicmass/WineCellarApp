import { Component } from '@angular/core';
import { Wine } from './wine';
import { WineService } from './wine.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-wines',
  templateUrl: 'wines.component.html',
  styleUrls: ['wines.component.css']
})

export class WinesComponent implements OnInit { 
	wines: Wine[];
	wine: Wine;
	selectedWine: Wine;

	constructor(
    private wineService: WineService,
    private router: Router) { 
  }

  ngOnInit(): void {
		this.getWines();
  }

  onSelect(wine: Wine): void {
   	this.selectedWine = wine;
  }

  getWines() : void {
  	this.wineService.getWines()
  		.then(wines => { this.wines = wines });
  }
}
