'use strict';

var Polls = require('../models/polls.js');

function PollData () {

    this.getOne = function (req, res) {
        Polls
            .findOne({}, { '_id': false }, { sort: {$natural:-1}})
            .exec(function (err, result) {
                if (err) { throw err; }
                res.json(result);
            });
    };

};

module.exports = PollData;
