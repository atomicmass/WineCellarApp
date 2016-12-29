import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wine, Estate, WineType, Style } from './wine'

@Injectable()
export class WineService {

	private winesUrl = 'http://localhost:8081/wine'; 
	private estatesUrl = 'http://localhost:8081/estate';
	private typesUrl = 'http://localhost:8081/winetype';
	private stylesUrl = 'http://localhost:8081/style';
	private winesSearchUrl = 'http://localhost:8081/wine/search'; 

	constructor(private http: Http) { }

	getWines(): Promise<Wine[]> {
		return this.http.get(this.winesUrl)
               .toPromise()
               .then(response => response.json() as Wine[] )
               .catch(this.handleError);
	}

	getWine(id: string): Promise<Wine> {
		if(id == '' || id == null) {
			return Promise.resolve(new Wine());
		}
		return this.getWines()
			.then(wines => wines.find(wine => wine._id == id));
	}

	drink(wine: Wine): Wine {
		if(wine.quantity > 0) {
			wine.quantity--;
			this.saveWine(wine);
		}

		return wine;
	}

	buy(wine: Wine): Wine {
		wine.quantity++;
		this.saveWine(wine);
		return wine;
	}

	delete(wine: Wine): void {
		this.http.delete(this.winesUrl + '/' + wine._id).toPromise()
               .catch(this.handleError);;
	}

	saveWine(wine: Wine): void {
		this.http.post(this.winesUrl, wine).toPromise()
               .catch(this.handleError);;
	}

	searchWines(search: string): Promise<Wine[]> {
		return this.http.post(this.winesSearchUrl, JSON.parse(search))
               .toPromise()
               .then(response => response.json() as Wine[] )
               .catch(this.handleError);
	}

	getEstates(): Promise<Estate[]> {
		return this.http.get(this.estatesUrl)
               .toPromise()
               .then(response => response.json() as Estate[])
               .catch(this.handleError);
	}

	getTypes(): Promise<WineType[]> {
		return this.http.get(this.typesUrl)
               .toPromise()
               .then(response => response.json() as WineType[])
               .catch(this.handleError);
	}

	getStyles(): Promise<Style[]> {
		return this.http.get(this.stylesUrl)
               .toPromise()
               .then(response => response.json() as Style[])
               .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
    	return Promise.reject(error.message || error);
  	}
}