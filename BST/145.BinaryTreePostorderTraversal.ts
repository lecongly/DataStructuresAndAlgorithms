function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    if (root == null) return result;
    result = result.concat(postorderTraversal(root.left));
    result = result.concat(postorderTraversal(root.right))
    result.push(root.val)
    return result
};