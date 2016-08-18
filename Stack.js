var LinkedList = require('./LinkedList');

function Stack() {
    this.top = null;
}

Stack.prototype = new LinkedList();

Stack.prototype.push = function(data) {

}

Stack.prototype.pop = function() {

}

Stack.prototype.isEmpty = function() {
    var isEmpty;
    (this.top === null) ? isEmpty = true : isEmpty = false;
    return isEmpty;
}

module.exports = Stack;
