var con = require('../connection').connection;

module.exports = 
{
	getAll: function (request, response) {
		con.query('SELECT * FROM WineType', function (err, results, fields) {
  			response.end(JSON.stringify(results));
  		});
	},

	getOne: function(request, response) {
		con.query('SELECT * FROM WineType where wineTypeId = ?', [request.params.id], 
    		function (err, results, fields) {
     			 response.end(JSON.stringify(results));
  			});
	},

	insert: function(request, response) {
    if(!request.body.wineTypeName) {
      console.log('wineTypeName not found in body: ' + JSON.stringify(request.body));
    }
    else {
  		con.execute('insert into WineType(wineTypeName) values(?);', [request.body.wineTypeName],
      		function(err, results, fields){
      			if(err)
        				console.log(err);
       		});
    }

    response.end();
	}
}