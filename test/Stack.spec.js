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
    var stack1;
    var newNode, node1, node2, node3;
    beforeEach(function() {
        stack1 = new Stack();
        newNode = new Node(0);
        node1 = new Node(1);
        node2 = new Node(2);
        node3 = new Node(3);
        stack1.push(newNode);
        stack1.push(node1);
        stack1.push(node2);
        stack1.push(node3);
    });
    describe('When using the top function', function() {
        it('Then it should return the item that the top variable points to', function() {
            stack1.top.should.be.equal(node3);
        });
    });
    describe('When using the push function', function() {
        var oldStack, node4, newStack
        beforeEach(function() {
            oldStack = stack1;
            console.log(oldStack);
            node4 = new Node(4);
            stack1.push(node4);
            newStack = stack1;
            console.log(newStack);
        });
        it('Then it should add the new item to the stack', function() {
            should.notDeepEqual(newStack, oldStack);
        });
        it('Then the top variable should be set to the new item', function() {
            stack1.top.should.be.equal(node4);
        });
    });
    describe('When using the pop function', function() {
        var poppedItem;
        beforeEach(function() {
            poppedItem = stack1.pop();
        });
        it('Then it should return the item that the top variable points to', function() {
            poppedItem.should.be.equal(node3);
        });
    });
    describe('When using the isEmpty function', function() {
        it('Then it should return false', function() {
            stack1.isEmpty().should.be.false();
        });
    });
});
