import { Injectable } from '@angular/core';
import { Wine } from './wine'
import { WINES } from './mock-wine';

@Injectable()
export class WineService {
	getWines(): Promise<Wine[]> {
		return Promise.resolve(WINES);
	} // stub
}