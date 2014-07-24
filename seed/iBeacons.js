var ObjectID = require('mongodb').ObjectID;
var moment = require('moment');

module.exports = [{
  "_id": ObjectID("52164823f0a8af33fa000003"),
  "region_uuid": "11111111-2222-3333-4444-555555555555",
  "region_major": "1",
  "region_minor": "1",
  "region_name": "MakeAndBuild Office",
  "region_description": "Jeremy Office",
  "latitude": 33.853613,
  "longitude": -84.363051,
  "actions": [{
    "event_type": "ENTER_REGION",
    "http_method": "GET",
    "http_url": "http://127.0.0.1:4242/lighthouse" 
  }]
}];