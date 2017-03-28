'use strict';

var path = process.cwd();

var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var PollHandler = require(path + '/app/controllers/pollHandler.server.js');
var PollData = require(path + '/app/controllers/pollData.server.js');

module.exports = function (app, passport) {

    var clickHandler = new ClickHandler();
    var pollHandler = new PollHandler();
    var pollData = new PollData();

    app.route('/')
        .get(function (req, res) {
            res.sendFile(path + '/public/index.html');
        });

    app.route('/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });

    app.route('/api/:id')
        .get(function (req, res) {
            if (req.user) {
                res.json(req.user.github);
            } else {
                res.send('no user');
            }
        });

    app.route('/auth/github/callback')
        .get(passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
        }));

    app.route('/api/:id/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);

    app.route('/api/pollData')
        .get(pollData.getOne);

    app.route('/api/pollEdit')
        .post(pollHandler.addPoll);
};
