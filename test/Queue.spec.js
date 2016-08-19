var should = require('should');
var Node = require('./../ListNode');
var LinkedList = require('./../LinkedList');
var Queue = require('./../Queue');

describe('Given an empty Queue', function() {
    var queue1;
    beforeEach(function() {
        queue1 = new Queue();
    });
    describe('When using the pop function', function() {
        it('Then it should return null', function() {
            should.notExist(queue1.pop());
        });
    });
    describe('When using the push function', function() {
        it('Then it should add the new item in to the list', function() {

        });
    });
});
