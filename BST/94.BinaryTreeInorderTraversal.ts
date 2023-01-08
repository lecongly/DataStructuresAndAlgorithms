function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    if (root == null) return result;
    result = result.concat(inorderTraversal(root.left));
    result.push(root.val)
    result = result.concat(inorderTraversal(root.right))

    return result
};