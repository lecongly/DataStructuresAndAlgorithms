export {}

class Node {
    value: number;
    next: Node | null;

    constructor(value) {
        this.value = value
        this.next = null
    }
}

//LIFO

class Stack {
    first: Node | null;
    last: Node | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    addAtBegin(value) {
        const node = new Node(value)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            let temp = this.first
            this.first = node
            this.first.next = temp
        }
        this.size++
        return this
    }

    removeFromBegin() {
        if (!this.first) return null;
        let temp = this.first;
        this.first = this.first.next
        this.size--
        if (this.size === 0) {
            this.last = null
        }
        return temp
    }
}