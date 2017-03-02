import test = require('blue-tape');
import * as LineByLineReader from 'line-by-line';

test('testing reading file of 3 lines', function(t) {
    t.plan(4);

    let reader  = new LineByLineReader('test.txt');
    let i = 0;

    reader.on('line', (line) => {
        i++;
        t.equal(line, 'line'+i,'Error reading line #'+i);
    });

    reader.on('end', () => {
        t.equal(i, 3, 'Line count should be 3');
    });

    reader.on('error', (err) => {
        t.error(true, 'Error reading file: '+err);
    });
});
