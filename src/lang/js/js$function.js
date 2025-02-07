const Token = require("../../utils/token");
const $FUNCTION = require("../$nuc/$function");
let JS$BLOCK = require("./js$block");

function JS$FUNCTION(string, offset) {
  let context = Token.next(string, offset);

  context = Token.next(string, context.offset);
  let name = context.token;

  context = Token.next(string, context.offset);

  context = Token.nextArgs(string, context.offset);
  let args = context.args;

  context = JS$BLOCK(string, context.offset);

  return {
    statement: $FUNCTION(name, args, context.statement),
    offset: context.offset,
  };
}

module.exports = JS$FUNCTION;
