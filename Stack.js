var Node = require('./../ListNode');
var LinkedList = require('./../LinkedList');

function Stack() {
    
    this.top = null;
}

Stack.prototype.push = function() {

}

Stack.prototype.pop = function() {

}

Stack.prototype.isEmpty = function() {
    (this.top === null) ? return true : return false;
}
