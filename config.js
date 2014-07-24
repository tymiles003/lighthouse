var moment = require("moment");

var config = module.exports = {
    local: {
        mongo: {
            url: 'mongodb://127.0.0.1:27017/lighthouse'
        },
    },
    getUrl: function(process) {
        this.setup(process);
        return this.url;
    },
    setup: function(process) {
        console.log("local development environment")
        this.url = config.local.mongo.url;
    }
};
