/* eslint-disable */

const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

require('colors');

const task = process.argv[2];


if (!task) {
  return console.error(
    `${'Не указана задача. Например:'.red.bold}
  ${'npm run test 01'.yellow}`
  );
}

const mocha = new Mocha({
  reporter: 'spec',
  useColors: true,
});


const testDir = path.join(__dirname, task, 'test');

if (!fs.existsSync(testDir)) {
  return console.error(
    `${'Задача'.red.bold} ${`${task}`.yellow} ${'отсутствует. Проверьте правильность команды.'.red.bold}`
  );
}

const files = glob.sync(`${testDir}/**/*.test.js`);

if (!files.length) {
  return console.error(
    `${'К задаче'.red.bold} ${`${task}`.yellow} ${'отсутствуют тесты'.red.bold}`
  );
}

files.forEach(file => {
  mocha.addFile(file);
});

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
});