var db = require('../connection').db;
var styles = db.collection("styles");

module.exports = 
{
  getAll: function (request, response) {
    styles.find(function (err, docs) {
      response.end(JSON.stringify(docs));
    });
  },

  getOne: function(request, response) {
    styles.find({"styleName" : request.params.name}, function (err, docs) {
      response.end(JSON.stringify(docs[0]));
    });
  },

  insert: function(request, response) {
    styles.update({"styleName" : {$exists : true}}, request.body, {upsert : true});
      response.end();
  }
}