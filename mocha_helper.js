var jsdom = require('jsdom');
var sinon = require('sinon');


global.document = jsdom.jsdom('<!doctype html><html><body> <div id="app"></div></body></html>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
  	//setting more globals here
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

//Set React global only after setting document, window
var React = require('react');
global.React = React;
global.spy = sinon.spy;
