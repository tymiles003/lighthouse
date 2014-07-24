var config =require("./config");
var model =require("./model")(config.getUrl());
var fs = require('fs');
var async = require('async');
var moment = require('moment');
var underscore = require("underscore");

var deleteAll = function(name, callback) {
    console.log("Deleting model: " + model);
    model[name].find(function(err, items){
        console.log('got '+items.length);
        async.each(items, function(item, cb){
            console.log('deleting '+JSON.stringify(item));
            item.remove(cb);
        }, callback);
    });
}

var load = function(name, callback){
    console.log("Loading model: " + name);
    var jsonFilename = './seed/'+name+'s';
    var items = require(jsonFilename);
    async.each(items, function(item, cb){
        console.log('saving '+JSON.stringify(item));
        var obj = new model[name](item);
        obj.save(cb);
    }, callback);
}

module.exports.seed = function() {
    async.each(['iBeacon', 'Action'], function(name, callback){
        deleteAll(name, function(err){
            if (err) {
                console.log('problem deleting '+name+err);
                callback(err);
            } else{
                console.log('successfully deleted '+name);
                load(name,callback);
            }
        })
    }, function(err){
        if (err) {
            console.log('failed loading' + err);
        } else {

            console.log('success loaded all items');
        }
    })
};
