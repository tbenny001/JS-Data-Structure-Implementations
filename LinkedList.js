function LinkedList() {
    this.head = null;
    this.length = 0;
}

// Insert a node at the beginning of the list
LinkedList.prototype.add = function(newNode) {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

//Delete the first node that matches the passed data
LinkedList.prototype.deleteNode = function(data) {
    if(this.length < 1) {
        var error = new Error("Cant delete from an empty linked list.");
        throw error;
    }
    var currentNode = this.head;
    var wasNodeDeleted = false;
    while(currentNode.next !== null) {
        if(currentNode.next.data === data) {
            currentNode.next = currentNode.next.next;
            this.length--;
            wasNodeDeleted = true;
        } else {
            currentNode = currentNode.next;
        }
    }
    return wasNodeDeleted;
}

//Delete all nodes with data that matches passed parameter
LinkedList.prototype.deleteNodesWith = function(data) {
    if(this.length < 1) {
        var error = new Error("Cant delete from an empty linked list.");
        throw error;
    } else {
        var nodesToDelete = [];
        var currentNode = this.head;
        for(var i = 0; i < this.length; i++) { //If possible, refine this logic
            if(currentNode === this.head && this.head.data === data) {
                nodesToDelete.push(currentNode);
                this.head = currentNode.next;
                currentNode = this.head;
                this.length--;
                continue;
            }
            if(currentNode.next.data === data) {
                nodesToDelete.push(currentNode.next);
                currentNode.next = currentNode.next.next;
                this.length--;
            } else {
                currentNode = currentNode.next;
            }
        }
        return nodesToDelete;
    }
}

LinkedList.prototype.find = function(data) {
    if(this.length < 1) {
        var error = new Error("Can't search an empty linked list.");
        return error;
    } else {
        matchedNodes = [];
        var currentNode = this.head;
        for(var i = 0; i < this.length; i++) {
            if(currentNode.data === data) {
                matchedNodes.push(currentNode);
            } else {
                currentNode = currentNode.next;
            }
        }
        return matchedNodes;
    }
}

LinkedList.prototype.findFirst = function(data) {
    if(this.length < 1) {
        var error = new Error("Can't search an empty linked list.");
        return error;
    } else {
        var currentNode = this.head;
        while(currentNode !== null && currentNode.data !== data) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

module.exports = LinkedList;
