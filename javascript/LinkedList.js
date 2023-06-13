const Node =require('./Node.js');

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

    printList(){
        let lista = '';
        let aux = this._head;
        while(aux._next!=null){
            lista+=aux._value+' ';
            aux = aux._next; 
        }
        lista+=aux._value;
        console.log(lista)
    }
}


module.exports = LinkedList;