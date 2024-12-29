import Node from "./node.js"

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if(index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return currentNode;
    }

    pop() {
        if(!this.head) {
            return null;
        }

        if (this.size === 1) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.size = null;
            return removedNode;
        }

        let currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        const removedNode = this.tail;
        this.tail = currentNode;
        this.tail.nextNode = null;
        this.size--;

        return removedNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        return result + 'null';
    }

    inserAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Invalid index');
        }
        if (index === 0) {
            this.prepend(value);
            return
        }

        if (index === this.size) {
            this.append(value);
            return
        }

        const newNode = new Node;
        let prevNode = this.head;
        let currentIndex = 0
        while (currentIndex < index - 1) {
            prevNode = prevNode.nextNode;
            currentIndex++;
        }
        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;
        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            throw new Error('Invalid index')
        }
        if (index === 0) {
            this.head = this.head.nextNode;
            this.size--;
            if (this.size === 0) {
                this.tail = null;    
            }
            return;
        }
        let prevNode = this.head;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
            prevNode = prevNode.nextNode;
            currentIndex++;
        }
        prevNode.nextNode = prevNode.nextNode.nextNode;
        this.size--;
        if (index === this.size) {
            this.tail = prevNode
        }     
    }
}