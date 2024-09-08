declare type TreeNode = {
	value: number;
	left?: TreeNode;
	right?: TreeNode;
};
/**
 * 二叉树的层序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * @param root {TreeNode | null} 二叉树的根节点
 * @return {number[]}
 * @description 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */
declare type LevelOrder = (root: TreeNode | null) => number[];

/**
 * 二叉树的前序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @param root {TreeNode | null} 二叉树的根节点
 * @return {number[]}
 * @description 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */
declare type PreOrder = (root: TreeNode | null) => number[];
/**
 * 二叉树的中序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @param root {TreeNode | null} 二叉树的根节点
 * @return {number[]}
 * @description 给你二叉树的根节点 root ，返回它节点值的 中序 遍历。
 */
declare type InOrder = (root: TreeNode | null) => number[];
/**
 * 二叉树的后序遍历
 * @see https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * @param root {TreeNode | null} 二叉树的根节点
 * @return {number[]}
 * @description 给你二叉树的根节点 root ，返回它节点值的 后序 遍历。
 */
declare type PostOrder = (root: TreeNode | null) => number[];
