'use strict';
var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/users');
var configAuth = require('./auth.js');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new GitHubStrategy({
        clientID: configAuth.gitHubAuth.clientID,
        clientSecret: configAuth.gitHubAuth.clientSecret,
        callbackURL: configAuth.gitHubAuth.callbackURL
    },
        function (token, refreshToken, profile, done) {
            process.nextTick(function () {
                User.findOne({ 'github.id': profile.id }, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (user) {
                        return done(null, user);
                    } else {
                        var newUser = new User();
                        newUser.github.id = profile.id;
                        newUser.github.username = profile.username;
                        newUser.github.displayName = profile.displayName;
                        newUser.github.publicRepos = profile._json.public_repos;
                        newUser.nbrClicks.clicks = 0;
                        newUser.save(function (err) {
                            if (err) {
                                throw err;
                            }
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
};