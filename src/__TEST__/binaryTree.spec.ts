import {describe, test, expect} from "vitest";
import {treeNode, BinaryTree} from "../binaryTree.ts";

describe("测试二叉树遍历", () => {
  const {createTreeNode, preOrder, inOrder, postOrder, levelOrder} = new BinaryTree();
  test("测试通过数组创建 TreeNode 节点", async () => {
    const createTreeNodeResult = createTreeNode([1, 2, 3, 4, 5, 6, 7]);
    // [1,[2,[4,5]],[3,[6,7]]]
    const tree = {
      value: 1,
      left: {value: 2, left: {value: 4}, right: {value: 5}},
      right: {value: 3, left: {value: 6}, right: {value: 7}}
    };

    console.dir(tree, {depth: null});
    expect(tree).deep.equal(createTreeNodeResult);
  })

  test("测试层级遍历[广度优先遍历]", async () => {
    const levelOrderResult = levelOrder(treeNode);
    console.log(levelOrderResult);
    expect(levelOrderResult).deep.equal([1, 2, 3, 4, 5, 6, 7]);
  })

  test("前序遍历[深度优先遍历]", async () => {
    const preOrderResult = preOrder(treeNode)
    console.log(preOrderResult)
    expect(preOrderResult).deep.equal([1, 2, 4, 5, 3, 6, 7])
  })

  test("中序遍历", async () => {
    const inOrderResult = inOrder(treeNode);
    console.log(inOrderResult);
    expect(inOrderResult).deep.equal([4, 2, 5, 1, 6, 3, 7]);
  })

  test("后序遍历", async () => {
    const postOrderResult = postOrder(treeNode);
    console.log(postOrderResult);
    expect(postOrderResult).deep.equal([4, 5, 2, 6, 7, 3, 1]);
  })
})