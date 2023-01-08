function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    if (root == null) return result;
    result.push(root.val)
    result = result.concat(preorderTraversal(root.left));
    result = result.concat(preorderTraversal(root.right))
    return result
};