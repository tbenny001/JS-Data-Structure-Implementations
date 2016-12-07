var should = require('should');
var TreeNode = require('./../TreeNode');
var BinaryTree = require('./../BinaryTree');

describe('Given a newly initialized Binary Tree', function() {
    var newTree;
    beforeEach(function() {
        newTree = new BinaryTree();
    });
    describe('When using the getRoot method', function() {
        it('Then it should return the root node', function() {
            newTree.root.should.be.equal();
        });
    });
    describe('When using the add method', function() {
        it('Then the structure of the tree should update and the node should be placed in the correct position', function() {

        });
    });
    describe('When using the find method', function() {
        it('Then it should throw an error', function() {
            should.throws(newTree.find(2), Error, 'Unable to search an empty tree');
        });
    });
    describe('When using the countLeaves method', function() {
        it('Then it should return 0', function() {
            console.log(this.root);
            newTree.countLeaves().should.be.equal(0);
        });
    });
});
