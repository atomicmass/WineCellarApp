var con = require('../connection').connection;

module.exports = 
{
	getAll: function (request, response) {
		con.query('SELECT * FROM Style', function (err, results, fields) {
  			response.end(JSON.stringify(results));
  		});
	},

	getOne: function(request, response) {
		con.query('SELECT * FROM Style where styleId = ?', [request.params.id], 
    		function (err, results, fields) {
     			 response.end(JSON.stringify(results));
  			});
	},

	insert: function(request, response) {
    if(!request.body.styleName) {
      console.log('styleName not found in body: ' + JSON.stringify(request.body));
    }
    else {
  		con.execute('insert into Style(styleName) values(?);', [request.body.styleName],
      		function(err, results, fields){
      			if(err)
        				console.log(err);
       		});
    }

    response.end();
	}
}