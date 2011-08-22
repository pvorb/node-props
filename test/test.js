var props = require("props");

var json =
	'{\n\
		"title": "How to use node.js",\n\
		"date": "2011-08-09T17:56:00",\n\
		"tags": [ "example", "node.js" ]\n\
	}\n\
\n\
\n\
Node.js is a new technology...';

console.log(props(json));

var yaml =
'title: How to use node.js\n\
date: 2011-08-09 17:56:00\n\
tags:\n\
  - example\n\
  - node.js\n\
\n\
\n\
Node.js is a new technology...';

console.log(props(yaml));
