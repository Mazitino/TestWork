const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
    constructor(options) {
        super(options);

        this.encoding = options.encoding || 'utf8';
        this.output = ''
    }

    _transform(chunk, encoding, callback) {
        callback();
    }

    _flush(callback) {
        callback();
    }


}

module.exports = LineSplitStream;