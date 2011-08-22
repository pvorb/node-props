var yaml = require("yamlparser");

module.exports = function(str) {
	// `str` must be a string
	if (typeof str !== 'string')
		str = str.toString();

	var split, result = {}, content;

	// If the string starts with "{", look for JSON
	if (str.match(/^{/)
			&& (split = str.split(/\r?\n\r?\n\r?\n/, 2)).length > 0) {
		result = JSON.parse(split[0]);
	}
	// If not, look for YAML
	else if ((split = str.split(/\n\n\n|\r\n\r\n\r\n/, 2)).length > 0) {
		result = yaml.eval(split[0]);
	}
	// If no match was found, the whole string is the content
	else {
		return { __content: str };
	}

	// The second part of the array is the content string
	result["__content"] = split[1];

	return result;
};
