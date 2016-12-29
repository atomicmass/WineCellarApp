import { Component } from '@angular/core';
import { Wine, Estate } from './wine';
import { WineService } from './wine.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-estates',
  templateUrl: 'estates.component.html'
})

export class EstatesComponent implements OnInit { 
	estates: Estate[];
  estate: Estate;
  wines: Wine[];
  selectedWine: Wine;

	constructor(
    private wineService: WineService,
    private router: Router) { 
  }

  ngOnInit(): void {
		this.getEstates();
  }

  onSelect(estate: Estate): void {
   	this.estate = estate;
    let search = '{"estate":"' + this.estate.estateName + '"}';
    this.wineService.searchWines(search)
      .then(wines => this.wines = wines);
  }

  getEstates() : void {
  	this.wineService.getEstates()
  		.then(estates => this.estates = estates);
  }

  onWineSelect(wine: Wine): void {
    this.selectedWine = wine;
  }  
}
