export {}

class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: Node | null;

    constructor() {
        this.root = null
    }

    insert(value: number) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
            return this;
        }
        let tree = this.root
        while (true) {
            if (value < tree.value) {
                if (!tree.left) {
                    tree.left = node
                    return this
                }
                tree = tree.left
            } else {
                if (!tree.right) {
                    tree.right = node
                    return this
                }
                tree = tree.right
            }
        }
    }

    search(value: number): boolean {
        if (this.root === null) return false;
        let currentNode = this.root;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    remove(value: number): void {
        if (this.root === null) return;
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // Node to be removed has been found
                if (currentNode.left === null && currentNode.right === null) {
                    // Node to be removed is a leaf node
                    if (parentNode === null) {
                        // Node to be removed is the root node
                        this.root = null;
                    } else {
                        // Detach the node from the tree
                        if (parentNode.left === currentNode) {
                            parentNode.left = null;
                        } else {
                            parentNode.right = null;
                        }
                    }
                } else if (currentNode.left === null) {
                    // Node to be removed has only a right child
                    if (parentNode === null) {
                        // Node to be removed is the root node
                        this.root = currentNode.right;
                    } else {
                        // Replace the node with its right child
                        if (parentNode.left === currentNode) {
                            parentNode.left = currentNode.right;
                        } else {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else if (currentNode.right === null) {
                    // Node to be removed has only a left child
                    if (parentNode === null) {
                        // Node to be removed is the root node
                        this.root = currentNode.left;
                    } else {
                        // Replace the node with its left child
                        if (parentNode.left === currentNode) {
                            parentNode.left = currentNode.left;
                        } else {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else {
                    // Node to be removed has both left and right children
                    // Find the successor of the node (the smallest value in the right subtree)
                    let successorNode = currentNode.right;
                    let successorParentNode = currentNode;
                    while (successorNode.left !== null) {
                        successorParentNode = successorNode;
                        successorNode = successorNode.left;
                    }
                    // Replace the value of the node with the value of the successor
                    currentNode.value = successorNode.value;
                    // Remove the successor from the right subtree
                    if (successorParentNode.left === successorNode) {
                        successorParentNode.left = successorNode.right;
                    } else {
                        successorParentNode.right = successorNode.right;
                    }
                }
                return;
            }
        }
    }

    breadthFirstSearch(): number[] {
        const result = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (currentNode !== null) {
                result.push(currentNode.value);
                queue.push(currentNode.left, currentNode.right);
            }
        }
        return result;
    }

    inOrderTraversal(node: Node | null = this.root, result: number[] = []): number[] {
        if (node === null) return result;
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
        return result;
    }

    preOrderTraversal(node: Node | null = this.root, result: number[] = []): number[] {
        if (node === null) return result;
        result.push(node.value);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);
        return result;
    }

    postOrderTraversal(node: Node | null = this.root, result: number[] = []): number[] {
        if (node === null) return result;
        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.value);
        return result;
    }
}

const bst = new BST()

bst.insert(20);
bst.insert(6);
bst.insert(4);
bst.insert(8);
bst.insert(3);
bst.insert(24);
bst.insert(22);
bst.insert(21);
console.log(bst.search(5))
console.log(bst.breadthFirstSearch())

