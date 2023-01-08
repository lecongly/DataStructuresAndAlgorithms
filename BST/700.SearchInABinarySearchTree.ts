function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) return null;

    // return the root if the value is found
    if (root.val == val) return root;

    // search the right subtree if the value is greater than the root's value
    if (val > root.val) return searchBST(root.right, val);

    // search the left subtree if the value is less than the root's value
    return searchBST(root.left, val);
};