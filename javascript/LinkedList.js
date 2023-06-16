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

    }

    deleteAtEnd(){
        
    }
}


module.exports = LinkedList;