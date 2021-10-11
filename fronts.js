class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
//1.AddFront
    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
//2.RemoveFront
    removeFront(){
        if(this.head == null){
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

//3.printFront
    sprinterPrinter(){
        var thisNode = this.head;
        while(thisNode!= null) {
            console.log(thisNode.val);
            thisNode = thisNode.next;
        }
        return this;
    }
}

//initiate:
var sll = new SLL();
//function feeder:
sll.addFront(12);
sll.addFront(34);
sll.addFront(18);
sll.addFront(27);
sll.addFront(55);
sll.sprinterPrinter();
sll.removeFront();
sll.sprinterPrinter();