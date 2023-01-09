function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    let queue: TreeNode[] = [root];
    while (queue.length) {
        const current = queue.shift();
        let temp = current.right
        current.right = current.left
        current.left = temp;
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return root
};

function invertTree2(root: TreeNode): TreeNode {
    // base case
    if (root == null) return null;

    // swap the left and right children
    let left = root.left;
    root.left = root.right;
    root.right = left;

    // invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
}