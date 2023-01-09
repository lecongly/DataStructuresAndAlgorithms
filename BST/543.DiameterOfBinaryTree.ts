function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root == null) return 0;
    let maxDiameter = 0;
    const dfs = (node: TreeNode | null) => {
        if (!node) return -1;
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);
        let diameter = leftHeight + rightHeight + 1 + 1;
        maxDiameter = Math.max(maxDiameter, diameter)
        return Math.max(leftHeight, rightHeight) + 1
    }
    dfs(root);
    return maxDiameter
};