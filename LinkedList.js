var Node = require('./LinkedListNode');

function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.push = function(newNode) {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

LinkedList.prototype.insert = function(index, newNode) {
    var currentNode = this.head;
    for(var i = 1; i < index; i++) {
        currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
}

var list1 = new LinkedList();

for(var i = 0; i < 10; i++) {
    list1.push(new Node(i));
}

list1.insert(1, new Node(13));

console.log(list1.head);
console.log(list1.length);
console.log(list1);
