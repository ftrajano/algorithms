class Node{

    constructor(value){
        this._value = value;
        this._next = null;
    }

    get value(){
        return this._value;
    }

    get next(){
        return this._next;
    }
}

module.exports = Node;