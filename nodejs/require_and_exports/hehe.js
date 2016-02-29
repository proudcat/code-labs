(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// require core module `file system`
var fs = require( 'fs' );

// exports 2 methods for other modules or files to use
module.exports = {
  read : function( path, callback ){
    // read file data synchronizely
    var data = fs.readFileSync( path );
    
    // execute the callback if there is one
    callback && callback( data.toString());
  },
  
  print : function( data ){
    // print out the data
    console.log( data );
  }
};
},{"fs":1}]},{},[2]);
