'use strict';
var bodyParser = require('body-parser');
var Poll = require('../models/polls.js');

function PollHandler () {
  /* still in progress
    this.getPolls = function (req, res) {
        Polls
            .findOne({}, { '_id': false })
            .exec(function (err, result) {
                if (err) { throw err; }

                res.json(result.id);
            });
    };
*/


    this.addPoll = function (req, res) {
      console.log(req.body);
      // console.log(req);
      function processFields() {
        var optionCount = (function() {
        for(var key in req.body) {
          if(req.body.hasOwnProperty(key)){
              optionCount ++;
            }
          }
        }) - 1;
        console.log('fields length is ' + optionCount);

      }

      processFields();

      var newPoll = new Poll({
        'pollInfo.owner': req.user.github.username,
        'pollInfo.stats.question': req.body.pollQuestion,
        'pollInfo.stats.fields': ['test 1', 'test 2'],
        'pollInfo.stats.values': ['test value a', 'test value b']
      })
    newPoll.save(function (err) {
      if (err) throw err;
      //saved!
    })
    };

/* still in progress
    this.resetClicks = function (req, res) {
        Users
            .findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 },  {new: true})
            .exec(function (err, result) {
                    if (err) { throw err; }

                    res.json(result.nbrClicks);
                }
            );
    };
*/
};

module.exports = PollHandler;
