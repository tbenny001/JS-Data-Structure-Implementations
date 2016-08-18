var LinkedList = require('./LinkedList');

function Stack() {
    this.top = null;
}

Stack.prototype = new LinkedList();

Stack.prototype.push = function(newNode) {
    this.add(newNode);
    this.top = this.head;
}

Stack.prototype.pop = function() {
    return null;
}

Stack.prototype.isEmpty = function() {
    var isEmpty;
    (this.top === null) ? isEmpty = true : isEmpty = false;
    return isEmpty;
}

module.exports = Stack;
