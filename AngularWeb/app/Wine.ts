export class Wine {
	_id:any;
	estate:string;
	wineType:string;
	style:string;
	wineName:string;
	vintage:number;
	rating:number;
	description:string;
	quantity:number;
	fileName:string
}

export class Estate {
	_id:any;
	estateName:string;
}

export class WineType {
	_id:any;
	wineTypeName:string;
}

export class Style {
	_id:any;
	styleName:string;
}
