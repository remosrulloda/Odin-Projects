class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

    returnHead() {
        return this.head;
    }

    returnTail() {
        return this.tail;
    }

    at(index) {

        if (index < 0 || index >= this.length) {
            throw new Error("index out of bounds");
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
        if (this.length === 0) throw new Error("No nodes in linked list!");

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let secondLastNode = this.at(this.length - 2);

            secondLastNode.nextNode = null;
            this.tail = secondLastNode;
        }

        this.length--;
    }

    contains(value) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < this.length) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < this.length) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < this.length) {
            result += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        result += 'null';
        return result;
    }
};

module.exports = LinkedList;