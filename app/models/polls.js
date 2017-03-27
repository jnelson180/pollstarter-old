'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    pollInfo: {
        id: String,
        pollName: String,
        owner: String,
        publicRepos: Number
    },
   stats: {
      views: Number,
      fields: [],
      values: []
   }
});

module.exports = mongoose.model('Poll', Poll);
