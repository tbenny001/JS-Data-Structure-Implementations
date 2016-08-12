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
          should.throws(function() {list.deleteNode(new Node(1))}, Error, 'Cant delete from an empty linked list.');//Huh?
      });
  });
  describe('When deleting a node with the deleteNodesWith method', function() {
      it('Then it should return an error', function() {
          should.throws(function() {list.deleteNodesWith(new Node(1))}, Error, 'Cant delete from an empty linked list.');//Bug with should.js, wrap function call in an anonymous function
      });
  });
  describe('When using the find method', function() {
      it('Then it should return an error', function() {
          should.throws(list.find(1), Error, "Can't search an empty linked list.");
      });
  });
  describe('When using the findFirst method', function() {
     it('Then it should return an error', function() {
         should.throws(list.findFirst(1), Error, "Can't search an empty linked list.");
     });
  });
});

describe('Given a non empty LinkedList', function() {
    var list, newNode, node0, node1, node2, originalLength, result;
    var allSame = true;
    beforeEach(function() {
        list = new LinkedList();
        newNode = new Node(0);
        node0 = new Node(0);
        node1 = new Node(1);
        node2 = new Node(2);
        list.add(node2);
        list.add(node1);
        list.add(node0);
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
    describe('When using the find function and the nodes exist', function() {
        it('Then should return an array containing the found nodes', function() {
            list.find(0).length.should.be.aboveOrEqual(1);
        });
    });
    describe('When using the find function and the nodes dont exist', function() {
        it('Then should return an empty array', function() {
            list.find(3).length.should.equal(0);
        });
    });
    describe('When using the findFirst function and the node exists', function() {
        it('Then it should return a node that matches the passed value', function() {
            list.findFirst(0).should.equal(newNode);
        });
    })
    describe('When using the findFirst function and the node doesnt exist', function() {
        it('Then null should be returned', function() {
            should.not.exist(list.findFirst(3));
        });
    });
    describe('When using the deleteNodesWith function and the node doesnt exist', function() {
        beforeEach(function() {
            originalLength = list.length;
        });
        it('Then an error should be thrown.', function() {
            should.throws(function() {list.deleteNodesWith(3)}, Error, 'Cannot delete node that doesnt exist.');
        });
        it('Then the linked list should have the same length.', function() {
            list.length.should.equal(originalLength);
        });
    });
    describe('When using the deleteNodesWith function and the node exists and it\'s the head node', function() {
        beforeEach(function() {
            originalLength = list.length;
            result = list.deleteNodesWith(0);
            for(i = 0; i < result.length; i++) {
                if(result[i].data !== 0) {
                    allSame = false;
                    break;
                }
            }
        });
        it('Then it should return an array containing the nodes that were deleted', function() {
            result.length.should.be.aboveOrEqual(1);
        });
        it('Then it should update the head if the previous head was deleted', function() { //Testing for explicit values is ok in some scenarios
            list.head.should.be.equal(node1);
        });
        it('Then it should update the length based on the amount of nodes that were deleted', function() {
            list.length.should.be.equal(originalLength - result.length);
        });
        it('Then an array containing only nodes with the matched data should be returned', function() {
            allSame.should.be.true();
        });
    });
    describe('When using the deleteNodesWith function and the node exists and it\'s not the head node', function() {
        beforeEach(function() {
            originalLength = list.length;
            result = list.deleteNodesWith(1);
            for(i = 0; i < result.length; i++) {
                if(result[i].data !== 1) {
                    allSame = false;
                    break;
                }
            }
        });
        it('Then it should return an array containing the nodes that were deleted', function() {
            result.length.should.be.aboveOrEqual(1);
        });
        it('Then it should update the length based on the amount of nodes that were deleted', function() {
            list.length.should.be.equal(originalLength - result.length);
        });
        it('Then an array containing only nodes with the matched data should be returned', function() {
            allSame.should.be.true();
        });
    });
    describe('When using the deleteNode function and the node doesn\'t exist', function() {
        beforeEach(function() {
            originalList = list;
            originalLength = list.length;
            result = list.deleteNode(3);
        });
        it('Then it should return false', function(){
            result.should.be.false();
        });
        it('Then the length should be the same', function() {
            list.length.should.be.equal(originalLength);
        });
        it('Then the list should not be altered', function() {
            list.should.be.equal(originalList);
        });
    });
    describe('When using the deleteNode function and the node exists and it is the head node', function() {
        beforeEach(function() {
            result = list.deleteNode(0);
        });
        it('Then it should return true', function() {
            result.should.be.true();
        });
        it('Then it should update the head', function() {
            list.head.should.be.equal(node0);
        });
        it('Then it should update the length', function() {
            list.length.should.be.equal(3);
        });
    });
    describe('When using the deleteNode function and the node exists and it isn\'t the head node', function() {
        beforeEach(function() {
            result = list.deleteNode(1);
        });
        it('Then it should return true', function() {
            result.should.be.true();
        });
        it('Then it should update the length', function() {
            list.length.should.be.equal(3);
        });
    });
});
