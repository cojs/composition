
module.exports = compose;

function compose(middleware){
  return function *(next){
    var i = middleware.length;
    var prev = next || noop();
    var curr;

    while (i--) {
      curr = middleware[i];
      prev = curr.call(this, prev);
    }

    return yield *prev;
  }
}

function *noop(){}
