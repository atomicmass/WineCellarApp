var con = require('../connection').connection;

module.exports = 
{
	getAll: function (request, response) {
		con.query('SELECT * FROM Wine', function (err, results, fields) {
  			response.end(JSON.stringify(results));
  		});
	},

	getOne: function(request, response) {
		con.query('SELECT * FROM Wine where wineId = ?', [request.params.id], 
    		function (err, results, fields) {
     			 response.end(JSON.stringify(results));
  			});
	},

	insert: function(request, response) {
    if(!request.body.wineName) {
      console.log('wineName not found in body: ' + JSON.stringify(request.body));
    }
    else {
  		con.execute('insert into Wine(wineName, wineTypeId, styleId, estateId, vintage, rating, description, quantity) values(?, ?, ?, ?, ?, ?, ?, ?);',
        [wineName, 
        request.body.wineTypeId,
        request.body.styleId, 
        request.body.estateId, 
        request.body.vintage, 
        request.body.rating, 
        request.body.description, 
        request.body.quantity
        ],
      		function(err, results, fields){
      			if(err)
        				console.log(err);
       		});
    }

    response.end();
	}
}

/*
{"wineName" : "Rubicon",
"wineTypeId" : 1,
"styleId" : 5,
"estateId" : 7,
"vintage" : 2005,
"rating" : 8,
"description" : "Old",
"quantity" : 1}*/