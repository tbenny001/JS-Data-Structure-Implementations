var should = require('should');
var TreeNode = require('./../TreeNode');
var BinaryTree = require('./../BinaryTree');

describe('Given an empty Binary Tree', function() {
    var newTree;
    beforeEach(function() {
        newTree = new BinaryTree();
    });
    describe('When using the getRoot method', function() {
        it('Then it should retrun null', function() {
            should.not.exist(newTree.root);
        });
    });
    describe('When using the find method', function() {
        it('Then it should throw an error', function() {
            should.throws(newTree.find(2), Error, 'Unable to search an empty tree');
        });
    });
});
