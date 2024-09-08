const treeNode: TreeNode = {
	value: 1,
	left: {
		value: 2,
		left: {
			value: 4,
		},
		right: {
			value: 5,
		},
	},
	right: {
		value: 3,
		left: {
			value: 6,
		},
		right: {
			value: 7,
		},
	},
};

class BinaryTree {
	/**
	 * user : Huangzhe
	 * date : 2020/7/30
	 * description : 创建二叉树结构
	 * @param arr { number[] }
	 * @returns { TreeNode[] }
	 */
	createTreeNode(arr: number[]): TreeNode[] {
		const tree = Object.create({});

		const _arr = arr.toSorted();
		// 初始化第一层的树结构
		tree.value = _arr.shift();

		// 在二叉树上插入数值
		const queue: TreeNode[] = [tree];
		while (_arr.length) {
			let node = queue.shift() as TreeNode;

			// 当左边没有数值时， 则添加节点
			if (!node.left) {
				const value = _arr.shift();
				if (value) {
					node.left = <TreeNode>{ value: value };
					queue.push(node.left);
				}
			}

			// 当右边没有数值时， 则添加节点
			if (!node.right) {
				const value = _arr.shift();
				if (value) {
					node.right = <TreeNode>{ value: value };
					queue.push(node.right);
				}
			}
		}

		return tree;
	}

	/**
	 * 层序遍历
	 * @param root {TreeNode | null}
	 * @return number[]
	 */
	levelOrder(root: TreeNode | null): number[] {
		const queue = [root];
		const list: number[] = [];

		while (queue.length) {
			const node = queue.shift() as TreeNode;

			// 添加遍历结果到 list 中
			list.push(node.value);

			// 检查子节点 ， 如果有子节点循环遍历

			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		return list;
	}

	/**
	 * 前序遍历
	 * @param root {TreeNode | null}
	 * @return number[]
	 */

	preOrder(root: TreeNode | null): number[] {
		const list: number[] = [];
		_preOrder(root);

		function _preOrder(root: TreeNode | null) {
			if (!root) return;
			list.push(root.value);
			root.left && _preOrder(root.left);
			root.right && _preOrder(root.right);
		}

		return list;
	}

	/**
	 * 中序遍历
	 * @param root {TreeNode | null}
	 * @return number[]
	 */
	inOrder(root: TreeNode | null): number[] {
		const list: number[] = [];
		_inOrder(root);

		function _inOrder(root: TreeNode | null) {
			if (!root) return;
			root.left && _inOrder(root.left);
			list.push(root.value);
			root.right && _inOrder(root.right);
		}

		return list;
	}

	/**
	 * 后序遍历
	 * @param root {TreeNode | null}
	 * @return number[]
	 */
	postOrder(root: TreeNode | null): number[] {
		const list: number[] = [];
		_postOrder(root);

		function _postOrder(root: TreeNode | null) {
			if (!root) return;
			root.left && _postOrder(root.left);
			root.right && _postOrder(root.right);
			list.push(root.value);
		}

		return list;
	}
}

export { treeNode, BinaryTree };
