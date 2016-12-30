var db = require('../connection').db;
var wines = db.collection("wines");
var images = db.collection("images");
var mongojs = require("mongojs");
var fs = require('fs');


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

  search: function(request, response) {
    wines.find(request.body, function (err, docs) {
      response.end(JSON.stringify(docs));
    });
  },

  insert: function(request, response) {
    if(!request.body._id)
      request.body._id = String(mongojs.ObjectId());
    if(isNaN(request.body.quantity) || request.body.quantity < 0)
      request.body.quantity = 0;
    wines.save(request.body, {}, function (err, docs) {
      if(err !== null)
        console.log("Error : " + err);
    });

    response.end();
  },

  saveImage: function(request, response) {
    var bodyarr = [];
    request.on('data', function(chunk){
      bodyarr.push(chunk);
    });

    request.on('end', function(){
      fs.writeFile("/temp/test", bodyarr.join(''), function(err) {
        if(err) {
          return console.log(err);
        }

        console.log("The file was saved!");
      }); 

      response.end();
    });

    
  },

  delete: function(request, response) {
    wines.remove({"_id" : request.params.id});
    response.end();
  }
};
