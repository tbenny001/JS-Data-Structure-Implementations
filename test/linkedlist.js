var assert = require('assert');
var LinkedList = require('./../LinkedList');

describe('Give a new LinkedList', function() {
  var list;
  beforeEach(function() {
      list = new LinkedList();
  })
  describe('When determining its head', function() {
    it('Then it should return null', function() {
      assert.equal(null, list.head);
    });
  });
  describe('When determining its length', function() {
    it('Then it should return 0', function() {
      assert.equal(0, list.length);
    });
  });
  describe('When adding a node', function() {
      var newNode = new Node(1);
      beforeEach(function() {
          list.add(newNode);
      })
      it('Then the length should be 1', function() {
          assert.equal(1, list.length);
      });
      it('Then the head should point to the added Node', function() {
         assert.equal(newNode, list.head);
      });
  });
});
