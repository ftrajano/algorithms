from Node import Node
from LinkedList import LinkedList

# Testando a lista ligada
# clear
def main():

    l1 = LinkedList(1)
    l1.deleteNode(1)
    # Testing isEmpty
    #l1.clear()
    #print(l1.isEmpty())

    # Testing insertAtEnd
    l1.insertAtEnd(2)
    l1.insertAtEnd(3)
    #l1.printList()

    # Testing insertAtbeginning
    l1.insertAtBeginning(4)
    l1.printList()

    # Testing insertAtIndex
    l1.insertAtIndex(7,2)
    l1.printList()
    
    l1.swapNodes(2,3)
    

    # Testing clear
    #l1.clear()
    #l1.printList()

    # Testing deleteNode
    l1.deleteNode(7)
    l1.printList()
    l1.deleteNode(2)
    l1.printList()
    l1.deleteNode(3)
    l1.printList()
    l1.deleteNode(5)

    # Testing deleteAtBeginning
    #l1.deleteAtBeginning()
    #l1.printList()

    # Testing deleteAtEnd
    #l1.deleteAtEnd()
    #l1.printList()

    # Testing searchValue
    #print(l1.searchValue(2))
    #print(l1.searchValue(3))

    
if __name__ == '__main__':
    main()