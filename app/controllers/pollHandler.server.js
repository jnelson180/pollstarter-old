'use strict';
var bodyParser = require('body-parser');
var Poll = require('../models/polls.js');
var Polls = require('../models/polls.js');


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

this.getOne = function (req, res) {
    Polls
        .findOne({}, {  }, { sort: {$natural:-1}})
        .lean()
        .exec(function (err, result) {
            if (err) { throw err; }
            console.log(result);
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        });
};


    this.addPoll = function (req, res) {

      function getFieldCount() {
        var fieldCount = 0;
        for (var i = 0; i < 100; i++) {
          if (req.body['option'+i]) {
            fieldCount ++;
          }
        }
        return fieldCount;
      }

      function processInitialFields() {
        var fieldCount = getFieldCount();
        console.log('fieldCount is ' + fieldCount);
        var fieldArray = [];
        for (var i = 1; i < fieldCount + 1; i++) {
          fieldArray.push('option' + i);
        }
        return fieldArray;
      }

      function processInitialValues() {
        var fieldCount = getFieldCount();
        var valueArray = [];
        for (var i = 1; i < fieldCount + 1; i++) {
          valueArray.push(req.body['option'+i])
        }
        return valueArray;
      }

      function processInitialVotes() {
        var optionCount = getFieldCount();
        var initialVotes = [];
        for (var i = 0; i < optionCount; i++) {
          // --------------------IMPORTANT-----------------------------------
          // !!!!!! change back to this once done
          // to fill with empty array --
          // initialVotes.push(0);
          var randomNumber = Math.floor(Math.random() * 6) + 1;
          initialVotes.push(randomNumber)
        }
        return initialVotes;
      }

      var newPoll = new Poll({
        'pollInfo.owner': req.user.github.username,
        'pollInfo.question': req.body.pollQuestion,
        'pollInfo.fields': processInitialFields(),
        'pollInfo.values': processInitialValues(),
        'pollInfo.votes': processInitialVotes(),
        'pollInfo.stats.createDate': new Date().toString()
      })
    newPoll.save(function (err) {
      if (err) throw err;
      console.log('saved new record to db');
      res.redirect('/');
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
