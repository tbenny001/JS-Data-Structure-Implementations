var should = require('should');
var Node = require('./../ListNode');
var LinkedList = require('./../LinkedList');
var Stack = require('./../Stack');

describe('Given a new Stack', function() {
    var stack1;
    var newNode;
    beforeEach(function() {
        stack1 = new Stack();
    });
    describe('When using the top function', function() {
        it('Then it should return null', function() {
            should.not.exist(stack1.top);
        });
    });
    describe('When using the isEmpty function', function() {
        it('Then it should return true', function() {
            stack1.isEmpty().should.be.true();
        });
    });
    describe('When using the pop function', function() {
        it('Then it should return null', function() {
            should.not.exist(stack1.pop());
        });
    });
    describe('When using the push function', function() {
        beforeEach(function() {
            newNode = new Node(1);
            stack1.push(newNode);
        });
        it('Then it should add the new item to the stack', function() {
            stack1.length.should.be.equal(1);
        });
        it('Then the top variable should be set to the new item', function() {
            stack1.top.should.equal(newNode);
        });
    });
});

describe('Given a non-empty Stack', function(){
    describe('When using the top function', function() {
        it('Then it should return the item that the top variable points to', function() {

        });
    });
    describe('When using the push function', function() {
        it('Then it should add the new item to the stack', function() {

        });
        it('Then the top variable should be set to the new item', function() {

        });
    });
    describe('When using the pop function', function() {
        it('Then it should return the item that the top variable points to', function() {

        });
    });
    describe('When using the isEmpty function', function() {
        it('Then it should return false', function() {

        });
    });
});
