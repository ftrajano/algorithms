from Node import Node

class LinkedList:

	# Refatorar isso aqui, 
 	# porque uma linked list pode ser iniciada vazia(?)
    def __init__(self, value):
        self._head = Node(value)
        self._tail = self._head
        self._length = 1

    @property
    def head(self):
        return self._head
    
    @property
    def tail(self):
        return self._tail


    @property
    def length(self):
        return self._length


    def clear(self):
        self._head = None
        self._tail = None
        self._length = 0


    def insertAtBeginning(self, value):
        if self._length==0:
            self._head = Node(value)
            self._tail = self.head
            self._length+=1
        else:
            aux = Node(value)
            aux.next = self._head
            self._head = aux
            self._length +=1

    def insertAtEnd(self,value):
        if self._length==0:
            self._head = Node(value)
            self._tail = self._head
            self._length+=1
        else:
            aux = Node(value)
            self._tail.next = aux 
            self._tail = aux
            self._length+=1

    def insertAtIndex(self, value, n):
        cur = self._head
        aux = Node(value)
        for i in range(n-2):
            cur = cur.next
        aux.next = cur.next
        cur.next = aux
        self._length+=1

    def deleteNode(self, value):
        curr = self._head
        if(curr.value==value):
            if(self._length==1):
                self._head = None
                self._length-=1
                self._tail = None
            else:
                self._head = self._head.next
                self._length-=1
        else:
            while(curr.next!=None):
                if(curr.next.value==value):
                    curr.next = curr.next.next
                    self._length-=1
                    break
                else:
                    curr=curr.next
            print('valor nao encontrado!')  

    def deleteAtBeginning(self):
        self._head = self._head.next
        self._length-=1

    def deleteAtEnd(self):
        cur = self._head
        for i in range(self._length-2):
            cur=cur.next
        cur.next=None
        self._tail= cur
        self._length-=1
        
    
    def searchValue(self, value):
        cur=self._head
        while(cur.next!=None):
            if(cur.value==value):
                return(cur.value)
            else:
                cur=cur.next
            
        if cur.value==value:
            return(cur.value)
        else:
            return('Valor nao encontrado')


    def isEmpty(self):
        if self._length ==0:
            return True
        else:
            return False

    
    def printList(self):
        if self._length ==0:
            print('lista vazia!')
        else:
            lista = ''
            curr = self._head
            while(curr.next!=None):
                lista += str(curr.value)+' '
                curr = curr.next
            lista+=str(curr.value)
            print(lista)
    
    def swapNodes(self, val1, val2):
        
        if val1 == val2:
            print("Elements are the same - no swap needed")
            return
 
        node1_prev = None
        node2_prev = None
        node1 = self._head
        node2 = self._head
        
        while node1 is not None:
            if node1.value == val1:
                break
            node1_prev = node1
            node1 = node1.next
            
        while node2 is not None:
            if node2.value==val2:
                break
            node2_prev = node2
            node2 = node2.next
        
        if(node1 is None or node 2 is None):
            print("Swap not possible - one of more elemnt is not in the list")
            return
            
        if node1_prev == None:
            self._head=node2
        else:
            node1_prev.next = node2
            
        if node2_prev == None:
            self._head=node1
        else:
            node2_prev.next = node1
                  
        temp = node1.next
        node1.next = node2.next
        node2.next = temp
    
            