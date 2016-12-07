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
    describe("When checking the tree's size", function() {
        it('Then the size should be equal to 0', function() {
            newTree.size.should.equal(0);
        });
    });
    describe('When using the add method', function() {
        beforeEach(function() {
            newTree.add(1);
            console.log(newTree.size);
        });
        it('Then the root should no longer be null', function() {
            should.exist(newTree.root);
        });
        it('Then the size of the tree should be incremented', function() {
            newTree.size.should.equal(1);
        });
    });
    describe('When using the find method', function() {
        it('Then it should throw an error', function() {
            should.throws(function() {newTree.find(2), Error, 'Unable to search an empty tree'});
        });
    });
    describe('When using the delete method', function() {
        it('Then it should throw an error', function() {
            should.throws(function() {newTree.delete(2), Error, 'This is an empty tree. No nodes to delete...'});
        })
    });
});
