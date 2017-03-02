"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineByLineReader = require("line-by-line");
var reader = new LineByLineReader('test.txt');
var i = 0;
reader.on('line', function (line) {
    i++;
    console.log('Checking line ' + i + ' === \'line' + i + '\'');
    if (line !== 'line' + i) {
        throw Error('Error reading line: ' + line);
    }
});
reader.on('end', function () {
    console.log('End of file reached. Line count=' + i);
    if (i !== 3) {
        throw Error('Error line count: ' + i);
    }
});
reader.on('error', function (err) {
    throw Error('Error reading file: ' + err);
});
//# sourceMappingURL=/Users/daubihe/prj/me/line-by-line/ts-node-a5be9192a61ff66d87fd817ad4582bee718039b9/cffa3ccf77536ccc15c649fe3d366d2edb9a852a/ebc63597513a79824d7866b7cef2303f81e89c46.js.map