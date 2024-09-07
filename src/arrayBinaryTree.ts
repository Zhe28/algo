/**
 * @description 基于数组实现的二叉树
 */
export class ArrayBinaryTree {
  /**
   * @description 数组二叉树
   */
  tree: arrayBinaryTreeNode;

  /**
   * @constructor
   * @param arr { arrayBinaryTreeNode }
   */
  constructor(arr: arrayBinaryTreeNode) {
    this.tree = arr;
  }

  /**
   * @description 二叉树节点数量
   * @return {number}
   */
  size(): number {
    return this.tree.length;
  }

  /**
   * @description 索引位置数值
   * @param index {number}
   * @return {null | number}
   */
  value(index: number): null | number {
    if (index >= 0 && index < this.size()) {
      return this.tree[index];
    }
    return null;
  }

  /**
   * @description 左侧子节点索引
   * @param index {number}
   * @return {number}
   */
  left(index: number): number {
    return 2 * index + 1;
  }

  /**
   * @description 右侧子节点索引
   * @param index {number}
   * @return {number}
   */
  right(index: number): number {
    return 2 * index + 2;
  }

  /**
   * @description 父节点索引
   * @param index {number}
   * @return {number}
   */
  parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
   * @description 层序遍历
   * @return {arrayBinaryTreeNode}
   */
  levelOrder(): arrayBinaryTreeNode {
    const res: arrayBinaryTreeNode = [];
    this.tree.forEach((node: number | null): void => {
      node !== null && res.push(node);
    });
    return res;
  }

  private dfs(index: number, order: binaryTreeDFSType, res: (number | null)[]) {
    // 索引数值为null ， 返回 null;
    if (this.value(index) === null) return;

    order === "pre" && res.push(this.value(index));
    this.dfs(this.left(index), order, res);
    order === "in" && res.push(this.value(index));
    this.dfs(this.right(index), order, res);
    order === "post" && res.push(this.value(index));
  }

  /**
   * @description 前序遍历
   * @return {arrayBinaryTreeNode}
   */
  preOrder(): arrayBinaryTreeNode {
    const res: arrayBinaryTreeNode = [];
    this.dfs(0, "pre", res);
    return res;
  }

  /**
   * @description 中序遍历
   * @return {arrayBinaryTreeNode}
   */
  inOrder(): arrayBinaryTreeNode {
    const res: arrayBinaryTreeNode = [];
    this.dfs(0, "in", res);
    return res;
  }

  /**
   * @description 后序遍历
   * @return {arrayBinaryTreeNode}
   */
  postOrder(): arrayBinaryTreeNode {
    const res: arrayBinaryTreeNode = [];
    this.dfs(0, "post", res);
    return res;
  }
}
