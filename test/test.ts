import test = require('blue-tape');

import * as LineByLineReader from 'line-by-line';

let reader  = new LineByLineReader('test.txt');
let i = 0;

reader.on('line', (line) => {
    i++;
    console.log('Checking line ' + i + ' === \'line' + i + '\'');
    if (line !== 'line'+i) {
        throw Error('Error reading line: '+line);
    }
});

reader.on('end', () => {
    console.log('End of file reached. Line count=' + i);
    if (i !== 5) {
        throw Error('Error line count: '+i);
    }
});

reader.on('error', (err) => {
    throw Error('Error reading file: '+err);
});
