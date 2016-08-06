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
      should.not.exist(list.head);
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
          list.length.should.be.exactly(1);
      });
      it('Then the head should point to the added Node', function() {
          list.head.should.be.equal(newNode);
      });
  });
  describe('When deleting a node with the deleteNode method', function() {
      it('Then it should return an error', function() {
          should.throws(list.deleteNode(new Node(1)), Error, 'Cant delete from an empty linked list.');//Huh?
      });
  });
  describe('When deleting a node with the deleteNodesWith method', function() {
      it('Then it should return an error', function() {
          should.throws(list.deleteNodesWith(new Node(1)), Error, 'Cant delete from an empty linked list.');//Huh?
      });
  });
  describe('When using the find method', function() {
      it('Then it should return an error', function() {
          should.throws(list.find(1), Error, "Can't search an empty linked list.");
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
            list.head.should.equal(newNode);
        });
    });
    describe('When determining its length', function() {
        it('Then the length should be greater than 0', function() {
            list.length.should.be.aboveOrEqual(1);
        });
    });
});

//LOOK INTO WALLABY
