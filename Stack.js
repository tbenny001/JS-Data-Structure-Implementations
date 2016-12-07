// var LinkedList = require('./LinkedList');
//
// function Stack() {
//     this.top = null;
// }
//
// Stack.prototype = new LinkedList();
//
// Stack.prototype.push = function(newNode) {
//     this.add(newNode);
//     this.top = this.head;
// }
//
// Stack.prototype.pop = function() {
//     var itemToPop = this.top;
//     try{
//         this.deleteNode(itemToPop);
//     } catch(err) {
//         return null;
//     }
//     return itemToPop;
// }
//
// Stack.prototype.isEmpty = function() {
//     var isEmpty;
//     (this.top === null) ? isEmpty = true : isEmpty = false;
//     return isEmpty;
// }
//
// module.exports = Stack;
//
// /* NOTES:
// Should I decouple the stack class from the LinkedList class?
// */
