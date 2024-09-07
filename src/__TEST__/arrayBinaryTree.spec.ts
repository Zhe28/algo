import { describe, expect, it } from "vitest";
import { ArrayBinaryTree } from "../arrayBinaryTree";

describe("数组二叉树", async () => {
  const tree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const tree2 = [1, 2, 3, 4, 5, 6, 7];
  const arrayBinaryTree = new ArrayBinaryTree(tree);
  console.log(tree2);
  it("检查二叉树长度", async () => {
    console.log(`二叉树长度为 ${arrayBinaryTree.size()}`);
    expect(arrayBinaryTree.size()).to.equal(tree.length);
  });

  it("查找父级索引", async () => {
    console.log(`二叉树3号索引父级索引为 ${arrayBinaryTree.parent(3)}`);
    expect(arrayBinaryTree.parent(3)).to.equal(1);
  });

  it("前序遍历", async () => {
    const result = [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15];
    console.log(arrayBinaryTree.preOrder());
    expect(arrayBinaryTree.preOrder()).to.deep.equal(result);
  });

  it("中序遍历", async () => {
    const res = [8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15];
    console.log(arrayBinaryTree.inOrder());
    expect(arrayBinaryTree.inOrder()).to.deep.equal(res);
  });

  it("后序遍历", async () => {
    const res = [8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1];
    console.log(arrayBinaryTree.postOrder());
    expect(arrayBinaryTree.postOrder()).to.deep.equal(res);
  });
});
