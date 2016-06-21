var jsdom = require('jsdom');
var fetch = require('isomorphic-fetch');
var React = require('react');
var sinon = require('sinon');

global.React = React;
global.document = jsdom.jsdom('<!doctype html><html><body><div id="app"/></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};
global.spy = sinon.spy;
