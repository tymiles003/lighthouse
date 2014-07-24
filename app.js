var underscore = require("underscore");
var config = require('./config');
config.setup(process);

var application_root = __dirname,
  express = require("express"),
  path = require("path"),
  mongoose = require('mongoose'),
  app = express(),
  model = require("./model")(config.getUrl()),
  moment = require("moment"),
  underscore = require("underscore");

//-------- Route Config
app.configure(function() {
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.get('/lighthouse', function(req, res) {
  res.status(200).send('Lighthouse is running');
});

//CRUD iBeacon services.
app.get('/lighthouse/region/ibeacon/:regionUUID/:regionMajor/:regionMinor', function(req, res) {
  console.log('Retrieving iBeacons for region ' + req.params.regionUUID + " Maj. " + req.params.regionMajor + " Min. " + req.params.regionMinor);


});

//Enter iBeacon Region
app.post('/lighthouse/region/enter/:regionUUID/:regionMajor/:regionMinor', function(req, res) {
  console.log('Entering region ' + req.params.regionUUID + " Maj. " + req.params.regionMajor + " Min. " + req.params.regionMinor);



  res.status(200).send('Still not implemented');
});

app.post('/lighthouse/region/exit/:regionUUID/:regionMajor/:regionMinor', function(req, res) {
  console.log('Exiting region ' + req.params.regionUUID + " Maj. " + req.params.regionMajor + " Min. " + req.params.regionMinor);

  res.status(200).send('Still not implemented');
});

app.listen(process.env.PORT || 4242);

//Seed the MongoDB data
var seed = require("./seed")
seed.seed();
