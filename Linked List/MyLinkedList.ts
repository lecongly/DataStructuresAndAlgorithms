export {}

class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(index: number): Node | null {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        let counter = 0;
        while (current && counter < index) {
            current = current.next;
            counter++;
        }
        return current || null;
    }

    addAtHead(value: number): void {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    addAtTail(value: number): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addAtIndex(index: number, value: number): void | string {
        if (index < 0 || index >= this.size) {
            return "Invalid index";
        }
        if (index === 0) {
            this.addAtHead(value);
            return;
        }

        if (index === this.size) {
            this.addAtTail(value);
            return;
        }

        const newNode = new Node(value);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.size++
    }

    deleteAtIndex(index: number): void | string {
        if (index < 0 || index >= this.size) {
            return "Invalid index";
        }
        if (index === 0) {
            let temp = this.head.next;
            this.head = temp
            this.size--;
            if (this.size === 0) {
                this.tail = null
            }
        }
        if (index === this.size - 1) {
            let newTail = this.get(this.size - 1)
            this.tail = newTail
            newTail.next = null;
            this.size--;
        }
        let prevNode = this.get(index - 1)
        let deleteNode = prevNode.next;
        prevNode.next = deleteNode.next;
        this.size--;
    }
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
console.log(list)