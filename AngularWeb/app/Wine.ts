export class Wine {
	_id:string;
	estate:Estate;
	wineType:WineType;
	style:Style;
	wineName:string;
	vintage:number;
	rating:number;
	description:string;
	quantity:number;
}

export class Estate {
	_id:string;
	estateName:string;
}

export class WineType {
	_id:string;
	wineTypeName:string;
}

export class Style {
	_id:string;
	styleName:string;
}
