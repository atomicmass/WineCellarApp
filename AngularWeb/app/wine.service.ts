import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wine } from './wine'

@Injectable()
export class WineService {

	private winesUrl = 'http://localhost:8081/wine';  // URL to web api

	constructor(private http: Http) { }

	getWines(): Promise<Wine[]> {
		console.log('ere'); // for demo purposes only
		 return this.http.get(this.winesUrl)
               .toPromise()
               .then(response => response.json() as Wine[] )
               .catch(this.handleError);
	}

	getWine(id: string): Promise<Wine> {
		return this.getWines()
			.then(wines => wines.find(wine => wine._id == id));
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
    	console.log('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  }
}