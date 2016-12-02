require('dotenv').config();
var mongojs = require("mongojs");
var db = mongojs(process.env.MongoDatabase);

exports.db = db;