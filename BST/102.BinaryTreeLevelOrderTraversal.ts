function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];
    let queue: TreeNode[] = [];

    // base case
    if (root == null) return result;

    queue.push(root);
    while (queue.length > 0) {
        let levelSize = queue.length;
        let level: number[] = [];
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left != null) queue.push(node.left);
            if (node.right != null) queue.push(node.right);
        }
        result.push(level);
    }

    return result;
};