const fs = require("fs");
function readFile({ url, callback }) {
	return fs.readFile(url, "utf-8", callback);
}

module.exports = { readFile };
