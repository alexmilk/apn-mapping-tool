"use strict";

const fs = require('fs'),
    request             = require('request'),
    hostUrl             = 'https://api.appnexus.com/',
    publishers          = JSON.parse(fs.readFileSync('data/pubs.json', 'utf8')),
    auth                = JSON.parse(fs.readFileSync('data/auth.json', 'utf8')),
    placements          = JSON.parse(fs.readFileSync('data/placements.json', 'utf8')),
    placementTemplate   = JSON.parse(fs.readFileSync('data/placement-template.json', 'utf8'));

var init = function() {
    doAuth(function () {
        mapPlacements(function () {
            console.log('done!');
        })
    })
};