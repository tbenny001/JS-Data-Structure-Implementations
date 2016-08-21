var TreeNode = require('./TreeNode');

function BinaryTree(root) {
    this.root = root;
}

BinaryTree.prototype.find = function() {
    if(this.root === null) {
        var error = new Error('Unable to search an empty tree');
        throw error;
    } else {
        
    }
}

module.exports = BinaryTree;
