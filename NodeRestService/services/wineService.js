"use strict";

let db = require('../connection').db;
let wines = db.collection("wines");
let images = db.collection("images");
let mongojs = require("mongojs");
let fs = require('fs');
let imageFolder = "D:\\temp\\";

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
    let bodyarr = [];

    request.on('data', function(chunk) {
      bodyarr.push(chunk);
    });

    request.on('end', function() {
      let img = bodyarr.join('');

      let index = img.indexOf("base64,") + 7;
      let format = img.substring(0, index);
      let base64Data = img.replace(format, "");
      let id = String(mongojs.ObjectId());
      format = format.substring(format.indexOf("/")+1, format.indexOf(";"));
      let fileName = id + "." + format;

      fs.writeFile(imageFolder + fileName,
        base64Data, 'base64', function(err) {
        if(err) {
          console.log(err);
        }
      });

      response.end(JSON.stringify({'fileName' : fileName}));
    });

  },

  getImage: function(request, response) {
    console.log(imageFolder + request.params.fileName);

    var options = {
      root: imageFolder,
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    response.sendFile(request.params.fileName, options, function (err) {
      if (err) {
        console.log(err);
        response.status(err.status).end();
      }
      response.end();
    });
  },

  delete: function(request, response) {
    wines.remove({"_id" : request.params.id});
    response.end();
  }
};
