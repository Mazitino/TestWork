const LineSplitStream = require('./LineSplitStream');
const os = require('os');

const lines = new LineSplitStream({
    encoding: 'utf-8',
});


lines.on('data', (line)=>{
    console.log('line',line);
});

lines.write(`минус первая строка `);
lines.write(`нулевая строка `);
lines.write(`первая строка${os.EOL}вторая строка${os.EOL}третья строка`);

lines.end()