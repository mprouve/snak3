/* eslint-disable no-console */
const fs = require('fs');
const packageJson = require('../package.json');

console.log('Incrementing build number...');

fs.readFile('src/metadata/metadata.json', function (err, content) {
  if (err) throw err;

  const metadata = JSON.parse(content);
  metadata.build += 1;

  fs.writeFile('src/metadata/metadata.json', JSON.stringify(metadata), function (err) {
    if (err) throw err;

    console.log(`Current version: ${packageJson.version}-${metadata.build}`);
  });
});
