var TreeNode = require('./TreeNode');

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype = {
    add: function(value) { //Note: Duplicates have not been accounted for
        var newNode = new TreeNode(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            var currentNode = this.root;
            while(currentNode){
                if(newNode.data > currentNode.data) {
                    if(currentNode.right != null) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = newNode;
                        newNode.parent = currentNode;
                        break;
                    }
                } else if (newNode.data < currentNode.data) {
                    if(currentNode.left !== null) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        newNode.parent = currentNode;
                        break;
                    }
                }
            }
        }
    },
    find: function(value) {
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
        return err;
    }
}



var b1 = new BinaryTree();

b1.add(3);
b1.add(2);
b1.add(8);
b1.add(7);

console.log(b1.find(9));

module.exports = BinaryTree;
