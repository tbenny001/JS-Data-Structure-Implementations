var should = require('should');
var Node = require('./../ListNode');
var LinkedList = require('./../LinkedList');

function Queue() {
    this.top = null;
}

Queue.proptype = new LinkedList();

Queue.prototype.pop = function() {
    
};

module.exports = Queue;
