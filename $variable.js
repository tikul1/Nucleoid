var $ = require("./$");
var VARIABLE = require("./variable");
var Value = require("./value");
var OBJECT = require("./object");

module.exports = function(name, value) {
  let statement = new $VARIABLE();
  statement.name = name;
  statement.value = value;
  return statement;
};

class $VARIABLE extends $ {
  run(scope) {
    let value = this.value.run(scope);

    if (value instanceof Value) {
      let statement = new VARIABLE();
      statement.name = this.name;
      statement.value = value;
      return statement;
    } else if (value instanceof OBJECT) {
      let statement = value;
      statement.name = this.name;
      return statement;
    }
  }
}
