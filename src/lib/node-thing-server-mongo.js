"use strict";

var mongo   = require("mongodb"),                           // to store updates from devices
    oplog   = require("mongo-oplog"),                       // to receive update events from MongoDB
    logger  = require("log4js").getLogger("thing-server"),  // to log errors, warnings, debug info, etc. to the console
    events  = require("events"),                            // to create event handlers for updates
    net     = require("net");                               // to communicate with things over tcp sockets
