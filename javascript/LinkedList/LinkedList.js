const Node =require('./Node.js');

// Operações que vamos implantar nas linked lists:

// head - Returns the head node of the LinkedList. ok
// tail - Returns the tail node of the LinkedList. ok
// length - Returns the length (number of nodes) in the LinkedList. ok 
// clear - Clears the LinkedList by removing all nodes. ok
// insertAtBeginning - Inserts a new node with the given value at the beginning of the LinkedList. ok
// insertAtEnd - Inserts a new node with the given value at the end of the LinkedList. ok
// insertAtIndex - Inserts a new node with the given value at the specified index in the LinkedList. ok
// deleteNode - Deletes the node with the given value from the LinkedList. ok
// deleteAtBeginning - Deletes the first node from the LinkedList. ok Falta testar
// deleteAtEnd - Deletes the last node from the LinkedList. ok Falta testar
// searchValue - Searches for the given value in the LinkedList and returns it if found. ok Falta testar
// isEmpty - Checks if the LinkedList is empty and returns a boolean value. ok
// printList - Prints the values of all nodes in the LinkedList. ok


class LinkedList{

    constructor(value){
        this._head = new Node(value);
        this._tail = this._head;
        this._length = 1;
    }

    get head(){
        return this._head;
    }

    get tail(){
        return this._tail;
    }

    get length(){
        return this._length;
    }

    clear(){
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    insertAtBeginning(value){
        if(this._length==0){
            const newNode = new Node(value);
            this._head = newNode;
            this._tail = this._head;
            this._length+=1;    
        } else {
            const aux = new Node(value);
            aux._next = this._head;
            this._head = aux;
            this._length+=1;
        }
    }

    insertAtEnd(value){
        if(this._length==0){
            const newNode = new Node(value);
            this._head = newNode;
            this._tail = this._head;
            this._length += 1;     
        } else {
            const aux = new Node(value);
            this._tail._next=aux;
            this._tail = aux;
            this._length+=1;
        }
    }

    insertAtIndex(value, position){
        if(this._length+1<position){
            console.log('Lista de tamanho menor do que a posicao!')
        } else {

            const newNode = new Node(value);
            let curr = this._head;
            for(let i=0;i<position-2;i++){
                curr = curr._next;
            }
            newNode._next = curr._next;
            curr._next = newNode;
        }

    }

    deleteNode(value){
        let curr = this._head;
        if(curr.value ===value){
            if(this._length===1){
                this._head = null;
                this._tail =null;
                this._length--;
            } else {
                this._head= this._head._next
            }
        } else {
            while(curr._next!==null){
                if(curr._next._value===value){
                    curr._next = curr._next._next
                    break;
                } else {
                    curr=curr._next;
                }
            console.log('Valor não encontrado!')
            }
        }
    }


    printList(){
        let lista = '';
        let aux = this._head;
        if(this._length===0){
            console.log('lista vazia')
        } else {
            while(aux._next!=null){
                lista+=aux._value+' ';
                aux = aux._next; 
            }
            lista+=aux._value;
            console.log(lista)
        }
        
    }

    deleteAtBeginning(){
        if(this._length===0){
            console.log('Lista vazia!')
        } else if(this._length==1){
            this._head=null;
            this._tail=null;
            this._length=0;
        } else {
            this._head=this._head.next;
            this._length--;
        }
    }
    

    deleteAtEnd(){
        if(this._length===0){
            console.log('Lista vazia!')
        } else if(this._length==1){
            this._head=null;
            this._tail=null;
            this._length=0;
        } else {
            let curr = this._head
            for(let i = 1; i<this._length-1< i++){
                curr=curr.next;
            }
            this._tail = curr;
            curr._next= null;
            this._length--;
        }

    }

    searchValue(value){
        let curr = this._head;
        if(this._length===0){
            console.log('empty list!');
        } else {
            while(curr._value!==value){
                if(curr._next!==null){
                    console.log('value not found!');
                } else {
                    curr=curr._next;
                }
            }
        }
    }

    isEmpty(){
        if(this._length===0){
            return true;
        }
    }
}


module.exports = LinkedList;