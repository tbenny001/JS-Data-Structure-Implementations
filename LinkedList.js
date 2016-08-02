var Node = require('./LinkedListNode');

function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.addNode = function(newNode) {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

var list1 = new LinkedList();

for(var i = 0; i < 10; i++) {
    list1.addNode(new Node(i));
}

console.log(list1.head);
