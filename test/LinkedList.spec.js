var assert = require('assert');
var should = require('should');
var Node = require('./../ListNode');
var LinkedList = require('./../LinkedList');

describe('Given a new LinkedList', function() {
  var list;
  beforeEach(function() {
      /*We initialize it here to ensure that each describe block recieves an empty linked list.
      If this was done globally, each mutation made on the list by each describe block would persist through the other describe blocks*/
      list = new LinkedList();
  });
  describe('When determining its head', function() {
    it('Then it should return null', function() {
      assert.equal(null, list.head);
    });
  });
  describe('When determining its length', function() {
    it('Then it should return 0', function() {
        list.length.should.equal(0);
    });
  });
  describe('When adding a node', function() {
      var newNode = new Node(1);
      beforeEach(function() {
          list.add(newNode);
      });
      it('Then the length should be 1', function() {
          assert.equal(1, list.length);
      });
      it('Then the head should point to the added Node', function() {
         assert.equal(newNode, list.head);
      });
  });
});

describe('Given a non empty LinkedList', function() {
    var list;
    var newNode;
    beforeEach(function() {
        newNode = new Node(1);
        list = new LinkedList();
        list.add(newNode);
    });
    describe('When determining its head', function() {
        it('Then it should not return null', function() {
            assert.equal(newNode, list.head); //Add assertion library
        });
    });
    describe('When determining its length', function() {
        it('Then the length should be greater than 0', function() {
            assert.equal(1, list.length) //Add assertion library
        });
    });
});

//LOOK INTO WALLABY
