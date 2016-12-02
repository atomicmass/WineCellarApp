var db = require('../connection').db;
var wines = db.collection("wines");

module.exports = 
{
  getAll: function (request, response) {
    wines.find(function (err, docs) {
      response.end(JSON.stringify(docs));
    });
  },

  getOne: function(request, response) {
    wines.find({"wineName" : request.params.name}, function (err, docs) {
      response.end(JSON.stringify(docs[0]));
    });
  },

  insert: function(request, response) {
    wines.update({"wineName" : {$exists : true}}, request.body, {upsert : true});
      response.end();
  }
}