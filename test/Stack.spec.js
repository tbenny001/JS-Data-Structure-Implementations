var should = require('should');
var Node = require('./../ListNode');
var LinkedList = require('./../LinkedList');

describe('Given a new Stack', function() {
    beforeEach(function() {
        var stack1 = new Stack();
    });
    describe('When using the top function', function() {
        it('Then it should return null', function() {
            stack1.top.should.be.equal(null);
        });
    });
    describe('When using the push function', function() {
        it('Then it should add the new item to the stack', function() {

        });
        it('Then the top variable should be set to the new item', function() {

        });
    });
    describe('When using the pop function', function() {
        it('Then it should return null', function() {

        });
    });
    describe('When using the isEmpty function', function() {
        it('Then it should return true', function() {
            stack1.isEmpty().should.be.true();
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
