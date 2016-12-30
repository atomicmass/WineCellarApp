"use strict";
var db = require('../connection').db;
var wineTypes = db.collection("wineTypes");

module.exports =
{
  getAll: function (request, response) {
    wineTypes.find(function (err, docs) {
      response.end(JSON.stringify(docs));
    });
  },

  getOne: function(request, response) {
    wineTypes.find({"wineTypeName" : request.params.name}, function (err, docs) {
      response.end(JSON.stringify(docs[0]));
    });
  },

    insert: function(request, response) {
      if(!request.body._id)
        request.body._id = String(mongojs.ObjectId());
      wineTypes.save(request.body, {}, function (err, docs) {
        console.log(err);
    });

    response.end();
  }
};
