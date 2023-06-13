from Node import Node

class LinkedList:

    def __init__(self, value ):
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
            self._head = self._head.next
            self._length-=1
        else:
            while(curr.next.value!=value):
                curr = cur.next
            if(curr.next.value==None):
                print('Lista nao tem o valor informado!')
            else:
                curr.next = curr.next.next
                self._length-=1

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