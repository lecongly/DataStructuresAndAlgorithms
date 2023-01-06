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

class Queue {
    first: Node | null;
    last: Node | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
        return this
    }

    dequeue() {
        if (!this.first) return null
        const temp = this.first
        this.first = this.first.next
        this.size--;
        if (this.size === 0) {
            this.last = null
        }
        return temp
    }
}

//T,S=O(1)

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue())