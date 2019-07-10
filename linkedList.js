class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this.head;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
            return this.head;
        }
    }

    removeValue(value) {
        if(this.head.value === value || !this.head) {
            return null;
        } else { return this.removeHelper(this.head.next, value) }
    }

    removeHelper(node, value) {
        if(node.value === value) {
            node.previous.next = node.next;
            return this.head;
        } else {
            return this.removeHelper(node.next, value);
        }
    }

    removeHead() {
        if(this.head && this.head.next) {
            this.head = this.head.next;
            return this.head;
        } else {
            this.head = null;
        }
    }

    findValue(value) {
        if(!this.head) return "Empty";

        let count = 0;
        let node = this.head;
        while(node) {
            count ++;
            if(node.value === value) {
                return count;
            }
            node = node.next;
        }
        return "Not Found";
    } 
    
    printAll() {
        if(!this.head) return "Empty";
        let node = this.head;
        while(node) {
            console.log(node.value);
            node = node.next;
        }
    }
}

const linked = new LinkedList();
console.log(linked.addToHead("bitcoin"));
console.log(linked.addToHead("chicken"));
console.log(linked.addToHead("gym"));
console.log(linked.addToHead("car"));
console.log(linked.addToHead("girl"));
console.log(linked.addToHead("macbook"));
console.log(linked.addToHead("ms"));

console.log(linked.findValue("ms"));
console.log(linked.removeHead());
console.log(linked.findValue("ms"));
linked.printAll();