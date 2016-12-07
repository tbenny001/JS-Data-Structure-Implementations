var should = require('should');
var BinarySearchTree = require('./../BinarySearchTree');

describe('Given a newly initialized Binary Search Tree', function() {
    var newTree;
    beforeEach(function() {
        newTree = new BinarySearchTree();
    });
    describe("When checking the tree's root", function() {
        it('Then null should be returned', function() {
            should.not.exist(newTree.root);
        });
    })
    describe('When using the add method', function() {
        beforeEach(function() {
            newTree.add(1);
        });
        it('Then the root should no longer be null', function() {
            should.exist(newTree.root);
        });
    });
    describe('When using the find method', function() {
        it('Then it should throw an error', function() {
            should.throws(function() {newTree.find(2), Error, 'Unable to search an empty tree'});
        });
    });
});
