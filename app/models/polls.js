'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    pollInfo: {
        id: String,
        pollName: String,
        owner: String,
        fields: Array,
        question: String,
        values: Array,
        votes: Array,
        stats: {
           views: Number,
           createDate: Date
        }
    },
});

module.exports = mongoose.model('Poll', Poll);
