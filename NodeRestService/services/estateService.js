var con = require('../connection').connection;

module.exports = 
{
	getAll: function (request, response) {
		con.query('SELECT * FROM Estate', function (err, results, fields) {
  			response.end(JSON.stringify(results));
  		});
	},

	getOne: function(request, response) {
		con.query('SELECT * FROM Estate where estateId = ?', [request.params.id], 
    		function (err, results, fields) {
     			 response.end(JSON.stringify(results));
  			});
	},

	insert: function(request, response) {
	    if(!request.body.estateName) {
	      console.log('estateName not found in body: ' + JSON.stringify(request.body));
	    }
	    else {
	  		con.execute('insert into Estate(estateName) values(?);', [request.body.estateName],
	      		function(err, results, fields){
	      			if(err)
	        				console.log(err);
	       		});
	    }

	    response.end();
	}
}