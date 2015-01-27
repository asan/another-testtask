var Store = function() {
  this.groups = require('./initialData.json'),
  console.log(this.groups);
};

module.exports = new Store;