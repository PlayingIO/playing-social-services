const { camelCase } = require('mostly-func');
const glob = require('glob');
const path = require('path');

// load all entities
const entityFiles = glob.sync(path.join(__dirname, './*.entity.js'));
module.exports = Object.assign({}, ...entityFiles.map(file => {
  const name = camelCase(path.basename(file, '.entity.js'));
  return { [name]: require(file) };
}));
