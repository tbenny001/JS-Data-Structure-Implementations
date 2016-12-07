var TreeNode = require('./TreeNode');

function BinarySearchTree() {
    this.root = null;
    this.size = 0;
}

BinarySearchTree.prototype = {
    add: function(value) { //Note: Duplicates have not been accounted for
        var newNode = new TreeNode(value);
        if(this.root === null) {
            this.root = newNode;
            this.size++;
        } else {
            var currentNode = this.root;
            while(currentNode){
                if(newNode.data > currentNode.data) {
                    if(currentNode.right != null) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        newNode.parent = currentNode;
                        this.size++;
                        break;
                    }
                } else if (newNode.data <= currentNode.data) {
                    if(currentNode.left !== null) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        newNode.parent = currentNode;
                        this.size++;
                        break;
                    }
                }
            }
        }
    },
    find: function(value) {
        if(this.size == 0) {
            var err = new Error("This is an empty tree. Nothing to find yet.");
            throw(err);
        }
        var currentNode = this.root;
        while(currentNode) {
            if(value > currentNode.data) {
                currentNode = currentNode.right;
            } else if(value < currentNode.data) {
                currentNode = currentNode.left;
            } else if(value == currentNode.data){
                return currentNode;
            }
        }
        var err = new Error("This value does not exist");
        throw err;
    },
    delete: function(value) {
        if(this.size == 0) {
            var err = new Error("This is an empty tree. No nodes to delete...");
            throw(err);
        }
        // try {
        //     find(value)
        // } catch(err) {
        //     return err;
        // }
    }
}

module.exports = BinarySearchTree;
