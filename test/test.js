var props = require('../props.js');

var json = '{ "title": "How to use node.js", "date": "2011-08-09T17:56:00",'
  + ' "tags": [ "example", "node.js" ] }\n\n\nNode.js is a new technology...';
console.log(props(json));

var yaml = 'title: How to use node.js\n'
  + 'date: 2011-08-09 17:56:00\n'
  + 'tags:\n'
  + '  - example\n'
  + '  - node.js\n'
  + '\n'
  + '\n'
  + 'Node.js is a new technology...\n'
  + '\n'
  + '\n'
  + 'another note';

console.log(props(yaml));

var fs = require('fs');
var path = require('path');

var content = fs.readFileSync(path.resolve(__dirname, 'test.mkd'), 'utf8');

console.log(props(content));
