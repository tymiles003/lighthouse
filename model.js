var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var moment = require('moment');
var SALT_WORK_FACTOR = 10;
var underscore = require("underscore");
var config = require("./config");

var instance = null;
module.exports = function(url) {
    if (instance){
        return instance;
    }
    console.log("model initiated with "+url);
    mongoose.connect(url);

    var Schema = mongoose.Schema;

    var dropCollection = function(name, db){
        mongoose.connection.db.dropCollection(name, db);
    };

    var iBeacon = new Schema({
        region_uuid: {
            type: String,
            required: true
        },
        region_major: {
            type: String,
            required: true
        },
        region_minor: {
            type: String,
            required: true
        },
        longitude: {
            type: Number
        },
        latitude: {
            type: Number
        },
        region_name: {
            type: String
        },
        region_description: {
            type: String
        },
        actions: [{
            type: Schema.Types.Mixed,
            ref: 'Action'
        }]
    });

    var iBeaconModel = mongoose.model("iBeacon", iBeacon);

    //enter, exit, immediate, near, far
    var Action = new Schema({
        event_type: {
            type: String,
            required: true
        },
        http_method: {
            type: String
        },
        http_url: {
            type: String
        }
    });

    var actionModel = mongoose.model("Action", Action); 

    instance = {
        dropCollection: dropCollection,
        iBeacon: iBeaconModel,
        Action: actionModel
    };
    return instance;
};