const Node = require('./Node.js'); 
const LinkedList = require('./LinkedList.js');

const l1 = new LinkedList(1);
l1.insertAtBeginning(2);
l1.printList();
l1.insertAtEnd(3);
l1.insertAtEnd(4);
l1.printList();
l1.clear();
l1.insertAtEnd(10);
l1.clear();
l1.insertAtBeginning(8);
l1.printList();
l1.insertAtIndex(10,3)
l1.printList();
l1.insertAtIndex(10,2)
l1.printList()
l1.deleteNode(10)
l1.printList()
l1.deleteNode(8)
l1.printList()