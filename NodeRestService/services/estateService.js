var db = require('../connection').db;
var estates = db.collection("estates");

module.exports = 
{
	getAll: function (request, response) {
		estates.find(function (err, docs) {
			response.end(JSON.stringify(docs));
		});
	},

	getOne: function(request, response) {
		estates.find({"estateName" : request.params.name}, function (err, docs) {
			response.end(JSON.stringify(docs[0]));
		});
	},

	insert: function(request, response) {
		estates.update({"estateName" : {$exists : true}}, request.body, {upsert : true});
	    response.end();
	}
}