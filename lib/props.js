var marked = require("marked");

module.exports = function(str) {
	if (typeof str !== 'string')
		str = str.toString();

	var match, result = [];
	while (match = str.match(/^([a-z]+)\s*:\s*(.*)\s*\n/i)) {
		str = str.substr(match[0].length);

		result[match[1]] = match[2];
	}
	result.push(str);

	return result;
};
