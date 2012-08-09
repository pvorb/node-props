var JSML = require('./jsml.js');

var jsmlDocument = '"title": "Hello World",\n'
                 + '"date":  "2012-08-09",\n'
                 + '"tags":  [ "hello world", "misc" ]\n'
                 + '---\n'
                 + '"title": "The second article",\n'
                 + '"date":  "2012-08-10",\n'
                 + '"tags":  [ "misc" ]';

// Parse a string

var doc = JSML.parse(jsmlDocument);

console.log(doc);

// Stringify an Object or an Array of Objects

var jsmlString = JSML.stringify(doc, null, '  ');

console.log(jsmlString);
