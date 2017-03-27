'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    pollInfo: {
        id: String,
        pollName: String,
        owner: String,
        stats: {
           views: Number,
           question: String,
           fields: Array,
           values: Array
        }
    },
});

module.exports = mongoose.model('Poll', Poll);
